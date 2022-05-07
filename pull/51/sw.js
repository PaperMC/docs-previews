(()=>{"use strict";var e={258:()=>{try{self["workbox:core:6.5.1"]&&_()}catch(e){}},60:()=>{try{self["workbox:precaching:6.5.1"]&&_()}catch(e){}},18:()=>{try{self["workbox:routing:6.5.1"]&&_()}catch(e){}},847:()=>{try{self["workbox:strategies:6.5.1"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(258);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(60);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(847);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(18);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"b353506fa7db66305a4d547397693045","url":"__docusaurus/debug.html"},{"revision":"d786eb4e01cdaa7e319bb7cf24c22b86","url":"__docusaurus/debug/config.html"},{"revision":"aa1c96023efcd5326dfdc8ae2fd6a5fd","url":"__docusaurus/debug/content.html"},{"revision":"13de6abb28003a98b24acfd0abfca89a","url":"__docusaurus/debug/globalData.html"},{"revision":"8da0689b695d43ebd1628b2013a9037a","url":"__docusaurus/debug/metadata.html"},{"revision":"e247fc6e02540f946721990a769cd433","url":"__docusaurus/debug/registry.html"},{"revision":"147ed306146cbe0d0c23f689767c4e7f","url":"__docusaurus/debug/routes.html"},{"revision":"7a7a8870752ff98ee338b288899dc224","url":"404.html"},{"revision":"ece482227960b41bbb98974b366c4b41","url":"assets/css/styles.83cbfd62.css"},{"revision":"afcf2fb19cc4e41a527989a2b2bd7ca4","url":"assets/js/107.5017e18c.js"},{"revision":"1bb1e4a3c3c3abb8d1dc7cc30ceaa7e6","url":"assets/js/1109.06ca7faa.js"},{"revision":"a1f6a6467da0c9e6ee161e7fd6ba2ef5","url":"assets/js/1230.99587a79.js"},{"revision":"c0e0fae95d4c48d5e7b1f962a428ae89","url":"assets/js/1284.6118732d.js"},{"revision":"521d6c540239efbae8b569c2730e29cd","url":"assets/js/132.df1399ae.js"},{"revision":"f3081033195b2b287de161d23953a060","url":"assets/js/1467.0fa68c95.js"},{"revision":"6dae35ce999905349a0851576c57485a","url":"assets/js/1512.f4c6ab5a.js"},{"revision":"70b3425d4c6e7bbcc8aa3adcb5c26e85","url":"assets/js/1798.4579f0bf.js"},{"revision":"0b97506677cca7786f4c6cac968495d0","url":"assets/js/1812.f78f93ce.js"},{"revision":"9b4fd1c058e76a08b941de8a810ae0a7","url":"assets/js/2144.3972ac77.js"},{"revision":"cb6a951e81f9c819da6952bbd246313c","url":"assets/js/2377.781c02c6.js"},{"revision":"a0b762612db24f766130a4b44a49f90d","url":"assets/js/244.ab026e71.js"},{"revision":"796885d785861261b6a6f06f7f19e3b0","url":"assets/js/2486.12e2ce17.js"},{"revision":"8392d0e942fec7e4ed98e18a674300c5","url":"assets/js/2667.6a92b9c1.js"},{"revision":"94614e4ea8c7cedd5143afa02259b7e9","url":"assets/js/2703.af889ccb.js"},{"revision":"9bfb26a938b8e4a64bfde0b3ec653219","url":"assets/js/2790.3af9a0a3.js"},{"revision":"9aea2222fa56e853e29267b346c5a052","url":"assets/js/3210.c80a0437.js"},{"revision":"81ec938809abce6360220da80c93ee52","url":"assets/js/3414.28bc6383.js"},{"revision":"54b2ede528aae8157363aba249c0d2c9","url":"assets/js/3529.1eed9b6c.js"},{"revision":"8aa01c73576d752bfc844866a4cbe5d7","url":"assets/js/3541.d58d8514.js"},{"revision":"5109035cdf9f60f225d16548777be369","url":"assets/js/3678.c22c384d.js"},{"revision":"63cfff3a935342087e7996732ae80b21","url":"assets/js/3742.c709683e.js"},{"revision":"412db3442e6dc55e6f4bddf1e673974d","url":"assets/js/3769.99aee934.js"},{"revision":"9bae2cad17084035cace133db6c56086","url":"assets/js/390.3e68341f.js"},{"revision":"4c628edada90c0129168e66ae072a02b","url":"assets/js/3984.1615e72b.js"},{"revision":"f032b113191f5560e8dce93d331adf28","url":"assets/js/4202.4617a074.js"},{"revision":"e8eab4eeb675bb545f8a6ad6cd1e57f3","url":"assets/js/4282.6d267b54.js"},{"revision":"cee18ecf82dcf1e16703a70251532903","url":"assets/js/4296.2ef4746a.js"},{"revision":"57d016007a521cf7d0b52261bf664b6c","url":"assets/js/4413.910ad408.js"},{"revision":"d13ef0961e4895235af36820d9d4f77b","url":"assets/js/4459.700b6066.js"},{"revision":"2bacbec6986911fd6ab5d7c931728fc6","url":"assets/js/4474.9ce86ba3.js"},{"revision":"08fd06ee11e50722ced5e02a40db3b1b","url":"assets/js/4508.85bfe4d8.js"},{"revision":"81f5086817a08b9c9ae6225a952b988c","url":"assets/js/4549.5a52601b.js"},{"revision":"b681d6c4053b9c702d454763d1db3b00","url":"assets/js/4597.4bea1ca2.js"},{"revision":"d4b634662d1b4ddcf052a7cc0ebcf30c","url":"assets/js/462.951dbb60.js"},{"revision":"00c086ae175429b5f7c2ea51cb746f10","url":"assets/js/4864.1b6304e8.js"},{"revision":"6e55cf4ff3c44e47ba6819c31be14f78","url":"assets/js/5260.ef8b5664.js"},{"revision":"1ed8ffcc13b1b8fe9f085000c53d88ae","url":"assets/js/5279.659b2572.js"},{"revision":"7fb7091b9ab35a532fc26815ae46c8ce","url":"assets/js/5382.30070c05.js"},{"revision":"caf79d7d95254b784632740c562c083b","url":"assets/js/5441.160077ec.js"},{"revision":"1aa39d18289ce0ad6d3f4b8b792d8180","url":"assets/js/5528.7310395c.js"},{"revision":"5062b24f2133829437da128b467b63a0","url":"assets/js/5550.987efb83.js"},{"revision":"82afb9ecbf244719abfbd0f38d4b67fb","url":"assets/js/560.a7d3e631.js"},{"revision":"cea9fcb8101ffbc3abccd58bdf587b79","url":"assets/js/5745.c0b8e8e0.js"},{"revision":"05676477f50f2dcf8df2a1dd30f518b3","url":"assets/js/5902.1975ac87.js"},{"revision":"7dba7a05b5db3a81b2e6de4e095f057d","url":"assets/js/6049.c00eb9cc.js"},{"revision":"e263a7a2fc948475ef93bf6b79787c80","url":"assets/js/6158.00d2d9c5.js"},{"revision":"dd44bc0c43e95b48f6c6bfd397d9bc35","url":"assets/js/619.7366991b.js"},{"revision":"acc053847c525e8a7f1e8cc39a75813e","url":"assets/js/6267.8a435e34.js"},{"revision":"e96ebb3c66ba7ff569de64ed3057a483","url":"assets/js/6832.6cfa529b.js"},{"revision":"c1d3426b3d4dff81b012a4b981d64f3e","url":"assets/js/6833.12c6d750.js"},{"revision":"a09c9f179f8b3b5263045bef98decee1","url":"assets/js/6842.c75a8ef4.js"},{"revision":"adb88099f32529928cc376b064d11f8f","url":"assets/js/7055.2a7f054c.js"},{"revision":"03e7ca8c6fa82939e55d6d17d55b64a0","url":"assets/js/7085.38534a25.js"},{"revision":"4370115b29c1231d576ace4a4921464e","url":"assets/js/7162.8da99b5b.js"},{"revision":"c158a6b5721eede8d2f58d2c4c1265c2","url":"assets/js/7310.aa2d09d8.js"},{"revision":"9551460563bd731ad551d0c301c4b769","url":"assets/js/7426.7671fd40.js"},{"revision":"d48c329297eb720b509ade2f8f38220c","url":"assets/js/7572.6bd3b6da.js"},{"revision":"7781a878afa076d5a3ca8eea11d69bf7","url":"assets/js/7595.1508737a.js"},{"revision":"471c5f3248a350e16395ea142ba0d538","url":"assets/js/7778.5fad136d.js"},{"revision":"87efa1ca85c6b64308e385b0bb073269","url":"assets/js/7855.39a773bd.js"},{"revision":"1d868233e17f92b93eab76d5f243bf6f","url":"assets/js/7937.5c080cb0.js"},{"revision":"d61fdf64e6f994434472296d1dc0c4c0","url":"assets/js/8108.7ec44c91.js"},{"revision":"9e8c8b6250e654a93f2cd3a0078bab0b","url":"assets/js/8119.aab80371.js"},{"revision":"004d6c200ff0ab9177e538bd2d1e9888","url":"assets/js/8179.e81d7f2c.js"},{"revision":"baeae5830b9106aa4e6ef36b14bf6cbf","url":"assets/js/8330.dfd57c37.js"},{"revision":"c179928af6da7bcd1002ef7e01fe1f6c","url":"assets/js/8340.f24f19dd.js"},{"revision":"c64ffba805c1e4e1016b6ac8dd06229d","url":"assets/js/8664.afd3bb47.js"},{"revision":"46fcff14d69061d5b27b9f9541a18398","url":"assets/js/8772.0b0bc4e1.js"},{"revision":"77d12ae5a3f83dc3c48ba20e26b7194b","url":"assets/js/9076.58376b68.js"},{"revision":"760503503b84bd87ae7df7db68c571ec","url":"assets/js/9108.59df96ad.js"},{"revision":"f7a0d27fe6316646639a3a2d8337e20d","url":"assets/js/9418.68e02df6.js"},{"revision":"5cedfb340b75f5120afb0adbe09a0c2d","url":"assets/js/9641.ab81fe52.js"},{"revision":"cffcef0fb2a72972f9ce0b71dba7aa0e","url":"assets/js/9768.4d0fcb33.js"},{"revision":"e08340c97745708d3183c57e2e1df6b6","url":"assets/js/9849.0e2492f3.js"},{"revision":"c27e00d5f3fc71d25fe0791d298856dd","url":"assets/js/main.02d45b00.js"},{"revision":"b147bdb963b8d67495255c7000bc9561","url":"assets/js/runtime~main.ffb8fac4.js"},{"revision":"8b6f3be316fdd42586235f724ff5c226","url":"category/common.html"},{"revision":"547acca6e0a007dc73a018345fd9a584","url":"category/paper/how-to-guides.html"},{"revision":"17b132504ae8ef55a3ae5c10c5e1452b","url":"category/paper/reference.html"},{"revision":"5191d78a20e57372a5319b89035373f8","url":"category/papermc.html"},{"revision":"5050e19d67f639704312cb79fb7f6d35","url":"category/velocity/developers/api.html"},{"revision":"b850ea763c3ffb846430f625eeead451","url":"category/velocity/developers/getting-started.html"},{"revision":"c4e748bf4b2a667bc132ce3eb1800133","url":"category/velocity/developers/how-to-guides.html"},{"revision":"bdbb87bdf0ae43f1aadee79a7d119b8f","url":"category/velocity/how-to-guides.html"},{"revision":"e283874fc0232b0edf96eadacdc8245a","url":"category/velocity/reference.html"},{"revision":"48b3b05b7f6885360438600ba4a1233b","url":"index.html"},{"revision":"c585274a6fd1ca33c8253a63ea6920b7","url":"intro.html"},{"revision":"946f1ed771b5ba45f6f9f9801149deb6","url":"java-install-update.html"},{"revision":"9de0c1c99854cb76025abff99c9590c3","url":"manifest.json"},{"revision":"2b9f2ac86a713e7857216c3c087aa1f6","url":"paper.html"},{"revision":"9ac8e8bb6b7f0e7f05b334ea308d27a7","url":"paper/aikars-flags.html"},{"revision":"7c50b034ecc07e46863a88b4727203c3","url":"paper/anti-xray.html"},{"revision":"97c64627e9581a63b920711a5d415e40","url":"paper/getting-started.html"},{"revision":"1833fe8e8a9f6ff75b2a988b7755aa4a","url":"paper/getting-started/adding-plugins.html"},{"revision":"299fd2acb12a0b400088339833b020b5","url":"paper/migration.html"},{"revision":"82d64462b77e45c569affbc3439ba9d1","url":"paper/per-world-configuration.html"},{"revision":"8a0155b2bb245f4db3a6dcec5593ce82","url":"paper/reference/paper-global-configuration.html"},{"revision":"fa952d61aa70d1f7b02e291305bfbf26","url":"paper/reference/paper-per-world-configuration.html"},{"revision":"7c220edde7878a2548425fd98b35862b","url":"paper/updating.html"},{"revision":"953d3471f750502bc92b2bddac177acb","url":"papermc/assets.html"},{"revision":"b2aed47d75b69d2d3d26e1b6ef610463","url":"papermc/contact.html"},{"revision":"0a3b8e138ab12d844f487db8228f1446","url":"papermc/downloads-api.html"},{"revision":"11e37a9265de15e582c3b57dff8b8607","url":"search.html"},{"revision":"ea676d2628ad17dfe4279d3448d2fdaf","url":"velocity.html"},{"revision":"3c651a24dc4fe6cff8df196dd2d709c9","url":"velocity/built-in-commands.html"},{"revision":"8cdf3e8148bf232cc8d703a478e8d429","url":"velocity/comparisons-to-other-proxies.html"},{"revision":"24fd38f2fd16ee897a97e7876b15180c","url":"velocity/configuration.html"},{"revision":"0e680b5ae0c1c746b8ea77447b8ad869","url":"velocity/credits.html"},{"revision":"414d23378b58ed3324450f19a7aae5bb","url":"velocity/developers.html"},{"revision":"9658e61e1efd8ac72988cb250a865464","url":"velocity/developers/api-basics.html"},{"revision":"e0ecdb983b2d6e74797b8c145414a97d","url":"velocity/developers/command-api.html"},{"revision":"875d7a06bc378aeba5149828367379e3","url":"velocity/developers/creating-your-first-plugin.html"},{"revision":"69e5c5c286f8e105f6230ad76a19461e","url":"velocity/developers/dependency-management.html"},{"revision":"b2337ad1e0f68fdd958412881f92cafb","url":"velocity/developers/event-api.html"},{"revision":"e0e6e484d8043d628d43dd339a9fe60e","url":"velocity/developers/pitfalls.html"},{"revision":"ba6cfde192401b17ee1675132963081a","url":"velocity/developers/porting-plugins-from-velocity-1.html"},{"revision":"58d562a8cd723e7a16ca04345203b513","url":"velocity/developers/scheduler-api.html"},{"revision":"52ed0298f85241b973b1847505954aec","url":"velocity/faq.html"},{"revision":"a34c700dfdb98e8a2ae02fa6b8e083fa","url":"velocity/getting-started.html"},{"revision":"c9ed4019f818b70681fdd9a673a56c9f","url":"velocity/migration.html"},{"revision":"2045e2de93de98cc55442eea4a622b15","url":"velocity/player-information-forwarding.html"},{"revision":"d9a75f243b868d21896c0155c970ceb6","url":"velocity/security.html"},{"revision":"63db355fef003cf867607400818ebce2","url":"velocity/server-compatibility.html"},{"revision":"1ffab7318365d621d7d8fc4d0fa97e43","url":"velocity/tuning.html"},{"revision":"909f21cda63fc435969b647e98b85680","url":"velocity/why-velocity.html"},{"revision":"4c22ae4003125747827653307b3d135a","url":"waterfall.html"},{"revision":"4346f06674df1f7d71391abfe2919bd7","url":"waterfall/configuration.html"},{"revision":"35003e3e223e577498ef30d8b5de050a","url":"waterfall/getting-started.html"},{"revision":"4f12cdd8785605ddeb7c202a196e7d35","url":"assets/images/anti-xray-nether-05e6e894ce876f94d4463e1f491d1030.png"},{"revision":"ac61b2cd736aeb124ece24c782c63560","url":"assets/images/anti-xray-overworld-3443fb41851dc5d9082f2956268232a1.png"},{"revision":"728cb4af05ea79eca18631a0a7f5950e","url":"assets/images/papermc_logomark_500-b69f67cabd469b3d0485c20a912e84fc.png"},{"revision":"2cc84f324fa1386d14831b64d1c303fb","url":"assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"69b156c91d208aff640e1016c38fb004","url":"img/logo.svg"},{"revision":"23c02a74c76235daf1a513381ba42449","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();