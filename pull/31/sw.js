(()=>{"use strict";var e={258:()=>{try{self["workbox:core:6.5.1"]&&_()}catch(e){}},60:()=>{try{self["workbox:precaching:6.5.1"]&&_()}catch(e){}},18:()=>{try{self["workbox:routing:6.5.1"]&&_()}catch(e){}},847:()=>{try{self["workbox:strategies:6.5.1"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(258);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(60);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(847);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(18);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"1d77cc361f1279298c1783d89540e0f8","url":"__docusaurus/debug.html"},{"revision":"1d1663a936690604a0202aa6a18fbe36","url":"__docusaurus/debug/config.html"},{"revision":"f97dedc6b1bdc2e4c767f74ffd24ef41","url":"__docusaurus/debug/content.html"},{"revision":"946bfeb0ca35669572471d32ac02869e","url":"__docusaurus/debug/globalData.html"},{"revision":"33bf299d11375d91969a839867ab35cf","url":"__docusaurus/debug/metadata.html"},{"revision":"6c09653a2e6be906eafc010c7f155dfa","url":"__docusaurus/debug/registry.html"},{"revision":"54578f7e204c404202b5ab3a2f16a463","url":"__docusaurus/debug/routes.html"},{"revision":"4c9a8949631a6e6fdfd79ae1b13aa0f7","url":"404.html"},{"revision":"f87e5e8cec6692f6de26fe92ab13120b","url":"assets/css/styles.90b4d181.css"},{"revision":"ab81082bffba4e524fb0294d763ee983","url":"assets/js/08c91acd.b1dfd824.js"},{"revision":"6ccbd9adb0a68348995fd99db5a3e11d","url":"assets/js/1467.743ca377.js"},{"revision":"791161ec940eb5eb6d6a8d1389a9e4aa","url":"assets/js/17896441.3f2f9c3c.js"},{"revision":"d468cdb3c9082d54dcd9edcf007064fa","url":"assets/js/19c9239f.074a094f.js"},{"revision":"d133e164a709095108f39074718a6145","url":"assets/js/1a4e3797.fb222ca8.js"},{"revision":"f91f46b1ffbf436f80a85c740afa82a8","url":"assets/js/1be78505.11638ba4.js"},{"revision":"3ae232b4d05ca4bcacfdf71fb21ae2e8","url":"assets/js/1df93b7f.57452ea9.js"},{"revision":"f6185572c3162aa6106e430ab4b4c688","url":"assets/js/23374ca6.0855f3d8.js"},{"revision":"73385f4115e4736a0463a7e23e20a969","url":"assets/js/23abe487.abc03e43.js"},{"revision":"7e9048a4de00e69fd55d5699f2ecbc31","url":"assets/js/246f2c6f.ebce2097.js"},{"revision":"a88efd810bd9393eabf230057ce46e04","url":"assets/js/247783bb.a74fcdcc.js"},{"revision":"0930516418f7662113cb974a7fd53fea","url":"assets/js/2598.98471a39.js"},{"revision":"41cc79e8bba4e9e7d103abf9d81174a3","url":"assets/js/278d831b.992b8962.js"},{"revision":"74fc01d8b038ab9db58a1c415ba65ce6","url":"assets/js/27da239e.1d0d7425.js"},{"revision":"bc8246d38bb2f8c0e5491758101072ad","url":"assets/js/2c700dca.c63090b6.js"},{"revision":"85309e508415392b60084b6d446d66e6","url":"assets/js/2c714a47.b164f06e.js"},{"revision":"aadeb74b624c58c13f65d510623707aa","url":"assets/js/3bd92c1c.f1981afb.js"},{"revision":"8590127812fc071efb22e7fda3877dce","url":"assets/js/3ca010ae.252c1d42.js"},{"revision":"9bdd958c9706d2e2fb213b9bae871082","url":"assets/js/417802b6.730aeaf9.js"},{"revision":"d2e84a94ecb0c727911e163beaff5fcb","url":"assets/js/444147dc.f6de4825.js"},{"revision":"d1dfd0acbea76fa8b0c2e9c915680498","url":"assets/js/4542f1aa.92e4aa1c.js"},{"revision":"1712749483f266119c459421cf506d07","url":"assets/js/45c35fe9.7f84a6e2.js"},{"revision":"0fa9a9a83df42a4b65b8763a2c6afc9b","url":"assets/js/4735cba8.4687695e.js"},{"revision":"de42b4d7a348bd40b2a1f123fd20d805","url":"assets/js/59b068d1.f96d52ee.js"},{"revision":"9e2f03ba82827862dde9dccaee0d7202","url":"assets/js/59b20312.9634df0b.js"},{"revision":"e14af10c29426acd8e2dbc8a1b5ef685","url":"assets/js/5b44df2c.8ea124c2.js"},{"revision":"03a4a89805c0851c75b0b06a15b73b4e","url":"assets/js/6057.225d7284.js"},{"revision":"cc54606d2dbca76215a0708ddbd428d1","url":"assets/js/6794d4cd.0fc13caf.js"},{"revision":"8e4b022002c28e58f732043af63545f5","url":"assets/js/6856bc5e.23d94f41.js"},{"revision":"14a42f92e66696648383333d579a9d68","url":"assets/js/68e633d4.86432c55.js"},{"revision":"cecea61acc69794fd8ba5b7dee79d447","url":"assets/js/7109fcb9.a96ad930.js"},{"revision":"d948961ae0dd923fa0418ad67dab14e2","url":"assets/js/7556a661.bd4c2679.js"},{"revision":"62b8d97a365c9f23d9c3fc70f33493f9","url":"assets/js/7595.00823f07.js"},{"revision":"6941b01204ea253842a5865e289445c4","url":"assets/js/8085.7864c359.js"},{"revision":"ea465235d511635aab6f040850df7f5b","url":"assets/js/8152.8616137f.js"},{"revision":"159f8677d275bd89d75046154520056a","url":"assets/js/8498.07ec9ae1.js"},{"revision":"990e434e45ae6e2c0d1344465549ca56","url":"assets/js/9076.a6b54708.js"},{"revision":"11e97bb9edef78184234bc5ae452a8a8","url":"assets/js/93426447.93e72bb1.js"},{"revision":"5fd6db20513b91cd7d1fa0151d0ae613","url":"assets/js/935f2afb.64218544.js"},{"revision":"9c41cda8e9a8045bb87f7cfe8477ed73","url":"assets/js/946bd85a.c8f13b33.js"},{"revision":"d1b877a16feef0b5ee61992ad3967d15","url":"assets/js/9518.fa30851e.js"},{"revision":"015eac168127bc5271b8288c87584249","url":"assets/js/9720aa09.a7c3c32a.js"},{"revision":"3cbc217eec67c68fda8ba026c1db9c01","url":"assets/js/a7434565.2559b2e6.js"},{"revision":"fe71d48ca03416ae3fad4050786d2c8c","url":"assets/js/b0dd63e9.82da9487.js"},{"revision":"c4e8aa00105e15977dc7421a479a2796","url":"assets/js/b326c38e.0b7cbfb8.js"},{"revision":"b568acff2c3fa9085731c596243dbc5e","url":"assets/js/b8c60b87.8d2894f2.js"},{"revision":"6a726ceb6abb5d7f3a01eb23e1d890f0","url":"assets/js/ba8b3534.0f5b7dc8.js"},{"revision":"56b333901dd198a5775da319140e3b11","url":"assets/js/bd0ab364.8d419d01.js"},{"revision":"952ee1858089a502367e9246e9ead4af","url":"assets/js/c18f6375.7264e93a.js"},{"revision":"72893776ca2b3aacbfe426ffd16cd8ba","url":"assets/js/c19b4e8e.96c24f56.js"},{"revision":"3671cbdee8f7912f0d2ec1cbc0c454f6","url":"assets/js/cf08fff7.69b8f0a6.js"},{"revision":"9945116a3b79beefac19810f30048ed1","url":"assets/js/d50d5676.cc240b61.js"},{"revision":"86a0def9c9512a0d4cb610177a48bc64","url":"assets/js/d70a5677.4a5524a1.js"},{"revision":"d020406cb43750605404175fd3e8b6ba","url":"assets/js/d8af3d6e.7130581c.js"},{"revision":"32f5ebe659d6fc9c86503f82e2f8bff8","url":"assets/js/de48decc.f4b798ea.js"},{"revision":"12c196dcf5a2f523c73af2b545232f2d","url":"assets/js/decc4105.cbe4428f.js"},{"revision":"f6ffc71ada657c0528c8183f34e13007","url":"assets/js/df759228.e563a2df.js"},{"revision":"25e543829177d2b6a2af8d43dd158a95","url":"assets/js/e36987ae.9b956aa3.js"},{"revision":"e3388d1b084d25f40865d728ee6fbc97","url":"assets/js/ede3a018.79c753eb.js"},{"revision":"62263dbc49973054648a5bdf383639af","url":"assets/js/f92d365d.48a7d0e0.js"},{"revision":"466d14428408b2f38164daf866713085","url":"assets/js/fdb945e9.d8535fcf.js"},{"revision":"6344ae06f00fb323d09707117c22ad4e","url":"assets/js/ff7bed0d.0d30e87d.js"},{"revision":"dcfc9f064bacb602fc18b3a45f5c7d79","url":"assets/js/main.f53f10aa.js"},{"revision":"70b782230406fdd203eae6b45a5d73d5","url":"assets/js/runtime~main.7e2197e2.js"},{"revision":"77df9c0b669bcc983d8d01d450a71f64","url":"index.html"},{"revision":"fff5d7cb0173db614f0ae8eef1ef50f9","url":"intro.html"},{"revision":"bab2661493fc17f2c8627e997754aaea","url":"java-install-update.html"},{"revision":"9de0c1c99854cb76025abff99c9590c3","url":"manifest.json"},{"revision":"3b2f8f351e710bed849af672e0da254a","url":"paper.html"},{"revision":"ea7de4ce26eb1cfd5a0652b074d5184a","url":"paper/aikars-flags.html"},{"revision":"caab9e6e4285e828434b730e505d796e","url":"paper/getting-started.html"},{"revision":"0077344357151eb032eec0f990f85c78","url":"paper/per-world-configuration.html"},{"revision":"46d77fd3c6352384de94dd3c1a39caa0","url":"paper/reference/paper-global-configuration.html"},{"revision":"0a362aefbd93688ab9fea76cf6fdd9a6","url":"paper/reference/paper-per-world-configuration.html"},{"revision":"159adcf5bf01d081c43a77749ef427f8","url":"paper/updating.html"},{"revision":"e14dac0d6a92e1a654e2b922dd1fbcf8","url":"papermc/assets.html"},{"revision":"4bcde9e855a602c1f1a415c2a6e497d0","url":"papermc/contact.html"},{"revision":"9758dd12f2db8851d02345099b7a1370","url":"papermc/downloads-api.html"},{"revision":"9ae7977836214bbf2c15d9b994670fc1","url":"search.html"},{"revision":"d80e356b9a15f019127344f15d97e870","url":"velocity.html"},{"revision":"38e1888fb87a2f49752d60191559a700","url":"velocity/built-in-commands.html"},{"revision":"a62a60369be45347bef7c3f52e4390d7","url":"velocity/comparisons-to-other-proxies.html"},{"revision":"84eeda3817cac84f7c565bf0b00bff66","url":"velocity/configuration.html"},{"revision":"6f46912bae7ffd8d43ffdeba1572f3f9","url":"velocity/credits.html"},{"revision":"e35adb7d4f7a4a3d2e8180709a16c1fe","url":"velocity/developers.html"},{"revision":"0300c2b582e0ffdd4fb5b0e7ee40a27a","url":"velocity/developers/api-basics.html"},{"revision":"473be151e1ee8cc44bd32c8f6dda23fc","url":"velocity/developers/command-api.html"},{"revision":"db6000e02ed51a8d6450deeb912e76ad","url":"velocity/developers/creating-your-first-plugin.html"},{"revision":"3fbf22f9c123a5c2e43f89054d147687","url":"velocity/developers/dependency-management.html"},{"revision":"0ce2c7f067fe50c68a3d784f020cb054","url":"velocity/developers/event-api.html"},{"revision":"55a1209f15859e985c73fd2bc48454dc","url":"velocity/developers/pitfalls.html"},{"revision":"8f5311f42f771f7cbb0e7d9ecbf61a70","url":"velocity/developers/porting-plugins-from-velocity-1.html"},{"revision":"e2a59e91cfcf8a2a1ca3f49cb768f4c7","url":"velocity/developers/scheduler-api.html"},{"revision":"2ce062a841c5d6df44c802cb6a6fbb2f","url":"velocity/faq.html"},{"revision":"29b1201de662c561519923b22ca4c645","url":"velocity/getting-started.html"},{"revision":"80b5d2a379294f939395a464008bb48e","url":"velocity/migration.html"},{"revision":"a1bbf07eb04fb5b3c38240b3dc60c961","url":"velocity/player-information-forwarding.html"},{"revision":"19bdd51aac58db69645df54b4a122617","url":"velocity/security.html"},{"revision":"c609a42c58d225835871fa186ca0109e","url":"velocity/server-compatibility.html"},{"revision":"7c26c1c10ba838c1b7568a7f851bcd28","url":"velocity/tuning.html"},{"revision":"15af8c776bb0d51ccd736010806673b3","url":"velocity/why-velocity.html"},{"revision":"6b7f4374257f5cbf91fc18501d4ced7d","url":"waterfall.html"},{"revision":"481cf12318f449f5531d3add7ebb7c17","url":"waterfall/configuration.html"},{"revision":"561ef9133fff5e5a17b1754ad673b226","url":"waterfall/getting-started.html"},{"revision":"728cb4af05ea79eca18631a0a7f5950e","url":"assets/images/papermc_logomark_500-b69f67cabd469b3d0485c20a912e84fc.png"},{"revision":"2cc84f324fa1386d14831b64d1c303fb","url":"assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"69b156c91d208aff640e1016c38fb004","url":"img/logo.svg"},{"revision":"23c02a74c76235daf1a513381ba42449","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();