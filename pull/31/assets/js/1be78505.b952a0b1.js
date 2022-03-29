exports.id = 9514;
exports.ids = [9514,1214];
exports.modules = {

/***/ 4907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6687);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 5044:
/***/ ((module) => {

// Exports
module.exports = {
	"backToTopButton": "backToTopButton_kTZ2",
	"backToTopButtonShow": "backToTopButtonShow_F1fj"
};


/***/ }),

/***/ 2978:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "details_KslM"
};


/***/ }),

/***/ 5048:
/***/ ((module) => {

// Exports
module.exports = {
	"docPage": "docPage_meDy",
	"docMainContainer": "docMainContainer_z6Ff",
	"docSidebarContainer": "docSidebarContainer_hW5f",
	"docMainContainerEnhanced": "docMainContainerEnhanced_HElA",
	"docSidebarContainerHidden": "docSidebarContainerHidden_nKhZ",
	"collapsedDocSidebar": "collapsedDocSidebar__iGa",
	"expandSidebarButtonIcon": "expandSidebarButtonIcon_jTDL",
	"docItemWrapperEnhanced": "docItemWrapperEnhanced_v92b"
};


/***/ }),

/***/ 9687:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "sidebar_zs6k",
	"sidebarWithHideableNavbar": "sidebarWithHideableNavbar_McLZ",
	"sidebarHidden": "sidebarHidden_t6vP",
	"sidebarLogo": "sidebarLogo_DLGP",
	"menu": "menu_cQsk",
	"menuWithAnnouncementBar": "menuWithAnnouncementBar_xxqv",
	"collapseSidebarButton": "collapseSidebarButton_j1ca",
	"collapseSidebarButtonIcon": "collapseSidebarButtonIcon_dpUL",
	"sidebarMenuIcon": "sidebarMenuIcon_wSHs",
	"sidebarMenuCloseIcon": "sidebarMenuCloseIcon_wTmq"
};


/***/ }),

/***/ 6713:
/***/ ((module) => {

// Exports
module.exports = {
	"menuHtmlItem": "menuHtmlItem_hevv"
};


/***/ }),

/***/ 2261:
/***/ ((module) => {

// Exports
module.exports = {
	"anchorWithStickyNavbar": "anchorWithStickyNavbar_CmOh",
	"anchorWithHideOnScrollNavbar": "anchorWithHideOnScrollNavbar_FyGl"
};


/***/ }),

/***/ 8380:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContainer": "codeBlockContainer_X7hc",
	"codeBlockContent": "codeBlockContent_vqWU",
	"codeBlockTitle": "codeBlockTitle_B2tn",
	"codeBlock": "codeBlock_wPnj",
	"codeBlockStandalone": "codeBlockStandalone_LFTq",
	"copyButton": "copyButton_H_xL",
	"codeBlockLines": "codeBlockLines_fQUY"
};


/***/ }),

/***/ 150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocPage)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__(6687);
// EXTERNAL MODULE: ./.yarn/__virtual__/@mdx-js-react-virtual-775c376b22/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-bc84bd514b.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(4907);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-router-config-virtual-0740cb2862/0/cache/react-router-config-npm-5.1.1-671f936b6b-bde7ee7944.zip/node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(7019);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js + 13 modules
var Layout = __webpack_require__(4069);
// EXTERNAL MODULE: ./.yarn/cache/clsx-npm-1.1.1-362bec0598-ff05265032.zip/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6355);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-common-virtual-fd80b268dd/0/cache/@docusaurus-theme-common-npm-2.0.0-beta.17-e1f219c0b4-34689e4a9a.zip/node_modules/@docusaurus/theme-common/lib/index.js + 40 modules
var lib = __webpack_require__(7042);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo = __webpack_require__(771);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/IconArrow/index.js
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

