exports.id = 3102;
exports.ids = [3102];
exports.modules = {

/***/ 9077:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "container_vd1s",
	"nav": "nav_jXke",
	"navlink": "navlink_P_nh",
	"active": "active_rEvj"
};


/***/ }),

/***/ 7536:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "list_mUxb",
	"listItem": "listItem_dhGu"
};


/***/ }),

/***/ 9970:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(8145);
const react_1 = tslib_1.__importDefault(__webpack_require__(6687));
const Head_1 = tslib_1.__importDefault(__webpack_require__(4906));
const Link_1 = tslib_1.__importDefault(__webpack_require__(7910));
const styles_module_css_1 = tslib_1.__importDefault(__webpack_require__(9077));
function DebugNavLink({ to, children }) {
  return react_1.default.createElement(Link_1.default, { className: styles_module_css_1.default.navlink, isNavLink: true, to, exact: true, activeStyle: {
    backgroundColor: "#363739"
  } }, children);
}
function DebugLayout({ children }) {
  return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(Head_1.default, null, react_1.default.createElement("html", { lang: "en" }), react_1.default.createElement("title", null, "Docusaurus debug panel")), react_1.default.createElement("div", null, react_1.default.createElement("nav", { className: styles_module_css_1.default.nav }, react_1.default.createElement(DebugNavLink, { to: "/__docusaurus/debug" }, "Config"), react_1.default.createElement(DebugNavLink, { to: "/__docusaurus/debug/metadata" }, "Metadata"), react_1.default.createElement(DebugNavLink, { to: "/__docusaurus/debug/registry" }, "Registry"), react_1.default.createElement(DebugNavLink, { to: "/__docusaurus/debug/routes" }, "Routes"), react_1.default.createElement(DebugNavLink, { to: "/__docusaurus/debug/content" }, "Content"), react_1.default.createElement(DebugNavLink, { to: "/__docusaurus/debug/globalData" }, "Global data")), react_1.default.createElement("main", { className: styles_module_css_1.default.container }, children)));
}
exports["default"] = DebugLayout;


/***/ }),

/***/ 1788:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(8145);
const react_1 = tslib_1.__importDefault(__webpack_require__(6687));
const DebugLayout_1 = tslib_1.__importDefault(__webpack_require__(9970));
const registry_1 = tslib_1.__importDefault(__webpack_require__(8301));
const styles_module_css_1 = tslib_1.__importDefault(__webpack_require__(7536));
function DebugRegistry() {
  return react_1.default.createElement(DebugLayout_1.default, null, react_1.default.createElement("h2", null, "Registry"), react_1.default.createElement("ul", { className: styles_module_css_1.default.list }, Object.values(registry_1.default).map(([, aliasedPath, resolved]) => react_1.default.createElement("li", { key: aliasedPath, className: styles_module_css_1.default.listItem }, react_1.default.createElement("div", { style: { marginBottom: "10px" } }, "Aliased Path: ", react_1.default.createElement("code", null, aliasedPath)), react_1.default.createElement("div", null, "Resolved Path: ", react_1.default.createElement("code", null, resolved))))));
}
exports["default"] = DebugRegistry;


/***/ })

};
;