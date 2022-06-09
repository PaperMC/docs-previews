"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2726],{4907:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(6687);var r=n(4907);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l={},o="Configuration",s={unversionedId:"waterfall/configuration",id:"waterfall/configuration",title:"Configuration",description:"This page details the various configuration settings exposed by Waterfall. These settings can be",source:"@site/docs/waterfall/configuration.md",sourceDirName:"waterfall",slug:"/waterfall/configuration",permalink:"/docs-previews/pull/62/waterfall/configuration",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/waterfall/configuration.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646718401,formattedLastUpdatedAt:"3/8/2022",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs-previews/pull/62/waterfall/getting-started"},next:{title:"Common",permalink:"/docs-previews/pull/62/category/common"}},u={},p=[{value:"use_netty_dns_resolver",id:"use_netty_dns_resolver",level:2},{value:"disable_modern_tab_limiter",id:"disable_modern_tab_limiter",level:2},{value:"log_initial_handler_connections",id:"log_initial_handler_connections",level:2},{value:"throttling",id:"throttling",level:2},{value:"game_version",id:"game_version",level:2},{value:"disable_tab_list_rewrite",id:"disable_tab_list_rewrite",level:2},{value:"disable_entity_metadata_rewrite",id:"disable_entity_metadata_rewrite",level:2},{value:"plugin_channel_name_limit",id:"plugin_channel_name_limit",level:2},{value:"registered_plugin_channels_limit",id:"registered_plugin_channels_limit",level:2}],c={toc:p};function d(e){var t=e.components,n=a(e,["components"]);return(0,r.kt)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"This page details the various configuration settings exposed by Waterfall. These settings can be\nfound in waterfall.yml."),(0,r.kt)("p",null,"If you want information on settings in BungeeCord's config.yml you should see its respective\ndocumentation pages."),(0,r.kt)("h2",i({},{id:"use_netty_dns_resolver"}),"use_netty_dns_resolver"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),": Sets whether Netty's async DNS resolver is used for account authentication.")),(0,r.kt)("h2",i({},{id:"disable_modern_tab_limiter"}),"disable_modern_tab_limiter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),": Disables the tab completion limit for 1.13+ clients.")),(0,r.kt)("h2",i({},{id:"log_initial_handler_connections"}),"log_initial_handler_connections"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),": Sets whether to log InitialHandler connections.")),(0,r.kt)("h2",i({},{id:"throttling"}),"throttling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"tab_complete",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"1000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),": How often tab-complete packets can be sent in milliseconds.")))),(0,r.kt)("h2",i({},{id:"game_version"}),"game_version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default"),": `` (empty string)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),": The supported versions displayed to the client. Default is a comma separated list\nof supported versions. For example 1.8.x, 1.9.x, 1.10.x")),(0,r.kt)("h2",i({},{id:"disable_tab_list_rewrite"}),"disable_tab_list_rewrite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),": This setting disables tablist rewriting, which may resolve issues setting player\nprofiles when Waterfall is in offline mode.")),(0,r.kt)("h2",i({},{id:"disable_entity_metadata_rewrite"}),"disable_entity_metadata_rewrite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),": This setting disables entity metadata rewriting in favor of sending a join packet\nto the client. It offers a more robust solution for modded environments but can cause plugins to\nbreak.")),(0,r.kt)("h2",i({},{id:"plugin_channel_name_limit"}),"plugin_channel_name_limit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"128")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),": The maximum channel identifier length. May be useful for certain broken mods.")),(0,r.kt)("h2",i({},{id:"registered_plugin_channels_limit"}),"registered_plugin_channels_limit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"128")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),": The maximum number of registered plugin channels for a connection. Used by mods\nand some plugins. May be useful to fix certain broken modpacks.")))}d.isMDXComponent=!0}}]);