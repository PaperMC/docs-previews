"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1572],{4907:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,v=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>b,default:()=>j,frontMatter:()=>h,metadata:()=>k,toc:()=>N});var r=n(6687),a=n(4907),o=n(8812),i=n(4364),l=n(6355);const u="tabItem_fIDf";function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(u){l=!0,a=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){var t,n,a,o=e.lazy,p=e.block,d=e.defaultValue,m=e.values,v=e.groupId,y=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))})),g=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'.concat(h.map((function(e){return e.value})).join(", "),'" found in <Tabs>. Every value needs to be unique.'));var b=null===d?d:null!==(a=null!=d?d:null===(t=f.find((function(e){return e.props.default})))||void 0===t?void 0:t.props.value)&&void 0!==a?a:null===(n=f[0])||void 0===n?void 0:n.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(b,'" but none of its children has the corresponding value. Available values are: ').concat(g.map((function(e){return e.value})).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));var k=(0,i.UB)(),w=k.tabGroupChoices,N=k.setTabGroupChoices,O=s((0,r.useState)(b),2),j=O[0],I=O[1],E=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=w[v];null!=P&&P!==j&&g.some((function(e){return e.value===P}))&&I(P)}var C=function(e){var t=e.currentTarget,n=E.indexOf(t),r=g[n].value;r!==j&&(T(t),I(r),null!=v&&N(v,r))},D=function(e){var t=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;t=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},y)},g.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",c({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:C,onClick:C},a,{className:(0,l.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,c({key:String(t)},e))}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function y(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",v({role:"tabpanel"},{hidden:n,className:a}),t)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={slug:"/velocity/developers/creating-your-first-plugin"},b="Creating Your First Plugin",k={unversionedId:"dev/velocity/getting-started/creating-your-first-plugin",id:"dev/velocity/getting-started/creating-your-first-plugin",title:"Creating Your First Plugin",description:"It is very simple to create a plugin for Velocity. This section will teach you how to setup your",source:"@site/docs/dev/velocity/getting-started/creating-your-first-plugin.md",sourceDirName:"dev/velocity/getting-started",slug:"/velocity/developers/creating-your-first-plugin",permalink:"/docs-previews/pull/50/velocity/developers/creating-your-first-plugin",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/dev/velocity/getting-started/creating-your-first-plugin.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1649611163,formattedLastUpdatedAt:"4/10/2022",frontMatter:{slug:"/velocity/developers/creating-your-first-plugin"},sidebar:"dev",previous:{title:"Getting Started",permalink:"/docs-previews/pull/50/category/dev/velocity/getting-started"},next:{title:"Velocity Plugin Basics",permalink:"/docs-previews/pull/50/velocity/developers/api-basics"}},w={},N=[{value:"Before you continue...",id:"before-you-continue",level:2},{value:"Set up your environment",id:"set-up-your-environment",level:2},{value:"Creating the project in your IDE",id:"creating-the-project-in-your-ide",level:2},{value:"I know how to do this. Give me what I need!",id:"i-know-how-to-do-this-give-me-what-i-need",level:2},{value:"Maven repository",id:"maven-repository",level:3},{value:"Dependency",id:"dependency",level:3},{value:"Javadocs",id:"javadocs",level:3},{value:"Set up your build system",id:"set-up-your-build-system",level:2},{value:"Setting up the dependency",id:"setting-up-the-dependency",level:3}],O={toc:N};function j(e){var t=e.components,n=g(e,["components"]);return(0,a.kt)("wrapper",f({},O,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",f({},{id:"creating-your-first-plugin"}),"Creating Your First Plugin"),(0,a.kt)("p",null,"It is very simple to create a plugin for Velocity. This section will teach you how to setup your\nIDE, your plugin identifiers, and give you an introduction to the basics of the Velocity API."),(0,a.kt)("h2",f({},{id:"before-you-continue"}),"Before you continue..."),(0,a.kt)("p",null,"You will need proficiency in the Java programming language. If you don't know Java yet, we strongly\nrecommend you learn some basic Java before you continue."),(0,a.kt)("h2",f({},{id:"set-up-your-environment"}),"Set up your environment"),(0,a.kt)("p",null,"You're going to need the ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs-previews/pull/50/java-install-update"}),"JDK")," and an IDE. If you don't have an\nIDE, IntelliJ IDEA is recommended."),(0,a.kt)("h2",f({},{id:"creating-the-project-in-your-ide"}),"Creating the project in your IDE"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open your IDE"),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create New Project")," or the equivalent"),(0,a.kt)("li",{parentName:"ul"},"Select either ",(0,a.kt)("inlineCode",{parentName:"li"},"Gradle")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Maven")),(0,a.kt)("li",{parentName:"ul"},"Make sure your ",(0,a.kt)("strong",{parentName:"li"},"Project JDK")," is Java 8 or later"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Finish")," the dialog and open the project.")),(0,a.kt)("p",null,"Now we have created our project, we need configure our build system."),(0,a.kt)("h2",f({},{id:"i-know-how-to-do-this-give-me-what-i-need"}),"I know how to do this. Give me what I need!"),(0,a.kt)("h3",f({},{id:"maven-repository"}),"Maven repository"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",f({parentName:"tr"},{align:null}),"URL"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"papermc")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"https://papermc.io/repo/repository/maven-public/"))))),(0,a.kt)("h3",f({},{id:"dependency"}),"Dependency"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Group ID"),(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Artifact ID"),(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"com.velocitypowered")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"velocity-api")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"3.1.1"))))),(0,a.kt)("h3",f({},{id:"javadocs"}),"Javadocs"),(0,a.kt)("p",null,"Javadocs are available at ",(0,a.kt)("a",f({parentName:"p"},{href:"https://jd.velocitypowered.com/3.0.0"}),"jd.velocitypowered.com/3.0.0"),"."),(0,a.kt)("h2",f({},{id:"set-up-your-build-system"}),"Set up your build system"),(0,a.kt)("p",null,"You will need to setup a build system before you continue. While it is possible to write Velocity\nplugins without one, having a build system will make your life a lot less difficult."),(0,a.kt)("p",null,"How to set up a build system is outside the scope of this page, but you can look at your build\nsystem's documentation (",(0,a.kt)("a",f({parentName:"p"},{href:"https://docs.gradle.org/current/userguide/userguide.html"}),"Gradle")," or\n",(0,a.kt)("a",f({parentName:"p"},{href:"https://maven.apache.org/guides/getting-started/index.html"}),"Maven"),") for assistance."),(0,a.kt)("h3",f({},{id:"setting-up-the-dependency"}),"Setting up the dependency"),(0,a.kt)(m,{groupId:"author-front-matter",mdxType:"Tabs"},(0,a.kt)(y,{value:"maven",label:"Maven POM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-xml",metastring:'name="pom.xml"',name:'"pom.xml"'}),"<project>\n    <repositories>\n        <repository>\n            <id>papermc</id>\n            <url>https://papermc.io/repo/repository/maven-public/</url>\n        </repository>\n    </repositories>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.velocitypowered</groupId>\n            <artifactId>velocity-api</artifactId>\n            <version>3.1.1</version>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n</project>\n"))),(0,a.kt)(y,{value:"gradle-kotlin",label:"Gradle Kotlin DSL",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-kotlin",metastring:'name="build.gradle.kts"',name:'"build.gradle.kts"'}),'repositories {\n    maven {\n        name = "papermc"\n        url = uri("https://papermc.io/repo/repository/maven-public/")\n    }\n}\n\ndependencies {\n    compile("com.velocitypowered:velocity-api:3.1.1")\n    annotationProcessor("com.velocitypowered:velocity-api:3.1.1")\n}\n'))),(0,a.kt)(y,{value:"gradle-groovy",label:"Gradle Groovy DSL",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-groovy",metastring:'name="build.gradle"',name:'"build.gradle"'}),"repositories {\n    maven {\n        name 'papermc'\n        url 'https://papermc.io/repo/repository/maven-public/'\n    }\n}\n\ndependencies {\n    compile 'com.velocitypowered:velocity-api:3.1.1'\n    annotationProcessor 'com.velocitypowered:velocity-api:3.1.1'\n}\n")))))}j.isMDXComponent=!0}}]);