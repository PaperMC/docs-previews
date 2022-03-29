"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[719],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,y=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4855:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return h}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={slug:"/velocity/why-velocity"},l="What Does Velocity Do For Me?",c={unversionedId:"velocity/getting-started/why-velocity",id:"velocity/getting-started/why-velocity",title:"What Does Velocity Do For Me?",description:"We believe that Velocity is one of the best proxies for Minecraft around, and there's not much",source:"@site/docs/velocity/getting-started/why-velocity.md",sourceDirName:"velocity/getting-started",slug:"/velocity/why-velocity",permalink:"/docs-previews/pull/16/velocity/why-velocity",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/getting-started/why-velocity.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646714966,formattedLastUpdatedAt:"3/8/2022",frontMatter:{slug:"/velocity/why-velocity"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs-previews/pull/16/velocity/getting-started/"},next:{title:"Configuring player information forwarding",permalink:"/docs-previews/pull/16/velocity/player-information-forwarding"}},p={},d=[{value:"Strong experience",id:"strong-experience",level:2},{value:"Leading performance",id:"leading-performance",level:2},{value:"No entity ID rewriting",id:"no-entity-id-rewriting",level:3},{value:"Going deep",id:"going-deep",level:3},{value:"Internal stability policies",id:"internal-stability-policies",level:3},{value:"Control is in your hands",id:"control-is-in-your-hands",level:3},{value:"Improved security",id:"improved-security",level:2},{value:"Standards and mod support",id:"standards-and-mod-support",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-does-velocity-do-for-me"},"What Does Velocity Do For Me?"),(0,i.kt)("p",null,"We believe that Velocity is one of the best proxies for ",(0,i.kt)("em",{parentName:"p"},"Minecraft"),' around, and there\'s not much\nthat can top it. However, we do diverge from more established, mainstream solutions in some\nimportant ways. That can make Velocity a bit hard to sell. We are frequently asked "why?" so often.\nThis page is our answer to that question.'),(0,i.kt)("h2",{id:"strong-experience"},"Strong experience"),(0,i.kt)("p",null,"The founder and primary developer of Velocity (Tux) has been active in developing proxy software for\n",(0,i.kt)("em",{parentName:"p"},"Minecraft: Java Edition")," since 2013. They created the RedisBungee plugin, contributed to BungeeCord\nfrom 2014 to 2017, and also founded the Waterfall project and led it from 2016 to 2017. In fact, the\ncurrent maintainer of Waterfall helped encourage them to start a brand new proxy from the ground up!"),(0,i.kt)("h2",{id:"leading-performance"},"Leading performance"),(0,i.kt)("p",null,"Velocity powers several highly-populated Minecraft networks, while using fewer resources than the\ncompetition. The recipe to the sauce is simple."),(0,i.kt)("h3",{id:"no-entity-id-rewriting"},"No entity ID rewriting"),(0,i.kt)("p",null,"When a Minecraft client connects to another Minecraft server, the server will send back an ID that\nuniquely identifies a specific player connection. This ID is used in packets that target the player\nthat the server may send. But what happens when they're actually connecting a proxy that has the\nability to change what server the player is connected to?"),(0,i.kt)("p",null,"Other proxy solutions try to solve this problem by rewriting entity IDs that reference the current\nplayer, changing it from the entity ID assigned by the server the player is currently connected to,\nto the entity ID that the player got when they connected to the first server they connected to\nthrough the proxy. This approach is often complicated, leads to bugs, reduces performance, breaks\nmods, and ultimately cannot be a complete solution."),(0,i.kt)("p",null,"However, the Minecraft client actually supports changing its entity ID with a special packet\nsequence. Velocity takes advantage of this and forces the client to change its entity ID. This\napproach improves performance, improves mod compatibility, and reduces issues caused by incomplete\nentity ID rewrites."),(0,i.kt)("h3",{id:"going-deep"},"Going deep"),(0,i.kt)("p",null,"Velocity goes deeper than optimizing the handling of the Minecraft protocol. Smart handling of the\nprotocol produces incredible performance gains but for more performance, we need to go much deeper."),(0,i.kt)("p",null,"One way in which we drastically improve performance and throughput is by improving the speed of\ncompressing packets to be sent to the client. On supported platforms (Linux x86_64 and aarch64),\nVelocity is able to replace the zlib library ( which implements the compression algorithm used by\nthe Minecraft protocol) with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ebiggers/libdeflate"},"libdeflate")," which is twice as\nfast as zlib while delivering a similar compression ratio."),(0,i.kt)("p",null,"Velocity also employs several tricks to get the JIT (just-in-time) compiler on our side. Those\ntricks require deep understanding of how Java works, but we put in the work to apply those tricks\nwhich translate to increased performance."),(0,i.kt)("h3",{id:"internal-stability-policies"},"Internal stability policies"),(0,i.kt)("p",null,"Finally, Velocity does not attempt to maintain a stable internal API between minor and major\nreleases. This allows Velocity to be more flexible and still deliver performance improvements and\nnew features with each release. For instance, Velocity 1.1.0 delivered massive performance\nimprovements and added many significant new features by breaking parts of the internal API while\nstill keeping full compatibility with older plugins. Compare to BungeeCord which is often very\nconservative about API breaks and when it does so, provides little notice of the break, and even\nwhen doing a break, does not take the opportunity to seriously improve the API being broken (for\ninstance, adding RGB support to ",(0,i.kt)("inlineCode",{parentName:"p"},"ChatColor"),")."),(0,i.kt)("h3",{id:"control-is-in-your-hands"},"Control is in your hands"),(0,i.kt)("p",null,"We take pride in tuning Velocity to be the most performant proxy, but in case the speed provided\nout-of-the-box is not good enough, you can easily tweak several performance-related settings in\n",(0,i.kt)("inlineCode",{parentName:"p"},"velocity.toml"),"."),(0,i.kt)("h2",{id:"improved-security"},"Improved security"),(0,i.kt)("p",null,"Velocity also features more security features, some of which are unique to Velocity. We proactively\nforeclose as many denial-of-service attacks as soon as possible and feature a unique player info\nforwarding system for Minecraft 1.13+ that requires the server and proxy to know a pre-arranged key."),(0,i.kt)("h2",{id:"standards-and-mod-support"},"Standards and mod support"),(0,i.kt)("p",null,"Unlike certain platforms which only provide lip service to the modding community (and can be at time\nhostile to them), Velocity embraces the richness of the platform Minecraft provides. As just a small\nexample, we have a Fabric mod that\n",(0,i.kt)("a",{parentName:"p",href:"https://www.curseforge.com/minecraft/mc-mods/crossstitch"},"helps bridge the gap between Velocity itself and mods that extend the Minecraft protocol"),"\nand feature full Forge support for 1.7 through 1.12.2, with support for newer versions in\ndevelopment. Velocity also supports emerging standard libraries in the community such as Kyori's\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KyoriPowered/adventure"},"Adventure")," library. We collaborate with the Minecraft\nmodding community."))}h.isMDXComponent=!0}}]);