"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6819],{4907:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});n(6687);var a=n(4907);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={slug:"/paper/per-world-configuration"},o="Per World Configuration",d={unversionedId:"paper/how-to/per-world-configuration",id:"paper/how-to/per-world-configuration",title:"Per World Configuration",description:"One of the most powerful yet least understood features of the Paper configuration is setting",source:"@site/docs/paper/how-to/per-world-configuration.md",sourceDirName:"paper/how-to",slug:"/paper/per-world-configuration",permalink:"/docs-previews/pull/58/paper/per-world-configuration",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/paper/how-to/per-world-configuration.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1647107933,formattedLastUpdatedAt:"3/12/2022",frontMatter:{slug:"/paper/per-world-configuration"},sidebar:"docs",previous:{title:"How-to Guides",permalink:"/docs-previews/pull/58/category/paper/how-to-guides"},next:{title:"Configuring Anti-Xray",permalink:"/docs-previews/pull/58/paper/anti-xray"}},p={},s=[{value:"Default Values",id:"default-values",level:2},{value:"Per World Values",id:"per-world-values",level:2},{value:"Inheritance",id:"inheritance",level:3}],m={toc:s};function u(e){var t=e.components,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"per-world-configuration"}),"Per World Configuration"),(0,a.kt)("p",null,"One of the most powerful yet least understood features of the Paper configuration is setting\nconfiguration options per world. While not every config option can be set per world, everything\nunder ",(0,a.kt)("inlineCode",{parentName:"p"},"world-settings")," in either ",(0,a.kt)("inlineCode",{parentName:"p"},"paper.yml")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"spigot.yml")," can be configured differently on a per\nworld basis."),(0,a.kt)("h2",r({},{id:"default-values"}),"Default Values"),(0,a.kt)("p",null,"The only world generated out of the box is ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),". Any configuration option set here will apply\nto ",(0,a.kt)("strong",{parentName:"p"},"all")," loaded worlds, unless explicitly overridden. Any configuration change that does not need\nto be separated by world should be made in this section."),(0,a.kt)("div",r({},{className:"admonition admonition-info alert alert--info"}),(0,a.kt)("div",r({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",r({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",r({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"The main world")),(0,a.kt)("div",r({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," section also serves as the place to configure per world settings for the main world\n(",(0,a.kt)("inlineCode",{parentName:"p"},"level-name")," in server.properties). An additional section created for the main world will not\nsupersede ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"."))),(0,a.kt)("h2",r({},{id:"per-world-values"}),"Per World Values"),(0,a.kt)("p",null,"A new section must be manually added to the bottom of the configuration file for each world which\nrequires a unique configuration. This section will not be automatically generated; it must be added.\nRemember! YAML (the configuration format used by Paper) cares about spaces. When adding a new world,\nensure there are two spaces behind it."),(0,a.kt)("p",null,"For example, to disable loading the spawn chunks in ",(0,a.kt)("inlineCode",{parentName:"p"},"world_nether")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"world_the_end"),",\nconfiguration would be added like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-yaml",metastring:'title="paper.yml"',title:'"paper.yml"'}),"world-settings:\n  default:\n    keep-spawn-loaded: true\n  world_nether:\n    keep-spawn-loaded: false\n  world_the_end:\n    keep-spawn-loaded: false\n")),(0,a.kt)("p",null,"This is a very stripped-down example. In reality, the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," section will be much more extensive\nas it contains all possible configuration options. This may look overwhelming at first, but always\nremember to put new worlds at the very bottom of the configuration file."),(0,a.kt)("h3",r({},{id:"inheritance"}),"Inheritance"),(0,a.kt)("p",null,"All configuration not explicitly defined for a world is inherited from the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," section. This\nmeans there is no need to repeat configuration options with the same value between sections, so\nthere is no need to copy and paste the entire ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," section into each new world created."),(0,a.kt)("p",null,"For a more complex real-world example: setting both different ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn-limits")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"keep-spawn-loaded"),"\nin two worlds."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-yaml",metastring:'title="paper.yml"',title:'"paper.yml"'}),"world-settings:\n  default:\n    spawn-limits:\n      monster: 70\n      creature: 10\n      ambient: 15\n      axolotls: 5\n      underground_water_creature: 5\n      water_creature: 5\n      water_ambient: 20\n    keep-spawn-loaded: true\n  world_nether:\n    spawn-limits:\n      monster: 90\n  resource_world:\n    spawn-limits:\n      monster: 2\n      creature: 15\n      axolotls: 8\n    keep-spawn-loaded: false\n")),(0,a.kt)("p",null,"This example demonstrates the concept of inheritance. For each world, this is the effective\nconfiguration which will be applied:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Configuration Key"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"world"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"world_nether"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"world_the_end"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"resource_world"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"spawn-limits.monster")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"70")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"90")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"70")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"spawn-limits.creature")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"10")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"10")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"10")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"15"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"spawn-limits.ambient")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"15")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"15")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"15")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"15"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"spawn-limits.axolotls")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"8"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"spawn-limits.underground_water_creature")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"spawn-limits.water_creature")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"spawn-limits.water_ambient")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"20")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"20")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"20")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"20"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keep-spawn-loaded")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false"))))),(0,a.kt)("p",null,"Notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"world_the_end")," was never specified in this configuration. Because of this, it inherits\nall the configuration options from the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," section. Additionally, ",(0,a.kt)("inlineCode",{parentName:"p"},"keep-spawn-loaded")," was only\ndisabled in ",(0,a.kt)("inlineCode",{parentName:"p"},"resource_world")," because in the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," section, ",(0,a.kt)("inlineCode",{parentName:"p"},"keep-spawn-loaded")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."))}u.isMDXComponent=!0}}]);