"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[370],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return v}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(o),v=r,m=d["".concat(c,".").concat(v)]||d[v]||u[v]||i;return o?n.createElement(m,l(l({ref:t},p),{},{components:o})):n.createElement(m,l({ref:t},p))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2423:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return v}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),l=["components"],a={slug:"/velocity/developers/how-to-port-from-velocity-1"},c="Porting Your Plugin from Velocity 1.x.x",s={unversionedId:"velocity/developers/how-to/porting-from-velocity-1",id:"velocity/developers/how-to/porting-from-velocity-1",title:"Porting Your Plugin from Velocity 1.x.x",description:"Velocity 3.0.0 includes important API changes from the Velocity 1.x.x series. Please read this",source:"@site/docs/velocity/developers/how-to/porting-from-velocity-1.md",sourceDirName:"velocity/developers/how-to",slug:"/velocity/developers/how-to-port-from-velocity-1",permalink:"/docs-previews/pull/16/velocity/developers/how-to-port-from-velocity-1",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/how-to/porting-from-velocity-1.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",frontMatter:{slug:"/velocity/developers/how-to-port-from-velocity-1"},sidebar:"docs",previous:{title:"Dependency Management",permalink:"/docs-previews/pull/16/velocity/developers/how-to-manage-dependencies"},next:{title:"Working With Events",permalink:"/docs-previews/pull/16/velocity/developers/event-api"}},p={},u=[{value:"Minimum supported Java version bump",id:"minimum-supported-java-version-bump",level:2},{value:"Removal of legacy dependencies",id:"removal-of-legacy-dependencies",level:2},{value:"New asynchronous event system",id:"new-asynchronous-event-system",level:2}],d={toc:u};function v(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"porting-your-plugin-from-velocity-1xx"},"Porting Your Plugin from Velocity 1.x.x"),(0,i.kt)("p",null,"Velocity 3.0.0 includes important API changes from the Velocity 1.x.x series. ",(0,i.kt)("strong",{parentName:"p"},"Please read this\ndocument very carefully"),"."),(0,i.kt)("h2",{id:"minimum-supported-java-version-bump"},"Minimum supported Java version bump"),(0,i.kt)("p",null,"Velocity 3.0.0 now requires Java 11 and above. The Velocity API is compiled for Java 8 for the\nconvenience of plugins that want to run on older versions of Java, but we may decide to bump this in\na future major release."),(0,i.kt)("h2",{id:"removal-of-legacy-dependencies"},"Removal of legacy dependencies"),(0,i.kt)("p",null,"We removed all support for the old ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," 3 library. For ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," 3.x.x (and all the APIs that depend\non it), direct equivalents are available in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.adventure.kyori.net/"},"Adventure")," which was\nintroduced in Velocity 1.1.0."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"toml4j"),", deprecated in Velocity 1.1.0 (as it is no longer maintained), has not been removed to\nprovide more time for plugins to migrate to Configurate 3. However, you should prepare to either\nswitch to Configurate 3 or shade toml4j into your plugin directly."),(0,i.kt)("h2",{id:"new-asynchronous-event-system"},"New asynchronous event system"),(0,i.kt)("p",null,"Velocity 3.0.0 contains a backport of Velocity Polymer's event system, which differs from Velocity\n1.x.x's event system in a number of ways. Velocity 1.x.x's event model forced all events to be\nexecuted asynchronously on a fixed-size thread pool, which has proven over time to be a flawed\nmodel."),(0,i.kt)("p",null,"Existing event handlers will continue to work unmodified on Velocity 3.0.0, as all event handlers\nare assumed to be asynchronous blocking handlers by default. However, there are some new APIs\nintroduced for handling continuations - see the ",(0,i.kt)("a",{parentName:"p",href:"/docs-previews/pull/16/velocity/developers/event-api"},"event API page")," for more\ninformation. However, you are encouraged to migrate your event listeners to the new event API\nparadigms."))}v.isMDXComponent=!0}}]);