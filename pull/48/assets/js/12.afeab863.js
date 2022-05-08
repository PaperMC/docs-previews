"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12],{4907:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(6687);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),y=o,f=c["".concat(s,".").concat(y)]||c[y]||d[y]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},12:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(4907);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i={slug:"/faq"},l="Frequently Asked Questions",s={unversionedId:"admin/getting-started/faq",id:"admin/getting-started/faq",title:"Frequently Asked Questions",description:"Over the years, we've been asked many of the same questions by users. This FAQ attempts to answer as",source:"@site/docs/velocity/admin/getting-started/faq.md",sourceDirName:"admin/getting-started",slug:"/faq",permalink:"/docs-previews/pull/48/velocity/faq",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/admin/getting-started/faq.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1649618994,formattedLastUpdatedAt:"4/10/2022",frontMatter:{slug:"/faq"},sidebar:"primary",previous:{title:"Configuring player information forwarding",permalink:"/docs-previews/pull/48/velocity/player-information-forwarding"},next:{title:"How-to Guides",permalink:"/docs-previews/pull/48/velocity/cat/admin/how-to-guides"}},p={},u=[{value:"What version of Java does Velocity require?",id:"what-version-of-java-does-velocity-require",level:2},{value:"Where can I find Velocity plugins?",id:"where-can-i-find-velocity-plugins",level:2},{value:"Does Velocity support plugins developed for BungeeCord or Waterfall?",id:"does-velocity-support-plugins-developed-for-bungeecord-or-waterfall",level:2},{value:"Help, I can&#39;t connect to my server!",id:"help-i-cant-connect-to-my-server",level:2},{value:"Basic Troubleshooting",id:"basic-troubleshooting",level:3},{value:"Improper Player Information Forwarding Errors",id:"improper-player-information-forwarding-errors",level:3},{value:"Improper Modern Player Information Forwarding",id:"improper-modern-player-information-forwarding",level:3},{value:"Invalid Payload Register",id:"invalid-payload-register",level:3},{value:"Argument type identifier XXX unknown",id:"argument-type-identifier-xxx-unknown",level:3},{value:"Read time out while switching to a Forge server",id:"read-time-out-while-switching-to-a-forge-server",level:3},{value:"My forced hosts are not working!",id:"my-forced-hosts-are-not-working",level:3}],d={toc:u};function c(e){var r=e.components,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"frequently-asked-questions"}),"Frequently Asked Questions"),(0,n.kt)("p",null,"Over the years, we've been asked many of the same questions by users. This FAQ attempts to answer as\nmany of these questions from the user perspective."),(0,n.kt)("h2",o({},{id:"what-version-of-java-does-velocity-require"}),"What version of Java does Velocity require?"),(0,n.kt)("p",null,"Velocity 3.0.0 requires Java 11 or above."),(0,n.kt)("h2",o({},{id:"where-can-i-find-velocity-plugins"}),"Where can I find Velocity plugins?"),(0,n.kt)("p",null,"A good source for finding plugins compatible with Velocity would be our\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://forums.velocitypowered.com/c/plugins/plugin-releases/6"}),"forums"),"."),(0,n.kt)("h2",o({},{id:"does-velocity-support-plugins-developed-for-bungeecord-or-waterfall"}),"Does Velocity support plugins developed for BungeeCord or Waterfall?"),(0,n.kt)("p",null,"No. Many of the things Velocity can do could not be done if we decided to support BungeeCord\nplugins."),(0,n.kt)("p",null,"However, certain plugins may have Velocity ports available or alternatives are available. In\naddition, plugins that support BungeeCord but only require that they are installed on the server\n(nothing on the proxy) typically use the BungeeCord plugin messaging channel, which is supported\nnatively by the latest versions of Velocity."),(0,n.kt)("h2",o({},{id:"help-i-cant-connect-to-my-server"}),"Help, I can't connect to my server!"),(0,n.kt)("p",null,"There are a few common causes for why you can't connect to the server."),(0,n.kt)("h3",o({},{id:"basic-troubleshooting"}),"Basic Troubleshooting"),(0,n.kt)("p",null,"As a first step, you should verify:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"that your servers are started and are responsive to console input"),(0,n.kt)("li",{parentName:"ul"},"that the proxy is started"),(0,n.kt)("li",{parentName:"ul"},"that the server and proxy are bound to the appropriate port and IP")),(0,n.kt)("h3",o({},{id:"improper-player-information-forwarding-errors"}),"Improper Player Information Forwarding Errors"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Can't connect to server lobby: If you wish to use IP forwarding, please enable it in your Bungeecord config as well!\n")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Can't connect to server lobby: Your server did not send a forwarding request to the proxy. Is it set up correctly?\n")),(0,n.kt)("p",null,"These errors are result of improper configuration. See\n",(0,n.kt)("a",o({parentName:"p"},{href:"/docs-previews/pull/48/velocity/player-information-forwarding"}),"Player Information Forwarding")," to learn how to properly set up player information\nforwarding."),(0,n.kt)("h3",o({},{id:"improper-modern-player-information-forwarding"}),"Improper Modern Player Information Forwarding"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Can't connect to server lobby: This server requires you to connect with Velocity.\n")),(0,n.kt)("p",null,"This error is a result of enabling Velocity modern forwarding on your backend server but not\nenabling it in Velocity. To fix this error, ensure that you have set up the correct player\ninformation forwarding method on the proxy. See ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs-previews/pull/48/velocity/player-information-forwarding"}),"Player Information Forwarding")," for\nmore information."),(0,n.kt)("h3",o({},{id:"invalid-payload-register"}),"Invalid Payload Register"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"[server connection] player1 -> hub has connected\n[connected player] player1 (/localhost:58943): kicked from server hub: Invalid payload REGISTER!\n")),(0,n.kt)("p",null,"This error typically occurs on Spigot-based servers when someone connects with a modded client. You\ncan fix this issue if you use Paper (or a fork of Paper) 1.12.2 or above by adding the startup flag\n",(0,n.kt)("inlineCode",{parentName:"p"},"-Dpaper.disableChannelLimit=true")," to the server's startup flags and restarting the server."),(0,n.kt)("h3",o({},{id:"argument-type-identifier-xxx-unknown"}),"Argument type identifier XXX unknown"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Argument type identifier <namespace>:<name> unknown.\n")),(0,n.kt)("p",null,"If you receive this message, there are two possibilities. If you run a modded server and are using\nFabric 1.16+ and above, update to at least Velocity 1.1.2 and install\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.curseforge.com/minecraft/mc-mods/crossstitch"}),"CrossStitch"),". (If you are running any\nother kind of modded server and have it working with Velocity, let us know!)"),(0,n.kt)("p",null,"If you receive this message but run a vanilla server,\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/PaperMC/Velocity/issues/new"}),"please report a bug to the Velocity issue tracker"),"."),(0,n.kt)("h3",o({},{id:"read-time-out-while-switching-to-a-forge-server"}),"Read time out while switching to a Forge server"),(0,n.kt)("p",null,"Particularly for some very large mod packs, there is an elevated risk of the connection between the\nplayer and the proxy dropping. There is not much we can do on the proxy end to alleviate this. We\nsuggest either reducing the number of mods your server uses, or raise the ",(0,n.kt)("inlineCode",{parentName:"p"},"read-timeout")," setting in\n",(0,n.kt)("inlineCode",{parentName:"p"},"velocity.toml")," and add the ",(0,n.kt)("inlineCode",{parentName:"p"},"-Dfml.readTimeout")," startup flag to your Forge server and setting it to\nthe value (in seconds) you chose for the proxy. For instance, if you determine that 120 seconds is\nthe best read timeout to use, use ",(0,n.kt)("inlineCode",{parentName:"p"},"-Dfml.readTimeout=120")," and set ",(0,n.kt)("inlineCode",{parentName:"p"},"read-timeout = 120000")," in\n",(0,n.kt)("inlineCode",{parentName:"p"},"velocity.toml"),"."),(0,n.kt)("h3",o({},{id:"my-forced-hosts-are-not-working"}),"My forced hosts are not working!"),(0,n.kt)("p",null,"First, double-check that you properly set up DNS records pointing to your proxy for the forced hosts\nyou have selected. Forced hosts are ",(0,n.kt)("em",{parentName:"p"},"not")," compatible with SRV records, so if you are relying on SRV\nrecords to direct the player to the proxy, you will need to find a way to get the proxy running on\nthe default Minecraft port, 25565."))}c.isMDXComponent=!0}}]);