function IconArrow(props) {
  return /* @__PURE__ */ react.createElement("svg", __spreadValues({
    width: "20",
    height: "20",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ react.createElement("g", {
    fill: "#7a7a7a"
  }, /* @__PURE__ */ react.createElement("path", {
    d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"
  })));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(6329);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(7910);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(4349);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/index.js
var IconExternalLink = __webpack_require__(2438);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItem/styles.module.css
var styles_module = __webpack_require__(6713);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2360);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItem/index.js
var DocSidebarItem_defProp = Object.defineProperty;
var DocSidebarItem_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DocSidebarItem_hasOwnProp = Object.prototype.hasOwnProperty;
var DocSidebarItem_propIsEnum = Object.prototype.propertyIsEnumerable;
var DocSidebarItem_defNormalProp = (obj, key, value) => key in obj ? DocSidebarItem_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DocSidebarItem_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DocSidebarItem_hasOwnProp.call(b, prop))
      DocSidebarItem_defNormalProp(a, prop, b[prop]);
  if (DocSidebarItem_getOwnPropSymbols)
    for (var prop of DocSidebarItem_getOwnPropSymbols(b)) {
      if (DocSidebarItem_propIsEnum.call(b, prop))
        DocSidebarItem_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (DocSidebarItem_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && DocSidebarItem_getOwnPropSymbols)
    for (var prop of DocSidebarItem_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && DocSidebarItem_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};










function DocSidebarItem(_a) {
  var _b = _a, { item } = _b, props = __objRest(_b, ["item"]);
  switch (item.type) {
    case "category":
      return /* @__PURE__ */ react.createElement(DocSidebarItemCategory, DocSidebarItem_spreadValues({
        item
      }, props));
    case "html":
      return /* @__PURE__ */ react.createElement(DocSidebarItemHtml, DocSidebarItem_spreadValues({
        item
      }, props));
    case "link":
    default:
      return /* @__PURE__ */ react.createElement(DocSidebarItemLink, DocSidebarItem_spreadValues({
        item
      }, props));
  }
}
function useAutoExpandActiveCategory({ isActive, collapsed, setCollapsed }) {
  const wasActive = (0,lib/* usePrevious */.D9)(isActive);
  (0,react.useEffect)(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      setCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, setCollapsed]);
}
function useCategoryHrefWithSSRFallback(item) {
  const isBrowser = (0,useIsBrowser/* default */.Z)();
  return (0,react.useMemo)(() => {
    if (item.href) {
      return item.href;
    }
    if (isBrowser || !item.collapsible) {
      return void 0;
    }
    return (0,lib/* findFirstCategoryLink */.Wl)(item);
  }, [item, isBrowser]);
}
function DocSidebarItemCategory(_c) {
  var _d = _c, {
    item,
    onItemClick,
    activePath,
    level,
    index
  } = _d, props = __objRest(_d, [
    "item",
    "onItemClick",
    "activePath",
    "level",
    "index"
  ]);
  const { items, label, collapsible, className, href } = item;
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
  const isActive = (0,lib/* isActiveSidebarItem */._F)(item, activePath);
  const isCurrentPage = (0,lib/* isSamePath */.Mg)(href, activePath);
  const { collapsed, setCollapsed } = (0,lib/* useCollapsible */.uR)({
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    }
  });
  useAutoExpandActiveCategory({
    isActive,
    collapsed,
    setCollapsed
  });
  const { expandedItem, setExpandedItem } = (0,lib/* useDocSidebarItemsExpandedState */.fP)();
  function updateCollapsed(toCollapsed = !collapsed) {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  }
  const { autoCollapseSidebarCategories } = (0,lib/* useThemeConfig */.LU)();
  (0,react.useEffect)(() => {
    if (collapsible && expandedItem && expandedItem !== index && autoCollapseSidebarCategories) {
      setCollapsed(true);
    }
  }, [
    collapsible,
    expandedItem,
    index,
    setCollapsed,
    autoCollapseSidebarCategories
  ]);
  return /* @__PURE__ */ react.createElement("li", {
    className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarItemCategory */.kM.docs.docSidebarItemCategory, lib/* ThemeClassNames.docs.docSidebarItemCategoryLevel */.kM.docs.docSidebarItemCategoryLevel(level), "menu__list-item", {
      "menu__list-item--collapsed": collapsed
    }, className)
  }, /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("menu__list-item-collapsible", {
      "menu__list-item-collapsible--active": isCurrentPage
    })
  }, /* @__PURE__ */ react.createElement(Link["default"], DocSidebarItem_spreadValues({
    className: (0,clsx_m/* default */.Z)("menu__link", {
      "menu__link--sublist": collapsible && !href,
      "menu__link--active": isActive
    }),
    onClick: collapsible ? (e) => {
      onItemClick == null ? void 0 : onItemClick(item);
      if (href) {
        updateCollapsed(false);
      } else {
        e.preventDefault();
        updateCollapsed();
      }
    } : () => {
      onItemClick == null ? void 0 : onItemClick(item);
    },
    "aria-current": isCurrentPage ? "page" : void 0,
    href: collapsible ? hrefWithSSRFallback != null ? hrefWithSSRFallback : "#" : hrefWithSSRFallback
  }, props), label), href && collapsible && /* @__PURE__ */ react.createElement("button", {
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",
      message: "Toggle the collapsible sidebar category '{label}'",
      description: "The ARIA label to toggle the collapsible sidebar category"
    }, {
      label
    }),
    type: "button",
    className: "clean-btn menu__caret",
    onClick: (e) => {
      e.preventDefault();
      updateCollapsed();
    }
  })), /* @__PURE__ */ react.createElement(lib/* Collapsible */.zF, {
    lazy: true,
    as: "ul",
    className: "menu__list",
    collapsed
  }, /* @__PURE__ */ react.createElement(theme_DocSidebarItems, {
    items,
    tabIndex: collapsed ? -1 : 0,
    onItemClick,
    activePath,
    level: level + 1
  })));
}
function DocSidebarItemHtml({ item, level, index }) {
  const { value, defaultStyle, className } = item;
  return /* @__PURE__ */ react.createElement("li", {
    className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarItemLink */.kM.docs.docSidebarItemLink, lib/* ThemeClassNames.docs.docSidebarItemLinkLevel */.kM.docs.docSidebarItemLinkLevel(level), defaultStyle && `${(styles_module_default()).menuHtmlItem} menu__list-item`, className),
    key: index,
    dangerouslySetInnerHTML: {
      __html: value
    }
  });
}
function DocSidebarItemLink(_e) {
  var _f = _e, {
    item,
    onItemClick,
    activePath,
    level,
    index
  } = _f, props = __objRest(_f, [
    "item",
    "onItemClick",
    "activePath",
    "level",
    "index"
  ]);
  const { href, label, className } = item;
  const isActive = (0,lib/* isActiveSidebarItem */._F)(item, activePath);
  return /* @__PURE__ */ react.createElement("li", {
    className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarItemLink */.kM.docs.docSidebarItemLink, lib/* ThemeClassNames.docs.docSidebarItemLinkLevel */.kM.docs.docSidebarItemLinkLevel(level), "menu__list-item", className),
    key: label
  }, /* @__PURE__ */ react.createElement(Link["default"], DocSidebarItem_spreadValues(DocSidebarItem_spreadValues({
    className: (0,clsx_m/* default */.Z)("menu__link", {
      "menu__link--active": isActive
    }),
    "aria-current": isActive ? "page" : void 0,
    to: href
  }, (0,isInternalUrl/* default */.Z)(href) && {
    onClick: onItemClick ? () => onItemClick(item) : void 0
  }), props), (0,isInternalUrl/* default */.Z)(href) ? label : /* @__PURE__ */ react.createElement("span", null, label, /* @__PURE__ */ react.createElement(IconExternalLink/* default */.Z, null))));
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItems/index.js
var DocSidebarItems_defProp = Object.defineProperty;
var DocSidebarItems_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DocSidebarItems_hasOwnProp = Object.prototype.hasOwnProperty;
var DocSidebarItems_propIsEnum = Object.prototype.propertyIsEnumerable;
var DocSidebarItems_defNormalProp = (obj, key, value) => key in obj ? DocSidebarItems_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DocSidebarItems_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DocSidebarItems_hasOwnProp.call(b, prop))
      DocSidebarItems_defNormalProp(a, prop, b[prop]);
  if (DocSidebarItems_getOwnPropSymbols)
    for (var prop of DocSidebarItems_getOwnPropSymbols(b)) {
      if (DocSidebarItems_propIsEnum.call(b, prop))
        DocSidebarItems_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DocSidebarItems_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (DocSidebarItems_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && DocSidebarItems_getOwnPropSymbols)
    for (var prop of DocSidebarItems_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && DocSidebarItems_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



function DocSidebarItems(_a) {
  var _b = _a, { items } = _b, props = DocSidebarItems_objRest(_b, ["items"]);
  return /* @__PURE__ */ react.createElement(lib/* DocSidebarItemsExpandedStateProvider */.D_, null, items.map((item, index) => /* @__PURE__ */ react.createElement(DocSidebarItem, DocSidebarItems_spreadValues({
    key: index,
    item,
    index
  }, props))));
}
/* harmony default export */ const theme_DocSidebarItems = ((0,react.memo)(DocSidebarItems));

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/styles.module.css
var DocSidebar_styles_module = __webpack_require__(9687);
var DocSidebar_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocSidebar_styles_module);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/index.js
var DocSidebar_defProp = Object.defineProperty;
var DocSidebar_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DocSidebar_hasOwnProp = Object.prototype.hasOwnProperty;
var DocSidebar_propIsEnum = Object.prototype.propertyIsEnumerable;
var DocSidebar_defNormalProp = (obj, key, value) => key in obj ? DocSidebar_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DocSidebar_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DocSidebar_hasOwnProp.call(b, prop))
      DocSidebar_defNormalProp(a, prop, b[prop]);
  if (DocSidebar_getOwnPropSymbols)
    for (var prop of DocSidebar_getOwnPropSymbols(b)) {
      if (DocSidebar_propIsEnum.call(b, prop))
        DocSidebar_defNormalProp(a, prop, b[prop]);
    }
  return a;
};








