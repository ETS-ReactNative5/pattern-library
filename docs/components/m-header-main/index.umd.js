!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function u(){}var v=e(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=u,n.PropTypes=n}()}),y=e(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":_(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}),b={},m=function(e){return e in b||(b[e]=0),++b[e]},g=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function O(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new g(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var x=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function k(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var w=/\s+/,E={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function N(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(E[e]&&(e=E[e]),!n||!e)return null;var u=void 0===r?"undefined":_(r),c=r&&"string"===u;if("function"===u){if(o){var p=o;a=p.capture,l=p.passive}o=r}for(var d=x?{capture:a,passive:l}:a,f=c?function(e){var t=e.target;for(;!k(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(w),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function T(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,p=void 0,d=void 0,f=!1,h=o!==l,v=!1!==l;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,h&&(c&&clearTimeout(c),c=setTimeout(_,o)),v&&!p&&(p=setTimeout(b,l)),i&&!f&&(f=!0,d=r.apply(void 0,C(u))),d}return y.flush=function(){(c||p)&&(d=r.apply(void 0,C(u)));return g(),d},y.cancel=g,y;function _(){p&&clearTimeout(p),m()}function b(){c&&clearTimeout(c),m()}function m(){a&&(d=r.apply(void 0,C(u))),p=c=null,f=!1}function g(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var A=window.__subscriptions;function P(e,t){var n=N(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);A[e]||(A[e]={count:0});var r,o=A[e];return o.count++,o.onsubscribe||(o.onsubscribe=T((r=e,function(){O(document,"pubsub/onsubscribe",r),O(document,"pubsub/onsubscribe/"+r,r),A[r]&&delete A[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete A[e]}}N(document,"pubsub/onsubscribe",function(e){var t=e.detail;A[t]||(A[t]={count:0});var n=A[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=l(e,3),n=t[0],r=t[1],o=t[2];O(o,n,r)}),delete n.queue)});var j,S=function(e,t){return e===t},R=((j=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:S;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?j.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;c(this,l);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var s=f(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return d(l,e),l}(Error)),D=/[A-Z]/g;function L(e){return e.replace(D,M)}function M(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var U=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function I(t,n){var e=t;if(t&&n!==t){if(U.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var V=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,F=/[-_]+/g;function K(e){return e.replace(V,q)}function q(e,t){return 0==+e||F.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function H(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=I(n,t)}var W=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function z(n,e,r){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,s=o.passive,l=void 0===s||s,u=n.ownerDocument.documentElement,c=N(u,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:l});return t=u,W&&(t.style.cursor="pointer"),c}var $=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),B="axa-change",G="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify($.ENTER,t),i._onInteractive()):r&&i._notify($.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===$.ESCAPE||e.key===$.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return o(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=N(this._container,$.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=N(this._container,$.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=z(this._container,$.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=N(this._container.ownerDocument,$.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(G)?H(e,G):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify($.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Y=["title","checked","disabled"],Z=[];var J=1,X=3,Q=8;function ee(e,t){var n=e.nodeType,r=e.nodeName;n===J&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,l=null,u=null,c=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],c=p.name,l=p.namespaceURI,u=p.value,!i(c))if(l){var f=p.localName;t.getAttributeNS(l,f||c)!==u&&t.setAttributeNS(l,c,u)}else t.hasAttribute(c)?t.getAttribute(c)!==u&&("null"===u||"undefined"===u?t.removeAttribute(c):t.setAttribute(c,u)):t.setAttribute(c,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(c=p.name,l=p.namespaceURI,i(c))continue;l?(c=p.localName||c,e.hasAttributeNS(l,c)||t.removeAttributeNS(l,c)):e.hasAttributeNS(null,c)||t.removeAttribute(c)}}(e,t),n!==X&&n!==Q||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;te(e,t,"checked"),te(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?te(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function te(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ne=3;function re(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ee(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(oe(r,n))(o=re(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(oe(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=re(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=re(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function oe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ne&&e.nodeValue===t.nodeValue)}var ie=function(e){function s(e){var t;c(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return d(s,e),s}(Error),ae=!!document.createDocumentFragment().children;function se(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(se.prototype,HTMLElement.prototype),Object.setPrototypeOf(se,HTMLElement);var le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;c(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=P("context/available",n._makeContextReady)},f(n,t)}return d(a,t),o(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;A[e]||(A[e]={count:0,queue:[]});var r=A[e].queue;Array.isArray(r)?r.push([e,t,n]):O(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return c(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,t),o(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function u(e){c(this,u);var l=f(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));l._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=l._hasKeys[t];if(-1===Y.indexOf(t)&&o)throw new R(t,l);var i="_"+t,a=n[t],s=l[i];return r||l.shouldUpdateCallback(a,s)?(l[i]=a,l._props[t]=a,o&&h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=T(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=K(e),r=n in l;if(-1===Y.indexOf(n)&&r)throw new R(n,l);l._hasKeys[n]=r,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,r&&h(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this.updatedDebounced())}})}),l}return d(u,t),o(u,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(L)}}]),o(u,[{key:"connectedCallback",value:function(){var o=this;if(p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"connectedCallback",this)&&p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&(e.forEach(function(e){var t=K(e);if(o.hasAttribute(e)){var n=H(o,e),r=o._hasKeys[t];o._props[t]=n,r&&h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,n,o)}}),this.checkPropTypes())}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=K(e);this.hasAttribute(e)?this[r]=I(n,e):this[r]=null,this.checkPropTypes(),"value"===e&&null!==n&&O(this,B,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(L(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&v.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),u}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);c(this,l);var r=f(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return d(l,t),o(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ae||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new ie(this);a.appendChild(i)}if(e)p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");re(t,e)}(this,s),function(){for(var e=void 0;e=Z.pop();)delete e.isSameNode;Z=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);c(this,i);var o=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return d(i,t),o(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){c(this,n);var t=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=m(t.nodeName),t}return d(n,se),o(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),ue={},ce=function(e){function a(){var e,t,n;c(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return d(a,le),o(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:le.uuidv4();if(e&&!ue[t]){var n=document.createElement("style"),r=document.createTextNode(e);ue[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var pe,de,fe=".m-header-main {\n  position: relative;\n  z-index: 1060;\n  display: block;\n  height: 75px;\n  border-bottom: 2px solid #e5e5e5;\n  background: #fff; }\n\n.m-header-main__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100%;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 768px) {\n    .m-header-main__box {\n      max-width: auto; } }\n  @media (min-width: 992px) {\n    .m-header-main__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-main__box {\n      max-width: 1140px; } }\n  .m-header-main--first-left > .m-header-main__box > *:first-child + * {\n    margin-left: auto; }\n",he=/\n[\s]+$/,ve=/^\n[\s]+/,ye=/[\s]+$/,_e=/^[\s]+/,be=/[\n\s]+/g,me=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ge=["code","pre","textarea"],Ce=function(e,t){var n;return(n=document.createElement("div")).setAttribute("class","m-header-main__box"),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===me.indexOf(i)&&-1===ge.indexOf(i)?""===(r=c.nodeValue.replace(ve,"").replace(ye,"").replace(he,"").replace(be," "))?t.removeChild(c):c.nodeValue=r:-1===ge.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(ve,o).replace(_e," ").replace(ye,"").replace(he,"").replace(be," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===me.indexOf(i)&&-1===ge.indexOf(i)?""===(r=c.nodeValue.replace(ve,"").replace(he,"").replace(be," "))?t.removeChild(c):c.nodeValue=r:-1===ge.indexOf(i)&&(r=c.nodeValue.replace(_e," ").replace(ve,"").replace(he,"").replace(be," "),c.nodeValue=r));var p=u.nodeName;p&&(i=p.toLowerCase()),t.appendChild(u)}}}}(n,[t]),n},Oe=function(e){function t(){c(this,t);var e=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:fe,template:Ce}));return e.provideContext(),e}return d(t,ce),o(t,[{key:"willRenderCallback",value:function(){var e=this.firstLeft;this.className=y(this.initialClassName,"m-header-main",{"m-header-main--first-left":e})}}]),t}();return Oe.tagName="axa-header-main",Oe.propTypes={firstLeft:v.bool},pe=Oe.tagName,de=Oe,customElements.get(pe)||customElements.define(pe,de),Oe});
