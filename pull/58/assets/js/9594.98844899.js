"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9594],{4907:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(6687);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),v=i,m=c["".concat(o,".").concat(v)]||c[v]||d[v]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});t(6687);var r=t(4907);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s={slug:"/velocity/developers/event-api"},l="Working With Events",o={unversionedId:"velocity/developers/api/event",id:"velocity/developers/api/event",title:"Working With Events",description:"Listening to events with Velocity's @Subscribe annotation is straightforward. You've already seen",source:"@site/docs/velocity/developers/api/event.md",sourceDirName:"velocity/developers/api",slug:"/velocity/developers/event-api",permalink:"/docs-previews/pull/58/velocity/developers/event-api",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/api/event.md",tags:[],version:"current",lastUpdatedBy:"4drian3d",lastUpdatedAt:1649079528,formattedLastUpdatedAt:"4/4/2022",frontMatter:{slug:"/velocity/developers/event-api"},sidebar:"docs",previous:{title:"API",permalink:"/docs-previews/pull/58/category/velocity/developers/api"},next:{title:"The Command API",permalink:"/docs-previews/pull/58/velocity/developers/command-api"}},p={},u=[{value:"Creating a listener method",id:"creating-a-listener-method",level:2},{value:"Orders",id:"orders",level:2},{value:"Registering listeners",id:"registering-listeners",level:2},{value:"Registering an object as a listener",id:"registering-an-object-as-a-listener",level:3},{value:"Registering a functional-style listener",id:"registering-a-functional-style-listener",level:3},{value:"Handling events asynchronously",id:"handling-events-asynchronously",level:2},{value:"Creating Events",id:"creating-events",level:2},{value:"Creating the Event Class",id:"creating-the-event-class",level:3},{value:"Firing the Event",id:"firing-the-event",level:3},{value:"Using ResultedEvent",id:"using-resultedevent",level:3}],d={toc:u};function c(e){var n=e.components,t=a(e,["components"]);return(0,r.kt)("wrapper",i({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"working-with-events"}),"Working With Events"),(0,r.kt)("p",null,"Listening to events with Velocity's ",(0,r.kt)("inlineCode",{parentName:"p"},"@Subscribe")," annotation is straightforward. You've already seen\none such listener, using the ProxyInitializeEvent in your main class. Additional events can be found\non the ",(0,r.kt)("a",i({parentName:"p"},{href:"https://jd.velocitypowered.com/3.0.0/"}),"Javadoc"),"."),(0,r.kt)("h2",i({},{id:"creating-a-listener-method"}),"Creating a listener method"),(0,r.kt)("p",null,"To listen to an event, mark the method with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Subscribe"),", like shown. This works similarly to\nannotation-driven event listening in other APIs you may be familiar with; it's the equivalent of\nBukkit's/Bungee's ",(0,r.kt)("inlineCode",{parentName:"p"},"@EventHandler")," and Sponge's ",(0,r.kt)("inlineCode",{parentName:"p"},"@Listener"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-java"}),"@Subscribe\npublic void onPlayerChat(PlayerChatEvent event) {\n    // do stuff\n}\n")),(0,r.kt)("div",i({},{className:"admonition admonition-tip alert alert--success"}),(0,r.kt)("div",i({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",i({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",i({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,r.kt)("path",i({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,r.kt)("div",i({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Note that the import is ",(0,r.kt)("inlineCode",{parentName:"p"},"com.velocitypowered.api.event.Subscribe")," and ",(0,r.kt)("em",{parentName:"p"},"not")," in\n",(0,r.kt)("inlineCode",{parentName:"p"},"com.google.common.eventbus"),"."))),(0,r.kt)("h2",i({},{id:"orders"}),"Orders"),(0,r.kt)("p",null,"Every listener has a ",(0,r.kt)("inlineCode",{parentName:"p"},"PostOrder"),". When an event is fired, the order in which listeners are invoked\nis defined by their ",(0,r.kt)("inlineCode",{parentName:"p"},"PostOrder"),". Listeners using ",(0,r.kt)("inlineCode",{parentName:"p"},"PostOrder.FIRST")," are called first, then EARLY,\nNORMAL, etc."),(0,r.kt)("p",null,"State the desired order in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Subscribe")," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-java"}),"@Subscribe(order = PostOrder.NORMAL)\npublic void onPlayerChat(PlayerChatEvent event) {\n    // do stuff\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NORMAL")," is the default value if you do not specify an order."),(0,r.kt)("h2",i({},{id:"registering-listeners"}),"Registering listeners"),(0,r.kt)("p",null,"Velocity automatically registers your main plugin class as an event listener. This is handy for\ninitialization and for simple plugins, but for more complex plugins, you will want to separate your\nevent handlers from the main plugin class. To do so, you will need to register with the EventManager\nany other listeners you have:"),(0,r.kt)("p",null,"The event system supports registering an object as a listener (allowing you to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@Subscribe")," to\nmark event handlers) or registering functional listeners."),(0,r.kt)("h3",i({},{id:"registering-an-object-as-a-listener"}),"Registering an object as a listener"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-java"}),"server.getEventManager().register(plugin, listener);\n")),(0,r.kt)("p",null,"Both parameters are ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),". The first argument is your plugin's object, and the second argument\nshould be the listener to register. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-java"}),'@Plugin(id = "myfirstplugin", name = "My Plugin", version = "0.1.0", dependencies = {@Dependency(id = "wonderplugin")})\npublic class VelocityTest {\n\n  private final ProxyServer server;\n  private final Logger logger;\n\n  @Inject\n  public VelocityTest(ProxyServer server, Logger logger) {\n    this.server = server;\n    this.logger = logger;\n  }\n\n  @Subscribe\n  public void onInitialize(ProxyInitializeEvent event) {\n    server.getEventManager().register(this, new MyListener());\n  }\n}\n\npublic class MyListener {\n\n  @Subscribe(order = PostOrder.EARLY)\n  public void onPlayerChat(PlayerChatEvent event) {\n    // do something here\n  }\n\n}\n')),(0,r.kt)("h3",i({},{id:"registering-a-functional-style-listener"}),"Registering a functional-style listener"),(0,r.kt)("p",null,"As an alternative to ",(0,r.kt)("inlineCode",{parentName:"p"},"@Subscribe"),", you can also use the functional ",(0,r.kt)("inlineCode",{parentName:"p"},"EventHandler")," interface and\nregister yours with ",(0,r.kt)("inlineCode",{parentName:"p"},"register(Object plugin, Class<E> eventClass, EventHandler<E> handler)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-java"}),"  server.getEventManager().register(this, PlayerChatEvent.class, event -> {\n      // do something here\n      return null;\n  });\n")),(0,r.kt)("h2",i({},{id:"handling-events-asynchronously"}),"Handling events asynchronously"),(0,r.kt)("p",null,"In Velocity 3.0.0, events can now be handled asynchronously. The event system allows a plugin to\npause sending an event to every listener, perform some unit of computation or I/O asynchronously,\nand then resume processing the event. All Velocity events have the ability to be processed\nasynchronously, however only some will explicitly wait for events to finish being fired before\ncontinuing."),(0,r.kt)("p",null,"For an annotation-based listener, all that is needed to process an event asynchronously is to either\nreturn an ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTask")," or add a second ",(0,r.kt)("inlineCode",{parentName:"p"},"Continuation")," parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-java"}),"  @Subscribe(order = PostOrder.EARLY)\n  public void onLogin(LoginEvent event, Continuation continuation) {\n    doSomeAsyncProcessing().addListener(continuation::resume, continuation::resumeWithException);\n  }\n\n  @Subscribe(order = PostOrder.EARLY)\n  public EventTask onPlayerChat(PlayerChatEvent event) {\n    if (mustFurtherProcess(event)) {\n      return EventTask.async(() => ...);\n    }\n    return null;\n  }\n")),(0,r.kt)("p",null,"A functional listener simply needs to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"AwaitingEventExecutor")," and return an ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTask"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-java"}),"  server.getEventManager().register(this, PlayerChatEvent.class, (AwaitingEventExecutor) event -> {\n    if (mustFurtherProcess(event)) {\n      return EventTask.async(() => ...);\n    }\n    return null;\n  });\n")),(0,r.kt)("p",null,"There are two types of event tasks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Async tasks")," simply run a unit of execution asynchronously. To get a basic event task use\n",(0,r.kt)("inlineCode",{parentName:"li"},"EventTask.async(Runnable)"),". Basic event tasks are the closest equivalent for Velocity 1.x.x event\nlisteners and asynchronous events in the Bukkit API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Continuation tasks")," provide the listener with a callback (known as a ",(0,r.kt)("inlineCode",{parentName:"li"},"Continuation"),") to resume\nevent processing when the (possibly asynchronous) work is completed. To get a continuation-based\nevent task, use ",(0,r.kt)("inlineCode",{parentName:"li"},"EventTask.withContinuation(Consumer<Continuation>)"),". Continuation-based tasks are\nthe closest equivalent for listeners that use BungeeCord ",(0,r.kt)("inlineCode",{parentName:"li"},"AsyncEvent")," intents, but have a slightly\ndifferent programming model in that each listener still runs sequentially, just that an individual\nlistener can defer passing control onto the next listener until it is done.")),(0,r.kt)("div",i({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",i({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",i({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",i({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",i({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,r.kt)("div",i({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"To retain compatibility with older versions of Velocity, Velocity 3.0.0 runs all event listeners\nasynchronously. This behavior will change in Polymer and will require you to explicitly provide an\nevent task (or to use continuations) if you need to perform some work asynchronously. All developers\nare urged to make the transition now."))),(0,r.kt)("h2",i({},{id:"creating-events"}),"Creating Events"),(0,r.kt)("p",null,"Creating events on Velocity is somewhat different than on other platforms. However, it is very\nsimilar for the most part."),(0,r.kt)("h3",i({},{id:"creating-the-event-class"}),"Creating the Event Class"),(0,r.kt)("p",null,"First we need to create a class for our event. In this tutorial we'll assume you're making a private\nmessaging plugin, and thus use a ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivateMessageEvent"),". Most of this part is boilerplate."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-java"}),"public class PrivateMessageEvent {\n\n  private final Player sender;\n  private final Player recipient;\n  private final String message;\n\n  public PrivateMessageEvent(Player sender, Player recipient, String message) {\n    this.sender = sender;\n    this.recipient = recipient;\n    this.message = message;\n  }\n\n  public Player sender() {\n    return sender;\n  }\n\n  public Player recipient() {\n    return recipient;\n  }\n\n  public String message() {\n    return message;\n  }\n\n  // toString, equals, and hashCode may be added as needed\n\n}\n")),(0,r.kt)("p",null,"You'll notice that your events don't need to extend or implement anything. They just work."),(0,r.kt)("h3",i({},{id:"firing-the-event"}),"Firing the Event"),(0,r.kt)("p",null,"To fire the event, you'll need to get the server's event manager and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fire")," method. Note\nthat this returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),", so if you want to continue logic after the event is handled\nby all listeners, use a callback:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-java"}),"server.getEventManager().fire(new PrivateMessageEvent(sender, recipient, message)).thenAccept((event) -> {\n  // event has finished firing\n  // do some logic dependent on the result\n});\n")),(0,r.kt)("h3",i({},{id:"using-resultedevent"}),"Using ResultedEvent"),(0,r.kt)("p",null,"Velocity uses the generalised ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultedEvent")," for events which have some sort of 'result'. The\nresult type of the event is defined by its generic type; for example.\n",(0,r.kt)("inlineCode",{parentName:"p"},"PrivateMessageEvent implements ResultedEvent<ResultType>"),"."),(0,r.kt)("p",null,"Some common result types are ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericResult"),", for simple allowed/denied results, and component\nresults, used for events where the result may be denied with an accompanying reason (such as in a\nlogin event)."),(0,r.kt)("p",null,"Using a general result is far more encompassing than ",(0,r.kt)("inlineCode",{parentName:"p"},"isCancelled/setCancelled")," methods you may be\nused to on other platforms, whose meaning is vague and limited to a simple boolean. In this example,\nwe'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericResult"),", so listeners will be able to mark our ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivateMessageEvent")," as either\nallowed or denied."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-java"}),"public class PrivateMessageEvent implements ResultedEvent<GenericResult> {\n\n  private final Player sender;\n  private final Player recipient;\n  private final String message;\n\n  private GenericResult result = GenericResult.allowed(); // Allowed by default\n\n  public PrivateMessageEvent(Player sender, Player recipient, String message) {\n    this.sender = sender;\n    this.recipient = recipient;\n    this.message = message;\n  }\n\n  public Player sender() {\n    return sender;\n  }\n\n  public Player recipient() {\n    return recipient;\n  }\n\n  public String message() {\n    return message;\n  }\n\n  @Override\n  public GenericResult result() {\n    return result;\n  }\n\n  @Override\n  public void setResult(GenericResult result) {\n    this.result = Objects.requireNonNull(result);\n  }\n\n}\n")),(0,r.kt)("p",null,"Per convention, the result of a ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultedEvent")," should never be null. Here, we assure that using\n",(0,r.kt)("inlineCode",{parentName:"p"},"Objects.requireNonNull"),"."),(0,r.kt)("p",null,"Listeners may 'deny' the event by using ",(0,r.kt)("inlineCode",{parentName:"p"},"event.setResult(GenericResult.denied())"),", and you may check\nthe result with ",(0,r.kt)("inlineCode",{parentName:"p"},"event.getResult()"),"."))}c.isMDXComponent=!0}}]);