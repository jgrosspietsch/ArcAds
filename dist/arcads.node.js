!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var i in t)("object"==typeof exports?exports:e)[i]=t[i]}}(window,(function(){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);class i{static Android(){return!!navigator.userAgent.match(/Android/i)}static AndroidOld(){return!!navigator.userAgent.match(/Android 2.3.3/i)}static AndroidTablet(){return!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Mobile/i))}static Kindle(){return!!navigator.userAgent.match(/Kindle/i)}static KindleFire(){return!!navigator.userAgent.match(/KFOT/i)}static Silk(){return!!navigator.userAgent.match(/Silk/i)}static BlackBerry(){return!!navigator.userAgent.match(/BlackBerry/i)}static iOS(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)}static iPhone(){return!!navigator.userAgent.match(/iPhone|iPod/i)}static iPad(){return!!navigator.userAgent.match(/iPad/i)}static Windows(){return!!navigator.userAgent.match(/IEMobile/i)}static FirefoxOS(){return!!navigator.userAgent.match(/Mozilla/i)&&!!navigator.userAgent.match(/Mobile/i)}static Retina(){return window.retina||window.devicePixelRatio>1}static any(){return this.Android()||this.Kindle()||this.KindleFire()||this.Silk()||this.BlackBerry()||this.iOS()||this.Windows()||this.FirefoxOS()}}function r(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],function(e,n,t,i,r){const o=document.createElement(e);"script"===e&&(o.src=n,o.async=t||!1,o.defer=t||i||!1,(document.head||document.documentElement).appendChild(o),r&&r())}("script","//www.googletagservices.com/tag/js/gpt.js",!0,!0)}function o({ad:e,correlator:n=!1,prerender:t=null,info:i={}}){new Promise(e=>{if(t)try{t(i).then(()=>{e("Prerender function has completed.")})}catch(n){console.warn("ArcAds: Prerender function did not return a promise or there was an error.\n          Documentation: https://github.com/wapopartners/arc-ads/wiki/Utilizing-a-Prerender-Hook"),e("Prerender function did not return a promise or there was an error, ignoring.")}else e("No Prerender function was provided.")}).then(()=>{!function t(){window.blockArcAdsLoad||(window.googletag&&window.googletag.pubadsReady?window.googletag.pubads().refresh([e],{changeCorrelator:n}):setTimeout(()=>{t()},200))}()})}function a(e){window.googletag.cmd.push(e)}function d(e){window.googletag.pubads().disableInitialLoad(),window.googletag.pubads().enableSingleRequest(),window.googletag.pubads().enableAsyncRendering(),this.collapseEmptyDivs&&window.googletag.pubads().collapseEmptyDivs(),window.googletag.enableServices(),e&&window.googletag.pubads().addEventListener("slotRenderEnded",e)}function s(e,n){const t=function(e){const n=window.location.href,t=e.replace(/[[\]]/g,"\\$&"),i=new RegExp(`[?&]${t}(=([^&#]*)|&|#|$)`).exec(n);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null}("adslot");return!t||""===t&&null===t?`/${e}/${n}`:`/${e}/${t}`}function c(e){pbjs.que.push(e)}function l(e){window.apstag&&e()}function p({ad:e,id:n,slotName:t,dimensions:i,wrapper:r,bidding:a,correlator:d=!1,prerender:s,breakpoints:u}){const g={adUnit:e,adSlot:t,adDimensions:i,adId:n},b=new Promise(i=>{if(r.prebid&&r.prebid.enabled){const a=r.prebid.timeout||700;c.bind(this,function(e,n,t,i,r,a=null){pbjs.requestBids({timeout:t,adUnitCodes:[n],bidsBackHandler:()=>{pbjs.setTargetingForGPTAsync([n]),a?a():o({ad:e,info:i,prerender:r})}})}(e,r.prebid.useSlotForAdUnit?t:n,a,g,s,()=>{i("Fetched Prebid ads!")}))}else i("Prebid is not enabled on the wrapper...")}),f=new Promise(e=>{r.amazon&&r.amazon.enabled?function(e,n,t,i,r=null){let o=t;if(i&&void 0!==window.innerWidth&&void 0!==t[0][0][0]){const e=window.innerWidth;let n=-1;const r=i.length;for(let t=0;t<r;t+=1)if(e>=i[t][0]){n=t;break}o=t[n]}l(()=>{const t={slotName:n,slotID:e,sizes:o};window.apstag.fetchBids({slots:[t]},()=>{window.apstag.setDisplayBids(),r&&r()})})}(n,t,i,u,()=>{e("Fetched Amazon ads!")}):e("Amazon is not enabled on the wrapper...")});window.arcBiddingReady?Promise.all([b,f]).then(()=>{o({ad:e,correlator:d,prerender:s,info:g})}):setTimeout(()=>{p({ad:e,id:n,slotName:t,dimensions:i,wrapper:r,bidding:a,correlator:d,prerender:s})},200)}const u={},g={};function b(e){try{const n=[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight],t=e.filter(e=>e[0][0]<=n[0]&&e[0][1]<=n[1]);let i=t.length>0?t[0][1]:[];return i.length>0&&i[0].constructor!==Array&&(i=[i]),i}catch(n){return e[e.length-1][1]}}function f(e){const{id:n,correlators:t}=e;g[n]=function(e,n){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=null,e.apply(this,i)},n)}}(function(e){let n,t=!1;return()=>{const{ad:i,breakpoints:r,id:a,bidding:d,mapping:s,slotName:c,wrapper:l,prerender:g}=e,f=window.innerWidth;let w,h;for(let e=0;e<r.length;e+=1){if(w=r[e],h=r[e+1],f>w&&(f<h||!h)&&n!==w||f===w&&!t){n=w,t=!0;const f=b(s),h={adUnit:i,adSlot:c,adDimensions:f,adId:a};d.prebid&&d.prebid.enabled||d.amazon&&d.amazon.enabled?p({ad:i,id:a,slotName:c,dimensions:f,bidding:d,wrapper:l,prerender:g,correlator:u[a].correlators[e],breakpoints:r}):o({ad:i,correlator:u[a].correlators[e],prerender:g,info:h})}u[a].correlators[e]=!0}}}(e),250),window.addEventListener("resize",g[n]),u[n]={listener:g[n],correlators:t}}t.d(n,"ArcAds",(function(){return w}));class w{constructor(e,n=null){this.dfpId=e.dfp.id||"",this.wrapper=e.bidding||{},this.positions=[],this.collapseEmptyDivs=e.dfp.collapseEmptyDivs,window.isMobile=i,""===this.dfpId?console.warn("ArcAds: DFP id is missing from the arcads initialization script. \n        Documentation: https://github.com/wapopartners/arc-ads#getting-started"):(r(),a(d.bind(this,n)),function({prebid:e=!1,amazon:n=!1}){window.arcBiddingReady=!1;const t=new Promise(n=>{if(e&&e.enabled){if(!pbjs){const e={};e.que=e.que||[]}n("Prebid has been initialized")}else n("Prebid is not enabled on the wrapper...")}),i=new Promise(e=>{n&&n.enabled&&window.apstag?n.id&&""!==n.id?l(()=>{window.apstag.init({pubID:n.id,adServer:"googletag"}),e("Amazon scripts have been added onto the page!")}):(console.warn("ArcAds: Missing Amazon account id.\n          Documentation: https://github.com/wapopartners/arc-ads#amazon-tama9"),e("Amazon is not enabled on the wrapper...")):e("Amazon is not enabled on the wrapper...")});Promise.all([t,i]).then(()=>{window.arcBiddingReady=!0})}(this.wrapper))}registerAd(e){const{id:n,slotName:t,dimensions:i,adType:r=!1,targeting:o={},display:d="all",bidding:l=!1,iframeBidders:p=["openx"]}=e,u=[];let g=!1;i&&void 0!==i&&"number"==typeof i[0]?u.push(...i):i&&void 0!==i&&i.length>0&&void 0===i[0][0][0]?u.push(...i):i&&i.forEach(e=>{u.push(...e)});try{if(!(o&&Object.prototype.hasOwnProperty.call(o,"position")||!1===r)){const n=this.positions[r]+1||1;this.positions[r]=n;const t=Object.assign(o,{position:n});Object.assign(e,{targeting:t})}if(isMobile.any()&&"mobile"===d||!isMobile.any()&&"desktop"===d||"all"===d){if(l.prebid&&l.prebid.bids&&this.wrapper.prebid&&this.wrapper.prebid.enabled&&u){pbjs&&p.length>0&&pbjs.setConfig({userSync:{iframeEnabled:!0,filterSettings:{iframe:{bidders:p,filter:"include"}}}});const e=this.wrapper.prebid.useSlotForAdUnit?s(this.dfpId,t):n;c.bind(this,function(e,n,t,i={}){const r={code:e,bids:t};r.mediaTypes={banner:{sizes:n}};const{sizeConfig:o,config:a}=i;pbjs.addAdUnits(r),a?pbjs.setConfig(a):o&&pbjs.setConfig({sizeConfig:o})}(e,u,l.prebid.bids,this.wrapper.prebid))}(g=this.displayAd.bind(this,e))&&a(g)}}catch(e){console.error("ads error",e)}}registerAdCollection(e){e.forEach(e=>{this.registerAd(e)})}displayAd({id:e,slotName:n,dimensions:t,targeting:i,sizemap:r=!1,bidding:a=!1,prerender:d=null}){const c=s(this.dfpId,n),l=t&&!t.length?null:t,u=t?window.googletag.defineSlot(c,l,e):window.googletag.defineOutOfPageSlot(c,e);if(r&&r.breakpoints&&t){const{mapping:n,breakpoints:t,correlators:i}=function(e,n){const t=[],i=[],r=[];return(n.length?n:null).forEach((n,o)=>{t.push([n,e[o]]),-1===i.indexOf(n[0])&&(i.push(n[0]),r.push(!1))}),i.sort((e,n)=>e-n),{mapping:t,breakpoints:i,correlators:r}}(l,r.breakpoints);if(!u)return;u.defineSizeMapping(n),r.refresh&&f({ad:u,slotName:c,breakpoints:t,id:e,mapping:n,correlators:i,bidding:a,wrapper:this.wrapper,prerender:d})}u&&(u.addService(window.googletag.pubads()),function(e,n){Object.entries(n).forEach(([n,t])=>{t&&e.setTargeting(n,t)})}(u,i));const g=r&&r.breakpoints?r.breakpoints:[];t&&a&&(a.amazon&&a.amazon.enabled||a.prebid&&a.prebid.enabled)?p({ad:u,id:e,slotName:c,dimensions:l,wrapper:this.wrapper,prerender:d,bidding:a,breakpoints:g}):o({ad:u,prerender:d,info:{adUnit:u,adSlot:c,adDimensions:l,adId:e}})}}}])}));