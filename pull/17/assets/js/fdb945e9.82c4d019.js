"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5631],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=o.createContext({}),p=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,y=u["".concat(d,".").concat(m)]||u[m]||s[m]||r;return t?o.createElement(y,a(a({ref:n},c),{},{components:t})):o.createElement(y,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5457:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return c},toc:function(){return s},default:function(){return m}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],l={slug:"/velocity/developers/how-to-manage-dependencies"},d="Dependency Management",p={unversionedId:"velocity/developers/how-to/dependencies",id:"velocity/developers/how-to/dependencies",title:"Dependency Management",description:"Dependencies are common. You need to hook into another plugin. You don't want to write the same code",source:"@site/docs/velocity/developers/how-to/dependencies.md",sourceDirName:"velocity/developers/how-to",slug:"/velocity/developers/how-to-manage-dependencies",permalink:"/docs-previews/pull/17/velocity/developers/how-to-manage-dependencies",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/how-to/dependencies.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",frontMatter:{slug:"/velocity/developers/how-to-manage-dependencies"},sidebar:"docs",previous:{title:"Common Pitfalls",permalink:"/docs-previews/pull/17/velocity/developers/common-pitfalls"},next:{title:"Porting Your Plugin from Velocity 1.x.x",permalink:"/docs-previews/pull/17/velocity/developers/how-to-port-from-velocity-1"}},c={},s=[{value:"Plugin dependencies",id:"plugin-dependencies",level:2},{value:"Optional plugin dependencies",id:"optional-plugin-dependencies",level:2},{value:"External dependencies",id:"external-dependencies",level:2}],u={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dependency-management"},"Dependency Management"),(0,r.kt)("p",null,"Dependencies are common. You need to hook into another plugin. You don't want to write the same code\nsomeone else has already solved. Whatever you do, you need a way to manage your dependencies\neffectively."),(0,r.kt)("h2",{id:"plugin-dependencies"},"Plugin dependencies"),(0,r.kt)("p",null,"Adding a dependency on another plugin is done with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Plugin")," annotation in your main class.\nLet's revisit that briefly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0"\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,r.kt)("p",null,"Say we have a dependency on another plugin, call it ",(0,r.kt)("inlineCode",{parentName:"p"},"wonderplugin"),". To add it as a dependency, do\nthe following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0",\n  dependencies = {\n    @Dependency(id = "wonderplugin")\n  }\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,r.kt)("p",null,"The id of the dependency is the same as the other plugin's ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," from its ",(0,r.kt)("inlineCode",{parentName:"p"},"@Plugin")," annotation. This\nis why having a stable plugin ID is important."),(0,r.kt)("p",null,"That's it! Now, your plugin will require wonderplugin to load, and when it does, it will load\n",(0,r.kt)("em",{parentName:"p"},"after")," wonderplugin."),(0,r.kt)("p",null,"To specify multiple dependencies, separate them by commas:\n",(0,r.kt)("inlineCode",{parentName:"p"},'dependencies = {@Dependency(id = "wonderplugin"), @Dependency(id = "otherplugin")}')),(0,r.kt)("h2",{id:"optional-plugin-dependencies"},"Optional plugin dependencies"),(0,r.kt)("p",null,"To make a dependency optional, add ",(0,r.kt)("inlineCode",{parentName:"p"},"optional = true"),", like shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0",\n  dependencies = {\n    @Dependency(id = "wonderplugin", optional = true)\n  }\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,r.kt)("h2",{id:"external-dependencies"},"External dependencies"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please remember to relocate any dependencies you shade. Failure to relocate will lead to dependency\nconflicts with other plugins."))),(0,r.kt)("p",null,"Dependencies on other libraries aren't handled by Velocity. You will need to add them using your\nbuild system."),(0,r.kt)("p",null,"If your plugin does not shade its dependencies, but rather attaches them from a directory, you may\nuse the PluginManager's ",(0,r.kt)("inlineCode",{parentName:"p"},"addToClasspath")," method instead of using reflection to access the\nClassLoader."))}m.isMDXComponent=!0}}]);