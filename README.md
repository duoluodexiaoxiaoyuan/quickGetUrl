# quickGetUrl

一个直链跳转的谷歌插件

manifest.json是整个插件的功能及文件配置清单，非常重要。

static目录是放置整个插件的静态资源文件的，包括css、js、图片等等资源

template目录是放置整个插件的功能页面模板的。

Page Actions 与 Browser Actions 的区别就是 Page Actions 并不是在每个页面上都是有用的，它必须在特定的页面中插件功能才能使用。
这两种用户面界面分别对应manifest.json中的browser_action和page_action字段。

manifest.json 是整个插件的功能和文件配置清单，非常重要

images 存放的为插件的图标文件

_locales 存放的为插件的国际化语言脚本

scripts 存放的为js 文件

styles存放的为样式文件

html存放的html文件

//  "background":{"scripts":["background.js"]},
// 会一直常驻的后台JS或后台页面


# 我所有的插件都会写在这个仓库里面，然后通过分支来区分不同的插件
