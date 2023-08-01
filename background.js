var socket = new WebSocket("ws://127.0.0.1:8080");

socket.onopen = function(event) {
  console.log("WebSocket connected!");
};

socket.onmessage = function(event) {
  console.log("Received message: " + event.data);
};

socket.onclose = function(event) {
  console.log("WebSocket disconnected!");
};