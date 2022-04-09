"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3678],{1145:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(6687),a=r(6355),c=r(9219),l=r(4364),o=r(380);const i="codeBlockContainer_X7hc",s="codeBlockContent_vqWU",m="codeBlockTitle_B2tn",u="codeBlock_wPnj",d="codeBlockStandalone_LFTq",f="codeBlockLines_fQUY";function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,c=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);l=!0);}catch(i){o=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e){var t=e.children,r=e.className,b=void 0===r?"":r,y=e.metastring,g=e.title,v=e.language,E=(0,l.LU)().prism,k=h((0,n.useState)(!1),2),N=k[0],_=k[1];(0,n.useEffect)((function(){_(!0)}),[]);var Z=(0,l.bc)(y)||g,P=(0,l.pJ)();if(n.Children.toArray(t).some((function(e){return(0,n.isValidElement)(e)})))return n.createElement(c.ZP,p({},c.lG,{key:String(N),theme:P,code:"",language:"text"}),(function(e){var r=e.className,c=e.style;return n.createElement("pre",{tabIndex:0,className:(0,a.Z)(r,d,"thin-scrollbar",i,b,l.kM.common.codeBlock),style:c},n.createElement("code",{className:f},t))}));var S,B=Array.isArray(t)?t.join(""):t,A=null!==(S=null!=v?v:(0,l.Vo)(b))&&void 0!==S?S:E.defaultLanguage,L=(0,l.nZ)(B,y,A),w=L.highlightLines,C=L.code;return n.createElement(c.ZP,p({},c.lG,{key:String(N),theme:P,code:C,language:null!=A?A:"text"}),(function(e){var t,r,c,d=e.className,h=e.style,y=e.tokens,g=e.getLineProps,v=e.getTokenProps;return n.createElement("div",{className:(0,a.Z)(i,b,(t={},r="language-".concat(A),c=A&&!b.includes("language-".concat(A)),r in t?Object.defineProperty(t,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[r]=c,t),l.kM.common.codeBlock)},Z&&n.createElement("div",{style:h,className:m},Z),n.createElement("div",{className:s,style:h},n.createElement("pre",{tabIndex:0,className:(0,a.Z)(d,u,"thin-scrollbar")},n.createElement("code",{className:f},y.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var r=g({line:e,key:t});return w.includes(t)&&(r.className+=" docusaurus-highlight-code-line"),n.createElement("span",p({key:t},r),e.map((function(e,t){return n.createElement("span",p({key:t},v({token:e,key:t})))})),n.createElement("br",null))})))),n.createElement(o.Z,{code:C})))}))}},1175:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(6687),a=r(4364);const c={breadcrumbsContainer:"breadcrumbsContainer_Alpn"};var l=r(6355),o=r(9482),i=r(30);function s(e){var t=e.children,r=e.href,a="breadcrumbs__link";return r?n.createElement(o.Z,{className:a,href:r,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:a,itemProp:"item name"},t)}function m(e){var t=e.children,r=e.active,a=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":r})},t,n.createElement("meta",{itemProp:"position",content:String(a+1)}))}function u(){var e=(0,i.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(o.Z,{className:(0,l.Z)("breadcrumbs__link",c.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function d(){var e=(0,a.s1)(),t=(0,a.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(a.kM.docs.docBreadcrumbs,c.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(u,null),e.map((function(t,r){return n.createElement(m,{key:r,active:r===e.length-1,index:r},n.createElement(s,{href:t.href}," ",t.label))})))):null}}}]);