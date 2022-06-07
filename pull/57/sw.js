(()=>{"use strict";var e={264:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},866:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},411:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},646:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(264);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(866);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(646);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(411);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"6f2ceaf35610b9da1a99de9c9a3f0aba","url":"__docusaurus/debug.html"},{"revision":"cc8dd338278da4178bf53f1af834ea10","url":"__docusaurus/debug/config.html"},{"revision":"04d71da074aa427234cf39117304fc07","url":"__docusaurus/debug/content.html"},{"revision":"943bbfff7d4558c432e7f2b1f0304ddf","url":"__docusaurus/debug/globalData.html"},{"revision":"d83104bed74651fd6732dc78bfc83824","url":"__docusaurus/debug/metadata.html"},{"revision":"df93dc7a3689d3b1873fa36d2bc08f95","url":"__docusaurus/debug/registry.html"},{"revision":"f40b777a7c95b9e4494ff4969c9f9975","url":"__docusaurus/debug/routes.html"},{"revision":"727603ddd9fdea58a7218a063a34ea65","url":"404.html"},{"revision":"08461f4c8e520a1addd617f4d9b87484","url":"assets/css/styles.7527212f.css"},{"revision":"d46b907283dbb570b66a5627586af885","url":"assets/js/1109.5c4bc74f.js"},{"revision":"b273aa3ccaab2ee6476413f57e82b941","url":"assets/js/1118.94eba042.js"},{"revision":"7ff72ffd9d1c10babfb2ddb441731135","url":"assets/js/1572.140dda12.js"},{"revision":"821ca35f3f9affbe1319f0dddcfd1460","url":"assets/js/2376.78e2bd17.js"},{"revision":"c961636a11a0ec952b2b9cf711204cb8","url":"assets/js/2506.66789cc8.js"},{"revision":"96b932d8aec26355bca9ac19c9146836","url":"assets/js/2694.aff74091.js"},{"revision":"a6351b17654e46284b81e16a828f0a77","url":"assets/js/2771.5496a11c.js"},{"revision":"cc862cca3f2593367edb7548fe145eeb","url":"assets/js/2790.0d0f86cd.js"},{"revision":"38de6aedf508b3a2552c37e114070b0e","url":"assets/js/2896.dda5eafd.js"},{"revision":"cfd8cfcc7d11fbc13e0789f474190919","url":"assets/js/2920.4af3c39b.js"},{"revision":"cfaa047546738690de0b503c12a1462c","url":"assets/js/3029.d4bd1a9c.js"},{"revision":"d903459adc469f927bea0f995fce40c7","url":"assets/js/3046.b76dc5a5.js"},{"revision":"5ec675e6dbdec906d85aec85c9aa962f","url":"assets/js/3497.cfe5b433.js"},{"revision":"4142662a883efbdcbcf2e6d208ee6133","url":"assets/js/3517.087608bc.js"},{"revision":"3e32ac0dae0606825571dbb7e9504c9a","url":"assets/js/3769.0c9db71a.js"},{"revision":"7e615cef84c290f9162dd3517e748629","url":"assets/js/3850.b244fab0.js"},{"revision":"b708cab3fc2a0d63484c5dfd5be7caad","url":"assets/js/3984.6a61f4ae.js"},{"revision":"c387ac039250b31f20a787ada015b3b6","url":"assets/js/4061.9457073a.js"},{"revision":"62e763d9175479970c0bd7ba7498e5a7","url":"assets/js/4068.e264c540.js"},{"revision":"2539938cb8ce290ce9dfa9356ba30e98","url":"assets/js/4083.ffccf09d.js"},{"revision":"b836302ef55dbc46afd178b22bba4248","url":"assets/js/4218.6ff08d41.js"},{"revision":"94e573fc9a720dccf92587f5d9f6e30d","url":"assets/js/4225.aa971eb3.js"},{"revision":"a4c1c6eabc784e5727b29dee6f4d8082","url":"assets/js/4253.6b1e893b.js"},{"revision":"41de0b8e1891faab589d7146e12d25d9","url":"assets/js/4483.a40b4e5c.js"},{"revision":"f477f62495085cdb117f91dad5204ebd","url":"assets/js/4522.fadc3e32.js"},{"revision":"7feacad880bdc39c43def21fdd1f4ac9","url":"assets/js/4547.87895d90.js"},{"revision":"b0982d8416167811448210d388936383","url":"assets/js/4559.3e66fb8a.js"},{"revision":"e6484b9fc051395083fc3d2e7936e8d7","url":"assets/js/4631.4245cffe.js"},{"revision":"f29ae790907c36caf3f19d5b4a804c37","url":"assets/js/4750.5b2a8a0f.js"},{"revision":"de610939548e36c8f3933efcfba7d4f6","url":"assets/js/4890.c371c560.js"},{"revision":"8230103d365d79f9b6fda4fbd1d23f06","url":"assets/js/5056.c489cbdb.js"},{"revision":"c0cf1b4fd64b42a0e89842058d2c6e7c","url":"assets/js/5176.bd072b74.js"},{"revision":"3e57fe4afef2ca436a65165a7f354067","url":"assets/js/5333.c4852080.js"},{"revision":"c234d9d226a1f48d4e28f7c9b4831605","url":"assets/js/5342.b95d7d8f.js"},{"revision":"61b9290ac0c9bd44fc412939674a3226","url":"assets/js/551.c7cf24e4.js"},{"revision":"96196806589a110cccf549006c673aa5","url":"assets/js/5745.19e8f97f.js"},{"revision":"c78ee18a93ae92894b9ae5233b28d486","url":"assets/js/5814.925964cc.js"},{"revision":"fee2329c535a995d1a0a00a72e9accea","url":"assets/js/5845.1d2a811d.js"},{"revision":"4fb7538577eac46f647bde17313e0e55","url":"assets/js/5919.ee1f2302.js"},{"revision":"c7132ef08cd5ea5315b01dea657de40c","url":"assets/js/6070.6feca5f8.js"},{"revision":"f43013c8b6e7decb437fbce9f8214d58","url":"assets/js/612.889e92d1.js"},{"revision":"4cadbe5ff030c4afddd9623f857f96d7","url":"assets/js/6267.e9b1760f.js"},{"revision":"db3bc0889e2a29374fb7147c45139fa4","url":"assets/js/6349.1f5fb9ab.js"},{"revision":"c96e068e1d390a3f37abcfd0549318d6","url":"assets/js/6410.c944bfff.js"},{"revision":"0b3a5f77daa97edcab562b1a7c89f8cc","url":"assets/js/6576.e1115e5e.js"},{"revision":"83e9172ee2a8234f34f2c6f876f471ce","url":"assets/js/6599.36199619.js"},{"revision":"691c6823c18329081cf6638bfb61ab58","url":"assets/js/6602.49f5d296.js"},{"revision":"2d788abf8ec48c70d725668b5f226c41","url":"assets/js/6645.76a7e9f0.js"},{"revision":"ed7b243628309fdad6cc547eac20c397","url":"assets/js/6908.f3b6f3ba.js"},{"revision":"1f0765c9256ba5a0e84fa206c98e1963","url":"assets/js/7038.9fb82fc7.js"},{"revision":"1c5514563ba8d247b5d451ded13f3e8b","url":"assets/js/7085.67407f9a.js"},{"revision":"c73e4debe58b675a581beae229d21055","url":"assets/js/7401.d9df72f6.js"},{"revision":"a12547bf5f61584fb70e2f2170791259","url":"assets/js/7435.c94fb392.js"},{"revision":"c1134efba0da87058562caf89e0691a7","url":"assets/js/7487.c62f44ee.js"},{"revision":"1619f22af3bc5378028336c234bbfc69","url":"assets/js/7933.b67bfcaa.js"},{"revision":"9e7254721e15e5a114e00cd080153ad9","url":"assets/js/7939.d4970b0f.js"},{"revision":"002d7058c1ca7c9c17fdf9aaff08eec8","url":"assets/js/8034.5db7d80f.js"},{"revision":"51ccf6ab5e972060952bec2f055a506d","url":"assets/js/8177.a7629105.js"},{"revision":"f754b86611c90843a1a504eef5432b60","url":"assets/js/8432.8fc0950a.js"},{"revision":"935963b78d802b0ea47528e011a3635d","url":"assets/js/845.16a501b3.js"},{"revision":"d1a8108e7f3522a234a11d0989973a9c","url":"assets/js/9031.cdca414d.js"},{"revision":"42f2f9c54129bb386f86c26841075004","url":"assets/js/9121.12c22366.js"},{"revision":"b1d2849865b108804deaf2d9ef7c8035","url":"assets/js/9155.58055311.js"},{"revision":"20942cc0e5ac98dc742989273098dc31","url":"assets/js/9174.f3cf4079.js"},{"revision":"2e7c647e58da3273887ecf9385165e11","url":"assets/js/9178.81cf0cef.js"},{"revision":"1de1510efe1a20975094494c657fe965","url":"assets/js/9189.9a603ecd.js"},{"revision":"277f9796a8f01de2a14c13b06b29b1fc","url":"assets/js/920.f9cc0699.js"},{"revision":"0601f81641beaba95a33a70bee379d1f","url":"assets/js/9297.47e8c82e.js"},{"revision":"a82ec586ee29d459ebc06872fd48483c","url":"assets/js/9400.ea1ed670.js"},{"revision":"07bcf4906477c088e12144068c68e503","url":"assets/js/9495.af8cd9b1.js"},{"revision":"5ef8687012166d99791e73aa202ad04f","url":"assets/js/9653.ca284687.js"},{"revision":"5bbad7c1830ec4f9e6e0ce30f4e283d4","url":"assets/js/9732.d0233b68.js"},{"revision":"2865c9ff42f71df85b628ce89afcfb67","url":"assets/js/9812.7d568fcf.js"},{"revision":"8567b1ab9dbf375b6d5d18a1e48f9d03","url":"assets/js/9926.6f646a54.js"},{"revision":"a92459207ce7a857f40a9165474a1e3f","url":"assets/js/main.fe81ccb1.js"},{"revision":"c2c82b929fa9c11ed39ce3a51a6e455f","url":"assets/js/runtime~main.8b0b4e14.js"},{"revision":"8a7e2305de4363cb14df502ee86f3363","url":"category/common.html"},{"revision":"9dacef1950e6a0fe894f4198d0e67e33","url":"category/paper/how-to-guides.html"},{"revision":"062dd45c67143e6c8d2da4dd0c239f7c","url":"category/paper/reference.html"},{"revision":"ea2e426ce31fb070db43b6e4a71436e9","url":"category/papermc.html"},{"revision":"7201156d162fede7f827c44b3a0cf080","url":"category/velocity/developers/api.html"},{"revision":"d84745d963fe6119774498ecc08f51aa","url":"category/velocity/developers/getting-started.html"},{"revision":"0fd40d2d981a33cc387b2bd8e6e5fe36","url":"category/velocity/developers/how-to-guides.html"},{"revision":"c22d1784af509fdd03289c2d5f836ac9","url":"category/velocity/how-to-guides.html"},{"revision":"87c4ca447a2ec4cf73e2aea89c522f09","url":"category/velocity/reference.html"},{"revision":"379d6fce7e659bc00db8b806b6d9f53f","url":"index.html"},{"revision":"75591070c9bfce20bbd4f1905d266f5a","url":"intro.html"},{"revision":"4d7a9a8afd22dfcd3f02603acc9f48c4","url":"java-install-update.html"},{"revision":"9de0c1c99854cb76025abff99c9590c3","url":"manifest.json"},{"revision":"dc25d9958fafb448b535910f6f37ab44","url":"paper.html"},{"revision":"9607406e186233bbc76795820a17d640","url":"paper/aikars-flags.html"},{"revision":"77de89cd9bf08926b9b58174f3e81330","url":"paper/anti-xray.html"},{"revision":"348a38522dbbd7be7a9c0bdc0b3733b0","url":"paper/getting-started.html"},{"revision":"2a8e57f1430034661f5b26c19e7b8904","url":"paper/getting-started/adding-plugins.html"},{"revision":"3a1a3caba3cd4e7765b4e1c530e2225c","url":"paper/migration.html"},{"revision":"87896ea250f4f1e7891771cd017f591a","url":"paper/per-world-configuration.html"},{"revision":"267cd9ee81558ae234ae69289d75ef87","url":"paper/reference/paper-global-configuration.html"},{"revision":"fa2892ab63f7f52966ffb219aa19407d","url":"paper/reference/paper-per-world-configuration.html"},{"revision":"dce33c06024402b4ca2255c1bef340cc","url":"paper/updating.html"},{"revision":"65dbbbcf3e994076effad6aa0f31f95b","url":"papermc/assets.html"},{"revision":"8a53d8b9ffece5190d57e0883b501c6c","url":"papermc/contact.html"},{"revision":"d2a7d8f6ebbfb288e8032fc494423e10","url":"papermc/downloads-api.html"},{"revision":"028ea64f20df2d0a6c2eda4ebdbd740b","url":"search.html"},{"revision":"6c7a5a3cf113621190cdf0ea407617d4","url":"velocity.html"},{"revision":"cf1491765bdef85ebc06e3850d4ac1cb","url":"velocity/built-in-commands.html"},{"revision":"37b8033a37225919c1286e8688055ed8","url":"velocity/comparisons-to-other-proxies.html"},{"revision":"17769c68013fbe14fa8e29b7831abadc","url":"velocity/configuration.html"},{"revision":"f8657ce690c53b74ba72172f1935e825","url":"velocity/credits.html"},{"revision":"17b5036840e730f924dd5ed0c9cab792","url":"velocity/developers.html"},{"revision":"b21e0c47095a16e0347f06d429aa2901","url":"velocity/developers/api-basics.html"},{"revision":"4b983ea5611bcbd9bb634221113a7da9","url":"velocity/developers/command-api.html"},{"revision":"e59e477b1cc2c66d5d1f8a2f4758c3ff","url":"velocity/developers/creating-your-first-plugin.html"},{"revision":"692e946f1953210bdd55957b67c3fbf9","url":"velocity/developers/dependency-management.html"},{"revision":"77491cb29bf451321940129b32c98c99","url":"velocity/developers/event-api.html"},{"revision":"f92849599741b97b1f78838dcdbc5c3f","url":"velocity/developers/pitfalls.html"},{"revision":"163b52b8d3357ad2baf5c7de0aba7218","url":"velocity/developers/porting-plugins-from-velocity-1.html"},{"revision":"2a24302159fa714705a71917c563a943","url":"velocity/developers/scheduler-api.html"},{"revision":"741ae23e15861be49691ce524643d3c8","url":"velocity/faq.html"},{"revision":"0e2ee20524d11968d8f2b54c3e39104c","url":"velocity/getting-started.html"},{"revision":"d26895a55099c42417096d09cf22237e","url":"velocity/migration.html"},{"revision":"d03652391ea28df905dc51d428526414","url":"velocity/player-information-forwarding.html"},{"revision":"ab2db0ffb3fac9d6d6f15a02b8258688","url":"velocity/security.html"},{"revision":"56e427b24cf557fe5216d9c09c811113","url":"velocity/server-compatibility.html"},{"revision":"91e55eeac21270e0556742e76a23bc15","url":"velocity/tuning.html"},{"revision":"a38622b5a7e592b8b4c67b13c98b6a03","url":"velocity/why-velocity.html"},{"revision":"5c57e28cbc5345d3eb2af26a0b5d7281","url":"waterfall.html"},{"revision":"8bc505fdb0b20b08e015d85a26111ac4","url":"waterfall/configuration.html"},{"revision":"b398b8e7dbd03a6982226c4a5e01233f","url":"waterfall/getting-started.html"},{"revision":"4f12cdd8785605ddeb7c202a196e7d35","url":"assets/images/anti-xray-nether-05e6e894ce876f94d4463e1f491d1030.png"},{"revision":"ac61b2cd736aeb124ece24c782c63560","url":"assets/images/anti-xray-overworld-3443fb41851dc5d9082f2956268232a1.png"},{"revision":"728cb4af05ea79eca18631a0a7f5950e","url":"assets/images/papermc_logomark_500-b69f67cabd469b3d0485c20a912e84fc.png"},{"revision":"2cc84f324fa1386d14831b64d1c303fb","url":"assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"69b156c91d208aff640e1016c38fb004","url":"img/logo.svg"},{"revision":"23c02a74c76235daf1a513381ba42449","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();