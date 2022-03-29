"use strict";
exports.id = 9024;
exports.ids = [9024];
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

/***/ 7211:
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
  slug: "/velocity/tuning"
};
const contentTitle = "Tuning Velocity";
const metadata = {
  "unversionedId": "velocity/how-to/tuning",
  "id": "velocity/how-to/tuning",
  "title": "Tuning Velocity",
  "description": "Velocity comes with good performance out of the box. We go in deep, starting from smart algorithmic",
  "source": "@site/docs/velocity/how-to/tuning.md",
  "sourceDirName": "velocity/how-to",
  "slug": "/velocity/tuning",
  "permalink": "/docs-previews/pull/31/velocity/tuning",
  "editUrl": "https://github.com/PaperMC/docs/blob/main/docs/velocity/how-to/tuning.md",
  "tags": [],
  "version": "current",
  "lastUpdatedBy": "Evan McCarthy",
  "lastUpdatedAt": 1646787673,
  "formattedLastUpdatedAt": "3/9/2022",
  "frontMatter": {
    "slug": "/velocity/tuning"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Securing Your Servers",
    "permalink": "/docs-previews/pull/31/velocity/security"
  },
  "next": {
    "title": "Migration Guide",
    "permalink": "/docs-previews/pull/31/velocity/migration"
  }
};
const assets = {};
const toc = [{
  value: "Host the proxy on Linux",
  id: "host-the-proxy-on-linux",
  level: 2
}, {
  value: "Allocate server resources appropriately",
  id: "allocate-server-resources-appropriately",
  level: 2
}, {
  value: "Special notes regarding speculative execution security vulnerabilities",
  id: "special-notes-regarding-speculative-execution-security-vulnerabilities",
  level: 3
}, {
  value: "Allocate enough heap",
  id: "allocate-enough-heap",
  level: 2
}, {
  value: "Special notes for containers",
  id: "special-notes-for-containers",
  level: 3
}, {
  value: "Tune your startup flags",
  id: "tune-your-startup-flags",
  level: 2
}, {
  value: "Explanation of the flags",
  id: "explanation-of-the-flags",
  level: 3
}, {
  value: "Other configurations",
  id: "other-configurations",
  level: 3
}, {
  value: "ZGC",
  id: "zgc",
  level: 4
}, {
  value: "Shenandoah",
  id: "shenandoah",
  level: 4
}, {
  value: "OpenJ9",
  id: "openj9",
  level: 4
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
    "id": "tuning-velocity"
  }), `Tuning Velocity`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Velocity comes with good performance out of the box. We go in deep, starting from smart algorithmic
choices, making strategic usage of native libraries, all the way to the JVM level, optimizing the
proxy so that the JVM will make better decisions when optimizing the code.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "host-the-proxy-on-linux"
  }), `Host the proxy on Linux`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Velocity comes with high-performance, specially tuned native libraries for compression and
encryption, along with including native transports from Netty. However, due to support constraints,
the compiled natives are only verified to work on Linux x86_64 and aarch64. While Velocity does not
require the natives to work, you will suffer from degraded performance. For this reason, we strongly
recommend that all production deployments of Velocity run on x86-64 Linux.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "allocate-server-resources-appropriately"
  }), `Allocate server resources appropriately`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You should always make sure to allocate the correct amount of heap, network bandwidth, and get the
