(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{325:function(n,e,t){"use strict";t.r(e);var l=t(0),o=Object(l.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"echarts-属性设置"}},[n._v("echarts 属性设置")]),t("h2",{attrs:{id:"全图默认背景"}},[n._v("全图默认背景")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("backgroundColor: ‘rgba(0,0,0,0)’\n")])])]),t("h2",{attrs:{id:"默认色板"}},[n._v("默认色板")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("color: ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',\n    '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',\n    '#1e90ff','#ff6347','#7b68ee','#00fa9a','#ffd700',\n    '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'],\n")])])]),t("h2",{attrs:{id:"图表标题"}},[n._v("图表标题")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("title: {\n    x: 'left',                // 水平安放位置，默认为左对齐，可选为：\n                      // 'center' ¦ 'left' ¦ 'right'\n                      // ¦ {number}（x坐标，单位px）\n    y: 'top',             // 垂直安放位置，默认为全图顶端，可选为：\n                      // 'top' ¦ 'bottom' ¦ 'center'\n                      // ¦ {number}（y坐标，单位px）\n    //textAlign: null          // 水平对齐方式，默认根据x设置自动调整\n    backgroundColor: 'rgba(0,0,0,0)',\n    borderColor: '#ccc',          // 标题边框颜色\n    borderWidth: 0,           // 标题边框线宽，单位px，默认为0（无边框）\n    padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，\n                              // 接受数组分别设定上右下左边距，同css\n    itemGap: 10,             // 主副标题纵向间隔，单位px，默认为10，\n    textStyle: {\n        fontSize: 18,\n        fontWeight: 'bolder',\n        color: '#333'                             // 主标题文字颜色\n    },\n    subtextStyle: {\n        color: '#aaa'                            // 副标题文字颜色\n    }\n},\n")])])]),t("h2",{attrs:{id:"提示框"}},[n._v("提示框")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("tooltip: {\n    trigger: 'item',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'\n    showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms\n    hideDelay: 100,            // 隐藏延迟，单位ms\n    transitionDuration : 0.4,         // 动画变换时间，单位s\n    backgroundColor: 'rgba(0,0,0,0.7)',  // 提示背景颜色，默认为透明度为0.7的黑色\n    borderColor: '#333',            // 提示边框颜色\n    borderRadius: 4,                // 提示边框圆角，单位px，默认为4\n    borderWidth: 0,                // 提示边框线宽，单位px，默认为0（无边框）\n    padding: 5,                   // 提示内边距，单位px，默认各方向内边距为5，\n                                // 接受数组分别设定上右下左边距，同css\n    axisPointer : {                 // 坐标轴指示器，坐标轴触发有效\n        type : 'line',         // 默认为直线，可选为：'line' | 'shadow'\n        lineStyle : {          // 直线指示器样式设置\n            color: '#48b',\n            width: 2,\n            type: 'solid'\n        },\n        shadowStyle : {              // 阴影指示器样式设置\n            width: 'auto',         // 阴影大小\n            color: 'rgba(150,150,150,0.3)'  // 阴影颜色\n        }\n    },\n    textStyle: {\n        color: '#fff'\n    }\n},\n")])])]),t("h2",{attrs:{id:"图例"}},[n._v("图例")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("legend: {\n    orient: 'horizontal',          // 布局方式，默认为水平布局，可选为：\n                       // 'horizontal' ¦ 'vertical'\n    x: 'center',                // 水平安放位置，默认为全图居中，可选为：\n                              // 'center' ¦ 'left' ¦ 'right'\n                       // ¦ {number}（x坐标，单位px）\n    y: 'top',              // 垂直安放位置，默认为全图顶端，可选为：\n                       // 'top' ¦ 'bottom' ¦ 'center'\n                       // ¦ {number}（y坐标，单位px）\n    backgroundColor: 'rgba(0,0,0,0)',\n    borderColor: '#ccc',            // 图例边框颜色\n    borderWidth: 0,                // 图例边框线宽，单位px，默认为0（无边框）\n    padding: 5,                  // 图例内边距，单位px，默认各方向内边距为5，\n                               // 接受数组分别设定上右下左边距，同css\n    itemGap: 10,              // 各个item之间的间隔，单位px，默认为10，\n                        // 横向布局时为水平间隔，纵向布局时为纵向间隔\n    itemWidth: 20,             // 图例图形宽度\n    itemHeight: 14,            // 图例图形高度\n    textStyle: {\n        color: '#333'                              // 图例文字颜色\n    }\n},\n")])])]),t("h2",{attrs:{id:"值域"}},[n._v("值域")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("dataRange: {\n    orient: 'vertical',             // 布局方式，默认为垂直布局，可选为：\n                        // 'horizontal' ¦ 'vertical'\n    x: 'left',                   // 水平安放位置，默认为全图左对齐，可选为：\n                        // 'center' ¦ 'left' ¦ 'right'\n                        // ¦ {number}（x坐标，单位px）\n    y: 'bottom',                  // 垂直安放位置，默认为全图底部，可选为：\n                         // 'top' ¦ 'bottom' ¦ 'center'\n                         // ¦ {number}（y坐标，单位px）\n    backgroundColor: 'rgba(0,0,0,0)',\n    borderColor: '#ccc',             // 值域边框颜色\n    borderWidth: 0,                 // 值域边框线宽，单位px，默认为0（无边框）\n    padding: 5,                    // 值域内边距，单位px，默认各方向内边距为5，\n                         // 接受数组分别设定上右下左边距，同css\n    itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，\n                        // 横向布局时为水平间隔，纵向布局时为纵向间隔\n    itemWidth: 20,             // 值域图形宽度，线性渐变水平布局宽度为该值 * 10\n    itemHeight: 14,            // 值域图形高度，线性渐变垂直布局高度为该值 * 10\n    splitNumber: 5,            // 分割段数，默认为5，为0时为线性渐变\n    color:['#1e90ff','#f0ffff'],//颜色\n    //text:['高','低'],              // 文本，默认为数值文本\n    textStyle: {\n        color: '#333'                                // 值域文字颜色\n    }\n},\n \ntoolbox: {\n    orient: 'horizontal',            // 布局方式，默认为水平布局，可选为：\n                        // 'horizontal' ¦ 'vertical'\n    x: 'right',              // 水平安放位置，默认为全图右对齐，可选为：\n                        // 'center' ¦ 'left' ¦ 'right'\n                        // ¦ {number}（x坐标，单位px）\n    y: 'top',               // 垂直安放位置，默认为全图顶端，可选为：\n                        // 'top' ¦ 'bottom' ¦ 'center'\n                        // ¦ {number}（y坐标，单位px）\n    color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],\n    backgroundColor: 'rgba(0,0,0,0)',    // 工具箱背景颜色\n    borderColor: '#ccc',             // 工具箱边框颜色\n    borderWidth: 0,                 // 工具箱边框线宽，单位px，默认为0（无边框）\n    padding: 5,                    // 工具箱内边距，单位px，默认各方向内边距为5，\n                                // 接受数组分别设定上右下左边距，同css\n    itemGap: 10,                  // 各个item之间的间隔，单位px，默认为10，\n                                // 横向布局时为水平间隔，纵向布局时为纵向间隔\n    itemSize: 16,              // 工具箱图形宽度\n    featureImageIcon : {},            // 自定义图片icon\n    featureTitle : {\n        mark : '辅助线开关',\n        markUndo : '删除辅助线',\n        markClear : '清空辅助线',\n        dataZoom : '区域缩放',\n        dataZoomReset : '区域缩放后退',\n        dataView : '数据视图',\n        lineChart : '折线图切换',\n        barChart : '柱形图切换',\n        restore : '还原',\n        saveAsImage : '保存为图片'\n    }\n},\n")])])]),t("h2",{attrs:{id:"区域缩放控制器"}},[n._v("区域缩放控制器")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("dataZoom: {\n    orient: 'horizontal',         // 布局方式，默认为水平布局，可选为：\n                             // 'horizontal' ¦ 'vertical'\n    // x: {number},              // 水平安放位置，默认为根据grid参数适配，可选为：\n                             // {number}（x坐标，单位px）\n    // y: {number},              // 垂直安放位置，默认为根据grid参数适配，可选为：\n                             // {number}（y坐标，单位px）\n    // width: {number},           // 指定宽度，横向布局时默认为根据grid参数适配\n    // height: {number},          // 指定高度，纵向布局时默认为根据grid参数适配\n    backgroundColor: 'rgba(0,0,0,0)',    // 背景颜色\n    dataBackgroundColor: '#eee',       // 数据背景颜色\n    fillerColor: 'rgba(144,197,237,0.2)', // 填充颜色\n    handleColor: 'rgba(70,130,180,0.8)'       // 手柄颜色\n},\n")])])]),t("p",[n._v("##网格")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("grid: {\n    x: 80,\n    y: 60,\n    x2: 80,\n    y2: 60,\n    // width: {totalWidth} - x - x2,\n    // height: {totalHeight} - y - y2,\n    backgroundColor: 'rgba(0,0,0,0)',\n    borderWidth: 1,\n    borderColor: '#ccc'\n},\n")])])]),t("h2",{attrs:{id:"类目轴"}},[n._v("类目轴")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("categoryAxis: {\n    position: 'bottom',        // 位置\n    nameLocation: 'end',      // 坐标轴名字位置，支持'start' | 'end'\n    boundaryGap: true,     // 类目起始和结束两端空白策略\n    axisLine: {            // 坐标轴线\n        show: true,         // 默认显示，属性show控制显示与否\n        lineStyle: {        // 属性lineStyle控制线条样式\n            color: '#48b',\n            width: 2,\n            type: 'solid'\n        }\n    },\n    axisTick: {            // 坐标轴小标记\n        show: true,       // 属性show控制显示与否，默认不显示\n        interval: 'auto',\n        // onGap: null,\n        inside : false,        // 控制小标记是否在grid里\n        length :5,         // 属性length控制线长\n        lineStyle: {       // 属性lineStyle控制线条样式\n            color: '#333',\n            width: 1\n        }\n    },\n    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel\n        show: true,\n        interval: 'auto',\n        rotate: 0,\n        margin: 8,\n        // formatter: null,\n        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE\n            color: '#333'\n        }\n    },\n    splitLine: {                // 分隔线\n        show: true,        // 默认显示，属性show控制显示与否\n        // onGap: null,\n        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式\n            color: ['#ccc'],\n            width: 1,\n            type: 'solid'\n        }\n    },\n    splitArea: {                // 分隔区域\n        show: false,       // 默认不显示，属性show控制显示与否\n        // onGap: null,\n        areaStyle: {        // 属性areaStyle（详见areaStyle）控制区域样式\n            color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']\n        }\n    }\n},\n")])])]),t("h2",{attrs:{id:"数值型坐标轴默认参数"}},[n._v("数值型坐标轴默认参数")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("valueAxis: {\n    position: 'left',      // 位置\n    nameLocation: 'end',     // 坐标轴名字位置，支持'start' | 'end'\n    nameTextStyle: {},     // 坐标轴文字样式，默认取全局样式\n    boundaryGap: [0, 0],    // 数值起始和结束两端空白策略\n    splitNumber: 5,        // 分割段数，默认为5\n    axisLine: {             // 坐标轴线\n        show: true,      // 默认显示，属性show控制显示与否\n        lineStyle: {      // 属性lineStyle控制线条样式\n            color: '#48b',\n            width: 2,\n            type: 'solid'\n        }\n    },\n    axisTick: {            // 坐标轴小标记\n        show: false,       // 属性show控制显示与否，默认不显示\n        inside : false,      // 控制小标记是否在grid里\n        length :5,          // 属性length控制线长\n        lineStyle: {       // 属性lineStyle控制线条样式\n            color: '#333',\n            width: 1\n        }\n    },\n    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel\n        show: true,\n        rotate: 0,\n        margin: 8,\n        // formatter: null,\n        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE\n            color: '#333'\n        }\n    },\n    splitLine: {                // 分隔线\n        show: true,        // 默认显示，属性show控制显示与否\n        lineStyle: {          // 属性lineStyle（详见lineStyle）控制线条样式\n            color: ['#ccc'],\n            width: 1,\n            type: 'solid'\n        }\n    },\n    splitArea: {                // 分隔区域\n        show: false,       // 默认不显示，属性show控制显示与否\n        areaStyle: {       // 属性areaStyle（详见areaStyle）控制区域样式\n            color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']\n        }\n    }\n},\n \npolar : {\n    center : ['50%', '50%'],    // 默认全局居中\n    radius : '75%',\n    startAngle : 90,\n    splitNumber : 5,\n    name : {\n        show: true,\n        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE\n            color: '#333'\n        }\n    },\n    axisLine: {            // 坐标轴线\n        show: true,         // 默认显示，属性show控制显示与否\n        lineStyle: {        // 属性lineStyle控制线条样式\n            color: '#ccc',\n            width: 1,\n            type: 'solid'\n        }\n    },\n    axisLabel: {                // 坐标轴文本标签，详见axis.axisLabel\n        show: false,\n        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE\n            color: '#333'\n        }\n    },\n    splitArea : {\n        show : true,\n        areaStyle : {\n            color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']\n        }\n    },\n    splitLine : {\n        show : true,\n        lineStyle : {\n            width : 1,\n            color : '#ccc'\n        }\n    }\n},\n")])])]),t("h2",{attrs:{id:"柱形图默认参数"}},[n._v("柱形图默认参数")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("bar: {\n    barMinHeight: 0,            // 最小高度改为0\n    // barWidth: null,        // 默认自适应\n    barGap: '30%',           // 柱间距离，默认为柱形宽度的30%，可设固定值\n    barCategoryGap : '20%',   // 类目间柱形距离，默认为类目间距的20%，可设固定值\n    itemStyle: {\n        normal: {\n            // color: '各异',\n            barBorderColor: '#fff',         // 柱条边线\n            barBorderRadius: 0,            // 柱条边线圆角，单位px，默认为0\n            barBorderWidth: 1,             // 柱条边线线宽，单位px，默认为1\n            label: {\n                show: false\n                                         // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为\n                                         // 'inside'|'left'|'right'|'top'|'bottom'\n                                        // textStyle: null // 默认使用全局文本样式，详见TEXTSTYLE\n            }\n        },\n        emphasis: {\n            // color: '各异',\n            barBorderColor: 'rgba(0,0,0,0)',            // 柱条边线\n            barBorderRadius: 0,                // 柱条边线圆角，单位px，默认为0\n            barBorderWidth: 1,                     // 柱条边线线宽，单位px，默认为1\n            label: {\n                show: false\n                // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为\n                //           'inside'|'left'|'right'|'top'|'bottom'\n                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE\n            }\n        }\n    }\n},\n")])])]),t("h2",{attrs:{id:"折线图默认参数"}},[n._v("折线图默认参数")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("line: {\n    itemStyle: {\n        normal: {\n            // color: 各异,\n            label: {\n                show: false\n                // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为\n                //           'inside'|'left'|'right'|'top'|'bottom'\n                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE\n            },\n            lineStyle: {\n                width: 2,\n                type: 'solid',\n                shadowColor : 'rgba(0,0,0,0)', //默认透明\n                shadowBlur: 5,\n                shadowOffsetX: 3,\n                shadowOffsetY: 3\n            }\n        },\n        emphasis: {\n            // color: 各异,\n            label: {\n                show: false\n                // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为\n                //           'inside'|'left'|'right'|'top'|'bottom'\n                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE\n            }\n        }\n    },\n    //smooth : false,\n    //symbol: null,             // 拐点图形类型\n    symbolSize: 2,          // 拐点图形大小\n    //symbolRotate : null,       // 拐点图形旋转控制\n    showAllSymbol: false                   // 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略）\n},\n")])])]),t("h2",{attrs:{id:"k线图默认参数"}},[n._v("K线图默认参数")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("k: {\n    // barWidth : null              // 默认自适应\n    // barMaxWidth : null           // 默认自适应\n    itemStyle: {\n        normal: {\n            color: '#fff',      // 阳线填充颜色\n            color0: '#00aa11',  // 阴线填充颜色\n            lineStyle: {\n                width: 1,\n                color: '#ff3200',    // 阳线边框颜色\n                color0: '#00aa11'          // 阴线边框颜色\n            }\n        },\n        emphasis: {\n            // color: 各异,\n            // color0: 各异\n        }\n    }\n},\n")])])]),t("h2",{attrs:{id:"散点图默认参数"}},[n._v("散点图默认参数")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("scatter: {\n    //symbol: null,         // 图形类型\n    symbolSize: 4,       // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2\n    //symbolRotate : null,   // 图形旋转控制\n    large: false,        // 大规模散点图\n    largeThreshold: 2000,   // 大规模阀值，large为true且数据量>largeThreshold才启用大规模模式\n    itemStyle: {\n        normal: {\n            // color: 各异,\n            label: {\n                show: false\n                // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为\n                //           'inside'|'left'|'right'|'top'|'bottom'\n                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE\n            }\n        },\n        emphasis: {\n            // color: '各异'\n            label: {\n                show: false\n                // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为\n                //           'inside'|'left'|'right'|'top'|'bottom'\n                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE\n            }\n        }\n    }\n},\n")])])]),t("h2",{attrs:{id:"雷达图默认参数"}},[n._v("雷达图默认参数")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("radar : {\n    itemStyle: {\n        normal: {\n            // color: 各异,\n            label: {\n                show: false\n            },\n            lineStyle: {\n                width: 2,\n                type: 'solid'\n            }\n        },\n        emphasis: {\n            // color: 各异,\n            label: {\n                show: false\n            }\n        }\n    },\n    //symbol: null,          // 拐点图形类型\n    symbolSize: 2          // 可计算特性参数，空数据拖拽提示图形大小\n    //symbolRotate : null,    // 图形旋转控制\n},\n")])])]),t("h2",{attrs:{id:"饼图默认参数"}},[n._v("饼图默认参数")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("pie: {\n    center : ['50%', '50%'],          // 默认全局居中\n    radius : [0, '75%'],\n    clockWise : false,             // 默认逆时针\n    startAngle: 90,\n    minAngle: 0,                 // 最小角度改为0\n    selectedOffset: 10,         // 选中是扇区偏移量\n    itemStyle: {\n        normal: {\n            // color: 各异,\n            borderColor: '#fff',\n            borderWidth: 1,\n            label: {\n                show: true,\n                position: 'outer'\n                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE\n            },\n            labelLine: {\n                show: true,\n                length: 20,\n                lineStyle: {\n                    // color: 各异,\n                    width: 1,\n                    type: 'solid'\n                }\n            }\n        },\n        emphasis: {\n            // color: 各异,\n            borderColor: 'rgba(0,0,0,0)',\n            borderWidth: 1,\n            label: {\n                show: false\n                // position: 'outer'\n                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE\n            },\n            labelLine: {\n                show: false,\n                length: 20,\n                lineStyle: {\n                    // color: 各异,\n                    width: 1,\n                    type: 'solid'\n                }\n            }\n        }\n    }\n},\n \nmap: {\n    mapType: 'china',   // 各省的mapType暂时都用中文\n    mapLocation: {\n        x : 'center',\n        y : 'center'\n        // width    // 自适应\n        // height   // 自适应\n    },\n    showLegendSymbol : true,       // 显示图例颜色标识（系列标识的小圆点），存在legend时生效\n    itemStyle: {\n        normal: {\n            // color: 各异,\n            borderColor: '#fff',\n            borderWidth: 1,\n            areaStyle: {\n                color: '#ccc'   //rgba(135,206,250,0.8)\n            },\n            label: {\n                show: false,\n                textStyle: {\n                    color: 'rgba(139,69,19,1)'\n                }\n            }\n        },\n        emphasis: {                // 也是选中样式\n            // color: 各异,\n            borderColor: 'rgba(0,0,0,0)',\n            borderWidth: 1,\n            areaStyle: {\n                color: 'rgba(255,215,0,0.8)'\n            },\n            label: {\n                show: false,\n                textStyle: {\n                    color: 'rgba(139,69,19,1)'\n                }\n            }\n        }\n    }\n},\n \nforce : {\n    // 数据map到圆的半径的最小值和最大值\n    minRadius : 10,\n    maxRadius : 20,\n    density : 1.0,\n    attractiveness : 1.0,\n    // 初始化的随机大小位置\n    initSize : 300,\n    // 向心力因子，越大向心力越大\n    centripetal : 1,\n    // 冷却因子\n    coolDown : 0.99,\n    // 分类里如果有样式会覆盖节点默认样式\n    itemStyle: {\n        normal: {\n            // color: 各异,\n            label: {\n                show: false\n                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE\n            },\n            nodeStyle : {\n                brushType : 'both',\n                color : '#f08c2e',\n                strokeColor : '#5182ab'\n            },\n            linkStyle : {\n                strokeColor : '#5182ab'\n            }\n        },\n        emphasis: {\n            // color: 各异,\n            label: {\n                show: false\n                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE\n            },\n            nodeStyle : {},\n            linkStyle : {}\n        }\n    }\n},\n \nchord : {\n    radius : ['65%', '75%'],\n    center : ['50%', '50%'],\n    padding : 2,\n    sort : 'none',   // can be 'none', 'ascending', 'descending'\n    sortSub : 'none', // can be 'none', 'ascending', 'descending'\n    startAngle : 90,\n    clockWise : false,\n    showScale : false,\n    showScaleText : false,\n    itemStyle : {\n        normal : {\n            label : {\n                show : true\n                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE\n            },\n            lineStyle : {\n                width : 0,\n                color : '#000'\n            },\n            chordStyle : {\n                lineStyle : {\n                    width : 1,\n                    color : '#666'\n                }\n            }\n        },\n        emphasis : {\n            lineStyle : {\n                width : 0,\n                color : '#000'\n            },\n            chordStyle : {\n                lineStyle : {\n                    width : 2,\n                    color : '#333'\n                }\n            }\n        }\n    }\n},\n \nisland: {\n    r: 15,\n    calculateStep: 0.1  // 滚轮可计算步长 0.1 = 10%\n},\n \nmarkPoint : {\n    symbol: 'pin',         // 标注类型\n    symbolSize: 10,            // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2\n    //symbolRotate : null, // 标注旋转控制\n    itemStyle: {\n        normal: {\n            // color: 各异，\n            // borderColor: 各异,     // 标注边线颜色，优先于color\n            borderWidth: 2,         // 标注边线线宽，单位px，默认为1\n            label: {\n                show: true,\n                position: 'inside'    // 可选为'left'|'right'|'top'|'bottom'\n                // textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE\n            }\n        },\n        emphasis: {\n            // color: 各异\n            label: {\n                show: true\n                // position: 'inside'    // 'left'|'right'|'top'|'bottom'\n                // textStyle: null     // 默认使用全局文本样式，详见TEXTSTYLE\n            }\n        }\n    }\n},\n \nmarkLine : {\n    // 标线起始和结束的symbol介绍类型，如果都一样，可以直接传string\n    symbol: ['circle', 'arrow'], \n    // 标线起始和结束的symbol大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2\n    symbolSize: [2, 4],\n    // 标线起始和结束的symbol旋转控制\n    //symbolRotate : null,\n    itemStyle: {\n        normal: {\n            // color: 各异,           // 标线主色，线色，symbol主色\n            // borderColor: 随color,       // 标线symbol边框颜色，优先于color\n            borderWidth: 2,          // 标线symbol边框线宽，单位px，默认为2\n            label: {\n                show: false,\n                // 可选为 'start'|'end'|'left'|'right'|'top'|'bottom'\n                position: 'inside', \n                textStyle: {         // 默认使用全局文本样式，详见TEXTSTYLE\n                    color: '#333'\n                }\n            },\n            lineStyle: {\n                // color: 随borderColor,    // 主色，线色，优先级高于borderColor和color\n                // width: 随borderWidth,    // 优先于borderWidth\n                type: 'solid',\n                shadowColor : 'rgba(0,0,0,0)', //默认透明\n                shadowBlur: 5,\n                shadowOffsetX: 3,\n                shadowOffsetY: 3\n            }\n        },\n        emphasis: {\n            // color: 各异\n            label: {\n                show: false\n                // position: 'inside'   // 'left'|'right'|'top'|'bottom'\n                // textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE\n            },\n            lineStyle : {}\n        }\n    }\n},\n \ntextStyle: {\n    decoration: 'none',\n    fontFamily: 'Arial, Verdana, sans-serif',\n    fontFamily2: '微软雅黑',    // IE8- 字体模糊并且不支持不同字体混排，额外指定一份\n    fontSize: 12,\n    fontStyle: 'normal',\n    fontWeight: 'normal'\n},\n")])])]),t("h2",{attrs:{id:"默认标志图形类型列表"}},[n._v("默认标志图形类型列表")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("symbolList : [\n  'circle', 'rectangle', 'triangle', 'diamond',\n  'emptyCircle', 'emptyRectangle', 'emptyTriangle', 'emptyDiamond'\n],\nloadingText : 'Loading...',\n")])])]),t("h2",{attrs:{id:"可计算特性配置，孤岛，提示颜色"}},[n._v("可计算特性配置，孤岛，提示颜色")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("calculable: false,                       // 默认关闭可计算特性\ncalculableColor: 'rgba(255,165,0,0.6)',       // 拖拽提示边框颜色\ncalculableHolderColor: '#ccc',               // 可计算占位提示颜色\nnameConnector: ' & ',\nvalueConnector: ' : ',\nanimation: true,\nanimationThreshold: 2500,           // 动画元素阀值，产生的图形原素超过2500不出动画\naddDataAnimation: true,         // 动态数据接口是否开启动画效果\nanimationDuration: 2000,\nanimationEasing: 'ExponentialOut'             //BounceOut\n")])])])])}],!1,null,null,null);e.default=o.exports}}]);