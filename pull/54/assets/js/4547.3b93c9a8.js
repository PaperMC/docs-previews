"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4547],{4907:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(6687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=p(r),f=o,d=y["".concat(c,".").concat(f)]||y[f]||s[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(4907);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a={slug:"/velocity/migration"},l="Migration Guide",c={unversionedId:"velocity/how-to/migration",id:"velocity/how-to/migration",title:"Migration Guide",description:"New to Velocity, or upgrading to a new version of Velocity? This page will briefly explore what you",source:"@site/docs/velocity/how-to/migration.md",sourceDirName:"velocity/how-to",slug:"/velocity/migration",permalink:"/docs-previews/pull/54/velocity/migration",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/how-to/migration.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1646787673,formattedLastUpdatedAt:"3/9/2022",frontMatter:{slug:"/velocity/migration"},sidebar:"docs",previous:{title:"Tuning Velocity",permalink:"/docs-previews/pull/54/velocity/tuning"},next:{title:"Reference",permalink:"/docs-previews/pull/54/category/velocity/reference"}},p={},u=[{value:"Migrating from Velocity 1.0.x to Velocity 1.1.0",id:"migrating-from-velocity-10x-to-velocity-110",level:2}],s={toc:u};function y(e){var t=e.components,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"migration-guide"}),"Migration Guide"),(0,n.kt)("p",null,"New to Velocity, or upgrading to a new version of Velocity? This page will briefly explore what you\nneed to be aware of for a successful migration"),(0,n.kt)("h2",o({},{id:"migrating-from-velocity-10x-to-velocity-110"}),"Migrating from Velocity 1.0.x to Velocity 1.1.0"),(0,n.kt)("p",null,"Moving from Velocity 1.0.x to Velocity 1.1.0 should be as simple as just replacing the Velocity JAR\nand restarting the proxy. You may want to back up your ",(0,n.kt)("inlineCode",{parentName:"p"},"velocity.toml")," and then delete the current\n",(0,n.kt)("inlineCode",{parentName:"p"},"velocity.toml")," and let Velocity regenerate it to add the new settings that Velocity 1.1.0\nintroduces."))}y.isMDXComponent=!0}}]);