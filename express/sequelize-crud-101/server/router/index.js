'use strict'

var fs = require('fs');

var dir = __dirname + '/routes';
var routes = [];
console.log(dir);

var files = fs.readdirSync(dir);
for (var i in files) {
	let name = files[i].split('.');
	if(name.pop() === 'js') {
		var fullPath = dir + '/' + files[i];
	    if (fs.statSync(fullPath).isFile()){
	        routes.push(require(fullPath));
	    }
	}
}

// route / index of all routes
routes.push(
	(app, db) => {
		app.get('/', (req, res) => {
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
	}
);

// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};

