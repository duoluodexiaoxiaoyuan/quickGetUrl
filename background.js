chrome.action.onClicked.addListener(() => {
  // 写一个if生产随机数，并判断随机数是奇数还是偶数做出判断
  var num = Math.floor(Math.random() * 10);
  if (num % 2 == 0) {
    chrome.action.setIcon({path:{
      200: 'img/success.png'
    }});
  } else {
    chrome.action.setIcon({path:{
      200: 'img/error.png'
    }});
  }
});