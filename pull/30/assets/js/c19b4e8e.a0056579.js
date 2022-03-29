"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[370],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),v=r,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||i;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2423:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return v}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],a={slug:"/velocity/developers/porting-plugins-from-velocity-1"},s="Porting Your Plugin from Velocity 1.x.x",c={unversionedId:"velocity/developers/how-to/porting-from-velocity-1",id:"velocity/developers/how-to/porting-from-velocity-1",title:"Porting Your Plugin from Velocity 1.x.x",description:"Velocity 3.0.0 includes important API changes from the Velocity 1.x.x series. Please read this",source:"@site/docs/velocity/developers/how-to/porting-from-velocity-1.md",sourceDirName:"velocity/developers/how-to",slug:"/velocity/developers/porting-plugins-from-velocity-1",permalink:"/docs-previews/pull/30/velocity/developers/porting-plugins-from-velocity-1",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/how-to/porting-from-velocity-1.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1646787673,formattedLastUpdatedAt:"3/9/2022",frontMatter:{slug:"/velocity/developers/porting-plugins-from-velocity-1"},sidebar:"docs",previous:{title:"Dependency Management",permalink:"/docs-previews/pull/30/velocity/developers/dependency-management"},next:{title:"Working With Events",permalink:"/docs-previews/pull/30/velocity/developers/event-api"}},p={},u=[{value:"Minimum supported Java version bump",id:"minimum-supported-java-version-bump",level:2},{value:"Removal of legacy dependencies",id:"removal-of-legacy-dependencies",level:2},{value:"New asynchronous event system",id:"new-asynchronous-event-system",level:2}],d={toc:u};function v(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"porting-your-plugin-from-velocity-1xx"},"Porting Your Plugin from Velocity 1.x.x"),(0,i.kt)("p",null,"Velocity 3.0.0 includes important API changes from the Velocity 1.x.x series. ",(0,i.kt)("strong",{parentName:"p"},"Please read this\ndocument very carefully"),"."),(0,i.kt)("h2",{id:"minimum-supported-java-version-bump"},"Minimum supported Java version bump"),(0,i.kt)("p",null,"Velocity 3.0.0 now requires Java 11 and above. The Velocity API is compiled for Java 8 for the\nconvenience of plugins that want to run on older versions of Java, but we may decide to bump this in\na future major release."),(0,i.kt)("h2",{id:"removal-of-legacy-dependencies"},"Removal of legacy dependencies"),(0,i.kt)("p",null,"We removed all support for the old ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," 3 library. For ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," 3.x.x (and all the APIs that depend\non it), direct equivalents are available in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.adventure.kyori.net/"},"Adventure")," which was\nintroduced in Velocity 1.1.0."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"toml4j"),", deprecated in Velocity 1.1.0 (as it is no longer maintained), has not been removed to\nprovide more time for plugins to migrate to Configurate 3. However, you should prepare to either\nswitch to Configurate 3 or shade toml4j into your plugin directly."),(0,i.kt)("h2",{id:"new-asynchronous-event-system"},"New asynchronous event system"),(0,i.kt)("p",null,"Velocity 3.0.0 contains a backport of Velocity Polymer's event system, which differs from Velocity\n1.x.x's event system in a number of ways. Velocity 1.x.x's event model forced all events to be\nexecuted asynchronously on a fixed-size thread pool, which has proven over time to be a flawed\nmodel."),(0,i.kt)("p",null,"Existing event handlers will continue to work unmodified on Velocity 3.0.0, as all event handlers\nare assumed to be asynchronous blocking handlers by default. However, there are some new APIs\nintroduced for handling continuations - see the ",(0,i.kt)("a",{parentName:"p",href:"/docs-previews/pull/30/velocity/developers/event-api"},"event API page")," for more\ninformation. However, you are encouraged to migrate your event listeners to the new event API\nparadigms."))}v.isMDXComponent=!0}}]);