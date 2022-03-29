(()=>{"use strict";var e={258:()=>{try{self["workbox:core:6.5.1"]&&_()}catch(e){}},60:()=>{try{self["workbox:precaching:6.5.1"]&&_()}catch(e){}},18:()=>{try{self["workbox:routing:6.5.1"]&&_()}catch(e){}},847:()=>{try{self["workbox:strategies:6.5.1"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(258);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(60);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(847);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(18);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"cb63382673b08bf021953fbad4982bd4","url":"__docusaurus/debug.html"},{"revision":"8c757bc1a775ccad233448beefcf9697","url":"__docusaurus/debug/config.html"},{"revision":"a060f9ef6d02116586037fbfb9ccb2c9","url":"__docusaurus/debug/content.html"},{"revision":"d0dcfe8714e5b8b84f2449cf1a360849","url":"__docusaurus/debug/globalData.html"},{"revision":"a1ed0510ea5f18191949b25493f057cd","url":"__docusaurus/debug/metadata.html"},{"revision":"3352c109e62e67600ad1f7bbcf5115fb","url":"__docusaurus/debug/registry.html"},{"revision":"60e673bb94b7199be02234c2ddfa33c5","url":"__docusaurus/debug/routes.html"},{"revision":"70de0083038d80a32efa696f6c2c3c27","url":"404.html"},{"revision":"f87e5e8cec6692f6de26fe92ab13120b","url":"assets/css/styles.90b4d181.css"},{"revision":"6831f8f6f46cb7cef88bb27fc7c8e086","url":"assets/js/08c91acd.40d1194c.js"},{"revision":"6ccbd9adb0a68348995fd99db5a3e11d","url":"assets/js/1467.743ca377.js"},{"revision":"791161ec940eb5eb6d6a8d1389a9e4aa","url":"assets/js/17896441.3f2f9c3c.js"},{"revision":"03fc633d6822d08750f9ea17d806f6c1","url":"assets/js/19c9239f.8cbb532e.js"},{"revision":"d133e164a709095108f39074718a6145","url":"assets/js/1a4e3797.fb222ca8.js"},{"revision":"f91f46b1ffbf436f80a85c740afa82a8","url":"assets/js/1be78505.11638ba4.js"},{"revision":"3ae232b4d05ca4bcacfdf71fb21ae2e8","url":"assets/js/1df93b7f.57452ea9.js"},{"revision":"2726cd3a33e86250964c8d7ba8af7684","url":"assets/js/23374ca6.0c7bf613.js"},{"revision":"73385f4115e4736a0463a7e23e20a969","url":"assets/js/23abe487.abc03e43.js"},{"revision":"0e744ca68c90768fee8aa6d61791e70e","url":"assets/js/246f2c6f.ee0b3054.js"},{"revision":"a88efd810bd9393eabf230057ce46e04","url":"assets/js/247783bb.a74fcdcc.js"},{"revision":"0930516418f7662113cb974a7fd53fea","url":"assets/js/2598.98471a39.js"},{"revision":"ddd11c2b141622556d0d4eb8df918030","url":"assets/js/278d831b.207d7fcb.js"},{"revision":"afaf2b8785b262b45ba2a3b926a1e825","url":"assets/js/27da239e.c8374971.js"},{"revision":"59cf15ba4ed1391db2966446f64a09b5","url":"assets/js/2c700dca.06e49074.js"},{"revision":"f3951f989aa41a26cd6a99647b75043f","url":"assets/js/2c714a47.a50c6a85.js"},{"revision":"32c36870a4cce24178f090099be1854a","url":"assets/js/3bd92c1c.56b95159.js"},{"revision":"c724ed1bc0e9f0209b22ba2b52fac18a","url":"assets/js/3ca010ae.25b7fe39.js"},{"revision":"8fc78b4c3ca8e0ed6a798ecc28d3b48f","url":"assets/js/417802b6.66883b61.js"},{"revision":"39c7b31608d09fd6b36c951e294e0d70","url":"assets/js/444147dc.8f3f4fab.js"},{"revision":"1d982be5dbd47ee6e1daa4d5d64706f7","url":"assets/js/4542f1aa.2b60252f.js"},{"revision":"53a9317745bc98b5a6250b64f9f42397","url":"assets/js/45c35fe9.0c32ea1d.js"},{"revision":"d0349305f3df07a2b8a52b0c61a949c7","url":"assets/js/4735cba8.e83bdf0a.js"},{"revision":"de42b4d7a348bd40b2a1f123fd20d805","url":"assets/js/59b068d1.f96d52ee.js"},{"revision":"e83553bd5aa750267ca679a912870d91","url":"assets/js/59b20312.1c7087d8.js"},{"revision":"e14af10c29426acd8e2dbc8a1b5ef685","url":"assets/js/5b44df2c.8ea124c2.js"},{"revision":"03a4a89805c0851c75b0b06a15b73b4e","url":"assets/js/6057.225d7284.js"},{"revision":"cc54606d2dbca76215a0708ddbd428d1","url":"assets/js/6794d4cd.0fc13caf.js"},{"revision":"3ce4580de6b6f07754a4f06f3da1cdef","url":"assets/js/6856bc5e.6389fce3.js"},{"revision":"14a42f92e66696648383333d579a9d68","url":"assets/js/68e633d4.86432c55.js"},{"revision":"777c9d7a0a8b4e2c97ee3b12efbe8e31","url":"assets/js/7109fcb9.953de4b1.js"},{"revision":"89eda605846e05f6915ff351c87a1e7e","url":"assets/js/7556a661.60ca4697.js"},{"revision":"62b8d97a365c9f23d9c3fc70f33493f9","url":"assets/js/7595.00823f07.js"},{"revision":"6941b01204ea253842a5865e289445c4","url":"assets/js/8085.7864c359.js"},{"revision":"ea465235d511635aab6f040850df7f5b","url":"assets/js/8152.8616137f.js"},{"revision":"159f8677d275bd89d75046154520056a","url":"assets/js/8498.07ec9ae1.js"},{"revision":"990e434e45ae6e2c0d1344465549ca56","url":"assets/js/9076.a6b54708.js"},{"revision":"d93b3d97849d5a5959e8bbe98b191cb0","url":"assets/js/93426447.43002263.js"},{"revision":"48bdd4c1fc5a1c6d6341449eeb3dacea","url":"assets/js/935f2afb.9d19941f.js"},{"revision":"9c41cda8e9a8045bb87f7cfe8477ed73","url":"assets/js/946bd85a.c8f13b33.js"},{"revision":"d1b877a16feef0b5ee61992ad3967d15","url":"assets/js/9518.fa30851e.js"},{"revision":"4eb37712b110a523faa666427afe0610","url":"assets/js/9720aa09.75e3ac3e.js"},{"revision":"3cbc217eec67c68fda8ba026c1db9c01","url":"assets/js/a7434565.2559b2e6.js"},{"revision":"c318beb577745219afb4bf3fa91726b3","url":"assets/js/b0dd63e9.5a8feb36.js"},{"revision":"2ecba74568c1ca2e4e997f0e46c0bd2d","url":"assets/js/b326c38e.0c84da1c.js"},{"revision":"50ef0c7193b6bdcbcdcae3a4b596892f","url":"assets/js/b8c60b87.fee15701.js"},{"revision":"6a726ceb6abb5d7f3a01eb23e1d890f0","url":"assets/js/ba8b3534.0f5b7dc8.js"},{"revision":"0a3e558de22c56b7a25888911991bc37","url":"assets/js/bd0ab364.4d8546a6.js"},{"revision":"7d12efb65ff72187ee51c77e0bb32ae5","url":"assets/js/c18f6375.eca5b5cc.js"},{"revision":"94ac101aacd33689f0f18239865f1b05","url":"assets/js/c19b4e8e.b1aa86fb.js"},{"revision":"3738f1af0a69dd073bb87d3c72a73ab2","url":"assets/js/cf08fff7.25122201.js"},{"revision":"13a95c302ab72112b5845b769b3fae5d","url":"assets/js/d50d5676.463910ed.js"},{"revision":"2c5f3bcb4fed9d3b634e0de3b4221002","url":"assets/js/d70a5677.65847ee4.js"},{"revision":"966a9e4f2b0833543df405fe4b22595b","url":"assets/js/d8af3d6e.b4c7ecd6.js"},{"revision":"311394f91cca632d279804b3ae852a6d","url":"assets/js/de48decc.9a1214d4.js"},{"revision":"72970c495507b845210c855b22730b10","url":"assets/js/decc4105.b85b4c76.js"},{"revision":"35deacf3909b27a9056be427a53b33cb","url":"assets/js/df759228.07a82c94.js"},{"revision":"5c742442c2cbd7e9c631047f4d91d5b3","url":"assets/js/e36987ae.a57bc57a.js"},{"revision":"e3388d1b084d25f40865d728ee6fbc97","url":"assets/js/ede3a018.79c753eb.js"},{"revision":"e4e8b05968c713a75365d8376f58cd4c","url":"assets/js/f92d365d.15999e82.js"},{"revision":"d8831c498abea6f09a11e957277abf19","url":"assets/js/fdb945e9.28321dc1.js"},{"revision":"c325134559015edaa6902a4e520604f7","url":"assets/js/ff7bed0d.e6629884.js"},{"revision":"f46b75ab58825b6e8b69da13035b1320","url":"assets/js/main.ee9a1063.js"},{"revision":"1758b2cf10a7874e3bf37af44dff2429","url":"assets/js/runtime~main.466fa23d.js"},{"revision":"a32bdbaa95a3262ee38ebb3ef6a7360b","url":"index.html"},{"revision":"f65e3b71fba46c0e8e666a89ce1d40e3","url":"intro.html"},{"revision":"61de35492823adcb933c12877d566179","url":"java-install-update.html"},{"revision":"9de0c1c99854cb76025abff99c9590c3","url":"manifest.json"},{"revision":"a612e4127c2136a3369845c5c317b028","url":"paper.html"},{"revision":"7cb28fe0441a3d67e2f144c1995d5dba","url":"paper/aikars-flags.html"},{"revision":"6ded8e81e519e9fbecfccfb534844d03","url":"paper/getting-started.html"},{"revision":"268976fc9cf41bd7efd5fb4a33c7341b","url":"paper/per-world-configuration.html"},{"revision":"cd0a475c3a9cb679aa297775915f945c","url":"paper/reference/paper-global-configuration.html"},{"revision":"7311a6b5ea9049fe1abf3d294adbe2f9","url":"paper/reference/paper-per-world-configuration.html"},{"revision":"3732c665491026b6aa8e7b28535e1602","url":"paper/updating.html"},{"revision":"c7efe431e67352331a4e627abdc99e04","url":"papermc/assets.html"},{"revision":"4501814954b409b12eba42aebbba6bb2","url":"papermc/contact.html"},{"revision":"0b57501ad7a43881a3b518fac951ace7","url":"papermc/downloads-api.html"},{"revision":"a3de2c79f70fb802c9038b42ab3d4fb4","url":"search.html"},{"revision":"04c9c674265caebb10746d5b4303c1b5","url":"velocity.html"},{"revision":"a74ff59718f64c9d70ba32d640ffe4a9","url":"velocity/built-in-commands.html"},{"revision":"93123ced2fe2e36668baf68246569341","url":"velocity/comparisons-to-other-proxies.html"},{"revision":"7c4bcb87c59988745d9c31a14dae846f","url":"velocity/configuration.html"},{"revision":"22449a68834229288c727ab05bc6227d","url":"velocity/credits.html"},{"revision":"edc65bcd92fe8d88a2f8234aa957d774","url":"velocity/developers.html"},{"revision":"d166f3e0a601067ca9f5b2c6bf3005ff","url":"velocity/developers/api-basics.html"},{"revision":"d90f33a516563f7219c25ce2c142bfff","url":"velocity/developers/command-api.html"},{"revision":"53788cc4fe753fff35c86beed717479b","url":"velocity/developers/creating-your-first-plugin.html"},{"revision":"5265e9f5015ac30fcd1eb4f26fc49a66","url":"velocity/developers/dependency-management.html"},{"revision":"e3badbff31dc00713234a3bd08c102bc","url":"velocity/developers/event-api.html"},{"revision":"e26b2c210fee0874df4da92b61b8d101","url":"velocity/developers/pitfalls.html"},{"revision":"0df965c79d777d150345f77b81e2e4bb","url":"velocity/developers/porting-plugins-from-velocity-1.html"},{"revision":"7a8734d964a64e23911866ccdbab7332","url":"velocity/developers/scheduler-api.html"},{"revision":"e07e3e23f698935074ab9436be6ccca2","url":"velocity/faq.html"},{"revision":"c1f643272a319e1a26d96fbbd83fd4d4","url":"velocity/getting-started.html"},{"revision":"1a1c4d75c974f5b92ac443dd7bde9a3f","url":"velocity/migration.html"},{"revision":"0eb2713be5e1b0fa787bcc6d0f653612","url":"velocity/player-information-forwarding.html"},{"revision":"6dc08e5496c917771e682476eebcdb11","url":"velocity/security.html"},{"revision":"6db2f11b64cd4a148130c56014b99b4d","url":"velocity/server-compatibility.html"},{"revision":"6211affeee6748467c9a591207436cf8","url":"velocity/tuning.html"},{"revision":"c548467d9b1b1820f4329c5bc49533c5","url":"velocity/why-velocity.html"},{"revision":"6261b7a6f2fbe1855a2f61799d7ead5d","url":"waterfall.html"},{"revision":"b087a57bdf68db466fd94808aa128c66","url":"waterfall/configuration.html"},{"revision":"4d34fadc433eb702f8aef63fd8aa54a8","url":"waterfall/getting-started.html"},{"revision":"728cb4af05ea79eca18631a0a7f5950e","url":"assets/images/papermc_logomark_500-b69f67cabd469b3d0485c20a912e84fc.png"},{"revision":"2cc84f324fa1386d14831b64d1c303fb","url":"assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"69b156c91d208aff640e1016c38fb004","url":"img/logo.svg"},{"revision":"23c02a74c76235daf1a513381ba42449","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();