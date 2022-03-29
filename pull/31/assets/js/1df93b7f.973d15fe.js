exports.id = 3237;
exports.ids = [3237];
exports.modules = {

/***/ 9751:
/***/ ((module) => {

// Exports
module.exports = {
	"heroBanner": "heroBanner__Akg",
	"buttons": "buttons_HJQ5"
};


/***/ }),

/***/ 7514:
/***/ ((module) => {

// Exports
module.exports = {
	"flex": "flex_f4dl",
	"project": "project_ldqH",
	"projectGitHub": "projectGitHub_UFH1",
	"projects": "projects_DOEk",
	"projectsContainer": "projectsContainer__BfS"
};


/***/ }),

/***/ 3124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__(6687);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js + 13 modules
var Layout = __webpack_require__(4069);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(1803);
// EXTERNAL MODULE: ./src/css/index.module.css
var index_module = __webpack_require__(9751);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(7910);
// EXTERNAL MODULE: ./src/css/projects.module.css
var projects_module = __webpack_require__(7514);
var projects_module_default = /*#__PURE__*/__webpack_require__.n(projects_module);
;// CONCATENATED MODULE: ./src/components/Projects.tsx
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};



const projects = [
  {
    title: "Paper",
    description: "High performance Minecraft server that aims to fix gameplay and mechanics inconsistencies.",
    repo: "PaperMC/Paper",
    link: "/paper"
  },
  {
    title: "Velocity",
    description: "The modern, next-generation Minecraft server proxy.",
    repo: "PaperMC/Velocity",
    link: "/velocity"
  },
  {
    title: "Waterfall",
    description: "BungeeCord proxy fork that aims to improve performance and stability.",
    repo: "PaperMC/Waterfall",
    link: "/waterfall"
  }
];
function Project(project) {
  return /* @__PURE__ */ react.createElement("div", {
    className: (projects_module_default()).project
  }, /* @__PURE__ */ react.createElement("div", {
    className: (projects_module_default()).flex
  }, /* @__PURE__ */ react.createElement(Link["default"], {
    className: (projects_module_default()).projectGitHub,
    to: `https://github.com/${project.repo}`
  }, project.title), /* @__PURE__ */ react.createElement("p", null, project.description)), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Link["default"], {
    className: "button button--primary",
    to: project.link
  }, "Go")));
}
function Projects() {
  return /* @__PURE__ */ react.createElement("section", {
    className: (projects_module_default()).projects
  }, /* @__PURE__ */ react.createElement("div", {
    className: (projects_module_default()).projectsContainer
  }, projects.map((project, index) => /* @__PURE__ */ react.createElement(Project, __spreadValues({
    key: index
  }, project)))));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-search-algolia-virtual-8b78fceaa5/0/cache/@docusaurus-theme-search-algolia-npm-2.0.0-beta.17-609067fadc-8a603d743a.zip/node_modules/@docusaurus/theme-search-algolia/lib/theme/SearchBar/index.js + 5 modules
var SearchBar = __webpack_require__(2018);
;// CONCATENATED MODULE: ./src/pages/index.tsx






function HomepageHeader() {
  const { siteConfig } = (0,useDocusaurusContext["default"])();
  return /* @__PURE__ */ react.createElement("header", {
    className: (index_module_default()).heroBanner
  }, /* @__PURE__ */ react.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ react.createElement("h1", {
    className: "hero__title"
  }, siteConfig.title), /* @__PURE__ */ react.createElement("p", {
    className: "hero__subtitle"
  }, siteConfig.tagline)));
}
function Home() {
  const {
    siteConfig: { customFields }
  } = (0,useDocusaurusContext["default"])();
  const { description } = customFields;
  return /* @__PURE__ */ react.createElement(Layout/* default */.Z, {
    title: "Home",
    description
  }, /* @__PURE__ */ react.createElement(HomepageHeader, null), /* @__PURE__ */ react.createElement("section", {
    className: "homePageSearch"
  }, /* @__PURE__ */ react.createElement(SearchBar/* default */.Z, null)), /* @__PURE__ */ react.createElement("main", null, /* @__PURE__ */ react.createElement(Projects, null)));
}


/***/ })

};
;