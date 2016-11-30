'use strict';

var Hapi = require('hapi');
var models = require('./models');

// create the server
var server = new Hapi.Server();
server.connection({ port : 3000 })


// routes
server.route(require('./lib/routes'));

models.sequelize.sync().then(function() {

  // Now, register hapi-sequelize-crud2
  server.register({
    register: require('hapi-sequelize-crud2'),
    options: {
      prefix: 'c', // Global prefix for all routes
      scopePrefix: 's', // Prefix for model scope routes (see below)
      snakeCase: false, // Create routes with snake_case instead of default camelCase
      controllers: 'controllers/**/*.js', // Glob to handler controller override files (can be array) [see below]
      private: [] // Array of model names to exclude from route creation
    }
  }).then(function(data){
    console.log('then',data);
    server.start(function() {
      console.log('Server Start!');
    });
  }).catch(function(err){
    console.warn(err);
  });

});


server.register([
    {
      register: require('hapi-sequelized'),
      options: {
        database: 'dbName',
        user: 'root',
        pass: 'root',
        dialect: 'mysql',
        port: 8889,
        models: 'models/**/*.js',
        sequelize: {
          define: {
            underscoredAll: true
          }
         }
      }
    }
  ], function(err) {
    if (!err) {
      server.plugins['hapi-sequelized'].db.sequelize.sync().then(function () {
        server.start(function () {
          console.log('Server running at:', server.info.uri);
        });
      });
    }
  }
);
