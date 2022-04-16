(()=>{"use strict";var e={258:()=>{try{self["workbox:core:6.5.1"]&&_()}catch(e){}},60:()=>{try{self["workbox:precaching:6.5.1"]&&_()}catch(e){}},18:()=>{try{self["workbox:routing:6.5.1"]&&_()}catch(e){}},847:()=>{try{self["workbox:strategies:6.5.1"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(258);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(60);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(847);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(18);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"dc68ab1a2caf60be7080e6619f3a388b","url":"__docusaurus/debug.html"},{"revision":"7288d47e4fd68cf910f27ad051b9c9a1","url":"__docusaurus/debug/config.html"},{"revision":"2ff76cdc2f4283baae489f596c60ceb6","url":"__docusaurus/debug/content.html"},{"revision":"a00b5e0ceb8dfa3197fe39a3a55190c9","url":"__docusaurus/debug/globalData.html"},{"revision":"b32efa061618e0276425127a2173ae91","url":"__docusaurus/debug/metadata.html"},{"revision":"ab18a9b470b1d6c1e6b32cd1bf4d984d","url":"__docusaurus/debug/registry.html"},{"revision":"671efeaaab8ad442147f1c9298e5ed9b","url":"__docusaurus/debug/routes.html"},{"revision":"4b959ab5dd21800cf19b6362325e0faf","url":"404.html"},{"revision":"cb86ba6998f4eeb0dedebc03f0d99859","url":"assets/css/styles.fb34280f.css"},{"revision":"1b6c5d3b1cd457b9ddcda04642d644ac","url":"assets/js/1290.341ffacd.js"},{"revision":"08e89631a8fbb0948bd0237dbea56a10","url":"assets/js/1466.c01be571.js"},{"revision":"6f358fa83e545c514b88c84e60a68103","url":"assets/js/1926.897c4254.js"},{"revision":"e5afc811d2d4dd14de4e7911a521cf16","url":"assets/js/193.760e9fa6.js"},{"revision":"e60b3c15105dc993717743c3289b9f12","url":"assets/js/226.8be4db97.js"},{"revision":"df0d5a453a1a69e1bd1205aec809748b","url":"assets/js/2358.0b56ba16.js"},{"revision":"c7d13e3008bfd0afcfb6c4cbe4f19a76","url":"assets/js/2362.a98232ac.js"},{"revision":"8fafccddcbeca6d4ba3514dc560f3037","url":"assets/js/2388.e520ffb6.js"},{"revision":"94a3a87fd33fc941fecd2a9957205de9","url":"assets/js/2662.163ab051.js"},{"revision":"b4e21d28f6024a01e441d9e981e505f5","url":"assets/js/2700.330c878d.js"},{"revision":"43c44b601935dfb5e25e9e879dc150eb","url":"assets/js/2718.60caaa72.js"},{"revision":"6b5efa5949868da504541bd397b441c9","url":"assets/js/2867.ccfed61d.js"},{"revision":"d44afa579683951665b7bf5c823a2cf0","url":"assets/js/2902.a28112c1.js"},{"revision":"dee4bba9c20c8107839dcb2b12c2bdad","url":"assets/js/3061.f576b856.js"},{"revision":"f7b5ddf0e3bf49bc815b5b992f514815","url":"assets/js/3062.9b012f5a.js"},{"revision":"8e196aaf4ea44b9f8bf300c65c8a4b6a","url":"assets/js/3099.1a77fa79.js"},{"revision":"9ccd87f3252794bd2ede466aa5553f46","url":"assets/js/3167.9e8249e4.js"},{"revision":"a6c0bac1ce7651889d07499939294970","url":"assets/js/3181.84b96f53.js"},{"revision":"6144b9fbb845e911e4860e6a22ddb7bb","url":"assets/js/3505.d3d6b95b.js"},{"revision":"59b7198ac735122a28ee3cbf07c441ce","url":"assets/js/3678.49dffd43.js"},{"revision":"3d873a45f62bd5a64a4e09a2a140418a","url":"assets/js/3692.a10daa90.js"},{"revision":"4c628edada90c0129168e66ae072a02b","url":"assets/js/3984.1615e72b.js"},{"revision":"d3d57b781a1bd14f71c5b1076658986d","url":"assets/js/4070.5b834e2a.js"},{"revision":"07337a25068c50d28c80585c153ea7fb","url":"assets/js/4104.67ae5cd3.js"},{"revision":"17b34c1b3d8aa31234caad4e36a5a674","url":"assets/js/4193.c6e8644f.js"},{"revision":"2182bcaadabdadb8e0659e7d87d0d3bc","url":"assets/js/436.c91df96b.js"},{"revision":"c31ce94bb92468bd9a70554e291d6524","url":"assets/js/4413.3f9be166.js"},{"revision":"1087d089e6cf0ed4d7d3f5ed056bb9e6","url":"assets/js/448.387d19d9.js"},{"revision":"0ab0acce0dede97606163ade7c63544d","url":"assets/js/4549.97b73b13.js"},{"revision":"07c4a8d653a20353d9cd03a1912f7628","url":"assets/js/4597.daff48b2.js"},{"revision":"8619358eefa40e7a05f72de9fb495b85","url":"assets/js/4622.adadde6b.js"},{"revision":"1a69f386003ae689fc5b5212c96eaa65","url":"assets/js/4781.43e26ebb.js"},{"revision":"b1a3c6a28f2138b1a13b2ba890037bab","url":"assets/js/4827.1f323751.js"},{"revision":"00c086ae175429b5f7c2ea51cb746f10","url":"assets/js/4864.1b6304e8.js"},{"revision":"35fe76eaa146019ab6372c4547802ec7","url":"assets/js/511.d4bfacfb.js"},{"revision":"95f326b740e129f0415d812bc72313ac","url":"assets/js/517.88a138c6.js"},{"revision":"35e59d7924b9ded807ccff75445209a7","url":"assets/js/5180.77dfa567.js"},{"revision":"7b60a9fd9eeaf02d998dc31312e2a17d","url":"assets/js/5206.209d8274.js"},{"revision":"14e396970f045dbd1c3f5d1cf9cc749e","url":"assets/js/5506.3ed2cf8d.js"},{"revision":"9bcd2746cc63daf9294d241d3362ecbf","url":"assets/js/5567.acad7d5b.js"},{"revision":"970e986460c4a5dff9ff1518c0cd7c2c","url":"assets/js/5695.01f4cc29.js"},{"revision":"cea9fcb8101ffbc3abccd58bdf587b79","url":"assets/js/5745.c0b8e8e0.js"},{"revision":"26681aeb4cc67a8c9a399601e4d8e2c2","url":"assets/js/5746.fbda6053.js"},{"revision":"26ddbcd8494b3e1b5a36790198898a52","url":"assets/js/5790.333a0af2.js"},{"revision":"01b96f7ad3d46ae4544c5aa2d4863693","url":"assets/js/5815.77fd777a.js"},{"revision":"b2ecb98ddd34d2a02df1ccbe413bf206","url":"assets/js/5926.230abe08.js"},{"revision":"d357f9ea35327dd4176e7f194844db1b","url":"assets/js/6082.0e260127.js"},{"revision":"9dfd86c881d874d5ffb845d67d0265c4","url":"assets/js/6160.f0a1eaa9.js"},{"revision":"8230a5170365bd2c8d2ff79d1c6c15eb","url":"assets/js/6267.c2665132.js"},{"revision":"251c5eb0c7b37734d69086c0c5ce3a8f","url":"assets/js/650.e9f2d6d6.js"},{"revision":"84e009ab33ff52f0c9c83df2e94d7855","url":"assets/js/6621.3891d713.js"},{"revision":"10b9146b8db9965d3ebb5ac2e9d97a07","url":"assets/js/6735.eceb74dc.js"},{"revision":"0f360a617f3e1f41f81f55dc73a0f419","url":"assets/js/6798.2d88ddd9.js"},{"revision":"e2ea4c08dcb8c661544d1f480fe2e154","url":"assets/js/6846.13d52894.js"},{"revision":"40ea5300165927eae0a60a49d2e1f1ab","url":"assets/js/6899.7ba475c2.js"},{"revision":"0772dd5688a6e17293921f680835d3b1","url":"assets/js/6970.280328c7.js"},{"revision":"2e1ec6ac4323ea711e71e788c9ee0353","url":"assets/js/6981.962c4480.js"},{"revision":"d01cb5db162353bebd62bad3366958db","url":"assets/js/6998.1697804e.js"},{"revision":"03e7ca8c6fa82939e55d6d17d55b64a0","url":"assets/js/7085.38534a25.js"},{"revision":"f044275b2d732e152aeacfa51a7e612f","url":"assets/js/709.711de13b.js"},{"revision":"d7c7b07b1b5aa9fb4decce33418022a1","url":"assets/js/7223.77e1274a.js"},{"revision":"9551460563bd731ad551d0c301c4b769","url":"assets/js/7426.7671fd40.js"},{"revision":"aa7145df7c381047cee61a78ed37cf5d","url":"assets/js/7551.df324029.js"},{"revision":"7781a878afa076d5a3ca8eea11d69bf7","url":"assets/js/7595.1508737a.js"},{"revision":"896a56f491a2e4807638f543eb1abc27","url":"assets/js/7780.32d1ac7c.js"},{"revision":"e8ef929e35ebfd5f759b3f80d01bd6d5","url":"assets/js/7891.d1b9976c.js"},{"revision":"bc7a4dd2dbbd173baf6f432403597f46","url":"assets/js/8266.720ca2d8.js"},{"revision":"5ea053c731f9c3a90a3f3821ed91221e","url":"assets/js/8346.537902e5.js"},{"revision":"ace27ec695162d320b71b299b7c2f88d","url":"assets/js/8466.5dfc749b.js"},{"revision":"99022834328fa607695e5d7698b26e9b","url":"assets/js/8619.a99f77db.js"},{"revision":"c7344a631529521434b09ab8269cf3eb","url":"assets/js/8620.c8413569.js"},{"revision":"638a568a9fd120a0b86a3f606b49cb8e","url":"assets/js/8664.52aed54d.js"},{"revision":"f915a551950a3e76fcb7e75914201d45","url":"assets/js/8697.8879947f.js"},{"revision":"1d308a3a435c9f4c02474a043500a768","url":"assets/js/8703.a025f7cd.js"},{"revision":"9c7a45d6ed51e0a647f5e716cc6faefb","url":"assets/js/8796.a69c6a2f.js"},{"revision":"00d32cd966dcce98893a4ab423f04dc7","url":"assets/js/8876.be9ff5d7.js"},{"revision":"e46209eda4b1b902b1ec07a237eba319","url":"assets/js/8954.9a709f83.js"},{"revision":"75a9911bab9d1ea7a9f8399bbe7fde7c","url":"assets/js/8999.45343742.js"},{"revision":"f0036e4bc13d2dbb2445105d9562dccf","url":"assets/js/93.4819c1d2.js"},{"revision":"ed097607244651b7cfb9633126dbc8d9","url":"assets/js/9510.aee97a6d.js"},{"revision":"6a93b4d867b69c2a4474a08b7dc39517","url":"assets/js/9767.d53b48d5.js"},{"revision":"c0c33ae5806763d09b4d0a4d12e5bbef","url":"assets/js/9903.15b49f9d.js"},{"revision":"b128d4381b52151d48250d7ed49e71af","url":"assets/js/996.4bca579e.js"},{"revision":"889256ac82ef9c570eee9b09d2e27dc2","url":"assets/js/main.4fdc7a79.js"},{"revision":"5c7e3ed8799898b6659832b9396c24d8","url":"assets/js/runtime~main.dea6a3fb.js"},{"revision":"e56a7398f4ed6e5f631ad09c6ca3660e","url":"index.html"},{"revision":"9de0c1c99854cb76025abff99c9590c3","url":"manifest.json"},{"revision":"e1d856011388c904069ec41584488bb1","url":"misc.html"},{"revision":"954097395a4a58027c6c727c75825067","url":"misc/assets.html"},{"revision":"97b37b57dd3f3c47f1fef9d503117e94","url":"misc/contact.html"},{"revision":"6179ef36e5c9838ac36b707df82bd210","url":"misc/downloads-api.html"},{"revision":"85ef3e384b772b82b4c15d4c92d98514","url":"misc/java-install-update.html"},{"revision":"ccfc633908a1a02d33dd1103b5059e69","url":"paper.html"},{"revision":"4333f6ba38b1231deb9c2d4271845aa6","url":"paper/adding-plugins.html"},{"revision":"345b5094be359f81087df2770d15c42a","url":"paper/admin.html"},{"revision":"a64f09c0c56dbadfdab3de4561191479","url":"paper/aikars-flags.html"},{"revision":"507eb3b870ac2919e76cda3488854a1f","url":"paper/anti-xray.html"},{"revision":"5380a6e5222a60bded512d3f014fa4b2","url":"paper/cat/admin/getting-started.html"},{"revision":"fe406191bf51ae64bbbf3fb75e5658dd","url":"paper/cat/admin/how-to-guides.html"},{"revision":"a225b0f8eea70de66ebd762182700c03","url":"paper/cat/admin/reference.html"},{"revision":"2f81aa1eb9bd1267443fd7dffa274d42","url":"paper/dev.html"},{"revision":"a5145933c69d66b735fa04cb603bb276","url":"paper/getting-started.html"},{"revision":"edc4223829279a1ac0565060cf563044","url":"paper/migration.html"},{"revision":"4432871829fa51cbd92ff5d237622044","url":"paper/per-world-configuration.html"},{"revision":"fb5e2820b014f909b7efc9f9cf92e04e","url":"paper/reference/paper-global-configuration.html"},{"revision":"098bc94bf3b992f30e93547d9cc1adac","url":"paper/reference/paper-per-world-configuration.html"},{"revision":"46b1a8b8bd86cf45111319dc715fe954","url":"paper/updating.html"},{"revision":"e3c029e00904e6de78fd3816adbf1092","url":"search.html"},{"revision":"61a04d5388c9f278983416ffcf19050f","url":"velocity.html"},{"revision":"aa792510573d59a9c9c6bb3bf137b44c","url":"velocity/admin.html"},{"revision":"566b025cb68cbb614f065e39b29355f9","url":"velocity/built-in-commands.html"},{"revision":"b6b1666463bc2bf213520fbc2279c526","url":"velocity/cat/admin/how-to-guides.html"},{"revision":"ecff65ef1fc6fb0a8a81b1cc5d657eb2","url":"velocity/cat/admin/reference.html"},{"revision":"ff7d7770a371dbc777d42d1ad6188a52","url":"velocity/cat/dev/api.html"},{"revision":"22931e7ecfebac55875aefc836fa2ec1","url":"velocity/cat/dev/getting-started.html"},{"revision":"1177a188bfc91913ca26875e186c4edb","url":"velocity/cat/dev/how-to-guides.html"},{"revision":"b2c53e9a7cdb0c683ca0928f21a2c6d0","url":"velocity/comparisons-to-other-proxies.html"},{"revision":"f5d069842ab52ac7f2e418edb849558c","url":"velocity/configuration.html"},{"revision":"4363f9129a5dcdaa6e4a08fa3c04d3c2","url":"velocity/credits.html"},{"revision":"ef06dc31297d4368cd9565be00771c22","url":"velocity/dev.html"},{"revision":"13faf065554289a19a4c635e1cbbd77e","url":"velocity/dev/api-basics.html"},{"revision":"5a5935f6528d7e4a78aa789ee72892fe","url":"velocity/dev/command-api.html"},{"revision":"0c6cd08c4be1ad25fa044df0f7dde4de","url":"velocity/dev/creating-your-first-plugin.html"},{"revision":"408ea404b8b5b83de8982345a0fdbe56","url":"velocity/dev/dependency-management.html"},{"revision":"df2f0438e2cada720514b0d6c9ae23d1","url":"velocity/dev/event-api.html"},{"revision":"b9b494cf08ed3f111b04180498072843","url":"velocity/dev/pitfalls.html"},{"revision":"7e4773682b3bc5e7aa3135afbdc60fbf","url":"velocity/dev/porting-plugins-from-velocity-1.html"},{"revision":"1c1a7db123fb0630d2935bde87ebc24b","url":"velocity/dev/scheduler-api.html"},{"revision":"bd5dc1c06df189c5cb07e16e1ef71bd7","url":"velocity/faq.html"},{"revision":"92ebb8ba2a7d14e8d0415dccb4a2d5b5","url":"velocity/getting-started.html"},{"revision":"4334f50858e934f5e281ab6f7313e8bf","url":"velocity/migration.html"},{"revision":"da61c6431b9f9f08ecdf297788115f24","url":"velocity/player-information-forwarding.html"},{"revision":"eb3d2dd6127be332575e2afc0403b92e","url":"velocity/security.html"},{"revision":"12798cd6109b9e367c8a3c65fc83d7a9","url":"velocity/server-compatibility.html"},{"revision":"001cb790bd493c0de3620ff891479e9b","url":"velocity/tuning.html"},{"revision":"7871625b625da618cded6b1405e5d631","url":"velocity/why-velocity.html"},{"revision":"18d64397768086a4fd2e604e7e689ab6","url":"waterfall.html"},{"revision":"2d2f077e0712049e7a5c94b81baa0a1f","url":"waterfall/configuration.html"},{"revision":"e7c0fbf2566c34d5f934e1f1c9672f49","url":"waterfall/getting-started.html"},{"revision":"4f12cdd8785605ddeb7c202a196e7d35","url":"assets/images/anti-xray-nether-05e6e894ce876f94d4463e1f491d1030.png"},{"revision":"ac61b2cd736aeb124ece24c782c63560","url":"assets/images/anti-xray-overworld-3443fb41851dc5d9082f2956268232a1.png"},{"revision":"728cb4af05ea79eca18631a0a7f5950e","url":"assets/images/papermc-logomark-500-b69f67cabd469b3d0485c20a912e84fc.png"},{"revision":"2cc84f324fa1386d14831b64d1c303fb","url":"assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"6d2b17625a69476b37609eb25ffc7bb5","url":"img/logo-marker-dark.svg"},{"revision":"7a01475d80ed106901f025b450fa45b0","url":"img/logo-marker-light.svg"},{"revision":"23c02a74c76235daf1a513381ba42449","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();