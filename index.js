/**
 * Created by apoorvmittal on 4/10/17.
 */
var app = require('express')(); // app is an function handler to which I can supply to a HTTP server
var http = require('http').Server(app);//supply he function handler to the HTTP server
var io = require('socket.io')(http);

//creating the website home
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});