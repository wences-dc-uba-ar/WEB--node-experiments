var Hapi = require('hapi');
var models = require('./models');
var await = require('await')

// create the server
var server = new Hapi.Server();
server.connection({ port : 3000 })

// routes
// server.route(require('./lib/routes'));

// models.sequelize.sync().then(function() {
//   server.start(function() {
//     console.log('Running on 3000');
//   });
// });

await server.register({
  register: require('hapi-sequelize'),
  options: {  }
});
 
// Then, define your associations 
// const db = server.plugins['hapi-sequelize'].db;
// const models = db.sequelize.models;
// associations(models); // pretend this function defines our associations 
 
// Now, register hapi-sequelize-crud2 
await server.register({
  register: require('hapi-sequelize-crud2'),
  options: {
    prefix: '', // Global prefix for all routes 
    scopePrefix: 's', // Prefix for model scope routes (see below) 
    snakeCase: false, // Create routes with snake_case instead of default camelCase 
    controllers: 'controllers/**/*.js', // Glob to handler controller override files (can be array) [see below] 
    private: [] // Array of model names to exclude from route creation 
  }
});