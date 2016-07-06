/*!
 * @preserve
 * jquery.scrolldepth.js | v0.9
 * Copyright (c) 2015 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
!function(e,n,t){"use strict";var r,o,i,l,a={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1},c=e(n),u=[],p=!1,s=0;e.scrollDepth=function(h){function g(e,t,a,c){l?(l({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:t,eventValue:1,eventNonInteraction:h.nonInteraction}),h.pixelDepth&&arguments.length>2&&a>s&&(s=a,l({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:D(a),eventValue:1,eventNonInteraction:h.nonInteraction})),h.userTiming&&arguments.length>3&&l({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:e,eventLabel:t,eventTiming:c})):(r&&(n[i]("send","event","Scroll Depth",e,t,1,{nonInteraction:h.nonInteraction}),h.pixelDepth&&arguments.length>2&&a>s&&(s=a,n[i]("send","event","Scroll Depth","Pixel Depth",D(a),1,{nonInteraction:h.nonInteraction})),h.userTiming&&arguments.length>3&&n[i]("send","timing","Scroll Depth",e,c,t)),o&&(_gaq.push(["_trackEvent","Scroll Depth",e,t,1,h.nonInteraction]),h.pixelDepth&&arguments.length>2&&a>s&&(s=a,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",D(a),1,h.nonInteraction])),h.userTiming&&arguments.length>3&&_gaq.push(["_trackTiming","Scroll Depth",e,c,t,100])))}function f(e){return{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}}function v(n,t,r){e.each(n,function(n,o){-1===e.inArray(n,u)&&t>=o&&(g("Percentage",n,t,r),u.push(n))})}function m(n,t,r){e.each(n,function(n,o){-1===e.inArray(o,u)&&e(o).length&&t>=e(o).offset().top&&(g("Elements",o,t,r),u.push(o))})}function D(e){return(250*Math.floor(e/250)).toString()}function d(){I()}function y(e,n){var t,r,o,i=null,l=0,a=function(){l=new Date,i=null,o=e.apply(t,r)};return function(){var c=new Date;l||(l=c);var u=n-(c-l);return t=this,r=arguments,0>=u?(clearTimeout(i),i=null,l=c,o=e.apply(t,r)):i||(i=setTimeout(a,u)),o}}function I(){p=!0,c.on("scroll.scrollDepth",y(function(){var r=e(t).height(),o=n.innerHeight?n.innerHeight:c.height(),i=c.scrollTop()+o,l=f(r),a=+new Date-S;return u.length>=h.elements.length+(h.percentage?4:0)?(c.off("scroll.scrollDepth"),void(p=!1)):(h.elements&&m(h.elements,i,a),void(h.percentage&&v(l,i,a)))},500))}var S=+new Date;h=e.extend({},a,h),e(t).height()<h.minHeight||(h.gaGlobal?(r=!0,i=h.gaGlobal):"function"==typeof ga?(r=!0,i="ga"):"function"==typeof __gaTracker&&(r=!0,i="__gaTracker"),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(o=!0),"function"==typeof h.eventHandler?l=h.eventHandler:"undefined"==typeof dataLayer||"function"!=typeof dataLayer.push||h.gtmOverride||(l=function(e){dataLayer.push(e)}),e.scrollDepth.reset=function(){u=[],s=0,c.off("scroll.scrollDepth"),I()},e.scrollDepth.addElements=function(n){"undefined"!=typeof n&&e.isArray(n)&&(e.merge(h.elements,n),p||I())},e.scrollDepth.removeElements=function(n){"undefined"!=typeof n&&e.isArray(n)&&e.each(n,function(n,t){var r=e.inArray(t,h.elements),o=e.inArray(t,u);-1!=r&&h.elements.splice(r,1),-1!=o&&u.splice(o,1)})},d())}}(jQuery,window,document);
/*!
 * @preserve
 * riveted.js | v0.6.0
 * Copyright (c) 2015 Rob Flaherty (@robflaherty)
 * Licensed under the MIT license
 */
var riveted=function(){function e(e){e=e||{},g=parseInt(e.reportInterval,10)||5,p=parseInt(e.idleTimeout,10)||30,k=e.gaGlobal||"ga","function"==typeof window[k]&&(y=!0),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(w=!0),"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push&&(h=!0),I="gaTracker"in e&&"string"==typeof e.gaTracker?e.gaTracker+".send":"send","function"==typeof e.eventHandler&&(s=e.eventHandler),"function"==typeof e.userTimingHandler&&(m=e.userTimingHandler),T="nonInteraction"in e&&(e.nonInteraction===!1||"false"===e.nonInteraction)?!1:!0,t(document,"keydown",f),t(document,"click",f),t(window,"mousemove",n(f,500)),t(window,"scroll",n(f,500)),t(document,"visibilitychange",a),t(document,"webkitvisibilitychange",a)}function n(e,n){var t,i,a,o=null,r=0,u=function(){r=new Date,o=null,a=e.apply(t,i)};return function(){var c=new Date;r||(r=c);var d=n-(c-r);return t=this,i=arguments,0>=d?(clearTimeout(o),o=null,r=c,a=e.apply(t,i)):o||(o=setTimeout(u,d)),a}}function t(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent?e.attachEvent("on"+n,t):e["on"+n]=t}function i(){clearTimeout(H),r()}function a(){(document.hidden||document.webkitHidden)&&i()}function o(){_+=1,_>0&&_%g===0&&s(_)}function r(){L=!0,clearTimeout(E)}function u(){i(),b=!0}function c(){b=!1}function d(){L=!1,clearTimeout(E),E=setInterval(o,1e3)}function l(){var e=new Date,n=e-D;R=!0,m(n),E=setInterval(o,1e3)}function v(){D=new Date,_=0,R=!1,L=!1,clearTimeout(E),clearTimeout(H)}function f(){b||(R||l(),L&&d(),clearTimeout(H),H=setTimeout(i,1e3*p+100))}var s,m,g,p,T,y,w,I,h,k,R=!1,L=!1,b=!1,_=0,D=new Date,E=null,H=null;return m=function(e){h?dataLayer.push({event:"RivetedTiming",eventCategory:"Riveted",timingVar:"First Interaction",timingValue:e}):(y&&window[k](I,"timing","Riveted","First Interaction",e),w&&_gaq.push(["_trackTiming","Riveted","First Interaction",e,null,100]))},s=function(e){h?dataLayer.push({event:"Riveted",eventCategory:"Riveted",eventAction:"Time Spent",eventLabel:e,eventValue:g,eventNonInteraction:T}):(y&&window[k](I,"event","Riveted","Time Spent",e.toString(),g,{nonInteraction:T}),w&&_gaq.push(["_trackEvent","Riveted","Time Spent",e.toString(),g,T]))},{init:e,trigger:f,setIdle:i,on:c,off:u,reset:v}}();