function useShowAnnouncementBar() {
  const { isActive } = (0,lib/* useAnnouncementBar */.nT)();
  const [showAnnouncementBar, setShowAnnouncementBar] = (0,react.useState)(isActive);
  (0,lib/* useScrollPosition */.RF)(({ scrollY }) => {
    if (isActive) {
      setShowAnnouncementBar(scrollY === 0);
    }
  }, [isActive]);
  return isActive && showAnnouncementBar;
}
function HideableSidebarButton({ onClick }) {
  return /* @__PURE__ */ react.createElement("button", {
    type: "button",
    title: (0,Translate/* translate */.I)({
      id: "theme.docs.sidebar.collapseButtonTitle",
      message: "Collapse sidebar",
      description: "The title attribute for collapse button of doc sidebar"
    }),
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.docs.sidebar.collapseButtonAriaLabel",
      message: "Collapse sidebar",
      description: "The title attribute for collapse button of doc sidebar"
    }),
    className: (0,clsx_m/* default */.Z)("button button--secondary button--outline", (DocSidebar_styles_module_default()).collapseSidebarButton),
    onClick
  }, /* @__PURE__ */ react.createElement(IconArrow, {
    className: (DocSidebar_styles_module_default()).collapseSidebarButtonIcon
  }));
}
function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  const {
    navbar: { hideOnScroll },
    hideableSidebar
  } = (0,lib/* useThemeConfig */.LU)();
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)((DocSidebar_styles_module_default()).sidebar, {
      [(DocSidebar_styles_module_default()).sidebarWithHideableNavbar]: hideOnScroll,
      [(DocSidebar_styles_module_default()).sidebarHidden]: isHidden
    })
  }, hideOnScroll && /* @__PURE__ */ react.createElement(Logo/* default */.Z, {
    tabIndex: -1,
    className: (DocSidebar_styles_module_default()).sidebarLogo
  }), /* @__PURE__ */ react.createElement("nav", {
    className: (0,clsx_m/* default */.Z)("menu thin-scrollbar", (DocSidebar_styles_module_default()).menu, {
      [(DocSidebar_styles_module_default()).menuWithAnnouncementBar]: showAnnouncementBar
    })
  }, /* @__PURE__ */ react.createElement("ul", {
    className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarMenu */.kM.docs.docSidebarMenu, "menu__list")
  }, /* @__PURE__ */ react.createElement(theme_DocSidebarItems, {
    items: sidebar,
    activePath: path,
    level: 1
  }))), hideableSidebar && /* @__PURE__ */ react.createElement(HideableSidebarButton, {
    onClick: onCollapse
  }));
}
const DocSidebarMobileSecondaryMenu = ({ toggleSidebar, sidebar, path }) => /* @__PURE__ */ react.createElement("ul", {
  className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarMenu */.kM.docs.docSidebarMenu, "menu__list")
}, /* @__PURE__ */ react.createElement(theme_DocSidebarItems, {
  items: sidebar,
  activePath: path,
  onItemClick: (item) => {
    if (item.type === "category" && item.href) {
      toggleSidebar();
    }
    if (item.type === "link") {
      toggleSidebar();
    }
  },
  level: 1
}));
function DocSidebarMobile(props) {
  return /* @__PURE__ */ react.createElement(lib/* MobileSecondaryMenuFiller */.Cv, {
    component: DocSidebarMobileSecondaryMenu,
    props
  });
}
const DocSidebarDesktopMemo = react.memo(DocSidebarDesktop);
const DocSidebarMobileMemo = react.memo(DocSidebarMobile);
function DocSidebar(props) {
  const windowSize = (0,lib/* useWindowSize */.iP)();
  const shouldRenderSidebarDesktop = windowSize === "desktop" || windowSize === "ssr";
  const shouldRenderSidebarMobile = windowSize === "mobile";
  return /* @__PURE__ */ react.createElement(react.Fragment, null, shouldRenderSidebarDesktop && /* @__PURE__ */ react.createElement(DocSidebarDesktopMemo, DocSidebar_spreadValues({}, props)), shouldRenderSidebarMobile && /* @__PURE__ */ react.createElement(DocSidebarMobileMemo, DocSidebar_spreadValues({}, props)));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(4906);
// EXTERNAL MODULE: ./.yarn/__virtual__/prism-react-renderer-virtual-ebe018b5fb/0/cache/prism-react-renderer-npm-1.3.1-88d38c2477-883693ea59.zip/node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(271);
;// CONCATENATED MODULE: ./.yarn/__virtual__/prism-react-renderer-virtual-ebe018b5fb/0/cache/prism-react-renderer-npm-1.3.1-88d38c2477-883693ea59.zip/node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ const duotoneDark = (theme);

;// CONCATENATED MODULE: ./.yarn/__virtual__/prism-react-renderer-virtual-ebe018b5fb/0/cache/prism-react-renderer-npm-1.3.1-88d38c2477-883693ea59.zip/node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism["default"],
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ const dist = (Highlight);


;// CONCATENATED MODULE: ./.yarn/cache/copy-text-to-clipboard-npm-3.0.1-cf7504b96b-4c301b9a65.zip/node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(input, { target = document.body } = {}) {
  const element = document.createElement("textarea");
  const previouslyFocusedElement = document.activeElement;
  element.value = input;
  element.setAttribute("readonly", "");
  element.style.contain = "strict";
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.style.fontSize = "12pt";
  const selection = document.getSelection();
  let originalRange = false;
  if (selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0);
  }
  target.append(element);
  element.select();
  element.selectionStart = 0;
  element.selectionEnd = input.length;
  let isSuccess = false;
  try {
    isSuccess = document.execCommand("copy");
  } catch {
  }
  element.remove();
  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
  return isSuccess;
}

