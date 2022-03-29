"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9045],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(v,l(l({ref:t},p),{},{components:a})):n.createElement(v,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),r=a(7294),o=a(2389),l=a(5450),i=a(6010),s="tabItem_LplD";function u(e){var t,a,o,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),b=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,r.useState)(g),O=N[0],j=N[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=b[m];null!=T&&T!==O&&f.some((function(e){return e.value===T}))&&j(T)}var C=function(e){var t=e.currentTarget,a=x.indexOf(t),n=f[a].value;n!==O&&(E(t),j(n),null!=m&&w(m,n))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;a=x[r]||x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},v)},f.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},4586:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=(a(9877),a(8215),["components"]),i={title:"Installing or Updating Java",slug:"/java-install-update",description:"How to install or update to Java 17 on Linux (apt/rpm), Windows, or Mac.",toc_max_heading_level:5},s=void 0,u={unversionedId:"common/java-install",id:"common/java-install",title:"Installing or Updating Java",description:"How to install or update to Java 17 on Linux (apt/rpm), Windows, or Mac.",source:"@site/docs/common/java-install.md",sourceDirName:"common",slug:"/java-install-update",permalink:"/docs-previews/pull/9/java-install-update",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/common/java-install.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",frontMatter:{title:"Installing or Updating Java",slug:"/java-install-update",description:"How to install or update to Java 17 on Linux (apt/rpm), Windows, or Mac.",toc_max_heading_level:5},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs-previews/pull/9/waterfall/configuration"}},p={},c=[{value:"Linux",id:"linux",level:2},{value:"Ubuntu/Debian",id:"ubuntudebian",level:3},{value:"RPM-based",id:"rpm-based",level:3},{value:"DNF",id:"dnf",level:4},{value:"Zypper",id:"zypper",level:4},{value:"YUM",id:"yum",level:4},{value:"Windows 10 &amp; 11",id:"windows-10--11",level:2},{value:"macOS/OS X",id:"macosos-x",level:2},{value:"Pterodactyl",id:"pterodactyl",level:2},{value:"Verifying Installation",id:"verifying-installation",level:2}],d={toc:c};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Installing Java is a critical first step to using or developing plugins for Paper, Velocity, and\nWaterfall. This guide will walk you through the recommended installation steps for most major\nplatforms."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide focuses on Amazon's Corretto OpenJDK distribution. This is because it offers the best\ninstallation experience on the most platforms. Corretto is, however, not the only OpenJDK vendor to\nchoose from. Many alternatives exist such as ",(0,o.kt)("a",{parentName:"p",href:"https://adoptium.net/"},"Eclipse Adoptium"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.microsoft.com/openjdk"},"Microsoft")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.azul.com/downloads/?package=jdk"},"Azul Zulu"),". Note that the JDK Oracle distributes,\nwhile functionally identical, is ",(0,o.kt)("strong",{parentName:"p"},"not")," recommended due to an extremely unfriendly installer and\nprevious hostile licensing."))),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("h3",{id:"ubuntudebian"},"Ubuntu/Debian"),(0,o.kt)("p",null,"Installing Java 17 on Debian-based Linux distributions is very simple. First, ensure your system has\nall required tools to successfully install Java."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && sudo apt-get upgrade\nsudo apt-get install software-properties-common ca-certificates apt-transport-https curl\n")),(0,o.kt)("p",null,"Second, import the Amazon Corretto public key and apt repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://apt.corretto.aws/corretto.key | sudo apt-key add -\nsudo add-apt-repository 'deb https://apt.corretto.aws stable main'\n")),(0,o.kt)("p",null,"Then, install Java 17."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install -y java-17-amazon-corretto-jdk\n")),(0,o.kt)("p",null,"Proceed to ",(0,o.kt)("a",{parentName:"p",href:"#verifying-installation"},"verify your installation"),"."),(0,o.kt)("h3",{id:"rpm-based"},"RPM-based"),(0,o.kt)("p",null,"To install Java 17 on CentOS, RHEL, Fedora, openSUSE, SLES, or any other RPM-based Linux\ndistribution, execute the following commands depending on your package manager. Once you have\nfinished, precede to ",(0,o.kt)("a",{parentName:"p",href:"#verifying-installation"},"verify your installation"),"."),(0,o.kt)("h4",{id:"dnf"},"DNF"),(0,o.kt)("p",null,"DNF is used on Fedora, CentOS/RHEL 7+, and related distributions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rpm --import https://yum.corretto.aws/corretto.key\nsudo curl -Lo /etc/yum.repos.d/corretto.repo https://yum.corretto.aws/corretto.repo\nsudo dnf -y install java-17-amazon-corretto-devel\n")),(0,o.kt)("h4",{id:"zypper"},"Zypper"),(0,o.kt)("p",null,"Zypper is used on openSUSE, SLES, and related distributions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo zypper addrepo https://yum.corretto.aws/corretto.repo\nsudo zypper refresh\nsudo zypper install java-17-amazon-corretto-devel\n")),(0,o.kt)("h4",{id:"yum"},"YUM"),(0,o.kt)("p",null,"YUM is used on older releases of CentOS/RHEL, and excessively old releases of Fedora."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rpm --import https://yum.corretto.aws/corretto.key\nsudo curl -Lo /etc/yum.repos.d/corretto.repo https://yum.corretto.aws/corretto.repo\nsudo yum -y install java-17-amazon-corretto-devel\n")),(0,o.kt)("h2",{id:"windows-10--11"},"Windows 10 & 11"),(0,o.kt)("p",null,"If you're on Windows 10 or 11, installing Java is just like installing any other program. Download\nthe Amazon Corretto installer from\n",(0,o.kt)("a",{parentName:"p",href:"https://corretto.aws/downloads/latest/amazon-corretto-17-x64-windows-jdk.msi"},"their website"),"."),(0,o.kt)("p",null,'Once you have run the installer, it is safe to click "next" through the whole process. No additional\nbloatware or toolbars will be installed, and all the required features are enabled out of the box.'),(0,o.kt)("p",null,"Now, open a command prompt and precede to ",(0,o.kt)("a",{parentName:"p",href:"#verifying-installation"},"verify your installation"),"."),(0,o.kt)("h2",{id:"macosos-x"},"macOS/OS X"),(0,o.kt)("p",null,"If you're on macOS, the best way to manage Java installations is with a tool called\n",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),". Follow the instructions on their homepage to install it. Then, in your\nterminal run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install openjdk@17\n")),(0,o.kt)("p",null,"Once this command has completed, continue to ",(0,o.kt)("a",{parentName:"p",href:"#verifying-installation"},"verify your installation"),"."),(0,o.kt)("h2",{id:"pterodactyl"},"Pterodactyl"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"On Pterodactyl versions lower than ",(0,o.kt)("inlineCode",{parentName:"p"},"1.2.0"),", an administrator account is required to change the Java\nversion. These instructions will not apply."))),(0,o.kt)("p",null,"If you have started a Paper server with an incorrect Java version, Pterodactyl will automatically\nprompt you to update like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Pterodactyl Automatic Prompt",src:a(8853).Z,width:"1434",height:"527"})),(0,o.kt)("p",null,'If this does not show up for you, the Java version can be manually changed. Navigate to the\n"Startup" tab of your server, select ',(0,o.kt)("inlineCode",{parentName:"p"},"ghcr.io/pterodactyl/yolks:java_17"),' from the "Docker Image"\ndropdown as shown in the image below.'),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Pterodactyl Manual Java Version Change",src:a(7640).Z,width:"2448",height:"532"})),(0,o.kt)("p",null,"The Verifying Installation section does not apply for Pterodactyl."),(0,o.kt)("h2",{id:"verifying-installation"},"Verifying Installation"),(0,o.kt)("p",null,"Now that you have installed Java 17, run this command to ensure the process was successful."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"java -version\n")),(0,o.kt)("p",null,"The output should be similar to this. The important parts to look out for is that it starts with\n",(0,o.kt)("inlineCode",{parentName:"p"},"openjdk 17")," and contains ",(0,o.kt)("inlineCode",{parentName:"p"},"64-Bit")," in the last line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openjdk 17 2021-09-14 LTS\nOpenJDK Runtime Environment Corretto-17.0.0.35.1 (build 17+35-LTS)\nOpenJDK 64-Bit Server VM Corretto-17.0.0.35.1 (build 17+35-LTS, mixed mode, sharing)\n")),(0,o.kt)("p",null,"If your installation has failed, do not hesitate to reach out on our\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/papermc"},"Discord")," for support."))}m.isMDXComponent=!0},7640:function(e,t,a){t.Z=a.p+"assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png"},8853:function(e,t,a){t.Z=a.p+"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"}}]);