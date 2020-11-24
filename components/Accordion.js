!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("../utils/dev-mode"),require("../utils/debug"),require("./Icon"),require("../utils/NoClickFocus"));else if("function"==typeof define&&define.amd)define(["../utils/dev-mode","../utils/debug","./Icon","../utils/NoClickFocus"],e);else{var n="object"==typeof exports?e(require("../utils/dev-mode"),require("../utils/debug"),require("./Icon"),require("../utils/NoClickFocus")):e(t["../utils/dev-mode"],t["../utils/debug"],t["./Icon"],t["../utils/NoClickFocus"]);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}("undefined"!=typeof self?self:this,function(t,e,n,o){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=534)}({0:function(t,e,n){"use strict";e.a=function(t,e,n,o,i,r,s,a){var c,u="function"==typeof t?t.options:t;e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0);o&&(u.functional=!0);r&&(u._scopeId="data-v-"+r);s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i);if(c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}},1:function(e,n){e.exports=t},129:function(t,e,n){"use strict";var o=n(149),i=n(95),r=n(151),s=n(0);var a=Object(s.a)(i.a,o.a,o.b,!1,function(t){this.$s=r.default.locals||r.default},null,null);e.a=a.exports},143:function(t,e,n){"use strict";var o=n(144);e.a=o.a},144:function(t,e,n){"use strict";var o=n(6),i=n.n(o),r=n(2),s=(n.n(r),n(145)),a=n(146);e.a={name:"OAccordion",model:{prop:"open",event:"accordion:update"},props:{open:{type:Number,default:void 0},label:{type:String,default:void 0},subtitle:{type:String,default:void 0},variant:{type:String,default:"normal",validate:t=>["normal","contained","subtle"].includes(t)}},data(){const t=this;return{isOpen:0,state:{children:[],get openIdx(){return(void 0!==t.open?t.open:t.isOpen)||0},set openIdx(e){void 0!==t.open?t.$emit("accordion:update",e):t.isOpen=e},get variant(){return t.variant}}}},provide(){return{[s.a]:this.state}},methods:{isAccordionItem:t=>t.componentOptions&&t.componentOptions.Ctor.extendOptions===a.a,enforceChildType(t=[]){return t.every(t=>!t.tag||this.isAccordionItem(t))}},render(){const t=arguments[0],{default:e=[]}=this.$slots;0===e.length&&Object(r.showWarning)("Accordion","Content must be passed into the Accordion");const n=e.filter(t=>this.isAccordionItem(t));return 1===n.length&&Object(r.showWarning)("Accordion","Use the Accordion component as an AccordionItem if you only have one section"),e.length>0&&0===n.length?n.push(t(a.a,{attrs:{label:this.label,subtitle:this.subtitle}},[e])):this.enforceChildType(e)||Object(r.throwError)("Accordion","Only AccordionItems are allowed"),t("div",i()([{class:this.$s.Accordion},{attrs:this.$attrs}]),[n])}}},145:function(t,e,n){"use strict";const o=Symbol("Accordion");e.a=o},146:function(t,e,n){"use strict";var o=n(536),i=n(147),r=n(538),s=n(0);var a=Object(s.a)(i.a,o.a,o.b,!1,function(t){this.$s=r.default.locals||r.default},null,null);e.a=a.exports},147:function(t,e,n){"use strict";var o=n(148);e.a=o.a},148:function(t,e,n){"use strict";var o=n(3),i=(n.n(o),n(42)),r=n.n(i),s=n(129),a=n(145);e.a={name:"OAccordionItem",components:{OIcon:o.OIcon,NoClickFocus:r.a,CollapseTransition:s.a},props:{label:{type:String,required:!0},subtitle:{type:String,default:void 0}},data:()=>({accordionId:Symbol("accordionId")}),inject:{accordion:a.a},computed:{open(){return this.accordion.children[this.accordion.openIdx]===this.accordionId}},created(){this.accordion.children.push(this.accordionId)},beforeDestroy(){const t=this.accordion.children.indexOf(this.accordionId);this.accordion.children.splice(t,1)},methods:{toggleOpen(){const t=this.accordion.children.indexOf(this.accordionId);this.accordion.openIdx=this.accordion.openIdx!==t?t:-1}}}},149:function(t,e,n){"use strict";var o=n(150);n.d(e,"a",function(){return o.a}),n.d(e,"b",function(){return o.b})},150:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i});var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",t._b({attrs:{"enter-active-class":t.$s.transitioning,"leave-active-class":t.$s.transitioning},on:{"before-enter":t.zeroHeight,enter:t.setContentHeight,"after-enter":t.removeHeight,"before-leave":t.setContentHeight,leave:t.onLeave,"after-leave":t.removeHeight}},"transition",t.$attrs,!1),[t._t("default")],2)},i=[]},151:function(t,e,n){"use strict";var o=n(97),i=n.n(o);n.d(e,"default",function(){return i.a})},152:function(t,e){t.exports={LabelWrap:"🚀0-1-03vlwP 🚀0-1-01fyTq",Label:"🚀0-1-01rlU3 🚀0-1-01Cmh6 🚀0-1-01fyTq",HeaderButton:"🚀0-1-0ppIIe 🚀0-1-02_3rZ",AccordionItem:"🚀0-1-0gnuyy 🚀0-1-01fyTq",CollapseIcon:"🚀0-1-08oJ34",variant_contained:"🚀0-1-01o6Pe",variant_normal:"🚀0-1-01S3-j",open:"🚀0-1-03pB0K",Container:"🚀0-1-0F1jHg",variant_subtle:"🚀0-1-03u3Lh",InnerHeaderButton:"🚀0-1-0cJiaI",hasSubtitle:"🚀0-1-01RsIc"}},153:function(t,e){t.exports={Accordion:"🚀0-1-0hSW-c"}},2:function(t,n){t.exports=e},3:function(t,e){t.exports=n},42:function(t,e){t.exports=o},534:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=(n.n(o),n(535)),r=n(146);n.d(e,"OAccordion",function(){return i.a}),n.d(e,"OAccordionItem",function(){return r.a})},535:function(t,e,n){"use strict";var o=n(143),i=n(539),r=n(0);var s=Object(r.a)(o.a,void 0,void 0,!1,function(t){this.$s=i.default.locals||i.default},null,null);e.a=s.exports},536:function(t,e,n){"use strict";var o=n(537);n.d(e,"a",function(){return o.a}),n.d(e,"b",function(){return o.b})},537:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i});var o=function(){var t,e,n=this,o=n.$createElement,i=n._self._c||o;return i("div",{class:[n.$s.AccordionItem,n.$s["variant_"+n.accordion.variant],(t={},t[n.$s.open]=n.open,t)]},[i("button",{class:n.$s.HeaderButton,attrs:{"aria-expanded":!!n.open,type:"button"},on:{click:n.toggleOpen}},[i("no-click-focus",{class:[n.$s.InnerHeaderButton,(e={},e[n.$s.hasSubtitle]=n.subtitle,e)]},["subtle"!==n.accordion.variant?i("o-icon",{class:n.$s.CollapseIcon,attrs:{name:"arrow-right"}}):n._e(),n._v(" "),i("div",{class:n.$s.LabelWrap},[i("div",{class:n.$s.Label},[n._v("\n\t\t\t\t\t"+n._s(n.label)+"\n\t\t\t\t")]),n._v(" "),n.subtitle?i("div",[n._v("\n\t\t\t\t\t"+n._s(n.subtitle)+"\n\t\t\t\t")]):n._e()]),n._v(" "),"subtle"===n.accordion.variant?i("o-icon",{class:n.$s.CollapseIcon,attrs:{name:"arrow-down"}}):n._e()],1)],1),n._v(" "),i("collapse-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:n.open,expression:"open"}],attrs:{"aria-hidden":!n.open}},[i("div",{class:n.$s.Container},[n._t("default")],2)])])],1)},i=[]},538:function(t,e,n){"use strict";var o=n(152),i=n.n(o);n.d(e,"default",function(){return i.a})},539:function(t,e,n){"use strict";var o=n(153),i=n.n(o);n.d(e,"default",function(){return i.a})},6:function(t,e){var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function o(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}t.exports=function(t){return t.reduce(function(t,e){var i,r,s,a,c;for(s in e)if(i=t[s],r=e[s],i&&n.test(s))if("class"===s&&("string"==typeof i&&(c=i,t[s]=i={},i[c]=!0),"string"==typeof r&&(c=r,e[s]=r={},r[c]=!0)),"on"===s||"nativeOn"===s||"hook"===s)for(a in r)i[a]=o(i[a],r[a]);else if(Array.isArray(i))t[s]=i.concat(r);else if(Array.isArray(r))t[s]=[i].concat(r);else for(a in r)i[a]=r[a];else t[s]=e[s];return t},{})}},95:function(t,e,n){"use strict";var o=n(96);e.a=o.a},96:function(t,e,n){"use strict";e.a={methods:{zeroHeight(t){Object.assign(t.style,{height:"0px",paddingTop:"0px",paddingBottom:"0px"})},removeHeight(t){t.style.height="auto"},setContentHeight(t){const e=this.$el?this.$el.scrollHeight:0;Object.assign(t.style,{height:"".concat(e,"px"),paddingTop:null,paddingBottom:null})},onLeave(t){this.setContentHeight(t),this.zeroHeight(t)}}}},97:function(t,e){t.exports={transitioning:"🚀0-1-03hdSM"}}})});
//# sourceMappingURL=Accordion.js.map