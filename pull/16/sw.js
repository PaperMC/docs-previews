(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.4.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.4.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.4.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.4.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"cc4bbeaa0368b09d9c3ea955d8b59b13","url":"__docusaurus/debug.html"},{"revision":"7c31732d8d650ba419f3879776483f66","url":"__docusaurus/debug/config.html"},{"revision":"a0c5eee943fbd3097c25164ec912f65a","url":"__docusaurus/debug/content.html"},{"revision":"6a9ceaab278dd38e5ab79344703d14e1","url":"__docusaurus/debug/globalData.html"},{"revision":"65c566cc064b2554b841a36144c28740","url":"__docusaurus/debug/metadata.html"},{"revision":"4503de69a38a299f65ab40c629c33a58","url":"__docusaurus/debug/registry.html"},{"revision":"79914bf738b4d61dceda238529f10cc3","url":"__docusaurus/debug/routes.html"},{"revision":"ebac50e6b7cb28587aba2698a4445379","url":"404.html"},{"revision":"4833a5a05abc75da3279c18be35b8f3f","url":"assets/css/styles.8a1d17ea.css"},{"revision":"856e7226834a134488b2cf928690e457","url":"assets/js/08c91acd.0d7d9182.js"},{"revision":"4860cdbd6371c3eb1c722ce96188cf77","url":"assets/js/14eb3368.38153dbd.js"},{"revision":"ef6427c9f566ff06dc7e6370a5666e39","url":"assets/js/17896441.12f9fbc9.js"},{"revision":"09d01f8cd3a59ba1a2cebf5049a151bb","url":"assets/js/19c9239f.50225426.js"},{"revision":"ca880fb8158f54b0e4750de21d3cb5fa","url":"assets/js/1a4e3797.96c1cb78.js"},{"revision":"41dd0ada364152515dfa9d1f2002ee9a","url":"assets/js/1be78505.3da92d80.js"},{"revision":"7d4a59a549b2a3eff8e8dd76d68abc03","url":"assets/js/1df93b7f.f1eaa535.js"},{"revision":"c8df6bb74845a7bb5948c513effa50cd","url":"assets/js/230.025153b6.js"},{"revision":"d7c53a3a268c09471bc9cf4dc953380d","url":"assets/js/23374ca6.e75c980b.js"},{"revision":"e9f5480b1b769c2cc77af87534e04bfe","url":"assets/js/23abe487.e0e553df.js"},{"revision":"5f27b1aac6569950b065f53838c24888","url":"assets/js/246f2c6f.28bcba59.js"},{"revision":"6b9e51267406fde607a1d5c381c40c3e","url":"assets/js/278d831b.75d5370f.js"},{"revision":"99de1be8666c4b385dc86ece8883f2b3","url":"assets/js/27da239e.ecf443b8.js"},{"revision":"b17870b627c38ef043c965e394d00a6b","url":"assets/js/2c700dca.80cbf1d5.js"},{"revision":"c51df474dc66e2f36d53a41ac85ddfdc","url":"assets/js/2c714a47.8c94e897.js"},{"revision":"6a86bf0c21f9cb02c05b764aad989de9","url":"assets/js/3450.9b3ef2c5.js"},{"revision":"55d8bb6238f873a7a58daad6489e9c59","url":"assets/js/3bd92c1c.feef176c.js"},{"revision":"7b605e733192b17c38afc310ca60ea9f","url":"assets/js/3ca010ae.e202735d.js"},{"revision":"f867a74e1d5c62272ad55235beb9eeb0","url":"assets/js/3ea01176.36c524a1.js"},{"revision":"ed1e6933f87fbdb21717b204b9d8622b","url":"assets/js/417802b6.b9d3898e.js"},{"revision":"00d0b841df2b70f338a99918e5f1b16c","url":"assets/js/444147dc.73287ef2.js"},{"revision":"bd663700efd782ebde0c5e10352972b6","url":"assets/js/4542f1aa.5ec7836b.js"},{"revision":"8f089de5544b00980c803bfa241f1f29","url":"assets/js/45c35fe9.a20e30c8.js"},{"revision":"6150536220c3fc6a840930f351d4bc31","url":"assets/js/4608.7f3155ed.js"},{"revision":"f509237533ec9aa0caca71af8e6f5921","url":"assets/js/4735cba8.a82d1000.js"},{"revision":"5f6fc5d18da7e30d3c70024c239174fd","url":"assets/js/5131.023cfe0f.js"},{"revision":"b634454a0456d9950c4e61cedee94a10","url":"assets/js/5283.2c52b05b.js"},{"revision":"eef3abd3a7ec7deaac69d2c8e5138ba5","url":"assets/js/6794d4cd.d8b7ef14.js"},{"revision":"ce7f72eee5e0653199ab25bcdc86e81c","url":"assets/js/6815.8f5a7408.js"},{"revision":"21767c1c3c64b0976d87aa38fd65392f","url":"assets/js/6856bc5e.af1cc33e.js"},{"revision":"6ff6425450112c91f94f5e0478135a70","url":"assets/js/68e633d4.ea9b947b.js"},{"revision":"5a0aafccc443095b70527b12cb815750","url":"assets/js/6945.7e7c6451.js"},{"revision":"3428401e361797dff5fb66a008778438","url":"assets/js/7109fcb9.581a48b0.js"},{"revision":"aadf7dccda2df2815fb93eac85e8c5c5","url":"assets/js/7556a661.e2a2c49b.js"},{"revision":"6e418399e14fd570c5af493bc905088e","url":"assets/js/8894.8579f5eb.js"},{"revision":"1ead35e7fbc9692b6c158dd8f8a5fbfb","url":"assets/js/93426447.d85d1893.js"},{"revision":"2afc4e9bc442cb17c65e137b9e6d387e","url":"assets/js/935f2afb.d663f279.js"},{"revision":"7a322fd8821db2872e2dc206d2062d6c","url":"assets/js/946bd85a.f5ef0c45.js"},{"revision":"56c3798a211045d2165631971fcedb5d","url":"assets/js/9720aa09.7c2c9420.js"},{"revision":"b40a97df91878b9542835c4d4f4a1f88","url":"assets/js/9bdc2d76.e58e4d31.js"},{"revision":"05333cae4b98589364e6963187afcdb8","url":"assets/js/b0dd63e9.f4684591.js"},{"revision":"7d8b1abb7e30449d296b0991af709c22","url":"assets/js/b8c60b87.e7dd1fd3.js"},{"revision":"9d08d5c415a3142e54071647792def17","url":"assets/js/ba8b3534.be981aca.js"},{"revision":"833d518b69b80eddb3c10f64ed2a4854","url":"assets/js/bd0ab364.3d34d1c6.js"},{"revision":"b9d9725b1411a0c253f33aa5919cc517","url":"assets/js/c19b4e8e.80b5c26e.js"},{"revision":"30bec0fd904ef83dd2eefa95abad6b8b","url":"assets/js/cf08fff7.e2b329f0.js"},{"revision":"8e771d9ef5cec6c8cb946bb5d4c853b1","url":"assets/js/d50d5676.01ddde9d.js"},{"revision":"bfc1d7518a42859fcad46387944a3985","url":"assets/js/d70a5677.88a0c4f7.js"},{"revision":"f2d269affbb8e44111f610b1e485c3c8","url":"assets/js/d93b72a0.476a43fc.js"},{"revision":"fe40820ce1a42632dcd1453e2c5aae22","url":"assets/js/de48decc.6e059526.js"},{"revision":"558b0772de1f91d90b34f621f2d29b22","url":"assets/js/decc4105.c9d08159.js"},{"revision":"fe499f6fafdc37b794036362d2c0428a","url":"assets/js/df759228.4b6298f7.js"},{"revision":"5e8242a72a9d6651e462e06b35ad4486","url":"assets/js/e36987ae.b697eb2d.js"},{"revision":"8f211c4ca54df6fa5bb6f084400d3b88","url":"assets/js/e9b1edc3.ebf9e0cc.js"},{"revision":"733b6131d30bcf1dc8326ee80072709d","url":"assets/js/ede3a018.f4472f61.js"},{"revision":"90ff2fd9f00084b6c7d0edcec27da6c4","url":"assets/js/f92d365d.ae48827c.js"},{"revision":"1b561f6fd14279af93382c6cbb16aaae","url":"assets/js/fdb945e9.6c7c1cc8.js"},{"revision":"d1f4181ccd1ecc478ee3f8594a7e4da9","url":"assets/js/ff7bed0d.8a6c0921.js"},{"revision":"6a958d814554a58c59153f6c9255c3ad","url":"assets/js/main.ef8e1928.js"},{"revision":"5efab3b27c5a45665a42d9ca3f689b73","url":"assets/js/runtime~main.2d30000b.js"},{"revision":"ef505b9c311fc3f77aebddea74cdfed5","url":"category/how-to-guides-1.html"},{"revision":"a1190a5c72dd4d07c5a53ce0f6877818","url":"category/how-to-guides.html"},{"revision":"af531dc4412137aabfca9f4ff46d0266","url":"category/reference-1.html"},{"revision":"9b8137dc5de9984ef1127e1126d12f1c","url":"category/reference.html"},{"revision":"d895ca6e3028343301ef65d5a93401ba","url":"index.html"},{"revision":"86734f923bb0a2ae6c73e6e8a4b400dc","url":"intro.html"},{"revision":"c8a6bb2a757dd105ad328745dcfd3991","url":"java-install-update.html"},{"revision":"9de0c1c99854cb76025abff99c9590c3","url":"manifest.json"},{"revision":"d4cd2a58a906b611b8f1005f0407428b","url":"paper.html"},{"revision":"d362ecb07471a19fd806f2b01069abfd","url":"paper/getting-started.html"},{"revision":"9ade65ce42035fd3e9b389772e500e0c","url":"paper/how-to-update.html"},{"revision":"18e621a53cea6455b60555e9b1cbec01","url":"paper/how-to-use-aikars-flags.html"},{"revision":"f7b7347f2c89afa506de0db867eda65f","url":"paper/how-to-use-per-world-configuration.html"},{"revision":"7ff09adf9d9aa2662c25cfe6725a2a7b","url":"paper/reference/paper-global-configuration.html"},{"revision":"ea05aa8f11e496c27ca1a0ad33857b25","url":"paper/reference/paper-per-world-configuration.html"},{"revision":"4fec73fb10fcbe9efa737b3e02652a5c","url":"search.html"},{"revision":"176b2059ae4f9d1e660d7e24126a3f57","url":"velocity.html"},{"revision":"785f32e3bd369d18893380ec34da27f0","url":"velocity/built-in-commands.html"},{"revision":"d68c7b26f0633a3dd777dfd84332c771","url":"velocity/comparison-to-other-proxies.html"},{"revision":"5cb654cc4b907eb6ca2a83e735ad6ef5","url":"velocity/configuration.html"},{"revision":"a77dd831d19f2e6ddac47609b03a1b88","url":"velocity/credits.html"},{"revision":"b3008ebeb11862b372c82a477cea8b75","url":"velocity/developers.html"},{"revision":"a9de1829a3a7dc22f4b20dcc8539187a","url":"velocity/developers/api-basics.html"},{"revision":"7b3660cdd8b7b0a47b20809f8f01ba2d","url":"velocity/developers/command-api.html"},{"revision":"35b9dd5f95d9202f66571f44135f8d58","url":"velocity/developers/common-pitfalls.html"},{"revision":"31c9ba1a8dcd36f99585a6206e11ec41","url":"velocity/developers/creating-your-first-plugin.html"},{"revision":"a855bbe679a3af79569df4e41e2c40dd","url":"velocity/developers/event-api.html"},{"revision":"713f9bcf405a0c5004e4c3b13133f984","url":"velocity/developers/how-to-manage-dependencies.html"},{"revision":"aebbe05ebf27f5667afca88722ee7c8d","url":"velocity/developers/how-to-port-from-velocity-1.html"},{"revision":"508c6a7d1683d2016b66b6181288ee07","url":"velocity/developers/scheduler-api.html"},{"revision":"342d997f12df6a1000eb470010e6434f","url":"velocity/frequently-asked-questions.html"},{"revision":"dc10d7808083ac1b90ac5b579af53ef2","url":"velocity/getting-started.html"},{"revision":"3bafdf719a1d1ace05d6743df1bf8a4e","url":"velocity/how-to-migrate.html"},{"revision":"c0edce2252943f1d69c3f9fb0c815533","url":"velocity/how-to-secure-your-servers.html"},{"revision":"35460c10d59763f5681bb29a91de0f47","url":"velocity/how-to-tune-velocity.html"},{"revision":"a7c021a353d8ebc6d73b633349864a7a","url":"velocity/player-information-forwarding.html"},{"revision":"fbb8b0ea06116a0dbba725467f2e696e","url":"velocity/server-compatibility.html"},{"revision":"78e2343f18bb2353b6d776a865fda4b2","url":"velocity/why-velocity.html"},{"revision":"36146748e156d3832d79a04957231eb1","url":"waterfall.html"},{"revision":"10db20d25936f812dcc750f68e00e7ba","url":"waterfall/configuration.html"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"69b156c91d208aff640e1016c38fb004","url":"img/logo.svg"},{"revision":"a9da426ad5475220ef18653219fd74de","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();