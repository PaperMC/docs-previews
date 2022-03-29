"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,1214],{4907:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2532:function(e,t,n){n.r(t),n.d(t,{default:function(){return ct}});var r=n(6687),a=n(4907),o=n(7019),l=n(3680),c=n(6355),i=n(8900),s=n(771),u=Object.defineProperty,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function b(e){return r.createElement("svg",((e,t)=>{for(var n in t||(t={}))p.call(t,n)&&f(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&f(e,n,t[n]);return e})({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var y=n(6329),h=n(9796),v=n(4349),g=n(9640),E="menuHtmlItem_hevv",k=n(2360),O=Object.defineProperty,P=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,_=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t)=>{for(var n in t||(t={}))N.call(t,n)&&_(e,n,t[n]);if(P)for(var n of P(t))T.call(t,n)&&_(e,n,t[n]);return e},C=(e,t)=>{var n={};for(var r in e)N.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&P)for(var r of P(e))t.indexOf(r)<0&&T.call(e,r)&&(n[r]=e[r]);return n};function j(e){var t=e,{item:n}=t,a=C(t,["item"]);switch(n.type){case"category":return r.createElement(w,S({item:n},a));case"html":return r.createElement(x,S({item:n},a));default:return r.createElement(I,S({item:n},a))}}function w(e){var t=e,{item:n,onItemClick:a,activePath:o,level:l,index:s}=t,u=C(t,["item","onItemClick","activePath","level","index"]);const{items:d,label:p,collapsible:m,className:f,href:b}=n,v=function(e){const t=(0,k.Z)();return(0,r.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(n),g=(0,i._F)(n,o),E=(0,i.Mg)(b,o),{collapsed:O,setCollapsed:P}=(0,i.uR)({initialState:()=>!!m&&(!g&&n.collapsed)});!function({isActive:e,collapsed:t,setCollapsed:n}){const a=(0,i.D9)(e);(0,r.useEffect)((()=>{e&&!a&&t&&n(!1)}),[e,a,t,n])}({isActive:g,collapsed:O,setCollapsed:P});const{expandedItem:N,setExpandedItem:T}=(0,i.fP)();function _(e=!O){T(e?null:s),P(e)}const{autoCollapseSidebarCategories:j}=(0,i.LU)();return(0,r.useEffect)((()=>{m&&N&&N!==s&&j&&P(!0)}),[m,N,s,P,j]),r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":O},f)},r.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":E})},r.createElement(h.default,S({className:(0,c.Z)("menu__link",{"menu__link--sublist":m&&!b,"menu__link--active":g}),onClick:m?e=>{null==a||a(n),b?_(!1):(e.preventDefault(),_())}:()=>{null==a||a(n)},"aria-current":E?"page":void 0,href:m?null!=v?v:"#":v},u),p),b&&m&&r.createElement("button",{"aria-label":(0,y.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:p}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),_()}})),r.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:O},r.createElement(B,{items:d,tabIndex:O?-1:0,onItemClick:a,activePath:o,level:l+1})))}function x({item:e,level:t,index:n}){const{value:a,defaultStyle:o,className:l}=e;return r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(t),o&&`${E} menu__list-item`,l),key:n,dangerouslySetInnerHTML:{__html:a}})}function I(e){var t=e,{item:n,onItemClick:a,activePath:o,level:l,index:s}=t,u=C(t,["item","onItemClick","activePath","level","index"]);const{href:d,label:p,className:m}=n,f=(0,i._F)(n,o);return r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:p},r.createElement(h.default,S(S({className:(0,c.Z)("menu__link",{"menu__link--active":f}),"aria-current":f?"page":void 0,to:d},(0,v.Z)(d)&&{onClick:a?()=>a(n):void 0}),u),(0,v.Z)(d)?p:r.createElement("span",null,p,r.createElement(g.Z,null))))}var Z=Object.defineProperty,L=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,D=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(0,r.memo)((function(e){var t=e,{items:n}=t,a=((e,t)=>{var n={};for(var r in e)M.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&L)for(var r of L(e))t.indexOf(r)<0&&A.call(e,r)&&(n[r]=e[r]);return n})(t,["items"]);return r.createElement(i.D_,null,n.map(((e,t)=>r.createElement(j,((e,t)=>{for(var n in t||(t={}))M.call(t,n)&&D(e,n,t[n]);if(L)for(var n of L(t))A.call(t,n)&&D(e,n,t[n]);return e})({key:t,item:e,index:t},a)))))})),F="sidebar_zs6k",R="sidebarWithHideableNavbar_McLZ",H="sidebarHidden_t6vP",W="sidebarLogo_DLGP",z="menu_cQsk",U="menuWithAnnouncementBar_xxqv",V="collapseSidebarButton_j1ca",q="collapseSidebarButtonIcon_dpUL",G=Object.defineProperty,K=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,Q=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,X=(e,t)=>{for(var n in t||(t={}))$.call(t,n)&&Q(e,n,t[n]);if(K)for(var n of K(t))Y.call(t,n)&&Q(e,n,t[n]);return e};function J({onClick:e}){return r.createElement("button",{type:"button",title:(0,y.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",V),onClick:e},r.createElement(b,{className:q}))}const ee=({toggleSidebar:e,sidebar:t,path:n})=>r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(B,{items:t,activePath:n,onItemClick:t=>{"category"===t.type&&t.href&&e(),"link"===t.type&&e()},level:1}));const te=r.memo((function({path:e,sidebar:t,onCollapse:n,isHidden:a}){const o=function(){const{isActive:e}=(0,i.nT)(),[t,n]=(0,r.useState)(e);return(0,i.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}(),{navbar:{hideOnScroll:l},hideableSidebar:u}=(0,i.LU)();return r.createElement("div",{className:(0,c.Z)(F,{[R]:l,[H]:a})},l&&r.createElement(s.Z,{tabIndex:-1,className:W}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",z,{[U]:o})},r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(B,{items:t,activePath:e,level:1}))),u&&r.createElement(J,{onClick:n}))})),ne=r.memo((function(e){return r.createElement(i.Cv,{component:ee,props:e})}));function re(e){const t=(0,i.iP)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(te,X({},e)),a&&r.createElement(ne,X({},e)))}var ae=n(4906),oe={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},le={Prism:n(271).default,theme:oe};function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(){return ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ie.apply(this,arguments)}var se=/\r\n|\r|\n/,ue=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},de=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},pe=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=ie({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=ie({},n,{backgroundColor:null}),a};function me(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var fe=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),ce(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?pe(e.theme,e.language):void 0;return t.themeDict=n})),ce(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=ie({},me(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?ie({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),ce(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),ce(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=ie({},me(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?ie({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),ce(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=de(u,d.type),d.alias&&(u=de(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(se),m=p.length;c.push({types:u,content:p[0]});for(var f=1;f<m;f++)ue(c),i.push(c=[]),c.push({types:u,content:p[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return ue(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),be=fe;var ye="codeBlockContainer_W0aT",he="codeBlockContent_IVcA",ve="codeBlockTitle_yQBO",ge="codeBlock_Tpf2",Ee="codeBlockStandalone_A_tG",ke="copyButton_SAev",Oe="codeBlockLines_RNKP",Pe=Object.defineProperty,Ne=Object.defineProperties,Te=Object.getOwnPropertyDescriptors,_e=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,je=(e,t,n)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,we=(e,t)=>{for(var n in t||(t={}))Se.call(t,n)&&je(e,n,t[n]);if(_e)for(var n of _e(t))Ce.call(t,n)&&je(e,n,t[n]);return e},xe=(e,t)=>Ne(e,Te(t));function Ie({children:e,className:t="",metastring:n,title:a,language:o}){var l;const{prism:s}=(0,i.LU)(),[u,d]=(0,r.useState)(!1),[p,m]=(0,r.useState)(!1);(0,r.useEffect)((()=>{m(!0)}),[]);const f=(0,i.bc)(n)||a,b=(0,i.pJ)();if(r.Children.toArray(e).some((e=>(0,r.isValidElement)(e))))return r.createElement(be,xe(we({},le),{key:String(p),theme:b,code:"",language:"text"}),(({className:n,style:a})=>r.createElement("pre",{tabIndex:0,className:(0,c.Z)(n,Ee,"thin-scrollbar",ye,t,i.kM.common.codeBlock),style:a},r.createElement("code",{className:Oe},e))));const h=Array.isArray(e)?e.join(""):e,v=null!=(l=null!=o?o:(0,i.Vo)(t))?l:s.defaultLanguage,{highlightLines:g,code:E}=(0,i.nZ)(h,n,v),k=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(E),d(!0),setTimeout((()=>d(!1)),2e3)};return r.createElement(be,xe(we({},le),{key:String(p),theme:b,code:E,language:null!=v?v:"text"}),(({className:e,style:n,tokens:a,getLineProps:o,getTokenProps:l})=>r.createElement("div",{className:(0,c.Z)(ye,t,{[`language-${v}`]:v&&!t.includes(`language-${v}`)},i.kM.common.codeBlock)},f&&r.createElement("div",{style:n,className:ve},f),r.createElement("div",{className:(0,c.Z)(he,v)},r.createElement("pre",{tabIndex:0,className:(0,c.Z)(e,ge,"thin-scrollbar"),style:n},r.createElement("code",{className:Oe},a.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=o({line:e,key:t});return g.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",we({key:t},n),e.map(((e,t)=>r.createElement("span",we({key:t},l({token:e,key:t}))))),r.createElement("br",null))})))),r.createElement("button",{type:"button","aria-label":(0,y.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(ke,"clean-btn"),onClick:k},u?r.createElement(y.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(y.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}var Ze=n(1765),Le="details_KslM",Me=Object.defineProperty,Ae=Object.defineProperties,De=Object.getOwnPropertyDescriptors,Be=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,He=(e,t,n)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function We(e){var t,n,a=((e,t)=>{var n={};for(var r in e)Fe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&Be)for(var r of Be(e))t.indexOf(r)<0&&Re.call(e,r)&&(n[r]=e[r]);return n})(e,[]);return r.createElement(i.PO,(t=((e,t)=>{for(var n in t||(t={}))Fe.call(t,n)&&He(e,n,t[n]);if(Be)for(var n of Be(t))Re.call(t,n)&&He(e,n,t[n]);return e})({},a),n={className:(0,c.Z)("alert alert--info",Le,a.className)},Ae(t,De(n))))}var ze=Object.defineProperty,Ue=Object.defineProperties,Ve=Object.getOwnPropertyDescriptors,qe=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,$e=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ye=(e,t)=>{for(var n in t||(t={}))Ge.call(t,n)&&$e(e,n,t[n]);if(qe)for(var n of qe(t))Ke.call(t,n)&&$e(e,n,t[n]);return e};function Qe(e){var t,n;if((null==(t=null==e?void 0:e.props)?void 0:t.mdxType)&&(null==(n=null==e?void 0:e.props)?void 0:n.originalType)){const t=e.props,{mdxType:n,originalType:a}=t,o=((e,t)=>{var n={};for(var r in e)Ge.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&qe)for(var r of qe(e))t.indexOf(r)<0&&Ke.call(e,r)&&(n[r]=e[r]);return n})(t,["mdxType","originalType"]);return r.createElement(e.props.originalType,o)}return e}var Xe={head:e=>{const t=r.Children.map(e.children,(e=>Qe(e)));return r.createElement(ae.default,Ye({},e),t)},code:e=>{const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||r.isValidElement(e)&&t.includes(e.props.mdxType)))?r.createElement("code",Ye({},e)):r.createElement(Ie,Ye({},e))},a:e=>r.createElement(h.default,Ye({},e)),pre:e=>{var t;return r.createElement(Ie,Ye({},(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Ye({},e)))},details:e=>{const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==(t=null==e?void 0:e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(We,(o=Ye({},e),Ue(o,Ve({summary:n}))),a);var o},h1:e=>r.createElement(Ze.Z,Ye({as:"h1"},e)),h2:e=>r.createElement(Ze.Z,Ye({as:"h2"},e)),h3:e=>r.createElement(Ze.Z,Ye({as:"h3"},e)),h4:e=>r.createElement(Ze.Z,Ye({as:"h4"},e)),h5:e=>r.createElement(Ze.Z,Ye({as:"h5"},e)),h6:e=>r.createElement(Ze.Z,Ye({as:"h6"},e))},Je=n(1214),et="backToTopButton_kTZ2",tt="backToTopButtonShow_F1fj";function nt(){const e=(0,r.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const n=document.documentElement.scrollTop;n>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*n)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>{var t;return null==(t=e.current)?void 0:t.call(e)}}}function rt(){const[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(!1),{smoothScrollTop:a,cancelScrollToTop:o}=nt();return(0,i.RF)((({scrollY:e},r)=>{const a=null==r?void 0:r.scrollY;if(!a)return;if(n.current)return void(n.current=!1);const l=e<a;if(l||o(),e<300)t(!1);else if(l){const n=document.documentElement.scrollHeight;e+window.innerHeight<n&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(n.current=!0,t(!1))})),r.createElement("button",{"aria-label":(0,y.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,et,{[tt]:e}),type:"button",onClick:()=>a()})}var at=n(6095),ot={docPage:"docPage_meDy",docMainContainer:"docMainContainer_z6Ff",docSidebarContainer:"docSidebarContainer_hW5f",docMainContainerEnhanced:"docMainContainerEnhanced_HElA",docSidebarContainerHidden:"docSidebarContainerHidden_nKhZ",collapsedDocSidebar:"collapsedDocSidebar__iGa",expandSidebarButtonIcon:"expandSidebarButtonIcon_jTDL",docItemWrapperEnhanced:"docItemWrapperEnhanced_v92b"};function lt({currentDocRoute:e,versionMetadata:t,children:n,sidebarName:o}){const s=(0,i.Vq)(),{pluginId:u,version:d}=t,[p,m]=(0,r.useState)(!1),[f,h]=(0,r.useState)(!1),v=(0,r.useCallback)((()=>{f&&h(!1),m((e=>!e))}),[f]);return r.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:d,tag:(0,i.os)(u,d)}},r.createElement("div",{className:ot.docPage},r.createElement(rt,null),s&&r.createElement("aside",{className:(0,c.Z)(i.kM.docs.docSidebarContainer,ot.docSidebarContainer,{[ot.docSidebarContainerHidden]:p}),onTransitionEnd:e=>{e.currentTarget.classList.contains(ot.docSidebarContainer)&&p&&h(!0)}},r.createElement(re,{key:o,sidebar:s,path:e.path,onCollapse:v,isHidden:f}),f&&r.createElement("div",{className:ot.collapsedDocSidebar,title:(0,y.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},r.createElement(b,{className:ot.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(ot.docMainContainer,{[ot.docMainContainerEnhanced]:p||!s})},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",ot.docItemWrapper,{[ot.docItemWrapperEnhanced]:p})},r.createElement(a.Zo,{components:Xe},n)))))}function ct(e){const{route:{routes:t},versionMetadata:n,location:a}=e,l=t.find((e=>(0,at.LX)(a.pathname,e)));if(!l)return r.createElement(Je.default,null);const c=l.sidebar,s=c?n.docsSidebars[c]:null;return r.createElement(r.Fragment,null,r.createElement(ae.default,null,r.createElement("html",{className:n.className})),r.createElement(i.qu,{version:n},r.createElement(i.bT,{sidebar:s},r.createElement(lt,{currentDocRoute:l,versionMetadata:n,sidebarName:c},(0,o.H)(t,{versionMetadata:n})))))}},1765:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(6687),a=n(6355),o=n(6329),l=n(8900),c="anchorWithStickyNavbar_CmOh",i="anchorWithHideOnScrollNavbar_FyGl",s=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&b(e,n,t[n]);if(p)for(var n of p(t))f.call(t,n)&&b(e,n,t[n]);return e},h=(e,t)=>u(e,d(t)),v=(e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n};function g(e){var t=e,{as:n,id:s}=t,u=v(t,["as","id"]);const{navbar:{hideOnScroll:d}}=(0,l.LU)();return s?r.createElement(n,h(y({},u),{className:(0,a.Z)("anchor",{[i]:d,[c]:!d}),id:s}),u.children,r.createElement("a",{className:"hash-link",href:`#${s}`,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(n,y({},u))}function E(e){var t=e,{as:n}=t,a=v(t,["as"]);return"h1"===n?r.createElement("h1",h(y({},a),{id:void 0}),a.children):r.createElement(g,y({as:n},a))}},1214:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(6687),a=n(3680),o=n(6329);function l(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);