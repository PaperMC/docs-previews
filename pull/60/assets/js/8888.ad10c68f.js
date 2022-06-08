"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8888],{4907:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var i=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),y=r,d=g["".concat(s,".").concat(y)]||g[y]||p[y]||o;return n?i.createElement(d,a(a({ref:t},u),{},{components:n})):i.createElement(d,a({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>u});n(6687);var i=n(4907);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a={slug:"/velocity/developers/api-basics"},l="Velocity Plugin Basics",s={unversionedId:"velocity/developers/getting-started/api-basics",id:"velocity/developers/getting-started/api-basics",title:"Velocity Plugin Basics",description:"Now we will lay the groundwork for your first plugin. We will cover how to create your very first",source:"@site/docs/velocity/developers/getting-started/api-basics.md",sourceDirName:"velocity/developers/getting-started",slug:"/velocity/developers/api-basics",permalink:"/docs-previews/pull/60/velocity/developers/api-basics",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/getting-started/api-basics.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646714966,formattedLastUpdatedAt:"3/8/2022",frontMatter:{slug:"/velocity/developers/api-basics"},sidebar:"docs",previous:{title:"Creating Your First Plugin",permalink:"/docs-previews/pull/60/velocity/developers/creating-your-first-plugin"},next:{title:"Common Pitfalls",permalink:"/docs-previews/pull/60/velocity/developers/pitfalls"}},c={},u=[{value:"Create the plugin class",id:"create-the-plugin-class",level:2},{value:"Choosing <code>@Plugin</code> Information",id:"choosing-plugin-information",level:2},{value:"A word of caution",id:"a-word-of-caution",level:3},{value:"Getting your Plugin&#39;s Directory",id:"getting-your-plugins-directory",level:2}],p={toc:u};function g(e){var t=e.components,n=o(e,["components"]);return(0,i.kt)("wrapper",r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",r({},{id:"velocity-plugin-basics"}),"Velocity Plugin Basics"),(0,i.kt)("p",null,"Now we will lay the groundwork for your first plugin. We will cover how to create your very first\nVelocity plugin."),(0,i.kt)("h2",r({},{id:"create-the-plugin-class"}),"Create the plugin class"),(0,i.kt)("p",null,"Create a new class (let's say ",(0,i.kt)("inlineCode",{parentName:"p"},"com.example.velocityplugin.VelocityTest"),") and paste this in:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-java"}),'package com.example.velocityplugin;\n\nimport com.google.inject.Inject;\nimport com.velocitypowered.api.plugin.Plugin;\nimport com.velocitypowered.api.proxy.ProxyServer;\nimport org.slf4j.Logger;\n\n@Plugin(id = "myfirstplugin", name = "My First Plugin", version = "0.1.0-SNAPSHOT",\n        url = "https://example.org", description = "I did it!", authors = {"Me"})\npublic class VelocityTest {\n\n    private final ProxyServer server;\n    private final Logger logger;\n\n    @Inject\n    public VelocityTest(ProxyServer server, Logger logger) {\n        this.server = server;\n        this.logger = logger;\n\n        logger.info("Hello there! I made my first plugin with Velocity.");\n    }\n}\n')),(0,i.kt)("p",null,"What did you just do there? There's quite a bit to unpack, so let's focus on the Velocity-specific\nbits:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-java"}),'@Plugin(id = "myfirstplugin", name = "My First Plugin", version = "0.1.0-SNAPSHOT",\n        url = "awesome.org", description = "I did it!", authors = {"Me"})\npublic class VelocityTest {\n')),(0,i.kt)("p",null,"This tells Velocity that this class contains your plugin (myfirstplugin) so that it can be loaded\nonce the proxy starts up. Velocity will detect where the plugin will reside when you compile your\nplugin."),(0,i.kt)("p",null,"Moving on, what's this?"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-java"}),'@Inject\npublic VelocityTest(ProxyServer server, Logger logger) {\n    this.server = server;\n    this.logger = logger;\n\n    logger.info("Hello there, it\'s a test plugin I made!");\n}\n')),(0,i.kt)("p",null,"This looks like magic! How is Velocity doing this? The answer lies in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject"),", which indicates\nthat Velocity should inject a ProxyServer and the Logger when constructing your plugin. These two\ninterfaces will help you out as you begin working with Velocity. We won't talk too much about\ndependency injection: all you need to know is that Velocity will do this."),(0,i.kt)("p",null,"All you need to do is build your plugin, put it in your ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/")," directory, and try it! Isn't that\nnice? In the next section you'll learn more about how to use the API."),(0,i.kt)("h2",r({},{id:"choosing-plugin-information"}),"Choosing ",(0,i.kt)("inlineCode",{parentName:"h2"},"@Plugin")," Information"),(0,i.kt)("p",null,"Choose your plugin's ID wisely. Other plugins will use this ID to depend on yours. If you change it,\nyou could break compatibility."),(0,i.kt)("p",null,"The plugin name is somewhat less important. It will be shown to users as the display name of your\nplugin, but tweaking it will not be catastrophic."),(0,i.kt)("p",null,"For the version, we recommend sticking to semantic versioning - you can read more about this concept\nat ",(0,i.kt)("a",r({parentName:"p"},{href:"https://semver.org"}),"semver.org"),". Basically, use 3 numbers in your version, such as 1.4.25.\nIncrement the major number when you make a backwards-incompatible breaking change, increment the\nminor number when you add functionality that is backwards compatible, and increment the patch number\nwhen you fix a bug or make an otherwise unnoticeable change in the implementation."),(0,i.kt)("p",null,"You can also describe your plugin's URL, authors, and description in your ",(0,i.kt)("inlineCode",{parentName:"p"},"@Plugin")," annotation.\nPlugin dependencies are also be specified there, but we'll get to that later."),(0,i.kt)("h3",r({},{id:"a-word-of-caution"}),"A word of caution"),(0,i.kt)("p",null,"In Velocity, plugin loading is split into two steps: construction and initialization. The code in\nyour plugin's constructor is part of the construction phase. There is very little you can do safely\nduring construction, especially as the API does not specify which operations are safe to run during\nconstruction. Notably, you can't register an event listener in your constructor, because you need to\nhave a valid plugin registration, but Velocity can't register the plugin until the plugin has been\nconstructed, causing a \"chicken or the egg\" problem."),(0,i.kt)("p",null,"To break this vicious cycle, you should always wait for initialization, which is indicated when\nVelocity fires the ProxyInitializeEvent. We can do things on initialization by adding a listener for\nthis event, as shown below. Note that Velocity automatically registers your plugin main class as a\nlistener."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-java"}),"@Subscribe\npublic void onProxyInitialization(ProxyInitializeEvent event) {\n    // Do some operation demanding access to the Velocity API here.\n    // For instance, we could register an event:\n    server.getEventManager().register(this, new PluginListener());\n}\n")),(0,i.kt)("h2",r({},{id:"getting-your-plugins-directory"}),"Getting your Plugin's Directory"),(0,i.kt)("p",null,"At some point you may need your plugin's directory. To do this, add\n",(0,i.kt)("inlineCode",{parentName:"p"},"@DataDirectory Path dataDirectory")," to your plugin's constructor parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-java"}),"private final Path dataDirectory;\n\n@Inject\npublic VelocityTest(ProxyServer server, Logger logger, @DataDirectory Path dataDirectory) {\n    this.server = server;\n    this.logger = logger;\n    this.dataDirectory = dataDirectory;\n}\n")),(0,i.kt)("p",null,"This will get you a ",(0,i.kt)("inlineCode",{parentName:"p"},"java.nio.file.Path")," of your plugin directory. If you absolutely need a\n",(0,i.kt)("inlineCode",{parentName:"p"},"java.io.File"),", you may use ",(0,i.kt)("inlineCode",{parentName:"p"},"Path#toFile()"),". However, Velocity usually works with ",(0,i.kt)("inlineCode",{parentName:"p"},"Path"),"."))}g.isMDXComponent=!0}}]);