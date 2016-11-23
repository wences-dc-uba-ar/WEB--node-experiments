siguiendo:
	https://groups.google.com/forum/#!topic/sailsjs/ALMxbKfnCIo


Hi,

I still haven't had time to package everything, but I figured I could just paste the hook I created and some basic instruction.
In the api/hooks, add a sequelize folder with a file named index.coffee (or js if that's your thing):
###
# sequelize hook
###

module.exports = ( sails ) ->
  global['Sequelize'] = require('sequelize')
  
  # TODO Add config to enable cls and configure namespace
  Sequelize.cls = require('continuation-local-storage').createNamespace('sails-sequelize-#{connection.database}')
  
  {
    
  initialize: ( next ) ->
    console.log "Using connection named #{sails.config.models.connection}"
    
    connection = sails.config.connections[sails.config.models.connection]
    if !connection?
      throw new Error("Connection '#{sails.config.models.connection}' not found in config/connections")
      
    connection.options ?= {}

    # Reformat the logged SQL to remove all attributes
    connection.options.logging = ( log ) ->
      if log.indexOf "Executing" == 0
        indexOfSelect = log.indexOf ": SELECT"
        if indexOfSelect > 0
          indexOfFrom = log.indexOf " FROM "
          console.log log.substring(0, indexOfSelect + 8) + " {}" + log.substring( indexOfFrom )
          return
      console.log log
      
    console.log "Connection details #{JSON.stringify(connection)}"
    if connection.url?
      console.log "via url"
      sequelize = new Sequelize( connection.url, connection.options )
    else
      sequelize = new Sequelize( connection.database, connection.username, connection.password, connection.options )
      
    # Keep the sequelize in the config
    global['sequelize'] = sequelize
      
    sails.modules.loadModels (err, models) ->
      return next(err) if err?
      
      # Load models and add them to global
      for modelName, modelDef of models
        console.log "Loading model '#{modelDef.globalId}'"
        global[modelDef.globalId] = sequelize.define( modelDef.globalId, modelDef.attributes, modelDef.options )
      
      # Define relations if any
      for modelName, modelDef of models
        if modelDef.associations?
          console.log "Loading associations for '#{modelDef.globalId}'"
          modelDef.associations?( modelDef )
        
      if connection.options.sync in [true, 'force']
        console.log "Will sync with force == #{connection.options.sync == 'force'}"
        sequelize.sync(
          force: connection.options.sync == 'force'
        ).nodeify(next)
    
  }

Then, you keep your model in the same folder but change the syntax a little bit to something like:

module.exports =

  attributes:
    date:
      type: Sequelize.DATE

    durationMs:
      type: Sequelize.INTEGER

    homeTeamScore:
      type: Sequelize.INTEGER

    awayTeamScore:
      type: Sequelize.INTEGER

  associations: () ->
    Game.League = Game.belongsTo League, {foreignKey: { allowNull: false }}
    
    Game.HomeTeam = Game.belongsTo Team, {as: 'HomeTeam'}
    Game.AwayTeam = Game.belongsTo Team, {as: 'AwayTeam'}

    Game.Location = Game.belongsTo Location, {foreignKey: { allowNull: false }}

    Game.GameSpots = Game.hasMany GameSpot, {onDelete:'CASCADE'}
    
    Game.GameSubstitutionRequests = Game.hasMany GameSubstitutionRequest, {onDelete:'CASCADE'}

  options:
    freezeTableName: true
    
    instanceMethods:
      # Return Promise<Game>
      lock: () ->
        Game.find( this.id,
          lock: Sequelize.Transaction.LOCK.UPDATE
        )

The hook will read attributes and options, and call associations so you can hook up your associations.

in your config/connections file, you should have something like:
module.exports.connections =
  memoryDb:
    database: 'maligue'
    options:
      sync: 'force'
      dialect: 'sqlite',
      storage: ':memory:'

Note the sync option can be: true, false, 'sync'.

I have converted the whole application to Sequelize and just love it. The maintainers are super responsive (typically get an answer within a few hours) and I still didn't hit something the library does not support. It also made me convert the whole application to promise instead of callback and this was a huge improvement to the codebase.
