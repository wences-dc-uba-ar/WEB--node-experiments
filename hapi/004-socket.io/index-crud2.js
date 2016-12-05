'use strict';

var Hapi = require('hapi');
var models = require('./models');

// create the server
var server = new Hapi.Server();
server.connection({ port : 3000 })


// routes
server.route(require('./lib/routes'));

models.sequelize.sync().then(function() {
  server.start(function() {
    console.log('Running');
  });

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
  });

});

