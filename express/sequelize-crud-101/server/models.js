'use strict'

var fs = require('fs');

var dir = __dirname + '/models';
var models = {};
var files = fs.readdirSync(dir);
for (var i in files) {
	let name = files[i].split('.');
	if(name.pop() === 'js') {
		name = name.join('.');
	    var fullPath = dir + '/' + files[i];
	    if (fs.statSync(fullPath).isFile()){
	        models[name] = require(fullPath);
	    }
	}
}

module.exports = models;

