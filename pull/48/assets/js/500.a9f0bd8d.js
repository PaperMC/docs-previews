"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[500],{500:(e,t,n)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,u=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(i){o=!0,l=i}finally{try{a||null==n.return||n.return()}finally{if(o)throw l}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0});var u=n(5228),a=u.__importDefault(n(6687)),o=u.__importDefault(n(4616)),i=u.__importDefault(n(8398));function c(e){var t=e.pluginId,n=e.pluginInstanceContent;return a.default.createElement("section",{style:{marginBottom:30}},a.default.createElement("code",null,t),a.default.createElement(i.default,{src:n,collapseDepth:2}))}function f(e){var t=e.pluginName,n=e.pluginContent;return a.default.createElement("section",{style:{marginBottom:60}},a.default.createElement("h3",null,t),a.default.createElement("div",null,Object.entries(n).filter((function(e){return!!l(e,2)[1]})).map((function(e){var t=l(e,2),n=t[0],r=t[1];return a.default.createElement(c,{key:n,pluginId:n,pluginInstanceContent:r})}))))}t.default=function(e){var t=e.allContent;return a.default.createElement(o.default,null,a.default.createElement("h2",null,"Plugin content"),a.default.createElement("div",null,Object.entries(t).filter((function(e){var t=l(e,2)[1];return Object.values(t).some((function(e){return!!e}))})).map((function(e){var t=l(e,2),n=t[0],r=t[1];return a.default.createElement(f,{key:n,pluginName:n,pluginContent:r})}))))}}}]);