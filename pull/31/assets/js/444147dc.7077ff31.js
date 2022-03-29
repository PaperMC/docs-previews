exports.id = 6850;
exports.ids = [6850];
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

/***/ 9469:
/***/ ((module) => {

// Exports
module.exports = {
	"tabItem": "tabItem_UFDk"
};


/***/ }),

/***/ 6464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": () => (/* binding */ assets),
  "contentTitle": () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  "frontMatter": () => (/* binding */ frontMatter),
  "metadata": () => (/* binding */ metadata),
  "toc": () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@mdx-js-react-virtual-775c376b22/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-bc84bd514b.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(4907);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__(6687);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2360);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-common-virtual-fd80b268dd/0/cache/@docusaurus-theme-common-npm-2.0.0-beta.17-e1f219c0b4-34689e4a9a.zip/node_modules/@docusaurus/theme-common/lib/index.js + 40 modules
var lib = __webpack_require__(7042);
// EXTERNAL MODULE: ./.yarn/cache/clsx-npm-1.1.1-362bec0598-ff05265032.zip/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6355);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Tabs/styles.module.css
var styles_module = __webpack_require__(9469);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Tabs/index.js
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





function isTabItem(comp) {
  return typeof comp.props.value !== "undefined";
}
function TabsComponent(props) {
  var _a, _b, _c;
  const {
    lazy,
    block,
    defaultValue: defaultValueProp,
    values: valuesProp,
    groupId,
    className
  } = props;
  const children = react.Children.map(props.children, (child) => {
    if ((0,react.isValidElement)(child) && isTabItem(child)) {
      return child;
    }
    throw new Error(`Docusaurus error: Bad <Tabs> child <${typeof child.type === "string" ? child.type : child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);
  });
  const values = valuesProp != null ? valuesProp : children.map(({ props: { value, label, attributes } }) => ({
    value,
    label,
    attributes
  }));
  const dup = (0,lib/* duplicates */.lx)(values, (a, b) => a.value === b.value);
  if (dup.length > 0) {
    throw new Error(`Docusaurus error: Duplicate values "${dup.map((a) => a.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);
  }
  const defaultValue = defaultValueProp === null ? defaultValueProp : (_c = defaultValueProp != null ? defaultValueProp : (_a = children.find((child) => child.props.default)) == null ? void 0 : _a.props.value) != null ? _c : (_b = children[0]) == null ? void 0 : _b.props.value;
  if (defaultValue !== null && !values.some((a) => a.value === defaultValue)) {
    throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${values.map((a) => a.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);
  }
  const { tabGroupChoices, setTabGroupChoices } = (0,lib/* useTabGroupChoice */.UB)();
  const [selectedValue, setSelectedValue] = (0,react.useState)(defaultValue);
  const tabRefs = [];
  const { blockElementScrollPositionUntilNextRender } = (0,lib/* useScrollPositionBlocker */.o5)();
  if (groupId != null) {
    const relevantTabGroupChoice = tabGroupChoices[groupId];
    if (relevantTabGroupChoice != null && relevantTabGroupChoice !== selectedValue && values.some((value) => value.value === relevantTabGroupChoice)) {
      setSelectedValue(relevantTabGroupChoice);
    }
  }
  const handleTabChange = (event) => {
    const newTab = event.currentTarget;
    const newTabIndex = tabRefs.indexOf(newTab);
    const newTabValue = values[newTabIndex].value;
    if (newTabValue !== selectedValue) {
      blockElementScrollPositionUntilNextRender(newTab);
      setSelectedValue(newTabValue);
      if (groupId != null) {
        setTabGroupChoices(groupId, newTabValue);
      }
    }
  };
  const handleKeydown = (event) => {
    let focusElement = null;
    switch (event.key) {
      case "ArrowRight": {
        const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
        focusElement = tabRefs[nextTab] || tabRefs[0];
        break;
      }
      case "ArrowLeft": {
        const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
        focusElement = tabRefs[prevTab] || tabRefs[tabRefs.length - 1];
        break;
      }
      default:
        break;
    }
    focusElement == null ? void 0 : focusElement.focus();
  };
  return /* @__PURE__ */ react.createElement("div", {
    className: "tabs-container"
  }, /* @__PURE__ */ react.createElement("ul", {
    role: "tablist",
    "aria-orientation": "horizontal",
    className: (0,clsx_m/* default */.Z)("tabs", {
      "tabs--block": block
    }, className)
  }, values.map(({ value, label, attributes }) => /* @__PURE__ */ react.createElement("li", __spreadProps(__spreadValues({
    role: "tab",
    tabIndex: selectedValue === value ? 0 : -1,
    "aria-selected": selectedValue === value,
    key: value,
    ref: (tabControl) => tabRefs.push(tabControl),
    onKeyDown: handleKeydown,
    onFocus: handleTabChange,
    onClick: handleTabChange
  }, attributes), {
    className: (0,clsx_m/* default */.Z)("tabs__item", (styles_module_default()).tabItem, attributes == null ? void 0 : attributes.className, {
      "tabs__item--active": selectedValue === value
    })
  }), label != null ? label : value))), lazy ? (0,react.cloneElement)(children.filter((tabItem) => tabItem.props.value === selectedValue)[0], {
    className: "margin-vert--md"
  }) : /* @__PURE__ */ react.createElement("div", {
    className: "margin-vert--md"
  }, children.map((tabItem, i) => (0,react.cloneElement)(tabItem, {
    key: i,
    hidden: tabItem.props.value !== selectedValue
  }))));
}
function Tabs(props) {
  const isBrowser = (0,useIsBrowser/* default */.Z)();
  return /* @__PURE__ */ react.createElement(TabsComponent, __spreadValues({
    key: String(isBrowser)
  }, props));
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/TabItem/index.js
var TabItem_defProp = Object.defineProperty;
var TabItem_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TabItem_hasOwnProp = Object.prototype.hasOwnProperty;
var TabItem_propIsEnum = Object.prototype.propertyIsEnumerable;
var TabItem_defNormalProp = (obj, key, value) => key in obj ? TabItem_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TabItem_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TabItem_hasOwnProp.call(b, prop))
      TabItem_defNormalProp(a, prop, b[prop]);
  if (TabItem_getOwnPropSymbols)
    for (var prop of TabItem_getOwnPropSymbols(b)) {
      if (TabItem_propIsEnum.call(b, prop))
        TabItem_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function TabItem({ children, hidden, className }) {
  return /* @__PURE__ */ react.createElement("div", TabItem_spreadValues({
    role: "tabpanel"
  }, {
    hidden,
    className
  }), children);
}

;// CONCATENATED MODULE: ./docs/velocity/developers/getting-started/creating-your-first-plugin.md
var creating_your_first_plugin_defProp = Object.defineProperty;
var creating_your_first_plugin_defProps = Object.defineProperties;
var creating_your_first_plugin_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var creating_your_first_plugin_getOwnPropSymbols = Object.getOwnPropertySymbols;
var creating_your_first_plugin_hasOwnProp = Object.prototype.hasOwnProperty;
var creating_your_first_plugin_propIsEnum = Object.prototype.propertyIsEnumerable;
var creating_your_first_plugin_defNormalProp = (obj, key, value) => key in obj ? creating_your_first_plugin_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var creating_your_first_plugin_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (creating_your_first_plugin_hasOwnProp.call(b, prop))
      creating_your_first_plugin_defNormalProp(a, prop, b[prop]);
  if (creating_your_first_plugin_getOwnPropSymbols)
    for (var prop of creating_your_first_plugin_getOwnPropSymbols(b)) {
      if (creating_your_first_plugin_propIsEnum.call(b, prop))
        creating_your_first_plugin_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var creating_your_first_plugin_spreadProps = (a, b) => creating_your_first_plugin_defProps(a, creating_your_first_plugin_getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (creating_your_first_plugin_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && creating_your_first_plugin_getOwnPropSymbols)
    for (var prop of creating_your_first_plugin_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && creating_your_first_plugin_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

const frontMatter = {
  slug: "/velocity/developers/creating-your-first-plugin"
};
const contentTitle = "Creating Your First Plugin";
const metadata = {
  "unversionedId": "velocity/developers/getting-started/creating-your-first-plugin",
  "id": "velocity/developers/getting-started/creating-your-first-plugin",
  "title": "Creating Your First Plugin",
  "description": "It is very simple to create a plugin for Velocity. This section will teach you how to setup your",
  "source": "@site/docs/velocity/developers/getting-started/creating-your-first-plugin.md",
  "sourceDirName": "velocity/developers/getting-started",
  "slug": "/velocity/developers/creating-your-first-plugin",
  "permalink": "/docs-previews/pull/31/velocity/developers/creating-your-first-plugin",
  "editUrl": "https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/getting-started/creating-your-first-plugin.md",
  "tags": [],
  "version": "current",
  "lastUpdatedBy": "sulu5890",
  "lastUpdatedAt": 1646714966,
  "formattedLastUpdatedAt": "3/8/2022",
  "frontMatter": {
    "slug": "/velocity/developers/creating-your-first-plugin"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Developer's Guide",
    "permalink": "/docs-previews/pull/31/velocity/developers/"
  },
  "next": {
    "title": "Velocity Plugin Basics",
    "permalink": "/docs-previews/pull/31/velocity/developers/api-basics"
  }
};
const assets = {};


const toc = [{
  value: "Before you continue...",
  id: "before-you-continue",
  level: 2
}, {
  value: "Set up your environment",
  id: "set-up-your-environment",
  level: 2
}, {
  value: "Creating the project in your IDE",
  id: "creating-the-project-in-your-ide",
  level: 2
}, {
  value: "I know how to do this. Give me what I need!",
  id: "i-know-how-to-do-this-give-me-what-i-need",
  level: 2
}, {
  value: "Maven repository",
  id: "maven-repository",
  level: 3
}, {
  value: "Dependency",
  id: "dependency",
  level: 3
}, {
  value: "Javadocs",
  id: "javadocs",
  level: 3
}, {
  value: "Set up your build system",
  id: "set-up-your-build-system",
  level: 2
}, {
  value: "Setting up the dependency",
  id: "setting-up-the-dependency",
  level: 3
}];
const layoutProps = {
  toc
};
const MDXLayout = "wrapper";
function MDXContent(_a) {
  var _b = _a, {
    components
  } = _b, props = __objRest(_b, [
    "components"
  ]);
  return /* @__PURE__ */ (0,esm/* mdx */.kt)(MDXLayout, creating_your_first_plugin_spreadProps(creating_your_first_plugin_spreadValues(creating_your_first_plugin_spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h1", creating_your_first_plugin_spreadValues({}, {
    "id": "creating-your-first-plugin"
  }), `Creating Your First Plugin`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `It is very simple to create a plugin for Velocity. This section will teach you how to setup your
IDE, your plugin identifiers, and give you an introduction to the basics of the Velocity API.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", creating_your_first_plugin_spreadValues({}, {
    "id": "before-you-continue"
  }), `Before you continue...`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `You will need proficiency in the Java programming language. If you don't know Java yet, we strongly
recommend you learn some basic Java before you continue.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", creating_your_first_plugin_spreadValues({}, {
    "id": "set-up-your-environment"
  }), `Set up your environment`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `You're going to need the `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", creating_your_first_plugin_spreadValues({
    parentName: "p"
  }, {
    "href": "/docs-previews/pull/31/java-install-update"
  }), `JDK`), ` and an IDE. If you don't have an
IDE, IntelliJ IDEA is recommended.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", creating_your_first_plugin_spreadValues({}, {
    "id": "creating-the-project-in-your-ide"
  }), `Creating the project in your IDE`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `Open your IDE`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `Click `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "li"
  }, `Create New Project`), ` or the equivalent`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `Select either `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "li"
  }, `Gradle`), ` or `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "li"
  }, `Maven`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `Make sure your `, /* @__PURE__ */ (0,esm/* mdx */.kt)("strong", {
    parentName: "li"
  }, `Project JDK`), ` is Java 8 or later`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("strong", {
    parentName: "li"
  }, `Finish`), ` the dialog and open the project.`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Now we have created our project, we need configure our build system.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", creating_your_first_plugin_spreadValues({}, {
    "id": "i-know-how-to-do-this-give-me-what-i-need"
  }), `I know how to do this. Give me what I need!`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", creating_your_first_plugin_spreadValues({}, {
    "id": "maven-repository"
  }), `Maven repository`), /* @__PURE__ */ (0,esm/* mdx */.kt)("table", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("th", creating_your_first_plugin_spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Name`), /* @__PURE__ */ (0,esm/* mdx */.kt)("th", creating_your_first_plugin_spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `URL`))), /* @__PURE__ */ (0,esm/* mdx */.kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("td", creating_your_first_plugin_spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "td"
  }, `papermc`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("td", creating_your_first_plugin_spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "td"
  }, `https://papermc.io/repo/repository/maven-public/`))))), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", creating_your_first_plugin_spreadValues({}, {
    "id": "dependency"
  }), `Dependency`), /* @__PURE__ */ (0,esm/* mdx */.kt)("table", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("th", creating_your_first_plugin_spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Group ID`), /* @__PURE__ */ (0,esm/* mdx */.kt)("th", creating_your_first_plugin_spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Artifact ID`), /* @__PURE__ */ (0,esm/* mdx */.kt)("th", creating_your_first_plugin_spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Version`))), /* @__PURE__ */ (0,esm/* mdx */.kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("td", creating_your_first_plugin_spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "td"
  }, `com.velocitypowered`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("td", creating_your_first_plugin_spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "td"
  }, `velocity-api`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("td", creating_your_first_plugin_spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "td"
  }, `3.1.1`))))), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", creating_your_first_plugin_spreadValues({}, {
    "id": "javadocs"
  }), `Javadocs`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Javadocs are available at `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", creating_your_first_plugin_spreadValues({
    parentName: "p"
  }, {
    "href": "https://jd.velocitypowered.com/3.0.0"
  }), `jd.velocitypowered.com/3.0.0`), `.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", creating_your_first_plugin_spreadValues({}, {
    "id": "set-up-your-build-system"
  }), `Set up your build system`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `You will need to setup a build system before you continue. While it is possible to write Velocity
