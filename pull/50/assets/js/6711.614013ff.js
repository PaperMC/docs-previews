"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6711],{4907:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(6687);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||r;return t?a.createElement(g,i(i({ref:n},s),{},{components:t})):a.createElement(g,i({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>m,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});t(6687);var a=t(4907);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i={slug:"/velocity/developers/command-api"},m="The Command API",l={unversionedId:"dev/velocity/api/command",id:"dev/velocity/api/command",title:"The Command API",description:"The Command API lets you create commands that can be executed by a player connected to the proxy or",source:"@site/docs/dev/velocity/api/command.md",sourceDirName:"dev/velocity/api",slug:"/velocity/developers/command-api",permalink:"/docs-previews/pull/50/velocity/developers/command-api",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/dev/velocity/api/command.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1649611163,formattedLastUpdatedAt:"4/10/2022",frontMatter:{slug:"/velocity/developers/command-api"},sidebar:"dev",previous:{title:"Working With Events",permalink:"/docs-previews/pull/50/velocity/developers/event-api"},next:{title:"Using the Scheduler",permalink:"/docs-previews/pull/50/velocity/developers/scheduler-api"}},d={},s=[{value:"Creating a command",id:"creating-a-command",level:2},{value:"<code>BrigadierCommand</code>",id:"brigadiercommand",level:3},{value:"<code>SimpleCommand</code>",id:"simplecommand",level:3},{value:"<code>RawCommand</code>",id:"rawcommand",level:3},{value:"Registering a command",id:"registering-a-command",level:2}],c={toc:s};function p(e){var n=e.components,t=r(e,["components"]);return(0,a.kt)("wrapper",o({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",o({},{id:"the-command-api"}),"The Command API"),(0,a.kt)("p",null,"The Command API lets you create commands that can be executed by a player connected to the proxy or\nthe console."),(0,a.kt)("h2",o({},{id:"creating-a-command"}),"Creating a command"),(0,a.kt)("p",null,"Each command class needs to implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"Command")," subinterface. The choice depends on the type of\narguments and the granularity of suggestions provided to the client. These include:"),(0,a.kt)("h3",o({},{id:"brigadiercommand"}),(0,a.kt)("inlineCode",{parentName:"h3"},"BrigadierCommand")),(0,a.kt)("p",null,"Internally, Velocity uses the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/Mojang/brigadier"}),"Brigadier")," library to register\nand dispatch command actions. You can register your own ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandNode"),"s by wrapping them in a\n",(0,a.kt)("inlineCode",{parentName:"p"},"BrigadierCommand"),'. Let\'s see an example of a command that will tell whoever executes the command\n"Hello World" in light blue text.'),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-java"}),'package com.example.velocityplugin;\n\nimport com.mojang.brigadier.arguments.StringArgumentType;\nimport com.mojang.brigadier.Command;\nimport com.mojang.brigadier.builder.LiteralArgumentBuilder;\nimport com.mojang.brigadier.builder.RequiredArgumentBuilder;\nimport com.mojang.brigadier.tree.LiteralCommandNode;\nimport com.velocitypowered.api.command.BrigadierCommand;\nimport com.velocitypowered.api.command.CommandSource;\nimport com.velocitypowered.api.command.VelocityBrigadierMessage;\nimport com.velocitypowered.api.proxy.ProxyServer;\nimport net.kyori.adventure.text.Component;\nimport net.kyori.adventure.text.format.NamedTextColor;\n\npublic final class TestBrigadierCommand {\n\n    public static BrigadierCommand createBrigadierCommand(final ProxyServer proxy) {\n        LiteralCommandNode<CommandSource> helloNode = LiteralArgumentBuilder\n            .<CommandSource>literal("test")\n            // Here you can filter the subjects that can execute the command.\n            // This is the ideal place to do "hasPermission" checks\n            .requires(source -> source.hasPermission("test.permission"))\n            // Here you can add the logic that will be used in\n            // the execution of the "/test" command without any argument\n            .executes(context -> {\n                // Here you get the subject that executed the command\n                CommandSource source = context.getSource();\n\n                Component message = Component.text("Hello World", NamedTextColor.AQUA);\n                source.sendMessage(message);\n\n                // Returning Command.SINGLE_SUCCESS means that the execution was successful\n                // Returning BrigadierCommand.FORWARD will send the command to the server\n                return Command.SINGLE_SUCCESS;\n            })\n            // Using the "then" method, you can add subarguments to the command.\n            // For example, this subcommand will be executed when using the command "/test <some argument>"\n            // A RequiredArgumentBuilder is a type of argument in which you can enter some undefined data\n            // of some kind. For example, this example uses a StringArgumentType.word() that requires\n            // a single word to be entered, but you can also use different ArgumentTypes provided by Brigadier\n            // that return data of type Boolean, Integer, Float, other String types, etc\n            .then(RequiredArgumentBuilder.<CommandSource, String>argument("argument", StringArgumentType.word())\n                // Here you can define the hints to be provided in case the ArgumentType does not provide them.\n                // In this example, the names of all connected players are provided\n                .suggests((ctx, builder) ->\n                    // Here we provide the names of the players along with a tooltip,\n                    // which can be used as an explanation of a specific argument or as a simple decoration\n                    proxy.getAllPlayers().forEach(player -> builder.suggest(\n                        player.getUsername(),\n                        // A VelocityBrigadierMessage takes a component.\n                        // In this case, the player\'s name is provided with a rainbow\n                        // gradient created by MiniMessage (Library available since Velocity 3.1.2+)\n                        VelocityBrigadierMessage.tooltip(\n                            MiniMessage.miniMessage().deserialize("<rainbow>" + player.getUsername())\n                        )\n                    ))\n                )\n                // Here the logic of the command "/test <some argument>" is executed\n                .executes(context -> {\n                    // Here you get the argument that the CommandSource has entered.\n                    // You must enter exactly the name as you have named the argument\n                    // and you must provide the class of the argument you expect, in this case... a String\n                    String argumentProvided = context.getArgument("argument", String.class);\n                    // This method will check if the given string corresponds to a\n                    // player\'s name and if it does, it will send a message to that player\n                    proxy.getPlayer(argumentProvided).ifPresent(player ->\n                        player.sendMessage(Component.text("Hello!"))\n                    );\n                    // Returning Command.SINGLE_SUCCESS means that the execution was successful\n                    // Returning BrigadierCommand.FORWARD will send the command to the server\n                    return Command.SINGLE_SUCCESS;\n                })\n            )\n            .build();\n\n        // BrigadierCommand implements Command\n        return new BrigadierCommand(helloNode);\n    }\n}\n')),(0,a.kt)("p",null,"Brigadier commands have full backwards-compatibility with 1.12.2 and lower versions."),(0,a.kt)("p",null,"Custom plugin command argument types are not supported in Velocity, as they would require the client\nto also support them. We recommend sticking to the predefined Brigadier types provided."),(0,a.kt)("h3",o({},{id:"simplecommand"}),(0,a.kt)("inlineCode",{parentName:"h3"},"SimpleCommand")),(0,a.kt)("p",null,"Modelled after the convention popularized by Bukkit and BungeeCord, a ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleCommand")," has three\nmethods: one for when the command is executed, one to provide suggestions for tab completion, and\none to check a ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandSource")," has permission to use the command. All methods receive a\n",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleCommand.Invocation")," object, which contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandSource")," that executed the command and\nthe arguments as an array of strings. The previous example can also be implemented using this\ninterface:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-java"}),'package com.example.velocityplugin;\n\nimport com.velocitypowered.api.command.CommandSource;\nimport com.velocitypowered.api.command.SimpleCommand;\nimport java.util.concurrent.CompletableFuture;\nimport java.util.List;\nimport net.kyori.adventure.text.Component;\nimport net.kyori.adventure.text.format.NamedTextColor;\n\npublic final class TestCommand implements SimpleCommand {\n\n    @Override\n    public void execute(final Invocation invocation) {\n        CommandSource source = invocation.source();\n        // Get the arguments after the command alias\n        String[] args = invocation.arguments();\n\n        source.sendMessage(Component.text("Hello World!").color(NamedTextColor.AQUA));\n    }\n\n    // This method allows you to control who can execute the command.\n    // If the executor does not have the required permission,\n    // the execution of the command and the control of its autocompletion\n    // will be sent directly to the server on which the sender is located\n    @Override\n    public boolean hasPermission(final Invocation invocation) {\n        return invocation.source().hasPermission("command.test");\n    }\n\n    // With this method you can control the suggestions to send\n    // to the CommandSource according to the arguments\n    // it has already written or other requirements you need\n    @Override\n    public List<String> suggest(final Invocation invocation) {\n        return List.of();\n    }\n\n    // Here you can offer argument suggestions in the same way as the previous method,\n    // but asynchronously. It is recommended to use this method instead of the previous one\n    // especially in cases where you make a more extensive logic to provide the suggestions\n    @Override\n    public CompletableFuture<List<String>> suggestAsync(final Invocation invocation) {\n        return CompletableFuture.completedFuture(List.of());\n    }\n}\n')),(0,a.kt)("p",null,"It's important to note ",(0,a.kt)("inlineCode",{parentName:"p"},"invocation.arguments()")," doesn't include the command alias (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"teleport"),"\nfor ",(0,a.kt)("inlineCode",{parentName:"p"},"/teleport foo bar"),"). In the event that no arguments are specified, an empty array will be\npassed, rather than a null array."),(0,a.kt)("p",null,"If a player or the console executes the following command: ",(0,a.kt)("inlineCode",{parentName:"p"},"/stats Player2 kills"),", the first\nargument will be ",(0,a.kt)("inlineCode",{parentName:"p"},"Player2"),", which we can access using ",(0,a.kt)("inlineCode",{parentName:"p"},"invocation.arguments()[0]")," and the second\nargument will be ",(0,a.kt)("inlineCode",{parentName:"p"},"kills"),"."),(0,a.kt)("h3",o({},{id:"rawcommand"}),(0,a.kt)("inlineCode",{parentName:"h3"},"RawCommand")),(0,a.kt)("p",null,"There's certain cases where you don't need to process the arguments. These may include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"/say")," style command, where the arguments contain the message as a string; or"),(0,a.kt)("li",{parentName:"ul"},"You're using an external command framework to process your commands.")),(0,a.kt)("p",null,"A raw command indicates the proxy to pass the command alias and its arguments directly without\nfurther processing. Let's see an example of a command that echoes the received input:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-java"}),'package com.example.velocityplugin;\n\nimport com.velocitypowered.api.command.RawCommand;\nimport net.kyori.adventure.text.Component;\n\npublic final class EchoCommand implements RawCommand {\n\n    @Override\n    public void execute(final Invocation invocation) {\n        invocation.source().sendMessage(Component.text(invocation.arguments()));\n    }\n\n    @Override\n    public boolean hasPermission(final Invocation invocation) {\n        return invocation.source().hasPermission("command.echo");\n    }\n}\n')),(0,a.kt)("h2",o({},{id:"registering-a-command"}),"Registering a command"),(0,a.kt)("p",null,"Now that we have created a command, we need to register it in order for it to work. To register\ncommands, you use the Command Manager. We get the command manager by executing\n",(0,a.kt)("inlineCode",{parentName:"p"},"proxyServer.getCommandManager()")," with the proxy instance, or by injecting it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Inject"),"\nannotation in the main class. The register method requires two parameters, the command metadata and\nthe command object."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandMeta")," contains the case-insensitive aliases and more advanced features. The Command\nManager provides a meta builder via the ",(0,a.kt)("inlineCode",{parentName:"p"},"#metaBuilder(String alias)")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-java"}),'package com.example.velocityplugin;\n\nimport com.google.inject.Inject;\nimport com.velocitypowered.api.command.BrigadierCommand;\nimport com.velocitypowered.api.event.Subscribe;\nimport com.velocitypowered.api.event.proxy.ProxyInitializeEvent;\nimport com.velocitypowered.api.plugin.Plugin;\nimport com.velocitypowered.api.proxy.ProxyServer;\n\n@Plugin(id = "helloworld")\npublic final class HelloWorldPlugin {\n    private final ProxyServer proxy;\n\n    @Inject\n    public HelloWorldPlugin(ProxyServer proxy) {\n        this.proxy = proxy;\n    }\n\n    @Subscribe\n    public void onProxyInitialize(ProxyInitializeEvent event) {\n        CommandManager commandManager = proxy.getCommandManager();\n        // Here you can add meta for the command, as aliases and the plugin to which it belongs (RECOMMENDED)\n        CommandMeta commandMeta = commandManager.metaBuilder("test")\n            // This will create a new alias for the command "/test"\n            // with the same arguments and functionality\n            .aliases("otherAlias", "anotherAlias")\n            .plugin(this)\n            .build();\n\n        // You can replace this with "new EchoCommand()" or "new TestCommand()"\n        // SimpleCommand simpleCommand = new TestCommand();\n        // RawCommand rawCommand = new EchoCommand();\n        // The registration is done in the same way, since all 3 interfaces implement "Command"\n        BrigadierCommand commandToRegister = TestBrigadierCommand.createBrigadierCommand(proxy);\n\n        // Finally, you can register the command\n        commandManager.register(meta, commandToRegister);\n    }\n}\n')),(0,a.kt)("p",null,"If you're registering a ",(0,a.kt)("inlineCode",{parentName:"p"},"BrigadierCommand"),", you may prefer to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"#register(BrigadierCommand)"),"\nmethod or ",(0,a.kt)("inlineCode",{parentName:"p"},"#metaBuilder(BrigadierCommand)")," to specify additional aliases."))}p.isMDXComponent=!0}}]);