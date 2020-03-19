export const dataList = {
    "count": 27,
    "rows": [
        {
            "createdAt": "2019-02-11 12:56:10",
            "updatedAt": "2020-03-11 04:43:57",
            "id": 42,
            "title": "HTTP - 浏览器输入 url 后 http 请求返回的完整过程",
            "content": "## 示意图\n\n![](https://user-gold-cdn.xitu.io/2018/11/20/167306e21f25ced5?w=1234&h=443&f=png&s=181984)\n\n## 检查缓存\n\n> 缓存就是把你之前访问的 web 资源，比如一些 js，css，图片什么的保存在你本机的内存或者磁盘当中。\n\n浏览器获取了这个 `url`，当然就去解析了，它先去缓存当中看看有没有，从 浏览器缓存-系统缓存-路由器缓存 当中查看，\n如果有从缓存当中显示页面， 如果没有缓存则进行 `DNS` 解析\n\n浏览器缓存相关链接：[HTTP - 缓存机制](https://gershonv.github.io/2018/11/23/http-cache/)\n\n这里重点介绍 浏览器中 [HTTP - 缓存机制](https://gershonv.github.io/2018/11/23/http-cache/)， 因为个人对系统缓存以及路由器缓存认识较少\n\n![](https://user-gold-cdn.xitu.io/2018/8/13/16531214dfa218be?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)\n\n- 缓存是否到时: `Cache-Control: max-age=xxx`\n- 缓存是否过期：`Expires` （如果设置）\n- 资源是否发生修改: `ETag`\n  - `If-None-Match` => 304 未修改\n- 文件的修改时间: `Last-Modified`\n  - `If-Modified-Since` => 304 未修改\n\n<!--more-->\n\n## DNS 解析\n\n> 在发送 `http` 之前，需要进行 `DNS` 解析即域名解析。\n> `DNS` 解析:域名到 `IP` 地址的转换过程。域名的解析工作由 `DNS` 服务器完成。解析后可以获取域名相应的 `IP` 地址\n\n根据 URL 找到对应的 IP 地址。这一步通常被称为 DNS 轮询，这里面是有缓存机制的。缓存的顺序依次为：浏览器缓存->操作系统缓存->路由器缓存->DNS 提供商缓存->DNS 提供商轮询。\n\n## 创建 TCP 链接\n\n[TCP 三次握手四次挥手](https://ge",
            "viewCount": 14,
            "tags": [
                {
                    "name": "HTTP"
                }
            ],
            "categories": [
                {
                    "name": "HTTP"
                }
            ],
            "comments": [
                
            ]
        },
        {
            "createdAt": "2019-02-11 12:55:47",
            "updatedAt": "2020-03-13 09:07:33",
            "id": 41,
            "title": "HTTP - keep-alive",
            "content": "## HTTP 协议是无状态的\n\n`HTTP` 协议是无状态的，指的是协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。也就是说，打开一个服务器上的网页和你之前打开这个服务器上的网页之间没有任何联系。`HTTP` 是一个无状态的面向连接的协议，无状态不代表 `HTTP` 不能保持 `TCP` 连接，更不能代表 `HTTP` 使用的是 `UDP` 协议（无连接）。\n\n## 什么是长连接、短连接？\n\n在 `HTTP/1.0` 中，默认使用的是短连接。也就是说，浏览器和服务器每进行一次 `HTTP` 操作，就要经过[三次握手](https://gershonv.github.io/2018/11/21/http-TCP/)建立一次连接，但任务结束就中断连接。\n\n客户端浏览器访问的某个 `HTML` 或其他类型的 `Web` 页中包含有其他的 `Web` 资源，如 JavaScript 文件、图像文件、CSS 文件等；当浏览器每遇到这样一个 Web 资源，就会建立一个 HTTP 会话。但从  `HTTP/1.1` 起，默认使用长连接，用以保持连接特性。使用长连接的 HTTP 协议，会在响应头有加入这行代码：\n\n```js\n'Connection': 'keep-alive'\n```\n<!--more-->\n\n## 实战\n\n- `test.html`\n\n```html\n<body>\n  <img src=\"/test1.jpg\" alt=\"\" /> <img src=\"/test2.jpg\" alt=\"\" />\n  <img src=\"/test3.jpg\" alt=\"\" /> <img src=\"/test4.jpg\" alt=\"\" />\n  <img src=\"/test5.jpg\" alt=\"\" /> <img src=\"/test6.jpg\" alt=\"\" />\n  <img src=\"/test7.jpg\" alt=\"\" /> <img src=\"/test11.jpg\" alt=\"\" />\n  <img src=\"/test12.jpg\" alt=\"\" /> <img src=\"/test13.jpg\" alt=\"\" />\n  <img src=\"/test14.jpg\" alt=\"\" /> <img src=\"/test15.jpg\" alt=\"\" /",
            "viewCount": 11,
            "tags": [
                {
                    "name": "HTTP"
                }
            ],
            "categories": [
                {
                    "name": "HTTP"
                }
            ],
            "comments": [
                {
                    "id": 105,
                    "replies": [
                        
                    ]
                },
                {
                    "id": 106,
                    "replies": [
                        {
                            "id": 38
                        }
                    ]
                },
                {
                    "id": 103,
                    "replies": [
                        
                    ]
                },
                {
                    "id": 104,
                    "replies": [
                        
                    ]
                }
            ]
        },      
    ]
}