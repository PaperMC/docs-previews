(()=>{"use strict";var e={258:()=>{try{self["workbox:core:6.5.1"]&&_()}catch(e){}},60:()=>{try{self["workbox:precaching:6.5.1"]&&_()}catch(e){}},18:()=>{try{self["workbox:routing:6.5.1"]&&_()}catch(e){}},847:()=>{try{self["workbox:strategies:6.5.1"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(258);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(60);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(847);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(18);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"214fe27c4870b1bcd7f6be5f2913fb17","url":"404.html"},{"revision":"442a997dd9104001a256469ed5f16de5","url":"assets.html"},{"revision":"ffe1ca576a9a1f10f3fbee5645297d22","url":"assets/css/styles.68352f21.css"},{"revision":"1b6c5d3b1cd457b9ddcda04642d644ac","url":"assets/js/1290.341ffacd.js"},{"revision":"38e6cee1c21f8c53b3e6f5c7b67e8092","url":"assets/js/1466.e2497d08.js"},{"revision":"6f358fa83e545c514b88c84e60a68103","url":"assets/js/1926.897c4254.js"},{"revision":"ba3778fcd2d53d5ae94b55d0c998464e","url":"assets/js/2074.910dae12.js"},{"revision":"8116a76e6252b2b46416b8e78f03cdf2","url":"assets/js/2215.e9d21433.js"},{"revision":"e60b3c15105dc993717743c3289b9f12","url":"assets/js/226.8be4db97.js"},{"revision":"df0d5a453a1a69e1bd1205aec809748b","url":"assets/js/2358.0b56ba16.js"},{"revision":"6da3309ec36bbbf3033d9e007e6852c0","url":"assets/js/2362.d8edc3c2.js"},{"revision":"c7ab7ba1c99dcf99b1109533e1c78d7e","url":"assets/js/2388.c8ab0707.js"},{"revision":"5deda6a70f4f75fb7125a81885dc8e72","url":"assets/js/268.ec84763f.js"},{"revision":"43c44b601935dfb5e25e9e879dc150eb","url":"assets/js/2718.60caaa72.js"},{"revision":"6b5efa5949868da504541bd397b441c9","url":"assets/js/2867.ccfed61d.js"},{"revision":"d44afa579683951665b7bf5c823a2cf0","url":"assets/js/2902.a28112c1.js"},{"revision":"dee4bba9c20c8107839dcb2b12c2bdad","url":"assets/js/3061.f576b856.js"},{"revision":"f7b5ddf0e3bf49bc815b5b992f514815","url":"assets/js/3062.9b012f5a.js"},{"revision":"8e196aaf4ea44b9f8bf300c65c8a4b6a","url":"assets/js/3099.1a77fa79.js"},{"revision":"52b0f51908b9295225352a90a8d421e3","url":"assets/js/3167.273e5c66.js"},{"revision":"fdce05cb7c92a258b2eb9e9ae632975e","url":"assets/js/3181.753c71ef.js"},{"revision":"b67fc5444c2558e2be7504a39337849f","url":"assets/js/3321.a143c0f3.js"},{"revision":"6144b9fbb845e911e4860e6a22ddb7bb","url":"assets/js/3505.d3d6b95b.js"},{"revision":"c39aae6bb5fdc21cb961883d1549d478","url":"assets/js/3678.ed2aab33.js"},{"revision":"3d873a45f62bd5a64a4e09a2a140418a","url":"assets/js/3692.a10daa90.js"},{"revision":"fcc447bfb8bb3848e6a5af4a237449b2","url":"assets/js/3868.6f81114d.js"},{"revision":"8ae9c616e4b23cbb63e6b42a2784bc15","url":"assets/js/4070.05096409.js"},{"revision":"9bfb0c7f6705bd650c1cb9561d83032b","url":"assets/js/4104.d3b74d5e.js"},{"revision":"685c98993c888b1d6ecb7041f791b0b5","url":"assets/js/4193.deb8b63e.js"},{"revision":"c31ce94bb92468bd9a70554e291d6524","url":"assets/js/4413.3f9be166.js"},{"revision":"1087d089e6cf0ed4d7d3f5ed056bb9e6","url":"assets/js/448.387d19d9.js"},{"revision":"0ab0acce0dede97606163ade7c63544d","url":"assets/js/4549.97b73b13.js"},{"revision":"e1e225520e32753f140438f9dcef34dc","url":"assets/js/4827.93b6b099.js"},{"revision":"00c086ae175429b5f7c2ea51cb746f10","url":"assets/js/4864.1b6304e8.js"},{"revision":"35fe76eaa146019ab6372c4547802ec7","url":"assets/js/511.d4bfacfb.js"},{"revision":"95f326b740e129f0415d812bc72313ac","url":"assets/js/517.88a138c6.js"},{"revision":"35e59d7924b9ded807ccff75445209a7","url":"assets/js/5180.77dfa567.js"},{"revision":"7b60a9fd9eeaf02d998dc31312e2a17d","url":"assets/js/5206.209d8274.js"},{"revision":"22f9f0b0eec03667fa5c12de7de9f053","url":"assets/js/5506.f6bf8a2f.js"},{"revision":"f27843767fa2e774a8017fd17e07f16a","url":"assets/js/5589.bf26629a.js"},{"revision":"970e986460c4a5dff9ff1518c0cd7c2c","url":"assets/js/5695.01f4cc29.js"},{"revision":"cea9fcb8101ffbc3abccd58bdf587b79","url":"assets/js/5745.c0b8e8e0.js"},{"revision":"26681aeb4cc67a8c9a399601e4d8e2c2","url":"assets/js/5746.fbda6053.js"},{"revision":"01b96f7ad3d46ae4544c5aa2d4863693","url":"assets/js/5815.77fd777a.js"},{"revision":"64cedeffc49316eb07e8aab30e7b9ab2","url":"assets/js/5926.f7affaa1.js"},{"revision":"d357f9ea35327dd4176e7f194844db1b","url":"assets/js/6082.0e260127.js"},{"revision":"9dfd86c881d874d5ffb845d67d0265c4","url":"assets/js/6160.f0a1eaa9.js"},{"revision":"84e009ab33ff52f0c9c83df2e94d7855","url":"assets/js/6621.3891d713.js"},{"revision":"79c426c25572ccaa93a8aa8f541ea969","url":"assets/js/6735.d09be5cd.js"},{"revision":"0f360a617f3e1f41f81f55dc73a0f419","url":"assets/js/6798.2d88ddd9.js"},{"revision":"e2ea4c08dcb8c661544d1f480fe2e154","url":"assets/js/6846.13d52894.js"},{"revision":"27053b37de71019f6b8b5518f5ce53f3","url":"assets/js/6899.f9e08bcc.js"},{"revision":"8da7bbda64e1eb0d9ac846822062b862","url":"assets/js/6907.7543cdb2.js"},{"revision":"d01cb5db162353bebd62bad3366958db","url":"assets/js/6998.1697804e.js"},{"revision":"03e7ca8c6fa82939e55d6d17d55b64a0","url":"assets/js/7085.38534a25.js"},{"revision":"f044275b2d732e152aeacfa51a7e612f","url":"assets/js/709.711de13b.js"},{"revision":"d7c7b07b1b5aa9fb4decce33418022a1","url":"assets/js/7223.77e1274a.js"},{"revision":"9551460563bd731ad551d0c301c4b769","url":"assets/js/7426.7671fd40.js"},{"revision":"aa7145df7c381047cee61a78ed37cf5d","url":"assets/js/7551.df324029.js"},{"revision":"7781a878afa076d5a3ca8eea11d69bf7","url":"assets/js/7595.1508737a.js"},{"revision":"a66304811e8a608933194ad70f74e8fc","url":"assets/js/7759.aad2829f.js"},{"revision":"c4a9224a1cbcd7ce19de01c962e24090","url":"assets/js/7769.a9fd206a.js"},{"revision":"896a56f491a2e4807638f543eb1abc27","url":"assets/js/7780.32d1ac7c.js"},{"revision":"e8ef929e35ebfd5f759b3f80d01bd6d5","url":"assets/js/7891.d1b9976c.js"},{"revision":"39d971e50d4fe154515efd603216e71b","url":"assets/js/8266.da525a83.js"},{"revision":"5ea053c731f9c3a90a3f3821ed91221e","url":"assets/js/8346.537902e5.js"},{"revision":"ace27ec695162d320b71b299b7c2f88d","url":"assets/js/8466.5dfc749b.js"},{"revision":"c7344a631529521434b09ab8269cf3eb","url":"assets/js/8620.c8413569.js"},{"revision":"b0d924dbbd9a0ffc83cd17f228aad5b9","url":"assets/js/8664.108f771c.js"},{"revision":"f915a551950a3e76fcb7e75914201d45","url":"assets/js/8697.8879947f.js"},{"revision":"94efeb375ea758bc352b53b2b264257e","url":"assets/js/8703.69ed15da.js"},{"revision":"c0aec51fbbcb3428a7c821ae41b67740","url":"assets/js/8796.1b55fc05.js"},{"revision":"00d32cd966dcce98893a4ab423f04dc7","url":"assets/js/8876.be9ff5d7.js"},{"revision":"e46209eda4b1b902b1ec07a237eba319","url":"assets/js/8954.9a709f83.js"},{"revision":"f0036e4bc13d2dbb2445105d9562dccf","url":"assets/js/93.4819c1d2.js"},{"revision":"ed097607244651b7cfb9633126dbc8d9","url":"assets/js/9510.aee97a6d.js"},{"revision":"45455d890dad570a4424b9885e872626","url":"assets/js/main.2d59bcc6.js"},{"revision":"22bfc847ab5b53452652f0a9d94743df","url":"assets/js/runtime~main.bb314b9b.js"},{"revision":"9dd67bdbf342726f3ee4a794071dd041","url":"common.html"},{"revision":"666dfe4ced0b33735b044568e4acb39a","url":"contact.html"},{"revision":"4ff30f3b858907efc3b6b9c59e3c3f33","url":"downloads-api.html"},{"revision":"c028b5009bf6fa3d64dc418ec90ec279","url":"index.html"},{"revision":"6f9fa7993ceff5473518c3011ddb5d6e","url":"java-install-update.html"},{"revision":"9de0c1c99854cb76025abff99c9590c3","url":"manifest.json"},{"revision":"2188f3d997a51e809ae8d3d2dc063a68","url":"paper.html"},{"revision":"dfaa2a342e078eb6105d428c5f1d9f1b","url":"paper/adding-plugins.html"},{"revision":"2749c3835d1c8d4300277d587ce26df3","url":"paper/admin.html"},{"revision":"dfd50d0b923daf5580194907b7d79f52","url":"paper/aikars-flags.html"},{"revision":"b9550aaaa20f0f38054a890a4020898d","url":"paper/anti-xray.html"},{"revision":"8340e4dd2749add5981dc296ea4faa96","url":"paper/cat/admin/how-to-guides.html"},{"revision":"4c502409c55cbe4790fe607b25653aa1","url":"paper/cat/admin/reference.html"},{"revision":"2199410a473793f57193f267df4b582d","url":"paper/dev.html"},{"revision":"2480e86c9f3a556cfd0923c6b6b98d14","url":"paper/getting-started.html"},{"revision":"eb3055430d385eb3139d75e738a06e5f","url":"paper/migration.html"},{"revision":"4fe3ea18ae36b9975ff7ac823a4c939f","url":"paper/per-world-configuration.html"},{"revision":"26e7ee9d4fe90727c1d4d249e10fb797","url":"paper/reference/paper-global-configuration.html"},{"revision":"d869f213d008aa5e3f3690cc2586d7e3","url":"paper/reference/paper-per-world-configuration.html"},{"revision":"f05be3ac3d9dc18d74750ccc291be5ad","url":"paper/updating.html"},{"revision":"00e4f5ffc6136f4586dca9c330ab0f41","url":"search.html"},{"revision":"9f90d9355dc9c5eb41020d8c9b88ec10","url":"velocity.html"},{"revision":"a01e37373c5f05c85d557d36cb48a44f","url":"velocity/admin.html"},{"revision":"d2c8aa26a13ed4e1e3b45080dec0fc6f","url":"velocity/built-in-commands.html"},{"revision":"4ed3216e5db82e534ca5c47d9e7a413f","url":"velocity/cat/admin/how-to-guides.html"},{"revision":"a8bb35539731a15ea55917dfccde4634","url":"velocity/cat/admin/reference.html"},{"revision":"809558d464ba4600700f7ccb297657d7","url":"velocity/cat/dev/api.html"},{"revision":"c90938af5b5abc371b67c2c9c5b6ba44","url":"velocity/cat/dev/getting-started.html"},{"revision":"dbbc3e9ad3ef56d8e6ff0742aadff89b","url":"velocity/cat/dev/how-to-guides.html"},{"revision":"34d622f99ed82271481702d6ebacb864","url":"velocity/comparisons-to-other-proxies.html"},{"revision":"806149dc5ec27d9c2c53da25d5b72068","url":"velocity/configuration.html"},{"revision":"32cd3d3cdcdeb3fb98c296df8465ce69","url":"velocity/credits.html"},{"revision":"f2eda3c73f8ef89bdd75ebb415b4dc05","url":"velocity/dev.html"},{"revision":"9e4d1476d9f6d742383074e37d0592c6","url":"velocity/dev/api-basics.html"},{"revision":"75d5f20f8c8e07e89277e65a2187d2ac","url":"velocity/dev/command-api.html"},{"revision":"a0fac3a52b2cf038f1136ba3feb5ab56","url":"velocity/dev/creating-your-first-plugin.html"},{"revision":"6366fc81e1a115dfdb679ccf916db2e3","url":"velocity/dev/dependency-management.html"},{"revision":"dff254f72fa752ab7cc8d222e08feea8","url":"velocity/dev/event-api.html"},{"revision":"629e241ec3bbc8d30dce97dda535116b","url":"velocity/dev/pitfalls.html"},{"revision":"bce47d425196ea765409aa53e2db8060","url":"velocity/dev/porting-plugins-from-velocity-1.html"},{"revision":"97f7e326ed6a85caf82bdfffd31630d4","url":"velocity/dev/scheduler-api.html"},{"revision":"a37afe99b95616137fb5d76d17397a27","url":"velocity/faq.html"},{"revision":"7a598cd10b2c175f6cdfde11d8617a2d","url":"velocity/getting-started.html"},{"revision":"42dc5a1eb929dc0b149e81426d9beb3f","url":"velocity/migration.html"},{"revision":"4c2fcf0f03ab7fcdd01cfb13ec194381","url":"velocity/player-information-forwarding.html"},{"revision":"31eaf3e31c7fec1efed5638a636020d2","url":"velocity/security.html"},{"revision":"712414b2b9de91d95e45d720d0175c30","url":"velocity/server-compatibility.html"},{"revision":"44da99d0e81a39c46ac3249595d60960","url":"velocity/tuning.html"},{"revision":"af0f72175136af72048f3999e56da6b3","url":"velocity/why-velocity.html"},{"revision":"4c228f91c4590b64ae80a3b59f563fe7","url":"waterfall.html"},{"revision":"a7d167eb2c3997573d71bad9b7cfe1cd","url":"waterfall/configuration.html"},{"revision":"c2b700761b0334716a6d6b2239f5ac05","url":"waterfall/getting-started.html"},{"revision":"4f12cdd8785605ddeb7c202a196e7d35","url":"assets/images/anti-xray-nether-05e6e894ce876f94d4463e1f491d1030.png"},{"revision":"ac61b2cd736aeb124ece24c782c63560","url":"assets/images/anti-xray-overworld-3443fb41851dc5d9082f2956268232a1.png"},{"revision":"728cb4af05ea79eca18631a0a7f5950e","url":"assets/images/papermc-logomark-500-b69f67cabd469b3d0485c20a912e84fc.png"},{"revision":"2cc84f324fa1386d14831b64d1c303fb","url":"assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"6d2b17625a69476b37609eb25ffc7bb5","url":"img/logo-marker-dark.svg"},{"revision":"7a01475d80ed106901f025b450fa45b0","url":"img/logo-marker-light.svg"},{"revision":"23c02a74c76235daf1a513381ba42449","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();