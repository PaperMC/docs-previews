"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2408],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),k=p(a),d=l,c=k["".concat(o,".").concat(d)]||k[d]||m[d]||i;return a?n.createElement(c,r(r({ref:t},u),{},{components:a})):n.createElement(c,r({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9439:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return d}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),r=["components"],s={slug:"/paper/reference/paper-global-configuration",keywords:["paper.yml","paper.yml settings"]},o="Paper Global Config",p={unversionedId:"paper/reference/paper-global-configuration",id:"paper/reference/paper-global-configuration",title:"Paper Global Config",description:"Global configuration options exposed by Paper will affect all worlds on a server, or the server",source:"@site/docs/paper/reference/paper-global-configuration.md",sourceDirName:"paper/reference",slug:"/paper/reference/paper-global-configuration",permalink:"/docs-previews/pull/28/paper/reference/paper-global-configuration",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/paper/reference/paper-global-configuration.md",tags:[],version:"current",lastUpdatedBy:"Noah van der Aa",lastUpdatedAt:1646807603,formattedLastUpdatedAt:"3/9/2022",frontMatter:{slug:"/paper/reference/paper-global-configuration",keywords:["paper.yml","paper.yml settings"]},sidebar:"docs",previous:{title:"Aikar's Flags",permalink:"/docs-previews/pull/28/paper/aikars-flags"},next:{title:"Paper Per World Config",permalink:"/docs-previews/pull/28/paper/reference/paper-per-world-configuration"}},u={},m=[{value:"use-display-name-in-quit-message",id:"use-display-name-in-quit-message",level:3},{value:"verbose",id:"verbose",level:3},{value:"load-permissions-yml-before-plugins",id:"load-permissions-yml-before-plugins",level:3},{value:"bungee-online-mode",id:"bungee-online-mode",level:3},{value:"console-has-all-permissions",id:"console-has-all-permissions",level:3},{value:"region-file-cache-size",id:"region-file-cache-size",level:3},{value:"incoming-packet-spam-threshold",id:"incoming-packet-spam-threshold",level:3},{value:"max-joins-per-tick",id:"max-joins-per-tick",level:3},{value:"track-plugin-scoreboards",id:"track-plugin-scoreboards",level:3},{value:"suggest-player-names-when-null-tab-completions",id:"suggest-player-names-when-null-tab-completions",level:3},{value:"use-alternative-luck-formula",id:"use-alternative-luck-formula",level:3},{value:"chunk-tasks-per-tick",id:"chunk-tasks-per-tick",level:3},{value:"enable-player-collisions",id:"enable-player-collisions",level:3},{value:"player-auto-save-rate",id:"player-auto-save-rate",level:3},{value:"max-player-auto-save-per-tick",id:"max-player-auto-save-per-tick",level:3},{value:"save-empty-scoreboard-teams",id:"save-empty-scoreboard-teams",level:3},{value:"lag-compensate-block-breaking",id:"lag-compensate-block-breaking",level:3},{value:"send-full-pos-for-hard-colliding-entities",id:"send-full-pos-for-hard-colliding-entities",level:3},{value:"velocity-support",id:"velocity-support",level:3},{value:"unsupported-settings",id:"unsupported-settings",level:3},{value:"watchdog",id:"watchdog",level:3},{value:"spam-limiter",id:"spam-limiter",level:3},{value:"book-size",id:"book-size",level:3},{value:"async-chunks",id:"async-chunks",level:3},{value:"messages",id:"messages",level:3},{value:"timings",id:"timings",level:3},{value:"console",id:"console",level:3},{value:"item-validation",id:"item-validation",level:3},{value:"chunk-loading",id:"chunk-loading",level:3},{value:"packet-limiter",id:"packet-limiter",level:3},{value:"log-player-ip-addresses",id:"log-player-ip-addresses",level:3}],k={toc:m};function d(e){var t=e.components,a=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"paper-global-config"},"Paper Global Config"),(0,i.kt)("p",null,"Global configuration options exposed by Paper will affect all worlds on a server, or the server\nfunction itself. For per-world configuration, see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs-previews/pull/28/paper/reference/paper-per-world-configuration"},"Per World Configuration Reference")),(0,i.kt)("h3",{id:"use-display-name-in-quit-message"},"use-display-name-in-quit-message"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Sets whether the server should use the player's display name in quit messages.")),(0,i.kt)("h3",{id:"verbose"},"verbose"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Sets whether the server should dump all configuration values to the server log on\nstartup.")),(0,i.kt)("h3",{id:"load-permissions-yml-before-plugins"},"load-permissions-yml-before-plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Loads bukkit's permission.yml file before plugins, allowing them to check\npermissions immediately on enable.")),(0,i.kt)("h3",{id:"bungee-online-mode"},"bungee-online-mode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Instructs the server how to handle player UUIDs and data when behind bungee. Set\nto match your proxy's online-mode setting.")),(0,i.kt)("h3",{id:"console-has-all-permissions"},"console-has-all-permissions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Sets whether console command senders have all permissions")),(0,i.kt)("h3",{id:"region-file-cache-size"},"region-file-cache-size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 256"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Sets the maximum size of the region file cache.")),(0,i.kt)("h3",{id:"incoming-packet-spam-threshold"},"incoming-packet-spam-threshold"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 300"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Sets the threshold at which the server will consider incoming packets as spam and\nignore them.")),(0,i.kt)("h3",{id:"max-joins-per-tick"},"max-joins-per-tick"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Sets the maximum amount of players that may join the server in a single tick. If\nmore players join, they will be postponed until later ticks to join.")),(0,i.kt)("h3",{id:"track-plugin-scoreboards"},"track-plugin-scoreboards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Whether the server should track plugin scoreboards with only dummy objectives.\nThis is a breaking change; however, it provides a much more sensible default value. Enabling this\nwith plugins using many scoreboards will incur a performance degradation.")),(0,i.kt)("h3",{id:"suggest-player-names-when-null-tab-completions"},"suggest-player-names-when-null-tab-completions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Instructs the server to return a list of players when tab-completing if the\nplugin has no tab completions of its own.")),(0,i.kt)("h3",{id:"use-alternative-luck-formula"},"use-alternative-luck-formula"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Use an alternative\n",(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/aikar/40281f6c73ec9b6fef7588e6461e1ba9"},"luck formula by Aikar"),", allowing\nluck to be applied to items that have no quality defined. Makes major changes to fishing formulas.")),(0,i.kt)("h3",{id:"chunk-tasks-per-tick"},"chunk-tasks-per-tick"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 1000"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": How many chunk tasks may be done in the middle of ticks for all worlds. This is\nhelpful to rendering and chunk generation.")),(0,i.kt)("h3",{id:"enable-player-collisions"},"enable-player-collisions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Sets whether the server should allow players to collide with one another."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"warning"),": This setting can be broken by plugins interacting with the scoreboard, double-check\nplugins when troubleshooting this value.")),(0,i.kt)("h3",{id:"player-auto-save-rate"},"player-auto-save-rate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": -1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Set how often players should be saved. A value of -1 means it will pick a\nrecommended value for you.")),(0,i.kt)("h3",{id:"max-player-auto-save-per-tick"},"max-player-auto-save-per-tick"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": -1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": How many players should be saved at most in a single tick. A value of -1 means it\nwill pick a recommended value for you.")),(0,i.kt)("h3",{id:"save-empty-scoreboard-teams"},"save-empty-scoreboard-teams"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Some scoreboard plugins leave hundreds of empty scoreboard teams around,\ndramatically slowing down login times. This sets whether the server should remove those empty\nteams automatically.")),(0,i.kt)("h3",{id:"lag-compensate-block-breaking"},"lag-compensate-block-breaking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Whether the server should use time or TPS to determine block break duration. The\nclient assumes the server is always running at 20 TPS, causing disagreement when a block is broken\nduring server lag. This setting prevents this desync.")),(0,i.kt)("h3",{id:"send-full-pos-for-hard-colliding-entities"},"send-full-pos-for-hard-colliding-entities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Collisions with boats and minecarts are often subject to client/server\ndisagreement, which may cause glitchy behaviour for players. This setting attempts to mitigate\nthis desync by sending precise locations for entities involved in collisions. Having this enabled\nwill use more bandwidth; however, in the majority of cases, this is a worthy tradeoff.")),(0,i.kt)("h3",{id:"velocity-support"},"velocity-support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"enabled"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Set this to true if this server is behind a\n",(0,i.kt)("a",{parentName:"li",href:"https://www.velocitypowered.com/"},"Velocity")," proxy. If this is true, do not enable the\nbungeecord setting in spigot.yml."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"online-mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Instructs the server how to handle player UUIDs and data when behind velocity.\nSet to match your proxy's online-mode setting."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"secret"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": `` (empty string)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The secret string that is shared by your Velocity proxy and this server. This\nneeds to match your proxy's ",(0,i.kt)("inlineCode",{parentName:"li"},"forwarding-secret")," setting.")))),(0,i.kt)("h3",{id:"unsupported-settings"},"unsupported-settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"allow-perm-block-break-exploits"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Sets whether unbreakable blocks can be broken with vanilla exploits. This\nincludes bedrock, end portal frames, end portal blocks, and more."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"allow-piston-duplication"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": If set to true, will allow duplication of TNT, carpets and rails. Introduced in\n1.15.2, build #358."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"allow-headless-pistons"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": If set to true, pistons may in some cases become headless. This is often used\nto break permanent blocks."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"perform-username-validation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": If set to false, usernames will not be validated. While this may allow users\nwith special characters in their name to join, it can also cause issues with commands and\nplugins.")))),(0,i.kt)("h3",{id:"watchdog"},"watchdog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"early-warning-every"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 5000"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The interval in milliseconds between printed thread dumps while the server is\nhanging."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"early-warning-delay"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 10000"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The number of milliseconds before the watchdog thread starts printing thread\ndumps after the server starts hanging.")))),(0,i.kt)("h3",{id:"spam-limiter"},"spam-limiter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"tab-spam-increment"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The number that the internal tab spam counter increases by when a player\npresses tab in the chat window."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"tab-spam-limit"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 500"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The number that the internal tab spam counter can reach until the server kicks\nthe player for spam."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"recipe-spam-increment"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The number that the recipe spam counter increases by when a player presses a\nrecipe."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"recipe-spam-limit"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 20"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The number that the recipe spam counter can reach until the server kicks the\nplayer for spam.")))),(0,i.kt)("h3",{id:"book-size"},"book-size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"page-max"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 2560"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The max number of bytes a single page in a book can contribute to the allowed\nbyte total for a book."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"total-multiplier"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 0.98"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Each page has this multiple of bytes from the last page as its contribution to\nthe allowed byte total for a book (with the first page being having a multiplier of 1.0).")))),(0,i.kt)("h3",{id:"async-chunks"},"async-chunks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"threads",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": -1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The number of threads the server should use for world saving and loading. The\ndefault ",(0,i.kt)("inlineCode",{parentName:"li"},"-1")," indicates that Paper will utilize half your system's threads for chunk loading\nunless otherwise specified. There is also a maximum default of 4 threads used for saving and\nloading chunks. This can be overridden by adding ",(0,i.kt)("inlineCode",{parentName:"li"},"-Dpaper.maxChunkThreads=[number of threads]"),"\nto your JVM flags (and of course replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"[number of threads]")," with the number of threads you\ndesire).")))),(0,i.kt)("h3",{id:"messages"},"messages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"no-permission"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": '&cI''m sorry, but you do not have permission to perform this command. Please\ncontact the server administrators if you believe that this is in error.'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The message the server sends to requesters with insufficient permissions."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"kick"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"authentication-servers-down"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": '' (empty string)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"note"),": The default value instructs the server to send the vanilla translatable kick\nmessage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Message to kick a player with when they are disconnected because the Mojang\nauthentication servers are down."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"connection-throttle"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": Connection throttled! Please wait before reconnecting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Message to use when kicking a player when their connection is throttled."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"flying-player"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": Flying is not enabled on this server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Message to use when kicking a player for flying."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"flying-vehicle"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": Flying is not enabled on this server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Message to use when kicking a player's vehicle for flying.")))))),(0,i.kt)("h3",{id:"timings"},"timings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"enabled"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Controls the global enable state of the Timings platform."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"verbose"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),': Instructs Timings to provide more specific information in its reports. For\nexample, specific entity types causing lag rather than just "entities".'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"url"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"https://timings.aikar.co/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Specifies the URL of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/aikar/timings"},"Timings Viewer"),"\nserver where Timings reports should be uploaded to."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"server-name-privacy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Instructs Timings to hide server name information in reports."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"hidden-config-entries"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": { database, settings.bungeecord-addresses, settings.velocity-support.secret }"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Configuration entries to hide in Timings reports."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"history-interval"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 300"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The interval in seconds between individual points in the Timings report."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"history-length"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 3600"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The total amount of data to keep for a single report."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"warning"),": This value is validated server-side, massive reports will be rejected by the report\nsite."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"server-name"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": Unknown Server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Instructs timings on what to put in for the server name.")))),(0,i.kt)("h3",{id:"console"},"console"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"enable-brigadier-highlighting"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Enables Mojang's Brigadier highlighting in the server console."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"enable-brigadier-completions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Enables Mojang's Brigadier command completions in the server console.")))),(0,i.kt)("h3",{id:"item-validation"},"item-validation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"display-name"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 8192"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Overrides Spigot's limit on item display name length."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"loc-name"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 8192"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Overrides Spigot's limit on translatable item name length."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"lore-title"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 8192"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Overrides Spigot's limit on lore title length."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"book"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"title",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 8192"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Overrides Spigot's limit on book title length."))),(0,i.kt)("li",{parentName:"ul"},"author",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 8192"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Overrides Spigot's limit on book author length."))),(0,i.kt)("li",{parentName:"ul"},"page",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 16384"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Overrides Spigot's limit on individual book page length.")))))),(0,i.kt)("h3",{id:"chunk-loading"},"chunk-loading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"min-load-radius"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The radius of chunks around a player that are not throttled for chunk loading.\nEffectively, this radius will be unaffected by the ",(0,i.kt)("inlineCode",{parentName:"li"},"chunk-loading.max-concurrent-sends")," setting.\nThe number of chunks affected is actually the configured value plus one, as this config controls\nthe chunks the client will actually be able to render. A value of -1 will disable this feature."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"max-concurrent-sends"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The maximum number of chunks that will be queued to send at any one time. Lower\nvalues will help alleviate server-side networking bottlenecks such as anti-xray or compression;\nhowever, it is unlikely to help users with a poor internet connection. A value of -1 will not\ndisable this limit. Use a large number instead."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"autoconfig-send-distance"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Whether to use the client's view distance for the chunk send distance of the\nserver. This will exclusively change the radius of chunks sent to the client and will not affect\nticking or non-ticking view distance. Assuming no plugin has explicitly set the send distance\nand the client's view distance is less than the server's send distance, the client's view\ndistance will be used."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"target-player-chunk-send-rate"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 100.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The maximum number of chunks ever sent to an individual player within one\nsecond. A value of -1 will disable this limit."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"global-max-chunk-send-rate"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": -1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The maximum number of chunks sent per second for the entire server. This may\nhelp with server-side peak bandwidth usage. A value of -1 will disable this limit."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"enable-frustum-priority"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Whether to attempt to load chunks in front of the player before loading chunks\nto their sides or behind. Due to the client reacting poorly to receiving chunks out of order,\nthis is disabled by default."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"global-max-chunk-load-rate"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": -1.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The maximum number of chunks loaded per second for the whole server. A value of\n-1 will disable this limit."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"player-max-concurrent-loads"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 4.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The maximum number of chunk loads processed per player at one time. A value of\n-1 will not disable this. Use a large number instead."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"global-max-concurrent-loads"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 500.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The maximum number of chunk loads processed for the whole server one time. This\nwill override ",(0,i.kt)("inlineCode",{parentName:"li"},"player-max-concurrent-loads")," if exceeded. A value of -1 will disable this limit.")))),(0,i.kt)("h3",{id:"packet-limiter"},"packet-limiter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"kick-message"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": &cSent too many packets",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The message players are kicked with for sending too many packets."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"limits"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"all"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": This section applies to all incoming packets. You may not define an action in\nthis section, it will always kick the player if the limit is violated."),(0,i.kt)("li",{parentName:"ul"},"interval",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 7.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The interval, in seconds, for which ",(0,i.kt)("inlineCode",{parentName:"li"},"max-packet-rate")," should apply."))),(0,i.kt)("li",{parentName:"ul"},"max-packet-rate",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 500.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The number of any packet allowed per player within the interval."))),(0,i.kt)("li",{parentName:"ul"},"PacketPlayInAutoRecipe:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": This section applies specific limits for each packet, based on the packets\nname as shown in timings, or its class name for more advanced users. PacketPlayInAutoRecipe is\nused by default because this packet is very expensive to process, and may allow malicious\nactors to crash your server if unmitigated."),(0,i.kt)("li",{parentName:"ul"},"interval",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 4.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The interval, in seconds, for which ",(0,i.kt)("inlineCode",{parentName:"li"},"max-packet-rate")," should apply for this\npacket."))),(0,i.kt)("li",{parentName:"ul"},"max-packet-rate",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": 5.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The number of packets allowed within the interval before action is\nexecuted."))),(0,i.kt)("li",{parentName:"ul"},"action",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": DROP"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": The action to take once the limit has been violated. Possible values are\n",(0,i.kt)("inlineCode",{parentName:"li"},"DROP")," which will ignore packets over the limit, and ",(0,i.kt)("inlineCode",{parentName:"li"},"KICK")," which will kick players for\nexceeding the limit.")))))))),(0,i.kt)("h3",{id:"log-player-ip-addresses"},"log-player-ip-addresses"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),": true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": When set to false, player IP addresses in the server logs will be replaced with\n",(0,i.kt)("inlineCode",{parentName:"li"},"<ip address withheld>"),". This doesn't affect log messages generated by plugins.")))}d.isMDXComponent=!0}}]);