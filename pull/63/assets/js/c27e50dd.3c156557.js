"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&p(e,n,t[n]);return e};const d={slug:"/security"},m="Securing Your Servers",y={unversionedId:"admin/how-to/security",id:"admin/how-to/security",title:"Securing Your Servers",description:"It is vital that you secure your backend servers. As part of setting up Velocity, you will put your",source:"@site/docs/velocity/admin/how-to/security.md",sourceDirName:"admin/how-to",slug:"/security",permalink:"/velocity/security",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/admin/how-to/security.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1649618994,formattedLastUpdatedAt:"4/10/2022",frontMatter:{slug:"/security"},sidebar:"primary",previous:{title:"How-to Guides",permalink:"/velocity/cat/admin/how-to-guides"},next:{title:"Tuning Velocity",permalink:"/velocity/tuning"}},h={},v=[{value:"Operating System Firewalls",id:"operating-system-firewalls",level:2},{value:"Velocity Modern Forwarding",id:"velocity-modern-forwarding",level:2},{value:"Binding To <code>localhost</code>",id:"binding-to-localhost",level:2},{value:"Using an Encrypted Tunnel",id:"using-an-encrypted-tunnel",level:2},{value:"IP Whitelisting Plugins",id:"ip-whitelisting-plugins",level:2},{value:"Other Important Security Advice",id:"other-important-security-advice",level:2}],f={toc:v};function g(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},f),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"securing-your-servers"}),"Securing Your Servers"),(0,r.kt)("p",null,"It is vital that you secure your backend servers. As part of setting up Velocity, you will put your\nserver into offline mode, which means in theory, someone could impersonate any player on your\nserver. This is extremely dangerous, so it is important to make sure only the proxy can connect to\nyour servers."),(0,r.kt)("p",null,"This guide will explore the various options for securing your backend servers so only your proxy can\nconnect to them. Note that this is an ",(0,r.kt)("em",{parentName:"p"},"exploration")," of options, aiming to review the various options\nand give you advantages and disadvantages to them so you can make an informed decision."),(0,r.kt)("p",null,"This list is not in any particular order, and almost all of these methods can be combined as needed."),(0,r.kt)("h2",c({},{id:"operating-system-firewalls"}),"Operating System Firewalls"),(0,r.kt)("p",null,"When properly configured, using the firewall facilities provided by your server's operating system\nis a highly effective way to protect your servers. The Velocity project ",(0,r.kt)("strong",{parentName:"p"},"strongly recommends the\nuse of a firewall"),"."),(0,r.kt)("p",null,"Instructions for your operating system may vary. Solutions for major server OSes include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows: Windows Firewall"),(0,r.kt)("li",{parentName:"ul"},"Linux: iptables, nftables")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advantages"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fool-proof if you do not give untrusted servers access to your servers"),(0,r.kt)("li",{parentName:"ul"},"Does not require any extra Minecraft server configuration"),(0,r.kt)("li",{parentName:"ul"},"Part of good system hardening advice for any operating system")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disadvantages"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tricky first-time setup"),(0,r.kt)("li",{parentName:"ul"},"May be difficult to use with multiple proxies"),(0,r.kt)("li",{parentName:"ul"},"Firewall configuration must be kept in sync with new servers and proxies"),(0,r.kt)("li",{parentName:"ul"},"Not viable on a shared host")),(0,r.kt)("h2",c({},{id:"velocity-modern-forwarding"}),"Velocity Modern Forwarding"),(0,r.kt)("p",null,"If your server only supports Minecraft 1.13 and above, Velocity's modern forwarding can forward\nplayer information to your servers and provide a second layer of protection against someone trying\nto impersonate as your proxy."),(0,r.kt)("div",c({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,r.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Velocity modern forwarding is not a replacement for a firewall. We strongly recommend using a\nfirewall with any Minecraft proxy setup."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advantages"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get player info forwarding for free"),(0,r.kt)("li",{parentName:"ul"},"Secure on a shared host, provided the host has implemented proper protections"),(0,r.kt)("li",{parentName:"ul"},"Works if you host your server on multiple physical servers")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disadvantages"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only works for Minecraft 1.13 and above"),(0,r.kt)("li",{parentName:"ul"},"Requires Paper 1.13 or above, or FabricProxy-Lite if you use Fabric"),(0,r.kt)("li",{parentName:"ul"},"Relies on the forwarding secret being kept secret")),(0,r.kt)("h2",c({},{id:"binding-to-localhost"}),"Binding To ",(0,r.kt)("inlineCode",{parentName:"h2"},"localhost")),(0,r.kt)("p",null,"If you are hosting your proxy on the same physical computer as your other servers (and nobody else\nis hosting servers on them), binding your servers to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," is a very simple way of protecting\nthem from getting connected to by anything other than the proxy."),(0,r.kt)("p",null,"For each server, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"server.properties")," file. Find the line that starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"server-ip")," and\nchange the line to ",(0,r.kt)("inlineCode",{parentName:"p"},"server-ip=127.0.0.1"),". Save the file and restart the server."),(0,r.kt)("p",null,"Afterwards, open your ",(0,r.kt)("inlineCode",{parentName:"p"},"velocity.toml")," file and ensure all the servers are pointing to\n",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:<port>"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advantages"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trivial setup compared to other methods discussed"),(0,r.kt)("li",{parentName:"ul"},"Fool-proof if you do not give untrusted users access to your server")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disadvantages"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setup must be reversed (and an alternate method used) if you move any of the servers to a\ndifferent physical server ( such that the proxy and the server are not on the same physical\nserver)"),(0,r.kt)("li",{parentName:"ul"},"Not viable on a shared host")),(0,r.kt)("h2",c({},{id:"using-an-encrypted-tunnel"}),"Using an Encrypted Tunnel"),(0,r.kt)("p",null,'This is a variation on "Binding To ',(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),'", but instead of hosting all your servers on a single\nphysical server, you will set up an encrypted tunnel between each of your servers, and make sure the\nserver only listens for incoming connections from the tunnel. There are many different solutions,\nranging from VPN solutions such as ',(0,r.kt)("a",c({parentName:"p"},{href:"https://www.wireguard.com"}),"WireGuard"),",\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://openvpn.net/"}),"OpenVPN"),", and ",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.tinc-vpn.org/"}),"tinc")," to encrypted tunnels such as\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.tarsnap.com/spiped.html"}),"spiped"),". This guide will not go into details of how to set up\neach of these solutions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advantages"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Encrypts traffic between your proxy and your servers while ensuring only authorized clients can\nconnect to your servers")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disadvantages"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Very complex setup"),(0,r.kt)("li",{parentName:"ul"},"Impossible to use on a shared host")),(0,r.kt)("h2",c({},{id:"ip-whitelisting-plugins"}),"IP Whitelisting Plugins"),(0,r.kt)("p",null,"As a last line of defense, you can choose to restrict logins to users on an IP whitelist using a\nplugin like ",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.spigotmc.org/resources/ipwhitelist.61/"}),"IPWhitelist"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advantages"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"May be your only solution if none of the other solutions will work (especially on a shared host)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disadvantages"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vulnerable to attack if the attacker can get a server on the same node as your proxy is on")),(0,r.kt)("h2",c({},{id:"other-important-security-advice"}),"Other Important Security Advice"),(0,r.kt)("p",null,"This common-sense general advice goes without saying:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Keep frequent backups of your server"),(0,r.kt)("li",{parentName:"ul"},"Set up a firewall on your server"),(0,r.kt)("li",{parentName:"ul"},"Run your servers as an unprivileged user (this means no ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo")," access or running as ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," for\nLinux users!)"),(0,r.kt)("li",{parentName:"ul"},"Update Velocity, your Minecraft server and server plugins, and your server's operating system\nfrequently"),(0,r.kt)("li",{parentName:"ul"},"Use strong passwords"),(0,r.kt)("li",{parentName:"ul"},"Carefully think about the potential impacts of installing any plugins or software before actually\ndoing so"),(0,r.kt)("li",{parentName:"ul"},"Secure any and all other services you may be running on your server"),(0,r.kt)("li",{parentName:"ul"},"Follow all system hardening advice for your operating system")),(0,r.kt)("p",null,'We will not provide a full treatment to the advice given above, so please do some research of your\nown. Your setup will vary - there is no "one size fits all" advice we can give other than these\ngeneral guidelines.'))}g.isMDXComponent=!0}}]);