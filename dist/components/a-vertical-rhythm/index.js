var StyleGuideWebComponent=function(){"use strict";var o={},i=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,r=void 0!==n&&n,o=e.cancelable,i=void 0!==o&&o,a=e.detail,l=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(t,r,i,l);var s=c.preventDefault;return c.preventDefault=function(){s.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},c}}(),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},d=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},s=function(t,e){var n={};for(var r in t)0<=e.indexOf(r)||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},h=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},f=function t(e,n,r,o){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var l=i.set;void 0!==l&&l.call(o,r)}return r},c=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function v(t,e,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new i(e,a({},r,{detail:n}));return t.dispatchEvent(o)}var b=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function _(t){for(var o=t.className,i=!1,a=!0,e=arguments.length,n=Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var l=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;e?i=!0:a=!1;return{className:t,hasClass:e}});return!(!a&&!i)&&l}var g=/\s+/,O={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==t[o=n[i]])return e[o];return""}()};function y(n,t,r,o){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=e.capture,a=void 0!==i&&i,l=e.passive,c=void 0===l||l;if(O[t]&&(t=O[t]),!n||!t)return null;var s=void 0===r?"undefined":m(r),u=r&&"string"===s;if("function"===s){if(o){var p=o;a=p.capture,c=p.passive}o=r}for(var d=b?{capture:a,passive:c}:a,h=u?function(t){var e=t.target;for(;!_(e,r)&&e!==n;)e=e.parentNode;if(e!==n)return o(t,e)}:o,f=t.split(g),v=f.length,y=0;y<v;++y)n.addEventListener(f[y],h,d);return function t(){for(var e=0;e<v;++e)n.removeEventListener(f[e],h,d);!function(t,e){if(!t)return;for(var n=Object.keys(t),r=n.length,o=0;o<r;++o){var i=n[o];if(t[i]===e)return delete t[i]}}(this,t)}}function C(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,i=void 0!==e&&e,n=t.trailing,a=void 0===n||n,l=t.maxWait,c=void 0!==l&&l,s=void 0,u=void 0,p=void 0,d=void 0,h=!1,f=o!==c,v=!1!==c;function y(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return s=e,f&&(u&&clearTimeout(u),u=setTimeout(m,o)),v&&!p&&(p=setTimeout(b,c)),i&&!h&&(h=!0,d=r.apply(void 0,x(s))),d}return y.flush=function(){(u||p)&&(d=r.apply(void 0,x(s)));return g(),d},y.cancel=g,y;function m(){p&&clearTimeout(p),_()}function b(){u&&clearTimeout(u),_()}function _(){a&&(d=r.apply(void 0,x(s))),p=u=null,h=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),s=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var k=window.__subscriptions;function w(t,e){var n=y(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);k[t]||(k[t]={count:0});var r,o=k[t];return o.count++,o.onsubscribe||(o.onsubscribe=C((r=t,function(){v(document,"pubsub/onsubscribe",r),v(document,"pubsub/onsubscribe/"+r,r),k[r]&&delete k[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete k[t]}}y(document,"pubsub/onsubscribe",function(t){var e=t.detail;k[e]||(k[e]={count:0});var n=k[e],r=n.queue;Array.isArray(r)&&(r.forEach(function(t){var e=c(t,3),n=e[0],r=e[1],o=e[2];v(o,n,r)}),delete n.queue)});var A,t=function(t,e){return t===e},N=(A=function(){var t;return(t=console).log.apply(t,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t;return function(){for(var t=arguments.length,r=Array(t),e=0;e<t;e++)r[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,e))?A.apply(void 0,arguments):void 0}}}}()(!0),function(t){function c(t,e){var n;u(this,c);for(var r="\n    Native Property >>>"+t+"<<< exists already at "+e.nodeName+"#"+e._id+" and evaluates to -> "+e[t]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var l=h(this,(n=c.__proto__||Object.getPrototypeOf(c)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(l,c),l.name="PropertyExistsException",l}return d(c,t),c}(Error)),r=/[A-Z]/g;function P(t,e,n){var r=t.toLowerCase(),o=n.charAt(e+1);return 0===e||o.toUpperCase()===o?r:"-"+r}var E=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function j(e,n){var t=e;if(e&&n!==e){if(E.test(e))try{t=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else t=!0;return t}var e=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,n=/[-_]+/g;function T(t){return t.replace(e,S)}function S(t,e){return 0==+t||n.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}var R=["title","checked","disabled"],M=[];var z=1,D=3,L=8;function U(t,e){var n=t.nodeType,r=t.nodeName;n===z&&function(t,e){for(var n=e.attributes,r=t.attributes,o=null,i=null,a=null,l=null,c=r.length-1;0<=c;--c)if(l=r[c],a=l.name,o=l.namespaceURI,i=l.value,o){var s=l.localName;e.getAttributeNS(o,s||a)!==i&&e.setAttributeNS(o,a,i)}else e.hasAttribute(a)?e.getAttribute(a)!==i&&("null"===i||"undefined"===i?e.removeAttribute(a):e.setAttribute(a,i)):e.setAttribute(a,i);for(var u=n.length-1;0<=u;--u)!1!==(l=n[u]).specified&&(a=l.name,(o=l.namespaceURI)?(a=l.localName||a,t.hasAttributeNS(o,a)||e.removeAttributeNS(o,a)):t.hasAttributeNS(null,a)||e.removeAttribute(a))}(t,e),n!==D&&n!==L||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===r?function(t,e){var n=t.value,r=e.value;I(t,e,"checked"),I(t,e,"disabled"),n!==r&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===r?I(t,e,"selected"):"TEXTAREA"===r&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function I(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var F=3;function V(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(U(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,l=0;n=e.childNodes[l],r=t.childNodes[l-a],n||r;l++)if(r)if(n)if(H(r,n))(o=V(r,n))!==n&&(e.replaceChild(o,n),a++);else{i=null;for(var c=l;c<e.childNodes.length;c++)if(H(e.childNodes[c],r)){i=e.childNodes[c];break}i?((o=V(r,i))!==i&&a++,e.insertBefore(o,n)):r.id||n.id?(e.insertBefore(r,n),a++):(o=V(r,n))!==n&&(e.replaceChild(o,n),a++)}else e.appendChild(r),a++;else e.removeChild(n),l--}(t,e),e):null:t}function H(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===F&&t.nodeValue===e.nodeValue)}var W=function(t){function l(t){var e;u(this,l);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=h(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,l),a.name="TemplateNoStringReturnException",a}return d(l,t),l}(Error),q=!!document.createDocumentFragment().children;function K(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(K.prototype,HTMLElement.prototype),Object.setPrototypeOf(K,HTMLElement);var G=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}(function(e){return function(t){function a(){var t,e,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n=h(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(o))))._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,t)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=w("context/available",n._makeContextReady)},h(n,e)}return d(a,e),l(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;k[t]||(k[t]={count:0,queue:[]});var r=k[t].queue;Array.isArray(r)?r.push([t,e,n]):v(n,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),a}()},function(e){return function(t){function n(){return u(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,e),l(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function s(t){u(this,s);var c=h(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));c._reduceProps=function(t,e){var n=t.props,r=t.shouldUpdate,o=c._hasKeys[e];if(-1===R.indexOf(e)&&o)throw new N(e,c);var i="_"+e,a=n[e],l=c[i];return r||c.shouldUpdateCallback(a,l)?(c[i]=a,c._props[e]=a,o&&f(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),e,a,c),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},c._isConnected=!1,c._props={},c._hasKeys={},c.updatedDebounced=C(function(){return c.updated&&c.updated()},50);var e=c.constructor.observedAttributes;return Array.isArray(e)&&e.forEach(function(t){var e,n=T(t),r=n in c;if(-1===R.indexOf(n)&&r)throw new N(n,c);c._hasKeys[n]=r,Object.defineProperty(c,n,e={get:function(){return this._props[n]},set:function(t){this.shouldUpdateCallback(this._props[n],t)&&(this._props[n]=t,r&&f(e.__proto__||Object.getPrototypeOf(e),n,t,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),c}return d(s,e),l(s,[{key:"connectedCallback",value:function(){var o=this;if(p(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"connectedCallback",this)&&p(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var e=T(t);if(o.hasAttribute(t)){var n=function(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=j(n,e)}(o,t),r=o._hasKeys[e];o._props[e]=n,r&&f(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),e,n,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(this.shouldUpdateCallback(n,e)){var r=T(t);this.hasAttribute(t)?this[r]=j(n):this[r]=null}}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return-1<n.indexOf(t.replace(r,P))}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),s}()},function(e){return function(t){function c(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=s(t,["template"]);u(this,c);var r=h(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,n));return r._template=e,r._hasTemplate=!!e,r._hasRendered=!1,r.updated=r.render,r}return d(c,e),l(c,[{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});q||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var i=e(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(t){a.appendChild(t)});else if(i){if("string"==typeof i)throw new W(this);a.appendChild(i)}if(t)p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":m(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":m(e)))throw new Error("componentMorph: newTree should be an object");V(e,t)}(this,l),function(){for(var t=void 0;t=M.pop();)delete t.isSameNode;M=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),c}()},function(e){return function(t){function i(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,r=s(t,["styles"]);u(this,i);var o=h(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return d(i,e),l(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),i}()})(function(t){function r(t){u(this,r);var e,n=h(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t));return n._id=((e=n.nodeName)in o||(o[e]=0),++o[e]),n}return d(r,K),l(r,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),r}()),$={},B=function(t){function a(){var t,e,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n=h(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,e)}return d(a,G),l(a,null,[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:G.uuidv4();if(t&&!$[e]){var n=document.createElement("style"),r=document.createTextNode(t);$[e]=!0,n.appendChild(r),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Z,J,X=function(t,e){return e},Q=function(t){function e(){return u(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{styles:'.a-vertical-rhythm {\n  display: block; }\n  .a-vertical-rhythm > :first-child {\n    padding-top: 40px; }\n    .a-vertical-rhythm > :first-child::before {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 40px;\n      margin-top: -40px;\n      background: #b5d0ee;\n      content: "padding-top: 40px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > :first-child::before {\n          font-size: 18px; } }\n  @media (min-width: 768px) {\n    .a-vertical-rhythm > :first-child {\n      padding-top: 60px; }\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 60px;\n        margin-top: -60px;\n        background: #b5d0ee;\n        content: "padding-top: 60px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 18px; } }\n  @media (min-width: 992px) {\n    .a-vertical-rhythm > :first-child {\n      padding-top: 70px; }\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 70px;\n        margin-top: -70px;\n        background: #b5d0ee;\n        content: "padding-top: 70px"; } }\n    @media (min-width: 992px) and (min-width: 576px) {\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 18px; } }\n  .a-vertical-rhythm > :last-child {\n    padding-bottom: 40px; }\n    .a-vertical-rhythm > :last-child::after {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 40px;\n      margin-bottom: -40px;\n      background: #b5d0ee;\n      content: "padding-bottom: 40px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > :last-child::after {\n          font-size: 18px; } }\n  @media (min-width: 768px) {\n    .a-vertical-rhythm > :last-child {\n      padding-bottom: 60px; }\n      .a-vertical-rhythm > :last-child::after {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 60px;\n        margin-bottom: -60px;\n        background: #b5d0ee;\n        content: "padding-bottom: 60px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > :last-child::after {\n        font-size: 18px; } }\n  .a-vertical-rhythm > * {\n    margin-top: 20px;\n    background: #fff;\n    display: block; }\n    .a-vertical-rhythm > *:first-child {\n      margin-top: 0; }\n    .a-vertical-rhythm > *::before {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 20px;\n      margin-top: -20px;\n      background: #fad6de;\n      content: "margin-top: 20px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > *::before {\n          font-size: 18px; } }\n    @media (min-width: 768px) {\n      .a-vertical-rhythm > * {\n        margin-top: 40px; }\n        .a-vertical-rhythm > *:first-child {\n          margin-top: 0; }\n        .a-vertical-rhythm > *::before {\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          letter-spacing: 0.01em;\n          position: relative;\n          display: block;\n          color: #fff;\n          text-align: center;\n          height: 40px;\n          margin-top: -40px;\n          background: #fad6de;\n          content: "margin-top: 40px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > *::before {\n        font-size: 18px; } }\n    @media (min-width: 992px) {\n      .a-vertical-rhythm > * {\n        margin-top: 60px; }\n        .a-vertical-rhythm > *:first-child {\n          margin-top: 0; }\n        .a-vertical-rhythm > *::before {\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          letter-spacing: 0.01em;\n          position: relative;\n          display: block;\n          color: #fff;\n          text-align: center;\n          height: 60px;\n          margin-top: -60px;\n          background: #fad6de;\n          content: "margin-top: 60px"; } }\n    @media (min-width: 992px) and (min-width: 576px) {\n      .a-vertical-rhythm > *::before {\n        font-size: 18px; } }\n',template:X}))}return d(e,B),l(e,[{key:"connectedCallback",value:function(){p(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" a-vertical-rhythm"}}]),e}();return Q.tagName="axa-vertical-rhythm",Z=Q.tagName,J=Q,customElements.get(Z)||customElements.define(Z,J),Q}();
