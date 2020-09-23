(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{249:function(n,t,o){n.exports=o.p+"assets/img/a_10.b1e1b39d.png"},250:function(n,t,o){n.exports=o.p+"assets/img/a_11.fcebbaf4.jpg"},251:function(n,t,o){n.exports=o.p+"assets/img/bd408de901c51b0985ace1702134319.64c6b956.jpg"},317:function(n,t,o){"use strict";o.r(t);var e=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"面向对象"}},[n._v("面向对象")]),e("p",[n._v("面向对象编程是用抽象方式创建基于现实世界模型的一种编程模式。")]),e("p",[n._v("它使用先前建立的范例，包括模块化，多态和封装几种技术。")]),e("p",[n._v("面向对象程序设计的目的是在编程中促进更好的灵活性和可维护性。")]),e("h2",{attrs:{id:"创建对象"}},[n._v("创建对象")]),e("ul",[e("li",[e("strong",[n._v("普通方法------1")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var obj = new Object();\n    obj.name = 'hello';\n    obj.sayHello = function() {\n    alert(obj.name);\n}\nobj.sayHello();\n")])])]),e("p",[n._v("​\t"),e("strong",[n._v("缺点：")]),n._v(" 创建多个面向对象的时候，重复代码过多，需要封装，所以有了工厂方法。")]),e("ul",[e("li",[e("strong",[n._v("工厂模式------2")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function CreatePerson(name) {\n    var obj = new Object(); //原料\n    obj.name = name; //加工\n    obj.sayHello = function() {\n        alert(this.name);\n    }\n    return obj; //出厂\n}\nvar p1 = CreatePerson('person-1');\np1.sayHello();//person-1\nvar p2 = CreatePerson('person-2');\np2.sayHello();//person-2\n")])])]),e("p",[n._v("​\t"),e("strong",[n._v("缺点：")]),n._v(" 无法识别创建的对象的类型。因为全部都是Object，没有区分度，不像Date、Array等，因此出\t\t\t\t现了构造函数模式。")]),e("ul",[e("li",[e("strong",[n._v("构造函数------3")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function CreatePerson(name) {\n    this.name = name;\n    this.sayHello = function() {\n   \t\talert(this.name);\n    }\n}\nvar p1 = new CreatePerson('person-1');\np1.sayHello();\nvar p2 = new CreatePerson('person-2');\np2.sayHello();\n")])])]),e("ul",[e("li",[e("p",[n._v("构造函数")]),e("ul",[e("li",[e("p",[n._v("改变方面")]),e("ul",[e("li",[e("p",[e("strong",[n._v("函数名首字母大写 。")]),n._v(" 只是为了区别于普通的函数，构造函数本身其实就是普通的函数，只是我们专门用它来实现了构造的功能，所以专门起了一个名字叫构造函数，任何函数都可以成为构造函数，这取决于你调用函数的方式，当使用了"),e("u",[n._v("New的方式")]),n._v("调用就成了构造函数。")])]),e("li",[e("p",[e("strong",[n._v("New 关键字调用 。")])]),e("ul",[e("li",[n._v("new 做了什么？")])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function CreatePerson(name){ \n   var obj = {}; //声明一个空对象obj \n   obj._proto_= CreatePerson.prototype;\n   //把这个对象的_proto_属性指向构造函数的原型对象,这样obj就可以调用CreatePerson原型对象下的所有方法。\n    CreatePerson.apply(obj);   //用apply方法让this指向obj对象\n    this.name = name;   //执行构造函数中的代码（obj对象添加属性，方法）\n    this.sayHello = function(){ \n       alert(this.name);\n    }; \n    return obj;//返回这个对象\n}\n")])])])])])])]),e("p",[e("strong",[n._v("缺点：")]),n._v(" 每次new一个实例化对象，系统都会传建一个内存，他们都有相同的功能但是并不公用。")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("alert(p1.sayHello==p2.sayHello);    //   false\n")])])])]),e("li",[e("p",[e("strong",[n._v("原型 + 构造函数------4")])])])]),e("h2",{attrs:{id:"原型-构造函数"}},[n._v("原型+构造函数")]),e("p",[e("strong",[n._v("原型："),e("strong",[n._v("每个函数都有一个")]),n._v("prototype属性")]),n._v("，它是一个"),e("strong",[n._v("对象")]),n._v("，也称作"),e("strong",[n._v("原型对象")]),n._v("， 而通过这个函数创建出来的实例对象，都能"),e("strong",[n._v("共享这个原型对象下的方法和属性")]),n._v("。所以我们只需要把想要共享的东西放在函数的prototype下，不想共享的东西通过构造函数来创建就可以了。")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function CreatePerson(name) {\n\tthis.name = name;\n}\nCreatePerson.prototype.sayHello = function() {\n\talert(this.name);\n}\nvar p1 = new CreatePerson('person-1');\np1.sayHello();\nvar p2 = new CreatePerson('person-2');\np2.sayHello();\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("alert(p1.sayHello == p2.sayHello);    //  true\nsayHello()方法是共享的，也就是说他们共用一个内存，更进一步的说它们存在引用关系，   \n也就是说你更改了p1的sayHello也会影响p2的sayHello。\n")])])]),e("p",[n._v("__ "),e("strong",[n._v("proto")]),n._v(" __ "),e("strong",[n._v("：")]),n._v(" 同一个函数造出来的实例对象能共享这个函数的prototype下的方法和属性 ,就是通过__proto__属性。")]),e("ul",[e("li",[n._v("[ ] 每个实例化对象都有_proto_属性，它是一个指针，指向函数的prototype，也就是保存了它的地址。（"),e("strong",[n._v("JS中任何对象的值都是保存在堆内存中，我们声明的变量只是一个指针，保存了这个对象的实际地址，所以有了地址就能找到对象")]),n._v("）。")]),e("li",[n._v("[ ] 每个实例化对象都有_proto_属性，保存了构造函数的原型对象的地址，通过这个属性就可以拥有原型对象下的所有属性和方法，"),e("strong",[n._v("_proto_属性实际就是实例化对象和原型对象之间的连接")]),n._v(" 。")])]),e("p",[e("img",{attrs:{src:o(249),alt:""}})]),e("h2",{attrs:{id:"原型链"}},[n._v("原型链")]),e("ul",[e("li",[n._v("实现继承的主要方法。")]),e("li",[n._v("每个函数都可以成为构造函数，每个函数都有原型对象，每个原型对象也可以是一个实例化对象.\n"),e("ul",[e("li",[n._v("比如，你创建了一个函数fun,它是构造函数function的实例化对象，而function的原型对象，又是Object的实例对象。所以fun有个**"),e("em",[n._v("proto")]),e("strong",[n._v("属性可以访问到function的原型对象,function原型对象也是个实例对象，也有个_proto_属性,可以访问到Object的原型对象，所以通过_proto_属性，就形成了一条")]),n._v("原型链**。每个实例化对象都可以访问到链子上方的方法和属性，所以fun是可以访问Object原型对象下的方法和属性的。实际上所有对象都可以访问到Object的原型对象")])])]),e("li",[n._v("访问原则------当访问一个对象的属性或方法时，先在自身的下面寻找 ，然后会沿着__proto__指向的这条链路从下往上寻找，如果找到了，就返回值，没有找到，返回undefined。最终到头为null。")]),e("li",[n._v("结构")])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var Fn = function(){};\nvar f1 = new Fn();\nconsole.log(Fn.prototype)  //Object {constructor: function}\n                            constructor:function Fn()\n                            __proto__: Object\nconsole.log(f1.__proto__); //A {}（即构造器function A 的原型对象）\nconsole.log(f1.__proto__.__proto__); //Object {}（即构造器function Object 的原型对象）\nconsole.log(f1.__proto__.__proto__.__proto__); //null\n")])])]),e("p",[e("img",{attrs:{src:o(250),alt:""}})]),e("p",[e("img",{attrs:{src:o(251),alt:""}})]),e("h2",{attrs:{id:"原型对象"}},[n._v("原型对象")]),e("p",[n._v("原型对象下可能有三种属性：")]),e("p",[n._v("​\t1 原型对象所带方法和属性")]),e("p",[n._v("​\t2 constructor")]),e("p",[n._v("​\t3_proto_属性")]),e("p",[n._v("constructor:构造函数属性，每个函数的原型对象都有的默认属性，指向函数。")]),e("p",[n._v("_每个实例化对象本身是没有constructor属性的，他们下面默认只有一个___proto___属性,用来连接原型对象，而和构造函数本身是没有直接的联系的。所以它的constructor是访问的原型对象上的。所以当原型对象的constructor变化了，实例化对象的constructor也会改变。但是如果这个对象本身既是原型对象，又是实例化对象，那就拥有了constructor属性，无需从原型对象上面访问。")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function CreatePerson(name){ \n   this.name = name;\n}\nCreatePerson.prototype.showName = function(){ \n   console.log(this.name);\n };\nvar p1 =new CreatePerson('haha');\np1.showName();\nconsole.log(p1.constructor); // CreatePerson 来自CreatePerson.prototype\n\nconsole.log(CreatePerson.prototype); \n// {showName:{},constructor:CreatePerson,__proto__:Object.prototype}\n//可见，原型对象保存了\n      1 自身添加的方法，\n      2 构造函数constructor \n      3 _proto_(和上一层构造函数原型对象的连接)\n\nconsole.log(CreatePerson.prototype.__proto__===Object.prototype);\n// true 这个原型对象本身又是object的实例化对象，所有_proto_指向Object的原型对象\n\nconsole.log(CreatePerson.prototype.__proto__===Object);\n// false 可见是和构造函数下原型对象的连接，不是构造函数\n\nconsole.log(CreatePerson.prototype.constructor);\n//CreatePerson CreatePerson.prototype是Object实例化对象,也是原型对象，所以自身拥有constructor属性\n\nconsole.log(Object.prototype.__proto__); \n// null 原型链的终点是null\n\nconsole.log(CreatePerson.__proto__); //function.prototype\n// CreatePerson本身既是构造函数又是function的实例化对象，拥有_proto_属性，指向function的原型对象\n\nconsole.log(CreatePerson.constructor); \n// function 继承自function.prototype\n\nconsole.log(CreatePerson.prototype instanceof CreatePerson ) \n//验证是否在一条原型链上 false\n")])])]),e("h2",{attrs:{id:"字面量法定义原型"}},[n._v("字面量法定义原型")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function Fn() {};\nFn.prototype = {\n    say:function(){},\n    move:function(){}\n};\nvar f1 = new Fn();\nconsole.log(Fn.prototype)\n//Object {say: function, move: function}\n//    move:function ()\n//    say:function ()\n//   __proto__:Object\n//发现constructor不见了，因为这种方式相当于重新赋值了Fn.prototype \nconsole.log(Fn.prototype.constructor); \n//Object 因为自身没有了constructor属性，就去上级原型对象找，找到了Object\nconsole.log(f1.constructor); \n//Object 也变了，验证了它是访问的原型对象上的\n")])])]),e("p",[n._v("因此我们需要重新修正原型的指向")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function Fn() {};\nFn.prototype = {\n    constructor:Fn,\n    say:function(){},\n    move:function(){}\n};\nvar f1 = new Fn();\nconsole.log(f1.constructor);   //Fn\n")])])]),e("p",[n._v("Now, let's try it 👉")])])}],r=o(0),s=Object(r.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),e,!1,null,null,null);t.default=s.exports}}]);