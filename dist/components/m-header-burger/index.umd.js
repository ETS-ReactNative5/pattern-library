!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var t={},r=function(e){return e in t||(t[e]=0),++t[e]},i=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}(),y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function c(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new i(t,a({},r,{detail:n}));return e.dispatchEvent(o)}var _=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),v=/^\s+|\s{2,}|\s+$/g;function b(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function m(e,t){var n=t.className;return t.hasClass||e.push(n),e}function g(e){for(var n=e.className,r=!1,o=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=b(e).test(n);t?r=!0:o=!1;return{className:e,hasClass:t}});return!(!o&&!r)&&s}function x(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function O(e,t){var n=b(t,"g");return e.replace(n," ").replace(v," ")}var k=/\s+/,w={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function N(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,u=void 0===s||s;if(w[e]&&(e=w[e]),!n||!e)return null;var c=void 0===r?"undefined":y(r),l=r&&"string"===c;if("function"===c){if(o){var d=o;a=d.capture,u=d.passive}o=r}for(var p=_?{capture:a,passive:u}:a,f=l?function(e){var t=e.target;for(;!g(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(k),v=h.length,b=0;b<v;++b)n.addEventListener(h[b],f,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function A(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,d=void 0,p=void 0,f=!1,h=o!==u,v=!1!==u;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(l&&clearTimeout(l),l=setTimeout(y,o)),v&&!d&&(d=setTimeout(_,u)),i&&!f&&(f=!0,p=r.apply(void 0,C(c))),p}return b.flush=function(){(l||d)&&(p=r.apply(void 0,C(c)));return g(),p},b.cancel=g,b;function y(){d&&clearTimeout(d),m()}function _(){l&&clearTimeout(l),m()}function m(){a&&(p=r.apply(void 0,C(c))),d=l=null,f=!1}function g(){l&&(clearTimeout(l),l=null),d&&(clearTimeout(d),d=null),c=void 0,f=!1}}var E={};function P(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;E[e]||(E[e]={count:0,queue:[]});var r=E[e].queue;Array.isArray(r)?r.push([e,t,n]):c(n,e,t)}function j(e,t){var n=N(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);E[e]||(E[e]={count:0});var r,o=E[e];return o.count++,o.onsubscribe||(o.onsubscribe=A((r=e,function(){c(document,"pubsub/onsubscribe",r),c(document,"pubsub/onsubscribe/"+r,r),E[r]&&delete E[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete E[e]}}N(document,"pubsub/onsubscribe",function(e){var t=e.detail;E[t]||(E[t]={count:0});var n=E[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],o=t[2];c(o,n,r)}),delete n.queue)});var T,e=function(e,t){return e===t},S=((T=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?T.apply(void 0,arguments):void 0}}}})()(!0),function(e){function u(e,t){var n;l(this,u);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var s=f(this,(n=u.__proto__||Object.getPrototypeOf(u)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,u),s.name="PropertyExistsException",s}return p(u,e),u}(Error)),R=/[A-Z]/g;function M(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var D=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function L(t,n){var e=t;if(t&&n!==t){if(D.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,U=/[-_]+/g;function V(e){return e.replace(n,F)}function F(e,t){return 0==+e||U.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var I=["title","checked","disabled"],z=[];var q=1,K=3,H=8;function W(e,t){var n=e.nodeType,r=e.nodeName;n===q&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,s=null,u=r.length-1;0<=u;--u)if(s=r[u],a=s.name,o=s.namespaceURI,i=s.value,o){var c=s.localName;t.getAttributeNS(o,c||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var l=n.length-1;0<=l;--l)!1!==(s=n[l]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==K&&n!==H||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;B(e,t,"checked"),B(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?B(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function B(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var $=3;function G(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(W(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(Y(r,n))(o=G(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(Y(t.childNodes[u],r)){i=t.childNodes[u];break}i?((o=G(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=G(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Y(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===$&&e.nodeValue===t.nodeValue)}var Z=function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error),J=!!document.createDocumentFragment().children;function X(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(X.prototype,HTMLElement.prototype),Object.setPrototypeOf(X,HTMLElement);var Q=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;l(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=j("context/available",n._makeContextReady)},f(n,t)}return p(a,t),o(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,P("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),o(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){l(this,c);var u=f(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));u._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=u._hasKeys[t];if(-1===I.indexOf(t)&&o)throw new S(t,u);var i="_"+t,a=n[t],s=u[i];return r||u.shouldUpdateCallback(a,s)?(u[i]=a,u._props[t]=a,o&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,u),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},u._isConnected=!1,u._props={},u._hasKeys={},u.updatedDebounced=A(function(){return u.updated&&u.updated()},50);var t=u.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=V(e),r=n in u;if(-1===I.indexOf(n)&&r)throw new S(n,u);u._hasKeys[n]=r,Object.defineProperty(u,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,r&&h(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),u}return p(c,t),o(c,[{key:"connectedCallback",value:function(){var o=this;if(d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=V(e);if(o.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=L(n,t)}(o,e),r=o._hasKeys[t];o._props[t]=n,r&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[V(e)]=L(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(R,M))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=s(e,["template"]);l(this,u);var r=f(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return p(u,t),o(u,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});J||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Z(this);a.appendChild(i)}if(e)d(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: newTree should be an object");G(t,e)}(this,s),function(){for(var e=void 0;e=z.pop();)delete e.isSameNode;z=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),u}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=s(e,["styles"]);l(this,i);var o=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return p(i,t),o(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){l(this,n);var t=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=r(t.nodeName),t}return p(n,X),o(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),ee={},te=function(e){function a(){var e,t,n;l(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return p(a,Q),o(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Q.uuidv4();if(e&&!ee[t]){var n=document.createElement("style"),r=document.createTextNode(e);ee[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var ne=".m-header-burger {\n  display: block; }\n\n.m-header-burger__button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: none;\n  margin-left: 15px;\n  color: #00008f; }\n  .m-header-burger__button:hover, .m-header-burger__button:active, .m-header-burger__button:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (max-width: 991px) {\n    .m-header-burger__button {\n      display: block; } }\n\n.m-header-burger__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor; }\n  .is-burger-open .m-header-burger__icon {\n    display: none; }\n\n.m-header-burger__close-icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  display: none; }\n  .is-burger-open .m-header-burger__close-icon {\n    display: block; }\n",re=/\n[\s]+$/,oe=/^\n[\s]+/,ie=/[\s]+$/,ae=/^[\s]+/,se=/[\n\s]+/g,ue=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ce=["code","pre","textarea"];var le=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},de=function(){var e;return(e=document.createElement("button")).setAttribute("type","button"),e.setAttribute("class","m-header-burger__button js-header-burger__button"),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===ue.indexOf(i)&&-1===ce.indexOf(i)?""===(r=l.nodeValue.replace(oe,"").replace(ie,"").replace(re,"").replace(se," "))?t.removeChild(l):l.nodeValue=r:-1===ce.indexOf(i)&&(o=0===s?"":" ",r=l.nodeValue.replace(oe,o).replace(ae," ").replace(ie,"").replace(re,"").replace(se," "),l.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===ue.indexOf(i)&&-1===ce.indexOf(i)?""===(r=l.nodeValue.replace(oe,"").replace(re,"").replace(se," "))?t.removeChild(l):l.nodeValue=r:-1===ce.indexOf(i)&&(r=l.nodeValue.replace(ae," ").replace(oe,"").replace(re,"").replace(se," "),l.nodeValue=r));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}}(e,["\n    ",le('<axa-icon icon="menu" classes="m-header-burger__icon"></axa-icon>'),"\n\n    ",le('<axa-icon icon="cross-gap" classes="m-header-burger__close-icon"></axa-icon>'),"\n  "]),e};function pe(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}function fe(e){for(var t=e,n=0;t;)n+=t.offsetTop,t=t.offsetParent;return n}var he="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var ve,be=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,ye=function(){var e=window.requestAnimationFrame||window[be+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var o=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-o)),r=setTimeout(function(){e(t+n)},n);return o=t+n,r}}return e}(),_e=(ve=(ve=window.cancelAnimationFrame||window[be+"CancelAnimationFrame"]||window[be+"CancelRequestAnimationFrame"])?ve.bind(window):function(e){clearTimeout(e)},function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","resize","keyup")),me=function(){function n(e,t){var i=this;l(this,n),this._handleBurgerClick=function(e){e.preventDefault(),i.isOpen?i.close():i.open()},this._handleResize=function(){i.close()},this._handleKeyUp=function(e){var t=e.key,n=e.keyCode;(t===_e.ESCAPE||t===_e.ESC||27===n)&&(e.preventDefault(),i.close())},this.open=function(e){if(!i.isOpen){i.isOpen=!0;var t,n,r,o=fe(i.wcNode);0!==o&&o!==he()&&(P("sticky-container/freeze-direction"),t=i.wcNode.parentNode.parentNode.parentNode.parentNode,n=pe(t),r=fe(t),n.scrollTo(0,r),ye(function(){setTimeout(function(){P("sticky-container/thaw-direction")},50)})),function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=g.apply(void 0,[e].concat(n));if(!0!==o){var i=[].concat(n);Array.isArray(o)&&(i=o.reduce(m,[])),i&&(e.className+=" "+i.join(" "))}}(i.burger,i.options.burgerState),!e&&i._contextNode&&P("header-mobile/open",null,i._contextNode)}},this.close=function(e){i.isOpen&&(i.isOpen=!1,function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=g.apply(void 0,[e].concat(n));if(!1!==o){var i=[].concat(n);if(Array.isArray(o)&&(i=o.reduce(x,[])),i){var a=e.className;e.className=i.reduce(O,a)}}}(i.burger,i.options.burgerState),!e&&i._contextNode&&P("header-mobile/close",null,i._contextNode))},this.wcNode=e,this.options=a({},n.DEFAULTS,t),this.isOpen=!1,this.init()}return o(n,[{key:"init",value:function(){this.burger=this.wcNode.querySelector(this.options.burger),this.on()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=j("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=j("header-mobile/close",this.close,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"on",value:function(){this.off(),this._unBurgerClick=N(this.burger,_e.CLICK,this._handleBurgerClick,{passive:!1}),this._unResize=N(pe(this.wcNode),_e.RESIZE,this._handleResize),this._unCloseEscape=N(this.wcNode.ownerDocument,_e.KEYUP,this._handleKeyUp,{passive:!1})}},{key:"off",value:function(){this._unBurgerClick&&this._unBurgerClick(),this._unResize&&this._unResize(),this._unCloseEscape&&this._unCloseEscape(),this.offContextEnabled()}},{key:"destroy",value:function(){this.off(),delete this.burger}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),n}();me.DEFAULTS={burger:".js-header-burger__button",burgerState:"is-burger-open"};var ge,Ce,xe=function(e){function t(){l(this,t);var e=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:ne,template:de}));return e.consumeContext("axa-header"),e}return p(t,te),o(t,[{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-burger",this.burger=new me(this)}},{key:"disconnectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.burger.destroy(),delete this.burger}},{key:"contextCallback",value:function(e){this.burger.contextNode=e}}]),t}();return xe.tagName="axa-header-burger",ge=xe.tagName,Ce=xe,customElements.get(ge)||customElements.define(ge,Ce),xe});
