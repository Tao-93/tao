(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{223:function(t,e,v){t.exports=v.p+"assets/img/currency_02.6d2ab420.png"},224:function(t,e,v){t.exports=v.p+"assets/img/currency_03.861c54cd.png"},225:function(t,e,v){t.exports=v.p+"assets/img/20180514133040211.1437af3c.jpg"},226:function(t,e,v){t.exports=v.p+"assets/img/20180514140519698.bf2100fc.jpg"},271:function(t,e,v){"use strict";v.r(e);var _=[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"计算机"}},[t._v("计算机")]),_("h2",{attrs:{id:"浏览器缓存机制"}},[t._v("浏览器缓存机制")]),_("h3",{attrs:{id:"缓存类型"}},[t._v("缓存类型")]),_("ol",[_("li",[_("p",[_("strong",[t._v("浏览器缓存")])]),_("p",[t._v("简单来说，浏览器缓存就是把一个已经请求过的Web资源（如html页面，图片，js，数据等）拷贝一份副本储存在浏览器中。缓存会根据进来的请求保存输出内容的副本。当下一个请求来到的时候，如果是相同的URL，缓存会根据缓存机制决定是直接使用副本响应访问请求，还是向源服务器再次发送请求。（包括强缓存和协商缓存）")])]),_("li",[_("p",[_("strong",[t._v("CDN缓存")])]),_("p",[t._v("CDN缓存一般是由网站管理员自己部署，为了让网站更容易扩展并获得更好的性能。通常情况下，浏览器先向CDN网关发起Web请求，网关服务器后面对应着一台或多台负载均衡源服务器，会根据它们的负载请求，动态将请求转发到合适的源服务器上。从浏览器角度来看，整个CDN就是一个源服务器，从这个层面来说，浏览器和服务器之间的缓存机制，在这种架构下同样适用。")])]),_("li",[_("p",[_("strong",[t._v("代理服务器缓存")])]),_("p",[t._v("代理服务器是浏览器和源服务器之间的中间服务器，浏览器先向这个中间服务器发起Web请求，经过处理后（比如权限验证，缓存匹配等），再将请求转发到源服务器。代理服务器缓存的运作原理跟浏览器的运作原理差不多，只是规模更大。")])]),_("li",[_("p",[_("strong",[t._v("数据库缓存")])]),_("p",[t._v("数据库缓存是指，当web应用的关系比较复杂，数据库中的表很多的时候，如果频繁进行数据库查询，很容易导致数据库不堪重荷。为了提供查询的性能，将查询后的数据放到内存中进行缓存，下次查询时，直接从内存缓存直接返回，提供响应效率。")])]),_("li",[_("p",[_("strong",[t._v("应用层缓存")])]),_("p",[t._v("应用层缓存是指我们在代码层面的缓存，通过代码逻辑。把曾经请求国的数据或资源等，缓存起来，再次需要数据是通过逻辑上的处理选择可用的缓存数据。")])])]),_("h3",{attrs:{id:"概念"}},[t._v("概念")]),_("ul",[_("li",[t._v("强缓存-------用户发送的请求直接从客户端获取，不发送请求去服务端，不予服务器发生交互。")]),_("li",[t._v("协商缓存----用户发送的请求，发送到服务器后，由服务器判定是否从缓存中获取资源。")]),_("li",[t._v("共同点：数据都是从客户端获取。")]),_("li",[t._v("不同点：强缓存不与服务器发生交互，二协商缓存需要与服务器交互。")])]),_("h3",{attrs:{id:"强缓存"}},[t._v("强缓存")]),_("ul",[_("li",[_("p",[t._v("谷歌控制台network选项中请求返回200，并且size显示from disk cache或from memory cache。")]),_("pre",[_("code",[t._v("  **from memory cache** 代表内存中的缓存\n\n  **from disk cache** 代表硬盘中的缓存\n  \n  浏览器读取缓存的顺序为 memory---\x3edisk。\n  \n  在浏览器中，浏览器会在js和图片等文件解析执行后直接存入内存缓存中，那么当刷新页面时只需直接从内存缓存中读取(from memory cache)；而css文件则会存入硬盘文件中，所以每次渲染页面都需要从硬盘读取缓存(from disk cache)。\n")])])]),_("li",[_("p",[t._v("相关header")]),_("ul",[_("li",[_("p",[_("strong",[t._v("expires")]),t._v("：reponse header 里的过期时间，浏览器再次加载资源时，没如果在这个过期时间内，则命中强缓存。它的值为一个绝对时间的GMT格式的时间字符串，比如：Expires：Sat, 29 Dec 2018 09:10:50 GMT")])]),_("li",[_("p",[_("strong",[t._v("Cache-Control")]),t._v("：在HTTP/1.1中，Cache-Control主要控制网页缓存。比如当Cache-concral：max-age300表示这个请求正确返回时间（浏览器也会记录下来）的5分钟再次加载资源，就会你命中强缓存。常见6个属性：")]),_("ul",[_("li",[t._v("publice：所有内容都将被缓存（客户端和代理服务器都可缓存）。具体来说响应可被任何中间节点缓存，如 Browser <-- proxy1 <--  proxy2 <-- Server，中间的proxy可以缓存资源，比如下次再请求同一资源proxy1直接把自己缓存的东西给 Browser 而不再向proxy2要。")]),_("li",[t._v("private：所有内容只有客户端可以缓存，Cache-Control的默认取值。具体来说，表示中间节点不允许缓存，对于Browser <-- proxy1 <-- proxy2 <-- Server，proxy 会老老实实把Server 返回的数据发送给proxy1,自己不缓存任何数据。当下次Browser再次请求时proxy会做好请求转发而不是自作主张给自己缓存的数据。")]),_("li",[t._v("no-cache：客户端缓存内容，是否使用缓存则需要经过协商缓存来验证决定。表示不使用 Cache-Control的缓存控制方式做前置验证，而是使用 Etag 或者Last-Modified字段来控制缓存。需要注意的是，no-cache这个名字有一点误导。设置了no-cache之后，并不是说浏览器就不再缓存数据，只是浏览器在使用缓存数据时，需要先确认一下数据是否还跟服务器保持一致。")]),_("li",[t._v("no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存")]),_("li",[t._v("max-age=xxx (xxx is numeric)表示缓存内容将在xxx秒后失效")]),_("li",[t._v("s-maxage：（单位为s)：同max-age，只用于共享缓存（比如CDN缓存）。比如当s-maxage=60时，在这60秒中，即使更新了CDN的内容，浏览器也不会进行请求。max-age用于普通缓存，而s-maxage用于代理缓存。"),_("strong",[t._v("s-maxage的优先级高于max-age")]),t._v("。如果存在s-maxage，则会覆盖掉max-age和Expires header。")])]),_("p",[_("img",{attrs:{src:v(223),alt:""}})]),_("pre",[_("code",[t._v("**Expires和Cache-Control两者对比**：区别在于 Expires 是http1.0的产物，Cache-Control是http1.1的产物，**两者同时存在的话，Cache-Control优先级高于Expires**；在某些不支持HTTP1.1的环境下，Expires就会发挥用处。所以Expires其实是过时的产物，现阶段它的存在只是一种兼容性的写法。\n")])])])])])]),_("p",[t._v("强缓存判断是否缓存的依据来自于是否超出某个时间或者某个时间段，而不关心服务器端文件是否已经更新，这可能会导致加载文件不是服务器端最新的内容，"),_("strong",[t._v("获知服务器端内容是否已经发生了更新需要用到协商缓存策略")])]),_("h3",{attrs:{id:"协商缓存"}},[t._v("协商缓存")]),_("ul",[_("li",[_("p",[t._v("协商缓存就是强制缓存失败后，浏览器携带缓存标识想服务器发送请求，由服务器根据缓存标识决定是否使用缓存的过程，主要以下两种情况：")]),_("ul",[_("li",[t._v("协商缓存生效返回304和Not Modified")]),_("li",[t._v("协商缓存失效，返回200和请求结果")])])]),_("li",[_("p",[t._v("相关header")]),_("ul",[_("li",[_("p",[t._v("Last-Modified和Modified-Since")]),_("p",[t._v("浏览器第一次访问资源时，服务器返回资源同时，在response header中添加Last-Modified的header，值是这个资源在服务器的最后修改时间，浏览器接收后缓存文件和header；")]),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("last-modified: Mon, 19 Nov 2018 12:04:48 GMT\n")])])]),_("p",[t._v("浏览器下一次请求这个资源，浏览器检测到有 Last-Modified这个header，于是添加If-Modified-Since这个header，值就是Last-Modified中的值；服务器再次收到这个资源请求，会根据 If-Modified-Since 中的值与服务器中这个资源的最后修改时间对比，如果没有变化，返回304和空的响应体，直接从缓存读取，如果If-Modified-Since的时间小于服务器中这个资源的最后修改时间，说明文件有更新，于是返回新的资源文件和200。")])]),_("li",[_("p",[t._v("ETag和If-None-Match")]),_("p",[t._v("Etag是上一次加载资源时，服务器返回的response header，是对该资源的一种唯一标识，只要资源有变化，Etag就会重新生成。浏览器在下一次加载资源向服务器发送请求时，会将上一次返回的Etag值放到request header里的If-None-Match里，服务器只需要比较客户端传来的If-None-Match跟自己服务器上该资源的ETag是否一致，就能很好地判断资源相对客户端而言是否被修改过了。如果服务器发现ETag匹配不上，那么直接以常规GET 200回包形式将新的资源（当然也包括了新的ETag）发给客户端；如果ETag是一致的，则直接返回304知会客户端直接使用本地缓存即可。")]),_("p",[_("strong",[t._v("Etag与Lat-Modified")]),t._v(" 对比：")])])]),_("ol",[_("li",[t._v("精度。Etag优于Lat-Modified。Last-Modified的时间单位是秒，如果某个文件在1秒内改变了多次，那么他们的Last-Modified其实并没有体现出来修改，但是Etag每次都会改变确保了精度；如果是负载均衡的服务器，各个服务器生成的Last-Modified也有可能不一致。")]),_("li",[t._v("性能。Etag逊于Lat-Modified,Last-Modified只需要记录时间，而Etag需要服务器通过算法来计算出一个hash值。")]),_("li",[t._v("优先级，服务器校验有限Etag。")])])])]),_("h3",{attrs:{id:"缓存机制"}},[t._v("缓存机制")]),_("p",[_("strong",[t._v("强制缓存优先于协商缓存进行，若强制缓存(Expires和Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，返回200，重新返回资源和缓存标识，再存入浏览器缓存中；生效则返回304，继续使用缓存")]),t._v("。")]),_("p",[_("img",{attrs:{src:v(224),alt:""}})]),_("h3",{attrs:{id:"用户行为对浏览器缓存的影响"}},[t._v("用户行为对浏览器缓存的影响")]),_("p",[t._v("如果资源已经被浏览器缓存下来，在缓存失效之前，再次请求时，默认会先检查是否命中强缓存，如果强缓存命中则直接读取缓存，如果强缓存没有命中则发请求到服务器检查是否命中协商缓存，如果协商缓存命中，则告诉浏览器还是可以从缓存读取，否则才从服务器返回最新的资源。这是默认的处理方式，这个方式可能被浏览器的行为改变：")]),_("ol",[_("li",[t._v("地址栏访问，链接跳转是正常用户行为，将会触发浏览器缓存机制；")]),_("li",[t._v("F5刷新，浏览器会设置max-age=0，跳过强缓存判断，会进行协商缓存判断；")]),_("li",[t._v("ctrl+F5刷新，跳过强缓存和协商缓存，直接从服务器拉取资源。")])]),_("h2",{attrs:{id:"tcp链接与释放（三次握手没四次挥手）"}},[t._v("TCP链接与释放（三次握手没四次挥手）")]),_("p",[t._v("TCP是"),_("strong",[t._v("主机对主机层的传输控制协议")]),t._v("，提供可靠的连接服务，采用三次握手确认建立一个连接，与之相反的，采用四次挥手来断开连接：\n"),_("strong",[t._v("TCP标志位")]),t._v("有6种标示，即：SYN(建立联机) 、 ACK(确认) 、 PSH(传送) 、 FIN(f结束) 、 RST(重置) 、 URG(紧急) 、 Sequence number(顺序号码) 、 Acknowledge number(确认号码)。")]),_("p",[_("strong",[t._v("TCP链接三个阶段：")])]),_("ol",[_("li",[t._v("建立链接")]),_("li",[t._v("数据传输")]),_("li",[t._v("释放链接")])]),_("p",[t._v("客户（client）：主动发起连接建立的应用进程。\n服务器（server）：被动等待连接建立的应用进程。")]),_("h3",{attrs:{id:"三次握手"}},[t._v("三次握手")]),_("p",[t._v("为了准确无误的将数据发送到指定IP处，TCP协议采用了三次握手的策略，如下步骤所示：")]),_("ol",[_("li",[t._v("客户端采用TCP协议将带有SYN标志的数据包发送给服务器，等待服务器的确认。")]),_("li",[t._v("服务器端在收到SYN的数据包后，必须确认SYN，即自己发送的ACK标志，同时，自己也将会向客户端发送一个SYN标志。")]),_("li",[t._v("客户端在接收到服务器短的SYN+ACK包后，自己会向服务器发送ACK包，完成三次握手。那么客户端和服务器正式建立了连接，开始传输数据。")])]),_("p",[_("img",{attrs:{src:v(225),alt:""}})]),_("h3",{attrs:{id:"四次挥手"}},[t._v("四次挥手")]),_("p",[t._v("用来断开服务器和客户端之间的通信的，之所以要断开连接，是因为TCP/IP 协议是要占用端口号的，而计算机的端口却是有限的，不进行断开的话，势必会造成计算机资源的浪费。")]),_("ol",[_("li",[t._v("在整个通信的过程中，谁先发起请求，谁就是客户端。\n当客户端的数据传输到尾部时，客户端向服务器发送带有FIN标志的数据包，使其明白自己准备断开通信了。")]),_("li",[t._v("因为TCP的通信是使用全双工通信的WebSocket，所以在断开连接的时候也应该是双向的；当服务器收到带有FIN标志的数据包时，其必不会直接发送FIN标志断开通信的请求，而是先发送一个带有ACK标志的应答信息，使客户端明白服务器还有数据要进行发送。")]),_("li",[t._v("当 服务器的数据发送完成后，向客户端发送带有FIN标志的数据包，通知客户端断开连接。")]),_("li",[t._v("当客户端收到FIN后，担心网络上某些不可控制的因素导致服务器不知道他要断开连接，会发送ACK进行确认，同时把自己设置成TIME_WAIT状态并启动定时器，在TCP的定时器到达后客户端并没有接收到请求，会重新发送；当服务器收到请求后就断开连接；当客户端等待2MLS（两倍报文最大生存时间）后，没有收到请求重传的请求后，客户端这边就断开连接，整个TCP通信就结束了。")])]),_("p",[_("img",{attrs:{src:v(226),alt:""}})]),_("h3",{attrs:{id:"三次握手为什么不能改成两次握手？"}},[t._v("三次握手为什么不能改成两次握手？")]),_("p",[t._v("解：三次握手中的每一次都是必须的。如果是两次握手，在第二次结束后，服务器并不能保证客户端已经收到了第二次的请求，如此一来的话，服务器会一直保存着这个通信过程，因为TCP通信都是要占用端口的，造成了一定的资源浪费。所以，就一定要让客户端来发送ACK的确认请求。")]),_("h3",{attrs:{id:"关闭的时候为什么会是四次挥手？"}},[t._v("关闭的时候为什么会是四次挥手？")]),_("p",[t._v("解：四次挥手不能像三次握手一样，三次握手可以将ACK+SYN 一起发送，ACK用于确认信息，SYN却是用来建立联机的；四次挥手中ACK是不能和FIN一起发送，ACK只是告诉客户端确认我收到了，等我将数据发送完毕之后会向其发送FIN的标志，所以四次挥手是不能够改变的。")]),_("h2",{attrs:{id:"http"}},[t._v("HTTP")]),_("h3",{attrs:{id:"简介："}},[t._v("简介：")]),_("p",[t._v("http请求是一个标准的"),_("strong",[t._v("客户端服务请求模式")]),t._v("，也是常说的C/S结构：")]),_("p",[t._v("HTTP协议是Hyper Text Transfer Protocol（超文本传输协议）的缩写,是用于从万维网服务器传输文本到本地浏览器的传送协议。")]),_("p",[t._v("HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。")]),_("p",[t._v("HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。")]),_("p",[t._v("HTTP 协议是个无状态协议，不会保存状态。")]),_("h3",{attrs:{id:"特点："}},[t._v("特点：")]),_("ol",[_("li",[t._v("简单快速：客户端向服务端请求服务时，只需传送请求反方法和路径。请求方法：GET ,POST , HEAD，DELETE。含义分别是获取、修改、上传、删除，其中GET方式仅仅为获取服务器资源，方式较为简单，因此在请求方式为GET的HTTP请求数据中，请求正文部分可以省略，直接将想要获取的资源添加到URL中。")]),_("li",[t._v("灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。")]),_("li",[t._v("无连接：限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。")]),_("li",[t._v("无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。")]),_("li",[t._v("支持B/S及C/S模式：")])]),_("h3",{attrs:{id:"http请求"}},[t._v("HTTP请求")]),_("ol",[_("li",[t._v("请求行，说明请求类型，访问资源以及使用HTTP的版本。")]),_("li",[t._v("请求头部，紧接着请求行（即第一行）之后的部分，用来说明服务器要使用的附加信息")]),_("li",[t._v("空行，请求头部后面的空行是必须的")]),_("li",[t._v("请求数据也叫主体，可以添加任意的其他数据。")])]),_("p",[_("strong",[t._v("栗子")])]),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("POST / HTTP1.1\nHost:www.wrox.com\nUser-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)\nContent-Type:application/x-www-form-urlencoded\nContent-Length:40\nConnection: Keep-Alive\n\nname=Professional%20Ajax&publisher=Wiley\n")])])]),_("p",[t._v("第一部分：请求行，是post请求，http1.1版本。\n第二部分：请求头部，第二行至第六行。\n第三部分：空行，第七行的空行。\n第四部分：请求数据，第八行。")]),_("h3",{attrs:{id:"http响应"}},[t._v("HTTP响应")]),_("ol",[_("li",[t._v("状态行")]),_("li",[t._v("消息报头")]),_("li",[t._v("空行")]),_("li",[t._v("响应正文")])]),_("p",[_("strong",[t._v("栗子")])]),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("HTTP/1.1 200 OK\nDate: Fri, 22 May 2009 06:07:21 GMT\nContent-Type: text/html; charset=UTF-8\n\n<html>\n      <head></head>\n      <body>\n            \x3c!--body goes here--\x3e\n      </body>\n</html>\n")])])]),_("p",[t._v("第一部分：状态行，由HTTP协议版本号， 状态码， 状态消息 三部分组成。")]),_("p",[t._v("​                   HTTP版本为1.1版本，状态码为200，状态消息为（ok）")]),_("p",[t._v("第二部分：消息报头，用来说明客户端要使用的一些附加信息")]),_("p",[t._v("​                第二行和第三行为消息报头，Date:生成响应的日期和时间；Content-Type:指定了MIME类型的              HTML(text/html),编码类型是UTF-8")]),_("p",[t._v("第三部分：空行，消息报头后面的空行是必须的\n第四部分：响应正文，服务器返回给客户端的文本信息。")]),_("p",[t._v("​                  空行后面的html部分为响应正文。")]),_("h3",{attrs:{id:"常见状态码"}},[t._v("常见状态码")]),_("p",[_("strong",[t._v("2XX 成功")])]),_("ul",[_("li",[t._v("200 OK，表示从客户端发来的请求在服务器端被正确处理")]),_("li",[t._v("204 No content，表示请求成功，但响应报文不含实体的主体部分")]),_("li",[t._v("205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容")]),_("li",[t._v("206 Partial Content，进行范围请求")])]),_("p",[_("strong",[t._v("3XX 重定向")])]),_("ul",[_("li",[t._v("301 moved permanently，永久性重定向，表示资源已被分配了新的 URL")]),_("li",[t._v("302 found，临时性重定向，表示资源临时被分配了新的 URL")]),_("li",[t._v("303 see other，表示资源存在着另一个 URL，应使用 GET 方法丁香获取资源")]),_("li",[t._v("304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况//代表上次的文档已经被缓存了， 还可以继续使用，")]),_("li",[t._v("307 temporary redirect，临时重定向，和302含义类似，但是期望客户端保持请求方法不变向新的地址发出请求")])]),_("p",[_("strong",[t._v("4XX 客户端错误")])]),_("ul",[_("li",[t._v("400 bad request，请求报文存在语法错误")]),_("li",[t._v("401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息")]),_("li",[t._v("403 forbidden，表示对请求资源的访问被服务器拒绝")]),_("li",[t._v("404 not found，表示在服务器上没有找到请求的资源")])]),_("p",[_("strong",[t._v("5XX 服务器错误")])]),_("ul",[_("li",[t._v("500 internal sever error，表示服务器端在执行请求时发生了错误")]),_("li",[t._v("501 Not Implemented，表示服务器不支持当前请求所需要的某个功能")]),_("li",[t._v("503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求")])]),_("h3",{attrs:{id:"http-头部"}},[t._v("HTTP 头部")]),_("table",[_("thead",[_("tr",[_("th",[t._v("通用字段")]),_("th",[t._v("作用")])])]),_("tbody",[_("tr",[_("td",[t._v("Cache-Control")]),_("td",[t._v("控制缓存的行为")])]),_("tr",[_("td",[t._v("Connection")]),_("td",[t._v("浏览器想要优先使用的连接类型，比如 "),_("code",[t._v("keep-alive")])])]),_("tr",[_("td",[t._v("Date")]),_("td",[t._v("创建报文时间")])]),_("tr",[_("td",[t._v("Pragma")]),_("td",[t._v("报文指令")])]),_("tr",[_("td",[t._v("Via")]),_("td",[t._v("代理服务器相关信息")])]),_("tr",[_("td",[t._v("Transfer-Encoding")]),_("td",[t._v("传输编码方式")])]),_("tr",[_("td",[t._v("Upgrade")]),_("td",[t._v("要求客户端升级协议")])]),_("tr",[_("td",[t._v("Warning")]),_("td",[t._v("在内容中可能存在错误")])])])]),_("table",[_("thead",[_("tr",[_("th",[t._v("请求字段")]),_("th",[t._v("作用")])])]),_("tbody",[_("tr",[_("td",[t._v("Accept")]),_("td",[t._v("能正确接收的媒体类型")])]),_("tr",[_("td",[t._v("Accept-Charset")]),_("td",[t._v("能正确接收的字符集")])]),_("tr",[_("td",[t._v("Accept-Encoding")]),_("td",[t._v("能正确接收的编码格式列表")])]),_("tr",[_("td",[t._v("Accept-Language")]),_("td",[t._v("能正确接收的语言列表")])]),_("tr",[_("td",[t._v("Expect")]),_("td",[t._v("期待服务端的指定行为")])]),_("tr",[_("td",[t._v("From")]),_("td",[t._v("请求方邮箱地址")])]),_("tr",[_("td",[t._v("Host")]),_("td",[t._v("服务器的域名")])]),_("tr",[_("td",[t._v("If-Match")]),_("td",[t._v("两端资源标记比较")])]),_("tr",[_("td",[t._v("If-Modified-Since")]),_("td",[t._v("本地资源未修改返回 304（比较时间）")])]),_("tr",[_("td",[t._v("If-None-Match")]),_("td",[t._v("本地资源未修改返回 304（比较标记）")])]),_("tr",[_("td",[t._v("User-Agent")]),_("td",[t._v("客户端信息")])]),_("tr",[_("td",[t._v("Max-Forwards")]),_("td",[t._v("限制可被代理及网关转发的次数")])]),_("tr",[_("td",[t._v("Proxy-Authorization")]),_("td",[t._v("向代理服务器发送验证信息")])]),_("tr",[_("td",[t._v("Range")]),_("td",[t._v("请求某个内容的一部分")])]),_("tr",[_("td",[t._v("Referer")]),_("td",[t._v("表示浏览器所访问的前一个页面")])]),_("tr",[_("td",[t._v("TE")]),_("td",[t._v("传输编码方式")])])])]),_("table",[_("thead",[_("tr",[_("th",[t._v("响应字段")]),_("th",[t._v("作用")])])]),_("tbody",[_("tr",[_("td",[t._v("Accept-Ranges")]),_("td",[t._v("是否支持某些种类的范围")])]),_("tr",[_("td",[t._v("Age")]),_("td",[t._v("资源在代理缓存中存在的时间")])]),_("tr",[_("td",[t._v("ETag")]),_("td",[t._v("资源标识")])]),_("tr",[_("td",[t._v("Location")]),_("td",[t._v("客户端重定向到某个 URL")])]),_("tr",[_("td",[t._v("Proxy-Authenticate")]),_("td",[t._v("向代理服务器发送验证信息")])]),_("tr",[_("td",[t._v("Server")]),_("td",[t._v("服务器名字")])]),_("tr",[_("td",[t._v("WWW-Authenticate")]),_("td",[t._v("获取资源需要的验证信息")])])])]),_("table",[_("thead",[_("tr",[_("th",[t._v("实体字段")]),_("th",[t._v("作用")])])]),_("tbody",[_("tr",[_("td",[t._v("Allow")]),_("td",[t._v("资源的正确请求方式")])]),_("tr",[_("td",[t._v("Content-Encoding")]),_("td",[t._v("内容的编码格式")])]),_("tr",[_("td",[t._v("Content-Language")]),_("td",[t._v("内容使用的语言")])]),_("tr",[_("td",[t._v("Content-Length")]),_("td",[t._v("request body 长度")])]),_("tr",[_("td",[t._v("Content-Location")]),_("td",[t._v("返回数据的备用地址")])]),_("tr",[_("td",[t._v("Content-MD5")]),_("td",[t._v("Base64加密格式的内容 MD5检验值")])]),_("tr",[_("td",[t._v("Content-Range")]),_("td",[t._v("内容的位置范围")])]),_("tr",[_("td",[t._v("Content-Type")]),_("td",[t._v("内容的媒体类型")])]),_("tr",[_("td",[t._v("Expires")]),_("td",[t._v("内容的过期时间")])]),_("tr",[_("td",[t._v("Last_modified")]),_("td",[t._v("内容的最后修改时间")])])])]),_("h3",{attrs:{id:"get与post区别"}},[t._v("GET与POST区别")]),_("ul",[_("li",[t._v("GET从指定的资源请求数据，POST 向指定的资源提交要被处理的数据。")]),_("li",[t._v("GET在浏览器回退时是无害的，而POST会再次提交请求。")]),_("li",[t._v("GET产生的URL地址可以被当作书签，而POST不可以。")]),_("li",[t._v("GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。")]),_("li",[_("strong",[t._v("GET请求会被浏览器主动cache，而POST不会，除非手动设置")]),t._v("。")]),_("li",[t._v("URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的。")]),_("li",[t._v("对参数的数据类型，GET只接受ASCII字符，而POST支持更多的编码类型且不对数据类型限制。")]),_("li",[t._v("GET参数通过URL传递么，不适合用来传递敏感信息，POST放在Request body中，可以传输更多数据且相对安全。")]),_("li",[t._v("GET产生一个TCP数据包，浏览器会把http header和data一并发送出去，服务器响应200(返回数据); POST产生两个TCP数据包，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok(返回数据)。")])]),_("h3",{attrs:{id:"url详解"}},[t._v("URL详解")]),_("p",[t._v("HTTP使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。URL是一种特殊类型的URI，包含了用于查找某个资源的足够的信息URL ,全称是UniformResourceLocator, 中文叫统一资源定位符,是互联网上用来标识某一处资源的地址。")]),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("schema://host          [:port#]/path/.../    [?query-string][#anchor]\nhttps ://www.AlexTao.com:808080/news/index.asp?ID=06&page=111#name\n")])])]),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),_("th",[t._v("解释")])])]),_("tbody",[_("tr",[_("td",[t._v("scheme")]),_("td",[t._v("协议（http，HTTPS，ftp）")])]),_("tr",[_("td",[t._v("host")]),_("td",[t._v("IP地址或者域名")])]),_("tr",[_("td",[t._v("port#")]),_("td",[t._v("HTTP默认端口80，")])]),_("tr",[_("td",[t._v("path")]),_("td",[t._v("访问资源的路径")])]),_("tr",[_("td",[t._v("query-string")]),_("td",[t._v("发送服务器的数据")])]),_("tr",[_("td",[t._v("anchor")]),_("td",[t._v("锚链接")])])])]),_("h3",{attrs:{id:"http-请求-响应的步骤："}},[t._v("HTTP 请求/响应的步骤：")]),_("ol",[_("li",[_("p",[t._v("浏览器向 DNS 服务器请求解析该 URL 中的域名所对应的 IP 地址;(DNS)")]),_("p",[_("strong",[t._v("DNS查找过程如下")]),t._v("：")]),_("ol",[_("li",[_("strong",[t._v("浏览器缓存 –")]),t._v(" 浏览器会缓存DNS记录一段时间。 有趣的是，操作系统没有告诉浏览器储存DNS记录的时间，这样不同浏览器会储存个自固定的一个时间（2分钟到30分钟不等）。")]),_("li",[_("strong",[t._v("系统缓存")]),t._v(" – 如果在浏览器缓存里没有找到需要的记录，浏览器会做一个系统调用（windows里是gethostbyname）。这样便可获得系统缓存中的记录。")]),_("li",[_("strong",[t._v("路由器缓存")]),t._v(" – 接着，前面的查询请求发向路由器，它一般会有自己的DNS缓存。")]),_("li",[_("strong",[t._v("ISP DNS 缓存")]),t._v(" – 接下来要check的就是ISP缓存DNS的服务器。在这一般都能找到相应的缓存记录。")]),_("li",[_("strong",[t._v("递归搜索")]),t._v(" – 你的ISP的DNS服务器从跟域名服务器开始进行递归搜索，从.com顶级域名服务器到Facebook的域名服务器。一般DNS服务器的缓存中会有.com域名服务器中的域名，所以到顶级服务器的匹配过程不是那么必要了。")])])]),_("li",[_("p",[t._v("解析出 IP 地址后，根据该 IP 地址和默认端口 80，和服务器建立TCP连接;")])]),_("li",[_("p",[t._v("浏览器发出读取文件(URL 中域名后面部分对应的文件)的HTTP 请求，该请求报文作为 TCP 三次握手的第三个报文的数据发送给服务器;")])]),_("li",[_("p",[t._v("服务器对浏览器请求作出响应，并把对应的 html 文本发送给浏览器;")])]),_("li",[_("p",[t._v("释放 TCP连接;")])]),_("li",[_("p",[t._v("浏览器将该 html 文本并显示内容;")])])]),_("h2",{attrs:{id:"https"}},[t._v("HTTPS")]),_("p",[t._v("超文本传输安全协议（"),_("code",[t._v("HTTPS")]),t._v("，常称为 "),_("code",[t._v("HTTP over TLS/SSL")]),t._v("）是一种通过计算机网络进行安全通信的传输协议。"),_("code",[t._v("HTTPS")]),t._v(" 经由 "),_("code",[t._v("HTTP")]),t._v(" 进行通信，但利用 "),_("code",[t._v("SSL/TLS")]),t._v(" 来加密数据包。"),_("code",[t._v("HTTPS")]),t._v(" 开发的主要目的，是提供对网站服务器的身份认证，保护交换数据的隐私与完整性。")]),_("p",[t._v("HTTPS = HTTP+ 加密 + 认证 + 完整性保护")]),_("p",[t._v("HTTP 加上加密处理和认证以及完整性保护后即是 HTTPS")]),_("h3",{attrs:{id:"tls-ssl"}},[t._v("TLS/SSL")]),_("p",[_("code",[t._v("TCP (Transmission Control Protoco)")]),t._v(" 传输层控制协议")]),_("p",[_("code",[t._v("TLS (Transport Layer Security)")]),t._v(" 传输层安全协定")]),_("p",[_("code",[t._v("SSL (Secure Socket Layer)")]),t._v(" 安全套接层")]),_("p",[_("code",[t._v("HTTP(Hypertext Transfer Protocol)")]),t._v(" 基于 "),_("code",[t._v("TCP")]),t._v(" 协议，无连接，每次连接只处理一个请求，结束后断开连接；无状态，无法保持用户状态，使用 "),_("code",[t._v("cookie")]),t._v(" 和 "),_("code",[t._v("session")]),t._v(" 解决。")]),_("p",[_("code",[t._v("HTTPS(HTTP over TLS/SSL)")]),t._v(" 安全的 "),_("code",[t._v("http")]),t._v(" 协议，"),_("code",[t._v("HTTP")]),t._v(" 协议和 "),_("code",[t._v("TCP")]),t._v(" 协议之间增加了 "),_("code",[t._v("TLS/SSL")]),t._v(" 保证数据的安全传输。")]),_("h3",{attrs:{id:"http-https-安全性"}},[t._v("HTTP/HTTPS 安全性")]),_("table",[_("thead",[_("tr",[_("th",[t._v("风险")]),_("th",[t._v("描述")]),_("th",[t._v("https解决方案")])])]),_("tbody",[_("tr",[_("td",[t._v("窃听风险")]),_("td",[t._v("攻击者可以获知消息内容（路由上的攻击者，可以偷窥到传输的消息内容。）")]),_("td",[t._v("消息加密（对称加密算法，非对称加密算法）")])]),_("tr",[_("td",[t._v("篡改风险")]),_("td",[t._v("攻击者可以篡改消息内容（消息加密以后攻击者无法获取消息内容的含义，但是可以篡改消息内容，篡改之后接收方也无法感知。）")]),_("td",[t._v("消息摘要")])]),_("tr",[_("td",[t._v("冒充风险")]),_("td",[t._v("攻击者可以冒充其他人参与通信（ 中间人攻击）")]),_("td",[t._v("CA 身份认证")])]),_("tr",[_("td",[t._v("CA 不可信")]),_("td",[t._v("信任的 CA 乱签发证书")]),_("td",[t._v("证书锁")])])])]),_("h2",{attrs:{id:"网站优化"}},[t._v("网站优化")]),_("ol",[_("li",[t._v("减少DNS查询:将服务器域名的ip信息加入本地host文件。")]),_("li",[t._v("减少http请求数量，对于图片使用雪碧图,对于html文件和css文件，js文件分别进行合并操作。")]),_("li",[t._v("减少下载时间：压缩图片，使用压缩应用压缩文档中的空格，删除文件多余的语句和注释，创造自己的js精简库和精简框架,使用本地浏览器缓存。")]),_("li",[t._v("提前渲染开始时间：将css链接放在html头部。")]),_("li",[t._v("减轻解析器的阻塞：将js链接放在body尾部。")])]),_("p",[t._v("Now, let's try it 👉")])])}],r=v(0),o=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),_,!1,null,null,null);e.default=o.exports}}]);