plugins without one, having a build system will make your life a lot less difficult.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `How to set up a build system is outside the scope of this page, but you can look at your build
system's documentation (`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", creating_your_first_plugin_spreadValues({
    parentName: "p"
  }, {
    "href": "https://docs.gradle.org/current/userguide/userguide.html"
  }), `Gradle`), ` or
`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", creating_your_first_plugin_spreadValues({
    parentName: "p"
  }, {
    "href": "https://maven.apache.org/guides/getting-started/index.html"
  }), `Maven`), `) for assistance.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", creating_your_first_plugin_spreadValues({}, {
    "id": "setting-up-the-dependency"
  }), `Setting up the dependency`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Tabs, {
    groupId: "author-front-matter",
    mdxType: "Tabs"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)(TabItem, {
    value: "maven",
    label: "Maven POM",
    mdxType: "TabItem"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", creating_your_first_plugin_spreadValues({
    parentName: "pre"
  }, {
    "className": "language-xml",
    "metastring": 'name="pom.xml"',
    "name": '"pom.xml"'
  }), `<project>
    <repositories>
        <repository>
            <id>papermc</id>
            <url>https://papermc.io/repo/repository/maven-public/</url>
        </repository>
    </repositories>

    <dependencies>
        <dependency>
            <groupId>com.velocitypowered</groupId>
            <artifactId>velocity-api</artifactId>
            <version>3.1.1</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>
