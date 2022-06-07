"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7487],{4907:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,v=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>O,default:()=>T,frontMatter:()=>N,metadata:()=>j,toc:()=>E});var r=n(4907),a=n(6687),o=n(3421),i=n(6576),l=n(4296),u=n(6092),p=n(6355);const c="tabList_gInQ",s="tabItem_u9Yf";function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(u){l=!0,a=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e){var t,n,r,o=e.lazy,d=e.block,y=e.defaultValue,f=e.values,g=e.groupId,h=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))})),k=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'.concat(w.map((function(e){return e.value})).join(", "),'" found in <Tabs>. Every value needs to be unique.'));var N=null===y?y:null!==(r=null!=y?y:null===(t=b.find((function(e){return e.props.default})))||void 0===t?void 0:t.props.value)&&void 0!==r?r:null===(n=b[0])||void 0===n?void 0:n.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(N,'" but none of its children has the corresponding value. Available values are: ').concat(k.map((function(e){return e.value})).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));var O=(0,l.U)(),j=O.tabGroupChoices,I=O.setTabGroupChoices,E=v((0,a.useState)(N),2),P=E[0],T=E[1],C=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var x=j[g];null!=x&&x!==P&&k.some((function(e){return e.value===x}))&&T(x)}var S=function(e){var t=e.currentTarget,n=C.indexOf(t),r=k[n].value;r!==P&&(D(t),T(r),null!=g&&I(g,r))},A=function(e){var t=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;t=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;t=C[r]||C[C.length-1]}null==t||t.focus()};return a.createElement("div",{className:(0,p.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":d},h)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",m({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return C.push(e)},onKeyDown:A,onFocus:S,onClick:S},r,{className:(0,p.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function f(e){var t=(0,o.Z)();return a.createElement(y,m({key:String(t)},e))}const g="tabItem_xY2Y";function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function b(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",h({role:"tabpanel",className:(0,p.Z)(g,r)},{hidden:n}),t)}function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N={slug:"/velocity/developers/creating-your-first-plugin"},O="Creating Your First Plugin",j={unversionedId:"velocity/developers/getting-started/creating-your-first-plugin",id:"velocity/developers/getting-started/creating-your-first-plugin",title:"Creating Your First Plugin",description:"It is very simple to create a plugin for Velocity. This section will teach you how to setup your",source:"@site/docs/velocity/developers/getting-started/creating-your-first-plugin.md",sourceDirName:"velocity/developers/getting-started",slug:"/velocity/developers/creating-your-first-plugin",permalink:"/docs-previews/pull/57/velocity/developers/creating-your-first-plugin",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/getting-started/creating-your-first-plugin.md",tags:[],version:"current",lastUpdatedBy:"Riley Park",lastUpdatedAt:1653042583,formattedLastUpdatedAt:"5/20/2022",frontMatter:{slug:"/velocity/developers/creating-your-first-plugin"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs-previews/pull/57/category/velocity/developers/getting-started"},next:{title:"Velocity Plugin Basics",permalink:"/docs-previews/pull/57/velocity/developers/api-basics"}},I={},E=[{value:"Before you continue...",id:"before-you-continue",level:2},{value:"Set up your environment",id:"set-up-your-environment",level:2},{value:"Creating the project in your IDE",id:"creating-the-project-in-your-ide",level:2},{value:"I know how to do this. Give me what I need!",id:"i-know-how-to-do-this-give-me-what-i-need",level:2},{value:"Maven repository",id:"maven-repository",level:3},{value:"Dependency",id:"dependency",level:3},{value:"Javadocs",id:"javadocs",level:3},{value:"Set up your build system",id:"set-up-your-build-system",level:2},{value:"Setting up the dependency",id:"setting-up-the-dependency",level:3}],P={toc:E};function T(e){var t=e.components,n=w(e,["components"]);return(0,r.kt)("wrapper",k({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",k({},{id:"creating-your-first-plugin"}),"Creating Your First Plugin"),(0,r.kt)("p",null,"It is very simple to create a plugin for Velocity. This section will teach you how to setup your\nIDE, your plugin identifiers, and give you an introduction to the basics of the Velocity API."),(0,r.kt)("h2",k({},{id:"before-you-continue"}),"Before you continue..."),(0,r.kt)("p",null,"You will need proficiency in the Java programming language. If you don't know Java yet, we strongly\nrecommend you learn some basic Java before you continue."),(0,r.kt)("h2",k({},{id:"set-up-your-environment"}),"Set up your environment"),(0,r.kt)("p",null,"You're going to need the ",(0,r.kt)("a",k({parentName:"p"},{href:"/docs-previews/pull/57/java-install-update"}),"JDK")," and an IDE. If you don't have an\nIDE, IntelliJ IDEA is recommended."),(0,r.kt)("h2",k({},{id:"creating-the-project-in-your-ide"}),"Creating the project in your IDE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open your IDE"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create New Project")," or the equivalent"),(0,r.kt)("li",{parentName:"ul"},"Select either ",(0,r.kt)("inlineCode",{parentName:"li"},"Gradle")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Maven")),(0,r.kt)("li",{parentName:"ul"},"Make sure your ",(0,r.kt)("strong",{parentName:"li"},"Project JDK")," is Java 8 or later"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Finish")," the dialog and open the project.")),(0,r.kt)("p",null,"Now we have created our project, we need configure our build system."),(0,r.kt)("h2",k({},{id:"i-know-how-to-do-this-give-me-what-i-need"}),"I know how to do this. Give me what I need!"),(0,r.kt)("h3",k({},{id:"maven-repository"}),"Maven repository"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"papermc")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"https://repo.papermc.io/repository/maven-public/"))))),(0,r.kt)("h3",k({},{id:"dependency"}),"Dependency"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"Group ID"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"Artifact ID"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"com.velocitypowered")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"velocity-api")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"3.1.1"))))),(0,r.kt)("h3",k({},{id:"javadocs"}),"Javadocs"),(0,r.kt)("p",null,"Javadocs are available at ",(0,r.kt)("a",k({parentName:"p"},{href:"https://jd.velocitypowered.com/3.0.0"}),"jd.velocitypowered.com/3.0.0"),"."),(0,r.kt)("h2",k({},{id:"set-up-your-build-system"}),"Set up your build system"),(0,r.kt)("p",null,"You will need to setup a build system before you continue. While it is possible to write Velocity\nplugins without one, having a build system will make your life a lot less difficult."),(0,r.kt)("p",null,"How to set up a build system is outside the scope of this page, but you can look at your build\nsystem's documentation (",(0,r.kt)("a",k({parentName:"p"},{href:"https://docs.gradle.org/current/userguide/userguide.html"}),"Gradle")," or\n",(0,r.kt)("a",k({parentName:"p"},{href:"https://maven.apache.org/guides/getting-started/index.html"}),"Maven"),") for assistance."),(0,r.kt)("h3",k({},{id:"setting-up-the-dependency"}),"Setting up the dependency"),(0,r.kt)(f,{groupId:"author-front-matter",mdxType:"Tabs"},(0,r.kt)(b,{value:"maven",label:"Maven POM",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-xml",metastring:'name="pom.xml"',name:'"pom.xml"'}),"<project>\n    <repositories>\n        <repository>\n            <id>papermc</id>\n            <url>https://repo.papermc.io/repository/maven-public/</url>\n        </repository>\n    </repositories>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.velocitypowered</groupId>\n            <artifactId>velocity-api</artifactId>\n            <version>3.1.1</version>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n</project>\n"))),(0,r.kt)(b,{value:"gradle-kotlin",label:"Gradle Kotlin DSL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-kotlin",metastring:'name="build.gradle.kts"',name:'"build.gradle.kts"'}),'repositories {\n    maven {\n        name = "papermc"\n        url = uri("https://repo.papermc.io/repository/maven-public/")\n    }\n}\n\ndependencies {\n    compile("com.velocitypowered:velocity-api:3.1.1")\n    annotationProcessor("com.velocitypowered:velocity-api:3.1.1")\n}\n'))),(0,r.kt)(b,{value:"gradle-groovy",label:"Gradle Groovy DSL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-groovy",metastring:'name="build.gradle"',name:'"build.gradle"'}),"repositories {\n    maven {\n        name 'papermc'\n        url 'https://repo.papermc.io/repository/maven-public/'\n    }\n}\n\ndependencies {\n    compile 'com.velocitypowered:velocity-api:3.1.1'\n    annotationProcessor 'com.velocitypowered:velocity-api:3.1.1'\n}\n")))))}T.isMDXComponent=!0}}]);