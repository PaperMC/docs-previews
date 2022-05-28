"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[601],{4907:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,y=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(6687);var o=n(4907);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={},l="Getting Started",s={unversionedId:"velocity/getting-started/README",id:"velocity/getting-started/README",title:"Getting Started",description:"This page covers how to install and set up a minimal configuration of Velocity.",source:"@site/docs/velocity/getting-started/README.md",sourceDirName:"velocity/getting-started",slug:"/velocity/getting-started/",permalink:"/docs-previews/pull/58/velocity/getting-started/",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/getting-started/README.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1648860042,formattedLastUpdatedAt:"4/2/2022",frontMatter:{},sidebar:"docs",previous:{title:"Welcome to the Velocity Wiki",permalink:"/docs-previews/pull/58/velocity/"},next:{title:"What Does Velocity Do For Me?",permalink:"/docs-previews/pull/58/velocity/why-velocity"}},c={},p=[{value:"Installing Java",id:"installing-java",level:2},{value:"Downloading Velocity",id:"downloading-velocity",level:2},{value:"Launching Velocity for the first time",id:"launching-velocity-for-the-first-time",level:2},{value:"Launching Velocity under Windows",id:"launching-velocity-under-windows",level:3},{value:"Launching Velocity under macOS or Linux",id:"launching-velocity-under-macos-or-linux",level:3},{value:"After launch",id:"after-launch",level:2},{value:"Configuring your servers",id:"configuring-your-servers",level:3}],d={toc:p};function u(e){var t=e.components,n=a(e,["components"]);return(0,o.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",r({},{id:"getting-started"}),"Getting Started"),(0,o.kt)("p",null,"This page covers how to install and set up a minimal configuration of Velocity."),(0,o.kt)("h2",r({},{id:"installing-java"}),"Installing Java"),(0,o.kt)("p",null,"Velocity is written in Java, so if you do not already have Java installed, you will need to install\nit before you continue. Velocity requires Java 11 or newer. See our\n",(0,o.kt)("a",r({parentName:"p"},{href:"/docs-previews/pull/58/java-install-update"}),"java installation guide")," for detailed instructions."),(0,o.kt)("h2",r({},{id:"downloading-velocity"}),"Downloading Velocity"),(0,o.kt)("p",null,"Head over to the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://papermc.io/downloads#Velocity"}),"downloads")," page to get the latest version\nof Velocity. We recommend getting the latest stable version. After downloading Velocity, move the\nJAR file to a dedicated folder for just the proxy or upload it to your server."),(0,o.kt)("h2",r({},{id:"launching-velocity-for-the-first-time"}),"Launching Velocity for the first time"),(0,o.kt)("p",null,"Once you have downloaded Velocity, we will launch it for the first time to generate the\nconfiguration file, ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.toml"),". You can use the start script created to launch Velocity once\nyou're done configuring Velocity."),(0,o.kt)("h3",r({},{id:"launching-velocity-under-windows"}),"Launching Velocity under Windows"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"start.bat")," with the following contents in the same directory where you intend to place the\nproxy files."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-batch",metastring:'title="start.bat"',title:'"start.bat"'}),"@echo off\njava -Xms512M -Xmx512M -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -jar velocity.jar\npause\n")),(0,o.kt)("div",r({},{className:"admonition admonition-tip alert alert--success"}),(0,o.kt)("div",r({parentName:"div"},{className:"admonition-heading"}),(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",r({parentName:"h5"},{className:"admonition-icon"}),(0,o.kt)("svg",r({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,o.kt)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,o.kt)("div",r({parentName:"div"},{className:"admonition-content"}),(0,o.kt)("p",{parentName:"div"},"Make sure to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.jar")," to the name of the Velocity JAR that you downloaded, or\nrename the Velocity JAR to ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.jar"),"."))),(0,o.kt)("p",null,"Once saved, double-click the ",(0,o.kt)("inlineCode",{parentName:"p"},"start.bat")," file. If it worked, you should now receive a console\nsimilar to the output in the next section."),(0,o.kt)("h3",r({},{id:"launching-velocity-under-macos-or-linux"}),"Launching Velocity under macOS or Linux"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"start.sh")," with the following contents in the same directory where you intend to place the\nproxy files. You may do this using a file transfer client, or using a text editor running on the\nhost."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-bash",metastring:'title="start.sh"',title:'"start.sh"'}),"#!/bin/sh\n\njava -Xms1G -Xmx1G -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -XX:MaxInlineLevel=15 -jar velocity*.jar\n")),(0,o.kt)("p",null,"Once saved, open a terminal (or log into the machine) if you haven't already, navigate to the\ndirectory where you have placed the Velocity JAR file and the ",(0,o.kt)("inlineCode",{parentName:"p"},"start.sh")," file. Then run\n",(0,o.kt)("inlineCode",{parentName:"p"},"chmod +x start.sh")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"./start.sh"),". If it worked, you should now receive a console similar to\nthe output in the next section."),(0,o.kt)("h2",r({},{id:"after-launch"}),"After launch"),(0,o.kt)("p",null,"Here's a sample of what you'll see once we've started the proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-log"}),"[05:41:13 INFO]: Booting up Velocity 3.1.2-SNAPSHOT (git-b2800087-b112)...\n[05:41:13 INFO]: Loading localizations...\n[05:41:13 INFO]: Connections will use epoll channels, libdeflate (Linux aarch64) compression, OpenSSL (Linux aarch64) ciphers\n[05:41:13 INFO]: Loading plugins...\n[05:41:13 INFO]: Loaded 0 plugins\n[05:41:13 INFO]: Listening on /[0:0:0:0:0:0:0:0%0]:25577\n[05:41:13 INFO]: Done (0.36s)!\n")),(0,o.kt)("p",null,"Velocity has launched, and you are now ready to configure the proxy completely. Go ahead and type\n",(0,o.kt)("inlineCode",{parentName:"p"},"end")," at the console and press enter. The proxy will shut down:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-log"}),"> end\n[05:42:10 INFO]: Shutting down the proxy...\n[05:42:10 INFO]: Closing endpoint /0.0.0.0:25577\n")),(0,o.kt)("p",null,"If you used the Windows batch script from earlier, the window will ask you to press a key. You can\neither press a key or close the command window."),(0,o.kt)("h3",r({},{id:"configuring-your-servers"}),"Configuring your servers"),(0,o.kt)("p",null,"We now need to configure each server to accept connections from the proxy."),(0,o.kt)("p",null,"Velocity is a highly configurable proxy. While most users will not need to change everything in the\nconfig, there are tons of options covered\n",(0,o.kt)("a",r({parentName:"p"},{href:"/docs-previews/pull/58/velocity/configuration"}),"on the configuration wiki page")," along with an explanation on how\neach option works. However, in this section we will do the bare minimum to get the proxy up and\nrunning."),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"velocity.toml")," file in a text editor and search for the ",(0,o.kt)("inlineCode",{parentName:"p"},"[servers]")," section. This section\nspecifies the servers that Velocity can connect to. Here's what the ",(0,o.kt)("inlineCode",{parentName:"p"},"[servers]")," section will look\nlike initially:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-toml",metastring:'title="velocity.toml"',title:'"velocity.toml"'}),'[servers]\n# Configure your servers here. Each key represents the server\'s name, and the value\n# represents the IP address of the server to connect to.\nlobby = "127.0.0.1:30066"\nfactions = "127.0.0.1:30067"\nminigames = "127.0.0.1:30068"\n\n# In what order we should try servers when a player logs in or is kicked from a server.\ntry = [\n  "lobby"\n]\n')),(0,o.kt)("p",null,"On the left side, you will specify a name for the server (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"lobby"),") and on right is a\nstring indicating the IP address and port for the server. You will now need to add your servers to\nthe list. You can change the list of servers as needed."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," setting is special. It is a list of servers Velocity should try to connect the player to\nwhen the player first logs onto the proxy or gets kicked from a server. If you decided to change the\nname of the ",(0,o.kt)("inlineCode",{parentName:"p"},"lobby")," server, then you should replace ",(0,o.kt)("inlineCode",{parentName:"p"},"lobby")," in this list with the name you chose for\nthe first server the player should log into first."),(0,o.kt)("div",r({},{className:"admonition admonition-caution alert alert--warning"}),(0,o.kt)("div",r({parentName:"div"},{className:"admonition-heading"}),(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",r({parentName:"h5"},{className:"admonition-icon"}),(0,o.kt)("svg",r({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,o.kt)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,o.kt)("div",r({parentName:"div"},{className:"admonition-content"}),(0,o.kt)("p",{parentName:"div"},"The following setup is generic and is intended to apply to any Minecraft server. This setup is not\nonly not ergonomic (players will lack skins, proper UUIDs, and all connections will appear to come\nfrom the proxy) but also ",(0,o.kt)("strong",{parentName:"p"},"dangerously insecure"),". After you place your servers in offline mode, you\n",(0,o.kt)("strong",{parentName:"p"},"must"),' follow the "Player Information Forwarding" and "Securing Your Servers" topics to complete\nyour setup.'))),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"server.properties")," file for each of your servers and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"online-mode")," setting to\n",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". This allows Velocity to connect to your server. Once you're done, restart your server.\nWhile Velocity is now ready for use, you will almost certainly want to\n",(0,o.kt)("a",r({parentName:"p"},{href:"/docs-previews/pull/58/velocity/security"}),"secure your servers")," and\n",(0,o.kt)("a",r({parentName:"p"},{href:"/docs-previews/pull/58/velocity/player-information-forwarding"}),"configure player information forwarding"),"."))}u.isMDXComponent=!0}}]);