/* Or use this example tcp client written in node.js.  (Originated with 
example code from 
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */
var net = require('net');
 
var client = new net.Socket();
client.setTimeout(500);
client.setNoDelay(true);
client.connect(4443, '137.219.121.72', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.\n');
});
 
client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});
 
client.on('timeout', function(data) {
	console.log('timeout');
	client.destroy(); // kill client after server's response
});
 
client.on('close', function() {
	console.log('Connection closed');
});