This is source code of chat client. You need to create chat server as follow,

	var socket = require('socket.io'), http = require('http'),
  	server = http.createServer(), socket = socket.listen(server);

		socket.on('connection', function(connection) {
			console.log('User Connected');
   
			 connection.on('message', function(msg){
				 socket.emit('message', msg);
			 });
		});

		server.listen(3000, function(){
			console.log('Server started');
		});

<b> Make sure to install socket.io plugin to node chat server.</b> 

For detailed guidance on application visit : https://shamiquefarook.wordpress.com/2017/10/02/simple-chat-application-with-ionic-and-socket-io/
