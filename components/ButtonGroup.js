!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("../utils/dev-mode"),require("../utils/debug"),require("./Button"),require("../utils/v-node-filter"),require("./Form"));else if("function"==typeof define&&define.amd)define(["../utils/dev-mode","../utils/debug","./Button","../utils/v-node-filter","./Form"],e);else{var o="object"==typeof exports?e(require("../utils/dev-mode"),require("../utils/debug"),require("./Button"),require("../utils/v-node-filter"),require("./Form")):e(t["../utils/dev-mode"],t["../utils/debug"],t["./Button"],t["../utils/v-node-filter"],t["./Form"]);for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}("undefined"!=typeof self?self:this,function(t,e,o,n,r){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=607)}({0:function(t,e,o){"use strict";e.a=function(t,e,o,n,r,u,s,i){var l,a="function"==typeof t?t.options:t;e&&(a.render=e,a.staticRenderFns=o,a._compiled=!0);n&&(a.functional=!0);u&&(a._scopeId="data-v-"+u);s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},a._ssrRegister=l):r&&(l=i?function(){r.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:r);if(l)if(a.functional){a._injectStyles=l;var d=a.render;a.render=function(t,e){return l.call(e),d(t,e)}}else{var c=a.beforeCreate;a.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:a}}},1:function(e,o){e.exports=t},10:function(t,e){t.exports=r},2:function(t,o){t.exports=e},201:function(t,e,o){"use strict";var n=o(202);e.a=n.a},202:function(t,e,o){"use strict";var n=o(2),r=(o.n(n),o(10)),u=(o.n(r),o(8)),s=o.n(u),i=o(203),l=o(206);e.a={name:"OButtonGroup",components:{VnodeFilter:s.a},model:{event:"button-group:update"},inject:{parentButtonGroup:{from:l.a,default:void 0},formItem:{from:r.FormItemKey,default:void 0}},provide(){return{[l.a]:this}},props:{value:{type:null,default:void 0},disabled:{type:Boolean,default:!1},mode:{type:String,default:"normal",validator:t=>["normal","multi-select","single-select","single-select-optional"].includes(t)},size:{type:String,default:void 0,validator:t=>["small","medium","large"].includes(t)},fullWidth:{type:Boolean,default:!1},flush:{type:[String,Array],default:void 0,validator:t=>(Array.isArray(t)||(t=[t]),!(t.length<1||t.length>4)&&t.every(t=>["top","left","bottom","right"].includes(t)))}},data(){return{ButtonGroupItem:i.a,ButtonGroup:this.constructor.extendOptions}},computed:{isNested(){return!!this.parentButtonGroup},_size(){return this.isNested?this.parentButtonGroup.size:this.size},_disabled(){return this.isNested&&this.parentButtonGroup.disabled||this.disabled},_fullWidth(){return this.isNested?this.parentButtonGroup.fullWidth:this.fullWidth},flushClasses(){let t=this.flush||[];return Array.isArray(t)||(t=[t]),t.map(t=>this.$s["flush-".concat(t)])}},watch:{value(){this.validateProps()}},created(){this.validateProps(),this.formItem&&this.formItem.addUnwrappedChild()},destroyed(){this.formItem&&this.formItem.removeUnwrappedChild()},methods:{onComponentMismatch(){this.isNested?Object(n.throwError)("ButtonGroup","You can only use the ButtonGroupItem component within a nested ButtonGroup."):Object(n.throwError)("ButtonGroup","You can only use the ButtonGroup and ButtonGroupItem components within a ButtonGroup.")},updateSelected(t){if(this.mode.startsWith("single-select"))"single-select-optional"===this.mode&&this.value===t&&(t=null),this.value!==t&&this.$emit("button-group:update",t);else if("multi-select"===this.mode){const e=this.value.slice();e.includes(t)?e.splice(e.indexOf(t),1):e.push(t),this.$emit("button-group:update",e)}},validateProps(){"multi-select"!==this.mode||Array.isArray(this.value)||Object(n.throwError)("ButtonGroup",'The v-model value for a multi-select must be of type Array. "'.concat(this.value,'" was found instead.')),this.isNested&&this.size&&Object(n.throwError)("ButtonGroup","Cannot individually set the size of nested ButtonGroups, can only set it from the parent."),this.isNested&&this.fullWidth&&Object(n.throwError)("ButtonGroup","Cannot individually set full-width on nested ButtonGroups, can only set it from the parent.")}}}},203:function(t,e,o){"use strict";var n=o(611),r=o(204),u=o(614),s=o(0);var i=Object(s.a)(r.a,n.a,n.b,!1,function(t){this.$s=u.default.locals||u.default},null,null);e.a=i.exports},204:function(t,e,o){"use strict";var n=o(205);e.a=n.a},205:function(t,e,o){"use strict";var n=o(2),r=(o.n(n),o(7)),u=(o.n(r),o(613)),s=o.n(u),i=o(206);e.a={name:"OButtonGroupItem",components:{OButton:r.OButton},inject:{group:i.a},provide(){return{[r.ButtonKey]:this.buttonApi}},props:{value:{type:null,default:void 0},disabled:{type:Boolean,default:!1}},data(){return{buttonApi:{className:this.buttonClasses}}},computed:{isSelected(){const{group:t,value:e}=this;return t.mode.startsWith("single-select")?t.value===e:"multi-select"===t.mode&&t.value.includes(e)},isDisabled(){return this.group._disabled||this.disabled},isFullWidth(){return this.group._fullWidth},size(){return this.group._size},buttonClasses(){return[this.group.$s.Button,{[this.group.$s.selected]:this.isSelected},{[this.group.$s.disabled]:this.isDisabled}]}},watch:{buttonClasses(t){this.buttonApi.className=t}},mounted(){"normal"!==this.group.mode&&s()(this.value)&&Object(n.throwError)("ButtonGroupItem","The 'value' property is required for ButtonGroupItems within a ButtonGroup with mode '".concat(this.group.mode,"'")),this.buttonApi.className=this.buttonClasses},methods:{updateSelected(){this.group.updateSelected(this.value)}}}},206:function(t,e,o){"use strict";const n=Symbol("ButtonGroup");e.a=n},207:function(t,e){t.exports={"full-width":"🚀0-0-03hkH4"}},208:function(t,e){t.exports={ButtonGroup:"🚀0-0-03FpOS",NestedButtonGroup:"🚀0-0-03BzbN","full-width":"🚀0-0-01p_To",Button:"🚀0-0-01TBIe",selected:"🚀0-0-022xOF",disabled:"🚀0-0-09Dg07",ButtonWrapper:"🚀0-0-01y346","flush-top":"🚀0-0-01Z7qS","flush-bottom":"🚀0-0-02UJ-u","flush-left":"🚀0-0-02DI69","flush-right":"🚀0-0-01gxow"}},607:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),r=(o.n(n),o(608)),u=o(203);o.d(e,"OButtonGroup",function(){return r.a}),o.d(e,"OButtonGroupItem",function(){return u.a})},608:function(t,e,o){"use strict";var n=o(609),r=o(201),u=o(615),s=o(0);var i=Object(s.a)(r.a,n.a,n.b,!1,function(t){this.$s=u.default.locals||u.default},null,null);e.a=i.exports},609:function(t,e,o){"use strict";var n=o(610);o.d(e,"a",function(){return n.a}),o.d(e,"b",function(){return n.b})},610:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r});var n=function(){var t,e=this,o=e.$createElement,n=e._self._c||o;return n("div",{class:[e.flushClasses,(t={},t[e.$s.ButtonGroup]=!e.isNested,t[e.$s.NestedButtonGroup]=e.isNested,t[e.$s["full-width"]]=e._fullWidth,t)]},[n("vnode-filter",{attrs:{"enforce-component":[e.ButtonGroup,e.ButtonGroupItem],"remove-whitespace":""},on:{componentMismatch:e.onComponentMismatch}},[e._t("default")],2)],1)},r=[]},611:function(t,e,o){"use strict";var n=o(612);o.d(e,"a",function(){return n.a}),o.d(e,"b",function(){return n.b})},612:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r});var n=function(){var t,e=this,o=e.$createElement;return(e._self._c||o)("o-button",e._g({class:[e.group.$s.ButtonWrapper,(t={},t[e.$s["full-width"]]=e.isFullWidth,t)],attrs:{size:e.size,"full-width":e.isFullWidth,disabled:e.isDisabled,selected:e.isSelected},on:{click:e.updateSelected}},e.$listeners),[e._t("default")],2)},r=[]},613:function(t,e){t.exports=function(t){return null==t}},614:function(t,e,o){"use strict";var n=o(207),r=o.n(n);o.d(e,"default",function(){return r.a})},615:function(t,e,o){"use strict";var n=o(208),r=o.n(n);o.d(e,"default",function(){return r.a})},7:function(t,e){t.exports=o},8:function(t,e){t.exports=n}})});
//# sourceMappingURL=ButtonGroup.js.map