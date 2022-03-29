"use strict";
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 4907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 5525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": () => (/* binding */ frontMatter),
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "assets": () => (/* binding */ assets),
/* harmony export */   "toc": () => (/* binding */ toc),
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4907);
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

const frontMatter = {
  slug: "/velocity/why-velocity"
};
const contentTitle = "What Does Velocity Do For Me?";
const metadata = {
  "unversionedId": "velocity/getting-started/why-velocity",
  "id": "velocity/getting-started/why-velocity",
  "title": "What Does Velocity Do For Me?",
  "description": "We believe that Velocity is one of the best proxies for Minecraft around, and there's not much",
  "source": "@site/docs/velocity/getting-started/why-velocity.md",
  "sourceDirName": "velocity/getting-started",
  "slug": "/velocity/why-velocity",
  "permalink": "/docs-previews/pull/31/velocity/why-velocity",
  "editUrl": "https://github.com/PaperMC/docs/blob/main/docs/velocity/getting-started/why-velocity.md",
  "tags": [],
  "version": "current",
  "lastUpdatedBy": "sulu5890",
  "lastUpdatedAt": 1646714966,
  "formattedLastUpdatedAt": "3/8/2022",
  "frontMatter": {
    "slug": "/velocity/why-velocity"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Getting Started",
    "permalink": "/docs-previews/pull/31/velocity/getting-started/"
  },
  "next": {
    "title": "Configuring player information forwarding",
    "permalink": "/docs-previews/pull/31/velocity/player-information-forwarding"
  }
};
const assets = {};
const toc = [{
  value: "Strong experience",
  id: "strong-experience",
  level: 2
}, {
  value: "Leading performance",
  id: "leading-performance",
  level: 2
}, {
  value: "No entity ID rewriting",
  id: "no-entity-id-rewriting",
  level: 3
}, {
  value: "Going deep",
  id: "going-deep",
  level: 3
}, {
  value: "Internal stability policies",
  id: "internal-stability-policies",
  level: 3
}, {
  value: "Control is in your hands",
  id: "control-is-in-your-hands",
  level: 3
}, {
  value: "Improved security",
  id: "improved-security",
  level: 2
}, {
  value: "Standards and mod support",
  id: "standards-and-mod-support",
  level: 2
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
  return /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(MDXLayout, __spreadProps(__spreadValues(__spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h1", __spreadValues({}, {
    "id": "what-does-velocity-do-for-me"
  }), `What Does Velocity Do For Me?`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We believe that Velocity is one of the best proxies for `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Minecraft`), ` around, and there's not much
that can top it. However, we do diverge from more established, mainstream solutions in some
important ways. That can make Velocity a bit hard to sell. We are frequently asked "why?" so often.
This page is our answer to that question.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "strong-experience"
  }), `Strong experience`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The founder and primary developer of Velocity (Tux) has been active in developing proxy software for
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Minecraft: Java Edition`), ` since 2013. They created the RedisBungee plugin, contributed to BungeeCord
from 2014 to 2017, and also founded the Waterfall project and led it from 2016 to 2017. In fact, the
current maintainer of Waterfall helped encourage them to start a brand new proxy from the ground up!`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "leading-performance"
  }), `Leading performance`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Velocity powers several highly-populated Minecraft networks, while using fewer resources than the
competition. The recipe to the sauce is simple.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "no-entity-id-rewriting"
  }), `No entity ID rewriting`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When a Minecraft client connects to another Minecraft server, the server will send back an ID that
uniquely identifies a specific player connection. This ID is used in packets that target the player
that the server may send. But what happens when they're actually connecting a proxy that has the
ability to change what server the player is connected to?`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Other proxy solutions try to solve this problem by rewriting entity IDs that reference the current
player, changing it from the entity ID assigned by the server the player is currently connected to,
to the entity ID that the player got when they connected to the first server they connected to
through the proxy. This approach is often complicated, leads to bugs, reduces performance, breaks
mods, and ultimately cannot be a complete solution.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `However, the Minecraft client actually supports changing its entity ID with a special packet
sequence. Velocity takes advantage of this and forces the client to change its entity ID. This
approach improves performance, improves mod compatibility, and reduces issues caused by incomplete
entity ID rewrites.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "going-deep"
  }), `Going deep`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Velocity goes deeper than optimizing the handling of the Minecraft protocol. Smart handling of the
protocol produces incredible performance gains but for more performance, we need to go much deeper.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `One way in which we drastically improve performance and throughput is by improving the speed of
compressing packets to be sent to the client. On supported platforms (Linux x86_64 and aarch64),
Velocity is able to replace the zlib library ( which implements the compression algorithm used by
the Minecraft protocol) with `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://github.com/ebiggers/libdeflate"
  }), `libdeflate`), ` which is twice as
fast as zlib while delivering a similar compression ratio.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Velocity also employs several tricks to get the JIT (just-in-time) compiler on our side. Those
tricks require deep understanding of how Java works, but we put in the work to apply those tricks
which translate to increased performance.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "internal-stability-policies"
  }), `Internal stability policies`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Finally, Velocity does not attempt to maintain a stable internal API between minor and major
releases. This allows Velocity to be more flexible and still deliver performance improvements and
new features with each release. For instance, Velocity 1.1.0 delivered massive performance
improvements and added many significant new features by breaking parts of the internal API while
still keeping full compatibility with older plugins. Compare to BungeeCord which is often very
conservative about API breaks and when it does so, provides little notice of the break, and even
when doing a break, does not take the opportunity to seriously improve the API being broken (for
instance, adding RGB support to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ChatColor`), `).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "control-is-in-your-hands"
  }), `Control is in your hands`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We take pride in tuning Velocity to be the most performant proxy, but in case the speed provided
out-of-the-box is not good enough, you can easily tweak several performance-related settings in
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `velocity.toml`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "improved-security"
  }), `Improved security`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Velocity also features more security features, some of which are unique to Velocity. We proactively
foreclose as many denial-of-service attacks as soon as possible and feature a unique player info
forwarding system for Minecraft 1.13+ that requires the server and proxy to know a pre-arranged key.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "standards-and-mod-support"
  }), `Standards and mod support`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Unlike certain platforms which only provide lip service to the modding community (and can be at time
hostile to them), Velocity embraces the richness of the platform Minecraft provides. As just a small
example, we have a Fabric mod that
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.curseforge.com/minecraft/mc-mods/crossstitch"
  }), `helps bridge the gap between Velocity itself and mods that extend the Minecraft protocol`), `
and feature full Forge support for 1.7 through 1.12.2, with support for newer versions in
development. Velocity also supports emerging standard libraries in the community such as Kyori's
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://github.com/KyoriPowered/adventure"
  }), `Adventure`), ` library. We collaborate with the Minecraft
modding community.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;