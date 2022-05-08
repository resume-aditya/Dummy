//Websocket protocol (starting with wss:// or ws://) is a javascript specification which provides a way to maintain continous communication between server and client.
// this is a biderctional communication, with data sent in form of packets. few important functions are provided :
//onOpen, onclose, send, onmessage
let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

socket.onopen = function(e) {
  console.log("[open] Connection established");
  console.log("Sending to server");
  socket.send("My name is Aditya");
};

socket.onmessage = function(event) {
    console.log(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    console.log('[close] Connection died');
  }
};

socket.onerror = function(error) {
    console.log(`[error] ${error.message}`);
};