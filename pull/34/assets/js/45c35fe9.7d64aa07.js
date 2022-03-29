"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4754],{4907:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(f,l(l({ref:t},p),{},{components:n})):i.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},615:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var i=n(9149),r=n(8332),a=(n(6687),n(4907)),l=["components"],o={},s="Configuration",u={unversionedId:"waterfall/configuration",id:"waterfall/configuration",title:"Configuration",description:"This page details the various configuration settings exposed by Waterfall. These settings can be",source:"@site/docs/waterfall/configuration.md",sourceDirName:"waterfall",slug:"/waterfall/configuration",permalink:"/docs-previews/pull/34/waterfall/configuration",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/waterfall/configuration.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646718401,formattedLastUpdatedAt:"3/8/2022",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs-previews/pull/34/waterfall/getting-started"},next:{title:"Installing or Updating Java",permalink:"/docs-previews/pull/34/java-install-update"}},p={},c=[{value:"use_netty_dns_resolver",id:"use_netty_dns_resolver",level:2},{value:"disable_modern_tab_limiter",id:"disable_modern_tab_limiter",level:2},{value:"log_initial_handler_connections",id:"log_initial_handler_connections",level:2},{value:"throttling",id:"throttling",level:2},{value:"game_version",id:"game_version",level:2},{value:"disable_tab_list_rewrite",id:"disable_tab_list_rewrite",level:2},{value:"disable_entity_metadata_rewrite",id:"disable_entity_metadata_rewrite",level:2},{value:"plugin_channel_name_limit",id:"plugin_channel_name_limit",level:2},{value:"registered_plugin_channels_limit",id:"registered_plugin_channels_limit",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This page details the various configuration settings exposed by Waterfall. These settings can be\nfound in waterfall.yml."),(0,a.kt)("p",null,"If you want information on settings in BungeeCord's config.yml you should see its respective\ndocumentation pages."),(0,a.kt)("h2",{id:"use_netty_dns_resolver"},"use_netty_dns_resolver"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),": Sets whether Netty's async DNS resolver is used for account authentication.")),(0,a.kt)("h2",{id:"disable_modern_tab_limiter"},"disable_modern_tab_limiter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),": Disables the tab completion limit for 1.13+ clients.")),(0,a.kt)("h2",{id:"log_initial_handler_connections"},"log_initial_handler_connections"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),": Sets whether to log InitialHandler connections.")),(0,a.kt)("h2",{id:"throttling"},"throttling"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tab_complete",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),": How often tab-complete packets can be sent in milliseconds.")))),(0,a.kt)("h2",{id:"game_version"},"game_version"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default"),": `` (empty string)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),": The supported versions displayed to the client. Default is a comma separated list\nof supported versions. For example 1.8.x, 1.9.x, 1.10.x")),(0,a.kt)("h2",{id:"disable_tab_list_rewrite"},"disable_tab_list_rewrite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),": This setting disables tablist rewriting, which may resolve issues setting player\nprofiles when Waterfall is in offline mode.")),(0,a.kt)("h2",{id:"disable_entity_metadata_rewrite"},"disable_entity_metadata_rewrite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),": This setting disables entity metadata rewriting in favor of sending a join packet\nto the client. It offers a more robust solution for modded environments but can cause plugins to\nbreak.")),(0,a.kt)("h2",{id:"plugin_channel_name_limit"},"plugin_channel_name_limit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"128")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),": The maximum channel identifier length. May be useful for certain broken mods.")),(0,a.kt)("h2",{id:"registered_plugin_channels_limit"},"registered_plugin_channels_limit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"128")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),": The maximum number of registered plugin channels for a connection. Used by mods\nand some plugins. May be useful to fix certain broken modpacks.")))}m.isMDXComponent=!0}}]);