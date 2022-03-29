"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1964],{4907:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(6687);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8066:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return h},metadata:function(){return m},assets:function(){return f},toc:function(){return y},default:function(){return k}});var r=t(4907),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(o)for(var t of o(n))u.call(n,t)&&c(e,t,n[t]);return e};const d={slug:"/velocity/developers/scheduler-api"},h="Using the Scheduler",m={unversionedId:"velocity/developers/api/scheduler",id:"velocity/developers/api/scheduler",title:"Using the Scheduler",description:"The Velocity Scheduler lets you decide when and how your plugin tasks run, allowing fine control",source:"@site/docs/velocity/developers/api/scheduler.md",sourceDirName:"velocity/developers/api",slug:"/velocity/developers/scheduler-api",permalink:"/docs-previews/pull/31/velocity/developers/scheduler-api",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/api/scheduler.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646714966,formattedLastUpdatedAt:"3/8/2022",frontMatter:{slug:"/velocity/developers/scheduler-api"},sidebar:"docs",previous:{title:"The Command API",permalink:"/docs-previews/pull/31/velocity/developers/command-api"},next:{title:"Welcome to the Waterfall Wiki",permalink:"/docs-previews/pull/31/waterfall/"}},f={},y=[{value:"Running a delayed task",id:"running-a-delayed-task",level:2},{value:"Running a repeating task",id:"running-a-repeating-task",level:2},{value:"Running a task now",id:"running-a-task-now",level:2},{value:"Cancellation",id:"cancellation",level:2}],g={toc:y};function k(e){var n,t=e,{components:a}=t,c=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=p(p({},g),c),l(n,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"using-the-scheduler"}),"Using the Scheduler"),(0,r.kt)("p",null,"The Velocity Scheduler lets you decide when and how your plugin tasks run, allowing fine control\nover execution. On Velocity, there is no main thread. All tasks run using the Velocity Scheduler are\nthus run asynchronously."),(0,r.kt)("h2",p({},{id:"running-a-delayed-task"}),"Running a delayed task"),(0,r.kt)("p",null,"All scheduling works by using a ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskBuilder")," returned from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Scheduler"),". This fluent builder may\nbe chained to configure the details of the scheduling."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),"server.getScheduler()\n  .buildTask(plugin, () -> {\n    // do stuff here\n  })\n  .delay(2L, TimeUnit.SECONDS)\n  .schedule();\n")),(0,r.kt)("p",null,"Here, we are scheduling a task to run 2 seconds later. Velocity requires the instance of your\nplugin, ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," above. If you are scheduling a task from your main plugin class you may simply use\n",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,r.kt)("p",null,"Time arguments are specified as a ",(0,r.kt)("inlineCode",{parentName:"p"},"long")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.concurrent.TimeUnit"),". Using time units\nmakes scheduling delayed tasks more readable and allows for greater precision.\n",(0,r.kt)("inlineCode",{parentName:"p"},"2L, TimeUnit.SECONDS")," is far easier to understand than the ambiguous ",(0,r.kt)("inlineCode",{parentName:"p"},"2000L"),"."),(0,r.kt)("h2",p({},{id:"running-a-repeating-task"}),"Running a repeating task"),(0,r.kt)("p",null,"Creating a repeating task is similar to a delayed task, but you must also specify\n",(0,r.kt)("inlineCode",{parentName:"p"},"repeat(long, TimeUnit)"),". This example will repeat every 5 minutes."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),"server.getScheduler()\n  .buildTask(plugin, () -> {\n    // do stuff here\n  })\n  .repeat(5L, TimeUnit.MINUTES)\n  .schedule();\n")),(0,r.kt)("h2",p({},{id:"running-a-task-now"}),"Running a task now"),(0,r.kt)("p",null,"Tasks use the scheduler's cached thread pool for all execution, which reuses threads. To take\nadvantage of this thread pool for running async tasks which run now, simply omit calling the ",(0,r.kt)("em",{parentName:"p"},"delay"),"\nand ",(0,r.kt)("em",{parentName:"p"},"repeat")," methods of the TaskBuilder."),(0,r.kt)("h2",p({},{id:"cancellation"}),"Cancellation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"schedule()")," method returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"ScheduledTask"),", which may then be used to cancel the task\ninvolved via the ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel()")," method. Tasks cannot be uncancelled."),(0,r.kt)("p",null,"Additionally, ",(0,r.kt)("inlineCode",{parentName:"p"},"task.status()")," returns the current status of the task."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),"ScheduledTask task = server.getScheduler()\n  .buildTask(plugin, () -> {\n    // do stuff here\n  })\n  .repeat(5L, TimeUnit.MINUTES)\n  .schedule();\n// ...\ntask.cancel();\n// ...\nSystem.out.println(task.status());\n")))}k.isMDXComponent=!0}}]);