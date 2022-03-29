"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2419],{4907:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(y,a(a({ref:t},d),{},{components:n})):o.createElement(y,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5848:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return y},assets:function(){return v},toc:function(){return h},default:function(){return g}});var o=n(4907),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e};const u={slug:"/velocity/built-in-commands"},m="Built-In Commands",y={unversionedId:"velocity/reference/commands",id:"velocity/reference/commands",title:"Built-In Commands",description:"Velocity includes a few commands in the core of the proxy by default. These commands were chosen",source:"@site/docs/velocity/reference/commands.md",sourceDirName:"velocity/reference",slug:"/velocity/built-in-commands",permalink:"/docs-previews/pull/31/velocity/built-in-commands",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/reference/commands.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646714966,formattedLastUpdatedAt:"3/8/2022",frontMatter:{slug:"/velocity/built-in-commands"},sidebar:"docs",previous:{title:"Configuring Velocity",permalink:"/docs-previews/pull/31/velocity/configuration"},next:{title:"Server Compatibility",permalink:"/docs-previews/pull/31/velocity/server-compatibility"}},v={},h=[{value:"The <code>/velocity</code> command",id:"the-velocity-command",level:2},{value:"<code>/velocity plugins</code>",id:"velocity-plugins",level:3},{value:"<code>/velocity version</code>",id:"velocity-version",level:3},{value:"<code>/velocity reload</code>",id:"velocity-reload",level:3},{value:"<code>/velocity dump</code>",id:"velocity-dump",level:3},{value:"<code>/server</code>",id:"server",level:2},{value:"<code>/shutdown</code>",id:"shutdown",level:2},{value:"<code>/glist</code>",id:"glist",level:2}],f={toc:h};function g(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=p(p({},f),d),i(t,a({components:r,mdxType:"MDXLayout"}))),(0,o.kt)("h1",p({},{id:"built-in-commands"}),"Built-In Commands"),(0,o.kt)("p",null,"Velocity includes a few commands in the core of the proxy by default. These commands were chosen\nbased on how generally useful they are to most users."),(0,o.kt)("p",null,"Of course, you can always install plugins to add more commands if you want."),(0,o.kt)("h2",p({},{id:"the-velocity-command"}),"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"/velocity")," command"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/velocity")," command contains a number of subcommands to manage the proxy."),(0,o.kt)("h3",p({},{id:"velocity-plugins"}),(0,o.kt)("inlineCode",{parentName:"h3"},"/velocity plugins")),(0,o.kt)("p",null,"If the user has the ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.command.plugins")," permission, they can view all the plugins currently\nactive on the proxy using ",(0,o.kt)("inlineCode",{parentName:"p"},"/velocity plugins"),", including the name, authors, and version."),(0,o.kt)("h3",p({},{id:"velocity-version"}),(0,o.kt)("inlineCode",{parentName:"h3"},"/velocity version")),(0,o.kt)("p",null,"Displays the version of Velocity running on the proxy."),(0,o.kt)("h3",p({},{id:"velocity-reload"}),(0,o.kt)("inlineCode",{parentName:"h3"},"/velocity reload")),(0,o.kt)("p",null,"If the user has the ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.command.reload")," permission, the proxy will read and reconfigure itself\nfrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.toml")," on disk. If there are problems with parsing the file, no changes will be\napplied."),(0,o.kt)("h3",p({},{id:"velocity-dump"}),(0,o.kt)("inlineCode",{parentName:"h3"},"/velocity dump")),(0,o.kt)("div",p({},{className:"admonition admonition-caution alert alert--warning"}),(0,o.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,o.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,o.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,o.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,o.kt)("p",{parentName:"div"},"This command will send some basic information to a web service maintained by the Velocity project\n(",(0,o.kt)("inlineCode",{parentName:"p"},"dump.velocitypowered.com"),"). While we anonymize potentially sensitive details in the proxy such as\nexternal IP addresses and all dumps expire after 3 days, we do not take responsibility for any\npotential misuse of the data provided. Use this command with caution and after you have considered\nthe privacy and security concerns."))),(0,o.kt)("p",null,"If the user has the ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.command.plugins")," permission, they can use this command to get an\nanonymized dump of details on the proxy. This can be sent to the Velocity Discord to help us provide\nsupport."),(0,o.kt)("h2",p({},{id:"server"}),(0,o.kt)("inlineCode",{parentName:"h2"},"/server")),(0,o.kt)("p",null,"If the user has the ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.command.server")," permission (by default, this is granted to all users),\nplayers can use this command to view and switch to another server."),(0,o.kt)("p",null,"Executing just ",(0,o.kt)("inlineCode",{parentName:"p"},"/server")," will send the user the name of the server they are currently on, along with\noptions to move to other servers configured on the proxy."),(0,o.kt)("p",null,"If a server name has been provided, Velocity will attempt to connect to the server."),(0,o.kt)("h2",p({},{id:"shutdown"}),(0,o.kt)("inlineCode",{parentName:"h2"},"/shutdown")),(0,o.kt)("p",null,"When executed from the console, this will gracefully shut down the Velocity proxy. All players will\nbe disconnected from the proxy and plugins will have a chance to finish up before the proxy shuts\ndown. An optional reason can be given, either as JSON or with legacy color codes, in the same format\nas the MOTD in ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.toml"),"."),(0,o.kt)("h2",p({},{id:"glist"}),(0,o.kt)("inlineCode",{parentName:"h2"},"/glist")),(0,o.kt)("p",null,"If the user has the ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.command.glist")," permission (by default, this is granted to nobody),\nplayers can use this command to view the number of players currently on the proxy and use\n",(0,o.kt)("inlineCode",{parentName:"p"},"/glist all")," to get a listing of players per server."))}g.isMDXComponent=!0}}]);