// EXTERNAL MODULE: ./src/theme/CodeBlock/styles.module.css
var CodeBlock_styles_module = __webpack_require__(8380);
var CodeBlock_styles_module_default = /*#__PURE__*/__webpack_require__.n(CodeBlock_styles_module);
;// CONCATENATED MODULE: ./src/theme/CodeBlock/index.tsx
var CodeBlock_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var CodeBlock_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CodeBlock_hasOwnProp = Object.prototype.hasOwnProperty;
var CodeBlock_propIsEnum = Object.prototype.propertyIsEnumerable;
var CodeBlock_defNormalProp = (obj, key, value) => key in obj ? CodeBlock_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CodeBlock_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CodeBlock_hasOwnProp.call(b, prop))
      CodeBlock_defNormalProp(a, prop, b[prop]);
  if (CodeBlock_getOwnPropSymbols)
    for (var prop of CodeBlock_getOwnPropSymbols(b)) {
      if (CodeBlock_propIsEnum.call(b, prop))
        CodeBlock_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));







function CodeBlock({
  children,
  className: blockClassName = "",
  metastring,
  title,
  language: languageProp
}) {
  var _a;
  const { prism } = (0,lib/* useThemeConfig */.LU)();
  const [showCopied, setShowCopied] = (0,react.useState)(false);
  const [mounted, setMounted] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setMounted(true);
  }, []);
  const codeBlockTitle = (0,lib/* parseCodeBlockTitle */.bc)(metastring) || title;
  const prismTheme = (0,lib/* usePrismTheme */.pJ)();
  if (react.Children.toArray(children).some((el) => (0,react.isValidElement)(el))) {
    return /* @__PURE__ */ react.createElement(dist, __spreadProps(CodeBlock_spreadValues({}, defaultProps), {
      key: String(mounted),
      theme: prismTheme,
      code: "",
      language: "text"
    }), ({ className, style }) => /* @__PURE__ */ react.createElement("pre", {
      tabIndex: 0,
      className: (0,clsx_m/* default */.Z)(className, (CodeBlock_styles_module_default()).codeBlockStandalone, "thin-scrollbar", (CodeBlock_styles_module_default()).codeBlockContainer, blockClassName, lib/* ThemeClassNames.common.codeBlock */.kM.common.codeBlock),
      style
    }, /* @__PURE__ */ react.createElement("code", {
      className: (CodeBlock_styles_module_default()).codeBlockLines
    }, children)));
  }
  const content = Array.isArray(children) ? children.join("") : children;
  const language = (_a = languageProp != null ? languageProp : (0,lib/* parseLanguage */.Vo)(blockClassName)) != null ? _a : prism.defaultLanguage;
  const { highlightLines, code } = (0,lib/* parseLines */.nZ)(content, metastring, language);
  const handleCopyCode = () => {
    copyTextToClipboard(code);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2e3);
  };
  return /* @__PURE__ */ react.createElement(dist, __spreadProps(CodeBlock_spreadValues({}, defaultProps), {
    key: String(mounted),
    theme: prismTheme,
    code,
    language: language != null ? language : "text"
  }), ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)((CodeBlock_styles_module_default()).codeBlockContainer, blockClassName, {
      [`language-${language}`]: language && !blockClassName.includes(`language-${language}`)
    }, lib/* ThemeClassNames.common.codeBlock */.kM.common.codeBlock)
  }, codeBlockTitle && /* @__PURE__ */ react.createElement("div", {
    style,
    className: (CodeBlock_styles_module_default()).codeBlockTitle
  }, codeBlockTitle), /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)((CodeBlock_styles_module_default()).codeBlockContent, language)
  }, /* @__PURE__ */ react.createElement("pre", {
    tabIndex: 0,
    className: (0,clsx_m/* default */.Z)(className, (CodeBlock_styles_module_default()).codeBlock, "thin-scrollbar"),
    style
  }, /* @__PURE__ */ react.createElement("code", {
    className: (CodeBlock_styles_module_default()).codeBlockLines
  }, tokens.map((line, i) => {
    if (line.length === 1 && line[0].content === "\n") {
      line[0].content = "";
    }
    const lineProps = getLineProps({ line, key: i });
    if (highlightLines.includes(i)) {
      lineProps.className += " docusaurus-highlight-code-line";
    }
    return /* @__PURE__ */ react.createElement("span", CodeBlock_spreadValues({
      key: i
    }, lineProps), line.map((token, key) => /* @__PURE__ */ react.createElement("span", CodeBlock_spreadValues({
      key
    }, getTokenProps({ token, key })))), /* @__PURE__ */ react.createElement("br", null));
  }))), /* @__PURE__ */ react.createElement("button", {
    type: "button",
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.CodeBlock.copyButtonAriaLabel",
      message: "Copy code to clipboard",
      description: "The ARIA label for copy code blocks button"
    }),
    className: (0,clsx_m/* default */.Z)((CodeBlock_styles_module_default()).copyButton, "clean-btn"),
    onClick: handleCopyCode
  }, showCopied ? /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.CodeBlock.copied",
    description: "The copied button label on code blocks"
  }, "Copied") : /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.CodeBlock.copy",
    description: "The copy button label on code blocks"
  }, "Copy")))));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
