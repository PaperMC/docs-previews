"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4202],{4907:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=p(r),f=n,g=y["".concat(c,".").concat(f)]||y[f]||s[f]||i;return r?o.createElement(g,a(a({ref:t},u),{},{components:r})):o.createElement(g,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>u});r(6687);var o=r(4907);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a={slug:"/velocity/migration"},l="Migration Guide",c={unversionedId:"velocity/how-to/migration",id:"velocity/how-to/migration",title:"Migration Guide",description:"New to Velocity, or upgrading to a new version of Velocity? This page will briefly explore what you",source:"@site/docs/velocity/how-to/migration.md",sourceDirName:"velocity/how-to",slug:"/velocity/migration",permalink:"/docs-previews/pull/47/velocity/migration",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/how-to/migration.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1646787673,formattedLastUpdatedAt:"3/9/2022",frontMatter:{slug:"/velocity/migration"},sidebar:"docs",previous:{title:"Tuning Velocity",permalink:"/docs-previews/pull/47/velocity/tuning"},next:{title:"Configuring Velocity",permalink:"/docs-previews/pull/47/velocity/configuration"}},p={},u=[{value:"Migrating from Velocity 1.0.x to Velocity 1.1.0",id:"migrating-from-velocity-10x-to-velocity-110",level:2}],s={toc:u};function y(e){var t=e.components,r=i(e,["components"]);return(0,o.kt)("wrapper",n({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",n({},{id:"migration-guide"}),"Migration Guide"),(0,o.kt)("p",null,"New to Velocity, or upgrading to a new version of Velocity? This page will briefly explore what you\nneed to be aware of for a successful migration"),(0,o.kt)("h2",n({},{id:"migrating-from-velocity-10x-to-velocity-110"}),"Migrating from Velocity 1.0.x to Velocity 1.1.0"),(0,o.kt)("p",null,"Moving from Velocity 1.0.x to Velocity 1.1.0 should be as simple as just replacing the Velocity JAR\nand restarting the proxy. You may want to back up your ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.toml")," and then delete the current\n",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.toml")," and let Velocity regenerate it to add the new settings that Velocity 1.1.0\nintroduces."))}y.isMDXComponent=!0}}]);