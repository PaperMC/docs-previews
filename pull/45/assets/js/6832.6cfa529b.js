"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6832,5902],{6832:(e,t,n)=>{n.r(t),n.d(t,{default:()=>re});var r=n(6687),a=n(7091),l=n(5353),o=n(4364),i=n(6355),c=n(5566);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e){return r.createElement("svg",u({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var d=n(5154);const m="collapseSidebarButton_bFsJ",f="collapseSidebarButtonIcon_SQOP";function p(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,d.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,d.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",m),onClick:t},r.createElement(s,{className:f}))}var b=n(9482),h=n(4458),v=n(849);const y="menuHtmlItem_msi7",g="menuExternalLink_bcuV";var E=n(8812);function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _(e){var t=e.item,n=k(e,["item"]);switch(t.type){case"category":return r.createElement(I,S({item:t},n));case"html":return r.createElement(C,S({item:t},n));default:return r.createElement(N,S({item:t},n))}}function I(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!C;O(e?null:u),N(e)},n=e.item,a=e.onItemClick,l=e.activePath,c=e.level,u=e.index,s=k(e,["item","onItemClick","activePath","level","index"]),m=n.items,f=n.label,p=n.collapsible,h=n.className,v=n.href,y=function(e){var t=(0,E.Z)();return(0,r.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,o.Wl)(e):void 0}),[e,t])}(n),g=(0,o._F)(n,l),_=(0,o.Mg)(v,l),I=(0,o.uR)({initialState:function(){return!!p&&(!g&&n.collapsed)}}),C=I.collapsed,N=I.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,l=(0,o.D9)(t);(0,r.useEffect)((function(){t&&!l&&n&&a(!1)}),[t,l,n,a])}({isActive:g,collapsed:C,setCollapsed:N});var T=(0,o.fP)(),A=T.expandedItem,O=T.setExpandedItem,M=(0,o.LU)().autoCollapseSidebarCategories;return(0,r.useEffect)((function(){p&&A&&A!==u&&M&&N(!0)}),[p,A,u,N,M]),r.createElement("li",{className:(0,i.Z)(o.kM.docs.docSidebarItemCategory,o.kM.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},h)},r.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},r.createElement(b.default,S({className:(0,i.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!v,"menu__link--active":g}),onClick:p?function(e){null==a||a(n),v?t(!1):(e.preventDefault(),t())}:function(){null==a||a(n)},"aria-current":_?"page":void 0,"aria-expanded":p?!C:void 0,href:p?null!=y?y:"#":y},s),f),v&&p&&r.createElement("button",{"aria-label":(0,d.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:f}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),t()}})),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},r.createElement(w,{items:m,tabIndex:C?-1:0,onItemClick:a,activePath:l,level:c+1})))}function C(e){var t=e.item,n=e.level,a=e.index,l=t.value,c=t.defaultStyle,u=t.className;return r.createElement("li",{className:(0,i.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(n),c&&"".concat(y," menu__list-item"),u),key:a,dangerouslySetInnerHTML:{__html:l}})}function N(e){var t=e.item,n=e.onItemClick,a=e.activePath,l=e.level,c=(e.index,k(e,["item","onItemClick","activePath","level","index"])),u=t.href,s=t.label,d=t.className,m=(0,o._F)(t,a),f=(0,h.Z)(u);return r.createElement("li",{className:(0,i.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",d),key:s},r.createElement(b.default,S({className:(0,i.Z)("menu__link",!f&&g,{"menu__link--active":m}),"aria-current":m?"page":void 0,to:u},f&&{onClick:n?function(){return n(t)}:void 0},c),s,!f&&r.createElement(v.Z,null)))}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const w=(0,r.memo)((function(e){var t=e.items,n=A(e,["items"]);return r.createElement(o.D_,null,t.map((function(e,t){return r.createElement(_,T({key:t,item:e,index:t},n))})))})),O="menu_zZNE",M="menuWithAnnouncementBar_KcSR";function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e){var t=e.path,n=e.sidebar,a=e.className,l=function(){var e=(0,o.nT)().isActive,t=x((0,r.useState)(e),2),n=t[0],a=t[1];return(0,o.RF)((function(t){var n=t.scrollY;e&&a(0===n)}),[e]),e&&n}();return r.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",O,l&&M,a)},r.createElement("ul",{className:(0,i.Z)(o.kM.docs.docSidebarMenu,"menu__list")},r.createElement(w,{items:n,activePath:t,level:1})))}const P="sidebar_srrl",L="sidebarWithHideableNavbar_FjsV",F="sidebarHidden_GGZm",B="sidebarLogo_GeZp";const D=r.memo((function(e){var t=e.path,n=e.sidebar,a=e.onCollapse,l=e.isHidden,u=(0,o.LU)(),s=u.navbar.hideOnScroll,d=u.hideableSidebar;return r.createElement("div",{className:(0,i.Z)(P,s&&L,l&&F)},s&&r.createElement(c.Z,{tabIndex:-1,className:B}),r.createElement(j,{path:t,sidebar:n}),d&&r.createElement(p,{onClick:a}))}));var H=function(e){var t=e.sidebar,n=e.path,a=(0,o.el)();return r.createElement("ul",{className:(0,i.Z)(o.kM.docs.docSidebarMenu,"menu__list")},r.createElement(w,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};const R=r.memo((function(e){return r.createElement(o.Zo,{component:H,props:e})}));function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function z(e){var t=(0,o.iP)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(D,W({},e)),a&&r.createElement(R,W({},e)))}var G=n(5902);const U="backToTopButton_slgA",q="backToTopButtonShow_TL__";function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){var t;return null===(t=e.current)||void 0===t?void 0:t.call(e)}}}function $(){var e=V((0,r.useState)(!1),2),t=e[0],n=e[1],a=(0,r.useRef)(!1),l=Y(),c=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,o.RF)((function(e,t){var r=e.scrollY,l=null==t?void 0:t.scrollY;if(l)if(a.current)a.current=!1;else{var o=r<l;if(o||u(),r<300)n(!1);else if(o){var i=document.documentElement.scrollHeight;r+window.innerHeight<i&&n(!0)}else n(!1)}})),(0,o.SL)((function(e){e.location.hash&&(a.current=!0,n(!1))})),r.createElement("button",{"aria-label":(0,d.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",o.kM.common.backToTopButton,U,t&&q),type:"button",onClick:function(){return c()}})}var J=n(59);const Q={docPage:"docPage_z6C4",docMainContainer:"docMainContainer_qvK4",docSidebarContainer:"docSidebarContainer_zZ4D",docMainContainerEnhanced:"docMainContainerEnhanced_mG8y",docSidebarContainerHidden:"docSidebarContainerHidden_TrGG",collapsedDocSidebar:"collapsedDocSidebar_j7b4",expandSidebarButtonIcon:"expandSidebarButtonIcon_Zo6a",docItemWrapperEnhanced:"docItemWrapperEnhanced_oT6J"};var X=n(8226);function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e){var t=e.currentDocRoute,n=e.versionMetadata,a=e.children,c=e.sidebarName,u=(0,o.Vq)(),m=n.pluginId,f=n.version,p=te((0,r.useState)(!1),2),b=p[0],h=p[1],v=te((0,r.useState)(!1),2),y=v[0],g=v[1],E=(0,r.useCallback)((function(){y&&g(!1),h((function(e){return!e}))}),[y]);return r.createElement(r.Fragment,null,r.createElement(X.Z,{version:f,tag:(0,o.os)(m,f)}),r.createElement(l.Z,null,r.createElement("div",{className:Q.docPage},r.createElement($,null),u&&r.createElement("aside",{className:(0,i.Z)(o.kM.docs.docSidebarContainer,Q.docSidebarContainer,b&&Q.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&b&&g(!0)}},r.createElement(z,{key:c,sidebar:u,path:t.path,onCollapse:E,isHidden:y}),y&&r.createElement("div",{className:Q.collapsedDocSidebar,title:(0,d.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,d.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:E,onClick:E},r.createElement(s,{className:Q.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,i.Z)(Q.docMainContainer,(b||!u)&&Q.docMainContainerEnhanced)},r.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,b&&Q.docItemWrapperEnhanced)},a)))))}function re(e){var t=e.route.routes,n=e.versionMetadata,l=e.location,c=t.find((function(e){return(0,J.LX)(l.pathname,e)}));if(!c)return r.createElement(G.default,null);var u=c.sidebar,s=u?n.docsSidebars[u]:null;return r.createElement(o.FG,{className:(0,i.Z)(o.kM.wrapper.docsPages,o.kM.page.docsDocPage,n.className)},r.createElement(o.qu,{version:n},r.createElement(o.bT,{sidebar:null!=s?s:null},r.createElement(ne,{currentDocRoute:c,versionMetadata:n,sidebarName:u},(0,a.H)(t,{versionMetadata:n})))))}},5902:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(6687),a=n(5353),l=n(5154),o=n(4364);function i(){return r.createElement(r.Fragment,null,r.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),r.createElement(a.Z,null,r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);