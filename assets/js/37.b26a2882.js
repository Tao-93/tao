(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{291:function(n,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"路由跳转传参"}},[n._v("路由跳转传参")]),a("p",[n._v("vue中路由跳转传参数有多种,自己常用的是下面的几种")]),a("ul",[a("li",[n._v("通过"),a("code",[n._v("router-link")]),n._v("进行跳转")]),a("li",[n._v("通过编程导航进行路由跳转")])]),a("h2",{attrs:{id:"router-link"}},[n._v("router-link")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("<router-link \n    :to=\"{\n        path: 'yourPath', \n        params: { \n            name: 'name', \n            dataObj: data\n        },\n        query: {\n            name: 'name', \n            dataObj: data\n        }\n    }\">\n</router-link>\n\n 1. path   -> 是要跳转的路由路径,也可以是路由文件里面配置的 name 值,两者都可以进行路由导航\n 2. params -> 是要传送的参数,参数可以直接key:value形式传递\n 3. query  -> 是通过 url 来传递参数的同样是key:value形式传递\n \n 子组件获取\n \tthis.$route.params.name\n \tthis.$route.query.dataObj\n \t\n 注意：router-link中链接如果是‘/'开始就是从根路由开始，如果开始不带‘/'，则从当前路由开始。\n")])])]),a("h2",{attrs:{id:"router方式跳转"}},[n._v("router方式跳转")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 组件 a\n<template>\n    <button @click=\"sendParams\">传递</button>\n</template>\n<script>\n  export default {\n    name: '',\n    data () {\n      return {\n        msg: 'test message'\n      }\n    },\n    methods: {\n      sendParams () {\n        this.$router.push({\n            path: 'yourPath', \n            name: '要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找',\n            params: { \n                name: 'name', \n                dataObj: this.msg\n            }\n            /*query: {\n                name: 'name', \n                dataObj: this.msg\n            }*/\n        })\n      }\n    },\n    computed: {\n\n    },\n    mounted () {\n\n    }\n  }\n<\/script>\n<style scoped></style>\n----------------------------------------\n// 组件b\n<template>\n    <h3>msg</h3>\n</template>\n<script>\n  export default {\n    name: '',\n    data () {\n      return {\n        msg: ''\n      }\n    },\n    methods: {\n      getParams () {\n        // 取到路由带过来的参数 \n        let routerParams = this.$route.params.dataobj\n        // 将数据放在当前组件的数据内\n        this.msg = routerParams\n      }\n    },\n    watch: {\n    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可\n      '$route': 'getParams'\n    }\n  }\n<\/script>\n")])])]),a("p",[n._v("Now, let's try it 👉")])])}],!1,null,null,null);t.default=r.exports}}]);