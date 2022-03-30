"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1145],{1145:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(6677),o=n(6355),a=n(9219),l=n(1070),c=n(5154),i=n(4364);const u="codeBlockContainer_X7hc",s="codeBlockContent_vqWU",d="codeBlockTitle_B2tn",m="codeBlock_wPnj",f="codeBlockStandalone_LFTq",p="copyButton_H_xL",y="codeBlockLines_fQUY";function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(i){c=!0,o=i}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e){var t=e.children,n=e.className,b=void 0===n?"":n,k=e.metastring,v=e.title,E=e.language,B=(0,i.LU)().prism,C=g((0,r.useState)(!1),2),A=C[0],N=C[1],Z=g((0,r.useState)(!1),2),S=Z[0],w=Z[1];(0,r.useEffect)((function(){w(!0)}),[]);var j=(0,i.bc)(k)||v,L=(0,i.pJ)();if(r.Children.toArray(t).some((function(e){return(0,r.isValidElement)(e)})))return r.createElement(a.ZP,h({},a.lG,{key:String(S),theme:L,code:"",language:"text"}),(function(e){var n=e.className,a=e.style;return r.createElement("pre",{tabIndex:0,className:(0,o.Z)(n,f,"thin-scrollbar",u,b,i.kM.common.codeBlock),style:a},r.createElement("code",{className:y},t))}));var T,_=Array.isArray(t)?t.join(""):t,I=null!==(T=null!=E?E:(0,i.Vo)(b))&&void 0!==T?T:B.defaultLanguage,P=(0,i.nZ)(_,k,I),x=P.highlightLines,O=P.code,U=function(){(0,l.Z)(O),N(!0),setTimeout((function(){return N(!1)}),2e3)};return r.createElement(a.ZP,h({},a.lG,{key:String(S),theme:L,code:O,language:null!=I?I:"text"}),(function(e){var t,n,a,l=e.className,f=e.style,g=e.tokens,k=e.getLineProps,v=e.getTokenProps;return r.createElement("div",{className:(0,o.Z)(u,b,(t={},n="language-".concat(I),a=I&&!b.includes("language-".concat(I)),n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t),i.kM.common.codeBlock)},j&&r.createElement("div",{style:f,className:d},j),r.createElement("div",{className:(0,o.Z)(s,I)},r.createElement("pre",{tabIndex:0,className:(0,o.Z)(l,m,"thin-scrollbar"),style:f},r.createElement("code",{className:y},g.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=k({line:e,key:t});return x.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",h({key:t},n),e.map((function(e,t){return r.createElement("span",h({key:t},v({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{type:"button","aria-label":(0,c.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(p,"clean-btn"),onClick:U},A?r.createElement(c.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(c.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);