var Heading = __webpack_require__(8614);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Details/styles.module.css
var Details_styles_module = __webpack_require__(2978);
var Details_styles_module_default = /*#__PURE__*/__webpack_require__.n(Details_styles_module);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Details/index.js
var Details_defProp = Object.defineProperty;
var Details_defProps = Object.defineProperties;
var Details_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Details_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Details_hasOwnProp = Object.prototype.hasOwnProperty;
var Details_propIsEnum = Object.prototype.propertyIsEnumerable;
var Details_defNormalProp = (obj, key, value) => key in obj ? Details_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Details_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Details_hasOwnProp.call(b, prop))
      Details_defNormalProp(a, prop, b[prop]);
  if (Details_getOwnPropSymbols)
    for (var prop of Details_getOwnPropSymbols(b)) {
      if (Details_propIsEnum.call(b, prop))
        Details_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Details_spreadProps = (a, b) => Details_defProps(a, Details_getOwnPropDescs(b));
var Details_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Details_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Details_getOwnPropSymbols)
    for (var prop of Details_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Details_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




const InfimaClasses = "alert alert--info";
function Details(_a) {
  var props = Details_objRest(_a, []);
  return /* @__PURE__ */ react.createElement(lib/* Details */.PO, Details_spreadProps(Details_spreadValues({}, props), {
    className: (0,clsx_m/* default */.Z)(InfimaClasses, (Details_styles_module_default()).details, props.className)
  }));
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js
var MDXComponents_defProp = Object.defineProperty;
var MDXComponents_defProps = Object.defineProperties;
var MDXComponents_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var MDXComponents_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MDXComponents_hasOwnProp = Object.prototype.hasOwnProperty;
var MDXComponents_propIsEnum = Object.prototype.propertyIsEnumerable;
var MDXComponents_defNormalProp = (obj, key, value) => key in obj ? MDXComponents_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MDXComponents_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MDXComponents_hasOwnProp.call(b, prop))
      MDXComponents_defNormalProp(a, prop, b[prop]);
  if (MDXComponents_getOwnPropSymbols)
    for (var prop of MDXComponents_getOwnPropSymbols(b)) {
      if (MDXComponents_propIsEnum.call(b, prop))
        MDXComponents_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var MDXComponents_spreadProps = (a, b) => MDXComponents_defProps(a, MDXComponents_getOwnPropDescs(b));
var MDXComponents_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (MDXComponents_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && MDXComponents_getOwnPropSymbols)
    for (var prop of MDXComponents_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && MDXComponents_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};







function unwrapMDXElement(element) {
  var _a, _b;
  if (((_a = element == null ? void 0 : element.props) == null ? void 0 : _a.mdxType) && ((_b = element == null ? void 0 : element.props) == null ? void 0 : _b.originalType)) {
    const _c = element.props, { mdxType, originalType } = _c, newProps = MDXComponents_objRest(_c, ["mdxType", "originalType"]);
    return react.createElement(element.props.originalType, newProps);
  }
  return element;
}
const MDXComponents = {
  head: (props) => {
    const unwrappedChildren = react.Children.map(props.children, (child) => unwrapMDXElement(child));
    return /* @__PURE__ */ react.createElement(Head["default"], MDXComponents_spreadValues({}, props), unwrappedChildren);
  },
  code: (props) => {
    const inlineElements = [
      "a",
      "b",
      "big",
      "i",
      "span",
      "em",
      "strong",
      "sup",
      "sub",
      "small"
    ];
    const shouldBeInline = react.Children.toArray(props.children).every((el) => typeof el === "string" && !el.includes("\n") || react.isValidElement(el) && inlineElements.includes(el.props.mdxType));
    return shouldBeInline ? /* @__PURE__ */ react.createElement("code", MDXComponents_spreadValues({}, props)) : /* @__PURE__ */ react.createElement(CodeBlock, MDXComponents_spreadValues({}, props));
  },
  a: (props) => /* @__PURE__ */ react.createElement(Link["default"], MDXComponents_spreadValues({}, props)),
  pre: (props) => {
    var _a;
    return /* @__PURE__ */ react.createElement(CodeBlock, MDXComponents_spreadValues({}, (0,react.isValidElement)(props.children) && props.children.props.originalType === "code" ? (_a = props.children) == null ? void 0 : _a.props : MDXComponents_spreadValues({}, props)));
  },
  details: (props) => {
    const items = react.Children.toArray(props.children);
    const summary = items.find((item) => {
      var _a;
      return ((_a = item == null ? void 0 : item.props) == null ? void 0 : _a.mdxType) === "summary";
    });
    const children = /* @__PURE__ */ react.createElement(react.Fragment, null, items.filter((item) => item !== summary));
    return /* @__PURE__ */ react.createElement(Details, MDXComponents_spreadProps(MDXComponents_spreadValues({}, props), {
      summary
    }), children);
  },
  h1: (props) => /* @__PURE__ */ react.createElement(Heading/* default */.Z, MDXComponents_spreadValues({
    as: "h1"
  }, props)),
  h2: (props) => /* @__PURE__ */ react.createElement(Heading/* default */.Z, MDXComponents_spreadValues({
    as: "h2"
  }, props)),
  h3: (props) => /* @__PURE__ */ react.createElement(Heading/* default */.Z, MDXComponents_spreadValues({
    as: "h3"
  }, props)),
  h4: (props) => /* @__PURE__ */ react.createElement(Heading/* default */.Z, MDXComponents_spreadValues({
    as: "h4"
  }, props)),
  h5: (props) => /* @__PURE__ */ react.createElement(Heading/* default */.Z, MDXComponents_spreadValues({
    as: "h5"
  }, props)),
  h6: (props) => /* @__PURE__ */ react.createElement(Heading/* default */.Z, MDXComponents_spreadValues({
    as: "h6"
  }, props))
};
/* harmony default export */ const theme_MDXComponents = (MDXComponents);

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/NotFound.js
var NotFound = __webpack_require__(1214);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/BackToTopButton/styles.module.css
var BackToTopButton_styles_module = __webpack_require__(5044);
var BackToTopButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(BackToTopButton_styles_module);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/BackToTopButton/index.js





const threshold = 300;
const SupportsNativeSmoothScrolling = false;
function smoothScrollTopNative() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  return () => {
  };
}
function smoothScrollTopPolyfill() {
  let raf = null;
  function rafRecursion() {
    const currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
      raf = requestAnimationFrame(rafRecursion);
      window.scrollTo(0, Math.floor(currentScroll * 0.85));
    }
  }
  rafRecursion();
  return () => raf && cancelAnimationFrame(raf);
}
function useSmoothScrollToTop() {
  const lastCancelRef = (0,react.useRef)(null);
  function smoothScrollTop() {
    lastCancelRef.current = SupportsNativeSmoothScrolling ? smoothScrollTopNative() : smoothScrollTopPolyfill();
  }
  return {
    smoothScrollTop,
    cancelScrollToTop: () => {
      var _a;
      return (_a = lastCancelRef.current) == null ? void 0 : _a.call(lastCancelRef);
    }
  };
}
function BackToTopButton() {
  const [show, setShow] = (0,react.useState)(false);
  const isFocusedAnchor = (0,react.useRef)(false);
  const { smoothScrollTop, cancelScrollToTop } = useSmoothScrollToTop();
  (0,lib/* useScrollPosition */.RF)(({ scrollY: scrollTop }, lastPosition) => {
    const lastScrollTop = lastPosition == null ? void 0 : lastPosition.scrollY;
    if (!lastScrollTop) {
      return;
    }
    if (isFocusedAnchor.current) {
      isFocusedAnchor.current = false;
      return;
    }
    const isScrollingUp = scrollTop < lastScrollTop;
    if (!isScrollingUp) {
      cancelScrollToTop();
    }
    if (scrollTop < threshold) {
      setShow(false);
      return;
    }
    if (isScrollingUp) {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      if (scrollTop + windowHeight < documentHeight) {
        setShow(true);
      }
    } else {
      setShow(false);
    }
  });
  (0,lib/* useLocationChange */.SL)((locationChangeEvent) => {
    if (locationChangeEvent.location.hash) {
      isFocusedAnchor.current = true;
      setShow(false);
    }
  });
  return /* @__PURE__ */ react.createElement("button", {
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.BackToTopButton.buttonAriaLabel",
      message: "Scroll back to top",
      description: "The ARIA label for the back to top button"
    }),
    className: (0,clsx_m/* default */.Z)("clean-btn", lib/* ThemeClassNames.common.backToTopButton */.kM.common.backToTopButton, (BackToTopButton_styles_module_default()).backToTopButton, {
      [(BackToTopButton_styles_module_default()).backToTopButtonShow]: show
    }),
    type: "button",
    onClick: () => smoothScrollTop()
  });
}

