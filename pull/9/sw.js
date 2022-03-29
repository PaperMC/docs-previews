(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.4.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.4.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.4.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.4.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"6440a28b1bfa7f69844d5ea1a1dbd980","url":"__docusaurus/debug.html"},{"revision":"ea7b3d456537b6cdf308ef461fd6a660","url":"__docusaurus/debug/config.html"},{"revision":"12e0a90d7e5338c036472ce04e87a2ee","url":"__docusaurus/debug/content.html"},{"revision":"cb5fae04569a68ec97474fd5575c1686","url":"__docusaurus/debug/globalData.html"},{"revision":"3251fef3fde6f79014fa8627e8320601","url":"__docusaurus/debug/metadata.html"},{"revision":"a5392631da9dba89463e0856df451949","url":"__docusaurus/debug/registry.html"},{"revision":"dc4876700de2441de31c6bf3fa00be28","url":"__docusaurus/debug/routes.html"},{"revision":"585d1c920a063c63550cd1141c0d4207","url":"404.html"},{"revision":"2c6a100cfd568c6205134a0bbaa3514e","url":"assets/css/styles.f8f8e815.css"},{"revision":"aefdb9e24b3ccda3de4b8c95e54bf230","url":"assets/js/08b731e1.3ed8e486.js"},{"revision":"415a9e4a92079b9f87e998b5d64719e2","url":"assets/js/14eb3368.83f46efb.js"},{"revision":"3c1dbf5ff14af616119097f09b6c351d","url":"assets/js/17896441.612b6440.js"},{"revision":"191a0e9930ef8d03cc2489cc2b2924ff","url":"assets/js/1a4e3797.37a146cc.js"},{"revision":"f6fe66f65845d866f8d76346e7e44955","url":"assets/js/1be78505.05ba6939.js"},{"revision":"cf54cf0626dcb665453084289a6815b4","url":"assets/js/1df93b7f.4c4c6bdf.js"},{"revision":"c8df6bb74845a7bb5948c513effa50cd","url":"assets/js/230.025153b6.js"},{"revision":"aee4ea45f70fa52a1df09fa456cd5c29","url":"assets/js/23374ca6.40df2b22.js"},{"revision":"74b44460fcf9363f82b2cf51478a2e2a","url":"assets/js/23abe487.4b661567.js"},{"revision":"274d595b0765695cc514e67fd851aa87","url":"assets/js/246f2c6f.ba16f81c.js"},{"revision":"5bcd1e61cf951414fcff9742b4446c43","url":"assets/js/26c06db6.518373ae.js"},{"revision":"9ff0966b01feddb34480568b817f8102","url":"assets/js/2826cd9d.906243e7.js"},{"revision":"3807acc3d002aa2eb6acd22b70eebbf7","url":"assets/js/2bae847e.e2cc632a.js"},{"revision":"8b79d4c7dc90d57f74faef23cc3c62dc","url":"assets/js/32ae1027.fc2d2de9.js"},{"revision":"72b331080e154486a514f7ad3d9ce629","url":"assets/js/3450.bf953156.js"},{"revision":"4d58bc25387d3381c910f136329891cf","url":"assets/js/3553af34.735e8454.js"},{"revision":"201c225453921458026d080be2f3c668","url":"assets/js/4579b8d2.4ddff134.js"},{"revision":"ef126c324f358fb0f8b61de11fbf4c82","url":"assets/js/45c35fe9.3f6a71a7.js"},{"revision":"929ee0eab9102e4135e6fa3e506e5a25","url":"assets/js/45c787c3.998d730e.js"},{"revision":"35d1c1e18adb9ba3c6386ad1b34acb15","url":"assets/js/4608.caea357b.js"},{"revision":"d495774ce27ee13877e791a007792b89","url":"assets/js/504d0c31.fcf6fffd.js"},{"revision":"5f6fc5d18da7e30d3c70024c239174fd","url":"assets/js/5131.023cfe0f.js"},{"revision":"b634454a0456d9950c4e61cedee94a10","url":"assets/js/5283.2c52b05b.js"},{"revision":"ee5fb5d1d25e6132c1762ce7abc933e2","url":"assets/js/5ac37622.238b9d02.js"},{"revision":"a1181efa1b63a47700bcf0f383ca7b1d","url":"assets/js/645c917e.dc744b65.js"},{"revision":"70128e281113b14b26a8eb737b99be30","url":"assets/js/6794d4cd.a6ea18c2.js"},{"revision":"ce7f72eee5e0653199ab25bcdc86e81c","url":"assets/js/6815.8f5a7408.js"},{"revision":"0003b2ce93b87bde84448aebdc8e0d2f","url":"assets/js/68e633d4.3f0b5cfc.js"},{"revision":"5a0aafccc443095b70527b12cb815750","url":"assets/js/6945.7e7c6451.js"},{"revision":"8073bf0845791583c2b08e4db2b5385f","url":"assets/js/714943b7.4378a432.js"},{"revision":"d4bd30b1dcfb9a4aa3c8138cbaacb289","url":"assets/js/7f5bcd1a.6f470d7f.js"},{"revision":"d9f478b8554f5c36c1745a3b18d24ec8","url":"assets/js/83cac198.5cb4143f.js"},{"revision":"6e418399e14fd570c5af493bc905088e","url":"assets/js/8894.8579f5eb.js"},{"revision":"573276607e217011b04f0a49d74dcb3d","url":"assets/js/899becc6.65d78aab.js"},{"revision":"3075cfeee65b4823cee72345ba35a704","url":"assets/js/8c1791c0.597a155d.js"},{"revision":"9a8a44bbde6c6e3f8724d8f965fe10fe","url":"assets/js/935f2afb.6055c335.js"},{"revision":"8eba8366db244ea635c029505c65ed60","url":"assets/js/946bd85a.e9164d30.js"},{"revision":"1adb34c6219e7e9079c51aeaf69187aa","url":"assets/js/9c4a842f.c4e2d36e.js"},{"revision":"3f83642b986da4ef278fbb97956abeca","url":"assets/js/a1d8fe0b.c7b050ce.js"},{"revision":"8c218b20f2b635cc5561b029fb6af7f8","url":"assets/js/aa64850e.0f07e9e3.js"},{"revision":"ee70e70de098cb2b67c192d0316f707f","url":"assets/js/ad6fe338.5a851261.js"},{"revision":"7b1eb85188c581b61b22253399cb07bc","url":"assets/js/ba8b3534.95116f15.js"},{"revision":"00117d62b6eee1af57195c5f60a2b30a","url":"assets/js/bc01eff2.e2ef2052.js"},{"revision":"ff35244470deffeed8395bb2c7f2b2dd","url":"assets/js/bd0ab364.fcc32c45.js"},{"revision":"1f79cb8d432e961f74759fcf2bf1185f","url":"assets/js/bded232b.21ef5791.js"},{"revision":"aecf372dbaa99d414d0acd7b27b6c2ae","url":"assets/js/c290827d.af9ede22.js"},{"revision":"f7239b39eeb5363b2a062f4db7304e2e","url":"assets/js/c8f93db0.7636423e.js"},{"revision":"5f3287404b9cc55eb80c430bdc1cf8f9","url":"assets/js/cf08fff7.d6f2002e.js"},{"revision":"4bb724f0015e55be220b8fa4e9a6575f","url":"assets/js/d934ac46.740ea960.js"},{"revision":"244893c3c2e6fde111f2218ae70a1cd4","url":"assets/js/de48decc.095daa59.js"},{"revision":"cd0d29fa7fce087de1324b35ab64e945","url":"assets/js/e36987ae.653926d4.js"},{"revision":"386bdf63637d04373db784f3d2db6d98","url":"assets/js/ede3a018.0f897d12.js"},{"revision":"8345803fc31b27fed15cb6bd3c46bd3c","url":"assets/js/ede75923.e8c47893.js"},{"revision":"d772b5d2d33abb1b88c0c6db67e60ec0","url":"assets/js/ef147b16.a723962c.js"},{"revision":"5465b97872ba03d66c238d8f9e195dd0","url":"assets/js/f71ce8f0.2b38c553.js"},{"revision":"74da7c73509d56d6bef6d419a0c3b48c","url":"assets/js/f80d4e5f.2b3978d2.js"},{"revision":"d9c50a94b13f8f328c6d5ec12a4b7a75","url":"assets/js/fe6bda18.c9dca92b.js"},{"revision":"dc8bcd5958fff152d0ca1eb7565d8415","url":"assets/js/ff7bed0d.00f61a7c.js"},{"revision":"10cb4602b090a918f0bc9fbba0ddb1ef","url":"assets/js/main.52c428e1.js"},{"revision":"0fadb1e93e2bbebfcb923146edb54a40","url":"assets/js/runtime~main.bd2caa87.js"},{"revision":"dedb9cb2646baad5c625b7e6bdc85c2d","url":"category/how-to-guides.html"},{"revision":"01597debc6bf03eb5740a046685b640b","url":"category/reference.html"},{"revision":"86fc495861fd99798807ad7a969152e7","url":"category/tutorials.html"},{"revision":"87e08cb8506d9afcfa2a645cec746a6d","url":"index.html"},{"revision":"5f5b7368136c772741854163736b03df","url":"intro.html"},{"revision":"46c5de40e1f8cbe0119becf8c340fb0f","url":"java-install-update.html"},{"revision":"93612675b03ca9aca39bd2a1373fee01","url":"manifest.json"},{"revision":"e8da9473fef822dd7b85888dc1cf9f3b","url":"paper.html"},{"revision":"bcc576902ff2a1881a9e63294a15a1f9","url":"paper/how-to/getting-started.html"},{"revision":"50fc241e0faa12ef4da5b62e901bc013","url":"paper/how-to/per-world-config.html"},{"revision":"37deff11650460892a28c9e6fe452503","url":"paper/reference/paper-yml.html"},{"revision":"4f153ff78ae3de8d689452ef7c7d760c","url":"paper/tutorial/aikars-flags.html"},{"revision":"91be9fa03882ecc18e804624417c8ceb","url":"paper/tutorial/update.html"},{"revision":"75b0ee4438acc8a212f65c71f9464936","url":"search.html"},{"revision":"417e726145a1c2345f1e18ec0b8edf20","url":"velocity.html"},{"revision":"09012fbe93870b349bfcc4609d0072be","url":"velocity/deployment.html"},{"revision":"b7bd528ecba19f4847323d9970a34b3b","url":"velocity/deployment/security.html"},{"revision":"470916dbd4421e559d29c62d6c722599","url":"velocity/deployment/tuning.html"},{"revision":"3ae836aafdd9273142b70cca7086f73f","url":"velocity/developers.html"},{"revision":"40c350a5a2ab61e1c85ea2c95e819735","url":"velocity/developers/api-basics.html"},{"revision":"c8624bf1674a43b59c59296d9c4c3d05","url":"velocity/developers/command-api.html"},{"revision":"225f1cd48bd437c372631d049a3481f2","url":"velocity/developers/creating-your-first-plugin.html"},{"revision":"13544a681c7c3c2a7b0d47320e32f1ae","url":"velocity/developers/dependencies.html"},{"revision":"b395dca097cbbc027050f707e3c84de5","url":"velocity/developers/event-api.html"},{"revision":"bc35b465c618b29654cefbd007f3a8e0","url":"velocity/developers/pitfalls.html"},{"revision":"26b0a079778f5e8f9a9bb94747210c0a","url":"velocity/developers/porting-from-velocity-1.html"},{"revision":"bd98ca5f85e76f6bba6dab12822864a0","url":"velocity/developers/task-scheduling.html"},{"revision":"d16fffb04fe266b6b9c7dd7ee3b9f303","url":"velocity/misc/credits.html"},{"revision":"9301e609dd03ceb47a9bb21a008af6a4","url":"velocity/users.html"},{"revision":"004bf2586b095e59d9841db0c06d2822","url":"velocity/users/commands.html"},{"revision":"5fd076bcb3066dcc62d8e6684dd2b86c","url":"velocity/users/comparison.html"},{"revision":"9683a8232c6962d0aa854d1841a76348","url":"velocity/users/configuration.html"},{"revision":"aa3ffcfe2ab56952fcafd4438c8a5c45","url":"velocity/users/faq.html"},{"revision":"05279823507afb971d679f9aa9f9f752","url":"velocity/users/forwarding.html"},{"revision":"24ad9ee77bd4d11129af048942d07f39","url":"velocity/users/getting-started.html"},{"revision":"4a00c1febd6057f494d302bf5e8f4e83","url":"velocity/users/migration.html"},{"revision":"cf79e26e2e775ef157c789f83d22fbd4","url":"velocity/users/server-compatibility.html"},{"revision":"f7f4ade109a788e1376660cf3b936e22","url":"velocity/users/what-does-velocity-do-for-me.html"},{"revision":"7b124d7c98a37b36f23fa0ef9b5d3d0e","url":"waterfall.html"},{"revision":"8df384f58bd51dd9657527eb14f70aff","url":"waterfall/configuration.html"},{"revision":"2cc84f324fa1386d14831b64d1c303fb","url":"assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"2cc84f324fa1386d14831b64d1c303fb","url":"img/docs/guides/java/pterodactyl-manual.png"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"img/docs/guides/java/pterodactyl-prompt.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"69b156c91d208aff640e1016c38fb004","url":"img/logo.svg"},{"revision":"a9da426ad5475220ef18653219fd74de","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();