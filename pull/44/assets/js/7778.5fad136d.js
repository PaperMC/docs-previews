"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7778],{8817:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={container:"container_VEjD",nav:"nav_iBNm",navlink:"navlink_r2II",active:"active_IrP9"}},1927:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={list:"list_omq6",listItem:"listItem_ClFi"}},9823:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var l=a(8145),r=l.__importDefault(a(6687)),n=l.__importDefault(a(1051)),u=l.__importDefault(a(9482)),o=l.__importDefault(a(8817));function c(e){var t=e.to,a=e.children;return r.default.createElement(u.default,{className:o.default.navlink,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},a)}t.default=function(e){var t=e.children;return r.default.createElement(r.default.Fragment,null,r.default.createElement(n.default,null,r.default.createElement("html",{lang:"en"}),r.default.createElement("title",null,"Docusaurus debug panel")),r.default.createElement("div",null,r.default.createElement("nav",{className:o.default.nav},r.default.createElement(c,{to:"/__docusaurus/debug"},"Config"),r.default.createElement(c,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.default.createElement(c,{to:"/__docusaurus/debug/registry"},"Registry"),r.default.createElement(c,{to:"/__docusaurus/debug/routes"},"Routes"),r.default.createElement(c,{to:"/__docusaurus/debug/content"},"Content"),r.default.createElement(c,{to:"/__docusaurus/debug/globalData"},"Global data")),r.default.createElement("main",{className:o.default.container},t)))}},7778:(e,t,a)=>{function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,r,n=[],u=!0,o=!1;try{for(a=a.call(e);!(u=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);u=!0);}catch(c){o=!0,r=c}finally{try{u||null==a.return||a.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0});var n=a(8145),u=n.__importDefault(a(6687)),o=n.__importDefault(a(9823)),c=n.__importDefault(a(5997)),d=n.__importDefault(a(1927));t.default=function(){return u.default.createElement(o.default,null,u.default.createElement("h2",null,"Registry"),u.default.createElement("ul",{className:d.default.list},Object.values(c.default).map((function(e){var t=r(e,3),a=t[1],l=t[2];return u.default.createElement("li",{key:a,className:d.default.listItem},u.default.createElement("div",{style:{marginBottom:"10px"}},"Aliased Path: ",u.default.createElement("code",null,a)),u.default.createElement("div",null,"Resolved Path: ",u.default.createElement("code",null,l)))}))))}}}]);