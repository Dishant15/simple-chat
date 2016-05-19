module.exports = function(socket, io) {
	// user connect message on socket creation
	io.emit('alert message', 'New user connected!!');

	socket.on('chat message', function(msg){
	    io.emit('chat message', msg);
	});

	// user discnnect message on socket disconnect
	socket.on('disconnect', function(){
		io.emit('alert message', 'User disconnected!!');
	});
}