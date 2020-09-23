(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{272:function(n,t,s){"use strict";s.r(t);var e=s(0),o=Object(e.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"例题分析"}},[n._v("例题分析")]),s("h2",{attrs:{id:"常见分析"}},[n._v("常见分析")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("try {\n    foo();  // ES5\n    wow();  ----在这里报错了\n    console.log(foo);\n    console.log(wow)\n} catch (e) {\n    console.log(foo);   //function foo() {\n                        //    console.log('ES5')\n                        //}\n    console.log(wow)    //undefined\n}\n\nfunction foo() {\n    console.log('ES5')\n}\n\nvar wow = function() {\n    console.log('ES6')\n}\n\nvar foo = 'html';\nvar wow = 'css'\n")])])]),s("h2",{attrs:{id:"实现函数add，可以无限次调用循环调用。"}},[n._v("实现函数add，可以无限次调用循环调用。")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("var add = function (m) {\n    var temp = function (n) {\n        return add(m + n);\n    }\n    temp.toString = function () {\n        return m;\n    }\n    return temp;\n};\nadd(1)(2)(3);       // 6\n")])])]),s("p",[n._v("关键：作用域、交替、匿名函数、toString。")]),s("p",[n._v("分析：")]),s("ol",[s("li",[n._v("先执行 add(1)，此时m=1，并且返回temp。")]),s("li",[n._v("执行temp(2)，函数内执行add(m+n)，n=2（此时传进来的值），m=1（上一步的1），add(m+n)=add(1+2)=add(3)，此时m=3，并且返回temp函数。")]),s("li",[n._v("执行temp(3)，函数内执行add(m+n)，n=3（此时传进来的值），m=3（上一步的1），add(m+n)=add(3+3)=add(6)，此时m=6，并且返回temp函数。")]),s("li",[n._v("...依次类推...")]),s("li",[n._v("后面没有传入参数，等于返回的temp函数不被执行而是打印，toString是修改对象转换字符串的方法，因此代码中temp函数的toString函数作用：return m值，")])]),s("h2",{attrs:{id:""}},[n._v("[]==![]")]),s("p",[s("strong",[n._v("[]==[]   //false")]),n._v("，因为在两边都是相同数据类型时，==是直接比较两边数据，结果为false，因为[]属于引用类型，在两个[]分别指向不同的堆内存。")]),s("p",[s("strong",[n._v("[]==![]  //true")]),n._v("，因为！的优先级要大于==的，所以先运算右边，![]----\x3e结果为false，这样 []==![]  ==>>  []==false;")]),s("p",[n._v("当==两边数据类型不一致时，要先做数据类型转换，再判断，")]),s("p",[s("strong",[n._v("== 类型转换规则如下:")])]),s("p",[s("strong",[n._v("值类型 == 值类型")]),n._v("     //相当于 Number(值类型) == Number(值类型)")]),s("p",[s("strong",[n._v("引用类型 == 值类型")]),n._v(" // 对象转化成原始类型的值，再进行比较")]),s("p",[n._v("比较规则：数组与数值进行比较，会先转成数值，再进行比较；与字符串进行比较，会先转成字符串，再进行比较；与布尔值进行比较，两个运算子都会先转成数值，然后再进行比较。")]),s("p",[n._v("最后：[]==![]  ==>>  []==false ==>> 0==0")]),s("h2",{attrs:{id:"eventloop"}},[n._v("EventLoop")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('async function async1() {\n    console.log("async1 start");\n    await async2()\n    console.log("async1 end");\n};\n\nasync function async2() {\n    console.log("async2 start");\n    await async3();\n    console.log("async2 end");\n};\n\nasync function async3() {\n    console.log("async3 start");\n};\n\nsetTimeout(function () {\n    console.log(\'setTimeout0\');\n}, 0);\n\nconsole.log("start");\n\nasync1();\n\nnew Promise(function (resolve) {\n    console.log("Promise1");\n    resolve();\n}).then(function () {\n    console.log("Promise2");\n});\n\nconsole.log("all end");\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("start\nasync1 start\nasync2 start\nasync3 start\nPromise1\nall end\nPromise2\nasync2 end\nasync1 end\nsetTimeout0\n")])])]),s("h3",{attrs:{id:"async"}},[n._v("async")]),s("p",[n._v("async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。")]),s("ul",[s("li",[n._v("async function 声明将定义一个返回 AsyncFunction 对象的异步函数。")]),s("li",[n._v("当调用一个 async 函数时，会返回一个 Promise 对象。当这个 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值；当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值。")])]),s("h3",{attrs:{id:"await"}},[n._v("await")]),s("ul",[s("li",[n._v("语法：[return_value] = await expression;")]),s("li",[n._v("表达式（express）：一个 Promise 对象或者任何要等待的值。")]),s("li",[n._v("返回值（return_value）：返回 Promise 对象的"),s("strong",[n._v("处理结果")]),n._v("。如果等待的不是 Promise 对象，则返回该值本身。")])]),s("p",[n._v("所以，当await操作符后面的表达式是一个Promise的时候，它的返回值，实际上就是Promise的回调函数resolve的参数。")]),s("p",[n._v("我们都知道Promise是一个立即执行函数，但是他的成功（或失败：reject）的回调函数resolve却是一个异步执行的回调。"),s("strong",[n._v("当执行到resolve()时，这个任务会被放入到回调队列中，等待调用栈有空闲时事件循环再来取走它")])]),s("p",[n._v("Now, let's try it 👉")])])}],!1,null,null,null);t.default=o.exports}}]);