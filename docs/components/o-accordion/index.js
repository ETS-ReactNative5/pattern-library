var StyleGuideWebComponent=function(){"use strict";var t={},n=function(e){return e in t||(t[e]=0),++t[e]},i=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=t.bubbles,n=void 0!==r&&r,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,n,i,c);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){var r={};for(var n in e)0<=t.indexOf(n)||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,r,n,o){var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,r,n,o)}else if("value"in i&&i.writable)i.value=n;else{var c=i.set;void 0!==c&&c.call(o,n)}return n},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)};function u(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new i(t,a({},n,{detail:r}));return e.dispatchEvent(o)}var _=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),r=function(){};window.addEventListener("testPassiveEventSupport",r,t),window.removeEventListener("testPassiveEventSupport",r,t)}return e}();function m(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,r=Array(1<t?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var c=r.map(function(e){var t=(r=e,new RegExp("^"+r+"$|^"+r+"\\s|\\s"+r+"\\s|\\s"+r+"$",n)).test(o);var r,n;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&c}var g=/\s+/,C={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},r=Object.keys(t),n=r.length,o=void 0,i=0;i<n;++i)if(void 0!==e[o=r[i]])return t[o];return""}()};function v(r,e,n,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,c=t.passive,l=void 0===c||c;if(C[e]&&(e=C[e]),!r||!e)return null;var u=void 0===n?"undefined":b(n),s=n&&"string"===u;if("function"===u){if(o){var d=o;a=d.capture,l=d.passive}o=n}for(var p=_?{capture:a,passive:l}:a,f=s?function(e){var t=e.target;for(;!m(t,n)&&t!==r;)t=t.parentNode;if(t!==r)return o(e,t)}:o,h=e.split(g),v=h.length,y=0;y<v;++y)r.addEventListener(h[y],f,p);return function e(){for(var t=0;t<v;++t)r.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var r=Object.keys(e),n=r.length,o=0;o<n;++o){var i=r[o];if(e[i]===t)return delete e[i]}}(this,e)}}function y(n){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,r=e.trailing,a=void 0===r||r,c=e.maxWait,l=void 0!==c&&c,u=void 0,s=void 0,d=void 0,p=void 0,f=!1,h=o!==l,v=!1!==l;function y(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return u=t,h&&(s&&clearTimeout(s),s=setTimeout(b,o)),v&&!d&&(d=setTimeout(_,l)),i&&!f&&(f=!0,p=n.apply(void 0,O(u))),p}return y.flush=function(){(s||d)&&(p=n.apply(void 0,O(u)));return g(),p},y.cancel=g,y;function b(){d&&clearTimeout(d),m()}function _(){s&&clearTimeout(s),m()}function m(){a&&(p=n.apply(void 0,O(u))),d=s=null,f=!1}function g(){s&&(clearTimeout(s),s=null),d&&(clearTimeout(d),d=null),u=void 0,f=!1}}var x={};function k(e,t){var r=v(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);x[e]||(x[e]={count:0});var n,o=x[e];return o.count++,o.onsubscribe||(o.onsubscribe=y((n=e,function(){u(document,"pubsub/onsubscribe",n),u(document,"pubsub/onsubscribe/"+n,n),x[n]&&delete x[n].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,r.call(this),o.count<=0&&delete x[e]}}v(document,"pubsub/onsubscribe",function(e){var t=e.detail;x[t]||(x[t]={count:0});var r=x[t],n=r.queue;Array.isArray(n)&&(n.forEach(function(e){var t=l(e,3),r=t[0],n=t[1],o=t[2];u(o,r,n)}),delete r.queue)});var A,e=function(e,t){return e===t},N=((A=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e;return function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){return o.apply(void 0,[].concat(n,t))?A.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var r;s(this,l);for(var n="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var c=f(this,(r=l.__proto__||Object.getPrototypeOf(l)).call.apply(r,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(c,l),c.name="PropertyExistsException",c}return p(l,e),l}(Error)),E=/[A-Z]/g;function P(e,t,r){var n=e.toLowerCase(),o=r.charAt(t+1);return 0===t||o.toUpperCase()===o?n:"-"+n}var w=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function j(t,r){var e=t;if(t&&r!==t){if(w.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+r+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var r=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,T=/[-_]+/g;function S(e){return e.replace(r,R)}function R(e,t){return 0==+e||T.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var M=["title","checked","disabled"],L=[];var D=1,V=3,U=8;function I(e,t){var r=e.nodeType,n=e.nodeName;r===D&&function(e,t){for(var r=t.attributes,n=e.attributes,o=null,i=null,a=null,c=null,l=n.length-1;0<=l;--l)if(c=n[l],a=c.name,o=c.namespaceURI,i=c.value,o){var u=c.localName;t.getAttributeNS(o,u||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var s=r.length-1;0<=s;--s)!1!==(c=r[s]).specified&&(a=c.name,(o=c.namespaceURI)?(a=c.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),r!==V&&r!==U||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===n?function(e,t){var r=e.value,n=t.value;F(e,t,"checked"),F(e,t,"disabled"),r!==n&&(t.setAttribute("value",r),t.value=r);"null"===r&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=r):t.removeAttribute("value")}(e,t):"OPTION"===n?F(e,t,"selected"):"TEXTAREA"===n&&function(e,t){var r=e.value;r!==t.value&&(t.value=r);if(t.firstChild&&t.firstChild.nodeValue!==r){if(""===r&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=r}}(e,t)}function F(e,t,r){e[r]!==t[r]&&(t[r]=e[r],e[r]?t.setAttribute(r,""):t.removeAttribute(r))}var H=3;function W(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(I(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var r=void 0,n=void 0,o=void 0,i=void 0,a=0,c=0;r=t.childNodes[c],n=e.childNodes[c-a],r||n;c++)if(n)if(r)if(q(n,r))(o=W(n,r))!==r&&(t.replaceChild(o,r),a++);else{i=null;for(var l=c;l<t.childNodes.length;l++)if(q(t.childNodes[l],n)){i=t.childNodes[l];break}i?((o=W(n,i))!==i&&a++,t.insertBefore(o,r)):n.id||r.id?(t.insertBefore(n,r),a++):(o=W(n,r))!==r&&(t.replaceChild(o,r),a++)}else t.appendChild(n),a++;else t.removeChild(r),c--}(e,t),t):null:e}function q(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===H&&e.nodeValue===t.nodeValue)}var $=function(e){function c(e){var t;s(this,c);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",n=arguments.length,o=Array(1<n?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var a=f(this,(t=c.__proto__||Object.getPrototypeOf(c)).call.apply(t,[this,r].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,c),a.name="TemplateNoStringReturnException",a}return p(c,e),c}(Error),K=!!document.createDocumentFragment().children;function z(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(z.prototype,HTMLElement.prototype),Object.setPrototypeOf(z,HTMLElement);var G=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,r;s(this,a);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=r=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=k("context/available",r._makeContextReady)},f(r,t)}return p(a,t),o(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;x[e]||(x[e]={count:0,queue:[]});var n=x[e].queue;Array.isArray(n)?n.push([e,t,r]):u(r,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function r(){return s(this,r),f(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,t),o(r,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerHTML",e,this)}}]),r}()},function(t){return function(e){function u(e){s(this,u);var l=f(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));l._reduceProps=function(e,t){var r=e.props,n=e.shouldUpdate,o=l._hasKeys[t];if(-1===M.indexOf(t)&&o)throw new N(t,l);var i="_"+t,a=r[t],c=l[i];return n||l.shouldUpdateCallback(a,c)?(l[i]=a,l._props[t]=a,o&&h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,a,l),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=y(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,r=S(e),n=r in l;if(-1===M.indexOf(r)&&n)throw new N(r,l);l._hasKeys[r]=n,Object.defineProperty(l,r,t={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,n&&h(t.__proto__||Object.getPrototypeOf(t),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),l}return p(u,t),o(u,[{key:"connectedCallback",value:function(){var o=this;if(d(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"connectedCallback",this)&&d(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=S(e);if(o.hasAttribute(e)){var r=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var r=e.value;return t?r=e.getAttribute(t):t=e.name,r=j(r,t)}(o,e),n=o._hasKeys[t];o._props[t]=r,n&&h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,r,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,r){this.shouldUpdateCallback(r,t)&&(this[S(e)]=j(r))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,r=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<r.indexOf(e.replace(E,P))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),u}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=c(e,["template"]);s(this,l);var n=f(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,r));return n._template=t,n._hasTemplate=!!t,n._hasRendered=!1,n.updated=n.render,n}return p(l,t),o(l,[{key:"render",value:function(){var r=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var n=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),n.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=n}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);r.childrenFragment.appendChild(t)});K||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new $(this);a.appendChild(i)}if(e)d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: newTree should be an object");W(t,e)}(this,c),function(){for(var e=void 0;e=L.pop();)delete e.isSameNode;L=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,n=c(e,["styles"]);s(this,i);var o=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,n));return o._styles=r,o}return p(i,t),o(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),r=document.createTextNode(this._styles);t.appendChild(r),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function r(e){s(this,r);var t=f(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t._id=n(t.nodeName),t}return p(r,z),o(r,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),r}()),B={},Z=function(e){function a(){var e,t,r;s(this,a);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=r=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(r._styles,r.nodeName)},f(r,t)}return p(a,G),o(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:G.uuidv4();if(e&&!B[t]){var r=document.createElement("style"),n=document.createTextNode(e);B[t]=!0,r.appendChild(n),r.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(r)}}}]),a}();var J,X,Q=/\n[\s]+$/,Y=/^\n[\s]+/,ee=/[\s]+$/,te=/^[\s]+/,re=/[\n\s]+/g,ne=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],oe=["code","pre","textarea"],ie=function(e,t){var r,n=e.classes;return(r=document.createElement("article")).setAttribute("class",""+String(n)),function e(t,r){if(Array.isArray(r))for(var n,o,i=t.nodeName.toLowerCase(),a=!1,c=0,l=r.length;c<l;c++){var u=r[c];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var s=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,s&&"#text"===s.nodeName?s.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),s=u),c===l-1&&(a=!1,-1===ne.indexOf(i)&&-1===oe.indexOf(i)?""===(n=s.nodeValue.replace(Y,"").replace(ee,"").replace(Q,"").replace(re," "))?t.removeChild(s):s.nodeValue=n:-1===oe.indexOf(i)&&(o=0===c?"":" ",n=s.nodeValue.replace(Y,o).replace(te," ").replace(ee,"").replace(Q,"").replace(re," "),s.nodeValue=n));else if(u&&u.nodeType){a&&(a=!1,-1===ne.indexOf(i)&&-1===oe.indexOf(i)?""===(n=s.nodeValue.replace(Y,"").replace(Q,"").replace(re," "))?t.removeChild(s):s.nodeValue=n:-1===oe.indexOf(i)&&(n=s.nodeValue.replace(te," ").replace(Y,"").replace(Q,"").replace(re," "),s.nodeValue=n));var d=u.nodeName;d&&(i=d.toLowerCase()),t.appendChild(u)}}}}(r,[t]),r},ae=".o-accordion {\n  display: block; }\n",ce=function(e){function t(){s(this,t);var e=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:ae,template:ie}));return e.provideContext(),e}return p(t,Z),o(t,[{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-accordion js-accordion"}},{key:"disconnectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this)}}]),t}();return ce.tagName="axa-accordion",J=ce.tagName,X=ce,customElements.get(J)||customElements.define(J,X),ce}();
