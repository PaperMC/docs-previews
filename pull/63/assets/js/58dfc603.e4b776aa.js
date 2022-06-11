"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9913],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),y=n,f=c["".concat(s,".").concat(y)]||c[y]||d[y]||a;return t?o.createElement(f,i(i({ref:r},u),{},{components:t})):o.createElement(f,i({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2206:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>y,default:()=>v,frontMatter:()=>c,metadata:()=>f,toc:()=>h});var o=t(3905),n=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&u(e,t,r[t]);if(l)for(var t of l(r))p.call(r,t)&&u(e,t,r[t]);return e};const c={slug:"/faq"},y="Frequently Asked Questions",f={unversionedId:"admin/getting-started/faq",id:"admin/getting-started/faq",title:"Frequently Asked Questions",description:"Over the years, we've been asked many of the same questions by users. This FAQ attempts to answer as",source:"@site/docs/velocity/admin/getting-started/faq.md",sourceDirName:"admin/getting-started",slug:"/faq",permalink:"/velocity/faq",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/admin/getting-started/faq.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1649618994,formattedLastUpdatedAt:"4/10/2022",frontMatter:{slug:"/faq"},sidebar:"primary",previous:{title:"Configuring player information forwarding",permalink:"/velocity/player-information-forwarding"},next:{title:"How-to Guides",permalink:"/velocity/cat/admin/how-to-guides"}},m={},h=[{value:"What version of Java does Velocity require?",id:"what-version-of-java-does-velocity-require",level:2},{value:"Where can I find Velocity plugins?",id:"where-can-i-find-velocity-plugins",level:2},{value:"Does Velocity support plugins developed for BungeeCord or Waterfall?",id:"does-velocity-support-plugins-developed-for-bungeecord-or-waterfall",level:2},{value:"Help, I can&#39;t connect to my server!",id:"help-i-cant-connect-to-my-server",level:2},{value:"Basic Troubleshooting",id:"basic-troubleshooting",level:3},{value:"Improper Player Information Forwarding Errors",id:"improper-player-information-forwarding-errors",level:3},{value:"Improper Modern Player Information Forwarding",id:"improper-modern-player-information-forwarding",level:3},{value:"Invalid Payload Register",id:"invalid-payload-register",level:3},{value:"Argument type identifier XXX unknown",id:"argument-type-identifier-xxx-unknown",level:3},{value:"Read time out while switching to a Forge server",id:"read-time-out-while-switching-to-a-forge-server",level:3},{value:"My forced hosts are not working!",id:"my-forced-hosts-are-not-working",level:3}],g={toc:h};function v(e){var r,t=e,{components:n}=t,u=((e,r)=>{var t={};for(var o in e)s.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))r.indexOf(o)<0&&p.call(e,o)&&(t[o]=e[o]);return t})(t,["components"]);return(0,o.kt)("wrapper",(r=d(d({},g),u),a(r,i({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("h1",d({},{id:"frequently-asked-questions"}),"Frequently Asked Questions"),(0,o.kt)("p",null,"Over the years, we've been asked many of the same questions by users. This FAQ attempts to answer as\nmany of these questions from the user perspective."),(0,o.kt)("h2",d({},{id:"what-version-of-java-does-velocity-require"}),"What version of Java does Velocity require?"),(0,o.kt)("p",null,"Velocity 3.0.0 requires Java 11 or above."),(0,o.kt)("h2",d({},{id:"where-can-i-find-velocity-plugins"}),"Where can I find Velocity plugins?"),(0,o.kt)("p",null,"A good source for finding plugins compatible with Velocity would be our\n",(0,o.kt)("a",d({parentName:"p"},{href:"https://forums.velocitypowered.com/c/plugins/plugin-releases/6"}),"forums"),"."),(0,o.kt)("h2",d({},{id:"does-velocity-support-plugins-developed-for-bungeecord-or-waterfall"}),"Does Velocity support plugins developed for BungeeCord or Waterfall?"),(0,o.kt)("p",null,"No. Many of the things Velocity can do could not be done if we decided to support BungeeCord\nplugins."),(0,o.kt)("p",null,"However, certain plugins may have Velocity ports available or alternatives are available. In\naddition, plugins that support BungeeCord but only require that they are installed on the server\n(nothing on the proxy) typically use the BungeeCord plugin messaging channel, which is supported\nnatively by the latest versions of Velocity."),(0,o.kt)("h2",d({},{id:"help-i-cant-connect-to-my-server"}),"Help, I can't connect to my server!"),(0,o.kt)("p",null,"There are a few common causes for why you can't connect to the server."),(0,o.kt)("h3",d({},{id:"basic-troubleshooting"}),"Basic Troubleshooting"),(0,o.kt)("p",null,"As a first step, you should verify:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"that your servers are started and are responsive to console input"),(0,o.kt)("li",{parentName:"ul"},"that the proxy is started"),(0,o.kt)("li",{parentName:"ul"},"that the server and proxy are bound to the appropriate port and IP")),(0,o.kt)("h3",d({},{id:"improper-player-information-forwarding-errors"}),"Improper Player Information Forwarding Errors"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"Can't connect to server lobby: If you wish to use IP forwarding, please enable it in your Bungeecord config as well!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"Can't connect to server lobby: Your server did not send a forwarding request to the proxy. Is it set up correctly?\n")),(0,o.kt)("p",null,"These errors are result of improper configuration. See\n",(0,o.kt)("a",d({parentName:"p"},{href:"/velocity/player-information-forwarding"}),"Player Information Forwarding")," to learn how to properly set up player information\nforwarding."),(0,o.kt)("h3",d({},{id:"improper-modern-player-information-forwarding"}),"Improper Modern Player Information Forwarding"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"Can't connect to server lobby: This server requires you to connect with Velocity.\n")),(0,o.kt)("p",null,"This error is a result of enabling Velocity modern forwarding on your backend server but not\nenabling it in Velocity. To fix this error, ensure that you have set up the correct player\ninformation forwarding method on the proxy. See ",(0,o.kt)("a",d({parentName:"p"},{href:"/velocity/player-information-forwarding"}),"Player Information Forwarding")," for\nmore information."),(0,o.kt)("h3",d({},{id:"invalid-payload-register"}),"Invalid Payload Register"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"[server connection] player1 -> hub has connected\n[connected player] player1 (/localhost:58943): kicked from server hub: Invalid payload REGISTER!\n")),(0,o.kt)("p",null,"This error typically occurs on Spigot-based servers when someone connects with a modded client. You\ncan fix this issue if you use Paper (or a fork of Paper) 1.12.2 or above by adding the startup flag\n",(0,o.kt)("inlineCode",{parentName:"p"},"-Dpaper.disableChannelLimit=true")," to the server's startup flags and restarting the server."),(0,o.kt)("h3",d({},{id:"argument-type-identifier-xxx-unknown"}),"Argument type identifier XXX unknown"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"Argument type identifier <namespace>:<name> unknown.\n")),(0,o.kt)("p",null,"If you receive this message, there are two possibilities. If you run a modded server and are using\nFabric 1.16+ and above, update to at least Velocity 1.1.2 and install\n",(0,o.kt)("a",d({parentName:"p"},{href:"https://www.curseforge.com/minecraft/mc-mods/crossstitch"}),"CrossStitch"),". (If you are running any\nother kind of modded server and have it working with Velocity, let us know!)"),(0,o.kt)("p",null,"If you receive this message but run a vanilla server,\n",(0,o.kt)("a",d({parentName:"p"},{href:"https://github.com/PaperMC/Velocity/issues/new"}),"please report a bug to the Velocity issue tracker"),"."),(0,o.kt)("h3",d({},{id:"read-time-out-while-switching-to-a-forge-server"}),"Read time out while switching to a Forge server"),(0,o.kt)("p",null,"Particularly for some very large mod packs, there is an elevated risk of the connection between the\nplayer and the proxy dropping. There is not much we can do on the proxy end to alleviate this. We\nsuggest either reducing the number of mods your server uses, or raise the ",(0,o.kt)("inlineCode",{parentName:"p"},"read-timeout")," setting in\n",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.toml")," and add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-Dfml.readTimeout")," startup flag to your Forge server and setting it to\nthe value (in seconds) you chose for the proxy. For instance, if you determine that 120 seconds is\nthe best read timeout to use, use ",(0,o.kt)("inlineCode",{parentName:"p"},"-Dfml.readTimeout=120")," and set ",(0,o.kt)("inlineCode",{parentName:"p"},"read-timeout = 120000")," in\n",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.toml"),"."),(0,o.kt)("h3",d({},{id:"my-forced-hosts-are-not-working"}),"My forced hosts are not working!"),(0,o.kt)("p",null,"First, double-check that you properly set up DNS records pointing to your proxy for the forced hosts\nyou have selected. Forced hosts are ",(0,o.kt)("em",{parentName:"p"},"not")," compatible with SRV records, so if you are relying on SRV\nrecords to direct the player to the proxy, you will need to find a way to get the proxy running on\nthe default Minecraft port, 25565."))}v.isMDXComponent=!0}}]);