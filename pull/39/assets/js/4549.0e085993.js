"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4549],{4907:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(6677);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});a(6677);var n=a(4907);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i={title:"Installing or Updating Java",slug:"/java-install-update",description:"How to install or update to Java 17 on Linux (apt/rpm), Windows, or Mac.",toc_max_heading_level:5},l=void 0,s={unversionedId:"common/java-install",id:"common/java-install",title:"Installing or Updating Java",description:"How to install or update to Java 17 on Linux (apt/rpm), Windows, or Mac.",source:"@site/docs/common/java-install.md",sourceDirName:"common",slug:"/java-install-update",permalink:"/docs-previews/pull/39/java-install-update",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/common/java-install.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646723198,formattedLastUpdatedAt:"3/8/2022",frontMatter:{title:"Installing or Updating Java",slug:"/java-install-update",description:"How to install or update to Java 17 on Linux (apt/rpm), Windows, or Mac.",toc_max_heading_level:5},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs-previews/pull/39/waterfall/configuration"},next:{title:"Downloads API",permalink:"/docs-previews/pull/39/papermc/downloads-api"}},p={},d=[{value:"Linux",id:"linux",level:2},{value:"Ubuntu/Debian",id:"ubuntudebian",level:3},{value:"RPM-based",id:"rpm-based",level:3},{value:"DNF",id:"dnf",level:4},{value:"Zypper",id:"zypper",level:4},{value:"YUM",id:"yum",level:4},{value:"Windows 10 &amp; 11",id:"windows-10--11",level:2},{value:"macOS/OS X",id:"macosos-x",level:2},{value:"Pterodactyl",id:"pterodactyl",level:2},{value:"Verifying Installation",id:"verifying-installation",level:2}],c={toc:d};function u(e){var t=e.components,i=r(e,["components"]);return(0,n.kt)("wrapper",o({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Installing Java is a critical first step to using or developing plugins for Paper, Velocity, and\nWaterfall. This guide will walk you through the recommended installation steps for most major\nplatforms."),(0,n.kt)("div",o({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",o({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",o({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",o({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",o({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",o({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"This guide focuses on Amazon's Corretto OpenJDK distribution. This is because it offers the best\ninstallation experience on the most platforms. Corretto is, however, not the only OpenJDK vendor to\nchoose from. Many alternatives exist such as ",(0,n.kt)("a",o({parentName:"p"},{href:"https://adoptium.net/"}),"Eclipse Adoptium"),",\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.microsoft.com/openjdk"}),"Microsoft")," and\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.azul.com/downloads/?package=jdk"}),"Azul Zulu"),". Note that the JDK Oracle distributes,\nwhile functionally identical, is ",(0,n.kt)("strong",{parentName:"p"},"not")," recommended due to an extremely unfriendly installer and\nprevious hostile licensing."))),(0,n.kt)("h2",o({},{id:"linux"}),"Linux"),(0,n.kt)("h3",o({},{id:"ubuntudebian"}),"Ubuntu/Debian"),(0,n.kt)("p",null,"Installing Java 17 on Debian-based Linux distributions is very simple. First, ensure your system has\nall required tools to successfully install Java."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sudo apt-get update && sudo apt-get upgrade\nsudo apt-get install software-properties-common ca-certificates apt-transport-https curl\n")),(0,n.kt)("p",null,"Second, import the Amazon Corretto public key and apt repository."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"curl https://apt.corretto.aws/corretto.key | sudo apt-key add -\nsudo add-apt-repository 'deb https://apt.corretto.aws stable main'\n")),(0,n.kt)("p",null,"Then, install Java 17."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sudo apt-get update\nsudo apt-get install -y java-17-amazon-corretto-jdk\n")),(0,n.kt)("p",null,"Proceed to ",(0,n.kt)("a",o({parentName:"p"},{href:"#verifying-installation"}),"verify your installation"),"."),(0,n.kt)("h3",o({},{id:"rpm-based"}),"RPM-based"),(0,n.kt)("p",null,"To install Java 17 on CentOS, RHEL, Fedora, openSUSE, SLES, or any other RPM-based Linux\ndistribution, execute the following commands depending on your package manager. Once you have\nfinished, precede to ",(0,n.kt)("a",o({parentName:"p"},{href:"#verifying-installation"}),"verify your installation"),"."),(0,n.kt)("h4",o({},{id:"dnf"}),"DNF"),(0,n.kt)("p",null,"DNF is used on Fedora, CentOS/RHEL 7+, and related distributions."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sudo rpm --import https://yum.corretto.aws/corretto.key\nsudo curl -Lo /etc/yum.repos.d/corretto.repo https://yum.corretto.aws/corretto.repo\nsudo dnf -y install java-17-amazon-corretto-devel\n")),(0,n.kt)("h4",o({},{id:"zypper"}),"Zypper"),(0,n.kt)("p",null,"Zypper is used on openSUSE, SLES, and related distributions."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sudo zypper addrepo https://yum.corretto.aws/corretto.repo\nsudo zypper refresh\nsudo zypper install java-17-amazon-corretto-devel\n")),(0,n.kt)("h4",o({},{id:"yum"}),"YUM"),(0,n.kt)("p",null,"YUM is used on older releases of CentOS/RHEL, and excessively old releases of Fedora."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sudo rpm --import https://yum.corretto.aws/corretto.key\nsudo curl -Lo /etc/yum.repos.d/corretto.repo https://yum.corretto.aws/corretto.repo\nsudo yum -y install java-17-amazon-corretto-devel\n")),(0,n.kt)("h2",o({},{id:"windows-10--11"}),"Windows 10 & 11"),(0,n.kt)("p",null,"If you're on Windows 10 or 11, installing Java is just like installing any other program. Download\nthe Amazon Corretto installer from\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://corretto.aws/downloads/latest/amazon-corretto-17-x64-windows-jdk.msi"}),"their website"),"."),(0,n.kt)("p",null,'Once you have run the installer, it is safe to click "next" through the whole process. No additional\nbloatware or toolbars will be installed, and all the required features are enabled out of the box.'),(0,n.kt)("p",null,"Now, open a command prompt and precede to ",(0,n.kt)("a",o({parentName:"p"},{href:"#verifying-installation"}),"verify your installation"),"."),(0,n.kt)("h2",o({},{id:"macosos-x"}),"macOS/OS X"),(0,n.kt)("p",null,"If you're on macOS, the best way to manage Java installations is with a tool called\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://brew.sh"}),"Homebrew"),". Follow the instructions on their homepage to install it. Then, in your\nterminal run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"brew install openjdk@17\n")),(0,n.kt)("p",null,"Once this command has completed, continue to ",(0,n.kt)("a",o({parentName:"p"},{href:"#verifying-installation"}),"verify your installation"),"."),(0,n.kt)("h2",o({},{id:"pterodactyl"}),"Pterodactyl"),(0,n.kt)("div",o({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",o({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",o({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",o({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",o({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",o({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"On Pterodactyl versions lower than ",(0,n.kt)("inlineCode",{parentName:"p"},"1.2.0"),", an administrator account is required to change the Java\nversion. These instructions will not apply."))),(0,n.kt)("p",null,"If you have started a Paper server with an incorrect Java version, Pterodactyl will automatically\nprompt you to update like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pterodactyl Automatic Prompt",src:a(8256).Z})),(0,n.kt)("p",null,'If this does not show up for you, the Java version can be manually changed. Navigate to the\n"Startup" tab of your server, select ',(0,n.kt)("inlineCode",{parentName:"p"},"ghcr.io/pterodactyl/yolks:java_17"),' from the "Docker Image"\ndropdown as shown in the image below.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pterodactyl Manual Java Version Change",src:a(8350).Z})),(0,n.kt)("p",null,"The Verifying Installation section does not apply for Pterodactyl."),(0,n.kt)("h2",o({},{id:"verifying-installation"}),"Verifying Installation"),(0,n.kt)("p",null,"Now that you have installed Java 17, run this command in your terminal to ensure the process was\nsuccessful."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"java -version\n")),(0,n.kt)("p",null,"The output should be similar to this. The important parts to look out for is that it starts with\n",(0,n.kt)("inlineCode",{parentName:"p"},"openjdk 17")," and contains ",(0,n.kt)("inlineCode",{parentName:"p"},"64-Bit")," in the last line. If the output you get is similar to\n",(0,n.kt)("inlineCode",{parentName:"p"},"java: command not found"),", try creating a new terminal session."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"openjdk 17 2021-09-14 LTS\nOpenJDK Runtime Environment Corretto-17.0.0.35.1 (build 17+35-LTS)\nOpenJDK 64-Bit Server VM Corretto-17.0.0.35.1 (build 17+35-LTS, mixed mode, sharing)\n")),(0,n.kt)("p",null,"If your installation has failed, do not hesitate to reach out in the ",(0,n.kt)("inlineCode",{parentName:"p"},"#paper-help")," channel of our\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://discord.gg/papermc"}),"Discord")," for support."))}u.isMDXComponent=!0},8350:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png"},8256:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"}}]);