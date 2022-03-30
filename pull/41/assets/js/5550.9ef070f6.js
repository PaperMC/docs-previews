"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5550],{4907:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(6687);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),d=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return t?o.createElement(y,i(i({ref:n},s),{},{components:t})):o.createElement(y,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});t(6687);var o=t(4907);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={slug:"/velocity/developers/dependency-management"},l="Dependency Management",p={unversionedId:"velocity/developers/how-to/dependencies",id:"velocity/developers/how-to/dependencies",title:"Dependency Management",description:"Dependencies are common. You need to hook into another plugin. You don't want to write the same code",source:"@site/docs/velocity/developers/how-to/dependencies.md",sourceDirName:"velocity/developers/how-to",slug:"/velocity/developers/dependency-management",permalink:"/docs-previews/pull/41/velocity/developers/dependency-management",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/how-to/dependencies.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1646787673,formattedLastUpdatedAt:"3/9/2022",frontMatter:{slug:"/velocity/developers/dependency-management"},sidebar:"docs",previous:{title:"Common Pitfalls",permalink:"/docs-previews/pull/41/velocity/developers/pitfalls"},next:{title:"Porting Your Plugin from Velocity 1.x.x",permalink:"/docs-previews/pull/41/velocity/developers/porting-plugins-from-velocity-1"}},d={},s=[{value:"Plugin dependencies",id:"plugin-dependencies",level:2},{value:"Optional plugin dependencies",id:"optional-plugin-dependencies",level:2},{value:"External dependencies",id:"external-dependencies",level:2}],c={toc:s};function u(e){var n=e.components,t=a(e,["components"]);return(0,o.kt)("wrapper",r({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",r({},{id:"dependency-management"}),"Dependency Management"),(0,o.kt)("p",null,"Dependencies are common. You need to hook into another plugin. You don't want to write the same code\nsomeone else has already solved. Whatever you do, you need a way to manage your dependencies\neffectively."),(0,o.kt)("h2",r({},{id:"plugin-dependencies"}),"Plugin dependencies"),(0,o.kt)("p",null,"Adding a dependency on another plugin is done with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Plugin")," annotation in your main class.\nLet's revisit that briefly:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-java"}),'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0"\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,o.kt)("p",null,"Say we have a dependency on another plugin, call it ",(0,o.kt)("inlineCode",{parentName:"p"},"wonderplugin"),". To add it as a dependency, do\nthe following:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-java"}),'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0",\n  dependencies = {\n    @Dependency(id = "wonderplugin")\n  }\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,o.kt)("p",null,"The id of the dependency is the same as the other plugin's ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from its ",(0,o.kt)("inlineCode",{parentName:"p"},"@Plugin")," annotation. This\nis why having a stable plugin ID is important."),(0,o.kt)("p",null,"That's it! Now, your plugin will require wonderplugin to load, and when it does, it will load\n",(0,o.kt)("em",{parentName:"p"},"after")," wonderplugin."),(0,o.kt)("p",null,"To specify multiple dependencies, separate them by commas:\n",(0,o.kt)("inlineCode",{parentName:"p"},'dependencies = {@Dependency(id = "wonderplugin"), @Dependency(id = "otherplugin")}')),(0,o.kt)("h2",r({},{id:"optional-plugin-dependencies"}),"Optional plugin dependencies"),(0,o.kt)("p",null,"To make a dependency optional, add ",(0,o.kt)("inlineCode",{parentName:"p"},"optional = true"),", like shown:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-java"}),'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0",\n  dependencies = {\n    @Dependency(id = "wonderplugin", optional = true)\n  }\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,o.kt)("h2",r({},{id:"external-dependencies"}),"External dependencies"),(0,o.kt)("div",r({},{className:"admonition admonition-caution alert alert--warning"}),(0,o.kt)("div",r({parentName:"div"},{className:"admonition-heading"}),(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",r({parentName:"h5"},{className:"admonition-icon"}),(0,o.kt)("svg",r({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,o.kt)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,o.kt)("div",r({parentName:"div"},{className:"admonition-content"}),(0,o.kt)("p",{parentName:"div"},"Please remember to relocate any dependencies you shade. Failure to relocate will lead to dependency\nconflicts with other plugins."))),(0,o.kt)("p",null,"Dependencies on other libraries aren't handled by Velocity. You will need to add them using your\nbuild system."),(0,o.kt)("p",null,"If your plugin does not shade its dependencies, but rather attaches them from a directory, you may\nuse the PluginManager's ",(0,o.kt)("inlineCode",{parentName:"p"},"addToClasspath")," method instead of using reflection to access the\nClassLoader."))}u.isMDXComponent=!0}}]);