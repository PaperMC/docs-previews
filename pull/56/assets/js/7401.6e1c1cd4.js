"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7401],{4907:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(6687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(r),v=o,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(4907);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l={slug:"/velocity/developers/porting-plugins-from-velocity-1"},a="Porting Your Plugin from Velocity 1.x.x",s={unversionedId:"velocity/developers/how-to/porting-from-velocity-1",id:"velocity/developers/how-to/porting-from-velocity-1",title:"Porting Your Plugin from Velocity 1.x.x",description:"Velocity 3.0.0 includes important API changes from the Velocity 1.x.x series. Please read this",source:"@site/docs/velocity/developers/how-to/porting-from-velocity-1.md",sourceDirName:"velocity/developers/how-to",slug:"/velocity/developers/porting-plugins-from-velocity-1",permalink:"/docs-previews/pull/56/velocity/developers/porting-plugins-from-velocity-1",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/how-to/porting-from-velocity-1.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1646787673,formattedLastUpdatedAt:"3/9/2022",frontMatter:{slug:"/velocity/developers/porting-plugins-from-velocity-1"},sidebar:"docs",previous:{title:"Dependency Management",permalink:"/docs-previews/pull/56/velocity/developers/dependency-management"},next:{title:"API",permalink:"/docs-previews/pull/56/category/velocity/developers/api"}},c={},p=[{value:"Minimum supported Java version bump",id:"minimum-supported-java-version-bump",level:2},{value:"Removal of legacy dependencies",id:"removal-of-legacy-dependencies",level:2},{value:"New asynchronous event system",id:"new-asynchronous-event-system",level:2}],u={toc:p};function d(e){var t=e.components,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"porting-your-plugin-from-velocity-1xx"}),"Porting Your Plugin from Velocity 1.x.x"),(0,n.kt)("p",null,"Velocity 3.0.0 includes important API changes from the Velocity 1.x.x series. ",(0,n.kt)("strong",{parentName:"p"},"Please read this\ndocument very carefully"),"."),(0,n.kt)("h2",o({},{id:"minimum-supported-java-version-bump"}),"Minimum supported Java version bump"),(0,n.kt)("p",null,"Velocity 3.0.0 now requires Java 11 and above. The Velocity API is compiled for Java 8 for the\nconvenience of plugins that want to run on older versions of Java, but we may decide to bump this in\na future major release."),(0,n.kt)("h2",o({},{id:"removal-of-legacy-dependencies"}),"Removal of legacy dependencies"),(0,n.kt)("p",null,"We removed all support for the old ",(0,n.kt)("inlineCode",{parentName:"p"},"text")," 3 library. For ",(0,n.kt)("inlineCode",{parentName:"p"},"text")," 3.x.x (and all the APIs that depend\non it), direct equivalents are available in ",(0,n.kt)("a",o({parentName:"p"},{href:"https://docs.adventure.kyori.net/"}),"Adventure")," which was\nintroduced in Velocity 1.1.0."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"toml4j"),", deprecated in Velocity 1.1.0 (as it is no longer maintained), has not been removed to\nprovide more time for plugins to migrate to Configurate 3. However, you should prepare to either\nswitch to Configurate 3 or shade toml4j into your plugin directly."),(0,n.kt)("h2",o({},{id:"new-asynchronous-event-system"}),"New asynchronous event system"),(0,n.kt)("p",null,"Velocity 3.0.0 contains a backport of Velocity Polymer's event system, which differs from Velocity\n1.x.x's event system in a number of ways. Velocity 1.x.x's event model forced all events to be\nexecuted asynchronously on a fixed-size thread pool, which has proven over time to be a flawed\nmodel."),(0,n.kt)("p",null,"Existing event handlers will continue to work unmodified on Velocity 3.0.0, as all event handlers\nare assumed to be asynchronous blocking handlers by default. However, there are some new APIs\nintroduced for handling continuations - see the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs-previews/pull/56/velocity/developers/event-api"}),"event API page")," for more\ninformation. However, you are encouraged to migrate your event listeners to the new event API\nparadigms."))}d.isMDXComponent=!0}}]);