"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2930],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(a),g=o,d=c["".concat(l,".").concat(g)]||c[g]||p[g]||r;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2037:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},assets:function(){return u},toc:function(){return p},default:function(){return g}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={},l="Aikar's Flags",m={unversionedId:"paper/tutorial/aikars-flags",id:"paper/tutorial/aikars-flags",title:"Aikar's Flags",description:"Recommended JVM Startup Flags",source:"@site/docs/paper/tutorial/aikars-flags.md",sourceDirName:"paper/tutorial",slug:"/paper/tutorial/aikars-flags",permalink:"/docs-previews/pull/13/paper/tutorial/aikars-flags",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/paper/tutorial/aikars-flags.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",frontMatter:{},sidebar:"docs",previous:{title:"Updating Paper",permalink:"/docs-previews/pull/13/paper/tutorial/update"},next:{title:"How-to Guides",permalink:"/docs-previews/pull/13/category/how-to-guides"}},u={},p=[{value:"Recommended JVM Startup Flags",id:"recommended-jvm-startup-flags",level:2},{value:"Recommended Memory",id:"recommended-memory",level:2},{value:"If you are using an Xmx value greater than 12G",id:"if-you-are-using-an-xmx-value-greater-than-12g",level:3},{value:"Java GC Logging",id:"java-gc-logging",level:2},{value:"Technical Explanation of the Flags",id:"technical-explanation-of-the-flags",level:2},{value:"Using Large Pages",id:"using-large-pages",level:2},{value:"Transparent Huge Pages",id:"transparent-huge-pages",level:3}],c={toc:p};function g(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aikars-flags"},"Aikar's Flags"),(0,r.kt)("h2",{id:"recommended-jvm-startup-flags"},"Recommended JVM Startup Flags"),(0,r.kt)("p",null,"Use these flags exactly, only changing Xmx and Xms. These flags work and scale accordingly to any\nsize of memory, even 500MB but modern Minecraft versions will not do well with such low memory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java -Xms10G -Xmx10G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200\n-XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch\n-XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M\n-XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4\n-XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90\n-XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem\n-XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs\n-Daikars.new.flags=true -jar paperclip.jar nogui\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Do not allocate all of your available memory on a shared host!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When setting the Xms and Xmx values, if your host says you have 8000M memory, DO NOT USE 8000M!\nMinecraft (and Java) needs additional memory on top of that Xmx parameter. It is recommended to\nreduce your Xmx/Xms by about ",(0,r.kt)("strong",{parentName:"p"},"1000-1500M"),' to avoid running out of memory or "OOMKiller" hitting\nyour server. This also leaves room for the Operating System to use memory too. ',(0,r.kt)("strong",{parentName:"p"},"Have 8000M memory?\nUse 6500M for safety.")," ",(0,r.kt)("em",{parentName:"p"},"But you may also ask your host if they will cover this overhead for you and\ngive you 9500M instead. Some hosts will! Just ask.")))),(0,r.kt)("h2",{id:"recommended-memory"},"Recommended Memory"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We recommend using at least 6-10GB"),", no matter how few players! If you can't afford 10GB of\nmemory, give as much as you can, but ensure you leave the operating system some memory too. G1GC\noperates better with more memory."),(0,r.kt)("p",null,"However, more memory does not mean better performance above a certain point. Eventually you will hit\na point of diminishing returns. Going out and getting 32GB of RAM for a server will only waste your\nmoney with minimal returns."),(0,r.kt)("p",null,"If you are running with 12GB or less memory for MC, you should not adjust these parameters."),(0,r.kt)("h3",{id:"if-you-are-using-an-xmx-value-greater-than-12g"},"If you are using an Xmx value greater than 12G"),(0,r.kt)("p",null,"If you have and use more than 12GB of memory, adjust the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-XX:G1NewSizePercent=40")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-XX:G1MaxNewSizePercent=50")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-XX:G1HeapRegionSize=16M")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-XX:G1ReservePercent=15")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-XX:InitiatingHeapOccupancyPercent=20"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you see increase in old generation collections after this, revert to the base flags!"))),(0,r.kt)("p",null,"Explanation of these changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Base flag set aims for 30/40 to reduce risk of to space issues. With more memory, less of an\nissue. We can give more to new generation with 40/50, as well as reduce reserve percent since the\ndefault reserve will already be larger."),(0,r.kt)("li",{parentName:"ul"},"Region Size increase helps reduce humongous allocations, and speeds up remarking. We need a\nsmaller region size at smaller heaps to ensure an adequate amount of regions available"),(0,r.kt)("li",{parentName:"ul"},"We can start looking for old generation memory to reclaim with more of a delay with IHOP at 20\nsince we have more old generation available to space on CPU.")),(0,r.kt)("h2",{id:"java-gc-logging"},"Java GC Logging"),(0,r.kt)("p",null,"Are you having old gen issues with these flags? Add the following flags based on your java version\nto enable GC Logging:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Java 8-10")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-Xloggc:gc.log -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps\n-XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=5 -XX:GCLogFileSize=1M\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Java 11+")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-Xlog:gc*:logs/gc.log:time,uptime:filecount=5,filesize=1M\n")),(0,r.kt)("p",null,"GC logging does not hurt your performance and can be left on at all times. The files will not take\nup much space (5MB)"),(0,r.kt)("h2",{id:"technical-explanation-of-the-flags"},"Technical Explanation of the Flags"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"-Xms matching -Xmx -- Why:")," You should never run your server with the case that -Xmx can run\nthe system completely out of memory. Your server should always be expected to use the entire\n-Xmx! You should then ensure the OS has extra memory on top of that Xmx for non MC/OS level\nthings. Therefore, you should never run MC with -Xmx settings you can't support if java uses it\nall. Now, that means if -Xms is lower than -Xmx ",(0,r.kt)("strong",{parentName:"p"},"YOU HAVE UNUSED MEMORY! Unused memory is\nwasted memory.")," G1 operates better with the more memory it's given. G1 adaptively chooses how\nmuch memory to give to each region to optimize pause time. If you have more memory than it needs\nto reach an optimal pause time, G1 will simply push that extra into the old generation, and it\nwill not hurt you The fundamental idea of improving GC behavior is to ensure short-lived objects\ndie young and never get promoted. With the more memory G1 has, the better assurance you will get\nthat objects are not getting prematurely promoted to the old generation. G1 Operates differently\nthan previous collectors and is able to handle larger heaps more efficiently."),(0,r.kt)("p",{parentName:"li"},"If it does not need the memory given to it, it will not use it. The entire engine operates\ndifferently and does not suffer from too large of heaps, and this is industry-wide accepted\ninformation that under G1 to keep Xms and Xmx the same!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"UnlockExperimentalVMOptions")," -- needed for some the below options")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1NewSizePercent:")," These are the important ones. You now can specify percentages of an\noverall desired range for the new generation. With these settings, we tell G1 to not use its\ndefault 5% for new gen, and instead give it 40%! ",(0,r.kt)("strong",{parentName:"p"},"Minecraft has an extremely high a memory\nallocation rate, ranging to at least 800 Megabytes a second on a 30 player server! And this is\nmostly short-lived objects (Block Position).")),(0,r.kt)("p",{parentName:"li"},"Now, this means MC REALLY needs more focus on New Generation to be able to even support this\nallocation rate. If your new gen is too small, you will be running new gen collections 1-2+\ntimes per second, which is awful. You will have so many pauses that TPS has risk of suffering,\nand the server will not be able to keep up with the cost of GC's. Then combine the fact that\nobjects will now promote faster, resulting in your Old Gen growing faster. Given more New Gen,\nwe are able to slow down the intervals of Young Gen collections, resulting in more time for\nshort-lived objects to die young and overall more efficient GC behavior.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1MixedGCLiveThresholdPercent:")," Controls when to include regions in Mixed GC's in the Young\nGC collection, keeping Old Gen tidy without doing a normal Old Gen GC collection. When your\nmemory is less than this percent, old gen won't even be included in 'mixed' collections. Mixed\nare not as heavy as a full old collection, so having small incremental cleanups of old keeps\nmemory usage light."),(0,r.kt)("p",{parentName:"li"},"Default is 65 to 85 depending on Java Version, we are setting to 90 to ensure we reclaim garbage\nin old gen as fast as possible to retain as much free regions as we can.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1ReservePercent=20:"),' MC Memory allocation rate in up-to-date versions is really insane. We\nrun the risk of a dreaded "to-space exhaustion" not having enough memory free to move data\naround. This ensures more memory is waiting to be used for this operation. Default is 10, so we\nare giving another 10 to it.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MaxTenuringThreshold=1:")," Minecraft has a really high allocation rate of memory. Of that\nmemory, most is reclaimed in the eden generation. However, transient data will overflow into\nsurvivor. Initially played with completely removing Survivor and had decent results, but does\nresult in transient data making its way to Old which is not good.Max Tenuring 1 ensures that we\ndo not promote transient data to old generation, but anything that survives 2 passes of Garbage\nCollection is just going to be assumed as longer-lived."),(0,r.kt)("p",{parentName:"li"},"Doing this greatly reduces pause times in Young Collections as copying data up to 15 times in\nSurvivor space for a tenured object really takes a lot of time for actually old memory. Ideally\nthe GC engine would track average age for objects instead and tenure out data faster, but that\nis not how it works."),(0,r.kt)("p",{parentName:"li"},"Considering average GC rate is 10s to the upwards of minutes per young collection, this does not\nresult in any 'garbage' being promoted, and just delays longer lived memory to be collected in\nMixed GC's.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SurvivorRatio=32:")," Because we drastically reduced MaxTenuringThreshold, we will be reducing\nuse of survivor space drastically. This frees up more regions to be used by Eden instead.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"AlwaysPreTouch:")," AlwaysPreTouch gets the memory setup and reserved at process start ensuring\nit is contiguous, improving the efficiency of it more. This improves the operating systems\nmemory access speed. Mandatory to use Transparent Huge Pages")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"+DisableExplicitGC:")," Many plugins think they know how to control memory, and try to invoke\ngarbage collection. Plugins that do this trigger a full garbage collection, triggering a massive\nlag spike. This flag disables plugins from trying to do this, protecting you from their bad\ncode.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MaxGCPauseMillis=200:"),' This setting controls how much memory is used in between the Minimum\nand Maximum ranges specified for your New Generation. This is a "goal" for how long you want\nyour server to pause for collections. 200 is aiming for at most loss of 4 ticks. This will\nresult in a short TPS drop, however the server can make up for this drop instantly, meaning it\nwill have no meaningful impact to your TPS. 200ms is lower than players can recognize. In\ntesting, having this value constrained to an even lower number results in G1 not recollecting\nmemory fast enough and potentially running out of old gen triggering a Full collection. Just\nbecause this number is 200 does not mean every collection will be 200. It means it can use up to\n200 if it really needs it, and we need to let it do its job when there is memory to collect.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"+ParallelRefProcEnabled:")," Optimizes the GC process to use multiple threads for weak reference\nchecking. Not sure why this isn't default...")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1RSetUpdatingPauseTimePercent=5:")," Default is 10% of time spent during pause updating Rsets,\nreduce this to 5% to make more of it concurrent to reduce pause durations.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1MixedGCCountTarget=4:")," Default is 8. Because we are aiming to collect slower, with less old\ngen usage, try to reclaim old gen memory faster to avoid running out of old.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"G1HeapRegionSize=8M+:"),' Default is auto calculated. SUPER important for Minecraft, especially\n1.15, as with low memory situations, the default calculation will in most times be too low. Any\nmemory allocation half of this size (4MB) will be treated as "Humongous" and promote straight to\nold generation and is harder to free. If you allow java to use the default, you will be\ndestroyed with a significant chunk of your memory getting treated as Humongous.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"+PerfDisableSharedMem:")," Causes GC to write to file system which can cause major latency if\ndisk IO is high -- See ",(0,r.kt)("a",{parentName:"p",href:"https://www.evanjones.ca/jvm-mmap-pause.html"},"https://www.evanjones.ca/jvm-mmap-pause.html")))),(0,r.kt)("h2",{id:"using-large-pages"},"Using Large Pages"),(0,r.kt)("p",null,"For Large Pages -- It's even more important to use -Xms = -Xmx! Large Pages needs to have all the\nmemory specified for it, or you could end up without the gains. This memory will not be used by the\nOS anyway, so use it."),(0,r.kt)("p",null,"Additionally, use these flags (Metaspace is Java 8 Only, don't use it for Java7):\n",(0,r.kt)("inlineCode",{parentName:"p"},"-XX:+UseLargePagesInMetaspace")),(0,r.kt)("h3",{id:"transparent-huge-pages"},"Transparent Huge Pages"),(0,r.kt)("p",null,"Controversial feature but may be usable if you can not configure your host for real HugeTLBFS. Try\nadding ",(0,r.kt)("inlineCode",{parentName:"p"},"-XX:+UseTransparentHugePages")," but it's extremely important you also have AlwaysPreTouch set.\nOtherwise, THP will likely hurt you. We have not measured how THP works for MC or its impact with\nAlwaysPreTouch, so this section is for the advanced users who want to experiment."))}g.isMDXComponent=!0}}]);