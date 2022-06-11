"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4288],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,y=u["".concat(d,".").concat(m)]||u[m]||s[m]||r;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>m,default:()=>h,frontMatter:()=>u,metadata:()=>y,toc:()=>v});var a=t(3905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&c(e,t,n[t]);return e};const u={slug:"/dev/dependency-management"},m="Dependency Management",y={unversionedId:"dev/how-to/dependencies",id:"dev/how-to/dependencies",title:"Dependency Management",description:"Dependencies are common. You need to hook into another plugin. You don't want to write the same code",source:"@site/docs/velocity/dev/how-to/dependencies.md",sourceDirName:"dev/how-to",slug:"/dev/dependency-management",permalink:"/velocity/dev/dependency-management",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/dev/how-to/dependencies.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1649618994,formattedLastUpdatedAt:"4/10/2022",frontMatter:{slug:"/dev/dependency-management"},sidebar:"primary",previous:{title:"How-to Guides",permalink:"/velocity/cat/dev/how-to-guides"},next:{title:"Porting Your Plugin from Velocity 1.x.x",permalink:"/velocity/dev/porting-plugins-from-velocity-1"}},g={},v=[{value:"Plugin dependencies",id:"plugin-dependencies",level:2},{value:"Optional plugin dependencies",id:"optional-plugin-dependencies",level:2},{value:"External dependencies",id:"external-dependencies",level:2}],f={toc:v};function h(e){var n,t=e,{components:i}=t,c=((e,n)=>{var t={};for(var a in e)d.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=s(s({},f),c),r(n,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",s({},{id:"dependency-management"}),"Dependency Management"),(0,a.kt)("p",null,"Dependencies are common. You need to hook into another plugin. You don't want to write the same code\nsomeone else has already solved. Whatever you do, you need a way to manage your dependencies\neffectively."),(0,a.kt)("h2",s({},{id:"plugin-dependencies"}),"Plugin dependencies"),(0,a.kt)("p",null,"Adding a dependency on another plugin is done with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Plugin")," annotation in your main class.\nLet's revisit that briefly:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-java"}),'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0"\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,a.kt)("p",null,"Say we have a dependency on another plugin, call it ",(0,a.kt)("inlineCode",{parentName:"p"},"wonderplugin"),". To add it as a dependency, do\nthe following:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-java"}),'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0",\n  dependencies = {\n    @Dependency(id = "wonderplugin")\n  }\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,a.kt)("p",null,"The id of the dependency is the same as the other plugin's ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," from its ",(0,a.kt)("inlineCode",{parentName:"p"},"@Plugin")," annotation. This\nis why having a stable plugin ID is important."),(0,a.kt)("p",null,"That's it! Now, your plugin will require wonderplugin to load, and when it does, it will load\n",(0,a.kt)("em",{parentName:"p"},"after")," wonderplugin."),(0,a.kt)("p",null,"To specify multiple dependencies, separate them by commas:\n",(0,a.kt)("inlineCode",{parentName:"p"},'dependencies = {@Dependency(id = "wonderplugin"), @Dependency(id = "otherplugin")}')),(0,a.kt)("h2",s({},{id:"optional-plugin-dependencies"}),"Optional plugin dependencies"),(0,a.kt)("p",null,"To make a dependency optional, add ",(0,a.kt)("inlineCode",{parentName:"p"},"optional = true"),", like shown:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-java"}),'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0",\n  dependencies = {\n    @Dependency(id = "wonderplugin", optional = true)\n  }\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,a.kt)("h2",s({},{id:"external-dependencies"}),"External dependencies"),(0,a.kt)("div",s({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",s({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",s({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",s({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",s({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Please remember to relocate any dependencies you shade. Failure to relocate will lead to dependency\nconflicts with other plugins."))),(0,a.kt)("p",null,"Dependencies on other libraries aren't handled by Velocity. You will need to add them using your\nbuild system."),(0,a.kt)("p",null,"If your plugin does not shade its dependencies, but rather attaches them from a directory, you may\nuse the PluginManager's ",(0,a.kt)("inlineCode",{parentName:"p"},"addToClasspath")," method instead of using reflection to access the\nClassLoader."))}h.isMDXComponent=!0}}]);