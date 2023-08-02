# webSocketPlugin

这个分支实现了点击插件图标打开新的标签页,这里用的是3的版本

# manifest.json

"activeTab": 该权限允许您访问当前活动的选项卡信息，例如URL,标题和图标等。这对于需要在当前选项卡中执行某些操作的插件非常有用。

"scripting": 该权限允许您在网页上执行自定义JavaScript代码。这可以用于修改网页内容，添加新元素或与第三方API交互

"contextMenus": 该权限允许您向Chrome浏览器上下文菜单(右键菜单)中添加自定义菜单项。这可以用于为您的插件提供更多的交互方式，例如在右键菜单中添加"使用我的插件"选项。

[Why is chrome.browserAction.onClicked undefined?](https://www.gangofcoders.net/solution/why-is-chrome-browseraction-onclicked-undefined/)

