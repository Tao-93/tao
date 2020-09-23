(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{302:function(t,n,e){"use strict";e.r(n);var a=e(0),o=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"js备忘录"}},[t._v("JS备忘录")]),e("h2",{attrs:{id:"touch事件"}},[t._v("touch事件")]),e("p",[e("strong",[t._v("事件响应顺序:")]),t._v(" ontouchstart > ontouchmove > ontouchend > onclick"),e("br"),t._v("\n​\t\ttouchstart ——当手指触碰屏幕时候发生"),e("br"),t._v("\n​\t\ttouchmove ——当手指在屏幕上滑动时连续触发。"),e("br"),t._v("\n​\t\t通常在滑屏页面，会调用 event 的 preventDefault() 可以阻止默认情况的发生：阻止页面滚动\n​\t\ttouchend ——当手指离开屏幕时触发"),e("br"),t._v("\n​\t\ttouchcancel ——系统停止跟踪触摸时候会触发。例如在触摸过程中突然页面 alert() ，此时会触发该事件，这个事件比较少用。"),e("br"),t._v("\n​\t\t"),e("strong",[t._v("TouchEvent说明")]),t._v("：")]),e("pre",[e("code",[t._v("touches：屏幕上所有手指的信息\ntargetTouches：手指在目标区域的手指信息\nchangedTouches：最近一次触发该事件的手指信息\ntouchend时，touches与targetTouches信息会被删除，changedTouches保存的最后一次的信息，用于计算手指信息\n参数信息(changedTouches[0])\nclientX、clientY在显示区的坐标\ntarget：当前元素\n")])]),e("h2",{attrs:{id:"检测手机旋转"}},[t._v("检测手机旋转")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 屏幕旋转的事件和样式\nfunction orientInit(){\n\t    var orientChk = document.documentElement.clientWidth >document.documentElement.clientHeight?'landscape':'portrait';\n\t    if(orientChk =='lapdscape'){\n\t        //横屏下需要执行代码\n\t    }else{\n\t        //竖屏下需要执行代码\n\t    }\n\t}\n\torientInit();\nwindow.addEventListener('onorientationchange' in window?'orientationchange':'resize', function(){\n\t  setTimeout(orientInit, 100);\n},false)\n")])])]),e("h2",{attrs:{id:"url参数解释"}},[t._v("url参数解释")]),e("pre",[e("code",[t._v("设置或获取整个 URL 为字符串。<br>\nwindow.location.href<br>\n例：http://localhost:8086/topic/index?topicId=361<br>\nalert(window.location.href); 则输出：http://localhost:8086/topic/index?topicId=361<br>\n\n设置或获取与 URL 关联的端口号码。<br>\nwindow.location.port<br>\n例：http://localhost:8086/topic/index?topicId=361<br>\nalert(window.location.port); 则输出：8086<br>\n\n设置或获取 URL 的协议部分。<br>\nwindow.location.protocol<br>\n例：http://localhost:8086/topic/index?topicId=361<br>\nalert(window.location.protocol); 则输出：http:<br>\n\n设置或获取 href 属性中在井号“#”后面的分段。<br>\nwindow.location.hash<br>\n\n设置或获取 location 或 URL 的 hostname 和 port 号码。<br>\nwindow.location.host<br>\n例：http://localhost:8086/topic/index?topicId=361<br>\nalert(window.location.host); 则输出：http:localhost:8086<br>\n\n设置或获取 href 属性中跟在问号后面的部分。<br>\nwindow.location.search<br>\n例：http://localhost:8086/topic/index?topicId=361<br>\nalert(window.location.search); 则输出：?topicId=361<br>\nwindow.location<br>\n\n属性--------------描述<br>\nhash--------------设置或获取 href 属性中在井号“#”后面的分段。<br>\nhost--------------设置或获取 location 或 URL 的 hostname 和 port 号码。<br>\nhostname----------设置或获取 location 或 URL 的主机名称部分。<br>\nhref--------------设置或获取整个 URL 为字符串。<br>\npathname----------设置或获取对象指定的文件名或路径。<br>\nport--------------设置或获取与 URL 关联的端口号码。<br>\nprotocol----------设置或获取 URL 的协议部分。<br>\nsearch------------设置或获取 href 属性中跟在问号后面的部分<br>\n")])]),e("h2",{attrs:{id:"滚动条滚动到最底部检测"}},[t._v("滚动条滚动到最底部检测")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$(window).scroll(function() {　　\n    var scrollTop = $(this).scrollTop();　　\n    var docHeight = $(document).height();　　\n    var windowHeight = $(this).height();\n    var scrollHeight=document.body.scrollHeight;\n    // console.log($(this),windowHeight,scrollTop);\n    // console.log("scrollTop:"+scrollTop);\n    // console.log("scrollbottom:"+(docHeight-scrollTop-windowHeight));\n    if(scrollTop + windowHeight == docHeight) {　　　　\n    \talert("已经到最底部了！");　　\n    }\n});\n')])])]),e("h2",{attrs:{id:"js生成随机字符串的最佳实践"}},[t._v("JS生成随机字符串的最佳实践")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var random_str = function() {\n        var len = 32;\n        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';\n        var max = chars.length;\n        var str = '';\n        for (var i = 0; i < max; i++) {\n        str += chars.charAt(Math.floor(Math.random() * max));\n    }\n    console.log(str)\n    return str;\n};\nrandom_str();\n")])])]),e("h2",{attrs:{id:"websocket-api的用法"}},[t._v("WebSocket API的用法")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// 创建一个Socket实例\nvar ws = new WebSocket("ws://localhost:8080");\n// 打开Socket\nws.onopen = function(){\n\tconsole.log("open");\n\t// 发送一个初始化消息\n\tws.send("open");\n};\nws.onmessage = function(evt){\n\tconsole.log(evt.data)\n};\nws.onclose = function(evt){\n\tconsole.log("WebSocketClosed!");\n};\nws.onerror = function(evt){\n\tconsole.log("WebSocketError!");\n};\n// 1.ws.send(“hello”);用于叫消息发送到服务端\n// 2.ws.onopen = function() { console.log(“open”)};当websocket创建成功时，即会触发onopen事件\n// 3.ws.onmessage = function(evt) { console.log(evt.data) };当客户端收到服务端发来的消息时，会触发onmessage事件，参数evt.data中包含server传输过来的数据\n// 4.ws.onclose = function(evt) { console.log(“WebSocketClosed!”); };当客户端收到服务端发送的关闭连接的请求时，触发onclose事件\n// 5.ws.onerror = function(evt) { console.log(“WebSocketError!”); };如果出现连接，处理，接收，发送数据失败的时候就会触发onerror事件\n(function() {\n\tvar bp = document.createElement(\'script\');\n\tbp.src = \'//push.zhanzhang.baidu.com/push.js\';\n\tvar s = document.getElementsByTagName("script")[0];\n\ts.parentNode.insertBefore(bp, s);\n})();\n')])])]),e("h2",{attrs:{id:"抛物线-css3"}},[t._v("抛物线-css3")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var $ball = document.getElementById('ball');\n    document.body.onclick=function(evt) {\n    console.log(evt.pageX, evt.pageY)\n    $ball.style.top = evt.pageY +'px';\n    $ball.style.left = evt.pageX +'px';\n    $ball.style.transition ='left 0s, top 0s';\n    setTimeout(() => {\n        $ball.style.top = window.innerHeight +'px';\n        $ball.style.left ='0px';\n        $ball.style.transition ='left .4s linear, top .4s ease-in';\n    },20)\n}\n")])])]),e("h2",{attrs:{id:"抛物线-小程序"}},[t._v("抛物线-小程序")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<script>\n    cartAnimation(x, y) { // x y 为手指点击的坐标，即球的起始坐标\n        let self = this,\n            cartY = app.globalData.winHeight -50,\n            // 结束位置（购物车图片）纵坐标\n            cartX =50,\n            // 结束位置（购物车图片）的横坐标\n            animationX = flyX(cartX, x),\n            // 创建球的横向动画\n            animationY = flyY(cartY, y)\n            // 创建球的纵向动画\n\n        this.setData({\n            leftNum: x,\n            topNum: y,\n            showBall: true\n        })\n        setTimeoutES6(100).then(() => {// 100 ms 延时，确保球已经到位并显示\n            self.setData({\n                animationDataX: animationX.export(),\n                animationDataY: animationY.export(),\n            })\n            return setTimeoutES6(400) // 400 ms 是球的抛物线动画时长\n        }).then(() => {  // 400 ms 延时后隐藏球\n            this.setData({\n                showBall: false,\n                animationX: flyX(0, 0, 0).export(),\n                // 还原小球位置，即 translate 恢复默认值\n                animationY: flyY(0, 0, 0).export(),\n            })\n        })\n    }\n\n    function flyX(cartX, oriX, duration) {// 水平动画\n        let animation = wx.createAnimation({\n            duration: duration || 400,\n            timingFunction: 'linear',\n        })\n        animation.translateX(cartX - oriX).step()\n        return animation\n    }\n\n    function flyY(cartY, oriY, duration) {// 垂直动画\n        let animation = wx.createAnimation({\n            duration: duration || 400,\n            timingFunction: 'ease-in',\n        })\n        animation.translateY(cartY - oriY).step()\n        return animation\n    }\n<\/script>\n")])])]),e("h2",{attrs:{id:"动态添加-script"}},[t._v("动态添加 script")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function addScriptTag(src) {  \n    var script = document.createElement('script');  \n    script.setAttribute(\"type\",\"text/javascript\");  \n    script.src = src;  \n    document.body.appendChild(script);  \n} \nwindow.onload = function () {  \n    addScriptTag('http://example.com/ip?callback=foo');  \n}\nfunction foo(data) {  \n    console.log('Your public IP address is: ' + data.ip);  \n};\n")])])]),e("h2",{attrs:{id:"生成随机数"}},[t._v("生成随机数")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('function randombetween(min, max){\n    console.log("随机数",min + (Math.random() * (max-min +1)));\n    return min + (Math.random() * (max-min +1));\n}\nrandombetween(2,8);\n')])])]),e("h2",{attrs:{id:"日期"}},[t._v("日期")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('(function getNowFormatDate() {\n    var date = new Date();\n    var seperator1 = "-";\n    var seperator2 = ":";\n    var month = date.getMonth() + 1;\n    var strDate = date.getDate();\n    if (month >= 1 && month <= 9) {\n    \tmonth = "0" + month;\n    }\n    if (strDate >= 0 && strDate <= 9) {\n    \tstrDate = "0" + strDate;\n    }\n    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate\n    + " " + date.getHours() + seperator2 + date.getMinutes()\n    + seperator2 + date.getSeconds();\n    var time=month+"月"+strDate+"日";\n    console.log(currentdate)\n    return currentdate;\n})();\nsetInterval(function() {\n    var EndTime = new Date(\'2019/06/13 00:00:00\');\n    var NowTime = new Date();\n    var t = EndTime.getTime() - NowTime.getTime();\n    var d = 0;\n    var h = 0;\n    var m = 0;\n    var s = 0;\n    if (t >= 0) {\n        d = Math.floor(t / 1000 / 60 / 60 / 24);\n        h = Math.floor(t / 1000 / 60 / 60 % 24);\n        m = Math.floor(t / 1000 / 60 % 60);\n        s = Math.floor(t / 1000 % 60);\n    }\n    document.getElementById("t_d").innerHTML = d + "天";\n    document.getElementById("t_h").innerHTML = h + "时";\n    document.getElementById("t_m").innerHTML = m + "分";\n    document.getElementById("t_s").innerHTML = s + "秒";\n}, 10);\n')])])]),e("h2",{attrs:{id:"当前时间"}},[t._v("当前时间")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('function getNowFormatDate() { \n    var date = new Date();\n    var seperator1 = "-";\n    var seperator2 = ":";\n    var month = date.getMonth() + 1;\n    var strDate = date.getDate();\n    if (month >= 1 && month <= 9) {\n    \tmonth = "0" + month;\n    }\n    if (strDate >= 0 && strDate <= 9) {\n    \tstrDate = "0" + strDate;\n    }\n    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate\n    + " " + date.getHours() + seperator2 + date.getMinutes()\n    // + seperator2 + date.getSeconds();\n    return currentdate;\n}\n')])])]),e("h2",{attrs:{id:"脚本自动美化字体"}},[t._v("脚本自动美化字体")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".halfStyle2 {\n    position:relative;\n    display:inline-block;\n    font-size:80px; \n    color: transparent;\n    overflow:hidden;\n    white-space: pre;\n}\n.halfStyle2:before {\n    display:block;\n    z-index:1;\n    position:absolute;\n    top:0;\n    width: 50%;\n    content: attr(data-content);\n    overflow:hidden;\n    pointer-events: none;\n    color: #f00;\n    text-shadow: 2px -2px 0px #af0;\n}\n.halfStyle2:after {\n    display:block;\n    direction: rtl;\n    position:absolute;\n    z-index:2;\n    top:0;\n    left:50%;\n    width: 50%;\n    content: attr(data-content);\n    overflow:hidden;\n    pointer-events: none;\n    color: #000;\n    text-shadow: 2px 2px 0px #0af;\n}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<span class="textToHalfStyle lazy ">心有多大，江湖就有多大，且行且珍惜。</span>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$(window).load(function(){\n    var text, chars, $el, i, output;\n    // 遍历所有字符\n    $('.textToHalfStyle').each(function(idx, el) {\n        $el = $(el);\n        text = $el.text();\n        chars = text.split('');\n        $el.html('<span style=\"position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);\">' + text + '</span>');\n        output = '';\n        for (i = 0; i < chars.length; i++) {\n            output += '<span class=\"halfStyle2\" aria-hidden=\"true\" data-content=\"' + chars[i] +'\">'+ chars[i] + '</span>';\n        } \n        $el.append(output);\n    });\n})\n")])])]),e("h2",{attrs:{id:"倒计时代码（精确到毫秒）"}},[t._v("倒计时代码（精确到毫秒）")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<P style="font-size:.8em;line-height:2em;">距活动结束还有：</P>\n<div id="fnTimeCountDown" data-end="2019/07/08 18:45:13">\n    <span class="year">00</span>年\n    <span class="month">00</span>月\n    <span class="day">00</span>天\n    <span class="hour">00</span>时\n    <span class="mini">00</span>分\n    <span class="sec">00</span>秒\n    <span class="hm">000</span>\n</div>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<script type="text/javascript">\n    $.extend($.fn,{\n        fnTimeCountDown:function(d){\n            this.each(function(){\n                var $this = $(this);\n                var o = {\n                    hm: $this.find(".hm"),\n                    sec: $this.find(".sec"),\n                    mini: $this.find(".mini"),\n                    hour: $this.find(".hour"),\n                    day: $this.find(".day"),\n                    month:$this.find(".month"),\n                    year: $this.find(".year")\n                };\n                var f = {\n                    haomiao: function(n){\n                        if(n < 10)return "00" + n.toString();\n                        if(n < 100)return "0" + n.toString();\n                        return n.toString();\n                    },\n                    zero: function(n){\n                        var _n = parseInt(n, 10);//解析字符串,返回整数\n                        if(_n > 0){\n                            if(_n <= 9){\n                                _n = "0" + _n\n                            }\n                            return String(_n);\n                        }else{\n                            return "00";\n                        }\n                    },\n                    dv: function(){\n                        //d = d || Date.UTC(2050, 0, 1); //如果未定义时间，则我们设定倒计时日期是2050年1月1日\n                        var _d = $this.data("end") || d;\n                        var now = new Date(),\n                            endDate = new Date(_d);\n                        //现在将来秒差值\n                        //alert(future.getTimezoneOffset());\n                        var dur = (endDate - now.getTime()) / 1000 , mss = endDate - now.getTime() ,pms = {\n                            hm:"000",\n                            sec: "00",\n                            mini: "00",\n                            hour: "00",\n                            day: "00",\n                            month: "00",\n                            year: "0"\n                        };\n                        if(mss > 0){\n                            pms.hm = f.haomiao(mss % 1000);\n                            pms.sec = f.zero(dur % 60);\n                            pms.mini = Math.floor((dur / 60)) > 0? f.zero(Math.floor((dur / 60)) % 60) : "00";\n                            pms.hour = Math.floor((dur / 3600)) > 0? f.zero(Math.floor((dur / 3600)) % 24) : "00";\n                            pms.day = Math.floor((dur / 86400)) > 0? f.zero(Math.floor((dur / 86400)) % 30) : "00";\n                            //月份，以实际平均每月秒数计算\n                            pms.month = Math.floor((dur / 2629744)) > 0? f.zero(Math.floor((dur / 2629744)) % 12) : "00";\n                            //年份，按按回归年365天5时48分46秒算\n                            pms.year = Math.floor((dur / 31556926)) > 0? Math.floor((dur / 31556926)) : "0";\n                        }else{\n                            pms.year=pms.month=pms.day=pms.hour=pms.mini=pms.sec="00";\n                            pms.hm = "000";\n                            //alert(\'结束了\');\n                            return;\n                        }\n                        return pms;\n                    },\n                    ui: function(){\n                        if(o.hm){\n                            o.hm.html(f.dv().hm);\n                        }\n                        if(o.sec){\n                            o.sec.html(f.dv().sec);\n                        }\n                        if(o.mini){\n                            o.mini.html(f.dv().mini);\n                        }\n                        if(o.hour){\n                            o.hour.html(f.dv().hour);\n                        }\n                        if(o.day){\n                            o.day.html(f.dv().day);\n                        }\n                        if(o.month){\n                            o.month.html(f.dv().month);\n                        }\n                        if(o.year){\n                            o.year.html(f.dv().year);\n                        }\n                        setTimeout(f.ui, 1);\n                    }\n                };\n                f.ui();\n            });\n        }\n    });\n<\/script>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<script type="text/javascript">\n    $("#fnTimeCountDown").fnTimeCountDown("2018/07/08 18:45:13");\n<\/script>\n')])])]),e("h2",{attrs:{id:"摇一摇"}},[t._v("摇一摇")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("if(window.DeviceMotionEvent) {\n\tvar speed =25;\n    var flag=true;\n\tvar x = y = z = lastX = lastY = lastZ = 0;\n\tvar handler = function(){\n\t\tvar acceleration =event.accelerationIncludingGravity;\n\t\tx = acceleration.x;\n\t\ty = acceleration.y;\n\t\tif(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {\n\t\t\tif(flag){\n\t\t\t\tflag=false;\n\t\t\t\talert(\"恭喜\")\n\t\t\t}\n\t\t}\n\t\tlastX = x;\n\t\tlastY = y;\n\t};\n\twindow.addEventListener('devicemotion',handler, false);\n}else{\n    alert(0)\n}\n")])])]),e("h2",{attrs:{id:"逐字输出"}},[t._v("逐字输出")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var txtArr = ['欢迎来到AxelTao 的 博客，github地址：https://alextaoclub.github.io/Weblog/'],      \n    x = 1, \n    y = 0, \n    txt = txtArr[y], \n    timer = null, \n    timer1 = null, \n    cue = $('.menutext');  \nfunction changTxt() { \n    if (x == txt.length+1) { \n        clearTimeout(timer1); \n        timer1 = setInterval(function(){ \n        y += 1;\n        if (y > txtArr.length - 1) y = 0; \n        cue.text(''); \n        txt = txtArr[y]; \n        x=0; \n    },15000);                     \n} \ncue.text(txt.substring(0,x)); \n    x+=1; \n        clearTimeout(timer); \n        timer = setTimeout(function(){ \n        changTxt(); \n    },400); \n} \nchangTxt();\n")])])]),e("h2",{attrs:{id:"随机不重复数组"}},[t._v("随机不重复数组")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function num(n,min,max){\n    arr=[];\n    arr2=[];\n    for(i=0;i<max-min+1;i++){\n    \tarr[i]=i+min;\n    }\n    for(i=0;i<n;i++){\n        var x=parseInt(Math.random()*arr.length);\n        arr2[i]=arr[x];\n        for(j=x;j<arr.length;j++){\n            arr[j]=arr[j+1];\n        }\n        arr.length=arr.length-1;\n    }\n    return arr2;\n}\nnum(5,0,4); \n")])])]),e("h2",{attrs:{id:"滚动，-加载新内容"}},[t._v("滚动， 加载新内容")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$(window).scroll(function(){\n    // 当滚动到最底部以上100像素时\n    if ($(document).height() - $(this).scrollTop() - $(this).height()<100) {\n        $(".dropload-load").show();\n        $(".dropload-sel").hide(100);\n        ajax_load_data();\n    };\n});\nfunction ajax_load_data(){\n    setTimeout(function(){\n        $(\'.consultList\').append($(".consultList").html());\n        $(".dropload-load").hide(100);\n        $(".dropload-sel").show();\n    },1000);\n}\n')])])]),e("h2",{attrs:{id:"检测-滚动条距顶端的距离"}},[t._v("检测--滚动条距顶端的距离")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$(window).scroll(function() { \n    var scrollPos=getScrollTop(); //滚动条距顶端的距离\n    var height =document.documentElement.clientHeight//浏览器可视化窗口的大小\n    console.log(scrollPos,height)\n})\nfunction getScrollTop() {  \n    var scrollPos;  \n    if (window.pageYOffset) {  \n    \tscrollPos = window.pageYOffset; \n    }else if (document.compatMode && document.compatMode != 'BackCompat')  { \n    \tscrollPos = document.documentElement.scrollTop; \n    }else if (document.body) { \n    \tscrollPos = document.body.scrollTop; \n    }   \n    return scrollPos;   \n}\n")])])]),e("h2",{attrs:{id:"canvas-解决图片跨域"}},[t._v("canvas 解决图片跨域")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var image = new Image();\nvar canvas = document.createElement("canvas");\nvar ctx = canvas.getContext("2d");\nimage.setAttribute(\'crossorigin\', \'anonymous\');\nimage.src = $(".user-img img").attr("src");\nimage.onload = function() {\n    var imgW = image.width;\n    canvas.width = imgW;\n    canvas.height = imgW;\n    ctx.drawImage(image, 0, 0);\n    $(".user-img img").attr("src",canvas.toDataURL(\'image/png\'));\n    console.log(canvas.toDataURL(\'image/png\'))\n};\n')])])]),e("h2",{attrs:{id:"lrz压缩上传"}},[t._v("lrz压缩上传")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('document.querySelector(\'input\').addEventListener(\'change\', function () {\n\t\t    var that = this;\n\t\t    lrz(that.files[0]).then(function (rst) {\n\t\t\t\tvar submitData={\n\t\t\t\t    image:rst.base64,\n\t\t\t\t    name:rst.origin.name,\n\t\t\t\t    fileLength:rst.base64.length\n\t\t    \t};\n\t\t    \t$(".fileImg img").attr("src",submitData.image);\n\t\t\t    $.ajax({\n\t\t\t\t\ttype: "POST",\n\t\t\t\t\turl: "http://localhost:8080/link/upload",\n\t\t\t\t\tdata: submitData,\n\t\t\t\t\tdataType:"json",\n\t\t\t\t\tbeforeSend: function(XMLHttpRequest){\n\t\t\t\t\t\t//showLoader();\n\t\t\t\t\t\tconsole.log(000)\n\t\t\t\t\t},\n\t\t\t\t\tsuccess: function(data){\n\t\t\t\t\t    if ("1" == data.error) {\n\t\t\t\t\t    \talert(data.message);\n\t\t\t\t\t    \treturn false;\n\t\t\t\t\t    }else{\n\t\t\t\t\t    \talert(data.thumbnail);\n\t\t\t\t\t    \treturn false;\n\t\t\t\t\t    }\n\t\t\t        }, \n\t\t\t\t    complete :function(XMLHttpRequest, textStatus){\n\t\t\t\t    \t// hideLoader();\n\t\t\t\t    \tconsole.log(1)\n\t\t\t\t    },\n\t\t\t\t    error:function(XMLHttpRequest, textStatus, errorThrown){ //上传失败 \n\t\t\t\t\t    //hideLoader();\n\t\t\t\t\t    //alert(\'操作错误\');\n\t\t\t\t\t    console.log(2)\n\t\t\t\t    }\n\t\t\t    });\n\t\t\t    return rst;\n\t\t    });\n\t\t});\n')])])]),e("h2",{attrs:{id:"文字数量不一样，对齐方式"}},[t._v("文字数量不一样，对齐方式")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<dl class="hotsearch" style="width:300px;">\n    <dt>热门搜索</dt>\n    <dd><a href="#" target="_blank" ref="nav" class="w3">电视机</a></dd>\n    <dd><a href="#" target="_blank" ref="nav" class="w4">性感漂亮</a></dd>\n    <dd><a href="#" target="_blank" ref="nav" class="w3">高跟鞋</a></dd>\n    <dd><a href="#" target="_blank" ref="nav" class="w2">手机</a></dd>\n    <dd><a href="#" target="_blank" ref="nav" class="w2">对齐</a></dd>\n    <dd><a href="#" target="_blank" ref="nav" class="w3">牛仔裤</a></dd>\n    <dd><a href="#" target="_blank" ref="nav" class="w4">小家碧玉</a></dd>\n    <dd><a href="#" target="_blank" ref="nav" class="w2">家居</a></dd>\n</dl>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".hotsearch dd{  float: left;  line-height: 24px;  margin-right: 30px;  overflow: hidden;  text-align: center;  width: 4em; /*这个值是看最长能显示几个文字，如x，则为x em*/  }  \n.hotsearch dd a{  display:block;  }  \n.w2{  letter-spacing:2em; /*如果需要y个字两端对齐，则为(x-y)/(y-1),这里是（4-2）/(2-1)=2em */  margin-right:-2em; /*同上*/  }  \n.w3{  letter-spacing:0.5em; /*如果需要y个字两端对齐，则为(x-y)/(y-1),这里是（4-3）/(3-1)=0.5em */  margin-right:-0.5em; /*同上*/  }  \n")])])]),e("p",[e("img",{attrs:{src:"F:/GitRepository/vuepressBlog/docs/images/a_08.png",alt:""}})]),e("h2",{attrs:{id:"history-go-和history-back-的用法与区别"}},[t._v("history.go()和history.back()的用法与区别")]),e("ul",[e("li",[t._v("history.go(-1):后退+刷新，原页面表单中的内容会丢失；")]),e("li",[t._v("history.back():返回上一页，原页表表单中的内容会保留。")])]),e("p",[t._v("之所以注意到这个区别，是因为不同的浏览器后退行为也是有区别的，而区别就跟javascript：history.go()和history.back()的区别类似。")]),e("p",[t._v("Chrome 和 ff浏览器后退页面，会刷新后退的页面，若有数据请求也会提交数据申请。类似于history.go(-1); 而safari（包括桌面版和ipad版）的后退按钮则不会刷新页面，也不会提交数据申请。类似于javascript：history.back();")]),e("p",[t._v("##预加载图像")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$.preloadImages = function () {\n    for (var i = 0; i < arguments.length; i++) {\n        $('<img>').attr('src',arguments[i]);\n    }\n};\n$.preloadImages(\"images/loadImg_1.png\",\"images/loadImg_2.png\");\n")])])]),e("h2",{attrs:{id:"检查图像是否加载"}},[t._v("检查图像是否加载")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$("img").load(function(){\n    console.log("success")\n});\n')])])]),e("h2",{attrs:{id:"自动修复破坏的图像"}},[t._v("自动修复破坏的图像")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$("img").on("error",function(){\n    if (!$(this).hasClass("broken-image")) {\n        $(this).attr("src","images/broken.png").addClass("broken-image")\n    }\n});\n')])])]),e("h2",{attrs:{id:"鼠标滚轮监听"}},[t._v("鼠标滚轮监听")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$(\'.mousewhee\').on("mousewheel DOMMouseScroll", function(event) {\n    // chrome & ie || // firefox\n    var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||\n        (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));\n\n    if (delta > 0) {\n        // console.log(\'mousewheel top\');\n        $(".mousewhee").text("鼠标滚轮---向上滚~~~")\n    } else if (delta < 0) {\n        // console.log(\'mousewheel bottom\');\n        $(".mousewhee").text("鼠标滚轮---向下滚~~~")\n    }\n});\n')])])]),e("h2",{attrs:{id:"阻止ios页面橡皮弹回效果"}},[t._v("阻止ios页面橡皮弹回效果")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function resEvent(){\n    var startY,endY;\n    $('body').on('touchstart',function (e) {\n         startY = e.originalEvent.targetTouches[0].pageY;\n    });\n    $('body').on('touchmove',function (e) {\n         endY = e.originalEvent.targetTouches[0].pageY;\n         //手指下滑，页面到达顶端不能继续下滑\n         if(endY>startY&& $(window).scrollTop()<=0){\n             e.preventDefault();\n         }\n       //手指上滑，页面到达底部能继续上滑\n         if(endY<startY&& $(window).scrollTop()+ \n             $(window).height()>=$('body')[0].scrollHeight){\n             e.preventDefault();\n         }\n    })\n}\n")])])]),e("p",[t._v("Now, let's try it 👉")])])}],!1,null,null,null);n.default=o.exports}}]);