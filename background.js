// var socket = new WebSocket("ws://127.0.0.1:8080");

// socket.onopen = function(event) {
//   console.log("WebSocket connected!");
// };

// socket.onmessage = function(event) {
//   console.log("Received message: " + event.data);
//   // 对接收到的数据进行判断，如果连接成功就显示成功的图标，否则显示失败的图标
// };

// socket.onclose = function(event) {
//   console.log("WebSocket disconnected!");
// };

chrome.action.onClicked.addListener(() => {
  // 浏览器开发QQ
  chrome.tabs.create({ url: 'vscode://' });



  // 写一个if生产随机数，并判断随机数是奇数还是偶数做出判断
  // var num = Math.floor(Math.random() * 10);
  // if (num % 2 == 0) {
  //   chrome.action.setIcon({path:{
  //     200: 'img/success.png'
  //   }});
  // } else {
  //   chrome.action.setIcon({path:{
  //     200: 'img/error.png'
  //   }});
  // }

  // chrome.action.setBadgeText(
  //   {text: '✅'}
  // )

  // chrome.action.setBadgeText(
  //   {text: '❎'}
  // )
});