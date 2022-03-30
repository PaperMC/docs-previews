"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[244],{4907:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var a=n(6687);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,g=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},244:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});n(6687);var a=n(4907);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o={slug:"/velocity/configuration"},i="Configuring Velocity",d={unversionedId:"velocity/reference/configuration",id:"velocity/reference/configuration",title:"Configuring Velocity",description:"Velocity is designed to be easy to configure and set up. Every Velocity file is stored in",source:"@site/docs/velocity/reference/configuration.md",sourceDirName:"velocity/reference",slug:"/velocity/configuration",permalink:"/docs-previews/pull/34/velocity/configuration",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/reference/configuration.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646714966,formattedLastUpdatedAt:"3/8/2022",frontMatter:{slug:"/velocity/configuration"},sidebar:"docs",previous:{title:"Migration Guide",permalink:"/docs-previews/pull/34/velocity/migration"},next:{title:"Built-In Commands",permalink:"/docs-previews/pull/34/velocity/built-in-commands"}},s={},p=[{value:"Data types",id:"data-types",level:2},{value:"Chat",id:"chat",level:3},{value:"Address",id:"address",level:3},{value:"Root section",id:"root-section",level:2},{value:"<code>server</code> section",id:"server-section",level:2},{value:"<code>forced-hosts</code> section",id:"forced-hosts-section",level:2},{value:"<code>advanced</code> section",id:"advanced-section",level:2},{value:"<code>query</code> section",id:"query-section",level:2},{value:"<code>metrics</code> section",id:"metrics-section",level:2}],m={toc:p};function u(t){var e=t.components,n=l(t,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"configuring-velocity"}),"Configuring Velocity"),(0,a.kt)("p",null,"Velocity is designed to be easy to configure and set up. Every Velocity file is stored in\n",(0,a.kt)("inlineCode",{parentName:"p"},"velocity.toml"),", located in the directory where you started the proxy. Velocity uses the\n",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/toml-lang/toml"}),"TOML")," file format, as it is easy to understand and avoids\npitfalls of YAML and other configuration formats common in the community."),(0,a.kt)("p",null,"An up-to-date version of the default configuration can be found on\n",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/PaperMC/Velocity/blob/dev/3.0.0/proxy/src/main/resources/default-velocity.toml"}),"GitHub"),"."),(0,a.kt)("h2",r({},{id:"data-types"}),"Data types"),(0,a.kt)("p",null,'There are a few "special" data types in the Velocity configuration.'),(0,a.kt)("h3",r({},{id:"chat"}),"Chat"),(0,a.kt)("p",null,"Chat messages may be provided in legacy color code format or in JSON format."),(0,a.kt)("p",null,"RGB support (using the ",(0,a.kt)("inlineCode",{parentName:"p"},"&#rrggbb")," format) is available and JSON messages are deserialized for\nMinecraft 1.16."),(0,a.kt)("h3",r({},{id:"address"}),"Address"),(0,a.kt)("p",null,"An address is a pairing of an IP address or hostname, and a port, separated by a colon (",(0,a.kt)("inlineCode",{parentName:"p"},":"),"). For\ninstance, ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:25577")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"server01.example.com:25565")," are valid addresses."),(0,a.kt)("h2",r({},{id:"root-section"}),"Root section"),(0,a.kt)("p",null,"These settings mostly cover the basic, most essential settings of the proxy."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Setting Name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"config-version")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This is the current config version used by Velocity. You should not alter this setting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"bind")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Address"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This tells the proxy to accept connections on a specific IP. By default, Velocity will listen for connections on all IP addresses on the computer on port 25577.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"motd")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Chat"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This allows you to change the message shown to players when they add your server to their server list. You can use legacy Minecraft color codes or JSON chat.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"show-max-players")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This allows you to customize the number of \"maximum\" players in the player's server list. Note that Velocity doesn't have a maximum number of players it supports.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"player-info-forwarding-mode")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Enum"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"See ",(0,a.kt)("a",r({parentName:"td"},{href:"/docs-previews/pull/34/velocity/player-information-forwarding"}),"Configuring player information forwarding")," for more information.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"forwarding-secret")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'This setting is used as a secret to ensure that player info forwarded by Velocity comes from your proxy and not from someone pretending to run Velocity. See the "Player info forwarding" section for more info.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"announce-forge")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This setting determines whether Velocity should present itself as a Forge/FML-compatible server. By default, this is disabled.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"kick-existing-players")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Allows restoring the vanilla behavior of kicking users on the proxy if they try to reconnect (e.g. lost internet connection briefly).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ping-passthrough")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Allows forwarding nothing (the default), the ",(0,a.kt)("inlineCode",{parentName:"td"},"MODS")," (for Forge), the ",(0,a.kt)("inlineCode",{parentName:"td"},"DESCRIPTION"),", or everything (",(0,a.kt)("inlineCode",{parentName:"td"},"ALL"),") from the ",(0,a.kt)("inlineCode",{parentName:"td"},"try")," list (or forced host server connection order).")))),(0,a.kt)("h2",r({},{id:"server-section"}),(0,a.kt)("inlineCode",{parentName:"h2"},"server")," section"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Setting Name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"A server name"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Address"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This makes the proxy aware of a server that it can connect to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"try")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Array"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This specifies what servers Velocity should try to connect to upon player login and when a player is kicked from a server.")))),(0,a.kt)("h2",r({},{id:"forced-hosts-section"}),(0,a.kt)("inlineCode",{parentName:"h2"},"forced-hosts")," section"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Setting Name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"A host name"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hostname"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This configures the proxy to create a forced host for the specified hostname. An array of servers to try for the specified hostname is the value.")))),(0,a.kt)("h2",r({},{id:"advanced-section"}),(0,a.kt)("inlineCode",{parentName:"h2"},"advanced")," section"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Setting name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"compression-threshold")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This is the minimum size (in bytes) that a packet must be before the proxy compresses it. Minecraft uses 256 bytes by default.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"compression-level")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This setting indicates what ",(0,a.kt)("inlineCode",{parentName:"td"},"zlib")," compression level the proxy should use to compress packets. The default value uses the default zlib level.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"login-ratelimit")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This setting determines the minimum amount of time (in milliseconds) that must pass before a connection from the same IP address will be accepted by the proxy. A value of ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," disables the rate limit.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"connection-timeout")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This setting determines how long the proxy will wait to connect to a server before timing out.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"read-timeout")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This setting determines how long the proxy will wait to receive data from the server before timing out.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"proxy-protocol")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This setting determines whether or not Velocity should receive HAProxy PROXY messages. If you don't use HAProxy, leave this setting off.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"tcp-fast-open")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This setting allows you to enable TCP Fast Open support in Velocity. Your proxy must run on Linux kernel >=4.14 for this setting to apply.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"bungee-plugin-message-channel")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This setting allows you to enable or disable support for the BungeeCord plugin messaging channel.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"show-ping-requests")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This setting allows you to log ping requests sent by clients to the proxy.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"announce-proxy-commands")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This setting allows you to enable or disable explicitly sending proxy commands to the client (for Minecraft 1.13+ tab completion).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"failover-on-unexpected-server-disconnect")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This setting allows you to determine if the proxy should failover or disconnect the user in the event of an unclean disconnect.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"log-command-executions")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Determines whether or not the proxy should log all commands run by the user.")))),(0,a.kt)("h2",r({},{id:"query-section"}),(0,a.kt)("inlineCode",{parentName:"h2"},"query")," section"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Setting name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"enabled")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Whether or not Velocity should reply to Minecraft query protocol requests. You can usually leave this false.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"port")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Specifies which port that Velocity should listen on for GameSpy 4 (Minecraft query protocol) requests.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"map")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Specifies the map name to be shown to clients.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"show-plugins")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Whether or not Velocity plugins are included in the query responses.")))),(0,a.kt)("h2",r({},{id:"metrics-section"}),(0,a.kt)("inlineCode",{parentName:"h2"},"metrics")," section"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Setting name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"enabled")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Whether or not Velocity should send metrics to bStats.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"UUID"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"A randomly generated UUID that uniquely identifies your Velocity server. Do not alter this setting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"log-failure")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Whether or not Velocity should log whenever it fails to connect to bStats.")))))}u.isMDXComponent=!0}}]);