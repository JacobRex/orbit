!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("../utils/dev-mode"),require("../utils/debug"),require("../utils/v-node-filter"));else if("function"==typeof define&&define.amd)define(["../utils/dev-mode","../utils/debug","../utils/v-node-filter"],e);else{var n="object"==typeof exports?e(require("../utils/dev-mode"),require("../utils/debug"),require("../utils/v-node-filter")):e(t["../utils/dev-mode"],t["../utils/debug"],t["../utils/v-node-filter"]);for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}("undefined"!=typeof self?self:this,function(t,e,n){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=678)}({0:function(t,e,n){"use strict";e.a=function(t,e,n,r,i,o,s,u){var c,a="function"==typeof t?t.options:t;e&&(a.render=e,a.staticRenderFns=n,a._compiled=!0);r&&(a.functional=!0);o&&(a._scopeId="data-v-"+o);s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},a._ssrRegister=c):i&&(c=u?function(){i.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:i);if(c)if(a.functional){a._injectStyles=c;var f=a.render;a.render=function(t,e){return c.call(e),f(t,e)}}else{var d=a.beforeCreate;a.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:a}}},1:function(e,n){e.exports=t},2:function(t,n){t.exports=e},267:function(t,e,n){"use strict";var r=n(268);e.a=r.a},268:function(t,e,n){"use strict";var r=n(2),i=(n.n(r),n(8)),o=n.n(i),s=n(269);e.a={name:"ODescriptionList",components:{VnodeFilter:o.a},data:()=>({ODescriptionListItem:s.a}),methods:{onComponentMismatch(){Object(r.throwError)("DescriptionList","You can only use the DescriptionListItem component inside DescriptionList")}}}},269:function(t,e,n){"use strict";var r=n(682),i=n(270),o=n(684),s=n(0);var u=Object(s.a)(i.a,r.a,r.b,!1,function(t){this.$s=o.default.locals||o.default},null,null);e.a=u.exports},270:function(t,e,n){"use strict";var r=n(271);e.a=r.a},271:function(t,e,n){"use strict";e.a={name:"ODescriptionListItem",props:{term:{type:String,default:""},description:{type:String,default:""}}}},272:function(t,e){t.exports={Item:"🚀0-1-02Hxqy",Term:"🚀0-1-01u-md 🚀0-1-02Tz3f 🚀0-1-01fyTq",Description:"🚀0-1-02uhZi 🚀0-1-01fyTq"}},273:function(t,e){t.exports={List:"🚀0-1-0wa-2e"}},678:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=(n.n(r),n(679)),o=n(269);n.d(e,"ODescriptionList",function(){return i.a}),n.d(e,"ODescriptionListItem",function(){return o.a})},679:function(t,e,n){"use strict";var r=n(680),i=n(267),o=n(685),s=n(0);var u=Object(s.a)(i.a,r.a,r.b,!1,function(t){this.$s=o.default.locals||o.default},null,null);e.a=u.exports},680:function(t,e,n){"use strict";var r=n(681);n.d(e,"a",function(){return r.a}),n.d(e,"b",function(){return r.b})},681:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this.$createElement,e=this._self._c||t;return e("dl",{class:this.$s.List},[e("vnode-filter",{attrs:{"enforce-component":this.ODescriptionListItem,"remove-whitespace":""},on:{"component-mismatch":this.onComponentMismatch}},[this._t("default")],2)],1)},i=[]},682:function(t,e,n){"use strict";var r=n(683);n.d(e,"a",function(){return r.a}),n.d(e,"b",function(){return r.b})},683:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.Item},[n("dt",{class:t.$s.Term},[t._t("term",[t._v("\n\t\t\t"+t._s(t.term)+"\n\t\t")])],2),t._v(" "),n("dd",{class:t.$s.Description},[t._t("description",[t._v("\n\t\t\t"+t._s(t.description)+"\n\t\t")])],2)])},i=[]},684:function(t,e,n){"use strict";var r=n(272),i=n.n(r);n.d(e,"default",function(){return i.a})},685:function(t,e,n){"use strict";var r=n(273),i=n.n(r);n.d(e,"default",function(){return i.a})},8:function(t,e){t.exports=n}})});
//# sourceMappingURL=DescriptionList.js.map