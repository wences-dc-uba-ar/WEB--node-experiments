'use strict';

var log = require('debug')('boot:root!');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);

  log('boot root done!');
};
