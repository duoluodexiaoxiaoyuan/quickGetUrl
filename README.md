# webSocketPlugin

和启用的node的webSocket建立连接

# var socket = chrome.extension.getBackgroundPage().socket; 什么意思

这段代码是用于在popup.js文件中获取background.js文件中创建的WebSocket对象的方法。

在Chrome插件中，background.js文件是一个后台脚本，用于处理插件的核心逻辑，而popup.js文件是在插件弹出窗口中运行的脚本，用于显示用户界面和响应用户操作。

在这种情况下，由于WebSocket对象是在background.js中创建的，因此需要使用chrome.extension.getBackgroundPage()方法来获取background.js文件的全局窗口对象，然后通过该对象访问WebSocket对象。具体来说，chrome.extension.getBackgroundPage()方法返回一个代表background.js窗口对象的Window对象，您可以使用该对象访问background.js文件中定义的全局变量和函数。

因此，var socket = chrome.extension.getBackgroundPage().socket; 这行代码的作用是获取background.js文件中创建的WebSocket对象，并将其保存在socket变量中，以便在popup.js文件中使用该对象来发送和接收消息。


