(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{287:function(e,n,t){"use strict";t.r(n);var a=t(0),s=Object(a.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"父子组件数据双向绑定"}},[e._v("父子组件数据双向绑定")]),t("h2",{attrs:{id:"通过-on-emit-双向通信"}},[e._v("通过 "),t("code",[e._v("$on")]),e._v(", "),t("code",[e._v("$emit")]),e._v(" 双向通信")]),t("p",[e._v("vm.$emit( event, arg ) ----------触发当前实例上的事件")]),t("p",[e._v("vm.$on( event, fn )----------------监听event事件后运行 fn")]),t("p",[e._v("###"),t("code",[e._v("$on")])]),t("p",[e._v("用来监听的事件，就是监听emit里(eventName)事件的，一量emit触发事件，则$on会接收到，则执行函数事件  。")]),t("p",[e._v("我们基本数据单向传递我们都用props来进行传递，那一旦子组件想改变props传过来的数据，我们是不能直接改变Props里的数据，我们还是要改变父组件的数据")]),t("h3",{attrs:{id:"children组件"}},[e._v("children组件")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template lang=\"pug\">\n  .demo\n    .demo-example(@click=\"changePropsValue\") {{msg}}\n</template>\n\n\n<script>\nexport default {\n  props: ['msg'],\n  methods: {\n    changePropsValue () {\n      this.$emit('changeMsg', '通过$emit触发事件了')\n    }\n  }\n}\n<\/script>复制代码\n")])])]),t("p",[e._v("1.msg是通过父组件传递过来的，我们先前可肯定要在props里声明好\n2.在点击的时候，我们触发了changeMsg事件，第二个参数是，你想要传到父组件的参数")]),t("h3",{attrs:{id:"parent组件"}},[e._v("parent组件")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template lang=\"pug\">\n  div\n    demo(:msg=\"msg\" v-on:changeMsg='onChange')\n</template>\n\n<script>\nimport Demo from './demo.vue'\nexport default {\n  data () {\n    return {\n      msg: '首次数据传递'\n    }\n  },\n  components: {\n    Demo\n  },\n  methods: {\n    onChange (msg) {\n      this.msg = msg\n    }\n  }\n}\n<\/script>\n")])])]),t("p",[e._v("我们随后把demo引入，传入子组件的msg我们事先在data数据里面定义好，同时在demo组件上进行一个on的监听\n1.on :(冒号)后面跟的第一个值是emit触发的事件，也是on所要监听的事件，一量$emit有触发，则马上执行了onChange函数，但本质上vue还是单向数据流的，虽然props不能改变，但是data里的数据是可以进行改变的，一但data的数据和子组件有传递关系，一旦父data数据有变动，子组件props所对应的数据则同时跟着变动")]),t("h2",{attrs:{id:"通过v-model进行"}},[e._v("通过v-model进行")]),t("p",[e._v('自定义事件可以用来创建自定义的表单输入组件，使用 v-model 来进行数据双向绑定。看看这个：input v-model="something"')]),t("p",[e._v("那语法糖则是这样的")]),t("p",[e._v('input\nv-bind:value="something"\nv-on:input="something = $event.target.value"')]),t("h3",{attrs:{id:"这说明了"}},[e._v("这说明了")]),t("p",[e._v('1.v-model里的something这个变量值在语法糖里代表的是value值，在表单上我们可以看作是input的value值，那在其它标签可以看成一个将要传入的Props数据，那唯一不可变的是这个props的Key必须是value\n2.v-on:input="something = event.target.value"\n其实v-model内置也是通过on和emit来进行传递的，进行了input输入事件的监听，然后拿到事件上event.target.value最新的改变something')]),t("p",[e._v("现在老版本的组件库，当2.0取消.sync的时候，自定义组件的时候，如何巧用v-model来进行双向通信")]),t("h3",{attrs:{id:"children组件-2"}},[e._v("children组件")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template lang=\"pug\">\n  .demo\n    .demo-example(@click=\"changePropsValue\") {{value}}\n</template>\n\n\n<script>\nexport default {\n  props: ['value'],\n  methods: {\n    changePropsValue () {\n      this.$emit('input', '通过$emit触发input事件了')\n    }\n  }\n}\n<\/script>复制代码\n")])])]),t("p",[e._v('1.这里的value前面说过了就是v-model传过来的value (  v-bind:value="something")，但是只能用value去接收\n2.这里主要巧用了一点，平时我们改变input输入框的时候，input事件是自己主动触发的，但是，我们也同时可以给他手动触发，我们用$emit进行了手动触发(input)事件')]),t("h3",{attrs:{id:"parent组件-2"}},[e._v("parent组件")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template lang=\"pug\">\n  div\n    demo(v-model ='msg')\n</template>\n\n<script>\nimport Demo from './demo.vue'\nexport default {\n  data () {\n    return {\n      msg: '首次数据传递'\n    }\n  },\n  components: {\n    Demo\n  }\n}\n<\/script>\n")])])]),t("p",[e._v("这个我们直接用v-model像表单那样绑定就直接可以进行父子组件双向绑定了。在v-model的语法糖里封装了v-on:input 去进行监听事件")]),t("h2",{attrs:{id:"_2-3回归的-sync"}},[e._v("2.3回归的 .sync")]),t("p",[e._v("通过$emit去显式地触发一个更新事件;")]),t("p",[e._v("但是相比v-model来说语法上更加直观，更加简洁，毕镜v-model是主要给表单进行又向绑定适用的")]),t("p",[e._v("如果再进一步往底层说，.sync还是进行了$on进行了监听封装，跟v-model一样也同样是一种语法糖")]),t("h3",{attrs:{id:"children组件-3"}},[e._v("children组件")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template lang=\"pug\">\n  .demo\n    .demo-example(@click=\"changePropsValue\") {{msg}}\n</template>\n\n\n<script>\nexport default {\n  props: ['msg'],\n  methods: {\n    changePropsValue () {\n      this.$emit('update:msg', '通过$emit显示触发了更新事件')\n    }\n  }\n}\n<\/script>\n")])])]),t("p",[e._v("1.通过props来进行msg的数据接收\n2.通过$emit来进行触发，第一个参数则是显示触发，update:msg  (msg)则是你需要改变的props里从父组件里接收的值，第二个参数，还是你要更新的值，从语意上设计的也很有感觉，有木有")]),t("h3",{attrs:{id:"parent"}},[e._v("parent")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template lang=\"pug\">\n  div\n    demo(:msg.sync=\"msg\")\n</template>\n\n<script>\nimport Demo from './demo.vue'\nexport default {\n  data () {\n    return {\n      msg: '首次数据传递'\n    }\n  },\n  components: {\n    Demo\n  }\n}\n<\/script>\n")])])]),t("p",[e._v('主要看demo(:msg.sync="msg") 这里直接在向子组件传递的时候还是像1.0的时候加一个.sync,本质上还是它会被扩展为一个自动更新父组件属性的 v-on 侦听器\n(推荐用法，一般对一个模态框进行封装的时候很有用，有了.sync不建议用v-model)')]),t("h2",{attrs:{id:"parent-用法"}},[t("code",[e._v("$parent")]),e._v(" 用法")]),t("h3",{attrs:{id:"children组件-4"}},[e._v("children组件")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<template lang="pug">\n  .demo\n    .demo-example(@click="changePropsValue") 点击按钮\n</template>\n\n\n<script>\nexport default {\n  methods: {\n    changePropsValue () {\n      this.$parent.msg = \'通过$parent显改变了更新事件\'\n    }\n  }\n}\n<\/script>\n')])])]),t("p",[e._v("1.子组件，通过点击按钮，显示的改变了父组件的parent.msg里面的数据")]),t("h3",{attrs:{id:"parent-2"}},[e._v("parent")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template lang=\"pug\">\n  div\n    demo\n    p {{msg}}\n</template>\n\n<script>\nimport Demo from './demo.vue'\nexport default {\n  data () {\n    return {\n      msg: '第一次写入数据'\n    }\n  },\n  components: {\n    Demo\n  }\n}\n<\/script>\n")])])]),t("p",[e._v("在这种四种方法里，我还是推荐用.sync来进行双向通信，一量旦通信机制深了，组件的嵌到超过3层的话，我还是建议用vuex来进行数据的共享，不然一层一层传，再一层一层的向上导，到最后你页面会把控不住，业务代码也就不直观了")]),t("p",[e._v("Now, let's try it 👉")])])}],!1,null,null,null);n.default=s.exports}}]);