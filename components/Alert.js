!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../utils/dev-mode"),require("../utils/Spacer"),require("./Layer"));else if("function"==typeof define&&define.amd)define(["../utils/dev-mode","../utils/Spacer","./Layer"],t);else{var n="object"==typeof exports?t(require("../utils/dev-mode"),require("../utils/Spacer"),require("./Layer")):t(e["../utils/dev-mode"],e["../utils/Spacer"],e["./Layer"]);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=540)}({0:function(e,t,n){"use strict";t.a=function(e,t,n,r,o,s,i,c){var a,u="function"==typeof e?e.options:e;t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0);r&&(u.functional=!0);s&&(u._scopeId="data-v-"+s);i?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=a):o&&(a=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o);if(a)if(u.functional){u._injectStyles=a;var l=u.render;u.render=function(e,t){return a.call(t),l(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,a):[a]}return{exports:e,options:u}}},1:function(t,n){t.exports=e},15:function(e,n){e.exports=t},154:function(e,t,n){"use strict";var r=n(155);t.a=r.a},155:function(e,t,n){"use strict";var r=n(23),o=(n.n(r),n(15)),s=n.n(o);t.a={name:"OAlert",components:{Spacer:s.a},inject:{layer:r.OLayer.key},props:{title:{type:String,default:void 0},cancelable:{type:Boolean,default:!1},beforeClose:{type:Function,default:void 0}},watch:{cancelable(e){this.layer.configure({cancelable:e})},beforeClose(e){this.layer.configure({beforeClose:e})}},created(){this.layer.configure({position:"top center",cancelable:this.cancelable,beforeClose:this.beforeClose,afterClose:e=>this.$emit("close",e)})},methods:{close(e){return this.layer.close(e).catch(()=>{})}}}},156:function(e,t){e.exports={Alert:"🚀0-1-015_3c",Content:"🚀0-1-02Clzz",Body:"🚀0-1-01A9Wp",Title:"🚀0-1-02AXcU 🚀0-1-03yU5x 🚀0-1-01fyTq",Actions:"🚀0-1-01Szkx"}},23:function(e,t){e.exports=n},540:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=(n.n(r),n(23)),s=(n.n(o),n(541));n.o(o,"LayerAPI")&&n.d(t,"AlertLayer",function(){return o.LayerAPI}),n.d(t,"OAlert",function(){return s.a})},541:function(e,t,n){"use strict";var r=n(542),o=n(154),s=n(544),i=n(0);var c=Object(i.a)(o.a,r.a,r.b,!1,function(e){this.$s=s.default.locals||s.default},null,null);t.a=c.exports},542:function(e,t,n){"use strict";var r=n(543);n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return r.b})},543:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.Alert},[n("div",{class:e.$s.Content},[e.title||e.$slots.title?n("h2",{class:e.$s.Title},[e._t("title",[e._v("\n\t\t\t\t"+e._s(e.title)+"\n\t\t\t")])],2):e._e(),e._v(" "),n("div",{class:e.$s.Body},[e._t("default")],2)]),e._v(" "),e.$slots.actions||e.$scopedSlots.actions?n("div",{class:e.$s.Actions},[n("spacer",[e._t("actions",null,{close:e.close})],2)],1):e._e()])},o=[]},544:function(e,t,n){"use strict";var r=n(156),o=n.n(r);n.d(t,"default",function(){return o.a})}})});
//# sourceMappingURL=Alert.js.map