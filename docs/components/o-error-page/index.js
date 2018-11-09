var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function _(){}var m=0;function g(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===m&&(m++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(g,t),m--),t}(n)),e}var y=e(function(e){e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=_,n.PropTypes=n,n}()});Object.keys(y).reduce(g,y);var b=y.oneOf(["left","center","right"]),x=y.oneOfType([y.string,y.number]),O=y.oneOfType([y.arrayOf(j),y.shape({cells:y.arrayOf(j)})]),C=y.oneOfType([y.arrayOf(P),y.shape({cells:y.arrayOf(P),action:y.bool})]),w=y.oneOfType([y.arrayOf(S),y.shape({cells:y.arrayOf(S)})]),k=(y.oneOf(["row","col","rowgroup","colgroup","auto"]),y.oneOfType([y.arrayOf(j),y.arrayOf(O)]),y.oneOfType([y.arrayOf(P),y.arrayOf(C)]),y.oneOfType([y.arrayOf(S),y.arrayOf(w)]),y.oneOf(["up","down"])),T=y.oneOf(["left","right"]),A=y.oneOf(["ok","pending","error","unknown"]),E={text:x,value:y.any,rowspan:y.number,colspan:y.number,scope:null,align:b,dense:y.bool},N=y.oneOfType([y.string,y.number,y.shape(E)]),j=y.oneOfType([N,y.shape(l({},E,{sort:k,sortActive:y.bool}))]),P=y.oneOfType([N,y.shape(l({},E,{float:T,action:y.bool,strong:y.bool,bold:y.bool,state:A}))]),S=y.oneOfType([N,y.shape(l({},E,{float:T}))]);function R(e){function t(t,n,r){return null==t[n]?null:e(t,n,r)}return t.isRequired=e,t}var D=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;R(function(e,t,n){if(!D.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});y.oneOf(["top","bottom"]);var L=R(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),U=e(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=void 0===o?"undefined":i(o);if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}),I={},M=function(e){return e in I||(I[e]=0),++I[e]},V=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function q(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new V(t,l({},r,{detail:n}));return e.dispatchEvent(o)}var z=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function F(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}var H=/\s+/,K={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function $(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=o.capture,s=void 0!==a&&a,l=o.passive,c=void 0===l||l;if(K[t]&&(t=K[t]),!e||!t)return null;var u=void 0===n?"undefined":i(n),p=n&&"string"===u;if("function"===u){if(r){var d=r;s=d.capture,c=d.passive}r=n}for(var f=z?{capture:s,passive:c}:s,h=p?function(t){var o=t.target;for(;!F(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(H),_=v.length,m=0;m<_;++m)e.addEventListener(v[m],h,f);return function t(){for(var n=0;n<_;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=t!==l,_=!1!==l;function m(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,h&&(u&&clearTimeout(u),u=setTimeout(g,t)),_&&!p&&(p=setTimeout(y,l)),o&&!f&&(f=!0,d=e.apply(void 0,v(c))),d}return m.flush=function(){(u||p)&&(d=e.apply(void 0,v(c)));return x(),d},m.cancel=x,m;function g(){p&&clearTimeout(p),b()}function y(){u&&clearTimeout(u),b()}function b(){a&&(d=e.apply(void 0,v(c))),u=null,p=null,f=!1}function x(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var B=window.__subscriptions;function G(e,t){var n=$(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);B[e]||(B[e]={count:0});var r,o=B[e];return o.count++,o.onsubscribe||(o.onsubscribe=W((r=e,function(){q(document,"pubsub/onsubscribe",r),q(document,"pubsub/onsubscribe/"+r,r),B[r]&&delete B[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete B[e]}}$(document,"pubsub/onsubscribe",function(e){var t=e.detail;B[t]||(B[t]={count:0});var n=B[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=h(e,3),n=t[0],r=t[1],o=t[2];q(o,n,r)}),delete n.queue)});var Z,J=function(e,t){return e===t},Y=((Z=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?Z.apply(void 0,arguments):void 0}}}})()(!0),/[A-Z]/g);function X(e){return e.replace(Y,Q)}function Q(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var ee=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function te(e,t,n){var r=e;if(n)return function(e,t,n){var r=e;switch(n){case y.string:case y.string.isRequired:return e;case y.bool:case y.bool.isRequired:if(!e||t===e)return!0;case y.number:case y.number.isRequired:case y.object:case y.object.isRequired:case y.array:case y.array.isRequired:default:if(ee.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return r}(e,t,n);if(e&&t!==e){if(ee.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else r=!0;return r}var ne=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,re=/[-_]+/g;function oe(e){return e.replace(ne,ie)}function ie(e,t){return 0==+e||re.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function ae(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[oe(t)]);if(r&&!e.hasAttribute(t))return i!==y.bool&&i!==y.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=te(a,t,i)}var se=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function le(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.capture,i=void 0===o||o,a=r.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,c=$(l,t,function(t){var r=t.target;if(!e.contains(r)&&e!==r)return n(t)},{capture:i,passive:s});return se&&(l.style.cursor="pointer"),c}var ce=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),ue="axa-change",pe="data-prevent-default";((function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var r=!n._lastToggleNode,o=t!==n._lastToggleNode,i=!r&&!o;r?(n._notify(ce.ENTER,t),n._onInteractive()):o&&n._notify(ce.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===ce.ESCAPE||e.key===ce.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,r)}return s(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=l({},e.DEFAULTS,n));var r=this._options.containerClass;this._container=r?this._wcNode.querySelector(r):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=$(this._container,ce.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=$(this._container,ce.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=le(this._container,ce.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=$(this._container.ownerDocument,ce.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(pe)?ae(e,pe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ce.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var de=[];var fe=1,he=3,ve=8;function _e(e,t){var n=e.nodeType,r=e.nodeName;n===fe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],u=p.name,l=p.namespaceURI,c=p.value,!i(u))if(l){var f=p.localName;t.getAttributeNS(l,f||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(u=p.name,l=p.namespaceURI,i(u))continue;l?(u=p.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==he&&n!==ve||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;me(e,t,"checked"),me(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?me(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function me(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ge=3;function ye(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(_e(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(be(r,n))(o=ye(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(be(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=ye(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=ye(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function be(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ge&&e.nodeValue===t.nodeValue)}var xe=function(e){function t(e){var n;a(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];var l=d(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="TemplateNoStringReturnException",l}return u(t,e),t}(Error),Oe=!!document.createDocumentFragment().children;function Ce(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Ce.prototype,HTMLElement.prototype),Object.setPrototypeOf(Ce,HTMLElement);var we=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,r;a(this,n);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return t=r=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=G("context/available",r._makeContextReady)},d(r,t)}return u(n,e),s(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;B[e]||(B[e]={count:0,queue:[]});var r=B[e].queue;Array.isArray(r)?r.push([e,t,n]):q(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){a(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,n){var r=e.props,o=e.shouldUpdate,i="_"+n,a=r[n],s=t[i];return o||t.shouldUpdateCallback(a,s)?(t.props[n]=a,{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t.props={},t.updatedDebounced=W(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){oe(e)}),t}return u(n,e),s(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(X)}}]),s(n,[{key:"connectedCallback",value:function(){var e=this;if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var r=this.constructor.propTypes;t.forEach(function(t){var n=oe(t);if(e.hasAttribute(t)){var o=ae(e,t,r[n]);e.props[n]=o}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=oe(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=te(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&q(this,ue,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return n.indexOf(X(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&y.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=p(e,["template"]);a(this,n);var o=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return u(n,e),s(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});Oe||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=r(this.props,this.childrenFragment,this),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new xe(this);l.appendChild(s)}if(t)c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: newTree should be an object");ye(t,e)}(this,u),function(){for(var e=void 0;e=de.pop();)delete e.isSameNode;de=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=p(e,["styles"]);a(this,n);var i=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return i._styles=r,i}return u(n,e),s(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){a(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=M(n.nodeName),n}return u(t,Ce),s(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),ke={},Te=function(e){function t(){var e,n,r;a(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=r=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},d(r,n)}return u(t,we),s(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:we.uuidv4();if(e&&!ke[t]){var n=document.createElement("style"),r=document.createTextNode(e);ke[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var Ae='.o-error-page {\n  display: block;\n  color: #fff;\n  background: #3b3fd8;\n  text-align: center; }\n\n.o-error-page--pacific {\n  background: #00adc6; }\n\n.o-error-page--teal {\n  background: #027180; }\n\n.o-error-page__container {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .o-error-page__container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .o-error-page__container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .o-error-page__container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .o-error-page__container {\n      max-width: 1140px; } }\n  .o-error-page__container > :first-child {\n    padding-top: 40px; }\n  @media (min-width: 768px) {\n    .o-error-page__container > :first-child {\n      padding-top: 60px; } }\n  @media (min-width: 992px) {\n    .o-error-page__container > :first-child {\n      padding-top: 70px; } }\n  .o-error-page__container > :last-child {\n    padding-bottom: 40px; }\n  @media (min-width: 768px) {\n    .o-error-page__container > :last-child {\n      padding-bottom: 60px; } }\n\n@media (min-width: 768px) {\n  .o-error-page__status,\n  .o-error-page__title,\n  .o-error-page__message {\n    padding-right: 15px;\n    padding-left: 15px;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    max-width: 83.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    margin-left: 8.33333%; } }\n\n.o-error-page__status {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .o-error-page__status {\n      font-size: 16px; } }\n\n.o-error-page__title {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif;\n  margin-top: 5px; }\n  @media (min-width: 576px) {\n    .o-error-page__title {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .o-error-page__title {\n      font-size: 48px; } }\n  @media (min-width: 576px) {\n    .o-error-page__title {\n      margin-top: 0; } }\n\n.o-error-page__message {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  margin-top: 40px;\n  white-space: pre-line; }\n  @media (min-width: 576px) {\n    .o-error-page__message {\n      font-size: 20px; } }\n  @media (min-width: 576px) {\n    .o-error-page__message {\n      margin-top: 50px; } }\n  @media (min-width: 768px) {\n    .o-error-page__message {\n      margin-top: 40px; } }\n\n.o-error-page__message--semibold {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .o-error-page__message--semibold {\n      font-size: 20px; } }\n\n.o-error-page__list {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  text-align: left; }\n  @media (min-width: 576px) {\n    .o-error-page__list {\n      font-size: 18px; } }\n  @media (min-width: 768px) {\n    .o-error-page__list {\n      padding-right: 15px;\n      padding-left: 15px;\n      position: relative;\n      width: 100%;\n      min-height: 1px;\n      max-width: 66.66667%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 66.66667%;\n              flex: 0 0 66.66667%;\n      margin-left: 16.66667%; } }\n\n.o-error-page__list-item {\n  margin-top: 16px; }\n  .o-error-page__list-item:first-child {\n    margin-top: 0; }\n\n.o-error-page__cta {\n  display: block;\n  margin-top: 30px; }\n  @media (min-width: 576px) {\n    .o-error-page__cta {\n      margin-top: 40px; } }\n  @media (min-width: 768px) {\n    .o-error-page__cta {\n      margin-top: 20px; } }\n  @media (min-width: 992px) {\n    .o-error-page__cta {\n      margin-top: 25px; } }\n\n.o-error-page__discover {\n  display: block;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #333;\n  background: #fff; }\n\n.o-error-page__discover-text {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .o-error-page__discover-text {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .o-error-page__discover-text {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .o-error-page__discover-text {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .o-error-page__discover-text {\n      max-width: 1140px; } }\n',Ee=/\n[\s]+$/,Ne=/^\n[\s]+/,je=/[\s]+$/,Pe=/^[\s]+/,Se=/[\n\s]+/g,Re=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],De=["code","pre","textarea"],Le=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===Re.indexOf(i)&&-1===De.indexOf(i)?""===(r=u.nodeValue.replace(Ne,"").replace(je,"").replace(Ee,"").replace(Se," "))?t.removeChild(u):u.nodeValue=r:-1===De.indexOf(i)&&(o=0===s?"":" ",r=u.nodeValue.replace(Ne,o).replace(Pe," ").replace(je,"").replace(Ee,"").replace(Se," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===Re.indexOf(i)&&-1===De.indexOf(i)?""===(r=u.nodeValue.replace(Ne,"").replace(Ee,"").replace(Se," "))?t.removeChild(u):u.nodeValue=r:-1===De.indexOf(i)&&(r=u.nodeValue.replace(Pe," ").replace(Ne,"").replace(Ee,"").replace(Se," "),u.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}};var Ue,Ie,Me=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},Ve=function(e,t){e.code;var n,r,o,i,a,s,l,c,u=e.status,p=e.title,d=e.message,f=e.items,h=e.ctaHref,v=e.ctaTitle,_=Array.isArray(f)&&f.length,m=t&&t.childElementCount,g=((i=document.createElement("article")).setAttribute("class","o-error-page__container"),Le(i,["\n      ",(n=document.createElement("h4"),n.setAttribute("class","o-error-page__status"),Le(n,[u]),n),"\n      ",(r=document.createElement("h1"),r.setAttribute("class","o-error-page__title"),Le(r,[p]),r),"\n  \n      ",(o=document.createElement("p"),o.setAttribute("class",""+String(U("o-error-page__message",{"o-error-page__message--semibold":_}))),Le(o,[Me(d)]),o),"\n      \n      ",_&&(a=document.createElement("ul"),a.setAttribute("class","o-error-page__list"),Le(a,["\n          ",f.map(function(e){var t;return(t=document.createElement("li")).setAttribute("class","o-error-page__list-item"),Le(t,[e]),t}),"\n        "]),a)||null,"\n      \n      ",h&&v&&(s=document.createElement("axa-button"),s.setAttribute("href",""+String(h)),s.setAttribute("tag","a"),s.setAttribute("color","white"),s.setAttribute("ghost","ghost"),s.setAttribute("motion","motion"),s.setAttribute("class","o-error-page__cta"),Le(s,[v]),s)||null,"\n    "]),i);return m?[g,(c=document.createElement("arcticle"),c.setAttribute("class","o-error-page__discover"),Le(c,["\n      ",(l=document.createElement("p"),l.setAttribute("class","o-error-page__discover-text"),Le(l,[t]),l),"\n    "]),c)]:g},qe=function(e){function t(){return a(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Ae,template:Ve}))}return u(t,Te),s(t,[{key:"willRenderCallback",value:function(){var e,t,n,r=this.props.background;this.className=U(this.initialClassName,"o-error-page",(n=r,(t="o-error-page--"+r)in(e={})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))}}]),t}();return qe.tagName="axa-error-page",qe.propTypes={code:y.number,status:y.string,title:y.string,message:y.string,items:y.arrayOf(y.string),ctaHref:L,ctaTitle:y.string,background:y.oneOf(["pacific","teal"])},Ue=qe.tagName,Ie=qe,customElements.get(Ue)||customElements.define(Ue,Ie),qe}();