// EXTERNAL MODULE: ./.yarn/__virtual__/react-router-virtual-dfb5b66473/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(6095);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/styles.module.css
var DocPage_styles_module = __webpack_require__(5048);
var DocPage_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocPage_styles_module);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/index.js















function DocPageContent({
  currentDocRoute,
  versionMetadata,
  children,
  sidebarName
}) {
  const sidebar = (0,lib/* useDocsSidebar */.Vq)();
  const { pluginId, version } = versionMetadata;
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0,react.useState)(false);
  const [hiddenSidebar, setHiddenSidebar] = (0,react.useState)(false);
  const toggleSidebar = (0,react.useCallback)(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    setHiddenSidebarContainer((value) => !value);
  }, [hiddenSidebar]);
  return /* @__PURE__ */ react.createElement(Layout/* default */.Z, {
    wrapperClassName: lib/* ThemeClassNames.wrapper.docsPages */.kM.wrapper.docsPages,
    pageClassName: lib/* ThemeClassNames.page.docsDocPage */.kM.page.docsDocPage,
    searchMetadata: {
      version,
      tag: (0,lib/* docVersionSearchTag */.os)(pluginId, version)
    }
  }, /* @__PURE__ */ react.createElement("div", {
    className: (DocPage_styles_module_default()).docPage
  }, /* @__PURE__ */ react.createElement(BackToTopButton, null), sidebar && /* @__PURE__ */ react.createElement("aside", {
    className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarContainer */.kM.docs.docSidebarContainer, (DocPage_styles_module_default()).docSidebarContainer, {
      [(DocPage_styles_module_default()).docSidebarContainerHidden]: hiddenSidebarContainer
    }),
    onTransitionEnd: (e) => {
      if (!e.currentTarget.classList.contains((DocPage_styles_module_default()).docSidebarContainer)) {
        return;
      }
      if (hiddenSidebarContainer) {
        setHiddenSidebar(true);
      }
    }
  }, /* @__PURE__ */ react.createElement(DocSidebar, {
    key: sidebarName,
    sidebar,
    path: currentDocRoute.path,
    onCollapse: toggleSidebar,
    isHidden: hiddenSidebar
  }), hiddenSidebar && /* @__PURE__ */ react.createElement("div", {
    className: (DocPage_styles_module_default()).collapsedDocSidebar,
    title: (0,Translate/* translate */.I)({
      id: "theme.docs.sidebar.expandButtonTitle",
      message: "Expand sidebar",
      description: "The ARIA label and title attribute for expand button of doc sidebar"
    }),
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.docs.sidebar.expandButtonAriaLabel",
      message: "Expand sidebar",
      description: "The ARIA label and title attribute for expand button of doc sidebar"
    }),
    tabIndex: 0,
    role: "button",
    onKeyDown: toggleSidebar,
    onClick: toggleSidebar
  }, /* @__PURE__ */ react.createElement(IconArrow, {
    className: (DocPage_styles_module_default()).expandSidebarButtonIcon
  }))), /* @__PURE__ */ react.createElement("main", {
    className: (0,clsx_m/* default */.Z)((DocPage_styles_module_default()).docMainContainer, {
      [(DocPage_styles_module_default()).docMainContainerEnhanced]: hiddenSidebarContainer || !sidebar
    })
  }, /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("container padding-top--md padding-bottom--lg", (DocPage_styles_module_default()).docItemWrapper, {
      [(DocPage_styles_module_default()).docItemWrapperEnhanced]: hiddenSidebarContainer
    })
  }, /* @__PURE__ */ react.createElement(esm/* MDXProvider */.Zo, {
    components: theme_MDXComponents
  }, children)))));
}
function DocPage(props) {
  const {
    route: { routes: docRoutes },
    versionMetadata,
    location
  } = props;
  const currentDocRoute = docRoutes.find((docRoute) => (0,react_router/* matchPath */.LX)(location.pathname, docRoute));
  if (!currentDocRoute) {
    return /* @__PURE__ */ react.createElement(NotFound["default"], null);
  }
  const sidebarName = currentDocRoute.sidebar;
  const sidebar = sidebarName ? versionMetadata.docsSidebars[sidebarName] : null;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Head["default"], null, /* @__PURE__ */ react.createElement("html", {
    className: versionMetadata.className
  })), /* @__PURE__ */ react.createElement(lib/* DocsVersionProvider */.qu, {
    version: versionMetadata
  }, /* @__PURE__ */ react.createElement(lib/* DocsSidebarProvider */.bT, {
    sidebar
  }, /* @__PURE__ */ react.createElement(DocPageContent, {
    currentDocRoute,
    versionMetadata,
    sidebarName
  }, (0,react_router_config/* renderRoutes */.H)(docRoutes, {
    versionMetadata
  })))));
}