right CPU for the amount of players you want to have on your proxy at a given time. For instance, it
is unlikely you'll be able to get 1,000 players on a Raspberry Pi Zero, but you'll have a much
better chance if you have a recent high-end server CPU from Intel or AMD.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `There is no "one-size-fits-all" hardware recommendation, only general guidelines for the amount of
players you can expect:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Prefer lots of cores but lower clock speeds. Unlike the Minecraft server, Velocity can actually
benefit from the extra cores and single-threaded performance is not as important.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `You should always have enough memory to run Velocity, including room for JVM overhead and for your
operating system. For a rough minimum recommended memory amount, double the size of the proxy heap
and then add 2GB. For instance, for a proxy with a 2GB heap, plan on getting at least 6GB of
memory.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Disk speed is unimportant. A solid-state drive is nice to have but not strictly required.
Likewise, disk capacity is unimportant as well.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "special-notes-regarding-speculative-execution-security-vulnerabilities"
  }), `Special notes regarding speculative execution security vulnerabilities`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Starting in 2018, a number of security vulnerabilities with regard to
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Speculative_execution"
  }), `speculative execution`), ` used by modern CPUs
have been discovered.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The mitigations to these vulnerabilities can have painful performance implications, especially on
processors vulnerable to Meltdown and further compounded if running in a virtual machine. Velocity,
as a network application, is particularly sensitive to the performance hits that the mitigations
introduce.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `To minimize these hits, we recommend hosting your proxy on a machine with a CPU that has mitigations
against Spectre and Meltdown. Processors released in 2019 and onwards typically contain mitigations
to protect against Spectre and Meltdown.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you are using a CPU vulnerable to Spectre and/or Meltdown and are willing to risk security for
performance, it is also possible to disable Spectre/Meltdown mitigations depending on the operating
system you use. Note however that you disable these security mitigations `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `at your own risk`), `. The
Velocity project does not recommend that you disable these mitigations.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "allocate-enough-heap"
  }), `Allocate enough heap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Alongside having enough CPU, memory, and network bandwidth, you must also allocate enough Java heap
to the proxy. Not doing this can induce lag and in severe cases may result in the proxy being
terminated by the Java Virtual Machine because it ran out of memory.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The general rule of thumb is that you allocate 512MB per 500 players, plus some extra to allow for
some room for error ( typically 1GB extra). For instance, if you want to handle 1,000 on a single
proxy, plan to allocate 2GB of heap.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "special-notes-for-containers"
  }), `Special notes for containers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `If you use a containerized setup (such as using Kubernetes, Pterodactyl, or Docker directly), you
should not allocate the entirety of your memory allocation to the heap!`), ` Doing so `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `will`), ` likely
cause the proxy to be killed by the kernel's out-of-memory killer, which will result in your proxy
going down, likely at the worst possible time.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A safe (albeit conservative) setting for the heap would be to allocate half of the memory you
allocate to the proxy container in total. For instance, if you know the proxy will need to hold
1,000 players, then allocate 4GB to the container and give the proxy 2GB of heap.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "tune-your-startup-flags"
  }), `Tune your startup flags`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We also recommend tuning your startup flags. The current recommendation is:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `-XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -XX:MaxInlineLevel=15
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You will add these flags after the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `java`), ` command but before the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `-jar`), ` parameter.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "explanation-of-the-flags"
  }), `Explanation of the flags`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Most of these flags focus on tuning the G1 garbage collector to be more friendly to Velocity's
workload. One of these flags (`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `-XX:MaxInlineLevel=15`), `) tends to improve performance in general.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Before the release of Java 9, the default Java garbage collector was the Parallel GC. This is a
stop-the-world collector that does its work in parallel. The problem is that its pause times tend to
be long, and are not suitable for Minecraft (often showing up as seemingly unexplainable lag
spikes).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The recommended garbage collector for Velocity is the G1 region-based collector. There are several
reasons for us to recommend G1:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `It strikes the right balance between throughput and pause times. Throughput is roughly how much
work the proxy can achieve.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `It is compatible with most setups (it is available in Java 8, the earliest Java version we
support).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Setups using these flags tend have very low (less than 10 millisecond) GC pauses every few minutes,
which is very good for Minecraft.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "other-configurations"
  }), `Other configurations`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("div", __spreadValues({}, {
    "className": "admonition admonition-caution alert alert--warning"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("div", __spreadValues({
    parentName: "div"
  }, {
    "className": "admonition-heading"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", {
    parentName: "div"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("span", __spreadValues({
    parentName: "h5"
  }, {
    "className": "admonition-icon"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("svg", __spreadValues({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "16",
    "height": "16",
    "viewBox": "0 0 16 16"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("path", __spreadValues({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
  })))), `caution`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("div", __spreadValues({
    parentName: "div"
  }, {
    "className": "admonition-content"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "div"
  }, `Deviating from the configuration we recommend is done solely at your own risk.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Velocity is an application that tends to follow the generational hypothesis quite closely. It has
also been tuned to reduce load on the garbage collector as much as possible.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "zgc"
  }), `ZGC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ZGC (the Z Garbage Collector), introduced with Java 11 and stabilized with Java 15, has proven to be
successful for one large-scale deployment of Velocity.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `At its core, ZGC is a concurrent, generation-less garbage collector emphasizing low latency at the
expense of throughput. Given the nature of Velocity as a network proxy where low throughput and high
throughput are important, we recommend using ZGC with caution, and only if you use Java 15 or above.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The primary tuning flag for ZGC is heap size - if ZGC cannot collect garbage faster than the proxy
can allocate it, the threads generating garbage will be temporarily paused, causing the proxy to
appear to be laggy. Our heap size recommendations still apply, but prepare to give the proxy more
memory if necessary.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "shenandoah"
  }), `Shenandoah`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Introduced in Java 11 and declared stable in Java 15, Shenandoah is similar to G1 in being a
concurrent, generational garbage collector, but it does more work in parallel.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Velocity team is not aware of any successful deployments of Shenandoah with Velocity in the
wild.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "openj9"
  }), `OpenJ9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `OpenJ9 is an alternative to the HotSpot JVM derived from IBM's J9 JVM, focused primarily on cloud
workloads. As a result, it behaves very differently from HotSpot. Correspondingly, it has a
completely different set of garbage collectors.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The default `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gencon`), ` garbage collector should work fine with Velocity.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;