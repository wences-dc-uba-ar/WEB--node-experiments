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

// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};

