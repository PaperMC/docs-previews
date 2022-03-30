"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9290],{4907:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(6677);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9219:(e,t,n)=>{n.d(t,{ZP:()=>f,lG:()=>o});var r=n(271);const a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var l=n(6677),o={Prism:r.default,theme:a};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=c({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=c({},n,{backgroundColor:null}),a};function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,l=c({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==a&&(l.style=void 0!==l.style?c({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return l[n[0]];var o=r?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,l=e.token,o=c({},p(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==a&&(o.style=void 0!==o.style?c({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),i(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var l=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=r[o]++)<a[o];){var d=void 0,p=t[o],f=n[o][l];if("string"==typeof f?(p=o>0?p:["plain"],d=f):(p=m(p,f.type),f.alias&&(p=m(p,f.alias)),d=f.content),"string"==typeof d){var v=d.split(s),h=v.length;i.push({types:p,content:v[0]});for(var g=1;g<h;g++)u(i),c.push(i=[]),i.push({types:p,content:v[g]})}else o++,t.push(p),n.push(d),r.push(0),a.push(d.length)}o--,t.pop(),n.pop(),r.pop(),a.pop()}return u(i),c}(void 0!==o?this.tokenize(t,r,o,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component)},8393:(e,t,n)=>{n.r(t),n.d(t,{default:()=>He});var r=n(6677),a=n(6355),l=n(5154),o=n(9482);function i(e){var t=e.permalink,n=e.title,a=e.subLabel;return r.createElement(o.default,{className:"pagination-nav__link",to:t},a&&r.createElement("div",{className:"pagination-nav__sublabel"},a),r.createElement("div",{className:"pagination-nav__label"},n))}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e){var t=e.previous,n=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(i,c({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(i,c({},n,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var u=n(583),m=n(4410),d=n(4364);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var f={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return r.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return r.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=f[e.versionMetadata.banner];return r.createElement(t,p({},e))}function h(e){var t=e.versionLabel,n=e.to,a=e.onClick;return r.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:r.createElement("b",null,r.createElement(o.default,{to:n,onClick:a},r.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){var t,n=e.className,l=e.versionMetadata,o=(0,u.default)().siteConfig.title,i=(0,m.gA)({failfast:!0}).pluginId,c=(0,d.J)(i).savePreferredVersionName,s=(0,m.Jo)(i),p=s.latestDocSuggestion,f=s.latestVersionSuggestion,g=null!=p?p:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return r.createElement("div",{className:(0,a.Z)(n,d.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},r.createElement("div",null,r.createElement(v,{siteTitle:o,versionMetadata:l})),r.createElement("div",{className:"margin-top--md"},r.createElement(h,{versionLabel:f.label,to:g.path,onClick:function(){return c(f.name)}})))}function y(e){var t=e.className,n=(0,d.E6)();return n.banner?r.createElement(g,{className:t,versionMetadata:n}):null}function b(e){var t=e.className,n=(0,d.E6)();return n.badge?r.createElement("span",{className:(0,a.Z)(t,d.kM.docs.docVersionBadge,"badge badge--secondary")},r.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function E(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return r.createElement(l.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:r.createElement("b",null,r.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function O(e){var t=e.lastUpdatedBy;return r.createElement(l.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:r.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,a=e.lastUpdatedBy;return r.createElement("span",{className:d.kM.common.lastUpdated},r.createElement(l.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?r.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?r.createElement(O,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}const N="iconEdit_BVGh";function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function P(e){var t=e.className,n=w(e,["className"]);return r.createElement("svg",j({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(N,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},r.createElement(P,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const _="tag_cgIf",L="tagRegular_vZhT",x="tagWithCount_baLu";function C(e){var t=e.permalink,n=e.name,l=e.count;return r.createElement(o.default,{href:t,className:(0,a.Z)(_,l?x:L)},n,l&&r.createElement("span",null,l))}const Z="tags_Vnah",U="tag_TMNV";function S(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(Z,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:U},r.createElement(C,{name:t,permalink:n}))}))))}const A="lastUpdated_NTae";function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function D(e){return r.createElement("div",{className:(0,a.Z)(d.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},r.createElement("div",{className:"col"},r.createElement(S,M({},e))))}function H(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return r.createElement("div",{className:(0,a.Z)(d.kM.docs.docFooterEditMetaRow,"row")},r.createElement("div",{className:"col"},t&&r.createElement(T,{editUrl:t})),r.createElement("div",{className:(0,a.Z)("col",A)},(n||l)&&r.createElement(k,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function I(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,o=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,c=t.tags,s=c.length>0,u=!!(n||l||i);return s||u?r.createElement("footer",{className:(0,a.Z)(d.kM.docs.docFooter,"docusaurus-mt-lg")},s&&r.createElement(D,{tags:c}),u&&r.createElement(H,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:i,formattedLastUpdatedAt:o})):null}function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function z(e){var t=e.toc,n=e.className,a=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#".concat(e.id),className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(z,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}function F(e){var t=e.toc,n=e.className,a=void 0===n?"table-of-contents table-of-contents__left-border":n,l=e.linkClassName,o=void 0===l?"table-of-contents__link":l,i=e.linkActiveClassName,c=void 0===i?void 0:i,s=e.minHeadingLevel,u=e.maxHeadingLevel,m=V(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]),p=(0,d.LU)(),f=null!=s?s:p.tableOfContents.minHeadingLevel,v=null!=u?u:p.tableOfContents.maxHeadingLevel,h=(0,d.b9)({toc:t,minHeadingLevel:f,maxHeadingLevel:v}),g=(0,r.useMemo)((function(){if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:v}}),[o,c,f,v]);return(0,d.Si)(g),r.createElement(z,B({toc:h,className:a,linkClassName:o},m))}const R="tableOfContents_WCKU";function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function q(e){var t=e.className,n=G(e,["className"]);return r.createElement("div",{className:(0,a.Z)(R,"thin-scrollbar",t)},r.createElement(F,W({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}const K="tocCollapsible_OG8h",J="tocCollapsibleButton_NOUj",X="tocCollapsibleContent_Kvd2",Q="tocCollapsibleExpanded_Kxl9";function Y(e){var t=e.toc,n=e.className,o=e.minHeadingLevel,i=e.maxHeadingLevel,c=(0,d.uR)({initialState:!0}),s=c.collapsed,u=c.toggleCollapsed;return r.createElement("div",{className:(0,a.Z)(K,!s&&Q,n)},r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn",J),onClick:u},r.createElement(l.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),r.createElement(d.zF,{lazy:!0,className:X,collapsed:s},r.createElement(F,{toc:t,minHeadingLevel:o,maxHeadingLevel:i})))}const $="anchorWithStickyNavbar_w64e",ee="anchorWithHideOnScrollNavbar_Ohwh";function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function re(e){var t=e.as,n=e.id,o=ne(e,["as","id"]),i=(0,d.LU)().navbar.hideOnScroll;return n?r.createElement(t,te({},o,{className:(0,a.Z)("anchor",i?ee:$),id:n}),o.children,r.createElement("a",{className:"hash-link",href:"#".concat(n),title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,te({},o))}function ae(e){var t=e.as,n=ne(e,["as"]);return"h1"===t?r.createElement("h1",te({},n,{id:void 0}),n.children):r.createElement(re,te({as:t},n))}const le="docItemContainer_tNnx",oe="docItemCol_hZmM",ie="tocMobile_o81H",ce={breadcrumbsContainer:"breadcrumbsContainer_Edw9"};var se=n(30);function ue(e){var t=e.children,n=e.href,a="breadcrumbs__link";return n?r.createElement(o.default,{className:a,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:a,itemProp:"item name"},t)}function me(e){var t=e.children,n=e.active,l=e.index;return r.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function de(){var e=(0,se.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.default,{className:(0,a.Z)("breadcrumbs__link",ce.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function pe(){var e=(0,d.s1)(),t=(0,d.Ns)();return e?r.createElement("nav",{className:(0,a.Z)(d.kM.docs.docBreadcrumbs,ce.breadcrumbsContainer),"aria-label":"breadcrumbs"},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(de,null),e.map((function(t,n){return r.createElement(me,{key:n,active:n===e.length-1,index:n},r.createElement(ue,{href:n<e.length-1?t.href:void 0},t.label))})))):null}var fe=n(4907),ve=n(1051);function he(){return he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},he.apply(this,arguments)}function ge(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ye=n(1145);function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function Ee(){return Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ke(){return ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ke.apply(this,arguments)}const Ne="details_qHjv";function je(){return je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},je.apply(this,arguments)}function we(e){var t=je({},e);return r.createElement(d.PO,je({},t,{className:(0,a.Z)("alert alert--info",Ne,t.className)}))}function Pe(){return Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pe.apply(this,arguments)}function Te(){return Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}function _e(e){return r.createElement(ae,Te({},e))}function Le(){return Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Le.apply(this,arguments)}const xe="img_nENl";function Ce(){return Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce.apply(this,arguments)}function Ze(){return Ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ze.apply(this,arguments)}const Ue={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if((null==e||null===(t=e.props)||void 0===t?void 0:t.mdxType)&&(null==e||null===(n=e.props)||void 0===n?void 0:n.originalType)){var a=e.props,l=(a.mdxType,a.originalType,ge(a,["mdxType","originalType"]));return r.createElement(e.props.originalType,l)}return e}(e)}));return r.createElement(ve.default,he({},e),t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",be({},e)):r.createElement(ye.Z,be({},e))},a:function(e){return r.createElement(o.default,Ee({},e))},pre:function(e){var t;return r.createElement(ye.Z,ke({},(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null===(t=e.children)||void 0===t?void 0:t.props:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Oe(e,t,n[t])}))}return e}({},e)))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null===(t=e.props)||void 0===t?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(we,Pe({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",Le({},e,{className:(t=e.className,(0,a.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_vM8X"))}));var t},img:function(e){return r.createElement("img",Ce({loading:"lazy"},e,{className:(t=e.className,(0,a.Z)(t,xe))}));var t},h1:function(e){return r.createElement(_e,Ze({as:"h1"},e))},h2:function(e){return r.createElement(_e,Ze({as:"h2"},e))},h3:function(e){return r.createElement(_e,Ze({as:"h3"},e))},h4:function(e){return r.createElement(_e,Ze({as:"h4"},e))},h5:function(e){return r.createElement(_e,Ze({as:"h5"},e))},h6:function(e){return r.createElement(_e,Ze({as:"h6"},e))}};function Se(e){var t=e.children;return r.createElement(fe.Zo,{components:Ue},t)}function Ae(){return Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ae.apply(this,arguments)}function Me(e){var t,n=e.content,a=n.metadata,l=n.frontMatter,o=n.assets,i=l.keywords,c=a.description,s=a.title,u=null!==(t=o.image)&&void 0!==t?t:l.image;return r.createElement(d.d,Ae({},{title:s,description:c,keywords:i,image:u}))}function De(e){var t=e.content,n=t.metadata,l=t.frontMatter,o=l.hide_title,i=l.hide_table_of_contents,c=l.toc_min_heading_level,u=l.toc_max_heading_level,m=n.title,p=!o&&void 0===t.contentTitle,f=(0,d.iP)(),v=!i&&t.toc&&t.toc.length>0,h=v&&("desktop"===f||"ssr"===f);return r.createElement("div",{className:"row"},r.createElement("div",{className:(0,a.Z)("col",!i&&oe)},r.createElement(y,null),r.createElement("div",{className:le},r.createElement("article",null,r.createElement(pe,null),r.createElement(b,null),v&&r.createElement(Y,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:u,className:(0,a.Z)(d.kM.docs.docTocMobile,ie)}),r.createElement("div",{className:(0,a.Z)(d.kM.docs.docMarkdown,"markdown")},p&&r.createElement("header",null,r.createElement(ae,{as:"h1"},m)),r.createElement(Se,null,r.createElement(t,null))),r.createElement(I,Ae({},e))),r.createElement(s,{previous:n.previous,next:n.next}))),h&&r.createElement("div",{className:"col col--3"},r.createElement(q,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:u,className:d.kM.docs.docTocDesktop})))}function He(e){var t="docs-doc-id-".concat(e.content.metadata.unversionedId);return r.createElement(d.FG,{className:t},r.createElement(Me,Ae({},e)),r.createElement(De,Ae({},e)))}},1070:(e,t,n)=>{function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.target,r=void 0===n?document.body:n,a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}return a.remove(),i&&(o.removeAllRanges(),o.addRange(i)),l&&l.focus(),c}n.d(t,{Z:()=>r})}}]);