!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var o=t.value;if(n?o=t.getAttribute(n):n=t.name,o&&n!==o){if(e.test(o))try{o=JSON.parse(o)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",o)}}else o=!0;return o}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,o=/[-_]+/g;function r(e,t){return 0==+e||o.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var i=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,o,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function v(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new i(t,c({},o,{detail:n}));e.dispatchEvent(r)}var b=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),y=/^\s+|\s{2,}|\s+$/g;function m(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function _(e,t){return m(t).test(e.className)}var g=/\s+/,x={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function C(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=r.capture,s=void 0!==i&&i,u=r.passive,c=void 0===u||u;if(x[t]&&(t=x[t]),!e||!t)return null;var l=void 0===n?"undefined":a(n),d=n&&"string"===l;if("function"===l){if(o){var f=o;s=f.capture,c=f.passive}o=n}for(var h=b?{capture:s,passive:c}:s,p=d?function(t){var r=t.target;for(;!_(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,v=t.split(g),y=v.length,m=0;m<y;++m)e.addEventListener(v[m],p,h);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],p,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}var w={};function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;w[e]||(w[e]={count:0,queue:[]});var o=w[e].queue;Array.isArray(o)?o.push([e,t,n]):v(n,e,t)}function E(e,t){var n=C(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);w[e]||(w[e]={count:0});var o,r=w[e];return r.count++,r.onsubscribe||(r.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,d=void 0,f=void 0,h=!1,v=t!==u,b=!1!==u;function y(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,v&&(l&&clearTimeout(l),l=setTimeout(m,t)),b&&!d&&(d=setTimeout(_,u)),r&&!h&&(h=!0,f=e.apply(void 0,p(c))),f}return y.flush=function(){return(l||d)&&(f=e.apply(void 0,p(c))),x(),f},y.cancel=x,y;function m(){d&&clearTimeout(d),g()}function _(){l&&clearTimeout(l),g()}function g(){a&&(f=e.apply(void 0,p(c))),l=null,d=null,h=!1}function x(){l&&(clearTimeout(l),l=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}((o=e,function(){v(document,"pubsub/onsubscribe",o),v(document,"pubsub/onsubscribe/"+o,o),w[o]&&delete w[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete w[e]}}function O(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}C(document,"pubsub/onsubscribe",function(e){var t=e.detail;w[t]||(w[t]={count:0});var n=w[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=h(e,3),n=t[0],o=t[1],r=t[2];v(r,n,o)}),delete n.queue)}),Object.setPrototypeOf(O.prototype,HTMLElement.prototype),Object.setPrototypeOf(O,HTMLElement);var N={},S="throwed",A=function(e){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];s(this,o);var n=f(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return d(o,O),u(o,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var o=this._template;if(o)try{for(var i=document.createDocumentFragment();this.firstChild;)i.appendChild(this.firstChild);var a=o(function(e){if(!e.hasAttributes)return null;for(var o,i={},a=e.attributes,s=a.length,u=0;u<s;++u){var c=a[u],l=c.name;i[(o=l,o.replace(n,r))]=t(c)}return i}(this),i);if(Array.isArray(a))a.forEach(function(t){e.appendChild(t)});else if(a){if("string"==typeof a){var s=new Error(S);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),s}this.appendChild(a)}this._hasRendered=!0}catch(s){s.message!==S&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+s+"\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,k("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=E("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),o}(),T=(function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}d(t,A),u(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,A),u(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A.uuidv4();if(e&&!N[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),N[e]=!0}}}]),t}()),j=".m-header-burger {\n  display: block; }\n\n.m-header-burger__button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: none;\n  margin-left: 15px;\n  color: #00008f; }\n  .m-header-burger__button:hover, .m-header-burger__button:active, .m-header-burger__button:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (max-width: 991px) {\n    .m-header-burger__button {\n      display: block; } }\n\n.m-header-burger__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor; }\n  .is-burger-open .m-header-burger__icon {\n    display: none; }\n\n.m-header-burger__close-icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  display: none; }\n  .is-burger-open .m-header-burger__close-icon {\n    display: block; }\n",L=/\n[\s]+$/,P=/^\n[\s]+/,R=/[\s]+$/,z=/^[\s]+/,D=/[\n\s]+/g,F=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],M=["code","pre","textarea"],q="undefined"!=typeof window?function(e){var t=document.createElement("div");return t.innerHTML=e,n=t.childNodes,Array.isArray(n)?n:[].slice.call(n);var n}:function(e){var t=new String(e);return t.__encoded=!0,t};var U=function(){var e;return(e=document.createElement("button")).setAttribute("type","button"),e.setAttribute("class","m-header-burger__button js-header-burger__button"),function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===F.indexOf(i)&&-1===M.indexOf(i)?""===(o=l.nodeValue.replace(P,"").replace(R,"").replace(L,"").replace(D," "))?t.removeChild(l):l.nodeValue=o:-1===M.indexOf(i)&&(r=0===s?"":" ",o=l.nodeValue.replace(P,r).replace(z," ").replace(R,"").replace(L,"").replace(D," "),l.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===F.indexOf(i)&&-1===M.indexOf(i)?""===(o=l.nodeValue.replace(P,"").replace(L,"").replace(D," "))?t.removeChild(l):l.nodeValue=o:-1===M.indexOf(i)&&(o=l.nodeValue.replace(z," ").replace(P,"").replace(L,"").replace(D," "),l.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}}(e,["\n    ",q('<axa-icon icon="menu" classes="m-header-burger__icon"></axa-icon>'),"\n\n    ",q('<axa-icon icon="cross-gap" classes="m-header-burger__close-icon"></axa-icon>'),"\n  "]),e};function V(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}function W(e){for(var t=e,n=0;t;)n+=t.offsetTop,t=t.offsetParent;return n}var B="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var K,$=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,I=function(){var e=window.requestAnimationFrame||window[$+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),r=setTimeout(function(){e(n+o)},o);return t=n+o,r}}return e}(),H=(K=(K=window.cancelAnimationFrame||window[$+"CancelAnimationFrame"]||window[$+"CancelRequestAnimationFrame"])?K.bind(window):function(e){clearTimeout(e)},function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","resize","keyup")),G=function(){function e(t,n){s(this,e),this.wcNode=t,this.options=c({},e.DEFAULTS,n),this.isOpen=!1,this._handleBurgerClick=this._handleBurgerClick.bind(this),this._handleResize=this._handleResize.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.init()}return u(e,[{key:"init",value:function(){this.burger=this.wcNode.querySelector(this.options.burger),this.on()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=E("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=E("header-mobile/close",this.close,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"on",value:function(){this.off(),this._unBurgerClick=C(this.burger,H.CLICK,this._handleBurgerClick,{passive:!1}),this._unResize=C(V(this.wcNode),H.RESIZE,this._handleResize),this._unCloseEscape=C(this.wcNode.ownerDocument,H.KEYUP,this._handleKeyUp,{passive:!1})}},{key:"off",value:function(){this._unBurgerClick&&this._unBurgerClick(),this._unResize&&this._unResize(),this._unCloseEscape&&this._unCloseEscape(),this.offContextEnabled()}},{key:"_handleBurgerClick",value:function(e){e.preventDefault(),this.isOpen?this.close():this.open()}},{key:"_handleResize",value:function(){this.close()}},{key:"_handleKeyUp",value:function(e){var t=e.key,n=e.keyCode;(t===H.ESCAPE||t===H.ESC||27===n)&&(e.preventDefault(),this.close())}},{key:"open",value:function(e){if(!this.isOpen){this.isOpen=!0;var t,n,o,r,i,a=W(this.wcNode);0!==a&&a!==B()&&(k("sticky-container/freeze-direction"),t=this.wcNode.parentNode.parentNode.parentNode.parentNode,n=V(t),o=W(t),n.scrollTo(0,o),I(function(){setTimeout(function(){k("sticky-container/thaw-direction")},50)})),r=this.burger,i=this.options.burgerState,_(r,i)||(r.className+=" "+i),!e&&this._contextNode&&k("header-mobile/open",null,this._contextNode)}}},{key:"close",value:function(e){this.isOpen&&(this.isOpen=!1,function(e,t){if(_(e,t)){var n=m(t,"g");e.className=e.className.replace(n," ").replace(y," ")}}(this.burger,this.options.burgerState),!e&&this._contextNode&&k("header-mobile/close",null,this._contextNode))}},{key:"destroy",value:function(){this.off(),delete this.burger}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();G.DEFAULTS={burger:".js-header-burger__button",burgerState:"is-burger-open"};var Y,Z,J,Q=function(e){function t(){s(this,t);var e=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,j,U));return e.selectContext("axa-header"),e}return d(t,T),u(t,[{key:"connectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-burger",this.burger=new G(this)}},{key:"disconnectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.burger.destroy(),delete this.burger}},{key:"contextCallback",value:function(e){this.burger.contextNode=e}}]),t}();return Y=function(){window.customElements.define("axa-header-burger",Q)},Z=0,J=function(){if(0===Z)try{Y.apply(void 0,arguments),Z+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",J,!1),document.addEventListener("WebComponentsReady",J,!1),Q});
