/**
 * apng-canvas v2.0.1
 * @copyright 2011, 2015 David Mzareulyan
 * @link https://github.com/davidmz/apng-canvas
 * @license MIT
 */
!function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){var n=e[a][1][t];return i(n?n:t)},c,c.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e){(function(t,n){(function(){"use strict";function r(t){return"function"==typeof t||"object"==typeof t&&null!==t}function i(t){return"function"==typeof t}function o(t){return"object"==typeof t&&null!==t}function a(){}function s(){return function(){t.nextTick(h)}}function u(){var t=0,e=new M(h),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function c(){var t=new MessageChannel;return t.port1.onmessage=h,function(){t.port2.postMessage(0)}}function f(){return function(){setTimeout(h,1)}}function h(){for(var t=0;L>t;t+=2){var e=q[t],n=q[t+1];e(n),q[t]=void 0,q[t+1]=void 0}L=0}function l(){}function d(){return new TypeError("You cannot resolve a promise with itself")}function p(){return new TypeError("A promises callback cannot return that same promise.")}function m(t){try{return t.then}catch(e){return J.error=e,J}}function A(t,e,n,r){try{t.call(e,n,r)}catch(i){return i}}function w(t,e,n){F(function(t){var r=!1,i=A(n,e,function(n){r||(r=!0,e!==n?y(t,n):b(t,n))},function(e){r||(r=!0,E(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&i&&(r=!0,E(t,i))},t)}function g(t,e){e._state===V?b(t,e._result):t._state===H?E(t,e._result):P(e,void 0,function(e){y(t,e)},function(e){E(t,e)})}function v(t,e){if(e.constructor===t.constructor)g(t,e);else{var n=m(e);n===J?E(t,J.error):void 0===n?b(t,e):i(n)?w(t,e,n):b(t,e)}}function y(t,e){t===e?E(t,d()):r(e)?v(t,e):b(t,e)}function _(t){t._onerror&&t._onerror(t._result),x(t)}function b(t,e){t._state===Y&&(t._result=e,t._state=V,0===t._subscribers.length||F(x,t))}function E(t,e){t._state===Y&&(t._state=H,t._result=e,F(_,t))}function P(t,e,n,r){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+V]=n,i[o+H]=r,0===o&&t._state&&F(x,t)}function x(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,i,o=t._result,a=0;a<e.length;a+=3)r=e[a],i=e[a+n],r?C(n,r,i,o):i(o);t._subscribers.length=0}}function N(){this.error=null}function T(t,e){try{return t(e)}catch(n){return Q.error=n,Q}}function C(t,e,n,r){var o,a,s,u,c=i(n);if(c){if(o=T(n,r),o===Q?(u=!0,a=o.error,o=null):s=!0,e===o)return void E(e,p())}else o=r,s=!0;e._state!==Y||(c&&s?y(e,o):u?E(e,a):t===V?b(e,o):t===H&&E(e,o))}function R(t,e){try{e(function(e){y(t,e)},function(e){E(t,e)})}catch(n){E(t,n)}}function I(t,e,n,r){this._instanceConstructor=t,this.promise=new t(l,r),this._abortOnReject=n,this._validateInput(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._init(),0===this.length?b(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&b(this.promise,this._result))):E(this.promise,this._validationError())}function U(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function j(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function k(t){this._id=X++,this._state=void 0,this._result=void 0,this._subscribers=[],l!==t&&(i(t)||U(),this instanceof k||j(),R(this,t))}var B;B=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var D,O=B,L=(Date.now||function(){return(new Date).getTime()},Object.create||function(t){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof t)throw new TypeError("Argument must be an object");return a.prototype=t,new a},0),F=function(t,e){q[L]=t,q[L+1]=e,L+=2,2===L&&D()},G="undefined"!=typeof window?window:{},M=G.MutationObserver||G.WebKitMutationObserver,S="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,q=new Array(1e3);D="undefined"!=typeof t&&"[object process]"==={}.toString.call(t)?s():M?u():S?c():f();var Y=void 0,V=1,H=2,J=new N,Q=new N;I.prototype._validateInput=function(t){return O(t)},I.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},I.prototype._init=function(){this._result=new Array(this.length)};var Z=I;I.prototype._enumerate=function(){for(var t=this.length,e=this.promise,n=this._input,r=0;e._state===Y&&t>r;r++)this._eachEntry(n[r],r)},I.prototype._eachEntry=function(t,e){var n=this._instanceConstructor;o(t)?t.constructor===n&&t._state!==Y?(t._onerror=null,this._settledAt(t._state,e,t._result)):this._willSettleAt(n.resolve(t),e):(this._remaining--,this._result[e]=this._makeResult(V,e,t))},I.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===Y&&(this._remaining--,this._abortOnReject&&t===H?E(r,n):this._result[e]=this._makeResult(t,e,n)),0===this._remaining&&b(r,this._result)},I.prototype._makeResult=function(t,e,n){return n},I.prototype._willSettleAt=function(t,e){var n=this;P(t,void 0,function(t){n._settledAt(V,e,t)},function(t){n._settledAt(H,e,t)})};var K=function(t,e){return new Z(this,t,!0,e).promise},W=function(t,e){function n(t){y(o,t)}function r(t){E(o,t)}var i=this,o=new i(l,e);if(!O(t))return E(o,new TypeError("You must pass an array to race.")),o;for(var a=t.length,s=0;o._state===Y&&a>s;s++)P(i.resolve(t[s]),void 0,n,r);return o},$=function(t,e){var n=this;if(t&&"object"==typeof t&&t.constructor===n)return t;var r=new n(l,e);return y(r,t),r},z=function(t,e){var n=this,r=new n(l,e);return E(r,t),r},X=0,te=k;k.all=K,k.race=W,k.resolve=$,k.reject=z,k.prototype={constructor:k,then:function(t,e){var n=this,r=n._state;if(r===V&&!t||r===H&&!e)return this;var i=new this.constructor(l),o=n._result;if(r){var a=arguments[r-1];F(function(){C(r,i,a,o)})}else P(n,i,t,e);return i},"catch":function(t){return this.then(null,t)}};var ee=function(){var t;t="undefined"!=typeof n?n:"undefined"!=typeof window&&window.document?window:self;var e="Promise"in t&&"resolve"in t.Promise&&"reject"in t.Promise&&"all"in t.Promise&&"race"in t.Promise&&function(){var e;return new t.Promise(function(t){e=t}),i(e)}();e||(t.Promise=te)},ne={Promise:te,polyfill:ee};"function"==typeof define&&define.amd?define(function(){return ne}):"undefined"!=typeof e&&e.exports?e.exports=ne:"undefined"!=typeof this&&(this.ES6Promise=ne)}).call(this)}).call(this,t("VCmEsw"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{VCmEsw:2}],2:[function(t,e){function n(){}var r=e.exports={};r.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var n=[];return window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=n,r.addListener=n,r.once=n,r.off=n,r.removeListener=n,r.removeAllListeners=n,r.emit=n,r.binding=function(){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(){throw new Error("process.chdir is not supported")}},{}],3:[function(t,e){"use strict";var n=function(){this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[],this.play=function(){i||o||(this.rewind(),i=!0,requestAnimationFrame(s))},this.rewind=function(){e=0,n=0,r=null,i=!1,o=!1},this.addContext=function(t){if(a.length>0){var e=a[0].getImageData(0,0,this.width,this.height);t.putImageData(e,0,0)}a.push(t),t._apng_animation=this},this.removeContext=function(t){var e=a.indexOf(t);-1!==e&&(a.splice(e,1),0===a.length&&this.rewind(),"_apng_animation"in t&&delete t._apng_animation)},this.isPlayed=function(){return i},this.isFinished=function(){return o};var t=this,e=0,n=0,r=null,i=!1,o=!1,a=[],s=function(t){for(;i&&t>=e;)u(t);i&&requestAnimationFrame(s)},u=function(s){var u=n++%t.frames.length,c=t.frames[u];if(0==u&&(a.forEach(function(e){e.clearRect(0,0,t.width,t.height)}),r=null,2==c.disposeOp&&(c.disposeOp=1)),r&&1==r.disposeOp?a.forEach(function(t){t.clearRect(r.left,r.top,r.width,r.height)}):r&&2==r.disposeOp&&a.forEach(function(t){t.putImageData(r.iData,r.left,r.top)}),r=c,r.iData=null,2==r.disposeOp&&(r.iData=a[0].getImageData(c.left,c.top,c.width,c.height)),0==c.blendOp&&a.forEach(function(t){t.clearRect(c.left,c.top,c.width,c.height)}),a.forEach(function(t){t.drawImage(c.img,c.left,c.top)}),0==t.numPlays||n/t.frames.length<t.numPlays){for(0==e&&(e=s);s>e+t.playTime;)e+=t.playTime;e+=c.delay}else i=!1,o=!1}};e.exports=n},{}],4:[function(t,e){"use strict";for(var n=new Uint32Array(256),r=0;256>r;r++){for(var i=r,o=0;8>o;o++)i=1&i?3988292384^i>>>1:i>>>1;n[r]=i}e.exports=function(t,e,r){e=e||0,r=r||t.length-e;for(var i=-1,o=e,a=e+r;a>o;o++)i=i>>>8^n[255&(i^t[o])];return-1^i}},{}],5:[function(t){(function(e){"use strict";var n=n||t("es6-promise").Promise,r=t("./support-test"),i=t("./parser"),o=t("./loader"),a=e.APNG={};a.checkNativeFeatures=r.checkNativeFeatures,a.ifNeeded=r.ifNeeded,a.parseBuffer=function(t){return i(new Uint8Array(t))};var s={};a.parseURL=function(t){return t in s||(s[t]=o(t).then(i)),s[t]},a.animateContext=function(t,e){return a.parseURL(t).then(function(t){return t.addContext(e),t.play(),t})},a.animateImage=function(t){return t.setAttribute("data-is-apng","progress"),a.parseURL(t.src).then(function(e){t.setAttribute("data-is-apng","yes");var n=document.createElement("canvas");n.width=e.width,n.height=e.height,Array.prototype.slice.call(t.attributes).forEach(function(t){-1==["alt","src","usemap","ismap","data-is-apng","width","height"].indexOf(t.nodeName)&&n.setAttributeNode(t.cloneNode())}),n.setAttribute("data-apng-src",t.src),""!=t.alt&&n.appendChild(document.createTextNode(t.alt));var r="",i="",o=0,a="";""!=t.style.width&&"auto"!=t.style.width?r=t.style.width:t.hasAttribute("width")&&(r=t.getAttribute("width")+"px"),""!=t.style.height&&"auto"!=t.style.height?i=t.style.height:t.hasAttribute("height")&&(i=t.getAttribute("height")+"px"),""!=r&&""==i&&(o=parseFloat(r),a=r.match(/\D+$/)[0],i=Math.round(n.height*o/n.width)+a),""!=i&&""==r&&(o=parseFloat(i),a=i.match(/\D+$/)[0],r=Math.round(n.width*o/n.height)+a),n.style.width=r,n.style.height=i;var s=t.parentNode;s.insertBefore(n,t),s.removeChild(t),e.addContext(n.getContext("2d")),e.play()},function(){t.setAttribute("data-is-apng","no")})},a.releaseCanvas=function(t){var e=t.getContext("2d");"_apng_animation"in e&&e._apng_animation.removeContext(e)}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./loader":6,"./parser":7,"./support-test":8,"es6-promise":1}],6:[function(t,e){"use strict";var n=n||t("es6-promise").Promise;e.exports=function(t){return new n(function(e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="arraybuffer",r.onload=function(){200==this.status?e(this.response):n(this)},r.send()})}},{"es6-promise":1}],7:[function(t,e){"use strict";var n=n||t("es6-promise").Promise,r=t("./animation"),i=t("./crc32"),o=new Uint8Array([137,80,78,71,13,10,26,10]);e.exports=function(t){var e=new Uint8Array(t);return new n(function(t,n){for(var i=(performance.now(),0);i<o.length;i++)if(o[i]!=e[i])return void n("Not a PNG file (invalid file signature)");var h=!1;if(a(e,function(t){return"acTL"==t?(h=!0,!1):!0}),!h)return void n("Not an animated PNG");var d=[],m=[],A=null,w=null,g=new r;if(a(e,function(t,e,n,r){switch(t){case"IHDR":A=e.subarray(n+8,n+8+r),g.width=s(e,n+8),g.height=s(e,n+12);break;case"acTL":g.numPlays=s(e,n+8+4);break;case"fcTL":w&&g.frames.push(w),w={},w.width=s(e,n+8+4),w.height=s(e,n+8+8),w.left=s(e,n+8+12),w.top=s(e,n+8+16);var i=u(e,n+8+20),o=u(e,n+8+22);0==o&&(o=100),w.delay=1e3*i/o,w.delay<=10&&(w.delay=100),g.playTime+=w.delay,w.disposeOp=c(e,n+8+24),w.blendOp=c(e,n+8+25),w.dataParts=[];break;case"fdAT":w&&w.dataParts.push(e.subarray(n+8+4,n+8+r));break;case"IDAT":w&&w.dataParts.push(e.subarray(n+8,n+8+r));break;case"IEND":m.push(f(e,n,12+r));break;default:d.push(f(e,n,12+r))}}),w&&g.frames.push(w),0==g.frames.length)return void n("Not an animated PNG");for(var v=0,y=new Blob(d),_=new Blob(m),b=0;b<g.frames.length;b++){w=g.frames[b];var E=[];E.push(o),A.set(l(w.width),0),A.set(l(w.height),4),E.push(p("IHDR",A)),E.push(y);for(var P=0;P<w.dataParts.length;P++)E.push(p("IDAT",w.dataParts[P]));E.push(_);var x=URL.createObjectURL(new Blob(E,{type:"image/png"}));delete w.dataParts,E=null,w.img=document.createElement("img"),w.img.onload=function(){URL.revokeObjectURL(this.src),v++,v==g.frames.length&&t(g)},w.img.onerror=function(){n("Image creation error")},w.img.src=x}})};var a=function(t,e){var n=8;do{var r=s(t,n),i=h(t,n+4,4),o=e(i,t,n,r);n+=12+r}while(o!==!1&&"IEND"!=i&&n<t.length)},s=function(t,e){var n=0;n+=t[0+e]<<24>>>0;for(var r=1;4>r;r++)n+=t[r+e]<<8*(3-r);return n},u=function(t,e){for(var n=0,r=0;2>r;r++)n+=t[r+e]<<8*(1-r);return n},c=function(t,e){return t[e]},f=function(t,e,n){var r=new Uint8Array(n);return r.set(t.subarray(e,e+n)),r},h=function(t,e,n){var r=Array.prototype.slice.call(t.subarray(e,e+n));return String.fromCharCode.apply(String,r)},l=function(t){return[t>>>24&255,t>>>16&255,t>>>8&255,255&t]},d=function(t){for(var e=[],n=0;n<t.length;n++)e.push(t.charCodeAt(n));return e},p=function(t,e){var n=t.length+e.length,r=new Uint8Array(new ArrayBuffer(n+8));r.set(l(e.length),0),r.set(d(t),4),r.set(e,8);var o=i(r,4,n);return r.set(l(o),n+4),r}},{"./animation":3,"./crc32":4,"es6-promise":1}],8:[function(t,e){(function(n){"use strict";var r=r||t("es6-promise").Promise,i=function(t){var e=null;return function(n){return e||(e=new r(t)),n&&e.then(n),e}},o=i(function(t){var e=document.createElement("canvas"),r={TypedArrays:"ArrayBuffer"in n,BlobURLs:"URL"in n,requestAnimationFrame:"requestAnimationFrame"in n,pageProtocol:"http:"==location.protocol&&"https:"==location.protocol,canvas:"getContext"in document.createElement("canvas"),APNG:!1};if(r.canvas){var i=new Image;i.onload=function(){var n=e.getContext("2d");n.drawImage(i,0,0),r.APNG=0===n.getImageData(0,0,1,1).data[3],t(r)},i.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}else t(r)}),a=function(t){return"undefined"==typeof t&&(t=!1),o().then(function(e){if(e.APNG&&!t)reject();else{var n=!0;for(var r in e)e.hasOwnProperty(r)&&"APNG"!=r&&(n=n&&e[r])}})};e.exports={checkNativeFeatures:o,ifNeeded:a}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"es6-promise":1}]},{},[5]);
