(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.4.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.4.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.4.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.4.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"3ace9f570b2ad6f83714183c995d01ef","url":"__docusaurus/debug.html"},{"revision":"b4023f1c0f2937d117ad73f620ff4488","url":"__docusaurus/debug/config.html"},{"revision":"eca32dbfec629ffbb99a8fa35a2e1ba6","url":"__docusaurus/debug/content.html"},{"revision":"c5508b3a8e802f53707b7025c3658c95","url":"__docusaurus/debug/globalData.html"},{"revision":"122f4aac42f9df2c4a0269769dc506d8","url":"__docusaurus/debug/metadata.html"},{"revision":"20fd587a603f537b75d067e5198d1f63","url":"__docusaurus/debug/registry.html"},{"revision":"6caf00f7ceabcff6528cf9d8d447df23","url":"__docusaurus/debug/routes.html"},{"revision":"56d13e04927b75aea77d666f811dbef4","url":"404.html"},{"revision":"5ef290d9f5790c606c9f7c9a3d4ac645","url":"assets/css/styles.4805d01a.css"},{"revision":"9989dfdd4082a7273ee8bc6d45325569","url":"assets/js/08c91acd.1ecc581d.js"},{"revision":"fb682834482eb7ecc5bf276d8b1fc9b2","url":"assets/js/17896441.0fce3c67.js"},{"revision":"8fda1c063729b5d9a6ca28549f29672c","url":"assets/js/19c9239f.263b7b43.js"},{"revision":"ca880fb8158f54b0e4750de21d3cb5fa","url":"assets/js/1a4e3797.96c1cb78.js"},{"revision":"41dd0ada364152515dfa9d1f2002ee9a","url":"assets/js/1be78505.3da92d80.js"},{"revision":"9861a494409c5313ab1b373fab6a0e30","url":"assets/js/1df93b7f.cbb724dc.js"},{"revision":"c8df6bb74845a7bb5948c513effa50cd","url":"assets/js/230.025153b6.js"},{"revision":"844f41e6694718889eecf3e767039203","url":"assets/js/23374ca6.f4519360.js"},{"revision":"e9f5480b1b769c2cc77af87534e04bfe","url":"assets/js/23abe487.e0e553df.js"},{"revision":"84fa3a5157adc25d3c91cbcb263293b5","url":"assets/js/246f2c6f.84b854bd.js"},{"revision":"058ffbdb7fde05cd2e9f4f0e36da939a","url":"assets/js/278d831b.a9468288.js"},{"revision":"f915ce8a3e9beedc2453cc6c1192a4aa","url":"assets/js/27da239e.e4a14b19.js"},{"revision":"035f1a931e461dad26e79fd9bd0f2947","url":"assets/js/2c700dca.0ecc5f32.js"},{"revision":"8857b48e363bab5c9e85d776250c18f2","url":"assets/js/2c714a47.abdfad2a.js"},{"revision":"6a86bf0c21f9cb02c05b764aad989de9","url":"assets/js/3450.9b3ef2c5.js"},{"revision":"c27ed022e531f6e5eeefdd04e632886a","url":"assets/js/3bd92c1c.3ca10c83.js"},{"revision":"3a56f47990625b09f5d49dce0cb5d743","url":"assets/js/3ca010ae.efb26e1a.js"},{"revision":"64ed149ce53fccae1f090515608e4cce","url":"assets/js/417802b6.4058e9e6.js"},{"revision":"0d8121dfd7fb1fa3b19964b006817878","url":"assets/js/444147dc.c95af7d8.js"},{"revision":"cd4915b550396a5b9b5f82a10db649a7","url":"assets/js/4542f1aa.02e31834.js"},{"revision":"876cd3bc6772be5bbdd4356c8d82a028","url":"assets/js/45c35fe9.3b72d211.js"},{"revision":"6150536220c3fc6a840930f351d4bc31","url":"assets/js/4608.7f3155ed.js"},{"revision":"02e927eae13f48aeca03a06832983012","url":"assets/js/4735cba8.d5100eb0.js"},{"revision":"5f6fc5d18da7e30d3c70024c239174fd","url":"assets/js/5131.023cfe0f.js"},{"revision":"b634454a0456d9950c4e61cedee94a10","url":"assets/js/5283.2c52b05b.js"},{"revision":"9fb1493c63eb8c61f8c56a644831e81d","url":"assets/js/59b20312.78e18e52.js"},{"revision":"eef3abd3a7ec7deaac69d2c8e5138ba5","url":"assets/js/6794d4cd.d8b7ef14.js"},{"revision":"ce7f72eee5e0653199ab25bcdc86e81c","url":"assets/js/6815.8f5a7408.js"},{"revision":"4a3e600b587e5c3aeb5e77cb9440227b","url":"assets/js/6856bc5e.ab094ab9.js"},{"revision":"6ff6425450112c91f94f5e0478135a70","url":"assets/js/68e633d4.ea9b947b.js"},{"revision":"5a0aafccc443095b70527b12cb815750","url":"assets/js/6945.7e7c6451.js"},{"revision":"a6d212975b6cb7c0cdcb5be6e4fa546b","url":"assets/js/7109fcb9.927441aa.js"},{"revision":"d6e5d034548b5a2cb8dc59e9ad36f437","url":"assets/js/7556a661.a6b79bd7.js"},{"revision":"6e418399e14fd570c5af493bc905088e","url":"assets/js/8894.8579f5eb.js"},{"revision":"66a1e2bef1f51e54a25f46d49641c1a8","url":"assets/js/93426447.c96529b7.js"},{"revision":"627c870ce93952566d33e6d35dd453f6","url":"assets/js/935f2afb.df7eefb4.js"},{"revision":"7a322fd8821db2872e2dc206d2062d6c","url":"assets/js/946bd85a.f5ef0c45.js"},{"revision":"53000baec894d5c8aff0e8cd1f0f95e9","url":"assets/js/9720aa09.f3bac2ab.js"},{"revision":"3044e1ebfe0aeba72d59e86a7eec8796","url":"assets/js/b0dd63e9.9777e53a.js"},{"revision":"20d773e977ac80884dd81d7359e98e5d","url":"assets/js/b326c38e.123bebba.js"},{"revision":"ec74e49673dbb9aa015448ce89d1ec14","url":"assets/js/b8c60b87.713e550f.js"},{"revision":"9d08d5c415a3142e54071647792def17","url":"assets/js/ba8b3534.be981aca.js"},{"revision":"cf6d1f6dec925f948c74c7da36b3f761","url":"assets/js/bd0ab364.d16e1f46.js"},{"revision":"48c6df50506d715f9b91ae1955b63842","url":"assets/js/c18f6375.027c13c4.js"},{"revision":"5555a4502b79ce4744c0d24cacb52277","url":"assets/js/c19b4e8e.10d6af87.js"},{"revision":"a36355ee735591016de6f558b9c58af9","url":"assets/js/cf08fff7.6ce8dd03.js"},{"revision":"86d65a04c76e13f1e73aafa53e992adc","url":"assets/js/d50d5676.576c03f0.js"},{"revision":"df20206dbe2ea354ebb96400538da7e8","url":"assets/js/d70a5677.2908a61f.js"},{"revision":"14d521faa187a325f4368134d0e5d525","url":"assets/js/d8af3d6e.e6dcb3d1.js"},{"revision":"e2931f8be079038444076804f1f12efb","url":"assets/js/de48decc.92680e7f.js"},{"revision":"6e5ef6e517ffc0624265978db2df2c2e","url":"assets/js/decc4105.5908c08e.js"},{"revision":"375ef885828ddea4f5e03a13dfaa41a6","url":"assets/js/df759228.31815619.js"},{"revision":"f9cccdee06da0b7773e1590a7e7ae05e","url":"assets/js/e36987ae.ac6a4f6c.js"},{"revision":"733b6131d30bcf1dc8326ee80072709d","url":"assets/js/ede3a018.f4472f61.js"},{"revision":"9954b7ae33b7c58cc8f6fde9ca21c18d","url":"assets/js/f92d365d.926a5d5b.js"},{"revision":"6758e9e5d4f92381529f17148519e232","url":"assets/js/fdb945e9.f6557b1b.js"},{"revision":"3957e8f54c1fdc660b4fb53aac572012","url":"assets/js/ff7bed0d.4f34fb36.js"},{"revision":"62aa90a22600cb86d437958b1768f1ec","url":"assets/js/main.995eef64.js"},{"revision":"db74e669f85c1ed32925d5493ef1fce5","url":"assets/js/runtime~main.b25a87bc.js"},{"revision":"f11e0603f9afdf5dc1ef413a47085d3e","url":"index.html"},{"revision":"eceae556cda6edef2018fafead2dabd9","url":"intro.html"},{"revision":"16820d9524decec17054d118a003ab1a","url":"java-install-update.html"},{"revision":"9de0c1c99854cb76025abff99c9590c3","url":"manifest.json"},{"revision":"b3c68f83a68d8e8461dbad664ba1e96d","url":"paper.html"},{"revision":"91c8f09a7699044477b0c64533776768","url":"paper/aikars-flags.html"},{"revision":"441dadb05479a2555fcf1ca193226120","url":"paper/getting-started.html"},{"revision":"539b6432d5b5f6ce4040ee404eea6d8c","url":"paper/per-world-configuration.html"},{"revision":"96e11429934acb9c02c793a4c0e8f24f","url":"paper/reference/paper-global-configuration.html"},{"revision":"0bc3bd84cc1da2d8a97287a456de3c94","url":"paper/reference/paper-per-world-configuration.html"},{"revision":"2e80a8ad5ba5f1f8def846f2098101f1","url":"paper/updating.html"},{"revision":"e356f6ad5db9bd0b449bd69954b018e3","url":"papermc/assets.html"},{"revision":"c4a912649f5a0ee71838bcfc6c47c5dd","url":"papermc/contact.html"},{"revision":"1f7b27bebad8dde9773e6b0d69f60eb1","url":"papermc/downloads-api.html"},{"revision":"f9c174e45ae5323551524b3f9be7d684","url":"search.html"},{"revision":"dcf678eba18629352ff6b5e8931eb952","url":"velocity.html"},{"revision":"290d67c60438611e565c33d4837388b3","url":"velocity/built-in-commands.html"},{"revision":"99a042d6d3b615c4b5ff289e07e98446","url":"velocity/comparisons-to-other-proxies.html"},{"revision":"061c7a9c55df5a523545fc485e7e8a35","url":"velocity/configuration.html"},{"revision":"3722fde74ac8e60c45500825962d825d","url":"velocity/credits.html"},{"revision":"36279b11f38a23ee433c9430b185ff7d","url":"velocity/developers.html"},{"revision":"80ef132acb32880c5c332b7edeb5cd88","url":"velocity/developers/api-basics.html"},{"revision":"8d79d4947657ebf2fae066a3ec450154","url":"velocity/developers/command-api.html"},{"revision":"b374a5088acd5381cc7bcdd922b77df9","url":"velocity/developers/creating-your-first-plugin.html"},{"revision":"f0d7e4112721864ae034e02d8e919876","url":"velocity/developers/dependency-management.html"},{"revision":"18fba1617fe94948eaac9df6436f4f7e","url":"velocity/developers/event-api.html"},{"revision":"a9bf5dcca86e5c4d0a6ed082f3f04828","url":"velocity/developers/pitfalls.html"},{"revision":"faac0fd667e1e4ae6f4775f5f818451c","url":"velocity/developers/porting-plugins-from-velocity-1.html"},{"revision":"1248956ca73d9288e0c21e999b7ca30b","url":"velocity/developers/scheduler-api.html"},{"revision":"627c420b961e184640abe7851533288a","url":"velocity/faq.html"},{"revision":"17477b4f526780dc0e594e6564ecd420","url":"velocity/getting-started.html"},{"revision":"807014bc5bf94b301f5806d8c4e7a0a6","url":"velocity/migration.html"},{"revision":"27b933c89d064aae46a665bcb9929d08","url":"velocity/player-information-forwarding.html"},{"revision":"e33e9453b2cd176b8eea35912da3bc17","url":"velocity/security.html"},{"revision":"a3c393dc64fd3526c205df4f4a355d9e","url":"velocity/server-compatibility.html"},{"revision":"aa47469f771c4714be1a70828345eeeb","url":"velocity/tuning.html"},{"revision":"c9c728c3970bbec421a1c223195a0c3f","url":"velocity/why-velocity.html"},{"revision":"2d31e030d09bb28d72b316566c40a3cd","url":"waterfall.html"},{"revision":"6fa30589bc6b9b079c9377185f0fcdf2","url":"waterfall/configuration.html"},{"revision":"7ec6db24fafa3cdc3c4e3204f16530ee","url":"waterfall/getting-started.html"},{"revision":"728cb4af05ea79eca18631a0a7f5950e","url":"assets/images/papermc_logomark_500-b69f67cabd469b3d0485c20a912e84fc.png"},{"revision":"2cc84f324fa1386d14831b64d1c303fb","url":"assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"69b156c91d208aff640e1016c38fb004","url":"img/logo.svg"},{"revision":"23c02a74c76235daf1a513381ba42449","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();