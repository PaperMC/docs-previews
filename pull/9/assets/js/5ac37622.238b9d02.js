"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9198],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),y=u(r),f=o,d=y["".concat(l,".").concat(f)]||y[f]||p[f]||i;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=y;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2504:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={},l="Migration Guide",u={unversionedId:"velocity/users/migration",id:"velocity/users/migration",title:"Migration Guide",description:"New to Velocity, or upgrading to a new version of Velocity? This page will briefly explore what you",source:"@site/docs/velocity/users/migration.md",sourceDirName:"velocity/users",slug:"/velocity/users/migration",permalink:"/docs-previews/pull/9/velocity/users/migration",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/users/migration.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",frontMatter:{},sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/docs-previews/pull/9/velocity/users/faq"},next:{title:"Developer's Guide",permalink:"/docs-previews/pull/9/velocity/developers/"}},s={},p=[{value:"Migrating from Velocity 1.0.x to Velocity 1.1.0",id:"migrating-from-velocity-10x-to-velocity-110",level:2}],y={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-guide"},"Migration Guide"),(0,i.kt)("p",null,"New to Velocity, or upgrading to a new version of Velocity? This page will briefly explore what you\nneed to be aware of for a successful migration"),(0,i.kt)("h2",{id:"migrating-from-velocity-10x-to-velocity-110"},"Migrating from Velocity 1.0.x to Velocity 1.1.0"),(0,i.kt)("p",null,"Moving from Velocity 1.0.x to Velocity 1.1.0 should be as simple as just replacing the Velocity JAR\nand restarting the proxy. You may want to back up your ",(0,i.kt)("inlineCode",{parentName:"p"},"velocity.toml")," and then delete the current\n",(0,i.kt)("inlineCode",{parentName:"p"},"velocity.toml")," and let Velocity regenerate it to add the new settings that Velocity 1.1.0\nintroduces."))}f.isMDXComponent=!0}}]);