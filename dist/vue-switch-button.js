!function(e){var t={};function n(o){if(t[o])return t[o].exports;var u=t[o]={i:o,l:!1,exports:{}};return e[o].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);function o(e,t,n,o,u,i,s,r){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),u&&u.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):u&&(c=r?function(){u.call(this,this.$root.$options.shadowRoot)}:u),c)if(l.functional){l._injectStyles=c;var f=l.render;l.render=function(e,t){return c.call(t),f(e,t)}}else{var a=l.beforeCreate;l.beforeCreate=a?[].concat(a,c):[c]}return{exports:e,options:l}}var u=o({methods:{emitClick:function(){this.$emit("click")}}},function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",{attrs:{"data-vue-menu-item":"",role:"menuitem",tabindex:"-1"},on:{click:e.emitClick,keyup:[function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.emitClick(t):null},function(t){return"button"in t||!e._k(t.keyCode,"space",32,t.key," ")?e.emitClick(t):null}]}},[e._t("default")],2)},[],!1,null,null,null);u.options.__file="MenuItem.vue";var i=u.exports,s=o({mounted:function(){this.$slots.default.forEach(function(e){var t=e.elm;t.setAttribute("role","menuitem"),t.setAttribute("tabindex","-1"),t.setAttribute("data-vue-menu-link","")})}},function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",{attrs:{role:"none"},on:{click:function(t){e.$parent.closeHandler(!1)}}},[e._t("default")],2)},[],!1,null,null,null);s.options.__file="MenuLink.vue";var r=s.exports,c=o({data:function(){return{isOpen:!1,focusables:null,focusedMenuItem:null,id:null}},mounted:function(){this.focusables=this.$refs.list.querySelectorAll("[tabindex='-1']"),this.id=Math.random().toString(36).substring(2,15)},created:function(){var e=this,t=function(t){"Escape"===t.key&&e.isOpen&&e.closeHandler(!0)};document.addEventListener("keydown",t),document.addEventListener("click",this.documentClick),this.$once("hook:destroyed",function(){document.removeEventListener("keydown",t)})},destroyed:function(){document.removeEventListener("click",this.documentClick)},methods:{documentClick:function(e){var t=this.$refs.menu,n=e.target;t===n||t.contains(n)||this.closeHandler()},toggleMenu:function(){this.$emit("click",!this.isOpen),this.isOpen=!this.isOpen},focusNext:function(){this.focusedMenuItem+1>=this.focusables.length?this.focusedMenuItem=0:this.focusedMenuItem=this.focusedMenuItem+1,this.setMenuItemFocus(this.focusedMenuItem)},focusPrev:function(){0===this.focusedMenuItem?this.focusedMenuItem=this.focusables.length-1:this.focusedMenuItem=this.focusedMenuItem-1,this.setMenuItemFocus(this.focusedMenuItem)},setMenuItemFocus:function(e){var t=this;setTimeout(function(){t.focusables[e].focus()},0)},closeHandler:function(e){var t=this;this.isOpen=!1,this.focusedMenuItem=null,e&&setTimeout(function(){t.$refs.button.focus()},0)},openMenuAndFocus:function(e){this.isOpen=!0,this.focusedMenuItem=-1===e?this.focusables.length-1:e,this.setMenuItemFocus(this.focusedMenuItem)}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"menu"},[n("button",{ref:"button",attrs:{"data-vue-menu-button":"","aria-expanded":e.isOpen.toString(),"aria-haspopup":"true","aria-controls":e.id},on:{click:e.toggleMenu,keyup:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;e.openMenuAndFocus(0)},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;e.openMenuAndFocus(-1)}]}},[e._t("menu-button")],2),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"list",attrs:{"data-vue-menu":"",role:"menu",id:e.id},on:{keyup:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.focusNext(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.focusPrev(t):null}],close_menu:function(t){e.closeHandler(!1)}}},[e._t("menu-content")],2)])},[],!1,null,null,null);c.options.__file="MenuWrapper.vue";var l=c.exports;n.d(t,"MenuWrapper",function(){return l}),n.d(t,"MenuItem",function(){return i}),n.d(t,"MenuLink",function(){return r})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLXN3aXRjaC1idXR0b24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iXSwibWFwcGluZ3MiOiJBQUNBIiwic291cmNlUm9vdCI6IiJ9