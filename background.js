chrome.action.onClicked.addListener(() => {
   // 打开google.com
   chrome.tabs.create({ url: 'https://www.google.com/' });
});