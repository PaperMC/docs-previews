"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6850],{4907:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9234:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return b}});var r=n(9149),a=n(8332),o=n(6687),i=n(4907),l=n(3831),u=n(5304),p=n(6355),s="tabItem_fIDf";function c(e){var t,n,a,i=e.lazy,l=e.block,c=e.defaultValue,d=e.values,m=e.groupId,v=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,u.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=y[0])?void 0:a.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,u.UB)(),k=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,o.useState)(h),I=N[0],j=N[1],O=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=k[m];null!=D&&D!==I&&g.some((function(e){return e.value===D}))&&j(D)}var T=function(e){var t=e.currentTarget,n=O.indexOf(t),r=g[n].value;r!==I&&(E(t),j(r),null!=m&&w(m,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":l},v)},g.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:T,onClick:T},a,{className:(0,p.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(y.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function d(e){var t=(0,l.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}function m(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}var v=["components"],y={slug:"/velocity/developers/creating-your-first-plugin"},g="Creating Your First Plugin",f={unversionedId:"velocity/developers/getting-started/creating-your-first-plugin",id:"velocity/developers/getting-started/creating-your-first-plugin",title:"Creating Your First Plugin",description:"It is very simple to create a plugin for Velocity. This section will teach you how to setup your",source:"@site/docs/velocity/developers/getting-started/creating-your-first-plugin.md",sourceDirName:"velocity/developers/getting-started",slug:"/velocity/developers/creating-your-first-plugin",permalink:"/docs-previews/pull/33/velocity/developers/creating-your-first-plugin",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/getting-started/creating-your-first-plugin.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646714966,formattedLastUpdatedAt:"3/8/2022",frontMatter:{slug:"/velocity/developers/creating-your-first-plugin"},sidebar:"docs",previous:{title:"Developer's Guide",permalink:"/docs-previews/pull/33/velocity/developers/"},next:{title:"Velocity Plugin Basics",permalink:"/docs-previews/pull/33/velocity/developers/api-basics"}},h={},b=[{value:"Before you continue...",id:"before-you-continue",level:2},{value:"Set up your environment",id:"set-up-your-environment",level:2},{value:"Creating the project in your IDE",id:"creating-the-project-in-your-ide",level:2},{value:"I know how to do this. Give me what I need!",id:"i-know-how-to-do-this-give-me-what-i-need",level:2},{value:"Maven repository",id:"maven-repository",level:3},{value:"Dependency",id:"dependency",level:3},{value:"Javadocs",id:"javadocs",level:3},{value:"Set up your build system",id:"set-up-your-build-system",level:2},{value:"Setting up the dependency",id:"setting-up-the-dependency",level:3}],k={toc:b};function w(e){var t=e.components,n=(0,a.Z)(e,v);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-your-first-plugin"},"Creating Your First Plugin"),(0,i.kt)("p",null,"It is very simple to create a plugin for Velocity. This section will teach you how to setup your\nIDE, your plugin identifiers, and give you an introduction to the basics of the Velocity API."),(0,i.kt)("h2",{id:"before-you-continue"},"Before you continue..."),(0,i.kt)("p",null,"You will need proficiency in the Java programming language. If you don't know Java yet, we strongly\nrecommend you learn some basic Java before you continue."),(0,i.kt)("h2",{id:"set-up-your-environment"},"Set up your environment"),(0,i.kt)("p",null,"You're going to need the ",(0,i.kt)("a",{parentName:"p",href:"/docs-previews/pull/33/java-install-update"},"JDK")," and an IDE. If you don't have an\nIDE, IntelliJ IDEA is recommended."),(0,i.kt)("h2",{id:"creating-the-project-in-your-ide"},"Creating the project in your IDE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open your IDE"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create New Project")," or the equivalent"),(0,i.kt)("li",{parentName:"ul"},"Select either ",(0,i.kt)("inlineCode",{parentName:"li"},"Gradle")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Maven")),(0,i.kt)("li",{parentName:"ul"},"Make sure your ",(0,i.kt)("strong",{parentName:"li"},"Project JDK")," is Java 8 or later"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Finish")," the dialog and open the project.")),(0,i.kt)("p",null,"Now we have created our project, we need configure our build system."),(0,i.kt)("h2",{id:"i-know-how-to-do-this-give-me-what-i-need"},"I know how to do this. Give me what I need!"),(0,i.kt)("h3",{id:"maven-repository"},"Maven repository"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"papermc")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://papermc.io/repo/repository/maven-public/"))))),(0,i.kt)("h3",{id:"dependency"},"Dependency"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Group ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Artifact ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"com.velocitypowered")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"velocity-api")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3.1.1"))))),(0,i.kt)("h3",{id:"javadocs"},"Javadocs"),(0,i.kt)("p",null,"Javadocs are available at ",(0,i.kt)("a",{parentName:"p",href:"https://jd.velocitypowered.com/3.0.0"},"jd.velocitypowered.com/3.0.0"),"."),(0,i.kt)("h2",{id:"set-up-your-build-system"},"Set up your build system"),(0,i.kt)("p",null,"You will need to setup a build system before you continue. While it is possible to write Velocity\nplugins without one, having a build system will make your life a lot less difficult."),(0,i.kt)("p",null,"How to set up a build system is outside the scope of this page, but you can look at your build\nsystem's documentation (",(0,i.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/userguide.html"},"Gradle")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/getting-started/index.html"},"Maven"),") for assistance."),(0,i.kt)("h3",{id:"setting-up-the-dependency"},"Setting up the dependency"),(0,i.kt)(d,{groupId:"author-front-matter",mdxType:"Tabs"},(0,i.kt)(m,{value:"maven",label:"Maven POM",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'name="pom.xml"',name:'"pom.xml"'},"<project>\n    <repositories>\n        <repository>\n            <id>papermc</id>\n            <url>https://papermc.io/repo/repository/maven-public/</url>\n        </repository>\n    </repositories>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.velocitypowered</groupId>\n            <artifactId>velocity-api</artifactId>\n            <version>3.1.1</version>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n</project>\n"))),(0,i.kt)(m,{value:"gradle-kotlin",label:"Gradle Kotlin DSL",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'name="build.gradle.kts"',name:'"build.gradle.kts"'},'repositories {\n    maven {\n        name = "papermc"\n        url = uri("https://papermc.io/repo/repository/maven-public/")\n    }\n}\n\ndependencies {\n    compile("com.velocitypowered:velocity-api:3.1.1")\n    annotationProcessor("com.velocitypowered:velocity-api:3.1.1")\n}\n'))),(0,i.kt)(m,{value:"gradle-groovy",label:"Gradle Groovy DSL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'name="build.gradle"',name:'"build.gradle"'},"repositories {\n    maven {\n        name 'papermc'\n        url 'https://papermc.io/repo/repository/maven-public/'\n    }\n}\n\ndependencies {\n    compile 'com.velocitypowered:velocity-api:3.1.1'\n    annotationProcessor 'com.velocitypowered:velocity-api:3.1.1'\n}\n")))))}w.isMDXComponent=!0}}]);