`))), /* @__PURE__ */ (0,esm/* mdx */.kt)(TabItem, {
    value: "gradle-kotlin",
    label: "Gradle Kotlin DSL",
    default: true,
    mdxType: "TabItem"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", creating_your_first_plugin_spreadValues({
    parentName: "pre"
  }, {
    "className": "language-kotlin",
    "metastring": 'name="build.gradle.kts"',
    "name": '"build.gradle.kts"'
  }), `repositories {
    maven {
        name = "papermc"
        url = uri("https://papermc.io/repo/repository/maven-public/")
    }
}

dependencies {
    compile("com.velocitypowered:velocity-api:3.1.1")
    annotationProcessor("com.velocitypowered:velocity-api:3.1.1")
}
`))), /* @__PURE__ */ (0,esm/* mdx */.kt)(TabItem, {
    value: "gradle-groovy",
    label: "Gradle Groovy DSL",
    mdxType: "TabItem"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", creating_your_first_plugin_spreadValues({
    parentName: "pre"
  }, {
    "className": "language-groovy",
    "metastring": 'name="build.gradle"',
    "name": '"build.gradle"'
  }), `repositories {
    maven {
        name 'papermc'
        url 'https://papermc.io/repo/repository/maven-public/'
    }
}

dependencies {
    compile 'com.velocitypowered:velocity-api:3.1.1'
    annotationProcessor 'com.velocitypowered:velocity-api:3.1.1'
}
`)))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;