var hapi = require('hapi');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'bpm',
    password: 'bpm',
    database: 'hapi'
});


var server = new hapi.Server();

server.connection({
	port: 3000
});

connection.connect();

server.register(require('vision'), function(err) {
	if(err) {
		throw err;
	}

	server.route({
		method: 'GET',
		path: '/',
		handler: function(request, reply) {
                    connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields){
                        if (err) {
                            throw err;
                        }

                        reply('hello ' + rows[0].solution);
                    });
		}
	});

});

server.start(function(){
	console.log(server.info.uri);
});
