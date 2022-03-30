"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9559],{4907:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),g=p(n),c=o,h=g["".concat(s,".").concat(c)]||g[c]||d[c]||l;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var p=2;p<l;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>u});n(6687);var i=n(4907);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a={toc_max_heading_level:4},r="Getting Plugins",s={unversionedId:"paper/getting-started/getting-plugins",id:"paper/getting-started/getting-plugins",title:"Getting Plugins",description:"Plugins are the way to extend the functionality of Paper, beyond the configuration files, and one of",source:"@site/docs/paper/getting-started/getting-plugins.md",sourceDirName:"paper/getting-started",slug:"/paper/getting-started/getting-plugins",permalink:"/docs-previews/pull/41/paper/getting-started/getting-plugins",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/paper/getting-started/getting-plugins.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1648618329,formattedLastUpdatedAt:"3/30/2022",frontMatter:{toc_max_heading_level:4},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs-previews/pull/41/paper/getting-started/"},next:{title:"Per World Configuration",permalink:"/docs-previews/pull/41/paper/per-world-configuration"}},p={},u=[{value:"Finding Plugins",id:"finding-plugins",level:2},{value:"Installing Plugins",id:"installing-plugins",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Check your logs",id:"check-your-logs",level:3},{value:"Missing Dependencies",id:"missing-dependencies",level:4},{value:"Invalid plugin.yml",id:"invalid-pluginyml",level:4},{value:"Something Else",id:"something-else",level:4},{value:"If nothing is logged",id:"if-nothing-is-logged",level:3}],d={toc:u};function g(e){var t=e.components,n=l(e,["components"]);return(0,i.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",o({},{id:"getting-plugins"}),"Getting Plugins"),(0,i.kt)("p",null,"Plugins are the way to extend the functionality of Paper, beyond the configuration files, and one of\nthe most powerful features Paper offers. Functionality added by plugins can range from making milk\nrestore hunger or dead bushes grow, to adding completely new and original gamemodes or items."),(0,i.kt)("div",o({},{className:"admonition admonition-danger alert alert--danger"}),(0,i.kt)("div",o({parentName:"div"},{className:"admonition-heading"}),(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",o({parentName:"h5"},{className:"admonition-icon"}),(0,i.kt)("svg",o({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,i.kt)("path",o({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Malicious Plugins")),(0,i.kt)("div",o({parentName:"div"},{className:"admonition-content"}),(0,i.kt)("p",{parentName:"div"},"Ensure you fully trust the source of any plugin before installing it. Plugins are given ",(0,i.kt)("strong",{parentName:"p"},"full and\nunrestricted")," access to not only your server, but also the machine that it runs on. Because of\nthis, it is imperative that plugins be installed only from trusted sources. Be careful!"))),(0,i.kt)("h2",o({},{id:"finding-plugins"}),"Finding Plugins"),(0,i.kt)("p",null,"Before you can install a plugin, you'll need to find what you want to install. Most plugins can be\nfound on ",(0,i.kt)("a",o({parentName:"p"},{href:"https://www.spigotmc.org/resources/"}),"SpigotMC"),",\n",(0,i.kt)("a",o({parentName:"p"},{href:"https://dev.bukkit.org/bukkit-plugins"}),"BukkitDev"),", or the\n",(0,i.kt)("a",o({parentName:"p"},{href:"https://forums.papermc.io/forums/paper-plugin-releases/"}),"PaperMC Forums"),", while other plugins may\nrelease on ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com"}),"GitHub"),". One of the best ways to find plugins isn't to browse any of\nthese sites directly, but to search for plugins using a search engine. Searching for the function\nyou desire followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"Minecraft plugin")," will often yield good results."),(0,i.kt)("div",o({},{className:"admonition admonition-tip alert alert--success"}),(0,i.kt)("div",o({parentName:"div"},{className:"admonition-heading"}),(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",o({parentName:"h5"},{className:"admonition-icon"}),(0,i.kt)("svg",o({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,i.kt)("path",o({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Spigot and Bukkit Plugins")),(0,i.kt)("div",o({parentName:"div"},{className:"admonition-content"}),(0,i.kt)("p",{parentName:"div"},"Paper is compatible with both Spigot and Bukkit plugins. It's okay if a plugin does not specifically\nmention Paper. It'll still work."))),(0,i.kt)("h2",o({},{id:"installing-plugins"}),"Installing Plugins"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Once you've found the plugin you'd like to install, download it. Ensure the file you have\ndownloaded ends in ",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),". Some plugins also distribute as ",(0,i.kt)("inlineCode",{parentName:"li"},".zip")," files, in which case you will\nneed to extract the file and locate the ",(0,i.kt)("inlineCode",{parentName:"li"},".jar")," for your platform, often labeled ",(0,i.kt)("inlineCode",{parentName:"li"},"bukkit")," or\n",(0,i.kt)("inlineCode",{parentName:"li"},"paper"),"."),(0,i.kt)("li",{parentName:"ol"},"Once you have the plugin downloaded locally, locate the ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," folder from the root directory\nof your Paper server."),(0,i.kt)("li",{parentName:"ol"},"Drag and drop the plugin file (",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),") into the ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," folder. If you are using a shared\nhosting service, you may need to use their web panel or SFTP to upload the plugin, however, the\nprocedure will be the same."),(0,i.kt)("li",{parentName:"ol"},"Restart your server. The plugin should load."),(0,i.kt)("li",{parentName:"ol"},"Check your work. Once the server has finished loading, run the ",(0,i.kt)("inlineCode",{parentName:"li"},"/plugins")," command in-game or type\n",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," into the console. You should see your freshly installed plugin listed. If you do not,\ncontinue to ",(0,i.kt)("a",o({parentName:"li"},{href:"#troubleshooting"}),"troubleshooting"),".")),(0,i.kt)("h2",o({},{id:"troubleshooting"}),"Troubleshooting"),(0,i.kt)("h3",o({},{id:"check-your-logs"}),"Check your logs"),(0,i.kt)("p",null,"The first step to troubleshooting installing plugins is to check the log of your server. Your\nservers most recent logs will be stored to the ",(0,i.kt)("inlineCode",{parentName:"p"},"logs/latest.log")," file. You may need to scroll near\nthe beginning of this file to see when plugins were loaded."),(0,i.kt)("h4",o({},{id:"missing-dependencies"}),"Missing Dependencies"),(0,i.kt)("p",null,"If you see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-log"}),"Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'\norg.bukkit.plugin.UnknownDependencyException: Unknown/missing dependency plugins: [Vault]. Please download and install these plugins to run 'MyAwesomePlugin'.\n")),(0,i.kt)("p",null,"This means that the plugin you tried to install is missing a dependency. A dependency, in this case,\nis another plugin that you must install for the first to function. While you will get a big scary\nerror, the important line to look at is"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-log"}),"Unknown/missing dependency plugins: [Vault]. Please download and install these plugins to run 'MyAwesomePlugin'.\n")),(0,i.kt)("p",null,"This is telling you that in order to load ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAwesomePlugin"),", you must first install ",(0,i.kt)("inlineCode",{parentName:"p"},"Vault"),"."),(0,i.kt)("h4",o({},{id:"invalid-pluginyml"}),"Invalid plugin.yml"),(0,i.kt)("p",null,"If you see something closer to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-log"}),"Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'\norg.bukkit.plugin.InvalidDescriptionException: Invalid plugin.yml\n")),(0,i.kt)("p",null,"This means that what you have download isn't a valid Paper plugin. This is generally caused by one\nof the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The plugin you downloaded isn't a plugin at all, but instead a mod for Forge, Fabric, or similar.\nThese will not run on Paper."),(0,i.kt)("li",{parentName:"ol"},"The plugin failed to download completely. Especially when using tools such as ",(0,i.kt)("inlineCode",{parentName:"li"},"curl")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"wget"),",\nyou can easily download error pages rather than the plugin you intended. This may also be caused\nby a network issue. Attempt to download the plugin again. If you are using FTP (not SFTP or a web\npanel) to upload your plugin to a shared hosting service, ensure your FTP client is in ",(0,i.kt)("inlineCode",{parentName:"li"},"binary"),"\nand not ",(0,i.kt)("inlineCode",{parentName:"li"},"ASCII")," mode. Consult the documentation for your FTP client for details.")),(0,i.kt)("h4",o({},{id:"something-else"}),"Something Else"),(0,i.kt)("p",null,"If you see an error, but it isn't similar to one of the above, attempt to read it yourself. While\nthe full error may be large and scary, you likely only have to read the first one or two lines to\nunderstand what is going on. If you're not sure, do not hesitate to reach out for support on our\n",(0,i.kt)("a",o({parentName:"p"},{href:"https://discord.gg/papermc"}),"Discord")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"#paper-help")," channel."),(0,i.kt)("h3",o({},{id:"if-nothing-is-logged"}),"If nothing is logged"),(0,i.kt)("p",null,"If nothing is logged, your server likely not attempting to load any plugins. The conditions needed\nfor the server to load a plugin are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The file is at the root of the ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," folder, relative to its working directory. This is\nusually the same folder as the server JAR file. ",(0,i.kt)("strong",{parentName:"li"},"Subdirectories of the ",(0,i.kt)("inlineCode",{parentName:"strong"},"plugins")," folder will not\nbe checked.")," All plugins must be in the root folder."),(0,i.kt)("li",{parentName:"ol"},"The file ends in ",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),". If your plugin does not end in ",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),", what you have download may not be\na plugin. Note that some plugins distribute multiple jars as ",(0,i.kt)("inlineCode",{parentName:"li"},".zip")," files. If this is the case,\nyou must extract them before installing the plugin.")),(0,i.kt)("p",null,"If both of these are true, and you still see no logs, please reach out for support on our\n",(0,i.kt)("a",o({parentName:"p"},{href:"https://discord.gg/papermc"}),"Discord")," server in the ",(0,i.kt)("inlineCode",{parentName:"p"},"#paper-help")," channel. We will be happy to\nassist you."))}g.isMDXComponent=!0}}]);