"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4211],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7479:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],l={slug:"/velocity/server-compatibility"},s="Server Compatibility",p={unversionedId:"velocity/reference/server-compatibility",id:"velocity/reference/server-compatibility",title:"Server Compatibility",description:"Velocity is compatible with many Minecraft server implementations. The expectation is that if the",source:"@site/docs/velocity/reference/server-compatibility.md",sourceDirName:"velocity/reference",slug:"/velocity/server-compatibility",permalink:"/docs-previews/pull/16/velocity/server-compatibility",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/reference/server-compatibility.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646714966,formattedLastUpdatedAt:"3/8/2022",frontMatter:{slug:"/velocity/server-compatibility"},sidebar:"docs",previous:{title:"Built-In Commands",permalink:"/docs-previews/pull/16/velocity/built-in-commands"},next:{title:"Comparing With Other Proxies",permalink:"/docs-previews/pull/16/velocity/comparison-to-other-proxies"}},c={},u=[{value:"Compatible game versions",id:"compatible-game-versions",level:2},{value:"Vanilla setups",id:"vanilla-setups",level:2},{value:"Vanilla servers",id:"vanilla-servers",level:3},{value:"Spigot",id:"spigot",level:3},{value:"Paper",id:"paper",level:3},{value:"SpongeVanilla",id:"spongevanilla",level:3},{value:"Modded setups",id:"modded-setups",level:2},{value:"Fabric",id:"fabric",level:3},{value:"Minecraft Forge (1.13 and above)",id:"minecraft-forge-113-and-above",level:3},{value:"Minecraft Forge (1.7.2-1.12.2)",id:"minecraft-forge-172-1122",level:3},{value:"Proxy-behind-proxy (BungeeCord/Waterfall, Velocity, ...)",id:"proxy-behind-proxy-bungeecordwaterfall-velocity-",level:2},{value:"Other Implementations",id:"other-implementations",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"server-compatibility"},"Server Compatibility"),(0,i.kt)("p",null,"Velocity is compatible with many Minecraft server implementations. The expectation is that if the\nserver acts like vanilla, Velocity will work, and we make special provisions for modded setups where\nwe can."),(0,i.kt)("h2",{id:"compatible-game-versions"},"Compatible game versions"),(0,i.kt)("p",null,"As of this writing, Velocity is compatible with Minecraft 1.7.2 through 1.18.1."),(0,i.kt)("h2",{id:"vanilla-setups"},"Vanilla setups"),(0,i.kt)("p",null,"Velocity is best-tested with implementations derived from the vanilla server by Mojang that do not\nadd content to the game itself."),(0,i.kt)("h3",{id:"vanilla-servers"},"Vanilla servers"),(0,i.kt)("p",null,"The Mojang vanilla software is in a complicated position. It is useful as we often produce protocol\nupdates using the Mojang server for testing, but in production setups, the lack of player info\nforwarding support can induce subtle client problems."),(0,i.kt)("p",null,"If you plan to run a vanilla server, ",(0,i.kt)("strong",{parentName:"p"},"the Velocity team strongly recommends that you use Fabric\nwith the FabricProxy-Lite mod"),". Fabric and FabricProxy-Lite do not by themselves change the vanilla\nexperience, and your server will remain compatible with vanilla clients. If you are unable (or\nunwilling) to run Fabric, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ME1312/VanillaCord"},"VanillaCord")," allows you to use\nlegacy BungeeCord forwarding."),(0,i.kt)("h3",{id:"spigot"},"Spigot"),(0,i.kt)("p",null,"Spigot is not well-tested with Velocity. However, it is based on vanilla and as it is the base for\nPaper, it is relatively well-supported."),(0,i.kt)("p",null,"Spigot does not support Velocity's modern forwarding, but does support legacy BungeeCord forwarding."),(0,i.kt)("h3",{id:"paper"},"Paper"),(0,i.kt)("p",null,"The Velocity project recommends using Paper for running a public server. Velocity works with all\nversions of Paper from 1.7.10 to the latest version."),(0,i.kt)("p",null,"You can use Velocity's modern forwarding if you run Paper 1.13.2 or higher. If you use Paper 1.12.2\nor lower, you must use legacy BungeeCord-style forwarding."),(0,i.kt)("h3",{id:"spongevanilla"},"SpongeVanilla"),(0,i.kt)("p",null,"SpongeVanilla is compatible with legacy BungeeCord-style forwarding. Our Sponge support largely\nfocuses on Forge compatibility, see below for more information."),(0,i.kt)("h2",{id:"modded-setups"},"Modded setups"),(0,i.kt)("h3",{id:"fabric"},"Fabric"),(0,i.kt)("p",null,"Velocity works with Fabric out of the box, but you should add support for player info forwarding\nusing a mod like ",(0,i.kt)("a",{parentName:"p",href:"https://modrinth.com/mod/fabricproxy-lite"},"FabricProxy-Lite")," (which supports\nVelocity modern forwarding)."),(0,i.kt)("p",null,"In addition, if you intend to run mods that add new content on top of vanilla, you should install\n",(0,i.kt)("a",{parentName:"p",href:"https://modrinth.com/mod/crossstitch"},"CrossStitch"),", which improves support for certain Minecraft\nfeatures that are extended by mods, such as custom argument types. This mod is officially maintained\nby the Velocity project."),(0,i.kt)("h3",{id:"minecraft-forge-113-and-above"},"Minecraft Forge (1.13 and above)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Minecraft Forge for Minecraft 1.13 and later is not compatible with Velocity")," due to changes made\nin the handshake protocol that are difficult for proxies to adapt to. Support is currently a work in\nprogress, but there is no set time for support to be available."),(0,i.kt)("h3",{id:"minecraft-forge-172-1122"},"Minecraft Forge (1.7.2-1.12.2)"),(0,i.kt)("p",null,"Minecraft Forge for Minecraft 1.7.2-1.12.2 is fully compatible with Velocity, as we make special\nprovisions to synchronize client state with each server. However, we ",(0,i.kt)("strong",{parentName:"p"},"strongly")," recommend the use\nof SpongeForge, as it allows you to use legacy BungeeCord player info forwarding and generally\nimproves proxy support in general."),(0,i.kt)("p",null,"Velocity does not support Forge-Bukkit hybrids - they have caused several issues, and the design of\nthe Bukkit API precludes any notion of sane mod support."),(0,i.kt)("h2",{id:"proxy-behind-proxy-bungeecordwaterfall-velocity-"},"Proxy-behind-proxy (BungeeCord/Waterfall, Velocity, ...)"),(0,i.kt)("p",null,"These setups are ",(0,i.kt)("em",{parentName:"p"},"completely unsupported"),". You are best advised to avoid them, as they can cause\nlots of issues. Most proxy-behind-proxy setups are either illogical in the first place or can be\nhandled more gracefully by better, more scalable and performant solutions."),(0,i.kt)("h2",{id:"other-implementations"},"Other Implementations"),(0,i.kt)("p",null,"This is, naturally, not an exhaustive list. Alternative implementations of the Minecraft protocol\nmay or may not work. We encourage you to experiment and to contribute back with your results."))}m.isMDXComponent=!0}}]);