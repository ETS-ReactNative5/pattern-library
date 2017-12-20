!function(){"use strict";function e(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new $(t,s({},r,{detail:n}));e.dispatchEvent(o)}function t(e,t,n,r){function o(){for(var t=0;t<u;++t)e.removeEventListener(s[t],c,i);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,o)}var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(V[t]&&(t=V[t]),!e||!t)return null;var l=void 0===n?"undefined":a(n);"function"===l&&(i=!!r,r=n);for(var c=n&&"string"===l?function(t){for(var o=t.target;!function(e,t){return function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(t).test(e.className)}(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,s=t.split(q),u=s.length,f=0;f<u;++f)e.addEventListener(s[f],c,i);return o}function n(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var r=".m-header-top-content-bar {\n  display: block;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff; }\n  .m-header-navigation-mobile .m-header-top-content-bar {\n    padding-top: 20px !important;\n    padding-bottom: 20px !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar {\n      padding-top: 5px;\n      padding-bottom: 5px; } }\n\n.m-header-top-content-bar,\n.m-header-top-content-bar--corporate {\n  background: #027180; }\n\n.m-header-top-content-bar--commercial {\n  background: #00005b; }\n\n.m-header-top-content-bar--warning {\n  background: #c91432; }\n\n.m-header-top-content-bar__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-top-content-bar__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-top-content-bar__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-top-content-bar__box {\n      max-width: 1140px; } }\n  .m-header-navigation-mobile .m-header-top-content-bar__box {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; } }\n\n.m-header-top-content-bar__text {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin-right: 24px; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__text {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-header-top-content-bar__text {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-header-top-content-bar__text {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n\n.m-header-top-content-bar__button {\n  margin-top: 10px; }\n  .m-header-navigation-mobile .m-header-top-content-bar__button {\n    margin-top: 10px !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__button {\n      margin-top: 0; } }\n",o=function(e){return function(t,n,r){for(var o in n)o in i&&(n[i[o]]=n[o],delete n[o]);return e(t,n,r)}},i={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=(function(){function e(e){this.value=e}function t(t){function n(o,i){try{var a=t[o](i),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?n(o.key,o.arg):i=null}var o,i;this._invoke=function(e,t){return new Promise(function(r,a){var l={key:e,arg:t,resolve:r,reject:a,next:null};i?i=i.next=l:(o=i=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},h=1,m=2,b=3,v=4,g=5,x=6,y=7,w=8,_=9,k=10,C=11,O=12,E=13,A=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),S=/\n[\s]+$/,T=/^\n[\s]+/,j=/[\s]+$/,N=/^[\s]+/,L=/[\n\s]+/g,P=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],F=["code","pre"],M=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,c=n.length;l<c;l++){var s=n[l];if(Array.isArray(s))e(t,s);else{("number"==typeof s||"boolean"==typeof s||"function"==typeof s||s instanceof Date||s instanceof RegExp)&&(s=s.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof s)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=s:(s=document.createTextNode(s),t.appendChild(s),u=s),l===c-1&&(a=!1,-1===P.indexOf(i)&&-1===F.indexOf(i)?""===(r=u.nodeValue.replace(T,"").replace(j,"").replace(S,"").replace(L," "))?t.removeChild(u):u.nodeValue=r:-1===F.indexOf(i)&&(o=0===l?"":" ",r=u.nodeValue.replace(T,o).replace(N," ").replace(j,"").replace(S,"").replace(L," "),u.nodeValue=r));else if(s&&s.nodeType){a&&(a=!1,-1===P.indexOf(i)&&-1===F.indexOf(i)?""===(r=u.nodeValue.replace(T,"").replace(S,"").replace(L," "))?t.removeChild(u):u.nodeValue=r:-1===F.indexOf(i)&&(r=u.nodeValue.replace(N," ").replace(T,"").replace(S,"").replace(L," "),u.nodeValue=r));var f=s.nodeName;f&&(i=f.toLowerCase()),t.appendChild(s)}}}},R=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){function t(e,t,o){var a;-1!==c.indexOf(e)&&(t.namespace=n);var s=!1;if(t.namespace&&(s=t.namespace,delete t.namespace),s)a=document.createElementNS(s,e);else{if(e===l)return document.createComment(t.comment);a=document.createElement(e)}for(var u in t)if(t.hasOwnProperty(u)){var f=u.toLowerCase(),p=t[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==i.indexOf(f))if("true"===p)p=f;else if("false"===p)continue;"on"===f.slice(0,2)?a[u]=p:s?"xlink:href"===u?a.setAttributeNS(r,u,p):/^xmlns($|:)/i.test(u)||a.setAttributeNS(null,u,p):a.setAttribute(u,p)}return M(a,o),a}var n="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],l="!--",c=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":a(e))?e:r("",e)}t||(t={});var r=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=o(e)),function(o){function i(e){var n=[];l===y&&(l=v);for(var r=0;r<e.length;r++){var o=e.charAt(r);l===h&&"<"===o?(c.length&&n.push([h,c]),c="",l=m):">"!==o||function(e){return e===_||e===k}(l)||l===E?l===E&&/-$/.test(c)&&"-"===o?(t.comments&&n.push([w,c.substr(0,c.length-1)],[b]),c="",l=h):l===m&&/^!--$/.test(c)?(t.comments&&n.push([m,c],[g,"comment"],[C]),c=o,l=E):l===h||l===E?c+=o:l===m&&/\s/.test(o)?(n.push([m,c]),c="",l=v):l===m?c+=o:l===v&&/[^\s"'=/]/.test(o)?(l=g,c=o):l===v&&/\s/.test(o)?(c.length&&n.push([g,c]),n.push([O])):l===g&&/\s/.test(o)?(n.push([g,c]),c="",l=x):l===g&&"="===o?(n.push([g,c],[C]),c="",l=y):l===g?c+=o:l!==x&&l!==v||"="!==o?l!==x&&l!==v||/\s/.test(o)?l===y&&'"'===o?l=k:l===y&&"'"===o?l=_:l===k&&'"'===o?(n.push([w,c],[O]),c="",l=v):l===_&&"'"===o?(n.push([w,c],[O]),c="",l=v):l!==y||/\s/.test(o)?l===w&&/\s/.test(o)?(n.push([w,c],[O]),c="",l=v):l!==w&&l!==_&&l!==k||(c+=o):(l=w,r--):(n.push([O]),/[\w-]/.test(o)?(c+=o,l=g):l=v):(n.push([C]),l=y):(l===m?n.push([m,c]):l===g?n.push([g,c]):l===w&&c.length&&n.push([w,c]),n.push([b]),c="",l=h)}return l===h&&c.length?(n.push([h,c]),c=""):l===w&&c.length?(n.push([w,c]),c=""):l===k&&c.length?(n.push([w,c]),c=""):l===_&&c.length?(n.push([w,c]),c=""):l===g&&(n.push([g,c]),c=""),n}for(var l=h,c="",s=arguments.length,u=[],f=0;f<o.length;f++)if(f<s-1){var p=arguments[f+1],d=i(o[f]),S=l;S===k&&(S=w),S===_&&(S=w),S===y&&(S=w),S===v&&(S=g),d.push([0,S,p]),u.push.apply(u,d)}else u.push.apply(u,i(o[f]));for(var T=[null,{},[]],j=[[T,-1]],f=0;f<u.length;f++){var N=j[j.length-1][0],L=(d=u[f])[0];if(L===m&&/^\//.test(d[1]))z=j[j.length-1][1],j.length>1&&(j.pop(),j[j.length-1][0][2][z]=e(N[0],N[1],N[2].length?N[2]:void 0));else if(L===m){var P=[d[1],{},[]];N[2].push(P),j.push([P,N[2].length-1])}else if(L===g||0===L&&d[1]===g){for(var F,M="";f<u.length;f++)if(u[f][0]===g)M=r(M,u[f][1]);else{if(0!==u[f][0]||u[f][1]!==g)break;if("object"!==a(u[f][2])||M)M=r(M,u[f][2]);else for(F in u[f][2])u[f][2].hasOwnProperty(F)&&!N[1][F]&&(N[1][F]=u[f][2][F])}u[f][0]===C&&f++;for(var R=f;f<u.length;f++)if(u[f][0]===w||u[f][0]===g)N[1][M]?""===u[f][1]||(N[1][M]=r(N[1][M],u[f][1])):N[1][M]=n(u[f][1]);else{if(0!==u[f][0]||u[f][1]!==w&&u[f][1]!==g){!M.length||N[1][M]||f!==R||u[f][0]!==b&&u[f][0]!==O||(N[1][M]=M.toLowerCase()),u[f][0]===b&&f--;break}N[1][M]?""===u[f][2]||(N[1][M]=r(N[1][M],u[f][2])):N[1][M]=n(u[f][2])}}else if(L===g)N[1][d[1]]=!0;else if(0===L&&d[1]===g)N[1][d[2]]=!0;else if(L===b){if(function(e){return A.test(e)}(N[0])&&j.length){var z=j[j.length-1][1];j.pop(),j[j.length-1][0][2][z]=e(N[0],N[1],N[2].length?N[2]:void 0)}}else if(0===L&&d[1]===h)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=r("",d[2])),Array.isArray(d[2][0])?N[2].push.apply(N[2],d[2]):N[2].push(d[2]);else if(L===h)N[2].push(d[1]);else if(L!==C&&L!==O)throw new Error("unhandled: "+L)}if(T[2].length>1&&/^\s*$/.test(T[2][0])&&T[2].shift(),T[2].length>2||2===T[2].length&&/\S/.test(T[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(T[2][0])&&"string"==typeof T[2][0][0]&&Array.isArray(T[2][0][2])&&(T[2][0]=e(T[2][0][0],T[2][0][1],T[2][0][2])),T[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),z=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['<div class="m-header-top-content-bar__box">',"</div>"],['<div class="m-header-top-content-bar__box">',"</div>"]),D=function(e,t){return R(z,t)},G=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,$=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,r,i,l);var s=c.preventDefault;return c.preventDefault=function(){s.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),q=/\s+/,V={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(o=n[i],void 0!==e[o])return t[o];return null}()},I={};t(document,"pubsub/onsubscribe",function(t){var n=t.detail;I[n]||(I[n]={count:0});var r=I[n],o=r.queue;Array.isArray(o)&&(o.forEach(function(t){var n=p(t,3),r=n[0],o=n[1];e(n[2],r,o)}),delete r.queue)}),Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement);var B={},W=function(r){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];l(this,o);var n=f(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return u(o,n),c(o,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var r=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,r=n.length,o=0;o<r;++o){var i=n[o];t[i.name]=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(G.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}(i)}return t}(this),n);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var o=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(r)}this._hasRendered=!0}catch(o){"throwed"!==o.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;I[t]||(I[t]={count:0,queue:[]});var o=I[t].queue;Array.isArray(o)?o.push([t,n,r]):e(r,t,n)}("context/enabled",t)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var n=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(n,r){var o=t(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n,r);I[n]||(I[n]={count:0});var i=I[n];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return p=r,g&&(h&&clearTimeout(h),h=setTimeout(function(){m&&clearTimeout(m),n()},o)),x&&!m&&(m=setTimeout(function(){h&&clearTimeout(h),n()},f)),l&&!v&&(v=!0,b=e.apply(void 0,d(p))),b}function n(){s&&(b=e.apply(void 0,d(p))),h=null,m=null,v=!1}function r(){h&&(clearTimeout(h),h=null),m&&(clearTimeout(m),m=null),p=void 0,v=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.leading,l=void 0!==a&&a,c=i.trailing,s=void 0===c||c,u=i.maxWait,f=void 0!==u&&u,p=void 0,h=void 0,m=void 0,b=void 0,v=!1,g=o!==f,x=!1!==f;return t.flush=function(){return(h||m)&&(b=e.apply(void 0,d(p))),r(),b},t.cancel=r,t}(function(t){return function(){e(document,"pubsub/onsubscribe",t),e(document,"pubsub/onsubscribe/"+t,t),I[t]&&delete I[t].unsubscribe}}(n),100)),i.onsubscribe(),function(){i.count--,o.call(this),i.count<=0&&delete I[n]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),o}(),H=(function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,W),c(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,W),c(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W.uuidv4();if(e&&!B[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),B[e]=!0}}}]),t}()),J=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r,D))}return u(t,H),c(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=this.getAttribute("type");this.className=this.initialClassName+" m-header-top-content-bar m-header-top-content-bar--"+e}}]),t}();!function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-header-top-content-bar",J)})}();
