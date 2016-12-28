'use strict';

const env = require('../../config/env');

module.exports = (app, db) => {

	app.get('/gauth', (req, res) => {
		res.header('Content-Type', 'text/html');
		res.send(`nada`);
	});

	app.get('/gauth2', (req, res) => {
		
		res.header('Content-Type', 'text/html');
		res.send(`nada`);
	});

};
