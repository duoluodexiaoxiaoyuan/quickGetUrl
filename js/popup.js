document.addEventListener("DOMContentLoaded", function() {
  var myButton = document.getElementById("myButton");
  myButton.addEventListener("click", function() {
    // 这里直接写一个alert弹框是直接在插件附近会出现一个弹框
    // alert('hello world')

    // 这里会在整个页面居中的地方出现弹框
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'alert("Hello, world!");'});
    });
  });
});
