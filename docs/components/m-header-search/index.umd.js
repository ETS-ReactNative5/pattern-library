!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var r=t.value;if(n?r=t.getAttribute(n):n=t.name,r&&n!==r){if(e.test(r))try{r=JSON.parse(r)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",r)}}else r=!0;return r}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,r=/[-_]+/g;function o(e,t){return 0==+e||r.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var i=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,c);var s=u.preventDefault;return u.preventDefault=function(){s.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new i(t,s({},r,{detail:n}));e.dispatchEvent(o)}var v=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function m(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var y=/\s+/,b={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function x(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.capture,c=void 0!==i&&i,u=o.passive,s=void 0===u||u;if(b[t]&&(t=b[t]),!e||!t)return null;var l=void 0===n?"undefined":a(n),d=n&&"string"===l;if("function"===l){if(r){var f=r;c=f.capture,s=f.passive}r=n}for(var p=v?{capture:c,passive:s}:c,h=d?function(t){var o=t.target;for(;!m(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,x=t.split(y),g=x.length,_=0;_<g;++_)e.addEventListener(x[_],h,p);return function t(){for(var n=0;n<g;++n)e.removeEventListener(x[n],h,p);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var g={};function _(e,t){var n=x(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);g[e]||(g[e]={count:0});var r,o=g[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,c=n.maxWait,u=void 0!==c&&c,s=void 0,l=void 0,d=void 0,f=void 0,h=!1,v=t!==u,m=!1!==u;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return s=r,v&&(l&&clearTimeout(l),l=setTimeout(b,t)),m&&!d&&(d=setTimeout(x,u)),o&&!h&&(h=!0,f=e.apply(void 0,p(s))),f}return y.flush=function(){return(l||d)&&(f=e.apply(void 0,p(s))),_(),f},y.cancel=_,y;function b(){d&&clearTimeout(d),g()}function x(){l&&clearTimeout(l),g()}function g(){a&&(f=e.apply(void 0,p(s))),l=null,d=null,h=!1}function _(){l&&(clearTimeout(l),l=null),d&&(clearTimeout(d),d=null),s=void 0,h=!1}}((r=e,function(){h(document,"pubsub/onsubscribe",r),h(document,"pubsub/onsubscribe/"+r,r),g[r]&&delete g[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete g[e]}}function C(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}x(document,"pubsub/onsubscribe",function(e){var t=e.detail;g[t]||(g[t]={count:0});var n=g[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=f(e,3),n=t[0],r=t[1],o=t[2];h(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(C.prototype,HTMLElement.prototype),Object.setPrototypeOf(C,HTMLElement);var w={},E="throwed",k=function(e){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];c(this,r);var n=d(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return l(r,C),u(r,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var r=this._template;if(r)try{for(var i=document.createDocumentFragment();this.firstChild;)i.appendChild(this.firstChild);var a=r(function(e){if(!e.hasAttributes)return null;for(var r,i={},a=e.attributes,c=a.length,u=0;u<c;++u){var s=a[u],l=s.name;i[(r=l,r.replace(n,o))]=t(s)}return i}(this),i);if(Array.isArray(a))a.forEach(function(t){e.appendChild(t)});else if(a){if("string"==typeof a){var c=new Error(E);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+c.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),c}this.appendChild(a)}this._hasRendered=!0}catch(c){c.message!==E&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+c+"\n\nStack Trace: "+c.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;g[e]||(g[e]={count:0,queue:[]});var r=g[e].queue;Array.isArray(r)?r.push([e,t,n]):h(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=_("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),r}(),O=(function(e){function t(){return c(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,k),u(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return c(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,k),u(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k.uuidv4();if(e&&!w[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),w[e]=!0}}}]),t}()),A=".m-header-search {\n  display: block; }\n  @media (max-width: 991px) {\n    .m-header-search {\n      margin-left: auto; } }\n\n.m-header-search__form {\n  display: block;\n  padding: 6px 0 6px 20px;\n  margin-left: 20px;\n  border-left: 1px solid #ccc; }\n  @media (max-width: 991px) {\n    .m-header-search__form {\n      padding-left: 0;\n      padding-right: 20px;\n      border-left: none;\n      border-right: 1px solid #ccc; } }\n\n.m-header-search__input {\n  display: none; }\n\n.m-header-search__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  color: #7f7f7f; }\n",S=/\n[\s]+$/,T=/^\n[\s]+/,N=/[\s]+$/,j=/^[\s]+/,L=/[\n\s]+/g,P=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],R=["code","pre","textarea"],M=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,c=0,u=n.length;c<u;c++){var s=n[c];if(Array.isArray(s))e(t,s);else{("number"==typeof s||"boolean"==typeof s||"function"==typeof s||s instanceof Date||s instanceof RegExp)&&(s=s.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof s)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=s:(s=document.createTextNode(s),t.appendChild(s),l=s),c===u-1&&(a=!1,-1===P.indexOf(i)&&-1===R.indexOf(i)?""===(r=l.nodeValue.replace(T,"").replace(N,"").replace(S,"").replace(L," "))?t.removeChild(l):l.nodeValue=r:-1===R.indexOf(i)&&(o=0===c?"":" ",r=l.nodeValue.replace(T,o).replace(j," ").replace(N,"").replace(S,"").replace(L," "),l.nodeValue=r));else if(s&&s.nodeType){a&&(a=!1,-1===P.indexOf(i)&&-1===R.indexOf(i)?""===(r=l.nodeValue.replace(T,"").replace(S,"").replace(L," "))?t.removeChild(l):l.nodeValue=r:-1===R.indexOf(i)&&(r=l.nodeValue.replace(j," ").replace(T,"").replace(S,"").replace(L," "),l.nodeValue=r));var d=s.nodeName;d&&(i=d.toLowerCase()),t.appendChild(s)}}}},V="undefined"!=typeof window?function(e){var t=document.createElement("div");return t.innerHTML=e,n=t.childNodes,Array.isArray(n)?n:[].slice.call(n);var n}:function(e){var t=new String(e);return t.__encoded=!0,t};var D,F,z,W=function(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.action,i=r.href,a=r.method,c=void 0===a?"POST":a;return(n=document.createElement("form")).setAttribute("action",""+String(o)),n.setAttribute("method",""+String(c)),n.setAttribute("class","m-header-search__form"),M(n,["\n    ",(e=document.createElement("a"),e.setAttribute("href",""+String(i)),e.setAttribute("class","m-header-search__page-link"),M(e,["\n      ",V('<axa-icon icon="search-left" classes="m-header-search__icon"></axa-icon>'),"\n    "]),e),"\n\n    ",(t=document.createElement("input"),t.setAttribute("type","text"),t.setAttribute("placeholder","search..."),t.setAttribute("class","m-header-search__input"),t),"\n  "]),n},q=function(e){function t(){return c(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,A,W))}return l(t,O),u(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-search"}}]),t}();return D=function(){window.customElements.define("axa-header-search",q)},F=0,z=function(){if(0===F)try{D.apply(void 0,arguments),F+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",z,!1),document.addEventListener("WebComponentsReady",z,!1),q});
