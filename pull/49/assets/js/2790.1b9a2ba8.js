"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2790],{4907:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,g=d["".concat(p,".").concat(f)]||d[f]||c[f]||l;return r?a.createElement(g,o(o({ref:t},s),{},{components:r})):a.createElement(g,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});r(6687);var a=r(4907);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o={},i="Getting Started",p={unversionedId:"waterfall/getting-started",id:"waterfall/getting-started",title:"Getting Started",description:"What is Waterfall?",source:"@site/docs/waterfall/getting-started.md",sourceDirName:"waterfall",slug:"/waterfall/getting-started",permalink:"/docs-previews/pull/49/waterfall/getting-started",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/waterfall/getting-started.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646718401,formattedLastUpdatedAt:"3/8/2022",frontMatter:{},sidebar:"docs",previous:{title:"Welcome to the Waterfall Wiki",permalink:"/docs-previews/pull/49/waterfall/"},next:{title:"Configuration",permalink:"/docs-previews/pull/49/waterfall/configuration"}},u={},s=[{value:"What is Waterfall?",id:"what-is-waterfall",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Migrating From BungeeCord",id:"migrating-from-bungeecord",level:2},{value:"Getting A Proxy Jar",id:"getting-a-proxy-jar",level:2},{value:"Running The Proxy",id:"running-the-proxy",level:2},{value:"Updating The Proxy",id:"updating-the-proxy",level:2}],c={toc:s};function d(e){var t=e.components,r=l(e,["components"]);return(0,a.kt)("wrapper",n({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"getting-started"}),"Getting Started"),(0,a.kt)("h2",n({},{id:"what-is-waterfall"}),"What is Waterfall?"),(0,a.kt)("p",null,"Waterfall is a fork of BungeeCord, a proxy used primarily to teleport players between multiple\nMinecraft servers."),(0,a.kt)("p",null,"Waterfall focuses on three main areas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stability: Waterfall aims to be stable. We will achieve this through making the code base testable\nand discouraging practices that lead to proxy lag."),(0,a.kt)("li",{parentName:"ul"},"Features: Waterfall aims to include more features than canonical BungeeCord."),(0,a.kt)("li",{parentName:"ul"},"Scalability: Waterfall should be able to handle a large number of concurrent players, given a\nreasonably modern CPU, memory, and good network connection.")),(0,a.kt)("h2",n({},{id:"requirements"}),"Requirements"),(0,a.kt)("p",null,"Waterfall requires ",(0,a.kt)("strong",{parentName:"p"},"Java 8")," or newer to run. The Paper team recommends you run on Java 11 or\nhigher. Generally, LTS versions of Java are targeted, though you may have luck on newer versions."),(0,a.kt)("h2",n({},{id:"migrating-from-bungeecord"}),"Migrating From BungeeCord"),(0,a.kt)("p",null,"Waterfall is a drop in replacements for BungeeCord, you don't need to make any changes to your\nconfiguration."),(0,a.kt)("h2",n({},{id:"getting-a-proxy-jar"}),"Getting A Proxy Jar"),(0,a.kt)("p",null,"Paper provides runnable proxy jars directly from our ","[downloads\npage][https://papermc.io/downloads#waterfall]","."),(0,a.kt)("p",null,"Click on the build number to download a file."),(0,a.kt)("h2",n({},{id:"running-the-proxy"}),"Running The Proxy"),(0,a.kt)("p",null,"To run the proxy, simply start it up like any other Java application."),(0,a.kt)("p",null,"Open your terminal, navigate to the saved location, and then run"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"java -Xms512M -Xmx512M -jar waterfall-###.jar\n")),(0,a.kt)("p",null,"Aikar's recommended flags for Waterfall are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"java -Xms512M -Xmx512M -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -jar waterfall-###.jar\n")),(0,a.kt)("p",null,"The amount of memory can be set by changing the numbers in the ",(0,a.kt)("inlineCode",{parentName:"p"},"-Xms")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"-Xmx")," flags."),(0,a.kt)("p",null,"To configure your proxy, see the ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs-previews/pull/49/waterfall/configuration"}),"configuration")," page."),(0,a.kt)("h2",n({},{id:"updating-the-proxy"}),"Updating The Proxy"),(0,a.kt)("p",null,"To update the proxy, first stop it safely by executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"end")," command. Then replace the old proxy\njar with a new one, and start the proxy. That's it."))}d.isMDXComponent=!0}}]);