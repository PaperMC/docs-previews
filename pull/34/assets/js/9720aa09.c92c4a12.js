"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9744],{4907:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(6687);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=d(t),u=o,g=s["".concat(l,".").concat(u)]||s[u]||p[u]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=s;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1320:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return p}});var a=t(9149),o=t(8332),r=(t(6687),t(4907)),i=["components"],m={slug:"/velocity/developers/command-api"},l="The Command API",d={unversionedId:"velocity/developers/api/command",id:"velocity/developers/api/command",title:"The Command API",description:"The Command API lets you create commands that can be executed by a player connected to the proxy or",source:"@site/docs/velocity/developers/api/command.md",sourceDirName:"velocity/developers/api",slug:"/velocity/developers/command-api",permalink:"/docs-previews/pull/34/velocity/developers/command-api",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/api/command.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646714966,formattedLastUpdatedAt:"3/8/2022",frontMatter:{slug:"/velocity/developers/command-api"},sidebar:"docs",previous:{title:"Working With Events",permalink:"/docs-previews/pull/34/velocity/developers/event-api"},next:{title:"Using the Scheduler",permalink:"/docs-previews/pull/34/velocity/developers/scheduler-api"}},c={},p=[{value:"Creating a command",id:"creating-a-command",level:2},{value:"<code>BrigadierCommand</code>",id:"brigadiercommand",level:3},{value:"<code>SimpleCommand</code>",id:"simplecommand",level:3},{value:"<code>RawCommand</code>",id:"rawcommand",level:3},{value:"Registering a command",id:"registering-a-command",level:2}],s={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-command-api"},"The Command API"),(0,r.kt)("p",null,"The Command API lets you create commands that can be executed by a player connected to the proxy or\nthe console."),(0,r.kt)("h2",{id:"creating-a-command"},"Creating a command"),(0,r.kt)("p",null,"Each command class needs to implement a ",(0,r.kt)("inlineCode",{parentName:"p"},"Command")," subinterface. The choice depends on the type of\narguments and the granularity of suggestions provided to the client. These include:"),(0,r.kt)("h3",{id:"brigadiercommand"},(0,r.kt)("inlineCode",{parentName:"h3"},"BrigadierCommand")),(0,r.kt)("p",null,"Internally, Velocity uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mojang/brigadier"},"Brigadier")," library to register\nand dispatch command actions. You can register your own ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandNode"),"s by wrapping them in a\n",(0,r.kt)("inlineCode",{parentName:"p"},"BrigadierCommand"),'. Let\'s see an example of a command that will tell whoever executes the command\n"Hello World" in light blue text.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.velocityplugin;\n\nimport com.mojang.brigadier.builder.LiteralArgumentBuilder;\nimport com.mojang.brigadier.tree.LiteralCommandNode;\nimport com.velocitypowered.api.command.BrigadierCommand;\nimport com.velocitypowered.api.command.CommandSource;\nimport com.velocitypowered.api.event.Subscribe;\nimport com.velocitypowered.api.event.proxy.ProxyInitializeEvent;\nimport com.velocitypowered.api.plugin.Plugin;\nimport net.kyori.adventure.text.Component;\nimport net.kyori.adventure.text.format.NamedTextColor;\n\n@Plugin(id = "helloworld")\npublic class HelloWorldPlugin {\n\n    public void createBrigadierCommand() {\n        LiteralCommandNode<CommandSource> helloNode = LiteralArgumentBuilder\n            .<CommandSource>literal("test")\n            .executes(context -> {\n                Component message = Component.text("Hello World", NamedTextColor.AQUA);\n                context.getSource().sendMessage(message);\n                return 1; // indicates success\n            })\n            .build();\n\n        // BrigadierCommand implements Command\n        BrigadierCommand command = new BrigadierCommand(helloNode);\n    }\n}\n')),(0,r.kt)("p",null,"Brigadier commands have full backwards-compatibility with 1.12.2 and lower versions."),(0,r.kt)("p",null,"Custom plugin command argument types are not supported in Velocity, as they would require the client\nto also support them. We recommend sticking to the predefined Brigadier types provided."),(0,r.kt)("h3",{id:"simplecommand"},(0,r.kt)("inlineCode",{parentName:"h3"},"SimpleCommand")),(0,r.kt)("p",null,"Modelled after the convention popularized by Bukkit and BungeeCord, a ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleCommand")," has three\nmethods: one for when the command is executed, one to provide suggestions for tab completion, and\none to check a ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandSource")," has permission to use the command. All methods receive a\n",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleCommand.Invocation")," object, which contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandSource")," that executed the command and\nthe arguments as an array of strings. The previous example can also be implemented using this\ninterface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.velocityplugin;\n\nimport com.velocitypowered.api.command.CommandSource;\nimport com.velocitypowered.api.command.SimpleCommand;\nimport net.kyori.adventure.text.Component;\nimport net.kyori.adventure.text.format.NamedTextColor;\n\npublic final class TestCommand implements SimpleCommand {\n\n    @Override\n    public void execute(final Invocation invocation) {\n        CommandSource source = invocation.source();\n        // Get the arguments after the command alias\n        String[] args = invocation.arguments();\n\n        source.sendMessage(Component.text("Hello World!").color(NamedTextColor.AQUA));\n    }\n\n    @Override\n    public boolean hasPermission(final Invocation invocation) {\n        return invocation.source().hasPermission("command.test");\n    }\n}\n')),(0,r.kt)("p",null,"It's important to note ",(0,r.kt)("inlineCode",{parentName:"p"},"invocation.arguments()")," doesn't include the command alias (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"teleport"),"\nfor ",(0,r.kt)("inlineCode",{parentName:"p"},"/teleport foo bar"),"). In the event that no arguments are specified, an empty array will be\npassed, rather than a null array."),(0,r.kt)("p",null,"If a player or the console executes the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"/stats Player2 kills"),", the first\nargument will be ",(0,r.kt)("inlineCode",{parentName:"p"},"Player2"),", which we can access using ",(0,r.kt)("inlineCode",{parentName:"p"},"invocation.arguments()[0]")," and the second\nargument will be ",(0,r.kt)("inlineCode",{parentName:"p"},"kills"),"."),(0,r.kt)("h3",{id:"rawcommand"},(0,r.kt)("inlineCode",{parentName:"h3"},"RawCommand")),(0,r.kt)("p",null,"There's certain cases where you don't need to process the arguments. These may include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"/say")," style command, where the arguments contain the message as a string; or"),(0,r.kt)("li",{parentName:"ul"},"You're using an external command framework to process your commands.")),(0,r.kt)("p",null,"A raw command indicates the proxy to pass the command alias and its arguments directly without\nfurther processing. Let's see an example of a command that echoes the received input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.velocityplugin;\n\nimport com.velocitypowered.api.command.RawCommand;\nimport net.kyori.adventure.text.Component;\n\npublic final class EchoCommand implements RawCommand {\n\n    @Override\n    public void execute(final Invocation invocation) {\n        invocation.source().sendMessage(Component.text(invocation.arguments()));\n    }\n\n    @Override\n    public boolean hasPermission(final Invocation invocation) {\n        return invocation.source().hasPermission("command.echo");\n    }\n}\n')),(0,r.kt)("h2",{id:"registering-a-command"},"Registering a command"),(0,r.kt)("p",null,"Now that we have created a command, we need to register it in order for it to work. To register\ncommands, you use the Command Manager. We get the command manager by executing\n",(0,r.kt)("inlineCode",{parentName:"p"},"proxyServer.getCommandManager()")," with the proxy instance, or by injecting it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Inject"),"\nannotation in the main class. The register method requires two parameters, the command metadata and\nthe command object."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandMeta")," contains the case-insensitive aliases and more advanced features. The Command\nManager provides a meta builder via the ",(0,r.kt)("inlineCode",{parentName:"p"},"#metaBuilder(String alias)")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'CommandMeta meta = commandManager.metaBuilder("test")\n    // Specify other aliases (optional)\n    .aliases("otherAlias", "anotherAlias")\n    .build();\n')),(0,r.kt)("p",null,"Finally,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"commandManager.register(meta, new TestCommand());\n")),(0,r.kt)("p",null,"If you're registering a ",(0,r.kt)("inlineCode",{parentName:"p"},"BrigadierCommand"),", you may prefer to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"#register(BrigadierCommand)"),"\nmethod or ",(0,r.kt)("inlineCode",{parentName:"p"},"#metaBuilder(BrigadierCommand)")," to specify additional aliases."))}u.isMDXComponent=!0}}]);