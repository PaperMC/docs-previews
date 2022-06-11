"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5344],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),h=r,u=c["".concat(d,".").concat(h)]||c[h]||m[h]||i;return t?a.createElement(u,o(o({ref:n},p),{},{components:t})):a.createElement(u,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>h,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var a=t(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&p(e,t,n[t]);return e};const c={slug:"/anti-xray"},h="Configuring Anti-Xray",u={unversionedId:"admin/how-to/anti-xray",id:"admin/how-to/anti-xray",title:"Configuring Anti-Xray",description:"Originally written and maintained by stonar96.",source:"@site/docs/paper/admin/how-to/anti-xray.md",sourceDirName:"admin/how-to",slug:"/anti-xray",permalink:"/paper/anti-xray",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/admin/how-to/anti-xray.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1654922831,formattedLastUpdatedAt:"6/11/2022",frontMatter:{slug:"/anti-xray"},sidebar:"primary",previous:{title:"Aikar's Flags",permalink:"/paper/aikars-flags"},next:{title:"Reference",permalink:"/paper/cat/admin/reference"}},g={},f=[{value:"Recommended Configuration",id:"recommended-configuration",level:2},{value:"<code>engine-mode: 1</code>",id:"engine-mode-1",level:3},{value:"<code>engine-mode: 2</code>",id:"engine-mode-2",level:3}],k={toc:f};function y(e){var n,r=e,{components:p}=r,c=((e,n)=>{var t={};for(var a in e)d.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t})(r,["components"]);return(0,a.kt)("wrapper",(n=m(m({},k),c),i(n,o({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"configuring-anti-xray"}),"Configuring Anti-Xray"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Originally written and maintained by ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/stonar96"}),"stonar96"),".")),(0,a.kt)("div",m({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Outdated Content")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Content on this page has not been updated for the 1.19 configuration reorganization and ",(0,a.kt)("strong",{parentName:"p"},"example\nconfigurations are only applicable to versions 1.18.2 and below"),". Please proceed accordingly."),(0,a.kt)("p",{parentName:"div"},"If you would like to assist in updating content, please reach out in the ",(0,a.kt)("inlineCode",{parentName:"p"},"#docs")," channel on our\n",(0,a.kt)("a",m({parentName:"p"},{href:"https://discord.gg/papermc"}),"Discord")," server."))),(0,a.kt)("p",null,"Paper includes an obfuscation-based Anti-Xray with two modes, configurable per world in paper.yml."),(0,a.kt)("div",m({},{className:"admonition admonition-info alert alert--info"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Per World Configuration")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"If you aren't already familiar with per world configuration, please take a moment to familiarize\nyourself with the ",(0,a.kt)("a",m({parentName:"p"},{href:"/paper/per-world-configuration"}),"Per World Configuration Guide"),"."))),(0,a.kt)("p",null,"This guide is a step-by-step walk-through for configuring Anti-Xray. For reference documentation,\nrefer to the Anti-Xray section of the\n",(0,a.kt)("a",m({parentName:"p"},{href:"/paper/reference/paper-per-world-configuration#anti-xray"}),"Per-World Configuration Reference"),"."),(0,a.kt)("p",null,"Anti-Xray has two different modes. ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 1")," replaces specified blocks (",(0,a.kt)("inlineCode",{parentName:"p"},"hidden-blocks"),') with\nother "fake" blocks, ',(0,a.kt)("inlineCode",{parentName:"p"},"stone")," (",(0,a.kt)("inlineCode",{parentName:"p"},"deepslate")," at y < 0), ",(0,a.kt)("inlineCode",{parentName:"p"},"netherrack"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"end_stone")," based on the\ndimension. In contrast, ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 2")," will replace both ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden-blocks")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"replacement-blocks"),"\nwith randomly generated ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden-blocks"),"."),(0,a.kt)("p",null,"The following images",(0,a.kt)("sup",m({parentName:"p"},{id:"fnref-1"}),(0,a.kt)("a",m({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," show how each mode will look for a player using Xray with the recommended\nconfiguration in both the overworld and nether."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Overworld Anti-Xray Comparison",src:t(8739).Z,width:"1920",height:"1080"}),"\n",(0,a.kt)("img",{alt:"Nether Anti-Xray Comparison",src:t(5167).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"Especially on the client side, ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 1")," is much less computationally intensive, while\n",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 2")," may better prevent Xray. With ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 1"),", only ores that are entirely covered\nby solid blocks will be hidden. Ores exposed to air in caves or water from a lake will not be\nhidden. With ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 2"),", fake ores obstruct the view of real blocks. If ",(0,a.kt)("inlineCode",{parentName:"p"},"air")," is added to\n",(0,a.kt)("inlineCode",{parentName:"p"},"hidden-blocks"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 2")," will effectively hide all ores, even those exposed to air."),(0,a.kt)("div",m({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Anti-Xray Bypasses")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Range Extension"),": While Anti-Xray alone will prevent the majority of users from Xraying on your\nserver, it is not by any means infallible. Because of how Anti-Xray is (and has to be) implemented,\nit is possible to, on a default server, extend the range of real ores you can see by a not\ninsignificant amount. This can be mitigated by any competent anti-cheat plugin; however, this is not\nincluded out of the box."),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Seed Reversing"),": Another attack vector is the deterministic nature of Minecraft's world\ngeneration. If the client is able to obtain the world seed, it is able to know the real location of\nevery generated ore, completely bypassing Anti-Xray. This can be partially worked around by making\nit harder for the client to reverse the world seed with the\n",(0,a.kt)("a",m({parentName:"p"},{href:"/paper/reference/paper-per-world-configuration#feature-seeds"}),(0,a.kt)("inlineCode",{parentName:"a"},"feature-seeds")," configuration"),", in\nconjunction with the structure seed options in ",(0,a.kt)("inlineCode",{parentName:"p"},"spigot.yml"),". Note that this is not a complete\nsolution, and it may still be possible for a client to obtain the server's world seed. Using a\ndifferent seed for each world may also be beneficial."),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Ores Exposed to Air"),": In both ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 2"),", it is possible for a client\nto view ores that are exposed to air. This can be mitigated in ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 2")," by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"air")," to\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden-blocks")," list. However, doing this may cause client performance issues (FPS drops) for\nsome players."))),(0,a.kt)("h2",m({},{id:"recommended-configuration"}),"Recommended Configuration"),(0,a.kt)("p",null,"The recommended configuration for both ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-mode: 2")," is as follows:"),(0,a.kt)("div",m({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Spacing")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},'YAML cares about whitespace! The example configuration below is already formatted correctly. Ensure\nformatting remains unchanged by using the "copy" button in the top right of each example.'))),(0,a.kt)("h3",m({},{id:"engine-mode-1"}),(0,a.kt)("inlineCode",{parentName:"h3"},"engine-mode: 1")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Overworld Configuration"),(0,a.kt)("p",null,"Replace the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"anti-xray")," block in ",(0,a.kt)("inlineCode",{parentName:"p"},"paper.yml")," (under ",(0,a.kt)("inlineCode",{parentName:"p"},"world-settings.default"),") with the\nfollowing:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml",metastring:'title="paper.yml"',title:'"paper.yml"'}),"    anti-xray:\n      enabled: true\n      engine-mode: 1\n      # As of 1.18 some ores are generated much higher.\n      # Please adjust the max-block-height setting at your own discretion.\n      # https://minecraft.fandom.com/wiki/Ore might be helpful.\n      max-block-height: 64\n      update-radius: 2\n      lava-obscures: false\n      use-permission: false\n      hidden-blocks:\n      # There's no chance to hide dungeon chests as they are entirely surrounded by air, but buried treasures will be hidden.\n      - chest\n      - coal_ore\n      - deepslate_coal_ore\n      - copper_ore\n      - deepslate_copper_ore\n      - raw_copper_block\n      - diamond_ore\n      - deepslate_diamond_ore\n      - emerald_ore\n      - deepslate_emerald_ore\n      - gold_ore\n      - deepslate_gold_ore\n      - iron_ore\n      - deepslate_iron_ore\n      - raw_iron_block\n      - lapis_ore\n      - deepslate_lapis_ore\n      - redstone_ore\n      - deepslate_redstone_ore\n      replacement-blocks:\n      # The replacement-blocks list is not used in engine-mode: 1. Changing this will have no effect.\n      - stone\n      - oak_planks\n      - deepslate\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"End and Nether Configuration"),(0,a.kt)("p",null,"Copy and paste this at the very bottom of ",(0,a.kt)("inlineCode",{parentName:"p"},"paper.yml"),". See the\n",(0,a.kt)("a",m({parentName:"p"},{href:"/paper/per-world-configuration"}),"Per-World Configuration Guide")," for more information. Remember to change\nthe world names if your worlds are named differently!"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yml",metastring:'title="paper.yml"',title:'"paper.yml"'}),"  world_nether:\n   anti-xray:\n      max-block-height: 128\n      hidden-blocks:\n      - ancient_debris\n      - nether_gold_ore\n      - nether_quartz_ore\n  world_the_end:\n    anti-xray:\n      enabled: false\n"))),(0,a.kt)("h3",m({},{id:"engine-mode-2"}),(0,a.kt)("inlineCode",{parentName:"h3"},"engine-mode: 2")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Overworld Configuration"),(0,a.kt)("p",null,"Replace the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"anti-xray")," block in ",(0,a.kt)("inlineCode",{parentName:"p"},"paper.yml")," (under ",(0,a.kt)("inlineCode",{parentName:"p"},"world-settings.default"),") with the\nfollowing:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml",metastring:'title="paper.yml"',title:'"paper.yml"'}),"    anti-xray:\n      enabled: true\n      engine-mode: 2\n      # As of 1.18 some ores are generated much higher.\n      # Please adjust the max-block-height setting at your own discretion.\n      # https://minecraft.fandom.com/wiki/Ore might be helpful.\n      max-block-height: 64\n      update-radius: 2\n      lava-obscures: false\n      use-permission: false\n      hidden-blocks:\n      # You can add air here such that many holes are generated.\n      # This works well against cave finders but may cause client FPS drops for all players.\n      - air\n      - copper_ore\n      - deepslate_copper_ore\n      - raw_copper_block\n      - diamond_ore\n      - deepslate_diamond_ore\n      - gold_ore\n      - deepslate_gold_ore\n      - iron_ore\n      - deepslate_iron_ore\n      - raw_iron_block\n      - lapis_ore\n      - deepslate_lapis_ore\n      - redstone_ore\n      - deepslate_redstone_ore\n      replacement-blocks:\n      # Chest is a tile entity and can't be added to hidden-blocks in engine-mode: 2.\n      # But adding chest here will hide buried treasures, if max-block-height is increased.\n      - chest\n      - amethyst_block\n      - andesite\n      - budding_amethyst\n      - calcite\n      - coal_ore\n      - deepslate_coal_ore\n      - deepslate\n      - diorite\n      - dirt\n      - emerald_ore\n      - deepslate_emerald_ore\n      - granite\n      - gravel\n      - oak_planks\n      - smooth_basalt\n      - stone\n      - tuff\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"End and Nether Configuration"),(0,a.kt)("p",null,"Copy and paste this at the very bottom of ",(0,a.kt)("inlineCode",{parentName:"p"},"paper.yml"),". See the\n",(0,a.kt)("a",m({parentName:"p"},{href:"/paper/per-world-configuration"}),"Per-World Configuration Guide")," for more information. Remember to change\nthe world names if your worlds are named differently!"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yml",metastring:'title="paper.yml"',title:'"paper.yml"'}),"  world_nether:\n    anti-xray:\n      max-block-height: 128\n      hidden-blocks:\n      # See note about air and possible client performance issues above.\n      - air\n      - ancient_debris\n      - bone_block\n      - glowstone\n      - magma_block\n      - nether_bricks\n      - nether_gold_ore\n      - nether_quartz_ore\n      - polished_blackstone_bricks\n      replacement-blocks:\n      - basalt\n      - blackstone\n      - gravel\n      - netherrack\n      - soul_sand\n      - soul_soil\n  world_the_end:\n    anti-xray:\n      enabled: false\n"))),(0,a.kt)("div",m({},{className:"footnotes"}),(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",m({parentName:"ol"},{id:"fn-1"}),"Image design by ",(0,a.kt)("inlineCode",{parentName:"li"},"Oberfail"),", initially posted in the\n",(0,a.kt)("a",m({parentName:"li"},{href:"https://discord.gg/papermc"}),"PaperMC Discord"),". \u200b",(0,a.kt)("a",m({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}y.isMDXComponent=!0},5167:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/anti-xray-nether-05e6e894ce876f94d4463e1f491d1030.png"},8739:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/anti-xray-overworld-3443fb41851dc5d9082f2956268232a1.png"}}]);