"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4541:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),a=r(6010),i=r(6828),o=r(9130),c=r(5096),l=r(3084);const s="cardContainer_fWXF",p="cardTitle_rnsV",d="cardDescription_PWke";function m({href:e,children:t}){return n.createElement(o.Z,{href:e,className:(0,a.Z)("card padding--lg",s)},t)}function u({href:e,icon:t,title:r,description:i}){return n.createElement(m,{href:e},n.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:r},t," ",r),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:i},i))}function f({item:e}){const t=(0,i.Wl)(e);return t?n.createElement(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function y({item:e}){var t;const r=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(u,{href:e.href,icon:r,title:e.label,description:null==a?void 0:a.description})}function g({item:e}){switch(e.type){case"link":return n.createElement(y,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function b({items:e,className:t}){return n.createElement("section",{className:(0,a.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(e).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{key:t,item:e})))))}},2754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var n=r(3905),a=r(4541),i=r(6828),o=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&m(e,r,t[r]);return e};const f={slug:"/admin"},y="Paper Server Administration",g={unversionedId:"admin/README",id:"version-1.18/admin/README",title:"Paper Server Administration",description:"Welcome to the Paper Server Administration Guide! This guide includes information and tutorials",source:"@site/docs/versioned/paper/content/1.18/admin/README.md",sourceDirName:"admin",slug:"/admin",permalink:"/paper/1.18/admin",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/admin/README.md",tags:[],version:"1.18",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1654938163,formattedLastUpdatedAt:"6/11/2022",frontMatter:{slug:"/admin"},sidebar:"primary",previous:{title:"Welcome to the Paper Docs",permalink:"/paper/1.18/"},next:{title:"Getting Started",permalink:"/paper/1.18/cat/admin/getting-started"}},b={},v=[],h={toc:v};function O(e){var t,r=e,{components:o}=r,m=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},h),m),c(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"paper-server-administration"}),"Paper Server Administration"),(0,n.kt)("p",null,"Welcome to the Paper Server Administration Guide! This guide includes information and tutorials\nregarding the administration of a Paper server."),(0,n.kt)("hr",null),(0,n.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}O.isMDXComponent=!0}}]);