/***/ }),

/***/ 8614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6687);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6355);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6329);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7042);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2261);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





function AnchorHeading(_a) {
  var _b = _a, { as: As, id } = _b, props = __objRest(_b, ["as", "id"]);
  const {
    navbar: { hideOnScroll }
  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .LU)();
  if (!id) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(As, __spreadValues({}, props));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(As, __spreadProps(__spreadValues({}, props), {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("anchor", {
      [(_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().anchorWithHideOnScrollNavbar)]: hideOnScroll,
      [(_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().anchorWithStickyNavbar)]: !hideOnScroll
    }),
    id
  }), props.children, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "hash-link",
    href: `#${id}`,
    title: (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({
      id: "theme.common.headingLinkTitle",
      message: "Direct link to heading",
      description: "Title for link to heading"
    })
  }, "\u200B"));
}
function Heading(_c) {
  var _d = _c, { as } = _d, props = __objRest(_d, ["as"]);
  if (as === "h1") {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", __spreadProps(__spreadValues({}, props), {
      id: void 0
    }), props.children);
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnchorHeading, __spreadValues({
    as
  }, props));
}


/***/ }),

/***/ 1214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6687);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4069);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6329);



function NotFound() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    title: (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .I)({
      id: "theme.NotFound.title",
      message: "Page Not Found"
    })
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "container margin-vert--xl"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col--6 col--offset-3"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "hero__title"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    id: "theme.NotFound.title",
    description: "The title of the 404 page"
  }, "Page Not Found")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    id: "theme.NotFound.p1",
    description: "The first paragraph of the 404 page"
  }, "We could not find what you were looking for.")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    id: "theme.NotFound.p2",
    description: "The 2nd paragraph of the 404 page"
  }, "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))));
}


/***/ })

};
;