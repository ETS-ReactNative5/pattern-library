var StyleGuideWebComponent=function(){"use strict";function e(e,n){return n={exports:{}},e(n,n.exports),n.exports}function n(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function t(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new Y(n,Z({},o,{detail:t}));e.dispatchEvent(r)}function o(e,n){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",n)}function r(e,n){return o(n).test(e.className)}function i(e,n){if(!e)return!1;for(var t=Object.keys(e),o=t.length,r=0;r<o;++r){var i=t[r];if(e[i]===n)return delete e[i]}return!1}function a(e,n,t,o){function a(){for(var n=0;n<d;++n)e.removeEventListener(u[n],c,s);i(this,a)}var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(ne[n]&&(n=ne[n]),!e||!n)return null;var l=void 0===t?"undefined":X(t);"function"===l&&(s=!!o,o=t);for(var c=t&&"string"===l?function(n){for(var i=n.target;!r(i,t)&&i!==e;)i=i.parentNode;if(i!==e)return o(n,i)}:o,u=n.split(ee),d=u.length,f=0;f<d;++f)e.addEventListener(u[f],c,s);return a}function s(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function d(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=e(function(e){!function(){function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var i=void 0===r?"undefined":f(r);if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===i)for(var a in r)t.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}var t={}.hasOwnProperty;e.exports?e.exports=n:window.classNames=n}()}),h=".m-dropdown {\n  position: relative;\n  display: inline-block; }\n\n.m-dropdown__select-wrap {\n  padding: 10.5px 55px 10.5px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #333;\n  position: relative;\n  display: block;\n  width: 100%;\n  /* undo padding frame padding */\n  padding: 0 !important;\n  overflow: hidden;\n  cursor: pointer; }\n  .m-dropdown__select-wrap:hover, .m-dropdown__select-wrap:active, .m-dropdown__select-wrap:focus {\n    outline: none;\n    border-color: #00008f; }\n    .m-dropdown__select-wrap:hover .m-dropdown__icon, .m-dropdown__select-wrap:active .m-dropdown__icon, .m-dropdown__select-wrap:focus .m-dropdown__icon {\n      color: #00008f; }\n\n.m-dropdown__select {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* important: fake it to have 0 width */\n  float: left;\n  /* overflow is indented to fix browser who don't support hiding the native arrow */\n  width: 120%;\n  height: 50px;\n  padding: 0;\n  margin-right: -120%;\n  line-height: 50px;\n  /* not ideal, firefox is buggy here - see fix at the bottom */\n  text-indent: 20px;\n  /* not ideal, firefox is buggy here - see fix at the bottom */\n  vertical-align: middle;\n  cursor: pointer;\n  /* don't use background nor border - the parent deals with that */\n  background: transparent;\n  border: none;\n  color: inherit;\n  /* disable native appearance like arrow */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  /* disable outline styles */\n  /* fix firefox focus stuff */\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-enable */\n  /* fix ugly blue screen at focused option value in IE */\n  /* fix native select arrows on IE */ }\n  .m-dropdown__select:active, .m-dropdown__select:focus {\n    border: none;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    outline: none !important; }\n  .m-dropdown__select:focus {\n    color: #333; }\n    .m-dropdown__select:focus + .m-dropdown__icon {\n      color: #00008f; }\n  .m-dropdown__select::-moz-focus-inner,\n  .m-dropdown__select option::-moz-focus-inner {\n    border: none;\n    box-shadow: none !important;\n    outline: none !important; }\n  .m-dropdown__select:focus::-ms-value {\n    color: inherit;\n    background: transparent; }\n  .m-dropdown__select::-ms-expand {\n    display: none; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .m-dropdown__select {\n      /* IE10+ CSS styles go here */\n      /* fix IE not adhering to `text-indent` rules at <select> tags */\n      padding-left: 20px; } }\n\n@-moz-document url-prefix() {\n  .m-dropdown__select {\n    /* ugly fix of firefox related issues */\n    /* Fix Firefox doubles text-indent value */\n    text-indent: 10px;\n    /* fix firefox dotted border on focused selects */ }\n    .m-dropdown__select:focus {\n      color: transparent;\n      text-shadow: 0 0 0 #00008f; } }\n\n.m-dropdown__select-icon {\n  display: block;\n  float: right;\n  height: 50px;\n  padding: 0 20px;\n  margin-left: -100%;\n  pointer-events: none;\n  background: #fff;\n  /* fix missing height of wrapping root node of <axa-icon> */ }\n  .m-dropdown__select-icon > * {\n    display: block;\n    height: 100%; }\n  .m-dropdown__select-icon .m-dropdown__icon {\n    position: relative;\n    right: auto; }\n\n.m-dropdown__toggle {\n  background: transparent;\n  border: none;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  position: relative;\n  padding: 10.5px 55px 10.5px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #333; }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-dropdown__toggle {\n      font-size: 18px; } }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    cursor: pointer; }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    outline: none;\n    border-color: #00008f; }\n    .m-dropdown__toggle:hover .m-dropdown__icon, .m-dropdown__toggle:active .m-dropdown__icon, .m-dropdown__toggle:focus .m-dropdown__icon {\n      color: #00008f; }\n  .m-dropdown__toggle:hover::after, .m-dropdown__toggle:active::after, .m-dropdown__toggle:focus::after {\n    display: block; }\n  .m-dropdown__toggle::after {\n    position: absolute;\n    bottom: -1px;\n    left: 0;\n    z-index: 1001;\n    display: none;\n    width: 100%;\n    height: 1px;\n    overflow: hidden;\n    content: '';\n    background: #00008f; }\n\n.m-dropdown__icon {\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  display: block;\n  width: 15px;\n  height: 15px;\n  margin-top: -7.5px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n  .is-dropdown-open .m-dropdown__icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.m-dropdown__content {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  z-index: 1000;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n  margin-top: -1px;\n  background: #fff; }\n  .is-dropdown-open > .m-dropdown__content {\n    height: auto; }\n  .m-dropdown--in-flow > .m-dropdown__content {\n    position: static; }\n\n.m-dropdown__item {\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc; }\n  .m-dropdown__item:first-child {\n    border-top: 1px solid #ccc; }\n  .m-dropdown__item:last-child {\n    border-bottom: 3px solid #ccc; }\n\n.m-dropdown__link {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: block;\n  padding: 10.5px 20px;\n  color: #333;\n  white-space: nowrap; }\n  @media (min-width: 576px) {\n    .m-dropdown__link {\n      font-size: 18px; } }\n  .m-dropdown__link:hover, .m-dropdown__link:active, .m-dropdown__link:focus {\n    color: #00008f;\n    text-decoration: none;\n    background: #f5f5f5; }\n",m=function(e){return function(n,t,o){for(var r in t)r in v&&(t[v[r]]=t[r],delete t[r]);return e(n,t,o)}},v={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=1,y=2,b=3,w=4,x=5,k=6,C=7,E=8,O=9,j=10,T=11,S=12,A=13,N=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),P=/\n[\s]+$/,L=/^\n[\s]+/,D=/[\s]+$/,F=/^[\s]+/,I=/[\n\s]+/g,M=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],z=["code","pre"],R=function e(n,t){if(Array.isArray(t))for(var o,r,i=n.nodeName.toLowerCase(),a=!1,s=0,l=t.length;s<l;s++){var c=t[s];if(Array.isArray(c))e(n,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=n.childNodes[n.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),n.appendChild(c),u=c),s===l-1&&(a=!1,-1===M.indexOf(i)&&-1===z.indexOf(i)?""===(o=u.nodeValue.replace(L,"").replace(D,"").replace(P,"").replace(I," "))?n.removeChild(u):u.nodeValue=o:-1===z.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(L,r).replace(F," ").replace(D,"").replace(P,"").replace(I," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===M.indexOf(i)&&-1===z.indexOf(i)?""===(o=u.nodeValue.replace(L,"").replace(P,"").replace(I," "))?n.removeChild(u):u.nodeValue=o:-1===z.indexOf(i)&&(o=u.nodeValue.replace(F," ").replace(L,"").replace(P,"").replace(I," "),u.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),n.appendChild(c)}}}},q=e(function(e){function n(e,n,s){var l;-1!==a.indexOf(e)&&(n.namespace=t);var c=!1;if(n.namespace&&(c=n.namespace,delete n.namespace),c)l=document.createElementNS(c,e);else{if(e===i)return document.createComment(n.comment);l=document.createElement(e)}for(var u in n)if(n.hasOwnProperty(u)){var d=u.toLowerCase(),f=n[u];if("classname"===d&&(d="class",u="class"),"htmlFor"===u&&(u="for"),-1!==r.indexOf(d))if("true"===f)f=d;else if("false"===f)continue;"on"===d.slice(0,2)?l[u]=f:c?"xlink:href"===u?l.setAttributeNS(o,u,f):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,f):l.setAttribute(u,f)}return R(l,s),l}var t="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",r=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,n){function t(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":g(e))?e:o("",e)}n||(n={});var o=n.concat||function(e,n){return String(e)+String(n)};return!1!==n.attrToProp&&(e=m(e)),function(r){function i(e){var t=[];a===C&&(a=w);for(var o=0;o<e.length;o++){var r=e.charAt(o);a===_&&"<"===r?(s.length&&t.push([_,s]),s="",a=y):">"!==r||function(e){return e===O||e===j}(a)||a===A?a===A&&/-$/.test(s)&&"-"===r?(n.comments&&t.push([E,s.substr(0,s.length-1)],[b]),s="",a=_):a===y&&/^!--$/.test(s)?(n.comments&&t.push([y,s],[x,"comment"],[T]),s=r,a=A):a===_||a===A?s+=r:a===y&&/\s/.test(r)?(t.push([y,s]),s="",a=w):a===y?s+=r:a===w&&/[^\s"'=/]/.test(r)?(a=x,s=r):a===w&&/\s/.test(r)?(s.length&&t.push([x,s]),t.push([S])):a===x&&/\s/.test(r)?(t.push([x,s]),s="",a=k):a===x&&"="===r?(t.push([x,s],[T]),s="",a=C):a===x?s+=r:a!==k&&a!==w||"="!==r?a!==k&&a!==w||/\s/.test(r)?a===C&&'"'===r?a=j:a===C&&"'"===r?a=O:a===j&&'"'===r?(t.push([E,s],[S]),s="",a=w):a===O&&"'"===r?(t.push([E,s],[S]),s="",a=w):a!==C||/\s/.test(r)?a===E&&/\s/.test(r)?(t.push([E,s],[S]),s="",a=w):a!==E&&a!==O&&a!==j||(s+=r):(a=E,o--):(t.push([S]),/[\w-]/.test(r)?(s+=r,a=x):a=w):(t.push([T]),a=C):(a===y?t.push([y,s]):a===x?t.push([x,s]):a===E&&s.length&&t.push([E,s]),t.push([b]),s="",a=_)}return a===_&&s.length?(t.push([_,s]),s=""):a===E&&s.length?(t.push([E,s]),s=""):a===j&&s.length?(t.push([E,s]),s=""):a===O&&s.length?(t.push([E,s]),s=""):a===x&&(t.push([x,s]),s=""),t}for(var a=_,s="",l=arguments.length,c=[],u=0;u<r.length;u++)if(u<l-1){var d=arguments[u+1],f=i(r[u]),p=a;p===j&&(p=E),p===O&&(p=E),p===C&&(p=E),p===w&&(p=x),f.push([0,p,d]),c.push.apply(c,f)}else c.push.apply(c,i(r[u]));for(var h=[null,{},[]],m=[[h,-1]],u=0;u<c.length;u++){var v=m[m.length-1][0],P=(f=c[u])[0];if(P===y&&/^\//.test(f[1]))M=m[m.length-1][1],m.length>1&&(m.pop(),m[m.length-1][0][2][M]=e(v[0],v[1],v[2].length?v[2]:void 0));else if(P===y){var L=[f[1],{},[]];v[2].push(L),m.push([L,v[2].length-1])}else if(P===x||0===P&&f[1]===x){for(var D,F="";u<c.length;u++)if(c[u][0]===x)F=o(F,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==x)break;if("object"!==g(c[u][2])||F)F=o(F,c[u][2]);else for(D in c[u][2])c[u][2].hasOwnProperty(D)&&!v[1][D]&&(v[1][D]=c[u][2][D])}c[u][0]===T&&u++;for(var I=u;u<c.length;u++)if(c[u][0]===E||c[u][0]===x)v[1][F]?""===c[u][1]||(v[1][F]=o(v[1][F],c[u][1])):v[1][F]=t(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==E&&c[u][1]!==x){!F.length||v[1][F]||u!==I||c[u][0]!==b&&c[u][0]!==S||(v[1][F]=F.toLowerCase()),c[u][0]===b&&u--;break}v[1][F]?""===c[u][2]||(v[1][F]=o(v[1][F],c[u][2])):v[1][F]=t(c[u][2])}}else if(P===x)v[1][f[1]]=!0;else if(0===P&&f[1]===x)v[1][f[2]]=!0;else if(P===b){if(function(e){return N.test(e)}(v[0])&&m.length){var M=m[m.length-1][1];m.pop(),m[m.length-1][0][2][M]=e(v[0],v[1],v[2].length?v[2]:void 0)}}else if(0===P&&f[1]===_)void 0===f[2]||null===f[2]?f[2]="":f[2]||(f[2]=o("",f[2])),Array.isArray(f[2][0])?v[2].push.apply(v[2],f[2]):v[2].push(f[2]);else if(P===_)v[2].push(f[1]);else if(P!==T&&P!==S)throw new Error("unhandled: "+P)}if(h[2].length>1&&/^\s*$/.test(h[2][0])&&h[2].shift(),h[2].length>2||2===h[2].length&&/\S/.test(h[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(h[2][0])&&"string"==typeof h[2][0][0]&&Array.isArray(h[2][0][2])&&(h[2][0]=e(h[2][0][0],h[2][0][1],h[2][0][2])),h[2][0]}}(n,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=n}),G=function(e){return"undefined"!=typeof window?function(){var n=document.createElement("div");return n.innerHTML=e,function(e){return Array.isArray(e)?e:[].slice.call(e)}(n.childNodes)}():function(){var n=new String(e);return n.__encoded=!0,n}()},U=n(['<div class="m-dropdown__select-wrap" tabindex="0">\n    <select class="m-dropdown__select">\n      ','\n    </select>\n    <div class="m-dropdown__select-icon">',"</div>\n  </div>"],['<div class="m-dropdown__select-wrap" tabindex="0">\n    <select class="m-dropdown__select">\n      ','\n    </select>\n    <div class="m-dropdown__select-icon">',"</div>\n  </div>"]),V=n(['\n        <option data-url="','">',"</option>\n      "],['\n        <option data-url="','">',"</option>\n      "]),$=n(['<button type="button" class="m-dropdown__toggle js-dropdown__toggle">\n    ',"","\n  </button>"],['<button type="button" class="m-dropdown__toggle js-dropdown__toggle">\n    ',"","\n  </button>"]),K=n(['<ul class="m-dropdown__content">\n    ',"\n  </ul>"],['<ul class="m-dropdown__content">\n    ',"\n  </ul>"]),W=n(['\n      <li class="m-dropdown__item">\n        <a class="m-dropdown__link" href="','">',"</a>\n      </li>\n    "],['\n      <li class="m-dropdown__item">\n        <a class="m-dropdown__link" href="','">',"</a>\n      </li>\n    "]),B='<axa-icon id="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>',H=function(e){var n=e.native,t=function(e,n){var t={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(e,["native"]);return n?function(e){var n=e.items;return q(U,n&&n.map(function(e){var n=e.name,t=e.url;return q(V,t,n)}),G(B))}(t):function(e){var n=e.title,t=e.items;return[q($,n,G(B)),q(K,t&&t.map(function(e){var n=e.name,t=e.url;return q(W,t,n)}))]}(t)},J=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,Y=function(){function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,o=void 0!==t&&t,r=n.cancelable,i=void 0!==r&&r,a=n.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),Z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Q=/^\s+|\s{2,}|\s+$/g,X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee=/\s+/,ne={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),o=t.length,r=void 0,i=0;i<o;++i)if(r=t[i],void 0!==e[r])return n[r];return null}()},te=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),oe={};a(document,"pubsub/onsubscribe",function(e){var n=e.detail;oe[n]||(oe[n]={count:0});var o=oe[n],r=o.queue;Array.isArray(r)&&(r.forEach(function(e){var n=te(e,3),o=n[0],r=n[1];t(n[2],o,r)}),delete o.queue)});var re=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();Object.setPrototypeOf(d.prototype,HTMLElement.prototype),Object.setPrototypeOf(d,HTMLElement);var ie={},ae=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];l(this,n);var o=c(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,t),o}return u(n,d),re(n,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},t=e.attributes,o=t.length,r=0;r<o;++r){var i=t[r];n[i.name]=function(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;if(n?t=e.getAttribute(n):n=e.name,t&&n!==t){if(J.test(t))try{t=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else t=!0;return t}(i)}return n}(this),t);if(Array.isArray(o))o.forEach(function(n){e.appendChild(n)});else if(o){if("string"==typeof o){var r=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(o)}this._hasRendered=!0}catch(r){"throwed"!==r.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;oe[e]||(oe[e]={count:0,queue:[]});var r=oe[e].queue;Array.isArray(r)?r.push([e,n,o]):t(o,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,n)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=function(e,n){var o=a(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,n);oe[e]||(oe[e]={count:0});var r=oe[e];return r.count++,r.onsubscribe||(r.onsubscribe=function(e){function n(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return p=o,_&&(h&&clearTimeout(h),h=setTimeout(function(){m&&clearTimeout(m),t()},r)),y&&!m&&(m=setTimeout(function(){h&&clearTimeout(h),t()},f)),l&&!g&&(g=!0,v=e.apply(void 0,s(p))),v}function t(){u&&(v=e.apply(void 0,s(p))),h=null,m=null,g=!1}function o(){h&&(clearTimeout(h),h=null),m&&(clearTimeout(m),m=null),p=void 0,g=!1}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.leading,l=void 0!==a&&a,c=i.trailing,u=void 0===c||c,d=i.maxWait,f=void 0!==d&&d,p=void 0,h=void 0,m=void 0,v=void 0,g=!1,_=r!==f,y=!1!==f;return n.flush=function(){return(h||m)&&(v=e.apply(void 0,s(p))),o(),v},n.cancel=o,n}(function(e){return function(){t(document,"pubsub/onsubscribe",e),t(document,"pubsub/onsubscribe/"+e,e),oe[e]&&delete oe[e].unsubscribe}}(e),100)),r.onsubscribe(),function(){r.count--,o.call(this),r.count<=0&&delete oe[e]}}("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),n}(),se=(function(e){function n(){return l(this,n),c(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}u(n,ae),re(n,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:e});this._appendStyles(n),this.render()}}])}(),function(e){function n(){return l(this,n),c(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,ae),re(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ae.uuidv4();if(e&&!ie[e]){var t=document.createElement("style"),o=document.createTextNode(e);t.appendChild(o),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),ie[e]=!0}}}]),n}()),le=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ce=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),ue=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];for(var o=n.length,r={},i=0;i<o;++i){var a=n[i];r[a.toUpperCase()]=a}return r}("click","keyup","enter","move","leave","Escape","Esc"),de=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._rootNode=n,this._options=le({},e.DEFAULTS,t),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return ce(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._rootNode.querySelector(e):this._rootNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=a(this._container,ue.CLICK,this._options.toggleClass,this._handleClick)}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=a(this._container,ue.CLICK,this._options.closeClass,this._handleClose)),this._options.outerClose&&(this._unOuterClick=function(e,n,t){function o(){s.removeEventListener(n,r,a),i(this,o)}function r(n){var o=n.target;if(!e.contains(o)&&e!==o)return t(n)}var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=e.ownerDocument.documentElement;return s.addEventListener(n,r,a),o}(this._container,ue.CLICK,this._handleClose)),this._options.escapeClose&&(this._unCloseEscape=a(this._container.ownerDocument,ue.KEYUP,this._handleKeyUp))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,n){this._options.useDefaultEvent||e.preventDefault();var t=!this._lastToggleNode,o=n!==this._lastToggleNode,r=!t&&!o;t?(this._notify(ue.ENTER,n),this._onInteractive()):o&&this._notify(ue.MOVE,n,this._lastToggleNode),this._lastToggleNode=n,r&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e){this._options.useDefaultEvent||e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===ue.ESCAPE||e.key===ue.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ue.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,n,t){e in this&&"function"==typeof this[e]&&this[e](n,t)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,n){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._rootNode,delete this._options}}]),e}();de.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var fe=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),n=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+n+")","i"))[1],lowercase:n,css:"-"+n+"-",js:n[0].toUpperCase()+n.slice(1)}}().lowercase,pe=function(){var e=window.requestAnimationFrame||window[fe+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var n=0;e=function(e){var t=Date.now(),o=Math.max(0,16-(t-n)),r=setTimeout(function(){e(t+o)},o);return n=t+o,r}}return e}(),he=(function(){var e=window.cancelAnimationFrame||window[fe+"CancelAnimationFrame"]||window[fe+"CancelRequestAnimationFrame"];e=e?e.bind(window):function(e){clearTimeout(e)}}(),Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}),me=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),ve=function(e){function n(e,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t=he({},n.DEFAULTS,t);var o=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return o.options=t,o.rootNode=e,o.handleTransitionEnd=o.handleTransitionEnd.bind(o),o}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,de),me(n,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=a(this.rootNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var n=e.parentNode,t=n.lastElementChild;t.style.overflow="scroll";var o=t.scrollHeight;t.style.overflow="",this.onInteractive(),t.style.height=o+"px",function(e,n){r(e,n)||(e.className+=" "+n)}(n,this.options.isOpenClass)}},{key:"leave",value:function(e){var n=this,t=e.parentNode,i=t.lastElementChild,a=i.scrollHeight;this.offInteractive(),pe(function(){i.style.height=a+"px",pe(function(){!function(e,n){if(r(e,n)){var t=o(n,"g");e.className=e.className.replace(t," ").replace(Q," ")}}(t,n.options.isOpenClass),i.style.height=0})})}},{key:"handleTransitionEnd",value:function(e){"height"===e.propertyName&&(e.target.style.height="",this.offInteractive())}},{key:"destroy",value:function(){(function e(n,t,o){null===n&&(n=Function.prototype);var r=Object.getOwnPropertyDescriptor(n,t);if(void 0===r){var i=Object.getPrototypeOf(n);return null===i?void 0:e(i,t,o)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(o)})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"destroy",this).call(this),delete this.rootNode,delete this.options}}]),n}();ve.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open"};var ge=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),_e=function e(n,t,o){null===n&&(n=Function.prototype);var r=Object.getOwnPropertyDescriptor(n,t);if(void 0===r){var i=Object.getPrototypeOf(n);return null===i?void 0:e(i,t,o)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(o)},ye=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,h,H))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,se),ge(n,[{key:"connectedCallback",value:function(){_e(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.dropDown=new ve(this,{containerClass:null})}},{key:"disconnectedCallback",value:function(){this.dropDown.destroy(),delete this.dropDown}},{key:"render",value:function(){_e(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"render",this).call(this);var e=this.hasAttribute("in-flow");this.className=p(this.initialClassName,"m-dropdown js-dropdown",{"m-dropdown--in-flow":e})}}]),n}();return function(e){var n=0,t=function(){if(0===n)try{e.apply(void 0,arguments),n+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",t,!1),document.addEventListener("WebComponentsReady",t,!1)}(function(){window.customElements.define("axa-dropdown",ye),se.appendGlobalStyles(h)}),ye}();
