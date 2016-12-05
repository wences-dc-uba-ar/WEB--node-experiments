'use strict';
var hapi = require('hapi');
var server = new hapi.Server();

server.connection({port: 3000});

var io = require('socket.io')(server.listener);

server.register(require('inert'),function(err){
    if(err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply.file('index.html');
        }
    });

    server.start(function(){
            console.log(server.info.uri);
    });
});

var count = 0;

io.on('connection', function(socket) {
   socket.emit('count', {count: count});
   socket.on('increase', function(data) {
       count++;
       console.log(count);
       io.sockets.emit('count', {count: count});
   });
});

