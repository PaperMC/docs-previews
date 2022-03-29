"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8498],{4907:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,v=u["".concat(s,".").concat(p)]||u[p]||d[p]||l;return n?a.createElement(v,i(i({ref:t},m),{},{components:n})):a.createElement(v,i({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5153:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var a=n(6687),r=n(6355),l=n(9149),i=n(4238),o=n(3654);function s(e){var t=e.permalink,n=e.title,r=e.subLabel;return a.createElement(o.default,{className:"pagination-nav__link",to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}function c(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t&&a.createElement(s,(0,l.Z)({},t,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(s,(0,l.Z)({},n,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var m=n(7320),d=n(3193),u=n(5304);var p={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=p[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.default,{to:n,onClick:r},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,n=e.className,l=e.versionMetadata,i=(0,m.default)().siteConfig.title,o=(0,d.gA)({failfast:!0}).pluginId,s=(0,u.J)(o).savePreferredVersionName,c=(0,d.Jo)(o),p=c.latestDocSuggestion,h=c.latestVersionSuggestion,g=null!=p?p:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:i,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:h.label,to:g.path,onClick:function(){return s(h.name)}})))}function g(e){var t=e.className,n=(0,u.E6)();return n.banner?a.createElement(h,{className:t,versionMetadata:n}):null}function b(e){var t=e.className,n=(0,u.E6)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function y(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return a.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:u.kM.common.lastUpdated},a.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=n(8332),T="iconEdit_BVGh",Z=["className"];function _(e){var t=e.className,n=(0,N.Z)(e,Z);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(T,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function L(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},a.createElement(_,null),a.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var O="tag_cgIf",C="tagRegular_vZhT",w="tagWithCount_baLu";function x(e){var t=e.permalink,n=e.name,l=e.count;return a.createElement(o.default,{href:t,className:(0,r.Z)(O,l?w:C)},n,l&&a.createElement("span",null,l))}var U="tags_Vnah",P="tag_TMNV";function j(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(U,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:P},a.createElement(x,{name:t,permalink:n}))}))))}var A="lastUpdated_NTae";function M(e){return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(j,e)))}function S(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(L,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",A)},(n||l)&&a.createElement(k,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function D(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,s=t.tags,c=s.length>0,m=!!(n||l||o);return c||m?a.createElement("footer",{className:(0,r.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(M,{tags:s}),m&&a.createElement(S,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:o,formattedLastUpdatedAt:i})):null}var H=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function B(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(B,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}function V(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,i=e.linkClassName,o=void 0===i?"table-of-contents__link":i,s=e.linkActiveClassName,c=void 0===s?void 0:s,m=e.minHeadingLevel,d=e.maxHeadingLevel,p=(0,N.Z)(e,H),v=(0,u.LU)(),f=null!=m?m:v.tableOfContents.minHeadingLevel,h=null!=d?d:v.tableOfContents.maxHeadingLevel,g=(0,u.b9)({toc:t,minHeadingLevel:f,maxHeadingLevel:h}),b=(0,a.useMemo)((function(){if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:h}}),[o,c,f,h]);return(0,u.Si)(b),a.createElement(B,(0,l.Z)({toc:g,className:r,linkClassName:o},p))}var I="tableOfContents_WCKU",z=["className"];function F(e){var t=e.className,n=(0,N.Z)(e,z);return a.createElement("div",{className:(0,r.Z)(I,"thin-scrollbar",t)},a.createElement(V,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var R="tocCollapsible_OG8h",W="tocCollapsibleButton_NOUj",G="tocCollapsibleContent_Kvd2",q="tocCollapsibleExpanded_Kxl9";function K(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,o=e.maxHeadingLevel,s=(0,u.uR)({initialState:!0}),c=s.collapsed,m=s.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(R,!c&&q,n)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",W),onClick:m},a.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:G,collapsed:c},a.createElement(V,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}var J="anchorWithStickyNavbar_w64e",X="anchorWithHideOnScrollNavbar_Ohwh",Q=["as","id"],Y=["as"];function $(e){var t=e.as,n=e.id,o=(0,N.Z)(e,Q),s=(0,u.LU)().navbar.hideOnScroll;return n?a.createElement(t,(0,l.Z)({},o,{className:(0,r.Z)("anchor",s?X:J),id:n}),o.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,o)}function ee(e){var t=e.as,n=(0,N.Z)(e,Y);return"h1"===t?a.createElement("h1",(0,l.Z)({},n,{id:void 0}),n.children):a.createElement($,(0,l.Z)({as:t},n))}var te="docItemContainer_tNnx",ne="docItemCol_hZmM",ae="tocMobile_o81H",re={breadcrumbsContainer:"breadcrumbsContainer_Edw9"},le=n(1012);function ie(e){var t=e.children,n=e.href,r="breadcrumbs__link";return n?a.createElement(o.default,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r,itemProp:"item name"},t)}function oe(e){var t=e.children,n=e.active,l=e.index;return a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function se(){var e=(0,le.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(o.default,{className:(0,r.Z)("breadcrumbs__link",re.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function ce(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(u.kM.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(se,null),e.map((function(t,n){return a.createElement(oe,{key:n,active:n===e.length-1,index:n},a.createElement(ie,{href:n<e.length-1?t.href:void 0},t.label))})))):null}var me=n(4907),de=n(1658),ue=["mdxType","originalType"];var pe=n(6076);var ve="details_qHjv";function fe(e){var t=Object.assign({},e);return a.createElement(u.PO,(0,l.Z)({},t,{className:(0,r.Z)("alert alert--info",ve,t.className)}))}function he(e){return a.createElement(ee,e)}var ge="img_nENl";var be={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,N.Z)(r,ue));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(de.default,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(pe.Z,e)},a:function(e){return a.createElement(o.default,e)},pre:function(e){var t;return a.createElement(pe.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(fe,(0,l.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_vM8X"))}));var t},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,ge))}));var t},h1:function(e){return a.createElement(he,(0,l.Z)({as:"h1"},e))},h2:function(e){return a.createElement(he,(0,l.Z)({as:"h2"},e))},h3:function(e){return a.createElement(he,(0,l.Z)({as:"h3"},e))},h4:function(e){return a.createElement(he,(0,l.Z)({as:"h4"},e))},h5:function(e){return a.createElement(he,(0,l.Z)({as:"h5"},e))},h6:function(e){return a.createElement(he,(0,l.Z)({as:"h6"},e))}};function ye(e){var t=e.children;return a.createElement(me.Zo,{components:be},t)}function Ee(e){var t,n=e.content,r=n.metadata,l=n.frontMatter,i=n.assets,o=l.keywords,s=r.description,c=r.title,m=null!=(t=i.image)?t:l.image;return a.createElement(u.d,{title:c,description:s,keywords:o,image:m})}function ke(e){var t=e.content,n=t.metadata,l=t.frontMatter,i=l.hide_title,o=l.hide_table_of_contents,s=l.toc_min_heading_level,m=l.toc_max_heading_level,d=n.title,p=!i&&void 0===t.contentTitle,v=(0,u.iP)(),f=!o&&t.toc&&t.toc.length>0,h=f&&("desktop"===v||"ssr"===v);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!o&&ne)},a.createElement(g,null),a.createElement("div",{className:te},a.createElement("article",null,a.createElement(ce,null),a.createElement(b,null),f&&a.createElement(K,{toc:t.toc,minHeadingLevel:s,maxHeadingLevel:m,className:(0,r.Z)(u.kM.docs.docTocMobile,ae)}),a.createElement("div",{className:(0,r.Z)(u.kM.docs.docMarkdown,"markdown")},p&&a.createElement("header",null,a.createElement(ee,{as:"h1"},d)),a.createElement(ye,null,a.createElement(t,null))),a.createElement(D,e)),a.createElement(c,{previous:n.previous,next:n.next}))),h&&a.createElement("div",{className:"col col--3"},a.createElement(F,{toc:t.toc,minHeadingLevel:s,maxHeadingLevel:m,className:u.kM.docs.docTocDesktop})))}function Ne(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(u.FG,{className:t},a.createElement(Ee,e),a.createElement(ke,e))}},9219:function(e,t,n){n.d(t,{ZP:function(){return f},lG:function(){return i}});var a=n(271),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l=n(6687),i={Prism:a.default,theme:r};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var c=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},u=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=s({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=s({},n,{backgroundColor:null}),r};function p(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var v=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),o(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?u(e.theme,e.language):void 0;return t.themeDict=n})),o(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=s({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(l.style=i.plain),void 0!==r&&(l.style=void 0!==l.style?s({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),o(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var i=a?{display:"inline-block"}:{},o=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[i].concat(o))}})),o(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,i=s({},p(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?s({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),o(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,i=0,o=[],s=[o];i>-1;){for(;(l=a[i]++)<r[i];){var u=void 0,p=t[i],v=n[i][l];if("string"==typeof v?(p=i>0?p:["plain"],u=v):(p=d(p,v.type),v.alias&&(p=d(p,v.alias)),u=v.content),"string"==typeof u){var f=u.split(c),h=f.length;o.push({types:p,content:f[0]});for(var g=1;g<h;g++)m(o),s.push(o=[]),o.push({types:p,content:f[g]})}else i++,t.push(p),n.push(u),a.push(0),r.push(u.length)}i--,t.pop(),n.pop(),a.pop(),r.pop()}return m(o),s}(void 0!==i?this.tokenize(t,a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),f=v},7887:function(e,t,n){function a(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var i=document.getSelection(),o=!1;i.rangeCount>0&&(o=i.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var s=!1;try{s=document.execCommand("copy")}catch(c){}return r.remove(),o&&(i.removeAllRanges(),i.addRange(o)),l&&l.focus(),s}n.d(t,{Z:function(){return a}})}}]);