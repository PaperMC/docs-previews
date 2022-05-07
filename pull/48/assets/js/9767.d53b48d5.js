"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9767],{5983:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(6687),r=n(9482),i=n(4364),l=n(6355);const s="cardContainer_onvE",c="cardTitle_sr1u",o="cardDescription_EUYs";var m=n(4458),u=n(5154);function d(e){var t=e.href,n=e.children;return a.createElement(r.default,{href:t,className:(0,l.Z)("card padding--lg",s)},n)}function v(e){var t=e.href,n=e.icon,r=e.title,i=e.description;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",c),title:r},n," ",r),i&&a.createElement("p",{className:(0,l.Z)("text--truncate",o),title:i},i))}function p(e){var t=e.item,n=(0,i.Wl)(t);return n?a.createElement(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){var t,n=e.item,r=(0,m.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!==(t=n.docId)&&void 0!==t?t:void 0);return a.createElement(v,{href:n.href,icon:r,title:n.label,description:null==l?void 0:l.description})}function h(e){var t=e.item;switch(t.type){case"link":return a.createElement(b,{item:t});case"category":return a.createElement(p,{item:t});default:throw new Error("unknown item type ".concat(JSON.stringify(t)))}}function f(e){var t=e.items;return a.createElement("div",{className:"row"},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(h,{key:t,item:e}))})))}},9767:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(6687),r=n(4364),i=n(5983),l=n(2220),s=n(5147),c=n(6498),o=n(1175),m=n(9486),u=n(30);const d="generatedIndexPage_bwug",v="title_HVpl";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function b(e){var t=e.categoryGeneratedIndex;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,u.Z)(t.image)})}function h(e){var t=e.categoryGeneratedIndex,n=(0,r.jA)();return a.createElement(a.Fragment,null,a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,u.Z)(t.image)}),a.createElement("div",{className:d},a.createElement(s.Z,null),a.createElement(o.Z,null),a.createElement(c.Z,null),a.createElement("header",null,a.createElement(m.Z,{as:"h1",className:v},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("main",{className:"margin-top--lg"},a.createElement(i.Z,{items:n.items})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(l.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}function f(e){return a.createElement(a.Fragment,null,a.createElement(b,p({},e)),a.createElement(h,p({},e)))}},2220:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(6687),r=n(5154),i=n(9482);function l(e){var t=e.permalink,n=e.title,r=e.subLabel;return a.createElement(i.default,{className:"pagination-nav__link",to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function c(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t&&a.createElement(l,s({},t,{subLabel:a.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(l,s({},n,{subLabel:a.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},6498:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(6687),r=n(5154),i=n(4364),l=n(6355);function s(e){var t=e.className,n=(0,i.E6)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,i.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},5147:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(6687),r=n(583),i=n(9482),l=n(5154),s=n(6705),c=n(4364),o=n(6355);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}var u={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function d(e){var t=u[e.versionMetadata.banner];return a.createElement(t,m({},e))}function v(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.default,{to:n,onClick:r},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,n=e.className,i=e.versionMetadata,l=(0,r.default)().siteConfig.title,m=(0,s.gA)({failfast:!0}).pluginId,u=(0,c.J)(m).savePreferredVersionName,p=(0,s.Jo)(m),b=p.latestDocSuggestion,h=p.latestVersionSuggestion,f=null!=b?b:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,o.Z)(n,c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(d,{siteTitle:l,versionMetadata:i})),a.createElement("div",{className:"margin-top--md"},a.createElement(v,{versionLabel:h.label,to:f.path,onClick:function(){return u(h.name)}})))}function b(e){var t=e.className,n=(0,c.E6)();return n.banner?a.createElement(p,{className:t,versionMetadata:n}):null}},9486:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(6687),r=n(6355),i=n(5154),l=n(4364);const s="anchorWithStickyNavbar__eKV",c="anchorWithHideOnScrollNavbar_K7C5";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e){var t=e.as,n=e.id,u=m(e,["as","id"]),d=(0,l.LU)().navbar.hideOnScroll;return n?a.createElement(t,o({},u,{className:(0,r.Z)("anchor",d?c:s),id:n}),u.children,a.createElement("a",{className:"hash-link",href:"#".concat(n),title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,o({},u))}function d(e){var t=e.as,n=m(e,["as"]);return"h1"===t?a.createElement("h1",o({},n,{id:void 0}),n.children):a.createElement(u,o({as:t},n))}},1175:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(6687),r=n(4364);const i={breadcrumbsContainer:"breadcrumbsContainer_Alpn"};var l=n(6355),s=n(9482),c=n(30);function o(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(s.default,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r,itemProp:"item name"},t)}function m(e){var t=e.children,n=e.active,r=e.index;return a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function u(){var e=(0,c.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(s.default,{className:(0,l.Z)("breadcrumbs__link",i.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function d(){var e=(0,r.s1)(),t=(0,r.Ns)();return e?a.createElement("nav",{className:(0,l.Z)(r.kM.docs.docBreadcrumbs,i.breadcrumbsContainer),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(u,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(m,{key:n,active:r,index:n},a.createElement(o,{href:t.href,isLast:r},t.label))})))):null}}}]);