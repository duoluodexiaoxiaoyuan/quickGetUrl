var socket = chrome.extension.getBackgroundPage().socket;
var messages = document.getElementById("messages");
var messageInput = document.getElementById("message");
var sendButton = document.getElementById("send");

sendButton.onclick = function(event) {
  event.preventDefault();
  var message = messageInput.value;
  socket.send(message);
  messageInput.value = "";
};

socket.onmessage = function(event) {
  var message = event.data;
  var messageElement = document.createElement("div");
  messageElement.innerHTML = message;
  messages.appendChild(messageElement);
};