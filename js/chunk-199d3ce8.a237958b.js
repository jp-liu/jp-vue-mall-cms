(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-199d3ce8"],{"24e5":function(e,t,n){},3573:function(e,t,n){"use strict";var o=n("7a23");Object(o["pushScopeId"])("data-v-65d25f60");var a={class:"page-content"},c={class:"handler"},r=Object(o["createTextVNode"])(" 编辑 "),i=Object(o["createTextVNode"])(" 删除 ");function l(e,t,n,l,u,s){var p=Object(o["resolveComponent"])("el-button"),d=Object(o["resolveComponent"])("jp-table");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(d,Object(o["mergeProps"])({totalCount:e.totalCount,listData:e.pageListData},e.contentConfig,{page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=function(t){return e.pageInfo=t})}),Object(o["createSlots"])({headerHandler:Object(o["withCtx"])((function(){return[e.isCreate?(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:0,type:"primary",size:"medium",onClick:e.handleNewData},{default:Object(o["withCtx"])((function(){var t;return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(null!==(t=e.contentConfig.newBtnTitle)&&void 0!==t?t:"新建数据"),1)]})),_:1},8,["onClick"])):Object(o["createCommentVNode"])("",!0)]})),status:Object(o["withCtx"])((function(t){return[Object(o["createVNode"])(p,{type:t.row.enable?"success":"danger",size:"mini",plain:""},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$filters.showStatus(t.row.enable)),1)]})),_:2},1032,["type"])]})),create:Object(o["withCtx"])((function(t){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$filters.formatTime(t.row.createAt)),1)]})),update:Object(o["withCtx"])((function(t){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$filters.formatTime(t.row.updateAt)),1)]})),handler:Object(o["withCtx"])((function(t){return[Object(o["createElementVNode"])("div",c,[e.isUpdate?(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:0,type:"text",icon:"el-icon-edit",size:"mini",onClick:function(n){return e.handleEditClick(t.row)}},{default:Object(o["withCtx"])((function(){return[r]})),_:2},1032,["onClick"])):Object(o["createCommentVNode"])("",!0),e.isDelete?(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:1,type:"text",icon:"el-icon-delete",size:"mini",onClick:function(n){return e.handleDeleteClick(t.row)}},{default:Object(o["withCtx"])((function(){return[i]})),_:2},1032,["onClick"])):Object(o["createCommentVNode"])("",!0)])]})),_:2},[Object(o["renderList"])(e.otherPropSlots,(function(t){return{name:t.slotName,fn:Object(o["withCtx"])((function(n){return[t.slotName?Object(o["renderSlot"])(e.$slots,t.slotName,{key:0,row:n.row},void 0,!0):Object(o["createCommentVNode"])("",!0)]}))}}))]),1040,["totalCount","listData","page"])])}Object(o["popScopeId"])();var u=n("5530"),s=(n("4de4"),n("0613"));n("99af"),n("7db0");function p(e,t){var n=Object(s["c"])(),o=n.state.login.permissions,a="".concat(e,":").concat(t);return!!o.find((function(e){return-1!==e.indexOf(a)}))}Object(o["pushScopeId"])("data-v-73f467c3");var d={class:"jp-table"},f={class:"header"},b={class:"title"},g={class:"handler"},O={key:0,class:"footer"};function j(e,t,n,a,c,r){var i=Object(o["resolveComponent"])("el-table-column"),l=Object(o["resolveComponent"])("el-table"),u=Object(o["resolveComponent"])("el-pagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",d,[Object(o["createElementVNode"])("div",f,[Object(o["renderSlot"])(e.$slots,"header",{},(function(){return[Object(o["createElementVNode"])("div",b,Object(o["toDisplayString"])(e.title),1),Object(o["createElementVNode"])("div",g,[Object(o["renderSlot"])(e.$slots,"headerHandler",{},void 0,!0)])]}),{},!0)]),Object(o["createVNode"])(l,Object(o["mergeProps"])({data:e.listData,border:"",onSelectionChange:e.selectionChange},e.childrenProps),{default:Object(o["withCtx"])((function(){return[e.showSelectColumn?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:0,type:"selection",align:"center",width:"60"})):Object(o["createCommentVNode"])("",!0),e.showIndexColumn?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:1,type:"index",label:"序号",align:"center",width:"80"})):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.propList,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])(i,Object(o["mergeProps"])({key:t.prop},t,{align:"center","show-overflow-tooltip":""}),{default:Object(o["withCtx"])((function(n){return[Object(o["renderSlot"])(e.$slots,t.slotName,{row:n.row},(function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n.row[t.prop]),1)]}),!0)]})),_:2},1040)})),128)),Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)]})),_:3},16,["data","onSelectionChange"]),e.showFooter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",O,[Object(o["renderSlot"])(e.$slots,"footer",{},(function(){return[Object(o["createVNode"])(u,{onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange,"current-page":e.page.currentPage,"page-size":e.page.pageSize,total:e.totalCount,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]}),{},!0)])):Object(o["createCommentVNode"])("",!0)])}Object(o["popScopeId"])();n("a9e3");var m=Object(o["defineComponent"])({props:{title:{type:String,default:"表格数据"},showIndexColumn:{type:Boolean,default:!0},showSelectColumn:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!0},listData:{type:Array,default:function(){return[]}},propList:{type:Array,default:function(){return[]}},childrenProps:{type:Object,default:function(){return{}}},totalCount:{type:Number,default:0},page:{type:Object,default:function(){return{currentPage:0,pageSize:10}}}},emits:["selectionChange","update:page"],setup:function(e,t){var n=t.emit,o=function(t){e.showSelectColumn&&n("selectionChange",t)},a=function(t){n("update:page",Object(u["a"])(Object(u["a"])({},e.page),{},{currentPage:t}))},c=function(t){n("update:page",Object(u["a"])(Object(u["a"])({},e.page),{},{pageSize:t}))};return{selectionChange:o,handleCurrentChange:a,handleSizeChange:c}}});n("7d0f");m.render=j,m.__scopeId="data-v-73f467c3";var C=m,h=C,N=Object(o["defineComponent"])({components:{JpTable:h},props:{contentConfig:{type:Object,required:!0},pageName:{type:String,required:!0}},emits:["newBtnClick","editBtnClick"],setup:function(e,t){var n=t.emit,a=p(e.pageName,"create"),c=p(e.pageName,"delete"),r=p(e.pageName,"update"),i=p(e.pageName,"query"),l=Object(s["c"])(),d=Object(o["ref"])({currentPage:1,pageSize:10});Object(o["watch"])(d,(function(){return b()}));var f={},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i&&(f=t,l.dispatch("system/getPageListDataAction",{pageName:e.pageName,queryInfo:Object(u["a"])({offset:(d.value.currentPage-1)*d.value.pageSize,size:d.value.pageSize},t)}))};b();var g=Object(o["computed"])((function(){return l.getters["system/pageListData"](e.pageName)})),O=Object(o["computed"])((function(){return l.getters["system/pageListDataCount"](e.pageName)})),j=Object(o["computed"])((function(){return e.contentConfig.propList.filter((function(e){return"status"!==e.slotName&&("create"!==e.slotName&&("update"!==e.slotName&&"handler"!==e.slotName))}))})),m=function(t){l.dispatch("system/deletePageDataAction",{pageName:e.pageName,queryInfo:Object(u["a"])({offset:d.value.currentPage*d.value.pageSize,size:d.value.pageSize},f),id:t.id})},C=function(){n("newBtnClick")},h=function(e){n("editBtnClick",e)};return{pageInfo:d,pageListData:g,totalCount:O,getPageData:b,otherPropSlots:j,handleDeleteClick:m,handleEditClick:h,handleNewData:C,isCreate:a,isUpdate:r,isDelete:c}}});n("7768");N.render=l,N.__scopeId="data-v-65d25f60";var v=N;t["a"]=v},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var o=n("1d80"),a=n("5899"),c="["+a+"]",r=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),l=function(e){return function(t){var n=String(o(t));return 1&e&&(n=n.replace(r,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(e,t,n){var o=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var c,r;return a&&"function"==typeof(c=t.constructor)&&c!==n&&o(r=c.prototype)&&r!==n.prototype&&a(e,r),e}},7768:function(e,t,n){"use strict";n("c601")},"7d0f":function(e,t,n){"use strict";n("24e5")},a9e3:function(e,t,n){"use strict";var o=n("83ab"),a=n("da84"),c=n("94ca"),r=n("6eeb"),i=n("5135"),l=n("c6b6"),u=n("7156"),s=n("c04e"),p=n("d039"),d=n("7c73"),f=n("241c").f,b=n("06cf").f,g=n("9bf2").f,O=n("58a8").trim,j="Number",m=a[j],C=m.prototype,h=l(d(C))==j,N=function(e){var t,n,o,a,c,r,i,l,u=s(e,!1);if("string"==typeof u&&u.length>2)if(u=O(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+u}for(c=u.slice(2),r=c.length,i=0;i<r;i++)if(l=c.charCodeAt(i),l<48||l>a)return NaN;return parseInt(c,o)}return+u};if(c(j,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var v,w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(h?p((function(){C.valueOf.call(n)})):l(n)!=j)?u(new m(N(t)),n,w):N(t)},y=o?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;y.length>k;k++)i(m,v=y[k])&&!i(w,v)&&g(w,v,b(m,v));w.prototype=C,C.constructor=w,r(a,j,w)}},c601:function(e,t,n){},f3e6:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a={class:"list"};function c(e,t,n,c,r,i){var l=Object(o["resolveComponent"])("page-content");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(l,{contentConfig:e.contentTableConfig,pageName:"story"},null,8,["contentConfig"])])}var r=n("3573"),i={title:"故事列表",propList:[{prop:"title",label:"故事标题",minWidth:"120"},{prop:"content",label:"我的故事",minWidth:"500"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"create"}],showIndexColumn:!0,showSelectColumn:!1},l=Object(o["defineComponent"])({name:"list",components:{PageContent:r["a"]},setup:function(){return{contentTableConfig:i}}});l.render=c;t["default"]=l}}]);
//# sourceMappingURL=chunk-199d3ce8.a237958b.js.map