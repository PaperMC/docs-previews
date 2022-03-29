"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3211],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),u=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),v=r,m=d["".concat(o,".").concat(v)]||d[v]||c[v]||a;return t?i.createElement(m,s(s({ref:n},p),{},{components:t})):i.createElement(m,s({ref:n},p))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1406:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return v}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],l={},o="Working With Events",u={unversionedId:"velocity/developers/event-api",id:"velocity/developers/event-api",title:"Working With Events",description:"Listening to events with Velocity's @Subscribe annotation is straightforward. You've already seen",source:"@site/docs/velocity/developers/event-api.md",sourceDirName:"velocity/developers",slug:"/velocity/developers/event-api",permalink:"/pull/docs-previews/pull/9/velocity/developers/event-api",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/event-api.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",frontMatter:{},sidebar:"docs",previous:{title:"Velocity Plugin Basics",permalink:"/pull/docs-previews/pull/9/velocity/developers/api-basics"},next:{title:"The Command API",permalink:"/pull/docs-previews/pull/9/velocity/developers/command-api"}},p={},c=[{value:"Creating a listener method",id:"creating-a-listener-method",level:2},{value:"Orders",id:"orders",level:2},{value:"Registering listeners",id:"registering-listeners",level:2},{value:"Registering an object as a listener",id:"registering-an-object-as-a-listener",level:3},{value:"Registering a functional-style listener",id:"registering-a-functional-style-listener",level:3},{value:"Handling events asynchronously",id:"handling-events-asynchronously",level:2},{value:"Creating Events",id:"creating-events",level:2},{value:"Creating the Event Class",id:"creating-the-event-class",level:3},{value:"Firing the Event",id:"firing-the-event",level:3},{value:"Using ResultedEvent",id:"using-resultedevent",level:3}],d={toc:c};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-events"},"Working With Events"),(0,a.kt)("p",null,"Listening to events with Velocity's ",(0,a.kt)("inlineCode",{parentName:"p"},"@Subscribe")," annotation is straightforward. You've already seen\none such listener, using the ProxyInitializeEvent in your main class. Additional events can be found\non the ",(0,a.kt)("a",{parentName:"p",href:"https://jd.velocitypowered.com/3.0.0/"},"Javadoc"),"."),(0,a.kt)("h2",{id:"creating-a-listener-method"},"Creating a listener method"),(0,a.kt)("p",null,"To listen to an event, mark the method with ",(0,a.kt)("inlineCode",{parentName:"p"},"@Subscribe"),", like shown. This works similarly to\nannotation-driven event listening in other APIs you may be familiar with; it's the equivalent of\nBukkit's/Bungee's ",(0,a.kt)("inlineCode",{parentName:"p"},"@EventHandler")," and Sponge's ",(0,a.kt)("inlineCode",{parentName:"p"},"@Listener"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Subscribe\npublic void onPlayerChat(PlayerChatEvent event) {\n    // do stuff\n}\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note that the import is ",(0,a.kt)("inlineCode",{parentName:"p"},"com.velocitypowered.api.event.Subscribe")," and ",(0,a.kt)("em",{parentName:"p"},"not")," in\n",(0,a.kt)("inlineCode",{parentName:"p"},"com.google.common.eventbus"),"."))),(0,a.kt)("h2",{id:"orders"},"Orders"),(0,a.kt)("p",null,"Every listener has a ",(0,a.kt)("inlineCode",{parentName:"p"},"PostOrder"),". When an event is fired, the order in which listeners are invoked\nis defined by their ",(0,a.kt)("inlineCode",{parentName:"p"},"PostOrder"),". Listeners using ",(0,a.kt)("inlineCode",{parentName:"p"},"PostOrder.FIRST")," are called first, then EARLY,\nNORMAL, etc."),(0,a.kt)("p",null,"State the desired order in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Subscribe")," annotation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Subscribe(order = PostOrder.NORMAL)\npublic void onPlayerChat(PlayerChatEvent event) {\n    // do stuff\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NORMAL")," is the default value if you do not specify an order."),(0,a.kt)("h2",{id:"registering-listeners"},"Registering listeners"),(0,a.kt)("p",null,"Velocity automatically registers your main plugin class as an event listener. This is handy for\ninitialization and for simple plugins, but for more complex plugins, you will want to separate your\nevent handlers from the main plugin class. To do so, you will need to register with the EventManager\nany other listeners you have:"),(0,a.kt)("p",null,"The event system supports registering an object as a listener (allowing you to use ",(0,a.kt)("inlineCode",{parentName:"p"},"@Subscribe")," to\nmark event handlers) or registering functional listeners."),(0,a.kt)("h3",{id:"registering-an-object-as-a-listener"},"Registering an object as a listener"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"server.getEventManager().register(plugin, listener);\n")),(0,a.kt)("p",null,"Both parameters are ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),". The first argument is your plugin's object, and the second argument\nshould be the listener to register. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "myfirstplugin", name = "My Plugin", version = "0.1.0", dependencies = {@Dependency(id = "wonderplugin")})\npublic class VelocityTest {\n\n  private final ProxyServer server;\n  private final Logger logger;\n\n  @Inject\n  public VelocityTest(ProxyServer server, Logger logger) {\n    this.server = server;\n    this.logger = logger;\n  }\n\n  @Subscribe\n  public void onInitialize(ProxyInitializeEvent event) {\n    server.getEventManager().register(this, new MyListener());\n  }\n}\n\npublic class MyListener {\n\n  @Subscribe(order = PostOrder.EARLY)\n  public void onPlayerChat(PlayerChatEvent event) {\n    // do something here\n  }\n\n}\n')),(0,a.kt)("h3",{id:"registering-a-functional-style-listener"},"Registering a functional-style listener"),(0,a.kt)("p",null,"As an alternative to ",(0,a.kt)("inlineCode",{parentName:"p"},"@Subscribe"),", you can also use the functional ",(0,a.kt)("inlineCode",{parentName:"p"},"EventHandler")," interface and\nregister yours with ",(0,a.kt)("inlineCode",{parentName:"p"},"register(Object plugin, Class<E> eventClass, EventHandler<E> handler)"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"  server.getEventManager().register(this, PlayerChatEvent.class, event -> {\n      // do something here\n      return null;\n  });\n")),(0,a.kt)("h2",{id:"handling-events-asynchronously"},"Handling events asynchronously"),(0,a.kt)("p",null,"In Velocity 3.0.0, events can now be handled asynchronously. The event system allows a plugin to\npause sending an event to every listener, perform some unit of computation or I/O asynchronously,\nand then resume processing the event. All Velocity events have the ability to be processed\nasynchronously, however only some will explicitly wait for events to finish being fired before\ncontinuing."),(0,a.kt)("p",null,"For an annotation-based listener, all that is needed to process an event asynchronously is to either\nreturn an ",(0,a.kt)("inlineCode",{parentName:"p"},"EventTask")," or add a second ",(0,a.kt)("inlineCode",{parentName:"p"},"Continuation")," parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"  @Subscribe(order = PostOrder.EARLY)\n  public void onLogin(LoginEvent event, Continuation continuation) {\n    doSomeAsyncProcessing().addListener(continuation::resume, continuation::resumeWithException);\n  }\n\n  @Subscribe(order = PostOrder.EARLY)\n  public EventTask onPlayerChat(PlayerChatEvent event) {\n    if (mustFurtherProcess(event)) {\n      return EventTask.async(() => ...);\n    }\n    return null;\n  }\n")),(0,a.kt)("p",null,"A functional listener simply needs to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"AwaitingEventExecutor")," and return an ",(0,a.kt)("inlineCode",{parentName:"p"},"EventTask"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"  server.getEventManager().register(this, PlayerChatEvent.class, (AwaitingEventExecutor) event -> {\n    if (mustFurtherProcess(event)) {\n      return EventTask.async(() => ...);\n    }\n    return null;\n  });\n")),(0,a.kt)("p",null,"There are two types of event tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Async tasks")," simply run a unit of execution asynchronously. To get a basic event task use\n",(0,a.kt)("inlineCode",{parentName:"li"},"EventTask.async(Runnable)"),". Basic event tasks are the closest equivalent for Velocity 1.x.x event\nlisteners and asynchronous events in the Bukkit API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Continuation tasks")," provide the listener with a callback (known as a ",(0,a.kt)("inlineCode",{parentName:"li"},"Continuation"),") to resume\nevent processing when the (possibly asynchronous) work is completed. To get a continuation-based\nevent task, use ",(0,a.kt)("inlineCode",{parentName:"li"},"EventTask.withContinuation(Consumer<Continuation>)"),". Continuation-based tasks are\nthe closest equivalent for listeners that use BungeeCord ",(0,a.kt)("inlineCode",{parentName:"li"},"AsyncEvent")," intents, but have a slightly\ndifferent programming model in that each listener still runs sequentially, just that an individual\nlistener can defer passing control onto the next listener until it is done.")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To retain compatibility with older versions of Velocity, Velocity 3.0.0 runs all event listeners\nasynchronously. This behavior will change in Polymer and will require you to explicitly provide an\nevent task (or to use continuations) if you need to perform some work asynchronously. All developers\nare urged to make the transition now."))),(0,a.kt)("h2",{id:"creating-events"},"Creating Events"),(0,a.kt)("p",null,"Creating events on Velocity is somewhat different than on other platforms. However, it is very\nsimilar for the most part."),(0,a.kt)("h3",{id:"creating-the-event-class"},"Creating the Event Class"),(0,a.kt)("p",null,"First we need to create a class for our event. In this tutorial we'll assume you're making a private\nmessaging plugin, and thus use a ",(0,a.kt)("inlineCode",{parentName:"p"},"PrivateMessageEvent"),". Most of this part is boilerplate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class PrivateMessageEvent implements Event {\n\n  private final Player sender;\n  private final Player recipient;\n  private final String message;\n\n  public PrivateMessageEvent(Player sender, Player recipient, String message) {\n    this.sender = sender;\n    this.recipient = recipient;\n    this.message = message;\n  }\n\n  public Player sender() {\n    return sender;\n  }\n\n  public Player recipient() {\n    return recipient;\n  }\n\n  public String message() {\n    return message;\n  }\n\n  // toString, equals, and hashCode may be added as needed\n\n}\n")),(0,a.kt)("p",null,"You'll notice that your events don't need to extend or implement anything. They just work."),(0,a.kt)("h3",{id:"firing-the-event"},"Firing the Event"),(0,a.kt)("p",null,"To fire the event, you'll need to get the server's event manager and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"fire")," method. Note\nthat this returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),", so if you want to continue logic after the event is handled\nby all listeners, use a callback:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"server.getEventManager().fire(new PrivateMessageEvent(sender, recipient, message)).thenAccept((event) -> {\n  // event has finished firing\n  // do some logic dependent on the result\n});\n")),(0,a.kt)("h3",{id:"using-resultedevent"},"Using ResultedEvent"),(0,a.kt)("p",null,"Velocity uses the generalised ",(0,a.kt)("inlineCode",{parentName:"p"},"ResultedEvent")," for events which have some sort of 'result'. The\nresult type of the event is defined by its generic type; for example.\n",(0,a.kt)("inlineCode",{parentName:"p"},"PrivateMessageEvent implements ResultedEvent<ResultType>"),"."),(0,a.kt)("p",null,"Some common result types are ",(0,a.kt)("inlineCode",{parentName:"p"},"GenericResult"),", for simple allowed/denied results, and component\nresults, used for events where the result may be denied with an accompanying reason (such as in a\nlogin event)."),(0,a.kt)("p",null,"Using a general result is far more encompassing than ",(0,a.kt)("inlineCode",{parentName:"p"},"isCancelled/setCancelled")," methods you may be\nused to on other platforms, whose meaning is vague and limited to a simple boolean. In this example,\nwe'll use ",(0,a.kt)("inlineCode",{parentName:"p"},"GenericResult"),", so listeners will be able to mark our ",(0,a.kt)("inlineCode",{parentName:"p"},"PrivateMessageEvent")," as either\nallowed or denied."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class PrivateMessageEvent implements ResultedEvent<GenericResult> {\n\n  private final Player sender;\n  private final Player recipient;\n  private final String message;\n\n  private GenericResult result = GenericResult.allowed(); // Allowed by default\n\n  public PrivateMessageEvent(Player sender, Player recipient, String message) {\n    this.sender = sender;\n    this.recipient = recipient;\n    this.message = message;\n  }\n\n  public Player sender() {\n    return sender;\n  }\n\n  public Player recipient() {\n    return recipient;\n  }\n\n  public String message() {\n    return message;\n  }\n\n  @Override\n  public GenericResult result() {\n    return result;\n  }\n\n  @Override\n  public void setResult(GenericResult result) {\n    this.result = Objects.requireNonNull(result);\n  }\n\n}\n")),(0,a.kt)("p",null,"Per convention, the result of a ",(0,a.kt)("inlineCode",{parentName:"p"},"ResultedEvent")," should never be null. Here, we assure that using\n",(0,a.kt)("inlineCode",{parentName:"p"},"Objects.requireNonNull"),"."),(0,a.kt)("p",null,"Listeners may 'deny' the event by using ",(0,a.kt)("inlineCode",{parentName:"p"},"event.setResult(GenericResult.denied())"),", and you may check\nthe result with ",(0,a.kt)("inlineCode",{parentName:"p"},"event.getResult()"),"."))}v.isMDXComponent=!0}}]);