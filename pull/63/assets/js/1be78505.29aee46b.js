"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,6529],{4635:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Je});var n=a(7294),r=a(6010),l=a(6828),o=a(345),c=a(4469),i=a(3631),s=a(2879),d=a(7250),m=a(6703),u=a(3084),b=a(8757),p=a(3789);const f="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function v(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,a]=(0,n.useState)(!1),r=(0,n.useRef)(!1),{startScroll:l,cancelScroll:o}=(0,b.Ct)();return(0,b.RF)((({scrollY:t},n)=>{const l=null==n?void 0:n.scrollY;l&&(r.current?r.current=!1:t>=l?(o(),a(!1)):t<e?a(!1):t+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,a(!1))})),{shown:t,scrollToTop:()=>l(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.k.common.backToTopButton,f,e&&h),type:"button",onClick:t})}var E=a(6775),g=a(9078),y=a(7343),k=a(1366),_=Object.defineProperty,C=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,O=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function N(e){return n.createElement("svg",((e,t)=>{for(var a in t||(t={}))I.call(t,a)&&O(e,a,t[a]);if(C)for(var a of C(t))S.call(t,a)&&O(e,a,t[a]);return e})({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const w="collapseSidebarButton_PEFL",x="collapseSidebarButtonIcon_kv0_";function P({onClick:e}){return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",w),onClick:e},n.createElement(N,{className:x}))}var T=a(5218),Z=a(1651);const j=Symbol("EmptyContext"),L=n.createContext(j);function M({children:e}){const[t,a]=(0,n.useState)(null),r=(0,n.useMemo)((()=>({expandedItem:t,setExpandedItem:a})),[t]);return n.createElement(L.Provider,{value:r},e)}var F=a(3044),A=a(5897),B=a(9130),H=a(4939),W=Object.defineProperty,D=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,K=(e,t,a)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function U({categoryLabel:e,onClick:t}){return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function V(e){var t=e,{item:a,onItemClick:o,activePath:c,level:s,index:d}=t,m=((e,t)=>{var a={};for(var n in e)R.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&D)for(var n of D(e))t.indexOf(n)<0&&z.call(e,n)&&(a[n]=e[n]);return a})(t,["item","onItemClick","activePath","level","index"]);const{items:u,label:b,collapsible:p,className:f,href:h}=a,{docs:{sidebar:{autoCollapseCategories:v}}}=(0,y.L)(),E=function(e){const t=(0,H.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,l.Wl)(e):void 0),[e,t])}(a),g=(0,l._F)(a,c),k=(0,F.Mg)(h,c),{collapsed:_,setCollapsed:C}=(0,A.u)({initialState:()=>!!p&&(!g&&a.collapsed)}),{expandedItem:I,setExpandedItem:S}=function(){const e=(0,n.useContext)(L);if(e===j)throw new Z.i6("DocSidebarItemsExpandedStateProvider");return e}(),O=(e=!_)=>{S(e?null:d),C(e)};return function({isActive:e,collapsed:t,updateCollapsed:a}){const r=(0,Z.D9)(e);(0,n.useEffect)((()=>{e&&!r&&t&&a(!1)}),[e,r,t,a])}({isActive:g,collapsed:_,updateCollapsed:O}),(0,n.useEffect)((()=>{p&&I&&I!==d&&v&&C(!0)}),[p,I,d,C,v]),n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":_},f)},n.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(B.Z,((e,t)=>{for(var a in t||(t={}))R.call(t,a)&&K(e,a,t[a]);if(D)for(var a of D(t))z.call(t,a)&&K(e,a,t[a]);return e})({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!h&&p,"menu__link--active":g}),onClick:p?e=>{null==o||o(a),h?O(!1):(e.preventDefault(),O())}:()=>{null==o||o(a)},"aria-current":k?"page":void 0,"aria-expanded":p?!_:void 0,href:p?null!=E?E:"#":E},m),b),h&&p&&n.createElement(U,{categoryLabel:b,onClick:e=>{e.preventDefault(),O()}})),n.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},n.createElement(ve,{items:u,tabIndex:_?-1:0,onItemClick:o,activePath:c,level:s+1})))}var G=a(5096),Y=a(3507);const q="menuExternalLink_NmtK";var X=Object.defineProperty,J=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,ee=(e,t,a)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,te=(e,t)=>{for(var a in t||(t={}))Q.call(t,a)&&ee(e,a,t[a]);if(J)for(var a of J(t))$.call(t,a)&&ee(e,a,t[a]);return e};function ae(e){var t=e,{item:a,onItemClick:o,activePath:c,level:s,index:d}=t,m=((e,t)=>{var a={};for(var n in e)Q.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&J)for(var n of J(e))t.indexOf(n)<0&&$.call(e,n)&&(a[n]=e[n]);return a})(t,["item","onItemClick","activePath","level","index"]);const{href:u,label:b,className:p}=a,f=(0,l._F)(a,c),h=(0,G.Z)(u);return n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",p),key:b},n.createElement(B.Z,te(te({className:(0,r.Z)("menu__link",!h&&q,{"menu__link--active":f}),"aria-current":f?"page":void 0,to:u},h&&{onClick:o?()=>o(a):void 0}),m),b,!h&&n.createElement(Y.Z,null)))}const ne="menuHtmlItem_M9Kj";function re({item:e,level:t,index:a}){const{value:l,defaultStyle:o,className:c}=e;return n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(t),o&&[ne,"menu__list-item"],c),key:a,dangerouslySetInnerHTML:{__html:l}})}var le=Object.defineProperty,oe=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,se=(e,t,a)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,de=(e,t)=>{for(var a in t||(t={}))ce.call(t,a)&&se(e,a,t[a]);if(oe)for(var a of oe(t))ie.call(t,a)&&se(e,a,t[a]);return e};function me(e){var t=e,{item:a}=t,r=((e,t)=>{var a={};for(var n in e)ce.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&oe)for(var n of oe(e))t.indexOf(n)<0&&ie.call(e,n)&&(a[n]=e[n]);return a})(t,["item"]);switch(a.type){case"category":return n.createElement(V,de({item:a},r));case"html":return n.createElement(re,de({item:a},r));default:return n.createElement(ae,de({item:a},r))}}var ue=Object.defineProperty,be=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,he=(e,t,a)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const ve=(0,n.memo)((function(e){var t=e,{items:a}=t,r=((e,t)=>{var a={};for(var n in e)pe.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&be)for(var n of be(e))t.indexOf(n)<0&&fe.call(e,n)&&(a[n]=e[n]);return a})(t,["items"]);return n.createElement(M,null,a.map(((e,t)=>n.createElement(me,((e,t)=>{for(var a in t||(t={}))pe.call(t,a)&&he(e,a,t[a]);if(be)for(var a of be(t))fe.call(t,a)&&he(e,a,t[a]);return e})({key:t,item:e,index:t},r)))))})),Ee="menu_SIkG",ge="menuWithAnnouncementBar_GW3s";function ye({path:e,sidebar:t,className:a}){const l=function(){const{isActive:e}=(0,T.nT)(),[t,a]=(0,n.useState)(e);return(0,b.RF)((({scrollY:t})=>{e&&a(0===t)}),[e]),e&&t}();return n.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",Ee,l&&ge,a)},n.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(ve,{items:t,activePath:e,level:1})))}const ke="sidebar_njMd",_e="sidebarWithHideableNavbar_wUlq",Ce="sidebarHidden_VK0M",Ie="sidebarLogo_isFc";const Se=n.memo((function({path:e,sidebar:t,onCollapse:a,isHidden:l}){const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:c}}}=(0,y.L)();return n.createElement("div",{className:(0,r.Z)(ke,o&&_e,l&&Ce)},o&&n.createElement(k.Z,{tabIndex:-1,className:Ie}),n.createElement(ye,{path:e,sidebar:t}),c&&n.createElement(P,{onClick:a}))}));var Oe=a(9614),Ne=a(5043);const we=({sidebar:e,path:t})=>{const a=(0,Oe.e)();return n.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(ve,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};const xe=n.memo((function(e){return n.createElement(Ne.Zo,{component:we,props:e})}));var Pe=Object.defineProperty,Te=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,Le=(e,t,a)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Me=(e,t)=>{for(var a in t||(t={}))Ze.call(t,a)&&Le(e,a,t[a]);if(Te)for(var a of Te(t))je.call(t,a)&&Le(e,a,t[a]);return e};function Fe(e){const t=(0,g.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(Se,Me({},e)),r&&n.createElement(xe,Me({},e)))}const Ae="expandButton_m80_",Be="expandButtonIcon_BlDH";function He({toggleSidebar:e}){return n.createElement("div",{className:Ae,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},n.createElement(N,{className:Be}))}const We="docSidebarContainer_b6E3",De="docSidebarContainerHidden_b3ry";function Re({children:e}){var t;const a=(0,d.V)();return n.createElement(n.Fragment,{key:null!=(t=null==a?void 0:a.name)?t:"noSidebar"},e)}function ze({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:a}){const{pathname:l}=(0,E.TH)(),[o,c]=(0,n.useState)(!1),s=(0,n.useCallback)((()=>{o&&c(!1),a((e=>!e))}),[a,o]);return n.createElement("aside",{className:(0,r.Z)(i.k.docs.docSidebarContainer,We,t&&De),onTransitionEnd:e=>{e.currentTarget.classList.contains(We)&&t&&c(!0)}},n.createElement(Re,null,n.createElement(Fe,{sidebar:e,path:l,onCollapse:s,isHidden:o})),o&&n.createElement(He,{toggleSidebar:s}))}const Ke={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ue({hiddenSidebarContainer:e,children:t}){const a=(0,d.V)();return n.createElement("main",{className:(0,r.Z)(Ke.docMainContainer,(e||!a)&&Ke.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Ke.docItemWrapper,e&&Ke.docItemWrapperEnhanced)},t))}const Ve="docPage__5DB",Ge="docsWrapper_BCFX";function Ye({children:e}){const t=(0,d.V)(),[a,r]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:Ge},n.createElement(v,null),n.createElement("div",{className:Ve},t&&n.createElement(ze,{sidebar:t.items,hiddenSidebarContainer:a,setHiddenSidebarContainer:r}),n.createElement(Ue,{hiddenSidebarContainer:a},e)))}var qe=a(6529),Xe=a(3773);function Je(e){const{versionMetadata:t}=e,a=(0,l.hI)(e);if(!a)return n.createElement(qe.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=a;return n.createElement(n.Fragment,null,n.createElement(Xe.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),n.createElement(c.FG,{className:(0,r.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:u,items:b},n.createElement(Ye,null,m)))))}},6529:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(7294),r=a(3084),l=a(4469),o=a(6703);function c(){return n.createElement(n.Fragment,null,n.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(o.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);