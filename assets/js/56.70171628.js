(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{314:function(n,t,a){"use strict";a.r(t);var e=a(0),l=Object(e.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"继承方式"}},[n._v("继承方式")]),a("h2",{attrs:{id:"原型链继承"}},[n._v("原型链继承")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function Parent() {\n    this.val = 18;\n    this.arr = [1];\n}\nfunction Child() {\n\n}\nChild.prototype = new Parent();              // 核心\n\nvar child_1 = new Child();\nvar child_2 = new Child();\n\nchild_1.val = 20;\nchild_1.arr.push(2);\n\nconsole.log(child_1.val); // 20\nconsole.log(child_2.val); // 18\nconsole.log(child_1.arr); // 1, 2\nconsole.log(child_2.arr); // 1, 2\n")])])]),a("p",[a("strong",[n._v("核心：")]),n._v(" 父类实例充当子类原型对象")]),a("p",[a("strong",[n._v("优点：")]),n._v(" 简单，容易")]),a("p",[a("strong",[n._v("缺点：")]),n._v(" 1.修改child_1.arr后child_2.arr也变了，因为来自原型对象的引用属性是所有实例共享的。")]),a("p",[n._v("​\t     2.创建子类实例时，无法向父类构造函数传参")]),a("h2",{attrs:{id:"借用构造函数继承"}},[n._v("借用构造函数继承")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function Parent(val) {\n    this.val = val;\n    this.arr = [1];\n    this.fun = function() {\n        // ...\n    }\n}\nfunction Child(val) {\n    Parent.call(this, val);       // 核心\n    // ...\n}\n\nvar child_1 = new Child(1);\nvar child_2 = new Child(2);\nchild_1.arr.push(2);\n\nconsole.log(child_1.val); // 1\nconsole.log(child_2.val); // 2\nconsole.log(child_1.arr); // 1, 2\nconsole.log(child_2.arr); // 1\n")])])]),a("p",[a("strong",[n._v("核心：")]),n._v(" 借父类的构造函数来增强子类实例，等于是把父类的实例属性复制了一份给子类实例装上了（完全没有用到原型）")]),a("p",[a("strong",[n._v("优点：")]),n._v(" 1.解决了子类实例共享父类引用属性的问题")]),a("p",[n._v("​            2.创建子类实例时，可以向父类构造函数传参")]),a("p",[a("strong",[n._v("缺点：")]),n._v(" 1.无法实现函数复用，每个子类实例都持有一个新的fun函数，太多了就会影响性能，内存爆炸。")]),a("h2",{attrs:{id:"组合继承-（常用）"}},[n._v("组合继承 （常用）")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('function Parent(name) {\n    this.name = name\n};\nParent.prototype.sayname = function() {\n    console.log(this.name)\n};\n\n\nfunction Child(arg) {\n    Parent.call(this, arg);                // 核心\n};\nChild.prototype = new Parent();            // 核心\n\nvar child = new Child("child")\nvar parent = new Parent("AlexTao");\n\nconsole.log(parent.sayname())    //AlexTao\nconsole.log(child.sayname())     //child\nchild instanceof Parent          // true\n')])])]),a("p",[a("strong",[n._v("核心：")]),n._v(" 把实例函数都放在原型对象上，以实现函数复用。")]),a("p",[n._v("​            通过Parent.call(this)---继承父类的基本属性和引用属性并保留能传参的优点；")]),a("p",[n._v("​            通过Child.prototype = new Parent()---继承父类函数，实现函数复用")]),a("p",[a("strong",[n._v("优点：")]),n._v(" 1.不存在属性共享问题")]),a("p",[n._v("​            2.可传参")]),a("p",[n._v("​            3.函数可复用")]),a("p",[a("strong",[n._v("缺点：")]),n._v(" 1.子类原型上有一份多余的父类实例属性 。内存浪费 。")]),a("h2",{attrs:{id:"寄生组合继承（最佳）"}},[n._v("寄生组合继承（最佳）")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function Parent(value) {\n    this.val = value\n}\nParent.prototype.getValue = function() {\n    console.log(this.val)\n}\n\nfunction Child(value) {\n    Parent.call(this, value)                                  // 核心\n}\nChild.prototype = Object.create(Parent.prototype, {           // 核心\n    constructor: {\n        value: Child,\n        enumerable: false,\n        writable: true,\n        configurable: true\n    }\n})\nconst child = new Child(18)\n\nchild.getValue() // 18\nconsole.log(child instanceof Parent) // true\n")])])]),a("p",[a("strong",[n._v("核心：")]),n._v(" 将父类的原型赋值给了子类，并且将构造函数设置为子类。")]),a("p",[a("strong",[n._v("优点：")]),n._v(" 1.解决了无用的父类属性问题，还能正确的找到子类的构造函数。")]),a("h2",{attrs:{id:"class继承"}},[n._v("Class继承")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class Parent {\n    constructor(value) {\n        this.val = value\n    }\n    getValue() {\n        console.log(this.val)\n    }\n}\nclass Child extends Parent {\n    constructor(value) {\n        super(value)           // 关键\n        this.val = value\n    }\n}\nlet child = new Child(18)\nchild.getValue() // 18\nconsole.log(child instanceof Parent) // true\n")])])]),a("p",[a("strong",[n._v("核心：")]),n._v(" 使用 "),a("code",[n._v("extends")]),n._v(" 表明继承自哪个父类，并且在子类构造函数中必须调用 "),a("code",[n._v("super")]),n._v("，因为这段代码可以看    成 "),a("code",[n._v("Parent.call(this, value)")]),n._v("。")])])}],!1,null,null,null);t.default=l.exports}}]);