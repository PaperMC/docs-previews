"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8577],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4681:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={},u="Getting Started",p={unversionedId:"waterfall/getting-started",id:"waterfall/getting-started",title:"Getting Started",description:"What is Waterfall?",source:"@site/docs/waterfall/getting-started.md",sourceDirName:"waterfall",slug:"/waterfall/getting-started",permalink:"/docs-previews/pull/27/waterfall/getting-started",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/waterfall/getting-started.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646718401,formattedLastUpdatedAt:"3/8/2022",frontMatter:{},sidebar:"docs",previous:{title:"Welcome to the Waterfall Wiki",permalink:"/docs-previews/pull/27/waterfall/"},next:{title:"Configuration",permalink:"/docs-previews/pull/27/waterfall/configuration"}},s={},c=[{value:"What is Waterfall?",id:"what-is-waterfall",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Migrating From BungeeCord",id:"migrating-from-bungeecord",level:2},{value:"Getting A Proxy Jar",id:"getting-a-proxy-jar",level:2},{value:"Running The Proxy",id:"running-the-proxy",level:2},{value:"Updating The Proxy",id:"updating-the-proxy",level:2}],d={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"what-is-waterfall"},"What is Waterfall?"),(0,o.kt)("p",null,"Waterfall is a fork of BungeeCord, a proxy used primarily to teleport players between multiple\nMinecraft servers."),(0,o.kt)("p",null,"Waterfall focuses on three main areas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stability: Waterfall aims to be stable. We will achieve this through making the code base testable\nand discouraging practices that lead to proxy lag."),(0,o.kt)("li",{parentName:"ul"},"Features: Waterfall aims to include more features than canonical BungeeCord."),(0,o.kt)("li",{parentName:"ul"},"Scalability: Waterfall should be able to handle a large number of concurrent players, given a\nreasonably modern CPU, memory, and good network connection.")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Waterfall requires ",(0,o.kt)("strong",{parentName:"p"},"Java 8")," or newer to run. The Paper team recommends you run on Java 11 or\nhigher. Generally, LTS versions of Java are targeted, though you may have luck on newer versions."),(0,o.kt)("h2",{id:"migrating-from-bungeecord"},"Migrating From BungeeCord"),(0,o.kt)("p",null,"Waterfall is a drop in replacements for BungeeCord, you don't need to make any changes to your\nconfiguration."),(0,o.kt)("h2",{id:"getting-a-proxy-jar"},"Getting A Proxy Jar"),(0,o.kt)("p",null,"Paper provides runnable proxy jars directly from our ","[downloads\npage][https://papermc.io/downloads#waterfall]","."),(0,o.kt)("p",null,"Click on the build number to download a file."),(0,o.kt)("h2",{id:"running-the-proxy"},"Running The Proxy"),(0,o.kt)("p",null,"To run the proxy, simply start it up like any other Java application."),(0,o.kt)("p",null,"Open your terminal, navigate to the saved location, and then run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"java -Xms512M -Xmx512M -jar waterfall-###.jar\n")),(0,o.kt)("p",null,"Aikar's recommended flags for Waterfall are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"java -Xms512M -Xmx512M -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -jar waterfall-###.jar\n")),(0,o.kt)("p",null,"The amount of memory can be set by changing the numbers in the ",(0,o.kt)("inlineCode",{parentName:"p"},"-Xms")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-Xmx")," flags."),(0,o.kt)("p",null,"To configure your proxy, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs-previews/pull/27/waterfall/configuration"},"configuration")," page."),(0,o.kt)("h2",{id:"updating-the-proxy"},"Updating The Proxy"),(0,o.kt)("p",null,"To update the proxy, first stop it safely by executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," command. Then replace the old proxy\njar with a new one, and start the proxy. That's it."))}f.isMDXComponent=!0}}]);