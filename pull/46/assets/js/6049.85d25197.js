"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6049],{4907:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(6687);var o=n(4907);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={slug:"/velocity/tuning"},l="Tuning Velocity",s={unversionedId:"velocity/how-to/tuning",id:"velocity/how-to/tuning",title:"Tuning Velocity",description:"Velocity comes with good performance out of the box. We go in deep, starting from smart algorithmic",source:"@site/docs/velocity/how-to/tuning.md",sourceDirName:"velocity/how-to",slug:"/velocity/tuning",permalink:"/docs-previews/pull/46/velocity/tuning",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/how-to/tuning.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1646787673,formattedLastUpdatedAt:"3/9/2022",frontMatter:{slug:"/velocity/tuning"},sidebar:"docs",previous:{title:"Securing Your Servers",permalink:"/docs-previews/pull/46/velocity/security"},next:{title:"Migration Guide",permalink:"/docs-previews/pull/46/velocity/migration"}},c={},u=[{value:"Host the proxy on Linux",id:"host-the-proxy-on-linux",level:2},{value:"Allocate server resources appropriately",id:"allocate-server-resources-appropriately",level:2},{value:"Special notes regarding speculative execution security vulnerabilities",id:"special-notes-regarding-speculative-execution-security-vulnerabilities",level:3},{value:"Allocate enough heap",id:"allocate-enough-heap",level:2},{value:"Special notes for containers",id:"special-notes-for-containers",level:3},{value:"Tune your startup flags",id:"tune-your-startup-flags",level:2},{value:"Explanation of the flags",id:"explanation-of-the-flags",level:3},{value:"Other configurations",id:"other-configurations",level:3},{value:"ZGC",id:"zgc",level:4},{value:"Shenandoah",id:"shenandoah",level:4},{value:"OpenJ9",id:"openj9",level:4}],p={toc:u};function h(e){var t=e.components,n=r(e,["components"]);return(0,o.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",a({},{id:"tuning-velocity"}),"Tuning Velocity"),(0,o.kt)("p",null,"Velocity comes with good performance out of the box. We go in deep, starting from smart algorithmic\nchoices, making strategic usage of native libraries, all the way to the JVM level, optimizing the\nproxy so that the JVM will make better decisions when optimizing the code."),(0,o.kt)("h2",a({},{id:"host-the-proxy-on-linux"}),"Host the proxy on Linux"),(0,o.kt)("p",null,"Velocity comes with high-performance, specially tuned native libraries for compression and\nencryption, along with including native transports from Netty. However, due to support constraints,\nthe compiled natives are only verified to work on Linux x86_64 and aarch64. While Velocity does not\nrequire the natives to work, you will suffer from degraded performance. For this reason, we strongly\nrecommend that all production deployments of Velocity run on x86-64 Linux."),(0,o.kt)("h2",a({},{id:"allocate-server-resources-appropriately"}),"Allocate server resources appropriately"),(0,o.kt)("p",null,"You should always make sure to allocate the correct amount of heap, network bandwidth, and get the\nright CPU for the amount of players you want to have on your proxy at a given time. For instance, it\nis unlikely you'll be able to get 1,000 players on a Raspberry Pi Zero, but you'll have a much\nbetter chance if you have a recent high-end server CPU from Intel or AMD."),(0,o.kt)("p",null,'There is no "one-size-fits-all" hardware recommendation, only general guidelines for the amount of\nplayers you can expect:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prefer lots of cores but lower clock speeds. Unlike the Minecraft server, Velocity can actually\nbenefit from the extra cores and single-threaded performance is not as important."),(0,o.kt)("li",{parentName:"ul"},"You should always have enough memory to run Velocity, including room for JVM overhead and for your\noperating system. For a rough minimum recommended memory amount, double the size of the proxy heap\nand then add 2GB. For instance, for a proxy with a 2GB heap, plan on getting at least 6GB of\nmemory."),(0,o.kt)("li",{parentName:"ul"},"Disk speed is unimportant. A solid-state drive is nice to have but not strictly required.\nLikewise, disk capacity is unimportant as well.")),(0,o.kt)("h3",a({},{id:"special-notes-regarding-speculative-execution-security-vulnerabilities"}),"Special notes regarding speculative execution security vulnerabilities"),(0,o.kt)("p",null,"Starting in 2018, a number of security vulnerabilities with regard to\n",(0,o.kt)("a",a({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Speculative_execution"}),"speculative execution")," used by modern CPUs\nhave been discovered."),(0,o.kt)("p",null,"The mitigations to these vulnerabilities can have painful performance implications, especially on\nprocessors vulnerable to Meltdown and further compounded if running in a virtual machine. Velocity,\nas a network application, is particularly sensitive to the performance hits that the mitigations\nintroduce."),(0,o.kt)("p",null,"To minimize these hits, we recommend hosting your proxy on a machine with a CPU that has mitigations\nagainst Spectre and Meltdown. Processors released in 2019 and onwards typically contain mitigations\nto protect against Spectre and Meltdown."),(0,o.kt)("p",null,"If you are using a CPU vulnerable to Spectre and/or Meltdown and are willing to risk security for\nperformance, it is also possible to disable Spectre/Meltdown mitigations depending on the operating\nsystem you use. Note however that you disable these security mitigations ",(0,o.kt)("em",{parentName:"p"},"at your own risk"),". The\nVelocity project does not recommend that you disable these mitigations."),(0,o.kt)("h2",a({},{id:"allocate-enough-heap"}),"Allocate enough heap"),(0,o.kt)("p",null,"Alongside having enough CPU, memory, and network bandwidth, you must also allocate enough Java heap\nto the proxy. Not doing this can induce lag and in severe cases may result in the proxy being\nterminated by the Java Virtual Machine because it ran out of memory."),(0,o.kt)("p",null,"The general rule of thumb is that you allocate 512MB per 500 players, plus some extra to allow for\nsome room for error ( typically 1GB extra). For instance, if you want to handle 1,000 on a single\nproxy, plan to allocate 2GB of heap."),(0,o.kt)("h3",a({},{id:"special-notes-for-containers"}),"Special notes for containers"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you use a containerized setup (such as using Kubernetes, Pterodactyl, or Docker directly), you\nshould not allocate the entirety of your memory allocation to the heap!")," Doing so ",(0,o.kt)("em",{parentName:"p"},"will")," likely\ncause the proxy to be killed by the kernel's out-of-memory killer, which will result in your proxy\ngoing down, likely at the worst possible time."),(0,o.kt)("p",null,"A safe (albeit conservative) setting for the heap would be to allocate half of the memory you\nallocate to the proxy container in total. For instance, if you know the proxy will need to hold\n1,000 players, then allocate 4GB to the container and give the proxy 2GB of heap."),(0,o.kt)("h2",a({},{id:"tune-your-startup-flags"}),"Tune your startup flags"),(0,o.kt)("p",null,"We also recommend tuning your startup flags. The current recommendation is:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{}),"-XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -XX:MaxInlineLevel=15\n")),(0,o.kt)("p",null,"You will add these flags after the ",(0,o.kt)("inlineCode",{parentName:"p"},"java")," command but before the ",(0,o.kt)("inlineCode",{parentName:"p"},"-jar")," parameter."),(0,o.kt)("h3",a({},{id:"explanation-of-the-flags"}),"Explanation of the flags"),(0,o.kt)("p",null,"Most of these flags focus on tuning the G1 garbage collector to be more friendly to Velocity's\nworkload. One of these flags (",(0,o.kt)("inlineCode",{parentName:"p"},"-XX:MaxInlineLevel=15"),") tends to improve performance in general."),(0,o.kt)("p",null,"Before the release of Java 9, the default Java garbage collector was the Parallel GC. This is a\nstop-the-world collector that does its work in parallel. The problem is that its pause times tend to\nbe long, and are not suitable for Minecraft (often showing up as seemingly unexplainable lag\nspikes)."),(0,o.kt)("p",null,"The recommended garbage collector for Velocity is the G1 region-based collector. There are several\nreasons for us to recommend G1:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It strikes the right balance between throughput and pause times. Throughput is roughly how much\nwork the proxy can achieve."),(0,o.kt)("li",{parentName:"ul"},"It is compatible with most setups (it is available in Java 8, the earliest Java version we\nsupport).")),(0,o.kt)("p",null,"Setups using these flags tend have very low (less than 10 millisecond) GC pauses every few minutes,\nwhich is very good for Minecraft."),(0,o.kt)("h3",a({},{id:"other-configurations"}),"Other configurations"),(0,o.kt)("div",a({},{className:"admonition admonition-caution alert alert--warning"}),(0,o.kt)("div",a({parentName:"div"},{className:"admonition-heading"}),(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",a({parentName:"h5"},{className:"admonition-icon"}),(0,o.kt)("svg",a({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,o.kt)("path",a({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,o.kt)("div",a({parentName:"div"},{className:"admonition-content"}),(0,o.kt)("p",{parentName:"div"},"Deviating from the configuration we recommend is done solely at your own risk."))),(0,o.kt)("p",null,"Velocity is an application that tends to follow the generational hypothesis quite closely. It has\nalso been tuned to reduce load on the garbage collector as much as possible."),(0,o.kt)("h4",a({},{id:"zgc"}),"ZGC"),(0,o.kt)("p",null,"ZGC (the Z Garbage Collector), introduced with Java 11 and stabilized with Java 15, has proven to be\nsuccessful for one large-scale deployment of Velocity."),(0,o.kt)("p",null,"At its core, ZGC is a concurrent, generation-less garbage collector emphasizing low latency at the\nexpense of throughput. Given the nature of Velocity as a network proxy where low throughput and high\nthroughput are important, we recommend using ZGC with caution, and only if you use Java 15 or above."),(0,o.kt)("p",null,"The primary tuning flag for ZGC is heap size - if ZGC cannot collect garbage faster than the proxy\ncan allocate it, the threads generating garbage will be temporarily paused, causing the proxy to\nappear to be laggy. Our heap size recommendations still apply, but prepare to give the proxy more\nmemory if necessary."),(0,o.kt)("h4",a({},{id:"shenandoah"}),"Shenandoah"),(0,o.kt)("p",null,"Introduced in Java 11 and declared stable in Java 15, Shenandoah is similar to G1 in being a\nconcurrent, generational garbage collector, but it does more work in parallel."),(0,o.kt)("p",null,"The Velocity team is not aware of any successful deployments of Shenandoah with Velocity in the\nwild."),(0,o.kt)("h4",a({},{id:"openj9"}),"OpenJ9"),(0,o.kt)("p",null,"OpenJ9 is an alternative to the HotSpot JVM derived from IBM's J9 JVM, focused primarily on cloud\nworkloads. As a result, it behaves very differently from HotSpot. Correspondingly, it has a\ncompletely different set of garbage collectors."),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"gencon")," garbage collector should work fine with Velocity."))}h.isMDXComponent=!0}}]);