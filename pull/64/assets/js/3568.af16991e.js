"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3568],{4907:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>u});var t=r(6687);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=t.createContext({}),s=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),u=o,f=c["".concat(d,".").concat(u)]||c[u]||g[u]||i;return r?t.createElement(f,a(a({ref:n},p),{},{components:r})):t.createElement(f,a({ref:n},p))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3568:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});r(6687);var t=r(4907);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a={slug:"/velocity/player-information-forwarding"},l="Configuring player information forwarding",d={unversionedId:"velocity/getting-started/forwarding",id:"velocity/getting-started/forwarding",title:"Configuring player information forwarding",description:"Velocity supports forwarding information about your players to your servers, such as IP addresses,",source:"@site/docs/velocity/getting-started/forwarding.md",sourceDirName:"velocity/getting-started",slug:"/velocity/player-information-forwarding",permalink:"/docs-previews/pull/64/velocity/player-information-forwarding",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/getting-started/forwarding.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646714966,formattedLastUpdatedAt:"3/8/2022",frontMatter:{slug:"/velocity/player-information-forwarding"},sidebar:"docs",previous:{title:"What Does Velocity Do For Me?",permalink:"/docs-previews/pull/64/velocity/why-velocity"},next:{title:"Frequently Asked Questions",permalink:"/docs-previews/pull/64/velocity/faq"}},s={},p=[{value:"Configuring modern forwarding",id:"configuring-modern-forwarding",level:2},{value:"Configuring modern forwarding for Paper",id:"configuring-modern-forwarding-for-paper",level:3},{value:"Configuring modern forwarding for Fabric",id:"configuring-modern-forwarding-for-fabric",level:2},{value:"Configuring legacy BungeeCord-compatible forwarding",id:"configuring-legacy-bungeecord-compatible-forwarding",level:2},{value:"Configuring legacy forwarding for Spigot / Paper",id:"configuring-legacy-forwarding-for-spigot--paper",level:3},{value:"Configuring legacy forwarding for Sponge",id:"configuring-legacy-forwarding-for-sponge",level:3},{value:"Configuring legacy forwarding for Fabric",id:"configuring-legacy-forwarding-for-fabric",level:3}],g={toc:p};function c(e){var n=e.components,r=i(e,["components"]);return(0,t.kt)("wrapper",o({},g,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",o({},{id:"configuring-player-information-forwarding"}),"Configuring player information forwarding"),(0,t.kt)("p",null,"Velocity supports forwarding information about your players to your servers, such as IP addresses,\nUUIDs and skins. Velocity supports three forwarding formats:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Velocity modern forwarding")," is a custom forwarding format (modern forwarding) that is more\nsecure."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"BungeeCord forwarding")," (also known as ",(0,t.kt)("em",{parentName:"li"},"legacy forwarding"),") which has better compatibility but\nis less secure."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"BungeeGuard"),", which is the same as BungeeCord forwarding but includes a secret key. It is\nbetter than BungeeCord forwarding alone, but it is less ideal than Velocity modern forwarding.")),(0,t.kt)("div",o({},{className:"admonition admonition-info alert alert--info"}),(0,t.kt)("div",o({parentName:"div"},{className:"admonition-heading"}),(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",o({parentName:"h5"},{className:"admonition-icon"}),(0,t.kt)("svg",o({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,t.kt)("path",o({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,t.kt)("div",o({parentName:"div"},{className:"admonition-content"}),(0,t.kt)("p",{parentName:"div"},'You may choose between only one of these forwarding formats. It is not currently possible to "mix\nand match" forwarding modes or use all the forwarding formats together. In general, if you are\nsupporting clients using Minecraft 1.13 and newer only, use Velocity modern forwarding, else you\nmust use BungeeCord forwarding.'))),(0,t.kt)("h2",o({},{id:"configuring-modern-forwarding"}),"Configuring modern forwarding"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"modern")," forwarding is a Velocity-native format. It forwards all player information in an efficient\nbinary format and employs a MAC code to make it much more difficult to trick the server into\nimpersonating your Velocity proxy. However, it is only available for Minecraft 1.13 or higher."),(0,t.kt)("div",o({},{className:"admonition admonition-caution alert alert--warning"}),(0,t.kt)("div",o({parentName:"div"},{className:"admonition-heading"}),(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",o({parentName:"h5"},{className:"admonition-icon"}),(0,t.kt)("svg",o({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,t.kt)("path",o({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,t.kt)("div",o({parentName:"div"},{className:"admonition-content"}),(0,t.kt)("p",{parentName:"div"},"Modern forwarding is incompatible with Minecraft versions below 1.13, Minecraft Forge, and the\nProtocolSupport plugin. If you use any of these, you will need to use legacy BungeeCord-compatible\nforwarding instead."))),(0,t.kt)("p",null,"To use modern forwarding with any supported server implementation, set the ",(0,t.kt)("inlineCode",{parentName:"p"},"player-info-forwarding"),"\nsetting in ",(0,t.kt)("inlineCode",{parentName:"p"},"velocity.toml")," to ",(0,t.kt)("inlineCode",{parentName:"p"},"modern"),". Then, you need to ensure your server is properly configured\nto use Velocity forwarding."),(0,t.kt)("h3",o({},{id:"configuring-modern-forwarding-for-paper"}),"Configuring modern forwarding for Paper"),(0,t.kt)("p",null,"Paper 1.14+ and above, along with Paper 1.13.1/1.13.2 build 377 and above support Velocity modern\nforwarding natively."),(0,t.kt)("p",null,"First, you need to disable BungeeCord forwarding if you had it enabled beforehand. Make sure\n",(0,t.kt)("inlineCode",{parentName:"p"},"settings.bungeecord")," is set to ",(0,t.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,t.kt)("inlineCode",{parentName:"p"},"spigot.yml"),"."),(0,t.kt)("p",null,"In ",(0,t.kt)("inlineCode",{parentName:"p"},"paper.yml"),", set ",(0,t.kt)("inlineCode",{parentName:"p"},"settings.velocity-support.enabled")," to true and\n",(0,t.kt)("inlineCode",{parentName:"p"},"settings.velocity-support.secret")," to match the secret in your ",(0,t.kt)("inlineCode",{parentName:"p"},"velocity.toml"),". You must also set\n",(0,t.kt)("inlineCode",{parentName:"p"},"settings.velocity-support.online-mode")," to the ",(0,t.kt)("inlineCode",{parentName:"p"},"online-mode")," setting in your ",(0,t.kt)("inlineCode",{parentName:"p"},"velocity.toml"),". Once\nyou're done editing ",(0,t.kt)("inlineCode",{parentName:"p"},"paper.yml"),", reboot your server."),(0,t.kt)("h2",o({},{id:"configuring-modern-forwarding-for-fabric"}),"Configuring modern forwarding for Fabric"),(0,t.kt)("p",null,"A mod called ",(0,t.kt)("a",o({parentName:"p"},{href:"https://modrinth.com/mod/fabricproxy-lite"}),"FabricProxy-Lite")," allows you to use\nVelocity modern forwarding with a modded server using Fabric."),(0,t.kt)("h2",o({},{id:"configuring-legacy-bungeecord-compatible-forwarding"}),"Configuring legacy BungeeCord-compatible forwarding"),(0,t.kt)("div",o({},{className:"admonition admonition-danger alert alert--danger"}),(0,t.kt)("div",o({parentName:"div"},{className:"admonition-heading"}),(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",o({parentName:"h5"},{className:"admonition-icon"}),(0,t.kt)("svg",o({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,t.kt)("path",o({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),(0,t.kt)("div",o({parentName:"div"},{className:"admonition-content"}),(0,t.kt)("p",{parentName:"div"},"Legacy forwarding is ",(0,t.kt)("strong",{parentName:"p"},"fundamentally insecure"),". If you must use it, you should understand\n",(0,t.kt)("a",o({parentName:"p"},{href:"/docs-previews/pull/64/velocity/security"}),"how to secure your server properly"),". That page reviews all the possible\noptions to secure your server so that nothing aside from the proxy can connect to your server."))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"legacy")," forwarding is the player information forwarding protocol that is used by BungeeCord when\nenabling IP forwarding from BungeeCord. Due to this, it is ubiquitous and well-supported by most\nserver implementations. It has excellent compatibility (supporting versions as old as 1.7.2,\nreleased in 2013) and will work with Forge if you also install SpongeForge on your modded server and\nconfigure it correctly. However, it is not secure."),(0,t.kt)("p",null,"If you must use BungeeCord-compatible forwarding, simply set your ",(0,t.kt)("inlineCode",{parentName:"p"},"player-info-forwarding")," setting\nin ",(0,t.kt)("inlineCode",{parentName:"p"},"velocity.toml")," to ",(0,t.kt)("inlineCode",{parentName:"p"},"legacy"),". You will also need to make sure your server can accept the forwarded\nplayer data sent by Velocity."),(0,t.kt)("p",null,"To add some security, particularly for proxies hosted on shared hosting, Velocity optionally\nsupports the ",(0,t.kt)("a",o({parentName:"p"},{href:"https://www.spigotmc.org/resources/bungeeguard.79601/"}),"BungeeGuard")," plugin. To use it,\nset the ",(0,t.kt)("inlineCode",{parentName:"p"},"player-info-forwarding")," setting in ",(0,t.kt)("inlineCode",{parentName:"p"},"velocity.toml")," to ",(0,t.kt)("inlineCode",{parentName:"p"},"bungeeguard"),", then add the value in\n",(0,t.kt)("inlineCode",{parentName:"p"},"forwarding-secret")," to the token section in the BungeeGuard configuration."),(0,t.kt)("h3",o({},{id:"configuring-legacy-forwarding-for-spigot--paper"}),"Configuring legacy forwarding for Spigot / Paper"),(0,t.kt)("p",null,"To make Spigot or Paper understand the data forwarded from Velocity, set ",(0,t.kt)("inlineCode",{parentName:"p"},"settings.bungeecord")," to\n",(0,t.kt)("inlineCode",{parentName:"p"},"true")," in your ",(0,t.kt)("inlineCode",{parentName:"p"},"spigot.yml")," and then reboot your server."),(0,t.kt)("h3",o({},{id:"configuring-legacy-forwarding-for-sponge"}),"Configuring legacy forwarding for Sponge"),(0,t.kt)("p",null,"To configure Sponge to understand the data forwarded from Velocity, you will need to stop the server\nfirst, set ",(0,t.kt)("inlineCode",{parentName:"p"},"modules.bungeecord")," to ",(0,t.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"bungeecord.ip-forwarding")," to true in your\n",(0,t.kt)("inlineCode",{parentName:"p"},"config/sponge/global.conf")," file, and then restart your Sponge server."),(0,t.kt)("h3",o({},{id:"configuring-legacy-forwarding-for-fabric"}),"Configuring legacy forwarding for Fabric"),(0,t.kt)("div",o({},{className:"admonition admonition-caution alert alert--warning"}),(0,t.kt)("div",o({parentName:"div"},{className:"admonition-heading"}),(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",o({parentName:"h5"},{className:"admonition-icon"}),(0,t.kt)("svg",o({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,t.kt)("path",o({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,t.kt)("div",o({parentName:"div"},{className:"admonition-content"}),(0,t.kt)("p",{parentName:"div"},"There are no longer any actively supported mods that support legacy forwarding. Please use Velocity\nmodern forwarding instead."))))}c.isMDXComponent=!0}}]);