var StyleGuideWebComponent=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}})()&&Object.assign;var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},p=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},s=function(t,e){var n={};for(var o in t)0<=e.indexOf(o)||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},d=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},r=function t(e,n,o,r){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},c=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function h(){}var f,v,y,b,m=t(function(t){t.exports=function(){function t(t,e,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=h,n.PropTypes=n}()}),g=t(function(t){!function(){var a={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)&&n.length){var r=s.apply(null,n);r&&t.push(r)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&t.push(i)}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):window.classNames=s}()}),C=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},k={},x=(f=Object,v=f.getPrototypeOf||function(t){return t.__proto__},y=f.setPrototypeOf||function(t,e){return t.__proto__=e,t},b="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),y(new o,n.prototype)},function(t){var e=v(t);return y(t,y(function(){return b(e,arguments,v(this).constructor)},e))}),T=function(n){return x(function(t){function e(){return u(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,n),a(e,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in k||(k[t]=0),++k[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}())},w={},j=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,r=e.cancelable,i=void 0!==r&&r,a=e.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(t,o,i,s);var u=c.preventDefault;return c.preventDefault=function(){u.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},c}}();function P(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new j(e,i({},o,{detail:n}));return t.dispatchEvent(r)}var N=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function E(t){for(var r=t.className,i=!1,a=!0,e=arguments.length,n=Array(1<e?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var s=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;e?i=!0:a=!1;return{className:t,hasClass:e}});return!(!a&&!i)&&s}function A(t,e){if(!t)return!1;for(var n=Object.keys(t),o=n.length,r=0;r<o;++r){var i=n[r];if(t[i]===e)return delete t[i]}return!1}var S=/\s+/,R={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==t[r=n[i]])return e[r];return""}()};function D(n,t,o,r){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=e.capture,a=void 0!==i&&i,s=e.passive,c=void 0===s||s;if(R[t]&&(t=R[t]),!n||!t)return null;var u=void 0===o?"undefined":_(o),l=o&&"string"===u;if("function"===u){if(r){var p=r;a=p.capture,c=p.passive}r=o}for(var d=N?{capture:a,passive:c}:a,h=l?function(t){var e=t.target;for(;!E(e,o)&&e!==n;)e=e.parentNode;if(e!==n)return r(t,e)}:r,f=t.split(S),v=f.length,y=0;y<v;++y)n.addEventListener(f[y],h,d);return function t(){for(var e=0;e<v;++e)n.removeEventListener(f[e],h,d);A(this,t)}}function L(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,i=void 0!==e&&e,n=t.trailing,a=void 0===n||n,s=t.maxWait,c=void 0!==s&&s,u=void 0,l=void 0,p=void 0,d=void 0,h=!1,f=r!==c,v=!1!==c;function y(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return u=e,f&&(l&&clearTimeout(l),l=setTimeout(_,r)),v&&!p&&(p=setTimeout(b,c)),i&&!h&&(h=!0,d=o.apply(void 0,O(u))),d}return y.flush=function(){(l||p)&&(d=o.apply(void 0,O(u)));return g(),d},y.cancel=g,y;function _(){p&&clearTimeout(p),m()}function b(){l&&clearTimeout(l),m()}function m(){a&&(d=o.apply(void 0,O(u))),p=l=null,h=!1}function g(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),u=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var I=window.__subscriptions;function U(t,e){var n=D(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);I[t]||(I[t]={count:0});var o,r=I[t];return r.count++,r.onsubscribe||(r.onsubscribe=L((o=t,function(){P(document,"pubsub/onsubscribe",o),P(document,"pubsub/onsubscribe/"+o,o),I[o]&&delete I[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete I[t]}}D(document,"pubsub/onsubscribe",function(t){var e=t.detail;I[e]||(I[e]={count:0});var n=I[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=c(t,3),n=e[0],o=e[1],r=e[2];P(r,n,o)}),delete n.queue)});var M,q=function(t,e){return t===e},F=(M=function(){var t;return(t=console).log.apply(t,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:q;return function(){for(var t=arguments.length,o=Array(t),e=0;e<t;e++)o[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,e))?M.apply(void 0,arguments):void 0}}}}()(!0),[]);var V=1,K=3,H=8;function W(t,e){var n=t.nodeType;n===V&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),o=e.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(t){return n&&r&&-1===o.indexOf(t)},a=e.attributes,s=t.attributes,c=null,u=null,l=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],l=p.name,c=p.namespaceURI,u=p.value,!i(l))if(c){var h=p.localName;e.getAttributeNS(c,h||l)!==u&&e.setAttributeNS(c,l,u)}else e.hasAttribute(l)?e.getAttribute(l)!==u&&("null"===u||"undefined"===u?e.removeAttribute(l):e.setAttribute(l,u)):e.setAttribute(l,u);for(var f=a.length-1;0<=f;--f)if(!1!==(p=a[f]).specified){if(l=p.name,c=p.namespaceURI,i(l))continue;c?(l=p.localName||l,t.hasAttributeNS(c,l)||e.removeAttributeNS(c,l)):t.hasAttributeNS(null,l)||e.removeAttribute(l)}}(t,e),n!==K&&n!==H||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue)}function G(t,e){var n=t.nodeName;"INPUT"===n?function(t,e){var n=t.value,o=e.value;B(t,e,"checked"),B(t,e,"disabled"),n!==o&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===n?B(t,e,"selected"):"TEXTAREA"===n?function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e):"SELECT"===n&&function(t,e){var n=-1,o=0,r=e.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}e.selectedIndex=n}(0,e)}function B(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var $=3;function z(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(W(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=e.childNodes[s],o=t.childNodes[s-a],n||o;s++)if(o)if(n)if(J(o,n))(r=z(o,n))!==n&&(e.replaceChild(r,n),a++);else{i=null;for(var c=s;c<e.childNodes.length;c++)if(J(e.childNodes[c],o)){i=e.childNodes[c];break}i?((r=z(o,i))!==i&&a++,e.insertBefore(r,n)):o.id||n.id?(e.insertBefore(o,n),a++):(r=z(o,n))!==n&&(e.replaceChild(r,n),a++)}else e.appendChild(o),a++;else e.removeChild(n),s--}(t,e),G(t,e),e):null:t}function J(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===$&&t.nodeValue===e.nodeValue)}var Y,Z,X,Q,tt=(Y=Object,Z=Y.getPrototypeOf||function(t){return t.__proto__},X=Y.setPrototypeOf||function(t,e){return t.__proto__=e,t},Q="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),X(new o,n.prototype)},function(t){var e=Z(t);return X(t,X(function(){return Q(e,arguments,Z(this).constructor)},e))})(function(t){function s(t){var e;u(this,s);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=d(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,t),s}(Error)),et=!!document.createDocumentFragment().children,nt=0;function ot(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(e){function n(){return e.apply(void 0,arguments)}return 0===nt&&(nt++,Object.keys(e).map(function(t){return n[t]=e[t],t}).reduce(ot,n),nt--),n}(n)),t}var rt=m;Object.keys(rt).reduce(ot,rt);var it=rt.oneOf(["left","center","right"]),at=rt.oneOf(["left","right"]),st=(rt.oneOf(["top","bottom"]),rt.oneOf(["up","down"])),ct=rt.oneOf(["ok","pending","error","unknown"]),ut=rt.oneOf(["row","col","rowgroup","colgroup","auto"]),lt=rt.oneOfType([rt.string,rt.number]),pt={text:lt,value:rt.any,rowspan:lt,colspan:lt,scope:ut,align:it,dense:rt.bool},dt={float:at,strong:rt.bool,bold:rt.bool},ht=rt.oneOfType([rt.string,rt.number]),ft=rt.oneOfType([ht,rt.shape(i({},pt,{sort:st,sortActive:rt.bool}))]),vt=rt.oneOfType([ht,rt.shape(i({},pt,dt,{action:rt.bool,state:ct}))]),yt=rt.oneOfType([ht,rt.shape(i({},pt,dt))]),_t=rt.oneOfType([rt.arrayOf(ft),rt.shape({cells:rt.arrayOf(ft)})]),bt=rt.oneOfType([rt.arrayOf(vt),rt.shape({cells:rt.arrayOf(vt),action:rt.bool})]),mt=rt.oneOfType([rt.arrayOf(yt),rt.shape({cells:rt.arrayOf(yt)})]),gt=(rt.oneOfType([_t,rt.arrayOf(_t)]),rt.oneOfType([bt,rt.arrayOf(bt)]),rt.oneOfType([mt,rt.arrayOf(mt)]),/[A-Z]/g);function Ot(t){return t.replace(gt,Ct)}function Ct(t,e,n){var o=t.toLowerCase(),r=n.charAt(e+1);return 0===e||r.toUpperCase()===r?o:"-"+o}var kt=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function xt(e,n,t){var o=e;if(t)return function(e,n,t){var o=e;switch(t){case rt.string:case rt.string.isRequired:return e;case rt.bool:case rt.bool.isRequired:if(!e||n===e)return!0;case rt.number:case rt.number.isRequired:case rt.object:case rt.object.isRequired:case rt.array:case rt.array.isRequired:default:if(kt.test(e))try{o=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}return o}(e,n,t);if(e&&n!==e){if(kt.test(e))try{o=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else o=!0;return o}var Tt=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,wt=/[-_]+/g;function jt(t){return t.replace(Tt,Pt)}function Pt(t,e){return 0==+t||wt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function Nt(t,e,n){var o=1===t.nodeType,r=t.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[jt(e)]);if(o&&!t.hasAttribute(e))return i!==rt.bool&&i!==rt.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=xt(a,e,i)}var Et=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function At(n,t,o){var e,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,u=n.ownerDocument.documentElement,l=D(u,t,function(t){var e=t.target;if(!n.contains(e)&&n!==e)return o(t)},{capture:a,passive:c});return e=u,Et&&(e.style.cursor="pointer"),l}var St=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var o=e.length,r={},i=0;i<o;++i){var a=e[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Rt="axa-change",Dt="data-prevent-default";(function(){function o(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var n=!i._lastToggleNode,o=e!==i._lastToggleNode,r=!n&&!o;n?(i._notify(St.ENTER,e),i._onInteractive()):o&&i._notify(St.MOVE,e,i._lastToggleNode),i._lastToggleNode=e,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),i._close()},this._handleKeyUp=function(t){(t.key===St.ESCAPE||t.key===St.ESC||27===t.keyCode)&&(t.preventDefault(),i._close())},this._init(t,e)}return a(o,[{key:"_init",value:function(t,e){t&&(this._wcNode=t),e&&(this._options=i({},o.DEFAULTS,e));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=D(this._container,St.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var t=this._container,e=this._options,n=e.closeClass,o=e.outerClose,r=e.escapeClose,i=e.preventDefault;n&&(this._unCloseClick=D(t,St.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=At(t,St.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=D(t.ownerDocument,St.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(Dt)?Nt(t,Dt):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(St.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Lt=C(function(n){var t,e;return e=t=function(t){function e(){return u(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,n),e}(),t.version="2.0.1-beta.251",e},function(e){return function(t){function n(){return u(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),a(n,[{key:"init",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;e.contextNode&&(clearTimeout(e.timeoutId),e.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),e.unContextEnabled&&e.unContextEnabled(),e.unContextEnabled=U("context/available",e._makeContextReady)}}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;I[t]||(I[t]={count:0,queue:[]});var o=I[t].queue;Array.isArray(o)?o.push([t,e,n]):P(n,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(e){return function(t){function n(){return u(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),a(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function i(){return u(this,i),d(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return p(i,e),a(i,[{key:"init",value:function(t){var e=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=L(function(){return e.updated&&e.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(t){jt(t)})}},{key:"connectedCallback",value:function(){var o=this;if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var r=this.constructor.propTypes;t.forEach(function(t){var e=jt(t);if(o.hasAttribute(t)){var n=Nt(o,t,r[e]);o.props[e]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,t,e,n),this.shouldUpdateCallback(n,e)){var o=jt(t);if(this.hasAttribute(t)){var r=this.constructor.propTypes;this.props[o]=xt(n,t,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===t&&null!==n&&P(this,Rt,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var a=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var e=this.constructor.observedAttributes,n=void 0===e?[]:e,o=Object.keys(t).filter(function(t){return-1<n.indexOf(Ot(t))}).reduce(function(t,e){var n=t.props,o=t.shouldUpdate,r=n[e],i=a.props&&a.props[e]?a.props[e]:void 0;return o||a.shouldUpdateCallback(r,i)?(a.props[e]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected?this.updated&&this.updated():o&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName,o=this.props;e&&rt.checkPropTypes(e,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(Ot)}}]),i}()},function(e){return function(t){function c(){return u(this,c),d(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return p(c,e),a(c,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=s(t,["template"]);l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});et||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var i=e(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(t){a.appendChild(t)});else if(i){if("string"==typeof i)throw new tt(this);a.appendChild(i)}if(t)l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: newTree should be an object");z(e,t)}(this,s),function(){for(var t=void 0;t=F.pop();)delete t.isSameNode;F=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),c}()},function(e){return function(t){function r(){return u(this,r),d(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,e),a(r,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,o=s(t,["styles"]);l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),r}()}),It=(C(Lt,T),C(Lt,function(r){return function(t){function n(){return u(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,r),a(n,[{key:"init",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._appendStyles=function(){n.appendGlobalStyles(e._styles,e.nodeName)}}}],[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(t&&!w[e]){var n=document.createElement("style"),o=document.createTextNode(t);w[e]=!0,n.appendChild(o),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),n}()},T));var Ut,Mt,qt,Ft=It(HTMLTableRowElement),Vt=function(t){function e(){return u(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,Ft),a(e,[{key:"init",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:"@media (max-width: 767px) {\n  .m-tr {\n    display: block;\n    padding: 20px 0;\n    border-top: 1px solid #e5e5e5; } }\n\n@media (max-width: 767px) {\n  .m-tr--head {\n    display: none; } }\n\n@media (max-width: 767px) {\n  .m-tr--foot {\n    display: none; } }\n\n.m-tr--dense th,\n.m-tr--dense td {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n\n.m-tr--action:hover, .m-tr--action:focus {\n  cursor: pointer; }\n  .m-tr--action:hover .a-th,\n  .m-tr--action:hover .a-td,\n  .m-tr--action:hover td,\n  .m-tr--action:hover th, .m-tr--action:focus .a-th,\n  .m-tr--action:focus .a-td,\n  .m-tr--action:focus td,\n  .m-tr--action:focus th {\n    color: #00008f;\n    border-top-color: #00008f;\n    border-bottom: 1px solid #00008f; }\n    .m-tr--action:hover .a-th:first-child,\n    .m-tr--action:hover .a-td:first-child,\n    .m-tr--action:hover td:first-child,\n    .m-tr--action:hover th:first-child, .m-tr--action:focus .a-th:first-child,\n    .m-tr--action:focus .a-td:first-child,\n    .m-tr--action:focus td:first-child,\n    .m-tr--action:focus th:first-child {\n      border-left-color: #00008f; }\n    .m-tr--action:hover .a-th:last-child,\n    .m-tr--action:hover .a-td:last-child,\n    .m-tr--action:hover td:last-child,\n    .m-tr--action:hover th:last-child, .m-tr--action:focus .a-th:last-child,\n    .m-tr--action:focus .a-td:last-child,\n    .m-tr--action:focus td:last-child,\n    .m-tr--action:focus th:last-child {\n      border-right-color: #00008f; }\n  @media (max-width: 767px) {\n    .m-tr--action:hover, .m-tr--action:focus {\n      margin-left: -1px;\n      margin-right: -1px;\n      padding-top: 19px;\n      padding-bottom: 19px;\n      border: 1px solid #00008f; }\n      .m-tr--action:hover .a-th,\n      .m-tr--action:hover .a-td,\n      .m-tr--action:hover td,\n      .m-tr--action:hover th, .m-tr--action:focus .a-th,\n      .m-tr--action:focus .a-td,\n      .m-tr--action:focus td,\n      .m-tr--action:focus th {\n        border-color: transparent; }\n        .m-tr--action:hover .a-th:first-child, .m-tr--action:hover .a-th:last-child,\n        .m-tr--action:hover .a-td:first-child,\n        .m-tr--action:hover .a-td:last-child,\n        .m-tr--action:hover td:first-child,\n        .m-tr--action:hover td:last-child,\n        .m-tr--action:hover th:first-child,\n        .m-tr--action:hover th:last-child, .m-tr--action:focus .a-th:first-child, .m-tr--action:focus .a-th:last-child,\n        .m-tr--action:focus .a-td:first-child,\n        .m-tr--action:focus .a-td:last-child,\n        .m-tr--action:focus td:first-child,\n        .m-tr--action:focus td:last-child,\n        .m-tr--action:focus th:first-child,\n        .m-tr--action:focus th:last-child {\n          border-color: transparent; } }\n"})}},{key:"willRenderCallback",value:function(){var t=this.props,e=t.classes,n=t.head,o=t.foot,r=t.action,i=t.dense;this.className=g("m-tr",e,{"m-tr--head":n,"m-tr--foot":o,"m-tr--action":r,"m-tr--dense":i})}}]),e}();return Vt.tagName="axa-tr",Vt.builtInTagName="tr",Vt.propTypes={classes:m.string,head:m.bool,foot:m.bool,action:m.bool,dense:m.bool},Ut=Vt.tagName,qt={extends:(Mt=Vt).builtInTagName},customElements.get(Ut)||customElements.define(Ut,Mt,qt),Vt}();
