"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4568],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=u(r),f=n,d=y["".concat(l,".").concat(f)]||y[f]||s[f]||i;return r?o.createElement(d,a(a({ref:t},p),{},{components:r})):o.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return f}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],c={slug:"/velocity/how-to-migrate"},l="Migration Guide",u={unversionedId:"velocity/how-to/migration",id:"velocity/how-to/migration",title:"Migration Guide",description:"New to Velocity, or upgrading to a new version of Velocity? This page will briefly explore what you",source:"@site/docs/velocity/how-to/migration.md",sourceDirName:"velocity/how-to",slug:"/velocity/how-to-migrate",permalink:"/docs-previews/pull/16/velocity/how-to-migrate",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/how-to/migration.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646714966,formattedLastUpdatedAt:"3/8/2022",frontMatter:{slug:"/velocity/how-to-migrate"},sidebar:"docs",previous:{title:"Tuning Velocity",permalink:"/docs-previews/pull/16/velocity/how-to-tune-velocity"},next:{title:"Reference",permalink:"/docs-previews/pull/16/category/reference-1"}},p={},s=[{value:"Migrating from Velocity 1.0.x to Velocity 1.1.0",id:"migrating-from-velocity-10x-to-velocity-110",level:2}],y={toc:s};function f(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-guide"},"Migration Guide"),(0,i.kt)("p",null,"New to Velocity, or upgrading to a new version of Velocity? This page will briefly explore what you\nneed to be aware of for a successful migration"),(0,i.kt)("h2",{id:"migrating-from-velocity-10x-to-velocity-110"},"Migrating from Velocity 1.0.x to Velocity 1.1.0"),(0,i.kt)("p",null,"Moving from Velocity 1.0.x to Velocity 1.1.0 should be as simple as just replacing the Velocity JAR\nand restarting the proxy. You may want to back up your ",(0,i.kt)("inlineCode",{parentName:"p"},"velocity.toml")," and then delete the current\n",(0,i.kt)("inlineCode",{parentName:"p"},"velocity.toml")," and let Velocity regenerate it to add the new settings that Velocity 1.1.0\nintroduces."))}f.isMDXComponent=!0}}]);