'use strict';

const env = require('../../config/env');

module.exports = (app, db) => {

	app.get('/routes', (req, res) => {
	  let links = [];
	  app._router.stack.forEach(route => {
	    if(route.route) {
	      Object.keys(route.route.methods).forEach( method => {
	        links.push(method+' '+req.protocol + '://' + req.get('host') + route.route.path);
	      });
	    }
	  });
	  res.send(JSON.stringify(links,null,2));
	  console.log(JSON.stringify(links,null,2));
	});
};
