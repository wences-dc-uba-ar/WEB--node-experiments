var hapi = require('hapi');
var Path = require('path');

var server = new hapi.Server();

server.register(require('inert'), function(err) {
	if(err) {
		throw err;
	}

	server.register(require('vision'), function(err) {
		if(err) {
			throw err;
		}

		server.route({
			method: 'GET',
			path: '/hi/{name}',
			handler: function(request, reply) {
				reply.view('index',{name: request.params.name});
			}
		});

		server.route({
			method: 'GET',
			path: '/wind.png',
			handler: function(request, reply) {
				reply.file('wind.png');
			}
		});

		server.views({
			engines: {
				html: require('handlebars')
			},
			relativeTo: __dirname,
			path: 'templates'
		});
	});
});

server.connection({
	port: 3000
});

server.start(function(){
	console.log(server.info.uri);
});
