<h1>Introduction</h1>
This is a simple chat application developed using ionic
</br></br>
Refer below article for detail guidance (Recomended), </br>
https://medium.com/@shamique/simple-chat-application-using-ionic-and-socket-io-82d9b4605cc3

<h1>Pre-requisite</h1>
<ul>
  <li>NodeJs & ionic 2 installed in the machine</li>
</ul>

<h1>How to run ?</h1>
<h3>Chat Server</h3>
<ul>  
  <li>Create a directory for chat server and go to that folder</li>
  <li>run <code>npm init</code> and initiate a new NodeJs project</li>
  <li>Install socket.io: <code>npm install socket.io --save</code></li>
  <li>Create filename as <b>server.js</b> and add below code in it</li>

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
   
   <li>Run the chat server: <code>node server.js</code></li>
</ul>
</br>
<h3>Chat Client</h3>
<ul>
  <li>Clone the repo to your machine</li>
  <li>Go to the project folder and run <code>npm install</code></li>
  <li>run the project, <code>ionic serve</code></li>
</ul>
