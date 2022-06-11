"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5138],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),g=u(t),h=o,m=g["".concat(s,".").concat(h)]||g[h]||d[h]||l;return t?i.createElement(m,a(a({ref:n},p),{},{components:t})):i.createElement(m,a({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=g;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var u=2;u<l;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>h,default:()=>k,frontMatter:()=>g,metadata:()=>m,toc:()=>f});var i=t(3905),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(r)for(var t of r(n))u.call(n,t)&&p(e,t,n[t]);return e};const g={toc_max_heading_level:4,slug:"/adding-plugins"},h="Adding Plugins",m={unversionedId:"admin/getting-started/adding-plugins",id:"version-1.18/admin/getting-started/adding-plugins",title:"Adding Plugins",description:"Plugins are the most powerful way to extend the functionality of Paper beyond the configuration",source:"@site/versioned/paper/content/1.18/admin/getting-started/adding-plugins.md",sourceDirName:"admin/getting-started",slug:"/adding-plugins",permalink:"/paper/1.18/adding-plugins",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/admin/getting-started/adding-plugins.md",tags:[],version:"1.18",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1654936375,formattedLastUpdatedAt:"6/11/2022",frontMatter:{toc_max_heading_level:4,slug:"/adding-plugins"},sidebar:"primary",previous:{title:"Getting Started",permalink:"/paper/1.18/getting-started"},next:{title:"Migrating to or from Paper",permalink:"/paper/1.18/migration"}},c={},f=[{value:"Finding Plugins",id:"finding-plugins",level:2},{value:"Installing Plugins",id:"installing-plugins",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Check your logs",id:"check-your-logs",level:3},{value:"Missing Dependencies",id:"missing-dependencies",level:4},{value:"Invalid plugin.yml",id:"invalid-pluginyml",level:4},{value:"Ambiguous plugin name",id:"ambiguous-plugin-name",level:4},{value:"Something Else",id:"something-else",level:4},{value:"If nothing is logged",id:"if-nothing-is-logged",level:3}],y={toc:f};function k(e){var n,t=e,{components:o}=t,p=((e,n)=>{var t={};for(var i in e)s.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&r)for(var i of r(e))n.indexOf(i)<0&&u.call(e,i)&&(t[i]=e[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(n=d(d({},y),p),l(n,a({components:o,mdxType:"MDXLayout"}))),(0,i.kt)("h1",d({},{id:"adding-plugins"}),"Adding Plugins"),(0,i.kt)("p",null,"Plugins are the most powerful way to extend the functionality of Paper beyond the configuration\nfiles. Functionality added by plugins can range from making milk restore hunger or dead bushes grow,\nto adding entirely new and original game modes or items."),(0,i.kt)("div",d({},{className:"admonition admonition-danger alert alert--danger"}),(0,i.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,i.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,i.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Malicious Plugins")),(0,i.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,i.kt)("p",{parentName:"div"},"Ensure you fully trust the source of any plugin before installing it. Plugins are given ",(0,i.kt)("strong",{parentName:"p"},"full and\nunrestricted")," access to not only your server but also the machine that it runs on. Because of this,\nit is imperative that plugins only be installed from trusted sources. Be careful!"))),(0,i.kt)("h2",d({},{id:"finding-plugins"}),"Finding Plugins"),(0,i.kt)("p",null,"Before installing a plugin, you'll need to find what you want to install. Most plugins can be found\non ",(0,i.kt)("a",d({parentName:"p"},{href:"https://www.spigotmc.org/resources/"}),"SpigotMC"),",\n",(0,i.kt)("a",d({parentName:"p"},{href:"https://dev.bukkit.org/bukkit-plugins"}),"BukkitDev"),", or the\n",(0,i.kt)("a",d({parentName:"p"},{href:"https://forums.papermc.io/forums/paper-plugin-releases/"}),"PaperMC Forums"),", while other plugins may\nrelease on ",(0,i.kt)("a",d({parentName:"p"},{href:"https://github.com"}),"GitHub"),". One of the best ways to find plugins isn't to browse any of\nthese sites directly but to search for plugins using a search engine. Searching for the function you\ndesire followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"Minecraft plugin")," will often yield good results."),(0,i.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,i.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,i.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,i.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Spigot and Bukkit Plugins")),(0,i.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,i.kt)("p",{parentName:"div"},"Paper is compatible with both Spigot and Bukkit plugins. It's okay if a plugin does not explicitly\nmention Paper compatibility. It'll still work."))),(0,i.kt)("h2",d({},{id:"installing-plugins"}),"Installing Plugins"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Once you've found the plugin you'd like to install, download it. Ensure the file you have\ndownloaded ends in ",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),". Some plugins also distribute as ",(0,i.kt)("inlineCode",{parentName:"li"},".zip")," files, in which case you will\nneed to extract the file and locate the ",(0,i.kt)("inlineCode",{parentName:"li"},".jar")," for your platform, often labelled ",(0,i.kt)("inlineCode",{parentName:"li"},"bukkit")," or\n",(0,i.kt)("inlineCode",{parentName:"li"},"paper"),"."),(0,i.kt)("li",{parentName:"ol"},"Once you have the plugin downloaded locally, locate the ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," folder from the root directory\nof your Paper server."),(0,i.kt)("li",{parentName:"ol"},"Drag and drop the plugin file (",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),") into the ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," folder. If you are using a shared\nhosting service, you may need to use their web panel or SFTP to upload the plugin; however, the\nprocedure will be the same."),(0,i.kt)("li",{parentName:"ol"},"Restart your server. The plugin should load."),(0,i.kt)("li",{parentName:"ol"},"Check your work. Once the server has finished loading, run the ",(0,i.kt)("inlineCode",{parentName:"li"},"/plugins")," command in-game or type\n",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," into the console. You should see your freshly installed plugin listed in green. If it\nis not listed or is colored red, continue to ",(0,i.kt)("a",d({parentName:"li"},{href:"#troubleshooting"}),"troubleshooting"),". A plugin listed\nin red means that it is not currently enabled. For a freshly installed plugin, this often means\nthat the plugin failed to load.")),(0,i.kt)("h2",d({},{id:"troubleshooting"}),"Troubleshooting"),(0,i.kt)("h3",d({},{id:"check-your-logs"}),"Check your logs"),(0,i.kt)("p",null,"The first step to troubleshooting installing plugins is to check the log of your server. Your\nserver's most recent logs will be stored to the ",(0,i.kt)("inlineCode",{parentName:"p"},"logs/latest.log")," file. You may need to scroll near\nthe beginning of this file to see when plugins were loaded."),(0,i.kt)("h4",d({},{id:"missing-dependencies"}),"Missing Dependencies"),(0,i.kt)("p",null,"If you see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-log"}),"Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'\norg.bukkit.plugin.UnknownDependencyException: Unknown/missing dependency plugins: [Vault]. Please download and install these plugins to run 'MyAwesomePlugin'.\n")),(0,i.kt)("p",null,"This means that the plugin you tried to install is missing a dependency. A dependency, in this case,\nis another plugin that you must install for the first to function. While you will get a big scary\nerror, the important line to look at is"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-log"}),"Unknown/missing dependency plugins: [Vault]. Please download and install these plugins to run 'MyAwesomePlugin'.\n")),(0,i.kt)("p",null,"This is telling you that in order to load ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAwesomePlugin"),", you must first install ",(0,i.kt)("inlineCode",{parentName:"p"},"Vault"),"."),(0,i.kt)("h4",d({},{id:"invalid-pluginyml"}),"Invalid plugin.yml"),(0,i.kt)("p",null,"If you see something closer to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-log"}),"Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'\norg.bukkit.plugin.InvalidDescriptionException: Invalid plugin.yml\n")),(0,i.kt)("p",null,"This means that what you have downloaded isn't a valid Paper plugin. This is generally caused by one\nof the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The plugin you downloaded isn't a plugin at all, but instead a mod for Forge, Fabric, or similar.\nThese will not run on Paper."),(0,i.kt)("li",{parentName:"ol"},"The plugin failed to download completely. Especially when using tools such as ",(0,i.kt)("inlineCode",{parentName:"li"},"curl")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"wget"),",\nyou can easily download error pages rather than the plugin you intended. This may also be caused\nby a network issue. Attempt to download the plugin again. If you are using FTP (not SFTP or a web\npanel) to upload your plugin to a shared hosting service, ensure your FTP client is in ",(0,i.kt)("inlineCode",{parentName:"li"},"binary"),"\nand not ",(0,i.kt)("inlineCode",{parentName:"li"},"ASCII")," mode. Consult the documentation for your FTP client for details.")),(0,i.kt)("h4",d({},{id:"ambiguous-plugin-name"}),"Ambiguous plugin name"),(0,i.kt)("p",null,"If you see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-log"}),"Ambiguous plugin name `Essentials' for files `plugins/EssentialsX-2.19.4.jar' and `plugins/Essentialsx-2.20.0-dev.jar' in `plugins'\n")),(0,i.kt)("p",null,"This means you have two plugins with the same name, which is not supported. In this case, two\nversions of EssentialsX are installed. Both the release ",(0,i.kt)("inlineCode",{parentName:"p"},"2.19.4"),", and a development build of\n",(0,i.kt)("inlineCode",{parentName:"p"},"2.20.0"),". Ensure you only have one version of each plugin installed at one time. Delete the older\nversion of the duplicate plugin, and restart your server."),(0,i.kt)("h4",d({},{id:"something-else"}),"Something Else"),(0,i.kt)("p",null,"If you see an error, but it isn't similar to one of the above, attempt to read it yourself. While\nthe full error may be large and scary, you likely only have to read the first one or two lines to\nunderstand what is going on. If you're not sure, do not hesitate to reach out for support on our\n",(0,i.kt)("a",d({parentName:"p"},{href:"https://discord.gg/papermc"}),"Discord")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"#paper-help")," channel."),(0,i.kt)("h3",d({},{id:"if-nothing-is-logged"}),"If nothing is logged"),(0,i.kt)("p",null,"If nothing is logged, your server is likely not attempting to load any plugins. The conditions\nneeded for the server to load a plugin are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The file is at the root of the ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," folder, relative to its working directory. This is\nusually the same folder as the server JAR file. ",(0,i.kt)("strong",{parentName:"li"},"Subdirectories of the ",(0,i.kt)("inlineCode",{parentName:"strong"},"plugins")," folder will not\nbe checked.")," All plugins must be in the root folder."),(0,i.kt)("li",{parentName:"ol"},"The file ends in ",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),". If your plugin does not end in ",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),", what you have downloaded may not\nbe a plugin. Note that some plugins distribute multiple jars as ",(0,i.kt)("inlineCode",{parentName:"li"},".zip")," files. If this is the\ncase, you have to extract them before installing the plugin.")),(0,i.kt)("p",null,"If both of these are true and you still see no logs please reach out for support on our\n",(0,i.kt)("a",d({parentName:"p"},{href:"https://discord.gg/papermc"}),"Discord")," server in the ",(0,i.kt)("inlineCode",{parentName:"p"},"#paper-help")," channel. We will be happy to\nassist you."))}k.isMDXComponent=!0}}]);