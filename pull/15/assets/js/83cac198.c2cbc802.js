"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7910],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2155:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},d="Per World Configuration",p={unversionedId:"paper/how-to/per-world-config",id:"paper/how-to/per-world-config",title:"Per World Configuration",description:"One of the most powerful yet least understood features of the Paper configuration is setting",source:"@site/docs/paper/how-to/per-world-config.md",sourceDirName:"paper/how-to",slug:"/paper/how-to/per-world-config",permalink:"/docs-previews/pull/15/paper/how-to/per-world-config",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/paper/how-to/per-world-config.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs-previews/pull/15/paper/how-to/getting-started"},next:{title:"Welcome to the Velocity Wiki",permalink:"/docs-previews/pull/15/velocity/"}},s={},m=[{value:"Default Values",id:"default-values",level:2},{value:"Per World Values",id:"per-world-values",level:2},{value:"Inheritance",id:"inheritance",level:3}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"per-world-configuration"},"Per World Configuration"),(0,i.kt)("p",null,"One of the most powerful yet least understood features of the Paper configuration is setting\nconfiguration options per world. While not every config option can be set per world, everything\nunder ",(0,i.kt)("inlineCode",{parentName:"p"},"world-settings")," in either ",(0,i.kt)("inlineCode",{parentName:"p"},"paper.yml")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"spigot.yml")," can be configured differently on a per\nworld basis."),(0,i.kt)("h2",{id:"default-values"},"Default Values"),(0,i.kt)("p",null,"The only world generated out of the box is ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),". Any configuration option set here will apply\nto ",(0,i.kt)("strong",{parentName:"p"},"all")," loaded worlds, unless explicitly overridden. Any configuration change that does not need\nto be separated by world should be made in this section."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"The main world")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," section also serves as the place to configure per world settings for the main world\n(",(0,i.kt)("inlineCode",{parentName:"p"},"level-name")," in server.properties). An additional section created for the main world will not\nsupersede ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),"."))),(0,i.kt)("h2",{id:"per-world-values"},"Per World Values"),(0,i.kt)("p",null,"A new section must be manually added to the bottom of the configuration file for each world which\nrequires a unique configuration. This section will not be automatically generated; it must be added.\nRemember! YAML (the configuration format used by Paper) cares about spaces. When adding a new world,\nensure there are two spaces behind it."),(0,i.kt)("p",null,"For example, to disable loading the spawn chunks in ",(0,i.kt)("inlineCode",{parentName:"p"},"world_nether")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"world_the_end"),",\nconfiguration would be added like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="paper.yml"',title:'"paper.yml"'},"world-settings:\n  default:\n    keep-spawn-loaded: true\n  world_nether:\n    keep-spawn-loaded: false\n  world_the_end:\n    keep-spawn-loaded: false\n")),(0,i.kt)("p",null,"This is a very stripped-down example. In reality, the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," section will be much more extensive\nas it contains all possible configuration options. This may look overwhelming at first, but always\nremember to put new worlds at the very bottom of the configuration file."),(0,i.kt)("h3",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,"All configuration not explicitly defined for a world is inherited from the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," section. This\nmeans there is no need to repeat configuration options with the same value between sections, so\nthere is no need to copy and paste the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," section into each new world created."),(0,i.kt)("p",null,"For a more complex real-world example: setting both different ",(0,i.kt)("inlineCode",{parentName:"p"},"spawn-limits")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"keep-spawn-loaded"),"\nin two worlds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="paper.yml"',title:'"paper.yml"'},"world-settings:\n  default:\n    spawn-limits:\n      monster: 70\n      creature: 10\n      ambient: 15\n      axolotls: 5\n      underground_water_creature: 5\n      water_creature: 5\n      water_ambient: 20\n    keep-spawn-loaded: true\n  world_nether:\n    spawn-limits:\n      monster: 90\n  resource_world:\n    spawn-limits:\n      monster: 2\n      creature: 15\n      axolotls: 8\n    keep-spawn-loaded: false\n")),(0,i.kt)("p",null,"This example demonstrates the concept of inheritance. For each world, this is the effective\nconfiguration which will be applied:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration Key"),(0,i.kt)("th",{parentName:"tr",align:null},"world"),(0,i.kt)("th",{parentName:"tr",align:null},"world_nether"),(0,i.kt)("th",{parentName:"tr",align:null},"world_the_end"),(0,i.kt)("th",{parentName:"tr",align:null},"resource_world"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spawn-limits.monster")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"70")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"90")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"70")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spawn-limits.creature")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"15"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spawn-limits.ambient")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"15")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"15")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"15")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"15"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spawn-limits.axolotls")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spawn-limits.underground_water_creature")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spawn-limits.water_creature")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spawn-limits.water_ambient")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"20")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"20")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"20")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"20"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keep-spawn-loaded")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("p",null,"Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"world_the_end")," was never specified in this configuration. Because of this, it inherits\nall the configuration options from the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," section. Additionally, ",(0,i.kt)("inlineCode",{parentName:"p"},"keep-spawn-loaded")," was only\ndisabled in ",(0,i.kt)("inlineCode",{parentName:"p"},"resource_world")," because in the ",(0,i.kt)("inlineCode",{parentName:"p"},"defualt")," section, ",(0,i.kt)("inlineCode",{parentName:"p"},"keep-spawn-loaded")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."))}c.isMDXComponent=!0}}]);