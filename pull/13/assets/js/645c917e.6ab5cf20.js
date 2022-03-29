"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8957],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1299:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="Tuning Velocity",c={unversionedId:"velocity/deployment/tuning",id:"velocity/deployment/tuning",title:"Tuning Velocity",description:"Velocity comes with good performance out of the box. We go in deep, starting from smart algorithmic",source:"@site/docs/velocity/deployment/tuning.md",sourceDirName:"velocity/deployment",slug:"/velocity/deployment/tuning",permalink:"/docs-previews/pull/13/velocity/deployment/tuning",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/deployment/tuning.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",frontMatter:{},sidebar:"docs",previous:{title:"Securing Your Servers",permalink:"/docs-previews/pull/13/velocity/deployment/security"},next:{title:"Credits",permalink:"/docs-previews/pull/13/velocity/misc/credits"}},u={},p=[{value:"Host the proxy on Linux",id:"host-the-proxy-on-linux",level:2},{value:"Allocate server resources appropriately",id:"allocate-server-resources-appropriately",level:2},{value:"Special notes regarding speculative execution security vulnerabilities",id:"special-notes-regarding-speculative-execution-security-vulnerabilities",level:3},{value:"Allocate enough heap",id:"allocate-enough-heap",level:2},{value:"Special notes for containers",id:"special-notes-for-containers",level:3},{value:"Tune your startup flags",id:"tune-your-startup-flags",level:2},{value:"Explanation of the flags",id:"explanation-of-the-flags",level:3},{value:"Other configurations",id:"other-configurations",level:3},{value:"ZGC",id:"zgc",level:4},{value:"Shenandoah",id:"shenandoah",level:4},{value:"OpenJ9",id:"openj9",level:4}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tuning-velocity"},"Tuning Velocity"),(0,r.kt)("p",null,"Velocity comes with good performance out of the box. We go in deep, starting from smart algorithmic\nchoices, making strategic usage of native libraries, all the way to the JVM level, optimizing the\nproxy so that the JVM will make better decisions when optimizing the code."),(0,r.kt)("h2",{id:"host-the-proxy-on-linux"},"Host the proxy on Linux"),(0,r.kt)("p",null,"Velocity comes with high-performance, specially tuned native libraries for compression and\nencryption, along with including native transports from Netty. However, due to support constraints,\nthe compiled natives are only verified to work on Linux x86_64 and aarch64. While Velocity does not\nrequire the natives to work, you will suffer from degraded performance. For this reason, we strongly\nrecommend that all production deployments of Velocity run on x86-64 Linux."),(0,r.kt)("h2",{id:"allocate-server-resources-appropriately"},"Allocate server resources appropriately"),(0,r.kt)("p",null,"You should always make sure to allocate the correct amount of heap, network bandwidth, and get the\nright CPU for the amount of players you want to have on your proxy at a given time. For instance, it\nis unlikely you'll be able to get 1,000 players on a Raspberry Pi Zero, but you'll have a much\nbetter chance if you have a recent high-end server CPU from Intel or AMD."),(0,r.kt)("p",null,'There is no "one-size-fits-all" hardware recommendation, only general guidelines for the amount of\nplayers you can expect:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prefer lots of cores but lower clock speeds. Unlike the Minecraft server, Velocity can actually\nbenefit from the extra cores and single-threaded performance is not as important."),(0,r.kt)("li",{parentName:"ul"},"You should always have enough memory to run Velocity, including room for JVM overhead and for your\noperating system. For a rough minimum recommended memory amount, double the size of the proxy heap\nand then add 2GB. For instance, for a proxy with a 2GB heap, plan on getting at least 6GB of\nmemory."),(0,r.kt)("li",{parentName:"ul"},"Disk speed is unimportant. A solid-state drive is nice to have but not strictly required.\nLikewise, disk capacity is unimportant as well.")),(0,r.kt)("h3",{id:"special-notes-regarding-speculative-execution-security-vulnerabilities"},"Special notes regarding speculative execution security vulnerabilities"),(0,r.kt)("p",null,"Starting in 2018, a number of security vulnerabilities with regard to\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Speculative_execution"},"speculative execution")," used by modern CPUs\nhave been discovered."),(0,r.kt)("p",null,"The mitigations to these vulnerabilities can have painful performance implications, especially on\nprocessors vulnerable to Meltdown and further compounded if running in a virtual machine. Velocity,\nas a network application, is particularly sensitive to the performance hits that the mitigations\nintroduce."),(0,r.kt)("p",null,"To minimize these hits, we recommend hosting your proxy on a machine with a CPU that has mitigations\nagainst Spectre and Meltdown. Processors released in 2019 and onwards typically contain mitigations\nto protect against Spectre and Meltdown."),(0,r.kt)("p",null,"If you are using a CPU vulnerable to Spectre and/or Meltdown and are willing to risk security for\nperformance, it is also possible to disable Spectre/Meltdown mitigations depending on the operating\nsystem you use. Note however that you disable these security mitigations ",(0,r.kt)("em",{parentName:"p"},"at your own risk"),". The\nVelocity project does not recommend that you disable these mitigations."),(0,r.kt)("h2",{id:"allocate-enough-heap"},"Allocate enough heap"),(0,r.kt)("p",null,"Alongside having enough CPU, memory, and network bandwidth, you must also allocate enough Java heap\nto the proxy. Not doing this can induce lag and in severe cases may result in the proxy being\nterminated by the Java Virtual Machine because it ran out of memory."),(0,r.kt)("p",null,"The general rule of thumb is that you allocate 512MB per 500 players, plus some extra to allow for\nsome room for error ( typically 1GB extra). For instance, if you want to handle 1,000 on a single\nproxy, plan to allocate 2GB of heap."),(0,r.kt)("h3",{id:"special-notes-for-containers"},"Special notes for containers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you use a containerized setup (such as using Kubernetes, Pterodactyl, or Docker directly), you\nshould not allocate the entirety of your memory allocation to the heap!")," Doing so ",(0,r.kt)("em",{parentName:"p"},"will")," likely\ncause the proxy to be killed by the kernel's out-of-memory killer, which will result in your proxy\ngoing down, likely at the worst possible time."),(0,r.kt)("p",null,"A safe (albeit conservative) setting for the heap would be to allocate half of the memory you\nallocate to the proxy container in total. For instance, if you know the proxy will need to hold\n1,000 players, then allocate 4GB to the container and give the proxy 2GB of heap."),(0,r.kt)("h2",{id:"tune-your-startup-flags"},"Tune your startup flags"),(0,r.kt)("p",null,"We also recommend tuning your startup flags. The current recommendation is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -XX:MaxInlineLevel=15\n")),(0,r.kt)("p",null,"You will add these flags after the ",(0,r.kt)("inlineCode",{parentName:"p"},"java")," command but before the ",(0,r.kt)("inlineCode",{parentName:"p"},"-jar")," parameter."),(0,r.kt)("h3",{id:"explanation-of-the-flags"},"Explanation of the flags"),(0,r.kt)("p",null,"Most of these flags focus on tuning the G1 garbage collector to be more friendly to Velocity's\nworkload. One of these flags (",(0,r.kt)("inlineCode",{parentName:"p"},"-XX:MaxInlineLevel=15"),") tends to improve performance in general."),(0,r.kt)("p",null,"Before the release of Java 9, the default Java garbage collector was the Parallel GC. This is a\nstop-the-world collector that does its work in parallel. The problem is that its pause times tend to\nbe long, and are not suitable for Minecraft (often showing up as seemingly unexplainable lag\nspikes)."),(0,r.kt)("p",null,"The recommended garbage collector for Velocity is the G1 region-based collector. There are several\nreasons for us to recommend G1:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It strikes the right balance between throughput and pause times. Throughput is roughly how much\nwork the proxy can achieve."),(0,r.kt)("li",{parentName:"ul"},"It is compatible with most setups (it is available in Java 8, the earliest Java version we\nsupport).")),(0,r.kt)("p",null,"Setups using these flags tend have very low (less than 10 millisecond) GC pauses every few minutes,\nwhich is very good for Minecraft."),(0,r.kt)("h3",{id:"other-configurations"},"Other configurations"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Deviating from the configuration we recommend is done solely at your own risk."))),(0,r.kt)("p",null,"Velocity is an application that tends to follow the generational hypothesis quite closely. It has\nalso been tuned to reduce load on the garbage collector as much as possible."),(0,r.kt)("h4",{id:"zgc"},"ZGC"),(0,r.kt)("p",null,"ZGC (the Z Garbage Collector), introduced with Java 11 and stabilized with Java 15, has proven to be\nsuccessful for one large-scale deployment of Velocity."),(0,r.kt)("p",null,"At its core, ZGC is a concurrent, generation-less garbage collector emphasizing low latency at the\nexpense of throughput. Given the nature of Velocity as a network proxy where low throughput and high\nthroughput are important, we recommend using ZGC with caution, and only if you use Java 15 or above."),(0,r.kt)("p",null,"The primary tuning flag for ZGC is heap size - if ZGC cannot collect garbage faster than the proxy\ncan allocate it, the threads generating garbage will be temporarily paused, causing the proxy to\nappear to be laggy. Our heap size recommendations still apply, but prepare to give the proxy more\nmemory if necessary."),(0,r.kt)("h4",{id:"shenandoah"},"Shenandoah"),(0,r.kt)("p",null,"Introduced in Java 11 and declared stable in Java 15, Shenandoah is similar to G1 in being a\nconcurrent, generational garbage collector, but it does more work in parallel."),(0,r.kt)("p",null,"The Velocity team is not aware of any successful deployments of Shenandoah with Velocity in the\nwild."),(0,r.kt)("h4",{id:"openj9"},"OpenJ9"),(0,r.kt)("p",null,"OpenJ9 is an alternative to the HotSpot JVM derived from IBM's J9 JVM, focused primarily on cloud\nworkloads. As a result, it behaves very differently from HotSpot. Correspondingly, it has a\ncompletely different set of garbage collectors."),(0,r.kt)("p",null,"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"gencon")," garbage collector should work fine with Velocity."))}d.isMDXComponent=!0}}]);