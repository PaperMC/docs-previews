"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2703],{4907:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(6687);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,h=p["".concat(l,".").concat(u)]||p[u]||s[u]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});t(6687);var a=t(4907);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i={slug:"/velocity/developers/command-api"},m="The Command API",l={unversionedId:"velocity/developers/api/command",id:"velocity/developers/api/command",title:"The Command API",description:"The Command API lets you create commands that can be executed by a player connected to the proxy or",source:"@site/docs/velocity/developers/api/command.md",sourceDirName:"velocity/developers/api",slug:"/velocity/developers/command-api",permalink:"/docs-previews/pull/46/velocity/developers/command-api",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/api/command.md",tags:[],version:"current",lastUpdatedBy:"4drian3d",lastUpdatedAt:1649101690,formattedLastUpdatedAt:"4/4/2022",frontMatter:{slug:"/velocity/developers/command-api"},sidebar:"docs",previous:{title:"Working With Events",permalink:"/docs-previews/pull/46/velocity/developers/event-api"},next:{title:"Using the Scheduler",permalink:"/docs-previews/pull/46/velocity/developers/scheduler-api"}},c={},d=[{value:"Creating a command",id:"creating-a-command",level:2},{value:"<code>BrigadierCommand</code>",id:"brigadiercommand",level:3},{value:"<code>SimpleCommand</code>",id:"simplecommand",level:3},{value:"<code>RawCommand</code>",id:"rawcommand",level:3},{value:"Registering a command",id:"registering-a-command",level:2}],s={toc:d};function p(e){var n=e.components,t=r(e,["components"]);return(0,a.kt)("wrapper",o({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",o({},{id:"the-command-api"}),"The Command API"),(0,a.kt)("p",null,"The Command API lets you create commands that can be executed by a player connected to the proxy or\nthe console."),(0,a.kt)("h2",o({},{id:"creating-a-command"}),"Creating a command"),(0,a.kt)("p",null,"Each command class needs to implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"Command")," subinterface. The choice depends on the type of\narguments and the granularity of suggestions provided to the client. These include:"),(0,a.kt)("h3",o({},{id:"brigadiercommand"}),(0,a.kt)("inlineCode",{parentName:"h3"},"BrigadierCommand")),(0,a.kt)("p",null,"Internally, Velocity uses the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/Mojang/brigadier"}),"Brigadier")," library to register\nand dispatch command actions. You can register your own ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandNode"),"s by wrapping them in a\n",(0,a.kt)("inlineCode",{parentName:"p"},"BrigadierCommand"),'. Let\'s see an example of a command that will tell whoever executes the command\n"Hello World" in light blue text.'),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-java"}),'package com.example.velocityplugin;\n\nimport com.mojang.brigadier.Command;\nimport com.mojang.brigadier.builder.LiteralArgumentBuilder;\nimport com.mojang.brigadier.tree.LiteralCommandNode;\nimport com.velocitypowered.api.command.BrigadierCommand;\nimport com.velocitypowered.api.command.CommandSource;\nimport net.kyori.adventure.text.Component;\nimport net.kyori.adventure.text.format.NamedTextColor;\n\npublic final class TestBrigadierCommand {\n\n    public static BrigadierCommand createBrigadierCommand() {\n        LiteralCommandNode<CommandSource> helloNode = LiteralArgumentBuilder\n            .<CommandSource>literal("test")\n            // Here you can filter the subjects that can execute the command.\n            // This is the ideal place to do "hasPermission" checks\n            .requires(source -> source.hasPermission("test.permission"))\n            // Here you can add the logic that will be used in\n            // the execution of the "/test" command without any argument\n            .executes(context -> {\n                // Here you get the subject that executed the command\n                CommandSource source = context.getSource();\n\n                Component message = Component.text("Hello World", NamedTextColor.AQUA);\n                source.sendMessage(message);\n\n                // Returning Command.SINGLE_SUCCESS means that the execution was successful\n                // Returning BrigadierCommand.FORWARD will send the command to the server\n                return Command.SINGLE_SUCCESS;\n            })\n            // Using the "then" method you can add subarguments to the command.\n            // For example, this subcommand will be executed when using the command "/test subcommand"\n            .then(LiteralArgumentBuilder.<CommandSource>literal("argument"))\n            .build();\n\n        // BrigadierCommand implements Command\n        return new BrigadierCommand(helloNode);\n    }\n}\n')),(0,a.kt)("p",null,"Brigadier commands have full backwards-compatibility with 1.12.2 and lower versions."),(0,a.kt)("p",null,"Custom plugin command argument types are not supported in Velocity, as they would require the client\nto also support them. We recommend sticking to the predefined Brigadier types provided."),(0,a.kt)("h3",o({},{id:"simplecommand"}),(0,a.kt)("inlineCode",{parentName:"h3"},"SimpleCommand")),(0,a.kt)("p",null,"Modelled after the convention popularized by Bukkit and BungeeCord, a ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleCommand")," has three\nmethods: one for when the command is executed, one to provide suggestions for tab completion, and\none to check a ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandSource")," has permission to use the command. All methods receive a\n",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleCommand.Invocation")," object, which contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandSource")," that executed the command and\nthe arguments as an array of strings. The previous example can also be implemented using this\ninterface:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-java"}),'package com.example.velocityplugin;\n\nimport com.velocitypowered.api.command.CommandSource;\nimport com.velocitypowered.api.command.SimpleCommand;\nimport java.util.concurrent.CompletableFuture;\nimport java.util.List;\nimport net.kyori.adventure.text.Component;\nimport net.kyori.adventure.text.format.NamedTextColor;\n\npublic final class TestCommand implements SimpleCommand {\n\n    @Override\n    public void execute(final Invocation invocation) {\n        CommandSource source = invocation.source();\n        // Get the arguments after the command alias\n        String[] args = invocation.arguments();\n\n        source.sendMessage(Component.text("Hello World!").color(NamedTextColor.AQUA));\n    }\n\n    // This method allows you to control who can execute the command.\n    // If the possible executor does not have the necessary permission or requirement,\n    // the command execution will be sent directly to the server where it is located,\n    // completely hiding the command from the proxy including its visibility among\n    // the available commands and its execution\n    @Override\n    public boolean hasPermission(final Invocation invocation) {\n        return invocation.source().hasPermission("command.test");\n    }\n\n    // With this method you can control the suggestions to send\n    // to the CommandSource according to the arguments\n    // it has already written or other requirements you need\n    @Override\n    public List<String> suggest(final Invocation invocation) {\n        return List.of();\n    }\n\n    // Here you can offer argument suggestions in the same way as the previous method,\n    // but asynchronously. It is recommended to use this method instead of the previous one\n    // especially in cases where you make a more extensive logic to provide the suggestions\n    @Override\n    public CompletableFuture<List<String>> suggestAsync(final Invocation invocation) {\n        return CompletableFuture.completedFuture(List.of());\n    }\n}\n')),(0,a.kt)("p",null,"It's important to note ",(0,a.kt)("inlineCode",{parentName:"p"},"invocation.arguments()")," doesn't include the command alias (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"teleport"),"\nfor ",(0,a.kt)("inlineCode",{parentName:"p"},"/teleport foo bar"),"). In the event that no arguments are specified, an empty array will be\npassed, rather than a null array."),(0,a.kt)("p",null,"If a player or the console executes the following command: ",(0,a.kt)("inlineCode",{parentName:"p"},"/stats Player2 kills"),", the first\nargument will be ",(0,a.kt)("inlineCode",{parentName:"p"},"Player2"),", which we can access using ",(0,a.kt)("inlineCode",{parentName:"p"},"invocation.arguments()[0]")," and the second\nargument will be ",(0,a.kt)("inlineCode",{parentName:"p"},"kills"),"."),(0,a.kt)("h3",o({},{id:"rawcommand"}),(0,a.kt)("inlineCode",{parentName:"h3"},"RawCommand")),(0,a.kt)("p",null,"There's certain cases where you don't need to process the arguments. These may include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"/say")," style command, where the arguments contain the message as a string; or"),(0,a.kt)("li",{parentName:"ul"},"You're using an external command framework to process your commands.")),(0,a.kt)("p",null,"A raw command indicates the proxy to pass the command alias and its arguments directly without\nfurther processing. Let's see an example of a command that echoes the received input:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-java"}),'package com.example.velocityplugin;\n\nimport com.velocitypowered.api.command.RawCommand;\nimport net.kyori.adventure.text.Component;\n\npublic final class EchoCommand implements RawCommand {\n\n    @Override\n    public void execute(final Invocation invocation) {\n        invocation.source().sendMessage(Component.text(invocation.arguments()));\n    }\n\n    @Override\n    public boolean hasPermission(final Invocation invocation) {\n        return invocation.source().hasPermission("command.echo");\n    }\n}\n')),(0,a.kt)("h2",o({},{id:"registering-a-command"}),"Registering a command"),(0,a.kt)("p",null,"Now that we have created a command, we need to register it in order for it to work. To register\ncommands, you use the Command Manager. We get the command manager by executing\n",(0,a.kt)("inlineCode",{parentName:"p"},"proxyServer.getCommandManager()")," with the proxy instance, or by injecting it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Inject"),"\nannotation in the main class. The register method requires two parameters, the command metadata and\nthe command object."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandMeta")," contains the case-insensitive aliases and more advanced features. The Command\nManager provides a meta builder via the ",(0,a.kt)("inlineCode",{parentName:"p"},"#metaBuilder(String alias)")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-java"}),'package com.example.velocityplugin;\n\nimport com.google.inject.Inject;\nimport com.velocitypowered.api.command.BrigadierCommand;\nimport com.velocitypowered.api.event.Subscribe;\nimport com.velocitypowered.api.event.proxy.ProxyInitializeEvent;\nimport com.velocitypowered.api.plugin.Plugin;\nimport com.velocitypowered.api.proxy.ProxyServer;\n\n@Plugin(id = "helloworld")\npublic final class HelloWorldPlugin {\n    private final ProxyServer proxy;\n\n    @Inject\n    public HelloWorldPlugin(ProxyServer proxy) {\n        this.proxy = proxy;\n    }\n\n    @Subscribe\n    public void onProxyInitialize(ProxyInitializeEvent event) {\n        CommandManager commandManager = proxy.getCommandManager();\n        // Here you can add meta for the command, as aliases and the plugin to which it belongs (RECOMMENDED)\n        CommandMeta commandMeta = commandManager.metaBuilder("test")\n            // This will create new alias por the command "/test"\n            // with the same arguments and functionality\n            .aliases("otherAlias", "anotherAlias")\n            .plugin(this)\n            .build();\n\n        // You can replace this with "new EchoCommand()" or "new TestCommand()"\n        // SimpleCommand simpleCommand = new TestCommand();\n        // RawCommand rawCommand = new EchoCommand();\n        // The registration is done in the same way, since all 3 interfaces implement "Command"\n        BrigadierCommand commandToRegister = TestBrigadierCommand.createBrigadierCommand();\n\n        // Finally...\n        commandManager.register(meta, commandToRegister);\n    }\n}\n')),(0,a.kt)("p",null,"If you're registering a ",(0,a.kt)("inlineCode",{parentName:"p"},"BrigadierCommand"),", you may prefer to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"#register(BrigadierCommand)"),"\nmethod or ",(0,a.kt)("inlineCode",{parentName:"p"},"#metaBuilder(BrigadierCommand)")," to specify additional aliases."))}p.isMDXComponent=!0}}]);