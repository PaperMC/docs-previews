"use strict";
exports.id = 4161;
exports.ids = [4161];
exports.modules = {

/***/ 4161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DocSearchModal": () => (/* reexport */ DocSearchModal)
});

;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js

function checkOptions(options) {
   false ? 0 : void 0;
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js
function createCancelablePromiseList() {
  var list = [];
  return {
    add: function add(cancelablePromise) {
      list.push(cancelablePromise);
      return cancelablePromise.finally(function () {
        list = list.filter(function (item) {
          return item !== cancelablePromise;
        });
      });
    },
    cancelAll: function cancelAll() {
      list.forEach(function (promise) {
        return promise.cancel();
      });
    },
    isEmpty: function isEmpty() {
      return list.length === 0;
    }
  };
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/createStore.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function createStore(reducer, props, onStoreStateChange) {
  var state = props.initialState;
  return {
    getState: function getState() {
      return state;
    },
    dispatch: function dispatch(action, payload) {
      var prevState = _objectSpread({}, state);

      state = reducer(state, {
        type: action,
        props: props,
        payload: payload
      });
      onStoreStateChange({
        state: state,
        prevState: prevState
      });
    },
    pendingRequests: createCancelablePromiseList()
  };
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-shared-npm-1.5.2-dbbb4e17f1-35d60ea6c3.zip/node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js
function flatten(values) {
  return values.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js
function getAutocompleteSetters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function getAutocompleteSetters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { getAutocompleteSetters_ownKeys(Object(source), true).forEach(function (key) { getAutocompleteSetters_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { getAutocompleteSetters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getAutocompleteSetters_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getAutocompleteSetters(_ref) {
  var store = _ref.store;

  var setActiveItemId = function setActiveItemId(value) {
    store.dispatch('setActiveItemId', value);
  };

  var setQuery = function setQuery(value) {
    store.dispatch('setQuery', value);
  };

  var setCollections = function setCollections(rawValue) {
    var baseItemId = 0;
    var value = rawValue.map(function (collection) {
      return getAutocompleteSetters_objectSpread(getAutocompleteSetters_objectSpread({}, collection), {}, {
        // We flatten the stored items to support calling `getAlgoliaResults`
        // from the source itself.
        items: flatten(collection.items).map(function (item) {
          return getAutocompleteSetters_objectSpread(getAutocompleteSetters_objectSpread({}, item), {}, {
            __autocomplete_id: baseItemId++
          });
        })
      });
    });
    store.dispatch('setCollections', value);
  };

  var setIsOpen = function setIsOpen(value) {
    store.dispatch('setIsOpen', value);
  };

  var setStatus = function setStatus(value) {
    store.dispatch('setStatus', value);
  };

  var setContext = function setContext(value) {
    store.dispatch('setContext', value);
  };

  return {
    setActiveItemId: setActiveItemId,
    setQuery: setQuery,
    setCollections: setCollections,
    setIsOpen: setIsOpen,
    setStatus: setStatus,
    setContext: setContext
  };
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-shared-npm-1.5.2-dbbb4e17f1-35d60ea6c3.zip/node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js
function getItemsCount(state) {
  if (state.collections.length === 0) {
    return 0;
  }

  return state.collections.reduce(function (sum, collection) {
    return sum + collection.items.length;
  }, 0);
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-shared-npm-1.5.2-dbbb4e17f1-35d60ea6c3.zip/node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js
var autocompleteId = 0;
function generateAutocompleteId() {
  return "autocomplete-".concat(autocompleteId++);
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-shared-npm-1.5.2-dbbb4e17f1-35d60ea6c3.zip/node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js
/**
 * Throws an error if the condition is not met in development mode.
 * This is used to make development a better experience to provide guidance as
 * to where the error comes from.
 */
function invariant(condition, message) {
  if (true) {
    return;
  }

  if (!condition) {
    throw new Error("[Autocomplete] ".concat(typeof message === 'function' ? message() : message));
  }
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-shared-npm-1.5.2-dbbb4e17f1-35d60ea6c3.zip/node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Decycles objects with circular references.
 * This is used to print cyclic structures in development environment only.
 */
function decycle(obj) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if (true) {
    return obj;
  }

  if (seen.has(obj)) {
    return '[Circular]';
  }

  var newSeen = seen.add(obj);

  if (Array.isArray(obj)) {
    return obj.map(function (x) {
      return decycle(x, newSeen);
    });
  }

  return Object.fromEntries(Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return [key, decycle(value, newSeen)];
  }));
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-shared-npm-1.5.2-dbbb4e17f1-35d60ea6c3.zip/node_modules/@algolia/autocomplete-shared/dist/esm/noop.js
var noop = function noop() {};
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js
function getNormalizedSources_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function getNormalizedSources_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { getNormalizedSources_ownKeys(Object(source), true).forEach(function (key) { getNormalizedSources_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { getNormalizedSources_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getNormalizedSources_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getNormalizedSources_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { getNormalizedSources_typeof = function _typeof(obj) { return typeof obj; }; } else { getNormalizedSources_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return getNormalizedSources_typeof(obj); }


function getNormalizedSources(getSources, params) {
  var seenSourceIds = [];
  return Promise.resolve(getSources(params)).then(function (sources) {
    invariant(Array.isArray(sources), function () {
      return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(getNormalizedSources_typeof(sources)), ":\n\n").concat(JSON.stringify(decycle(sources), null, 2));
    });
    return Promise.all(sources // We allow `undefined` and `false` sources to allow users to use
    // `Boolean(query) && source` (=> `false`).
    // We need to remove these values at this point.
    .filter(function (maybeSource) {
      return Boolean(maybeSource);
    }).map(function (source) {
      invariant(typeof source.sourceId === 'string', 'A source must provide a `sourceId` string.');

      if (seenSourceIds.includes(source.sourceId)) {
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(source.sourceId), " is not unique."));
      }

      seenSourceIds.push(source.sourceId);

      var normalizedSource = getNormalizedSources_objectSpread({
        getItemInputValue: function getItemInputValue(_ref) {
          var state = _ref.state;
          return state.query;
        },
        getItemUrl: function getItemUrl() {
          return undefined;
        },
        onSelect: function onSelect(_ref2) {
          var setIsOpen = _ref2.setIsOpen;
          setIsOpen(false);
        },
        onActive: noop
      }, source);

      return Promise.resolve(normalizedSource);
    }));
  });
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || getDefaultProps_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function getDefaultProps_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return getDefaultProps_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getDefaultProps_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return getDefaultProps_arrayLikeToArray(arr); }

function getDefaultProps_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getDefaultProps_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function getDefaultProps_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { getDefaultProps_ownKeys(Object(source), true).forEach(function (key) { getDefaultProps_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { getDefaultProps_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getDefaultProps_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getDefaultProps(props, pluginSubscribers) {
  var _props$id;

  /* eslint-disable no-restricted-globals */
  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */

  var plugins = props.plugins || [];
  return getDefaultProps_objectSpread(getDefaultProps_objectSpread({
    debug: false,
    openOnFocus: false,
    placeholder: '',
    autoFocus: false,
    defaultActiveItemId: null,
    stallThreshold: 300,
    environment: environment,
    shouldPanelOpen: function shouldPanelOpen(_ref) {
      var state = _ref.state;
      return getItemsCount(state) > 0;
    },
    reshape: function reshape(_ref2) {
      var sources = _ref2.sources;
      return sources;
    }
  }, props), {}, {
    // Since `generateAutocompleteId` triggers a side effect (it increments
    // an internal counter), we don't want to execute it if unnecessary.
    id: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : generateAutocompleteId(),
    plugins: plugins,
    // The following props need to be deeply defaulted.
    initialState: getDefaultProps_objectSpread({
      activeItemId: null,
      query: '',
      completion: null,
      collections: [],
      isOpen: false,
      status: 'idle',
      context: {}
    }, props.initialState),
    onStateChange: function onStateChange(params) {
      var _props$onStateChange;

      (_props$onStateChange = props.onStateChange) === null || _props$onStateChange === void 0 ? void 0 : _props$onStateChange.call(props, params);
      plugins.forEach(function (x) {
        var _x$onStateChange;

        return (_x$onStateChange = x.onStateChange) === null || _x$onStateChange === void 0 ? void 0 : _x$onStateChange.call(x, params);
      });
    },
    onSubmit: function onSubmit(params) {
      var _props$onSubmit;

      (_props$onSubmit = props.onSubmit) === null || _props$onSubmit === void 0 ? void 0 : _props$onSubmit.call(props, params);
      plugins.forEach(function (x) {
        var _x$onSubmit;

        return (_x$onSubmit = x.onSubmit) === null || _x$onSubmit === void 0 ? void 0 : _x$onSubmit.call(x, params);
      });
    },
    onReset: function onReset(params) {
      var _props$onReset;

      (_props$onReset = props.onReset) === null || _props$onReset === void 0 ? void 0 : _props$onReset.call(props, params);
      plugins.forEach(function (x) {
        var _x$onReset;

        return (_x$onReset = x.onReset) === null || _x$onReset === void 0 ? void 0 : _x$onReset.call(x, params);
      });
    },
    getSources: function getSources(params) {
      return Promise.all([].concat(_toConsumableArray(plugins.map(function (plugin) {
        return plugin.getSources;
      })), [props.getSources]).filter(Boolean).map(function (getSources) {
        return getNormalizedSources(getSources, params);
      })).then(function (nested) {
        return flatten(nested);
      }).then(function (sources) {
        return sources.map(function (source) {
          return getDefaultProps_objectSpread(getDefaultProps_objectSpread({}, source), {}, {
            onSelect: function onSelect(params) {
              source.onSelect(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onSelect;

                return (_x$onSelect = x.onSelect) === null || _x$onSelect === void 0 ? void 0 : _x$onSelect.call(x, params);
              });
            },
            onActive: function onActive(params) {
              source.onActive(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onActive;

                return (_x$onActive = x.onActive) === null || _x$onActive === void 0 ? void 0 : _x$onActive.call(x, params);
              });
            }
          });
        });
      });
    },
    navigator: getDefaultProps_objectSpread({
      navigate: function navigate(_ref3) {
        var itemUrl = _ref3.itemUrl;
        environment.location.assign(itemUrl);
      },
      navigateNewTab: function navigateNewTab(_ref4) {
        var itemUrl = _ref4.itemUrl;
        var windowReference = environment.open(itemUrl, '_blank', 'noopener');
        windowReference === null || windowReference === void 0 ? void 0 : windowReference.focus();
      },
      navigateNewWindow: function navigateNewWindow(_ref5) {
        var itemUrl = _ref5.itemUrl;
        environment.open(itemUrl, '_blank', 'noopener');
      }
    }, props.navigator)
  });
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/reshape.js
function reshape_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function reshape_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reshape_ownKeys(Object(source), true).forEach(function (key) { reshape_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reshape_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reshape_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function reshape(_ref) {
  var collections = _ref.collections,
      props = _ref.props,
      state = _ref.state;
  // Sources are grouped by `sourceId` to conveniently pick them via destructuring.
  // Example: `const { recentSearchesPlugin } = sourcesBySourceId`
  var sourcesBySourceId = collections.reduce(function (acc, collection) {
    return reshape_objectSpread(reshape_objectSpread({}, acc), {}, reshape_defineProperty({}, collection.source.sourceId, reshape_objectSpread(reshape_objectSpread({}, collection.source), {}, {
      getItems: function getItems() {
        // We provide the resolved items from the collection to the `reshape` prop.
        return flatten(collection.items);
      }
    })));
  }, {});
  var reshapeSources = props.reshape({
    sources: Object.values(sourcesBySourceId),
    sourcesBySourceId: sourcesBySourceId,
    state: state
  }); // We reconstruct the collections with the items modified by the `reshape` prop.

  return flatten(reshapeSources).filter(Boolean).map(function (source) {
    return {
      source: source,
      items: source.getItems()
    };
  });
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js
function mapToAlgoliaResponse_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function mapToAlgoliaResponse_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { mapToAlgoliaResponse_ownKeys(Object(source), true).forEach(function (key) { mapToAlgoliaResponse_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { mapToAlgoliaResponse_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function mapToAlgoliaResponse_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mapToAlgoliaResponse(rawResults) {
  var results = rawResults.map(function (result) {
    var _hits;

    return mapToAlgoliaResponse_objectSpread(mapToAlgoliaResponse_objectSpread({}, result), {}, {
      hits: (_hits = result.hits) === null || _hits === void 0 ? void 0 : _hits.map(function (hit) {
        // Bring support for the Insights plugin.
        return mapToAlgoliaResponse_objectSpread(mapToAlgoliaResponse_objectSpread({}, hit), {}, {
          __autocomplete_indexName: result.index,
          __autocomplete_queryID: result.queryID
        });
      })
    });
  });
  return {
    results: results,
    hits: results.map(function (result) {
      return result.hits;
    }).filter(Boolean),
    facetHits: results.map(function (result) {
      var _facetHits;

      return (_facetHits = result.facetHits) === null || _facetHits === void 0 ? void 0 : _facetHits.map(function (facetHit) {
        // Bring support for the highlighting components.
        return {
          label: facetHit.value,
          count: facetHit.count,
          _highlightResult: {
            label: {
              value: facetHit.highlighted
            }
          }
        };
      });
    }).filter(Boolean)
  };
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/resolve.js
function resolve_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { resolve_typeof = function _typeof(obj) { return typeof obj; }; } else { resolve_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return resolve_typeof(obj); }

function resolve_toConsumableArray(arr) { return resolve_arrayWithoutHoles(arr) || resolve_iterableToArray(arr) || resolve_unsupportedIterableToArray(arr) || resolve_nonIterableSpread(); }

function resolve_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function resolve_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return resolve_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return resolve_arrayLikeToArray(o, minLen); }

function resolve_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function resolve_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return resolve_arrayLikeToArray(arr); }

function resolve_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function resolve_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function resolve_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { resolve_ownKeys(Object(source), true).forEach(function (key) { resolve_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { resolve_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function resolve_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function isDescription(item) {
  return Boolean(item.execute);
}

function isRequesterDescription(description) {
  return Boolean(description === null || description === void 0 ? void 0 : description.execute);
}

function preResolve(itemsOrDescription, sourceId) {
  if (isRequesterDescription(itemsOrDescription)) {
    return resolve_objectSpread(resolve_objectSpread({}, itemsOrDescription), {}, {
      requests: itemsOrDescription.queries.map(function (query) {
        return {
          query: query,
          sourceId: sourceId,
          transformResponse: itemsOrDescription.transformResponse
        };
      })
    });
  }

  return {
    items: itemsOrDescription,
    sourceId: sourceId
  };
}
function resolve(items) {
  var packed = items.reduce(function (acc, current) {
    if (!isDescription(current)) {
      acc.push(current);
      return acc;
    }

    var searchClient = current.searchClient,
        execute = current.execute,
        requests = current.requests;
    var container = acc.find(function (item) {
      return isDescription(current) && isDescription(item) && item.searchClient === searchClient && item.execute === execute;
    });

    if (container) {
      var _container$items;

      (_container$items = container.items).push.apply(_container$items, resolve_toConsumableArray(requests));
    } else {
      var request = {
        execute: execute,
        items: requests,
        searchClient: searchClient
      };
      acc.push(request);
    }

    return acc;
  }, []);
  var values = packed.map(function (maybeDescription) {
    if (!isDescription(maybeDescription)) {
      return Promise.resolve(maybeDescription);
    }

    var _ref = maybeDescription,
        execute = _ref.execute,
        items = _ref.items,
        searchClient = _ref.searchClient;
    return execute({
      searchClient: searchClient,
      requests: items
    });
  });
  return Promise.all(values).then(function (responses) {
    return flatten(responses);
  });
}
function postResolve(responses, sources) {
  return sources.map(function (source) {
    var matches = responses.filter(function (response) {
      return response.sourceId === source.sourceId;
    });
    var results = matches.map(function (_ref2) {
      var items = _ref2.items;
      return items;
    });
    var transform = matches[0].transformResponse;
    var items = transform ? transform(mapToAlgoliaResponse(results)) : results;
    invariant(Array.isArray(items), function () {
      return "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned type ").concat(JSON.stringify(resolve_typeof(items)), ":\n\n").concat(JSON.stringify(decycle(items), null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems");
    });
    invariant(items.every(Boolean), "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned ").concat(JSON.stringify(undefined), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"));
    return {
      source: source,
      items: items
    };
  });
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js
/**
 * Creates a runner that executes promises in a concurrent-safe way.
 *
 * This is useful to prevent older promises to resolve after a newer promise,
 * otherwise resulting in stale resolved values.
 */
function createConcurrentSafePromise() {
  var basePromiseId = -1;
  var latestResolvedId = -1;
  var latestResolvedValue = undefined;
  return function runConcurrentSafePromise(promise) {
    basePromiseId++;
    var currentPromiseId = basePromiseId;
    return Promise.resolve(promise).then(function (x) {
      // The promise might take too long to resolve and get outdated. This would
      // result in resolving stale values.
      // When this happens, we ignore the promise value and return the one
      // coming from the latest resolved value.
      //
      // +----------------------------------+
      // |        100ms                     |
      // | run(1) +--->  R1                 |
      // |        300ms                     |
      // | run(2) +-------------> R2 (SKIP) |
      // |        200ms                     |
      // | run(3) +--------> R3             |
      // +----------------------------------+
      if (latestResolvedValue && currentPromiseId < latestResolvedId) {
        return latestResolvedValue;
      }

      latestResolvedId = currentPromiseId;
      latestResolvedValue = x;
      return x;
    });
  };
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js
function createInternalCancelablePromise(promise, initialState) {
  var state = initialState;
  return {
    then: function then(onfulfilled, onrejected) {
      return createInternalCancelablePromise(promise.then(createCallback(onfulfilled, state, promise), createCallback(onrejected, state, promise)), state);
    },
    catch: function _catch(onrejected) {
      return createInternalCancelablePromise(promise.catch(createCallback(onrejected, state, promise)), state);
    },
    finally: function _finally(onfinally) {
      if (onfinally) {
        state.onCancelList.push(onfinally);
      }

      return createInternalCancelablePromise(promise.finally(createCallback(onfinally && function () {
        state.onCancelList = [];
        return onfinally();
      }, state, promise)), state);
    },
    cancel: function cancel() {
      state.isCanceled = true;
      var callbacks = state.onCancelList;
      state.onCancelList = [];
      callbacks.forEach(function (callback) {
        callback();
      });
    },
    isCanceled: function isCanceled() {
      return state.isCanceled === true;
    }
  };
}

function createCancelablePromise(executor) {
  return createInternalCancelablePromise(new Promise(function (resolve, reject) {
    return executor(resolve, reject);
  }), {
    isCanceled: false,
    onCancelList: []
  });
}

createCancelablePromise.resolve = function (value) {
  return cancelable(Promise.resolve(value));
};

createCancelablePromise.reject = function (reason) {
  return cancelable(Promise.reject(reason));
};

function cancelable(promise) {
  return createInternalCancelablePromise(promise, {
    isCanceled: false,
    onCancelList: []
  });
}

function createCallback(onResult, state, fallback) {
  if (!onResult) {
    return fallback;
  }

  return function callback(arg) {
    if (state.isCanceled) {
      return arg;
    }

    return onResult(arg);
  };
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js
// We don't have access to the autocomplete source when we call `onKeyDown`
// or `onClick` because those are native browser events.
// However, we can get the source from the suggestion index.
function getCollectionFromActiveItemId(state) {
  // Given 3 sources with respectively 1, 2 and 3 suggestions: [1, 2, 3]
  // We want to get the accumulated counts:
  // [1, 1 + 2, 1 + 2 + 3] = [1, 3, 3 + 3] = [1, 3, 6]
  var accumulatedCollectionsCount = state.collections.map(function (collections) {
    return collections.items.length;
  }).reduce(function (acc, collectionsCount, index) {
    var previousValue = acc[index - 1] || 0;
    var nextValue = previousValue + collectionsCount;
    acc.push(nextValue);
    return acc;
  }, []); // Based on the accumulated counts, we can infer the index of the suggestion.

  var collectionIndex = accumulatedCollectionsCount.reduce(function (acc, current) {
    if (current <= state.activeItemId) {
      return acc + 1;
    }

    return acc;
  }, 0);
  return state.collections[collectionIndex];
}
/**
 * Gets the highlighted index relative to a suggestion object (not the absolute
 * highlighted index).
 *
 * Example:
 *  [['a', 'b'], ['c', 'd', 'e'], ['f']]
 *                      ???
 *         (absolute: 3, relative: 1)
 */


function getRelativeActiveItemId(_ref) {
  var state = _ref.state,
      collection = _ref.collection;
  var isOffsetFound = false;
  var counter = 0;
  var previousItemsOffset = 0;

  while (isOffsetFound === false) {
    var currentCollection = state.collections[counter];

    if (currentCollection === collection) {
      isOffsetFound = true;
      break;
    }

    previousItemsOffset += currentCollection.items.length;
    counter++;
  }

  return state.activeItemId - previousItemsOffset;
}

function getActiveItem(state) {
  var collection = getCollectionFromActiveItemId(state);

  if (!collection) {
    return null;
  }

  var item = collection.items[getRelativeActiveItemId({
    state: state,
    collection: collection
  })];
  var source = collection.source;
  var itemInputValue = source.getItemInputValue({
    item: item,
    state: state
  });
  var itemUrl = source.getItemUrl({
    item: item,
    state: state
  });
  return {
    item: item,
    itemInputValue: itemInputValue,
    itemUrl: itemUrl,
    source: source
  };
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/onInput.js
var _excluded = ["event", "nextState", "props", "query", "refresh", "store"];

function onInput_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function onInput_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { onInput_ownKeys(Object(source), true).forEach(function (key) { onInput_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { onInput_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function onInput_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var lastStalledId = null;
var runConcurrentSafePromise = createConcurrentSafePromise();
function onInput(_ref) {
  var event = _ref.event,
      _ref$nextState = _ref.nextState,
      nextState = _ref$nextState === void 0 ? {} : _ref$nextState,
      props = _ref.props,
      query = _ref.query,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  if (lastStalledId) {
    props.environment.clearTimeout(lastStalledId);
  }

  var setCollections = setters.setCollections,
      setIsOpen = setters.setIsOpen,
      setQuery = setters.setQuery,
      setActiveItemId = setters.setActiveItemId,
      setStatus = setters.setStatus;
  setQuery(query);
  setActiveItemId(props.defaultActiveItemId);

  if (!query && props.openOnFocus === false) {
    var _nextState$isOpen;

    var collections = store.getState().collections.map(function (collection) {
      return onInput_objectSpread(onInput_objectSpread({}, collection), {}, {
        items: []
      });
    });
    setStatus('idle');
    setCollections(collections);
    setIsOpen((_nextState$isOpen = nextState.isOpen) !== null && _nextState$isOpen !== void 0 ? _nextState$isOpen : props.shouldPanelOpen({
      state: store.getState()
    })); // We make sure to update the latest resolved value of the tracked
    // promises to keep late resolving promises from "cancelling" the state
    // updates performed in this code path.
    // We chain with a void promise to respect `onInput`'s expected return type.

    var _request = cancelable(runConcurrentSafePromise(collections).then(function () {
      return Promise.resolve();
    }));

    return store.pendingRequests.add(_request);
  }

  setStatus('loading');
  lastStalledId = props.environment.setTimeout(function () {
    setStatus('stalled');
  }, props.stallThreshold); // We track the entire promise chain triggered by `onInput` before mutating
  // the Autocomplete state to make sure that any state manipulation is based on
  // fresh data regardless of when promises individually resolve.
  // We don't track nested promises and only rely on the full chain resolution,
  // meaning we should only ever manipulate the state once this concurrent-safe
  // promise is resolved.

  var request = cancelable(runConcurrentSafePromise(props.getSources(onInput_objectSpread({
    query: query,
    refresh: refresh,
    state: store.getState()
  }, setters)).then(function (sources) {
    return Promise.all(sources.map(function (source) {
      return Promise.resolve(source.getItems(onInput_objectSpread({
        query: query,
        refresh: refresh,
        state: store.getState()
      }, setters))).then(function (itemsOrDescription) {
        return preResolve(itemsOrDescription, source.sourceId);
      });
    })).then(resolve).then(function (responses) {
      return postResolve(responses, sources);
    }).then(function (collections) {
      return reshape({
        collections: collections,
        props: props,
        state: store.getState()
      });
    });
  }))).then(function (collections) {
    var _nextState$isOpen2;

    // Parameters passed to `onInput` could be stale when the following code
    // executes, because `onInput` calls may not resolve in order.
    // If it becomes a problem we'll need to save the last passed parameters.
    // See: https://codesandbox.io/s/agitated-cookies-y290z
    setStatus('idle');
    setCollections(collections);
    var isPanelOpen = props.shouldPanelOpen({
      state: store.getState()
    });
    setIsOpen((_nextState$isOpen2 = nextState.isOpen) !== null && _nextState$isOpen2 !== void 0 ? _nextState$isOpen2 : props.openOnFocus && !query && isPanelOpen || isPanelOpen);
    var highlightedItem = getActiveItem(store.getState());

    if (store.getState().activeItemId !== null && highlightedItem) {
      var item = highlightedItem.item,
          itemInputValue = highlightedItem.itemInputValue,
          itemUrl = highlightedItem.itemUrl,
          source = highlightedItem.source;
      source.onActive(onInput_objectSpread({
        event: event,
        item: item,
        itemInputValue: itemInputValue,
        itemUrl: itemUrl,
        refresh: refresh,
        source: source,
        state: store.getState()
      }, setters));
    }
  }).finally(function () {
    setStatus('idle');

    if (lastStalledId) {
      props.environment.clearTimeout(lastStalledId);
    }
  });
  return store.pendingRequests.add(request);
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js
var onKeyDown_excluded = ["event", "props", "refresh", "store"];

function onKeyDown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function onKeyDown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { onKeyDown_ownKeys(Object(source), true).forEach(function (key) { onKeyDown_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { onKeyDown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function onKeyDown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function onKeyDown_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = onKeyDown_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function onKeyDown_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function onKeyDown_onKeyDown(_ref) {
  var event = _ref.event,
      props = _ref.props,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = onKeyDown_objectWithoutProperties(_ref, onKeyDown_excluded);

  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    // eslint-disable-next-line no-inner-declarations
    var triggerScrollIntoView = function triggerScrollIntoView() {
      var nodeItem = props.environment.document.getElementById("".concat(props.id, "-item-").concat(store.getState().activeItemId));

      if (nodeItem) {
        if (nodeItem.scrollIntoViewIfNeeded) {
          nodeItem.scrollIntoViewIfNeeded(false);
        } else {
          nodeItem.scrollIntoView(false);
        }
      }
    }; // eslint-disable-next-line no-inner-declarations


    var triggerOnActive = function triggerOnActive() {
      var highlightedItem = getActiveItem(store.getState());

      if (store.getState().activeItemId !== null && highlightedItem) {
        var item = highlightedItem.item,
            itemInputValue = highlightedItem.itemInputValue,
            itemUrl = highlightedItem.itemUrl,
            source = highlightedItem.source;
        source.onActive(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      }
    }; // Default browser behavior changes the caret placement on ArrowUp and
    // ArrowDown.


    event.preventDefault(); // When re-opening the panel, we need to split the logic to keep the actions
    // synchronized as `onInput` returns a promise.

    if (store.getState().isOpen === false && (props.openOnFocus || Boolean(store.getState().query))) {
      onInput(onKeyDown_objectSpread({
        event: event,
        props: props,
        query: store.getState().query,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        store.dispatch(event.key, {
          nextActiveItemId: props.defaultActiveItemId
        });
        triggerOnActive(); // Since we rely on the DOM, we need to wait for all the micro tasks to
        // finish (which include re-opening the panel) to make sure all the
        // elements are available.

        setTimeout(triggerScrollIntoView, 0);
      });
    } else {
      store.dispatch(event.key, {});
      triggerOnActive();
      triggerScrollIntoView();
    }
  } else if (event.key === 'Escape') {
    // This prevents the default browser behavior on `input[type="search"]`
    // from removing the query right away because we first want to close the
    // panel.
    event.preventDefault();
    store.dispatch(event.key, null); // Hitting the `Escape` key signals the end of a user interaction with the
    // autocomplete. At this point, we should ignore any requests that are still
    // pending and could reopen the panel once they resolve, because that would
    // result in an unsolicited UI behavior.

    store.pendingRequests.cancelAll();
  } else if (event.key === 'Enter') {
    // No active item, so we let the browser handle the native `onSubmit` form
    // event.
    if (store.getState().activeItemId === null || store.getState().collections.every(function (collection) {
      return collection.items.length === 0;
    })) {
      return;
    } // This prevents the `onSubmit` event to be sent because an item is
    // highlighted.


    event.preventDefault();

    var _ref2 = getActiveItem(store.getState()),
        item = _ref2.item,
        itemInputValue = _ref2.itemInputValue,
        itemUrl = _ref2.itemUrl,
        source = _ref2.source;

    if (event.metaKey || event.ctrlKey) {
      if (itemUrl !== undefined) {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewTab({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.shiftKey) {
      if (itemUrl !== undefined) {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewWindow({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.altKey) {// Keep native browser behavior
    } else {
      if (itemUrl !== undefined) {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigate({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
        return;
      }

      onInput(onKeyDown_objectSpread({
        event: event,
        nextState: {
          isOpen: false
        },
        props: props,
        query: itemInputValue,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        source.onSelect(onKeyDown_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      });
    }
  }
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js
function isOrContainsNode(parent, child) {
  return parent === child || parent.contains(child);
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js
var getPropGetters_excluded = ["props", "refresh", "store"],
    _excluded2 = ["inputElement", "formElement", "panelElement"],
    _excluded3 = ["inputElement"],
    _excluded4 = ["inputElement", "maxLength"],
    _excluded5 = ["item", "source"];

function getPropGetters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function getPropGetters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { getPropGetters_ownKeys(Object(source), true).forEach(function (key) { getPropGetters_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { getPropGetters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getPropGetters_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getPropGetters_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = getPropGetters_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function getPropGetters_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function getPropGetters(_ref) {
  var props = _ref.props,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = getPropGetters_objectWithoutProperties(_ref, getPropGetters_excluded);

  var getEnvironmentProps = function getEnvironmentProps(providedProps) {
    var inputElement = providedProps.inputElement,
        formElement = providedProps.formElement,
        panelElement = providedProps.panelElement,
        rest = getPropGetters_objectWithoutProperties(providedProps, _excluded2);

    return getPropGetters_objectSpread({
      // On touch devices, we do not rely on the native `blur` event of the
      // input to close the panel, but rather on a custom `touchstart` event
      // outside of the autocomplete elements.
      // This ensures a working experience on mobile because we blur the input
      // on touch devices when the user starts scrolling (`touchmove`).
      // @TODO: support cases where there are multiple Autocomplete instances.
      // Right now, a second instance makes this computation return false.
      onTouchStart: function onTouchStart(event) {
        // The `onTouchStart` event shouldn't trigger the `blur` handler when
        // it's not an interaction with Autocomplete. We detect it with the
        // following heuristics:
        // - the panel is closed AND there are no pending requests
        //   (no interaction with the autocomplete, no future state updates)
        // - OR the touched target is the input element (should open the panel)
        var isAutocompleteInteraction = store.getState().isOpen || !store.pendingRequests.isEmpty();

        if (!isAutocompleteInteraction || event.target === inputElement) {
          return;
        }

        var isTargetWithinAutocomplete = [formElement, panelElement].some(function (contextNode) {
          return isOrContainsNode(contextNode, event.target);
        });

        if (isTargetWithinAutocomplete === false) {
          store.dispatch('blur', null); // If requests are still pending when the user closes the panel, they
          // could reopen the panel once they resolve.
          // We want to prevent any subsequent query from reopening the panel
          // because it would result in an unsolicited UI behavior.

          if (!props.debug) {
            store.pendingRequests.cancelAll();
          }
        }
      },
      // When scrolling on touch devices (mobiles, tablets, etc.), we want to
      // mimic the native platform behavior where the input is blurred to
      // hide the virtual keyboard. This gives more vertical space to
      // discover all the suggestions showing up in the panel.
      onTouchMove: function onTouchMove(event) {
        if (store.getState().isOpen === false || inputElement !== props.environment.document.activeElement || event.target === inputElement) {
          return;
        }

        inputElement.blur();
      }
    }, rest);
  };

  var getRootProps = function getRootProps(rest) {
    return getPropGetters_objectSpread({
      role: 'combobox',
      'aria-expanded': store.getState().isOpen,
      'aria-haspopup': 'listbox',
      'aria-owns': store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
      'aria-labelledby': "".concat(props.id, "-label")
    }, rest);
  };

  var getFormProps = function getFormProps(providedProps) {
    var inputElement = providedProps.inputElement,
        rest = getPropGetters_objectWithoutProperties(providedProps, _excluded3);

    return getPropGetters_objectSpread({
      action: '',
      noValidate: true,
      role: 'search',
      onSubmit: function onSubmit(event) {
        var _providedProps$inputE;

        event.preventDefault();
        props.onSubmit(getPropGetters_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('submit', null);
        (_providedProps$inputE = providedProps.inputElement) === null || _providedProps$inputE === void 0 ? void 0 : _providedProps$inputE.blur();
      },
      onReset: function onReset(event) {
        var _providedProps$inputE2;

        event.preventDefault();
        props.onReset(getPropGetters_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('reset', null);
        (_providedProps$inputE2 = providedProps.inputElement) === null || _providedProps$inputE2 === void 0 ? void 0 : _providedProps$inputE2.focus();
      }
    }, rest);
  };

  var getInputProps = function getInputProps(providedProps) {
    function onFocus(event) {
      // We want to trigger a query when `openOnFocus` is true
      // because the panel should open with the current query.
      if (props.openOnFocus || Boolean(store.getState().query)) {
        onInput(getPropGetters_objectSpread({
          event: event,
          props: props,
          query: store.getState().completion || store.getState().query,
          refresh: refresh,
          store: store
        }, setters));
      }

      store.dispatch('focus', null);
    }

    var isTouchDevice = ('ontouchstart' in props.environment);

    var _ref2 = providedProps || {},
        inputElement = _ref2.inputElement,
        _ref2$maxLength = _ref2.maxLength,
        maxLength = _ref2$maxLength === void 0 ? 512 : _ref2$maxLength,
        rest = getPropGetters_objectWithoutProperties(_ref2, _excluded4);

    var activeItem = getActiveItem(store.getState());
    return getPropGetters_objectSpread({
      'aria-autocomplete': 'both',
      'aria-activedescendant': store.getState().isOpen && store.getState().activeItemId !== null ? "".concat(props.id, "-item-").concat(store.getState().activeItemId) : undefined,
      'aria-controls': store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
      'aria-labelledby': "".concat(props.id, "-label"),
      value: store.getState().completion || store.getState().query,
      id: "".concat(props.id, "-input"),
      autoComplete: 'off',
      autoCorrect: 'off',
      autoCapitalize: 'off',
      enterKeyHint: activeItem !== null && activeItem !== void 0 && activeItem.itemUrl ? 'go' : 'search',
      spellCheck: 'false',
      autoFocus: props.autoFocus,
      placeholder: props.placeholder,
      maxLength: maxLength,
      type: 'search',
      onChange: function onChange(event) {
        onInput(getPropGetters_objectSpread({
          event: event,
          props: props,
          query: event.currentTarget.value.slice(0, maxLength),
          refresh: refresh,
          store: store
        }, setters));
      },
      onKeyDown: function onKeyDown(event) {
        onKeyDown_onKeyDown(getPropGetters_objectSpread({
          event: event,
          props: props,
          refresh: refresh,
          store: store
        }, setters));
      },
      onFocus: onFocus,
      onBlur: function onBlur() {
        // We do rely on the `blur` event on touch devices.
        // See explanation in `onTouchStart`.
        if (!isTouchDevice) {
          store.dispatch('blur', null); // If requests are still pending when the user closes the panel, they
          // could reopen the panel once they resolve.
          // We want to prevent any subsequent query from reopening the panel
          // because it would result in an unsolicited UI behavior.

          if (!props.debug) {
            store.pendingRequests.cancelAll();
          }
        }
      },
      onClick: function onClick(event) {
        // When the panel is closed and you click on the input while
        // the input is focused, the `onFocus` event is not triggered
        // (default browser behavior).
        // In an autocomplete context, it makes sense to open the panel in this
        // case.
        // We mimic this event by catching the `onClick` event which
        // triggers the `onFocus` for the panel to open.
        if (providedProps.inputElement === props.environment.document.activeElement && !store.getState().isOpen) {
          onFocus(event);
        }
      }
    }, rest);
  };

  var getLabelProps = function getLabelProps(rest) {
    return getPropGetters_objectSpread({
      htmlFor: "".concat(props.id, "-input"),
      id: "".concat(props.id, "-label")
    }, rest);
  };

  var getListProps = function getListProps(rest) {
    return getPropGetters_objectSpread({
      role: 'listbox',
      'aria-labelledby': "".concat(props.id, "-label"),
      id: "".concat(props.id, "-list")
    }, rest);
  };

  var getPanelProps = function getPanelProps(rest) {
    return getPropGetters_objectSpread({
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the panel so
        // that the blur event is not triggered, otherwise it closes the
        // panel.
        event.preventDefault();
      },
      onMouseLeave: function onMouseLeave() {
        store.dispatch('mouseleave', null);
      }
    }, rest);
  };

  var getItemProps = function getItemProps(providedProps) {
    var item = providedProps.item,
        source = providedProps.source,
        rest = getPropGetters_objectWithoutProperties(providedProps, _excluded5);

    return getPropGetters_objectSpread({
      id: "".concat(props.id, "-item-").concat(item.__autocomplete_id),
      role: 'option',
      'aria-selected': store.getState().activeItemId === item.__autocomplete_id,
      onMouseMove: function onMouseMove(event) {
        if (item.__autocomplete_id === store.getState().activeItemId) {
          return;
        }

        store.dispatch('mousemove', item.__autocomplete_id);
        var activeItem = getActiveItem(store.getState());

        if (store.getState().activeItemId !== null && activeItem) {
          var _item = activeItem.item,
              itemInputValue = activeItem.itemInputValue,
              itemUrl = activeItem.itemUrl,
              _source = activeItem.source;

          _source.onActive(getPropGetters_objectSpread({
            event: event,
            item: _item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: _source,
            state: store.getState()
          }, setters));
        }
      },
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the item so it
        // can remain with the current `activeElement`.
        event.preventDefault();
      },
      onClick: function onClick(event) {
        var itemInputValue = source.getItemInputValue({
          item: item,
          state: store.getState()
        });
        var itemUrl = source.getItemUrl({
          item: item,
          state: store.getState()
        }); // If `getItemUrl` is provided, it means that the suggestion
        // is a link, not plain text that aims at updating the query.
        // We can therefore skip the state change because it will update
        // the `activeItemId`, resulting in a UI flash, especially
        // noticeable on mobile.

        var runPreCommand = itemUrl ? Promise.resolve() : onInput(getPropGetters_objectSpread({
          event: event,
          nextState: {
            isOpen: false
          },
          props: props,
          query: itemInputValue,
          refresh: refresh,
          store: store
        }, setters));
        runPreCommand.then(function () {
          source.onSelect(getPropGetters_objectSpread({
            event: event,
            item: item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: source,
            state: store.getState()
          }, setters));
        });
      }
    }, rest);
  };

  return {
    getEnvironmentProps: getEnvironmentProps,
    getRootProps: getRootProps,
    getFormProps: getFormProps,
    getLabelProps: getLabelProps,
    getInputProps: getInputProps,
    getPanelProps: getPanelProps,
    getListProps: getListProps,
    getItemProps: getItemProps
  };
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-shared-npm-1.5.2-dbbb4e17f1-35d60ea6c3.zip/node_modules/@algolia/autocomplete-shared/dist/esm/version.js
var version = '1.5.2';
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-shared-npm-1.5.2-dbbb4e17f1-35d60ea6c3.zip/node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js

var userAgents = [{
  segment: 'autocomplete-core',
  version: version
}];
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/metadata.js
function metadata_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function metadata_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { metadata_ownKeys(Object(source), true).forEach(function (key) { metadata_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { metadata_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function metadata_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getMetadata(_ref) {
  var _, _options$__autocomple, _options$__autocomple2, _options$__autocomple3;

  var plugins = _ref.plugins,
      options = _ref.options;
  var optionsKey = (_ = (((_options$__autocomple = options.__autocomplete_metadata) === null || _options$__autocomple === void 0 ? void 0 : _options$__autocomple.userAgents) || [])[0]) === null || _ === void 0 ? void 0 : _.segment;
  var extraOptions = optionsKey ? metadata_defineProperty({}, optionsKey, Object.keys(((_options$__autocomple2 = options.__autocomplete_metadata) === null || _options$__autocomple2 === void 0 ? void 0 : _options$__autocomple2.options) || {})) : {};
  return {
    plugins: plugins.map(function (plugin) {
      return {
        name: plugin.name,
        options: Object.keys(plugin.__autocomplete_pluginOptions || [])
      };
    }),
    options: metadata_objectSpread({
      'autocomplete-core': Object.keys(options)
    }, extraOptions),
    ua: userAgents.concat(((_options$__autocomple3 = options.__autocomplete_metadata) === null || _options$__autocomple3 === void 0 ? void 0 : _options$__autocomple3.userAgents) || [])
  };
}
function injectMetadata(_ref3) {
  var _environment$navigato;

  var metadata = _ref3.metadata,
      environment = _ref3.environment;
  var isMetadataEnabled = (_environment$navigato = environment.navigator) === null || _environment$navigato === void 0 ? void 0 : _environment$navigato.userAgent.includes('Algolia Crawler');

  if (isMetadataEnabled) {
    var metadataContainer = environment.document.createElement('meta');
    var headRef = environment.document.querySelector('head');
    metadataContainer.name = 'algolia:metadata';
    setTimeout(function () {
      metadataContainer.content = JSON.stringify(metadata);
      headRef.appendChild(metadataContainer);
    }, 0);
  }
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js

function getCompletion(_ref) {
  var _getActiveItem;

  var state = _ref.state;

  if (state.isOpen === false || state.activeItemId === null) {
    return null;
  }

  return ((_getActiveItem = getActiveItem(state)) === null || _getActiveItem === void 0 ? void 0 : _getActiveItem.itemInputValue) || null;
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js
/**
 * Returns the next active item ID from the current state.
 *
 * We allow circular keyboard navigation from the base index.
 * The base index can either be `null` (nothing is highlighted) or `0`
 * (the first item is highlighted).
 * The base index is allowed to get assigned `null` only if
 * `props.defaultActiveItemId` is `null`. This pattern allows to "stop"
 * by the actual query before navigating to other suggestions as seen on
 * Google or Amazon.
 *
 * @param moveAmount The offset to increment (or decrement) the last index
 * @param baseIndex The current index to compute the next index from
 * @param itemCount The number of items
 * @param defaultActiveItemId The default active index to fallback to
 */
function getNextActiveItemId(moveAmount, baseIndex, itemCount, defaultActiveItemId) {
  if (!itemCount) {
    return null;
  }

  if (moveAmount < 0 && (baseIndex === null || defaultActiveItemId !== null && baseIndex === 0)) {
    return itemCount + moveAmount;
  }

  var numericIndex = (baseIndex === null ? -1 : baseIndex) + moveAmount;

  if (numericIndex <= -1 || numericIndex >= itemCount) {
    return defaultActiveItemId === null ? null : 0;
  }

  return numericIndex;
}
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js
function stateReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function stateReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { stateReducer_ownKeys(Object(source), true).forEach(function (key) { stateReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { stateReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function stateReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var stateReducer = function stateReducer(state, action) {
  switch (action.type) {
    case 'setActiveItemId':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }

    case 'setQuery':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          query: action.payload,
          completion: null
        });
      }

    case 'setCollections':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          collections: action.payload
        });
      }

    case 'setIsOpen':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          isOpen: action.payload
        });
      }

    case 'setStatus':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          status: action.payload
        });
      }

    case 'setContext':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          context: stateReducer_objectSpread(stateReducer_objectSpread({}, state.context), action.payload)
        });
      }

    case 'ArrowDown':
      {
        var nextState = stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.payload.hasOwnProperty('nextActiveItemId') ? action.payload.nextActiveItemId : getNextActiveItemId(1, state.activeItemId, getItemsCount(state), action.props.defaultActiveItemId)
        });

        return stateReducer_objectSpread(stateReducer_objectSpread({}, nextState), {}, {
          completion: getCompletion({
            state: nextState
          })
        });
      }

    case 'ArrowUp':
      {
        var _nextState = stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: getNextActiveItemId(-1, state.activeItemId, getItemsCount(state), action.props.defaultActiveItemId)
        });

        return stateReducer_objectSpread(stateReducer_objectSpread({}, _nextState), {}, {
          completion: getCompletion({
            state: _nextState
          })
        });
      }

    case 'Escape':
      {
        if (state.isOpen) {
          return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
            activeItemId: null,
            isOpen: false,
            completion: null
          });
        }

        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: null,
          query: '',
          status: 'idle',
          collections: []
        });
      }

    case 'submit':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: null,
          isOpen: false,
          status: 'idle'
        });
      }

    case 'reset':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: // Since we open the panel on reset when openOnFocus=true
          // we need to restore the highlighted index to the defaultActiveItemId. (DocSearch use-case)
          // Since we close the panel when openOnFocus=false
          // we lose track of the highlighted index. (Query-suggestions use-case)
          action.props.openOnFocus === true ? action.props.defaultActiveItemId : null,
          status: 'idle',
          query: ''
        });
      }

    case 'focus':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId,
          isOpen: (action.props.openOnFocus || Boolean(state.query)) && action.props.shouldPanelOpen({
            state: state
          })
        });
      }

    case 'blur':
      {
        if (action.props.debug) {
          return state;
        }

        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          isOpen: false,
          activeItemId: null
        });
      }

    case 'mousemove':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }

    case 'mouseleave':
      {
        return stateReducer_objectSpread(stateReducer_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId
        });
      }

    default:
      invariant(false, "The reducer action ".concat(JSON.stringify(action.type), " is not supported."));
      return state;
  }
};
;// CONCATENATED MODULE: ./.yarn/cache/@algolia-autocomplete-core-npm-1.5.2-7b75b597c7-a8ab49c689.zip/node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js
function createAutocomplete_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function createAutocomplete_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { createAutocomplete_ownKeys(Object(source), true).forEach(function (key) { createAutocomplete_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { createAutocomplete_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function createAutocomplete_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function createAutocomplete(options) {
  checkOptions(options);
  var subscribers = [];
  var props = getDefaultProps(options, subscribers);
  var store = createStore(stateReducer, props, onStoreStateChange);
  var setters = getAutocompleteSetters({
    store: store
  });
  var propGetters = getPropGetters(createAutocomplete_objectSpread({
    props: props,
    refresh: refresh,
    store: store
  }, setters));

  function onStoreStateChange(_ref) {
    var prevState = _ref.prevState,
        state = _ref.state;
    props.onStateChange(createAutocomplete_objectSpread({
      prevState: prevState,
      state: state,
      refresh: refresh
    }, setters));
  }

  function refresh() {
    return onInput(createAutocomplete_objectSpread({
      event: new Event('input'),
      nextState: {
        isOpen: store.getState().isOpen
      },
      props: props,
      query: store.getState().query,
      refresh: refresh,
      store: store
    }, setters));
  }

  props.plugins.forEach(function (plugin) {
    var _plugin$subscribe;

    return (_plugin$subscribe = plugin.subscribe) === null || _plugin$subscribe === void 0 ? void 0 : _plugin$subscribe.call(plugin, createAutocomplete_objectSpread(createAutocomplete_objectSpread({}, setters), {}, {
      refresh: refresh,
      onSelect: function onSelect(fn) {
        subscribers.push({
          onSelect: fn
        });
      },
      onActive: function onActive(fn) {
        subscribers.push({
          onActive: fn
        });
      }
    }));
  });
  injectMetadata({
    metadata: getMetadata({
      plugins: props.plugins,
      options: options
    }),
    environment: props.environment
  });
  return createAutocomplete_objectSpread(createAutocomplete_objectSpread({
    refresh: refresh
  }, propGetters), setters);
}
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__(6687);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/constants.js
var MAX_QUERY_SIZE = 64;
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/AlgoliaLogo.js

function AlgoliaLogo(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations;
  var _translations$searchB = translations.searchByText,
      searchByText = _translations$searchB === void 0 ? 'Search by' : _translations$searchB;
  return /*#__PURE__*/react.createElement("a", {
    href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Label"
  }, searchByText), /*#__PURE__*/react.createElement("svg", {
    width: "77",
    height: "19",
    "aria-label": "Algolia",
    role: "img"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/Footer.js



function CommandIcon(props) {
  return /*#__PURE__*/react.createElement("svg", {
    width: "15",
    height: "15",
    "aria-label": props.ariaLabel,
    role: "img"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2"
  }, props.children));
}

function Footer(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations;
  var _translations$selectT = translations.selectText,
      selectText = _translations$selectT === void 0 ? 'to select' : _translations$selectT,
      _translations$selectK = translations.selectKeyAriaLabel,
      selectKeyAriaLabel = _translations$selectK === void 0 ? 'Enter key' : _translations$selectK,
      _translations$navigat = translations.navigateText,
      navigateText = _translations$navigat === void 0 ? 'to navigate' : _translations$navigat,
      _translations$navigat2 = translations.navigateUpKeyAriaLabel,
      navigateUpKeyAriaLabel = _translations$navigat2 === void 0 ? 'Arrow up' : _translations$navigat2,
      _translations$navigat3 = translations.navigateDownKeyAriaLabel,
      navigateDownKeyAriaLabel = _translations$navigat3 === void 0 ? 'Arrow down' : _translations$navigat3,
      _translations$closeTe = translations.closeText,
      closeText = _translations$closeTe === void 0 ? 'to close' : _translations$closeTe,
      _translations$closeKe = translations.closeKeyAriaLabel,
      closeKeyAriaLabel = _translations$closeKe === void 0 ? 'Escape key' : _translations$closeKe,
      _translations$searchB = translations.searchByText,
      searchByText = _translations$searchB === void 0 ? 'Search by' : _translations$searchB;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Logo"
  }, /*#__PURE__*/react.createElement(AlgoliaLogo, {
    translations: {
      searchByText: searchByText
    }
  })), /*#__PURE__*/react.createElement("ul", {
    className: "DocSearch-Commands"
  }, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Commands-Key"
  }, /*#__PURE__*/react.createElement(CommandIcon, {
    ariaLabel: selectKeyAriaLabel
  }, /*#__PURE__*/react.createElement("path", {
    d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"
  }))), /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Label"
  }, selectText)), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Commands-Key"
  }, /*#__PURE__*/react.createElement(CommandIcon, {
    ariaLabel: navigateDownKeyAriaLabel
  }, /*#__PURE__*/react.createElement("path", {
    d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3"
  }))), /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Commands-Key"
  }, /*#__PURE__*/react.createElement(CommandIcon, {
    ariaLabel: navigateUpKeyAriaLabel
  }, /*#__PURE__*/react.createElement("path", {
    d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3"
  }))), /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Label"
  }, navigateText)), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Commands-Key"
  }, /*#__PURE__*/react.createElement(CommandIcon, {
    ariaLabel: closeKeyAriaLabel
  }, /*#__PURE__*/react.createElement("path", {
    d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"
  }))), /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Label"
  }, closeText))));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/Hit.js

function Hit(_ref) {
  var hit = _ref.hit,
      children = _ref.children;
  return /*#__PURE__*/react.createElement("a", {
    href: hit.url
  }, children);
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/icons/ErrorIcon.js

function ErrorIcon() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 20 20",
    fill: "none",
    fillRule: "evenodd",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"
  }));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/ErrorScreen.js


function ErrorScreen(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations;
  var _translations$titleTe = translations.titleText,
      titleText = _translations$titleTe === void 0 ? 'Unable to fetch results' : _translations$titleTe,
      _translations$helpTex = translations.helpText,
      helpText = _translations$helpTex === void 0 ? 'You might want to check your network connection.' : _translations$helpTex;
  return /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-ErrorScreen"
  }, /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Screen-Icon"
  }, /*#__PURE__*/react.createElement(ErrorIcon, null)), /*#__PURE__*/react.createElement("p", {
    className: "DocSearch-Title"
  }, titleText), /*#__PURE__*/react.createElement("p", {
    className: "DocSearch-Help"
  }, helpText));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/icons/NoResultsIcon.js

function NoResultsIcon() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 20 20",
    fill: "none",
    fillRule: "evenodd",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"
  }));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/NoResultsScreen.js
var NoResultsScreen_excluded = ["translations"];

function NoResultsScreen_toConsumableArray(arr) { return NoResultsScreen_arrayWithoutHoles(arr) || NoResultsScreen_iterableToArray(arr) || NoResultsScreen_unsupportedIterableToArray(arr) || NoResultsScreen_nonIterableSpread(); }

function NoResultsScreen_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function NoResultsScreen_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NoResultsScreen_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NoResultsScreen_arrayLikeToArray(o, minLen); }

function NoResultsScreen_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function NoResultsScreen_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return NoResultsScreen_arrayLikeToArray(arr); }

function NoResultsScreen_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NoResultsScreen_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NoResultsScreen_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function NoResultsScreen_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function NoResultsScreen(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      props = NoResultsScreen_objectWithoutProperties(_ref, NoResultsScreen_excluded);

  var _translations$noResul = translations.noResultsText,
      noResultsText = _translations$noResul === void 0 ? 'No results for' : _translations$noResul,
      _translations$suggest = translations.suggestedQueryText,
      suggestedQueryText = _translations$suggest === void 0 ? 'Try searching for' : _translations$suggest,
      _translations$reportM = translations.reportMissingResultsText,
      reportMissingResultsText = _translations$reportM === void 0 ? 'Believe this query should return results?' : _translations$reportM,
      _translations$reportM2 = translations.reportMissingResultsLinkText,
      reportMissingResultsLinkText = _translations$reportM2 === void 0 ? 'Let us know.' : _translations$reportM2;
  var searchSuggestions = props.state.context.searchSuggestions;
  return /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-NoResults"
  }, /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Screen-Icon"
  }, /*#__PURE__*/react.createElement(NoResultsIcon, null)), /*#__PURE__*/react.createElement("p", {
    className: "DocSearch-Title"
  }, noResultsText, " \"", /*#__PURE__*/react.createElement("strong", null, props.state.query), "\""), searchSuggestions && searchSuggestions.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-NoResults-Prefill-List"
  }, /*#__PURE__*/react.createElement("p", {
    className: "DocSearch-Help"
  }, suggestedQueryText, ":"), /*#__PURE__*/react.createElement("ul", null, searchSuggestions.slice(0, 3).reduce(function (acc, search) {
    return [].concat(NoResultsScreen_toConsumableArray(acc), [/*#__PURE__*/react.createElement("li", {
      key: search
    }, /*#__PURE__*/react.createElement("button", {
      className: "DocSearch-Prefill",
      key: search,
      type: "button",
      onClick: function onClick() {
        props.setQuery(search.toLowerCase() + ' ');
        props.refresh();
        props.inputRef.current.focus();
      }
    }, search))]);
  }, []))), props.getMissingResultsUrl && /*#__PURE__*/react.createElement("p", {
    className: "DocSearch-Help"
  }, "".concat(reportMissingResultsText, " "), /*#__PURE__*/react.createElement("a", {
    href: props.getMissingResultsUrl({
      query: props.state.query
    }),
    target: "_blank",
    rel: "noopener noreferrer"
  }, reportMissingResultsLinkText)));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/icons/SourceIcon.js


var LvlIcon = function LvlIcon() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinejoin: "round"
  }));
};

function SourceIcon(props) {
  switch (props.type) {
    case 'lvl1':
      return /*#__PURE__*/react.createElement(LvlIcon, null);

    case 'content':
      return /*#__PURE__*/react.createElement(ContentIcon, null);

    default:
      return /*#__PURE__*/react.createElement(AnchorIcon, null);
  }
}

function AnchorIcon() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

function ContentIcon() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinejoin: "round"
  }));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/icons/SelectIcon.js

function SelectIcon() {
  return /*#__PURE__*/react.createElement("svg", {
    className: "DocSearch-Hit-Select-Icon",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("g", {
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M18 3v4c0 2-2 4-4 4H2"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8 17l-6-6 6-6"
  })));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/Snippet.js
var Snippet_excluded = ["hit", "attribute", "tagName"];

function Snippet_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Snippet_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Snippet_ownKeys(Object(source), !0).forEach(function (key) { Snippet_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Snippet_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Snippet_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Snippet_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Snippet_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Snippet_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function getPropertyByPath(object, path) {
  var parts = path.split('.');
  return parts.reduce(function (prev, current) {
    if (prev !== null && prev !== void 0 && prev[current]) return prev[current];
    return null;
  }, object);
}

function Snippet(_ref) {
  var hit = _ref.hit,
      attribute = _ref.attribute,
      _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === void 0 ? 'span' : _ref$tagName,
      rest = Snippet_objectWithoutProperties(_ref, Snippet_excluded);

  return (0,react.createElement)(tagName, Snippet_objectSpread(Snippet_objectSpread({}, rest), {}, {
    dangerouslySetInnerHTML: {
      __html: getPropertyByPath(hit, "_snippetResult.".concat(attribute, ".value")) || getPropertyByPath(hit, attribute)
    }
  }));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/Results.js
function Results_slicedToArray(arr, i) { return Results_arrayWithHoles(arr) || Results_iterableToArrayLimit(arr, i) || Results_unsupportedIterableToArray(arr, i) || Results_nonIterableRest(); }

function Results_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Results_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Results_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Results_arrayLikeToArray(o, minLen); }

function Results_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Results_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Results_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function Results(props) {
  if (!props.collection || props.collection.items.length === 0) {
    return null;
  }

  return /*#__PURE__*/react.createElement("section", {
    className: "DocSearch-Hits"
  }, /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Hit-source"
  }, props.title), /*#__PURE__*/react.createElement("ul", props.getListProps(), props.collection.items.map(function (item, index) {
    return /*#__PURE__*/react.createElement(Result, _extends({
      key: [props.title, item.objectID].join(':'),
      item: item,
      index: index
    }, props));
  })));
}

function Result(_ref) {
  var item = _ref.item,
      index = _ref.index,
      renderIcon = _ref.renderIcon,
      renderAction = _ref.renderAction,
      getItemProps = _ref.getItemProps,
      onItemClick = _ref.onItemClick,
      collection = _ref.collection,
      hitComponent = _ref.hitComponent;

  var _React$useState = react.useState(false),
      _React$useState2 = Results_slicedToArray(_React$useState, 2),
      isDeleting = _React$useState2[0],
      setIsDeleting = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      _React$useState4 = Results_slicedToArray(_React$useState3, 2),
      isFavoriting = _React$useState4[0],
      setIsFavoriting = _React$useState4[1];

  var action = react.useRef(null);
  var Hit = hitComponent;

  function runDeleteTransition(cb) {
    setIsDeleting(true);
    action.current = cb;
  }

  function runFavoriteTransition(cb) {
    setIsFavoriting(true);
    action.current = cb;
  }

  return /*#__PURE__*/react.createElement("li", _extends({
    className: ['DocSearch-Hit', item.__docsearch_parent && 'DocSearch-Hit--Child', isDeleting && 'DocSearch-Hit--deleting', isFavoriting && 'DocSearch-Hit--favoriting'].filter(Boolean).join(' '),
    onTransitionEnd: function onTransitionEnd() {
      if (action.current) {
        action.current();
      }
    }
  }, getItemProps({
    item: item,
    source: collection.source,
    onClick: function onClick() {
      onItemClick(item);
    }
  })), /*#__PURE__*/react.createElement(Hit, {
    hit: item
  }, /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Hit-Container"
  }, renderIcon({
    item: item,
    index: index
  }), item.hierarchy[item.type] && item.type === 'lvl1' && /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Hit-content-wrapper"
  }, /*#__PURE__*/react.createElement(Snippet, {
    className: "DocSearch-Hit-title",
    hit: item,
    attribute: "hierarchy.lvl1"
  }), item.content && /*#__PURE__*/react.createElement(Snippet, {
    className: "DocSearch-Hit-path",
    hit: item,
    attribute: "content"
  })), item.hierarchy[item.type] && (item.type === 'lvl2' || item.type === 'lvl3' || item.type === 'lvl4' || item.type === 'lvl5' || item.type === 'lvl6') && /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Hit-content-wrapper"
  }, /*#__PURE__*/react.createElement(Snippet, {
    className: "DocSearch-Hit-title",
    hit: item,
    attribute: "hierarchy.".concat(item.type)
  }), /*#__PURE__*/react.createElement(Snippet, {
    className: "DocSearch-Hit-path",
    hit: item,
    attribute: "hierarchy.lvl1"
  })), item.type === 'content' && /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Hit-content-wrapper"
  }, /*#__PURE__*/react.createElement(Snippet, {
    className: "DocSearch-Hit-title",
    hit: item,
    attribute: "content"
  }), /*#__PURE__*/react.createElement(Snippet, {
    className: "DocSearch-Hit-path",
    hit: item,
    attribute: "hierarchy.lvl1"
  })), renderAction({
    item: item,
    runDeleteTransition: runDeleteTransition,
    runFavoriteTransition: runFavoriteTransition
  }))));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/utils/removeHighlightTags.js
var regexHighlightTags = /(<mark>|<\/mark>)/g;
var regexHasHighlightTags = RegExp(regexHighlightTags.source);
function removeHighlightTags(hit) {
  var _internalDocSearchHit, _internalDocSearchHit2, _internalDocSearchHit3, _hit$_highlightResult, _hit$_highlightResult2;

  var internalDocSearchHit = hit;

  if (!internalDocSearchHit.__docsearch_parent && !hit._highlightResult) {
    return hit.hierarchy.lvl0;
  }

  var _ref = (internalDocSearchHit.__docsearch_parent ? (_internalDocSearchHit = internalDocSearchHit.__docsearch_parent) === null || _internalDocSearchHit === void 0 ? void 0 : (_internalDocSearchHit2 = _internalDocSearchHit._highlightResult) === null || _internalDocSearchHit2 === void 0 ? void 0 : (_internalDocSearchHit3 = _internalDocSearchHit2.hierarchy) === null || _internalDocSearchHit3 === void 0 ? void 0 : _internalDocSearchHit3.lvl0 : (_hit$_highlightResult = hit._highlightResult) === null || _hit$_highlightResult === void 0 ? void 0 : (_hit$_highlightResult2 = _hit$_highlightResult.hierarchy) === null || _hit$_highlightResult2 === void 0 ? void 0 : _hit$_highlightResult2.lvl0) || {},
      value = _ref.value;

  return value && regexHasHighlightTags.test(value) ? value.replace(regexHighlightTags, '') : value;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/ResultsScreen.js
function ResultsScreen_extends() { ResultsScreen_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ResultsScreen_extends.apply(this, arguments); }





function ResultsScreen(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Dropdown-Container"
  }, props.state.collections.map(function (collection) {
    if (collection.items.length === 0) {
      return null;
    }

    var title = removeHighlightTags(collection.items[0]);
    return /*#__PURE__*/react.createElement(Results, ResultsScreen_extends({}, props, {
      key: collection.source.sourceId,
      title: title,
      collection: collection,
      renderIcon: function renderIcon(_ref) {
        var _collection$items;

        var item = _ref.item,
            index = _ref.index;
        return /*#__PURE__*/react.createElement(react.Fragment, null, item.__docsearch_parent && /*#__PURE__*/react.createElement("svg", {
          className: "DocSearch-Hit-Tree",
          viewBox: "0 0 24 54"
        }, /*#__PURE__*/react.createElement("g", {
          stroke: "currentColor",
          fill: "none",
          fillRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }, item.__docsearch_parent !== ((_collection$items = collection.items[index + 1]) === null || _collection$items === void 0 ? void 0 : _collection$items.__docsearch_parent) ? /*#__PURE__*/react.createElement("path", {
          d: "M8 6v21M20 27H8.3"
        }) : /*#__PURE__*/react.createElement("path", {
          d: "M8 6v42M20 27H8.3"
        }))), /*#__PURE__*/react.createElement("div", {
          className: "DocSearch-Hit-icon"
        }, /*#__PURE__*/react.createElement(SourceIcon, {
          type: item.type
        })));
      },
      renderAction: function renderAction() {
        return /*#__PURE__*/react.createElement("div", {
          className: "DocSearch-Hit-action"
        }, /*#__PURE__*/react.createElement(SelectIcon, null));
      }
    }));
  }), props.resultsFooterComponent && /*#__PURE__*/react.createElement("section", {
    className: "DocSearch-HitsFooter"
  }, /*#__PURE__*/react.createElement(props.resultsFooterComponent, {
    state: props.state
  })));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/icons/RecentIcon.js

function RecentIcon() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("g", {
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"
  })));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/icons/StarIcon.js

function StarIcon() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinejoin: "round"
  }));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/icons/ResetIcon.js

function ResetIcon() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/StartScreen.js
var StartScreen_excluded = ["translations"];

function StartScreen_extends() { StartScreen_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return StartScreen_extends.apply(this, arguments); }

function StartScreen_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = StartScreen_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function StartScreen_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function StartScreen(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      props = StartScreen_objectWithoutProperties(_ref, StartScreen_excluded);

  var _translations$recentS = translations.recentSearchesTitle,
      recentSearchesTitle = _translations$recentS === void 0 ? 'Recent' : _translations$recentS,
      _translations$noRecen = translations.noRecentSearchesText,
      noRecentSearchesText = _translations$noRecen === void 0 ? 'No recent searches' : _translations$noRecen,
      _translations$saveRec = translations.saveRecentSearchButtonTitle,
      saveRecentSearchButtonTitle = _translations$saveRec === void 0 ? 'Save this search' : _translations$saveRec,
      _translations$removeR = translations.removeRecentSearchButtonTitle,
      removeRecentSearchButtonTitle = _translations$removeR === void 0 ? 'Remove this search from history' : _translations$removeR,
      _translations$favorit = translations.favoriteSearchesTitle,
      favoriteSearchesTitle = _translations$favorit === void 0 ? 'Favorite' : _translations$favorit,
      _translations$removeF = translations.removeFavoriteSearchButtonTitle,
      removeFavoriteSearchButtonTitle = _translations$removeF === void 0 ? 'Remove this search from favorites' : _translations$removeF;

  if (props.state.status === 'idle' && props.hasCollections === false) {
    if (props.disableUserPersonalization) {
      return null;
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "DocSearch-StartScreen"
    }, /*#__PURE__*/react.createElement("p", {
      className: "DocSearch-Help"
    }, noRecentSearchesText));
  }

  if (props.hasCollections === false) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Dropdown-Container"
  }, /*#__PURE__*/react.createElement(Results, StartScreen_extends({}, props, {
    title: recentSearchesTitle,
    collection: props.state.collections[0],
    renderIcon: function renderIcon() {
      return /*#__PURE__*/react.createElement("div", {
        className: "DocSearch-Hit-icon"
      }, /*#__PURE__*/react.createElement(RecentIcon, null));
    },
    renderAction: function renderAction(_ref2) {
      var item = _ref2.item,
          runFavoriteTransition = _ref2.runFavoriteTransition,
          runDeleteTransition = _ref2.runDeleteTransition;
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
        className: "DocSearch-Hit-action"
      }, /*#__PURE__*/react.createElement("button", {
        className: "DocSearch-Hit-action-button",
        title: saveRecentSearchButtonTitle,
        type: "submit",
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          runFavoriteTransition(function () {
            props.favoriteSearches.add(item);
            props.recentSearches.remove(item);
            props.refresh();
          });
        }
      }, /*#__PURE__*/react.createElement(StarIcon, null))), /*#__PURE__*/react.createElement("div", {
        className: "DocSearch-Hit-action"
      }, /*#__PURE__*/react.createElement("button", {
        className: "DocSearch-Hit-action-button",
        title: removeRecentSearchButtonTitle,
        type: "submit",
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          runDeleteTransition(function () {
            props.recentSearches.remove(item);
            props.refresh();
          });
        }
      }, /*#__PURE__*/react.createElement(ResetIcon, null))));
    }
  })), /*#__PURE__*/react.createElement(Results, StartScreen_extends({}, props, {
    title: favoriteSearchesTitle,
    collection: props.state.collections[1],
    renderIcon: function renderIcon() {
      return /*#__PURE__*/react.createElement("div", {
        className: "DocSearch-Hit-icon"
      }, /*#__PURE__*/react.createElement(StarIcon, null));
    },
    renderAction: function renderAction(_ref3) {
      var item = _ref3.item,
          runDeleteTransition = _ref3.runDeleteTransition;
      return /*#__PURE__*/react.createElement("div", {
        className: "DocSearch-Hit-action"
      }, /*#__PURE__*/react.createElement("button", {
        className: "DocSearch-Hit-action-button",
        title: removeFavoriteSearchButtonTitle,
        type: "submit",
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          runDeleteTransition(function () {
            props.favoriteSearches.remove(item);
            props.refresh();
          });
        }
      }, /*#__PURE__*/react.createElement(ResetIcon, null)));
    }
  })));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/ScreenState.js
var ScreenState_excluded = ["translations"];

function ScreenState_extends() { ScreenState_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ScreenState_extends.apply(this, arguments); }

function ScreenState_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ScreenState_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ScreenState_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var ScreenState = react.memo(function (_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      props = ScreenState_objectWithoutProperties(_ref, ScreenState_excluded);

  if (props.state.status === 'error') {
    return /*#__PURE__*/react.createElement(ErrorScreen, {
      translations: translations === null || translations === void 0 ? void 0 : translations.errorScreen
    });
  }

  var hasCollections = props.state.collections.some(function (collection) {
    return collection.items.length > 0;
  });

  if (!props.state.query) {
    return /*#__PURE__*/react.createElement(StartScreen, ScreenState_extends({}, props, {
      hasCollections: hasCollections,
      translations: translations === null || translations === void 0 ? void 0 : translations.startScreen
    }));
  }

  if (hasCollections === false) {
    return /*#__PURE__*/react.createElement(NoResultsScreen, ScreenState_extends({}, props, {
      translations: translations === null || translations === void 0 ? void 0 : translations.noResultsScreen
    }));
  }

  return /*#__PURE__*/react.createElement(ResultsScreen, props);
}, function areEqual(_prevProps, nextProps) {
  // We don't update the screen when Autocomplete is loading or stalled to
  // avoid UI flashes:
  //  - Empty screen ??? Results screen
  //  - NoResults screen ??? NoResults screen with another query
  return nextProps.state.status === 'loading' || nextProps.state.status === 'stalled';
});
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/icons/LoadingIcon.js

function LoadingIcon() {
  return /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 38 38",
    stroke: "currentColor",
    strokeOpacity: ".5"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/react.createElement("circle", {
    strokeOpacity: ".3",
    cx: "18",
    cy: "18",
    r: "18"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18"
  }, /*#__PURE__*/react.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "1s",
    repeatCount: "indefinite"
  })))));
}
// EXTERNAL MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/icons/SearchIcon.js
var SearchIcon = __webpack_require__(4088);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/SearchBox.js
var SearchBox_excluded = ["translations"];

function SearchBox_extends() { SearchBox_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SearchBox_extends.apply(this, arguments); }

function SearchBox_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SearchBox_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SearchBox_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function SearchBox(_ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      props = SearchBox_objectWithoutProperties(_ref, SearchBox_excluded);

  var _translations$resetBu = translations.resetButtonTitle,
      resetButtonTitle = _translations$resetBu === void 0 ? 'Clear the query' : _translations$resetBu,
      _translations$resetBu2 = translations.resetButtonAriaLabel,
      resetButtonAriaLabel = _translations$resetBu2 === void 0 ? 'Clear the query' : _translations$resetBu2,
      _translations$cancelB = translations.cancelButtonText,
      cancelButtonText = _translations$cancelB === void 0 ? 'Cancel' : _translations$cancelB,
      _translations$cancelB2 = translations.cancelButtonAriaLabel,
      cancelButtonAriaLabel = _translations$cancelB2 === void 0 ? 'Cancel' : _translations$cancelB2;

  var _props$getFormProps = props.getFormProps({
    inputElement: props.inputRef.current
  }),
      onReset = _props$getFormProps.onReset;

  react.useEffect(function () {
    if (props.autoFocus && props.inputRef.current) {
      props.inputRef.current.focus();
    }
  }, [props.autoFocus, props.inputRef]);
  react.useEffect(function () {
    if (props.isFromSelection && props.inputRef.current) {
      props.inputRef.current.select();
    }
  }, [props.isFromSelection, props.inputRef]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("form", {
    className: "DocSearch-Form",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
    },
    onReset: onReset
  }, /*#__PURE__*/react.createElement("label", SearchBox_extends({
    className: "DocSearch-MagnifierLabel"
  }, props.getLabelProps()), /*#__PURE__*/react.createElement(SearchIcon/* SearchIcon */.W, null)), /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-LoadingIndicator"
  }, /*#__PURE__*/react.createElement(LoadingIcon, null)), /*#__PURE__*/react.createElement("input", SearchBox_extends({
    className: "DocSearch-Input",
    ref: props.inputRef
  }, props.getInputProps({
    inputElement: props.inputRef.current,
    autoFocus: props.autoFocus,
    maxLength: MAX_QUERY_SIZE
  }))), /*#__PURE__*/react.createElement("button", {
    type: "reset",
    title: resetButtonTitle,
    className: "DocSearch-Reset",
    "aria-label": resetButtonAriaLabel,
    hidden: !props.state.query
  }, /*#__PURE__*/react.createElement(ResetIcon, null))), /*#__PURE__*/react.createElement("button", {
    className: "DocSearch-Cancel",
    type: "reset",
    "aria-label": cancelButtonAriaLabel,
    onClick: props.onClose
  }, cancelButtonText));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/stored-searches.js
var stored_searches_excluded = ["_highlightResult", "_snippetResult"];

function stored_searches_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = stored_searches_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function stored_searches_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function isLocalStorageSupported() {
  var key = '__TEST_KEY__';

  try {
    localStorage.setItem(key, '');
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

function createStorage(key) {
  if (isLocalStorageSupported() === false) {
    return {
      setItem: function setItem() {},
      getItem: function getItem() {
        return [];
      }
    };
  }

  return {
    setItem: function setItem(item) {
      return window.localStorage.setItem(key, JSON.stringify(item));
    },
    getItem: function getItem() {
      var item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    }
  };
}

function createStoredSearches(_ref) {
  var key = _ref.key,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 5 : _ref$limit;
  var storage = createStorage(key);
  var items = storage.getItem().slice(0, limit);
  return {
    add: function add(item) {
      var _ref2 = item,
          _highlightResult = _ref2._highlightResult,
          _snippetResult = _ref2._snippetResult,
          hit = stored_searches_objectWithoutProperties(_ref2, stored_searches_excluded);

      var isQueryAlreadySaved = items.findIndex(function (x) {
        return x.objectID === hit.objectID;
      });

      if (isQueryAlreadySaved > -1) {
        items.splice(isQueryAlreadySaved, 1);
      }

      items.unshift(hit);
      items = items.slice(0, limit);
      storage.setItem(items);
    },
    remove: function remove(item) {
      items = items.filter(function (x) {
        return x.objectID !== item.objectID;
      });
      storage.setItem(items);
    },
    getAll: function getAll() {
      return items;
    }
  };
}
;// CONCATENATED MODULE: ./.yarn/cache/algoliasearch-npm-4.12.1-ec3cefecd9-ae3dad1c2c.zip/node_modules/algoliasearch/dist/algoliasearch-lite.esm.browser.js
function createBrowserLocalStorageCache(options) {
    const namespaceKey = `algoliasearch-client-js-${options.key}`;
    // eslint-disable-next-line functional/no-let
    let storage;
    const getStorage = () => {
        if (storage === undefined) {
            storage = options.localStorage || window.localStorage;
        }
        return storage;
    };
    const getNamespace = () => {
        return JSON.parse(getStorage().getItem(namespaceKey) || '{}');
    };
    return {
        get(key, defaultValue, events = {
            miss: () => Promise.resolve(),
        }) {
            return Promise.resolve()
                .then(() => {
                const keyAsString = JSON.stringify(key);
                const value = getNamespace()[keyAsString];
                return Promise.all([value || defaultValue(), value !== undefined]);
            })
                .then(([value, exists]) => {
                return Promise.all([value, exists || events.miss(value)]);
            })
                .then(([value]) => value);
        },
        set(key, value) {
            return Promise.resolve().then(() => {
                const namespace = getNamespace();
                // eslint-disable-next-line functional/immutable-data
                namespace[JSON.stringify(key)] = value;
                getStorage().setItem(namespaceKey, JSON.stringify(namespace));
                return value;
            });
        },
        delete(key) {
            return Promise.resolve().then(() => {
                const namespace = getNamespace();
                // eslint-disable-next-line functional/immutable-data
                delete namespace[JSON.stringify(key)];
                getStorage().setItem(namespaceKey, JSON.stringify(namespace));
            });
        },
        clear() {
            return Promise.resolve().then(() => {
                getStorage().removeItem(namespaceKey);
            });
        },
    };
}

// @todo Add logger on options to debug when caches go wrong.
function createFallbackableCache(options) {
    const caches = [...options.caches];
    const current = caches.shift(); // eslint-disable-line functional/immutable-data
    if (current === undefined) {
        return createNullCache();
    }
    return {
        get(key, defaultValue, events = {
            miss: () => Promise.resolve(),
        }) {
            return current.get(key, defaultValue, events).catch(() => {
                return createFallbackableCache({ caches }).get(key, defaultValue, events);
            });
        },
        set(key, value) {
            return current.set(key, value).catch(() => {
                return createFallbackableCache({ caches }).set(key, value);
            });
        },
        delete(key) {
            return current.delete(key).catch(() => {
                return createFallbackableCache({ caches }).delete(key);
            });
        },
        clear() {
            return current.clear().catch(() => {
                return createFallbackableCache({ caches }).clear();
            });
        },
    };
}

function createNullCache() {
    return {
        get(_key, defaultValue, events = {
            miss: () => Promise.resolve(),
        }) {
            const value = defaultValue();
            return value
                .then(result => Promise.all([result, events.miss(result)]))
                .then(([result]) => result);
        },
        set(_key, value) {
            return Promise.resolve(value);
        },
        delete(_key) {
            return Promise.resolve();
        },
        clear() {
            return Promise.resolve();
        },
    };
}

function createInMemoryCache(options = { serializable: true }) {
    // eslint-disable-next-line functional/no-let
    let cache = {};
    return {
        get(key, defaultValue, events = {
            miss: () => Promise.resolve(),
        }) {
            const keyAsString = JSON.stringify(key);
            if (keyAsString in cache) {
                return Promise.resolve(options.serializable ? JSON.parse(cache[keyAsString]) : cache[keyAsString]);
            }
            const promise = defaultValue();
            const miss = (events && events.miss) || (() => Promise.resolve());
            return promise.then((value) => miss(value)).then(() => promise);
        },
        set(key, value) {
            // eslint-disable-next-line functional/immutable-data
            cache[JSON.stringify(key)] = options.serializable ? JSON.stringify(value) : value;
            return Promise.resolve(value);
        },
        delete(key) {
            // eslint-disable-next-line functional/immutable-data
            delete cache[JSON.stringify(key)];
            return Promise.resolve();
        },
        clear() {
            cache = {};
            return Promise.resolve();
        },
    };
}

function createAuth(authMode, appId, apiKey) {
    const credentials = {
        'x-algolia-api-key': apiKey,
        'x-algolia-application-id': appId,
    };
    return {
        headers() {
            return authMode === AuthMode.WithinHeaders ? credentials : {};
        },
        queryParameters() {
            return authMode === AuthMode.WithinQueryParameters ? credentials : {};
        },
    };
}

// eslint-disable-next-line functional/prefer-readonly-type
function shuffle(array) {
    let c = array.length - 1; // eslint-disable-line functional/no-let
    // eslint-disable-next-line functional/no-loop-statement
    for (c; c > 0; c--) {
        const b = Math.floor(Math.random() * (c + 1));
        const a = array[c];
        array[c] = array[b]; // eslint-disable-line functional/immutable-data, no-param-reassign
        array[b] = a; // eslint-disable-line functional/immutable-data, no-param-reassign
    }
    return array;
}
function addMethods(base, methods) {
    if (!methods) {
        return base;
    }
    Object.keys(methods).forEach(key => {
        // eslint-disable-next-line functional/immutable-data, no-param-reassign
        base[key] = methods[key](base);
    });
    return base;
}
function encode(format, ...args) {
    // eslint-disable-next-line functional/no-let
    let i = 0;
    return format.replace(/%s/g, () => encodeURIComponent(args[i++]));
}

const algoliasearch_lite_esm_browser_version = '4.12.1';

const AuthMode = {
    /**
     * If auth credentials should be in query parameters.
     */
    WithinQueryParameters: 0,
    /**
     * If auth credentials should be in headers.
     */
    WithinHeaders: 1,
};

function createMappedRequestOptions(requestOptions, timeout) {
    const options = requestOptions || {};
    const data = options.data || {};
    Object.keys(options).forEach(key => {
        if (['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(key) === -1) {
            data[key] = options[key]; // eslint-disable-line functional/immutable-data
        }
    });
    return {
        data: Object.entries(data).length > 0 ? data : undefined,
        timeout: options.timeout || timeout,
        headers: options.headers || {},
        queryParameters: options.queryParameters || {},
        cacheable: options.cacheable,
    };
}

const CallEnum = {
    /**
     * If the host is read only.
     */
    Read: 1,
    /**
     * If the host is write only.
     */
    Write: 2,
    /**
     * If the host is both read and write.
     */
    Any: 3,
};

const HostStatusEnum = {
    Up: 1,
    Down: 2,
    Timeouted: 3,
};

// By default, API Clients at Algolia have expiration delay
// of 5 mins. In the JavaScript client, we have 2 mins.
const EXPIRATION_DELAY = 2 * 60 * 1000;
function createStatefulHost(host, status = HostStatusEnum.Up) {
    return {
        ...host,
        status,
        lastUpdate: Date.now(),
    };
}
function isStatefulHostUp(host) {
    return host.status === HostStatusEnum.Up || Date.now() - host.lastUpdate > EXPIRATION_DELAY;
}
function isStatefulHostTimeouted(host) {
    return (host.status === HostStatusEnum.Timeouted && Date.now() - host.lastUpdate <= EXPIRATION_DELAY);
}

function createStatelessHost(options) {
    if (typeof options === 'string') {
        return {
            protocol: 'https',
            url: options,
            accept: CallEnum.Any,
        };
    }
    return {
        protocol: options.protocol || 'https',
        url: options.url,
        accept: options.accept || CallEnum.Any,
    };
}

const MethodEnum = {
    Delete: 'DELETE',
    Get: 'GET',
    Post: 'POST',
    Put: 'PUT',
};

function createRetryableOptions(hostsCache, statelessHosts) {
    return Promise.all(statelessHosts.map(statelessHost => {
        return hostsCache.get(statelessHost, () => {
            return Promise.resolve(createStatefulHost(statelessHost));
        });
    })).then(statefulHosts => {
        const hostsUp = statefulHosts.filter(host => isStatefulHostUp(host));
        const hostsTimeouted = statefulHosts.filter(host => isStatefulHostTimeouted(host));
        /**
         * Note, we put the hosts that previously timeouted on the end of the list.
         */
        const hostsAvailable = [...hostsUp, ...hostsTimeouted];
        const statelessHostsAvailable = hostsAvailable.length > 0
            ? hostsAvailable.map(host => createStatelessHost(host))
            : statelessHosts;
        return {
            getTimeout(timeoutsCount, baseTimeout) {
                /**
                 * Imagine that you have 4 hosts, if timeouts will increase
                 * on the following way: 1 (timeouted) > 4 (timeouted) > 5 (200)
                 *
                 * Note that, the very next request, we start from the previous timeout
                 *
                 *  5 (timeouted) > 6 (timeouted) > 7 ...
                 *
                 * This strategy may need to be reviewed, but is the strategy on the our
                 * current v3 version.
                 */
                const timeoutMultiplier = hostsTimeouted.length === 0 && timeoutsCount === 0
                    ? 1
                    : hostsTimeouted.length + 3 + timeoutsCount;
                return timeoutMultiplier * baseTimeout;
            },
            statelessHosts: statelessHostsAvailable,
        };
    });
}

const isNetworkError = ({ isTimedOut, status }) => {
    return !isTimedOut && ~~status === 0;
};
const isRetryable = (response) => {
    const status = response.status;
    const isTimedOut = response.isTimedOut;
    return (isTimedOut || isNetworkError(response) || (~~(status / 100) !== 2 && ~~(status / 100) !== 4));
};
const isSuccess = ({ status }) => {
    return ~~(status / 100) === 2;
};
const retryDecision = (response, outcomes) => {
    if (isRetryable(response)) {
        return outcomes.onRetry(response);
    }
    if (isSuccess(response)) {
        return outcomes.onSuccess(response);
    }
    return outcomes.onFail(response);
};

function retryableRequest(transporter, statelessHosts, request, requestOptions) {
    const stackTrace = []; // eslint-disable-line functional/prefer-readonly-type
    /**
     * First we prepare the payload that do not depend from hosts.
     */
    const data = serializeData(request, requestOptions);
    const headers = serializeHeaders(transporter, requestOptions);
    const method = request.method;
    // On `GET`, the data is proxied to query parameters.
    const dataQueryParameters = request.method !== MethodEnum.Get
        ? {}
        : {
            ...request.data,
            ...requestOptions.data,
        };
    const queryParameters = {
        'x-algolia-agent': transporter.userAgent.value,
        ...transporter.queryParameters,
        ...dataQueryParameters,
        ...requestOptions.queryParameters,
    };
    let timeoutsCount = 0; // eslint-disable-line functional/no-let
    const retry = (hosts, // eslint-disable-line functional/prefer-readonly-type
    getTimeout) => {
        /**
         * We iterate on each host, until there is no host left.
         */
        const host = hosts.pop(); // eslint-disable-line functional/immutable-data
        if (host === undefined) {
            throw createRetryError(stackTraceWithoutCredentials(stackTrace));
        }
        const payload = {
            data,
            headers,
            method,
            url: serializeUrl(host, request.path, queryParameters),
            connectTimeout: getTimeout(timeoutsCount, transporter.timeouts.connect),
            responseTimeout: getTimeout(timeoutsCount, requestOptions.timeout),
        };
        /**
         * The stackFrame is pushed to the stackTrace so we
         * can have information about onRetry and onFailure
         * decisions.
         */
        const pushToStackTrace = (response) => {
            const stackFrame = {
                request: payload,
                response,
                host,
                triesLeft: hosts.length,
            };
            // eslint-disable-next-line functional/immutable-data
            stackTrace.push(stackFrame);
            return stackFrame;
        };
        const decisions = {
            onSuccess: response => deserializeSuccess(response),
            onRetry(response) {
                const stackFrame = pushToStackTrace(response);
                /**
                 * If response is a timeout, we increaset the number of
                 * timeouts so we can increase the timeout later.
                 */
                if (response.isTimedOut) {
                    timeoutsCount++;
                }
                return Promise.all([
                    /**
                     * Failures are individually send the logger, allowing
                     * the end user to debug / store stack frames even
                     * when a retry error does not happen.
                     */
                    transporter.logger.info('Retryable failure', stackFrameWithoutCredentials(stackFrame)),
                    /**
                     * We also store the state of the host in failure cases. If the host, is
                     * down it will remain down for the next 2 minutes. In a timeout situation,
                     * this host will be added end of the list of hosts on the next request.
                     */
                    transporter.hostsCache.set(host, createStatefulHost(host, response.isTimedOut ? HostStatusEnum.Timeouted : HostStatusEnum.Down)),
                ]).then(() => retry(hosts, getTimeout));
            },
            onFail(response) {
                pushToStackTrace(response);
                throw deserializeFailure(response, stackTraceWithoutCredentials(stackTrace));
            },
        };
        return transporter.requester.send(payload).then(response => {
            return retryDecision(response, decisions);
        });
    };
    /**
     * Finally, for each retryable host perform request until we got a non
     * retryable response. Some notes here:
     *
     * 1. The reverse here is applied so we can apply a `pop` later on => more performant.
     * 2. We also get from the retryable options a timeout multiplier that is tailored
     * for the current context.
     */
    return createRetryableOptions(transporter.hostsCache, statelessHosts).then(options => {
        return retry([...options.statelessHosts].reverse(), options.getTimeout);
    });
}

function createTransporter(options) {
    const { hostsCache, logger, requester, requestsCache, responsesCache, timeouts, userAgent, hosts, queryParameters, headers, } = options;
    const transporter = {
        hostsCache,
        logger,
        requester,
        requestsCache,
        responsesCache,
        timeouts,
        userAgent,
        headers,
        queryParameters,
        hosts: hosts.map(host => createStatelessHost(host)),
        read(request, requestOptions) {
            /**
             * First, we compute the user request options. Now, keep in mind,
             * that using request options the user is able to modified the intire
             * payload of the request. Such as headers, query parameters, and others.
             */
            const mappedRequestOptions = createMappedRequestOptions(requestOptions, transporter.timeouts.read);
            const createRetryableRequest = () => {
                /**
                 * Then, we prepare a function factory that contains the construction of
                 * the retryable request. At this point, we may *not* perform the actual
                 * request. But we want to have the function factory ready.
                 */
                return retryableRequest(transporter, transporter.hosts.filter(host => (host.accept & CallEnum.Read) !== 0), request, mappedRequestOptions);
            };
            /**
             * Once we have the function factory ready, we need to determine of the
             * request is "cacheable" - should be cached. Note that, once again,
             * the user can force this option.
             */
            const cacheable = mappedRequestOptions.cacheable !== undefined
                ? mappedRequestOptions.cacheable
                : request.cacheable;
            /**
             * If is not "cacheable", we immediatly trigger the retryable request, no
             * need to check cache implementations.
             */
            if (cacheable !== true) {
                return createRetryableRequest();
            }
            /**
             * If the request is "cacheable", we need to first compute the key to ask
             * the cache implementations if this request is on progress or if the
             * response already exists on the cache.
             */
            const key = {
                request,
                mappedRequestOptions,
                transporter: {
                    queryParameters: transporter.queryParameters,
                    headers: transporter.headers,
                },
            };
            /**
             * With the computed key, we first ask the responses cache
             * implemention if this request was been resolved before.
             */
            return transporter.responsesCache.get(key, () => {
                /**
                 * If the request has never resolved before, we actually ask if there
                 * is a current request with the same key on progress.
                 */
                return transporter.requestsCache.get(key, () => {
                    return (transporter.requestsCache
                        /**
                         * Finally, if there is no request in progress with the same key,
                         * this `createRetryableRequest()` will actually trigger the
                         * retryable request.
                         */
                        .set(key, createRetryableRequest())
                        .then(response => Promise.all([transporter.requestsCache.delete(key), response]), err => Promise.all([transporter.requestsCache.delete(key), Promise.reject(err)]))
                        .then(([_, response]) => response));
                });
            }, {
                /**
                 * Of course, once we get this response back from the server, we
                 * tell response cache to actually store the received response
                 * to be used later.
                 */
                miss: response => transporter.responsesCache.set(key, response),
            });
        },
        write(request, requestOptions) {
            /**
             * On write requests, no cache mechanisms are applied, and we
             * proxy the request immediately to the requester.
             */
            return retryableRequest(transporter, transporter.hosts.filter(host => (host.accept & CallEnum.Write) !== 0), request, createMappedRequestOptions(requestOptions, transporter.timeouts.write));
        },
    };
    return transporter;
}

function createUserAgent(version) {
    const userAgent = {
        value: `Algolia for JavaScript (${version})`,
        add(options) {
            const addedUserAgent = `; ${options.segment}${options.version !== undefined ? ` (${options.version})` : ''}`;
            if (userAgent.value.indexOf(addedUserAgent) === -1) {
                // eslint-disable-next-line functional/immutable-data
                userAgent.value = `${userAgent.value}${addedUserAgent}`;
            }
            return userAgent;
        },
    };
    return userAgent;
}

function deserializeSuccess(response) {
    // eslint-disable-next-line functional/no-try-statement
    try {
        return JSON.parse(response.content);
    }
    catch (e) {
        throw createDeserializationError(e.message, response);
    }
}
function deserializeFailure({ content, status }, stackFrame) {
    // eslint-disable-next-line functional/no-let
    let message = content;
    // eslint-disable-next-line functional/no-try-statement
    try {
        message = JSON.parse(content).message;
    }
    catch (e) {
        // ..
    }
    return createApiError(message, status, stackFrame);
}

function serializeUrl(host, path, queryParameters) {
    const queryParametersAsString = serializeQueryParameters(queryParameters);
    // eslint-disable-next-line functional/no-let
    let url = `${host.protocol}://${host.url}/${path.charAt(0) === '/' ? path.substr(1) : path}`;
    if (queryParametersAsString.length) {
        url += `?${queryParametersAsString}`;
    }
    return url;
}
function serializeQueryParameters(parameters) {
    const isObjectOrArray = (value) => Object.prototype.toString.call(value) === '[object Object]' ||
        Object.prototype.toString.call(value) === '[object Array]';
    return Object.keys(parameters)
        .map(key => encode('%s=%s', key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key]))
        .join('&');
}
function serializeData(request, requestOptions) {
    if (request.method === MethodEnum.Get ||
        (request.data === undefined && requestOptions.data === undefined)) {
        return undefined;
    }
    const data = Array.isArray(request.data)
        ? request.data
        : { ...request.data, ...requestOptions.data };
    return JSON.stringify(data);
}
function serializeHeaders(transporter, requestOptions) {
    const headers = {
        ...transporter.headers,
        ...requestOptions.headers,
    };
    const serializedHeaders = {};
    Object.keys(headers).forEach(header => {
        const value = headers[header];
        // @ts-ignore
        // eslint-disable-next-line functional/immutable-data
        serializedHeaders[header.toLowerCase()] = value;
    });
    return serializedHeaders;
}

function stackTraceWithoutCredentials(stackTrace) {
    return stackTrace.map(stackFrame => stackFrameWithoutCredentials(stackFrame));
}
function stackFrameWithoutCredentials(stackFrame) {
    const modifiedHeaders = stackFrame.request.headers['x-algolia-api-key']
        ? { 'x-algolia-api-key': '*****' }
        : {};
    return {
        ...stackFrame,
        request: {
            ...stackFrame.request,
            headers: {
                ...stackFrame.request.headers,
                ...modifiedHeaders,
            },
        },
    };
}

function createApiError(message, status, transporterStackTrace) {
    return {
        name: 'ApiError',
        message,
        status,
        transporterStackTrace,
    };
}

function createDeserializationError(message, response) {
    return {
        name: 'DeserializationError',
        message,
        response,
    };
}

function createRetryError(transporterStackTrace) {
    return {
        name: 'RetryError',
        message: 'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
        transporterStackTrace,
    };
}

const createSearchClient = options => {
    const appId = options.appId;
    const auth = createAuth(options.authMode !== undefined ? options.authMode : AuthMode.WithinHeaders, appId, options.apiKey);
    const transporter = createTransporter({
        hosts: [
            { url: `${appId}-dsn.algolia.net`, accept: CallEnum.Read },
            { url: `${appId}.algolia.net`, accept: CallEnum.Write },
        ].concat(shuffle([
            { url: `${appId}-1.algolianet.com` },
            { url: `${appId}-2.algolianet.com` },
            { url: `${appId}-3.algolianet.com` },
        ])),
        ...options,
        headers: {
            ...auth.headers(),
            ...{ 'content-type': 'application/x-www-form-urlencoded' },
            ...options.headers,
        },
        queryParameters: {
            ...auth.queryParameters(),
            ...options.queryParameters,
        },
    });
    const base = {
        transporter,
        appId,
        addAlgoliaAgent(segment, version) {
            transporter.userAgent.add({ segment, version });
        },
        clearCache() {
            return Promise.all([
                transporter.requestsCache.clear(),
                transporter.responsesCache.clear(),
            ]).then(() => undefined);
        },
    };
    return addMethods(base, options.methods);
};

const customRequest = (base) => {
    return (request, requestOptions) => {
        if (request.method === MethodEnum.Get) {
            return base.transporter.read(request, requestOptions);
        }
        return base.transporter.write(request, requestOptions);
    };
};

const initIndex = (base) => {
    return (indexName, options = {}) => {
        const searchIndex = {
            transporter: base.transporter,
            appId: base.appId,
            indexName,
        };
        return addMethods(searchIndex, options.methods);
    };
};

const multipleQueries = (base) => {
    return (queries, requestOptions) => {
        const requests = queries.map(query => {
            return {
                ...query,
                params: serializeQueryParameters(query.params || {}),
            };
        });
        return base.transporter.read({
            method: MethodEnum.Post,
            path: '1/indexes/*/queries',
            data: {
                requests,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const multipleSearchForFacetValues = (base) => {
    return (queries, requestOptions) => {
        return Promise.all(queries.map(query => {
            const { facetName, facetQuery, ...params } = query.params;
            return initIndex(base)(query.indexName, {
                methods: { searchForFacetValues },
            }).searchForFacetValues(facetName, facetQuery, {
                ...requestOptions,
                ...params,
            });
        }));
    };
};

const findAnswers = (base) => {
    return (query, queryLanguages, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('1/answers/%s/prediction', base.indexName),
            data: {
                query,
                queryLanguages,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const search = (base) => {
    return (query, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/query', base.indexName),
            data: {
                query,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const searchForFacetValues = (base) => {
    return (facetName, facetQuery, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/facets/%s/query', base.indexName, facetName),
            data: {
                facetQuery,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const LogLevelEnum = {
    Debug: 1,
    Info: 2,
    Error: 3,
};

/* eslint no-console: 0 */
function createConsoleLogger(logLevel) {
    return {
        debug(message, args) {
            if (LogLevelEnum.Debug >= logLevel) {
                console.debug(message, args);
            }
            return Promise.resolve();
        },
        info(message, args) {
            if (LogLevelEnum.Info >= logLevel) {
                console.info(message, args);
            }
            return Promise.resolve();
        },
        error(message, args) {
            console.error(message, args);
            return Promise.resolve();
        },
    };
}

function createBrowserXhrRequester() {
    return {
        send(request) {
            return new Promise((resolve) => {
                const baseRequester = new XMLHttpRequest();
                baseRequester.open(request.method, request.url, true);
                Object.keys(request.headers).forEach(key => baseRequester.setRequestHeader(key, request.headers[key]));
                const createTimeout = (timeout, content) => {
                    return setTimeout(() => {
                        baseRequester.abort();
                        resolve({
                            status: 0,
                            content,
                            isTimedOut: true,
                        });
                    }, timeout * 1000);
                };
                const connectTimeout = createTimeout(request.connectTimeout, 'Connection timeout');
                // eslint-disable-next-line functional/no-let
                let responseTimeout;
                // eslint-disable-next-line functional/immutable-data
                baseRequester.onreadystatechange = () => {
                    if (baseRequester.readyState > baseRequester.OPENED && responseTimeout === undefined) {
                        clearTimeout(connectTimeout);
                        responseTimeout = createTimeout(request.responseTimeout, 'Socket timeout');
                    }
                };
                // eslint-disable-next-line functional/immutable-data
                baseRequester.onerror = () => {
                    // istanbul ignore next
                    if (baseRequester.status === 0) {
                        clearTimeout(connectTimeout);
                        clearTimeout(responseTimeout);
                        resolve({
                            content: baseRequester.responseText || 'Network request failed',
                            status: baseRequester.status,
                            isTimedOut: false,
                        });
                    }
                };
                //  eslint-disable-next-line functional/immutable-data
                baseRequester.onload = () => {
                    clearTimeout(connectTimeout);
                    clearTimeout(responseTimeout);
                    resolve({
                        content: baseRequester.responseText,
                        status: baseRequester.status,
                        isTimedOut: false,
                    });
                };
                baseRequester.send(request.data);
            });
        },
    };
}

function algoliasearch(appId, apiKey, options) {
    const commonOptions = {
        appId,
        apiKey,
        timeouts: {
            connect: 1,
            read: 2,
            write: 30,
        },
        requester: createBrowserXhrRequester(),
        logger: createConsoleLogger(LogLevelEnum.Error),
        responsesCache: createInMemoryCache(),
        requestsCache: createInMemoryCache({ serializable: false }),
        hostsCache: createFallbackableCache({
            caches: [
                createBrowserLocalStorageCache({ key: `${algoliasearch_lite_esm_browser_version}-${appId}` }),
                createInMemoryCache(),
            ],
        }),
        userAgent: createUserAgent(algoliasearch_lite_esm_browser_version).add({
            segment: 'Browser',
            version: 'lite',
        }),
        authMode: AuthMode.WithinQueryParameters,
    };
    return createSearchClient({
        ...commonOptions,
        ...options,
        methods: {
            search: multipleQueries,
            searchForFacetValues: multipleSearchForFacetValues,
            multipleQueries,
            multipleSearchForFacetValues,
            customRequest,
            initIndex: base => (indexName) => {
                return initIndex(base)(indexName, {
                    methods: { search, searchForFacetValues, findAnswers },
                });
            },
        },
    });
}
// eslint-disable-next-line functional/immutable-data
algoliasearch.version = algoliasearch_lite_esm_browser_version;

/* harmony default export */ const algoliasearch_lite_esm_browser = (algoliasearch);

;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/version.js
var version_version = '3.0.0';
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/useSearchClient.js



function useSearchClient(appId, apiKey, transformSearchClient) {
  var searchClient = react.useMemo(function () {
    var client = algoliasearch_lite_esm_browser(appId, apiKey);
    client.addAlgoliaAgent('docsearch', version_version); // Since DocSearch.js relies on DocSearch React with an alias to Preact,
    // we cannot add the `docsearch-react` user agent by default, otherwise
    // it would also be sent on a DocSearch.js integration.
    // We therefore only add the `docsearch-react` user agent if `docsearch.js`
    // is not present.

    if (/docsearch.js \(.*\)/.test(client.transporter.userAgent.value) === false) {
      client.addAlgoliaAgent('docsearch-react', version_version);
    }

    return transformSearchClient(client);
  }, [appId, apiKey, transformSearchClient]);
  return searchClient;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/useTouchEvents.js

function useTouchEvents(_ref) {
  var getEnvironmentProps = _ref.getEnvironmentProps,
      panelElement = _ref.panelElement,
      formElement = _ref.formElement,
      inputElement = _ref.inputElement;
  react.useEffect(function () {
    if (!(panelElement && formElement && inputElement)) {
      return undefined;
    }

    var _getEnvironmentProps = getEnvironmentProps({
      panelElement: panelElement,
      formElement: formElement,
      inputElement: inputElement
    }),
        onTouchStart = _getEnvironmentProps.onTouchStart,
        onTouchMove = _getEnvironmentProps.onTouchMove;

    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    return function () {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [getEnvironmentProps, panelElement, formElement, inputElement]);
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/useTrapFocus.js

function useTrapFocus(_ref) {
  var container = _ref.container;
  react.useEffect(function () {
    if (!container) {
      return undefined;
    }

    var focusableElements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), input:not([disabled])');
    var firstElement = focusableElements[0];
    var lastElement = focusableElements[focusableElements.length - 1];

    function trapFocus(event) {
      if (event.key !== 'Tab') {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    container.addEventListener('keydown', trapFocus);
    return function () {
      container.removeEventListener('keydown', trapFocus);
    };
  }, [container]);
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/utils/noop.js
function noop_noop() {}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/utils/identity.js
function identity(x) {
  return x;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/utils/groupBy.js
function groupBy(values, predicate) {
  return values.reduce(function (acc, item) {
    var key = predicate(item);

    if (!acc.hasOwnProperty(key)) {
      acc[key] = [];
    } // We limit each section to show 5 hits maximum.
    // This acts as a frontend alternative to `distinct`.


    if (acc[key].length < 5) {
      acc[key].push(item);
    }

    return acc;
  }, {});
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/dist/esm/DocSearchModal.js
var DocSearchModal_excluded = ["footer", "searchBox"];

function DocSearchModal_extends() { DocSearchModal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DocSearchModal_extends.apply(this, arguments); }

function DocSearchModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function DocSearchModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? DocSearchModal_ownKeys(Object(source), !0).forEach(function (key) { DocSearchModal_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : DocSearchModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function DocSearchModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DocSearchModal_slicedToArray(arr, i) { return DocSearchModal_arrayWithHoles(arr) || DocSearchModal_iterableToArrayLimit(arr, i) || DocSearchModal_unsupportedIterableToArray(arr, i) || DocSearchModal_nonIterableRest(); }

function DocSearchModal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function DocSearchModal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DocSearchModal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DocSearchModal_arrayLikeToArray(o, minLen); }

function DocSearchModal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function DocSearchModal_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function DocSearchModal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function DocSearchModal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DocSearchModal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DocSearchModal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













function DocSearchModal(_ref) {
  var appId = _ref.appId,
      apiKey = _ref.apiKey,
      indexName = _ref.indexName,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Search docs' : _ref$placeholder,
      searchParameters = _ref.searchParameters,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? noop_noop : _ref$onClose,
      _ref$transformItems = _ref.transformItems,
      transformItems = _ref$transformItems === void 0 ? identity : _ref$transformItems,
      _ref$hitComponent = _ref.hitComponent,
      hitComponent = _ref$hitComponent === void 0 ? Hit : _ref$hitComponent,
      _ref$resultsFooterCom = _ref.resultsFooterComponent,
      resultsFooterComponent = _ref$resultsFooterCom === void 0 ? function () {
    return null;
  } : _ref$resultsFooterCom,
      navigator = _ref.navigator,
      _ref$initialScrollY = _ref.initialScrollY,
      initialScrollY = _ref$initialScrollY === void 0 ? 0 : _ref$initialScrollY,
      _ref$transformSearchC = _ref.transformSearchClient,
      transformSearchClient = _ref$transformSearchC === void 0 ? identity : _ref$transformSearchC,
      _ref$disableUserPerso = _ref.disableUserPersonalization,
      disableUserPersonalization = _ref$disableUserPerso === void 0 ? false : _ref$disableUserPerso,
      _ref$initialQuery = _ref.initialQuery,
      initialQueryFromProp = _ref$initialQuery === void 0 ? '' : _ref$initialQuery,
      _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      getMissingResultsUrl = _ref.getMissingResultsUrl;

  var footerTranslations = translations.footer,
      searchBoxTranslations = translations.searchBox,
      screenStateTranslations = DocSearchModal_objectWithoutProperties(translations, DocSearchModal_excluded);

  var _React$useState = react.useState({
    query: '',
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    activeItemId: null,
    status: 'idle'
  }),
      _React$useState2 = DocSearchModal_slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var containerRef = react.useRef(null);
  var modalRef = react.useRef(null);
  var formElementRef = react.useRef(null);
  var dropdownRef = react.useRef(null);
  var inputRef = react.useRef(null);
  var snippetLength = react.useRef(10);
  var initialQueryFromSelection = react.useRef(typeof window !== 'undefined' ? window.getSelection().toString().slice(0, MAX_QUERY_SIZE) : '').current;
  var initialQuery = react.useRef(initialQueryFromProp || initialQueryFromSelection).current;
  var searchClient = useSearchClient(appId, apiKey, transformSearchClient);
  var favoriteSearches = react.useRef(createStoredSearches({
    key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(indexName),
    limit: 10
  })).current;
  var recentSearches = react.useRef(createStoredSearches({
    key: "__DOCSEARCH_RECENT_SEARCHES__".concat(indexName),
    // We display 7 recent searches and there's no favorites, but only
    // 4 when there are favorites.
    limit: favoriteSearches.getAll().length === 0 ? 7 : 4
  })).current;
  var saveRecentSearch = react.useCallback(function saveRecentSearch(item) {
    if (disableUserPersonalization) {
      return;
    } // We don't store `content` record, but their parent if available.


    var search = item.type === 'content' ? item.__docsearch_parent : item; // We save the recent search only if it's not favorited.

    if (search && favoriteSearches.getAll().findIndex(function (x) {
      return x.objectID === search.objectID;
    }) === -1) {
      recentSearches.add(search);
    }
  }, [favoriteSearches, recentSearches, disableUserPersonalization]);
  var autocomplete = react.useMemo(function () {
    return createAutocomplete({
      id: 'docsearch',
      defaultActiveItemId: 0,
      placeholder: placeholder,
      openOnFocus: true,
      initialState: {
        query: initialQuery,
        context: {
          searchSuggestions: []
        }
      },
      navigator: navigator,
      onStateChange: function onStateChange(props) {
        setState(props.state);
      },
      getSources: function getSources(_ref2) {
        var query = _ref2.query,
            sourcesState = _ref2.state,
            setContext = _ref2.setContext,
            setStatus = _ref2.setStatus;

        if (!query) {
          if (disableUserPersonalization) {
            return [];
          }

          return [{
            sourceId: 'recentSearches',
            onSelect: function onSelect(_ref3) {
              var item = _ref3.item,
                  event = _ref3.event;
              saveRecentSearch(item);

              if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
                onClose();
              }
            },
            getItemUrl: function getItemUrl(_ref4) {
              var item = _ref4.item;
              return item.url;
            },
            getItems: function getItems() {
              return recentSearches.getAll();
            }
          }, {
            sourceId: 'favoriteSearches',
            onSelect: function onSelect(_ref5) {
              var item = _ref5.item,
                  event = _ref5.event;
              saveRecentSearch(item);

              if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
                onClose();
              }
            },
            getItemUrl: function getItemUrl(_ref6) {
              var item = _ref6.item;
              return item.url;
            },
            getItems: function getItems() {
              return favoriteSearches.getAll();
            }
          }];
        }

        return searchClient.search([{
          query: query,
          indexName: indexName,
          params: DocSearchModal_objectSpread({
            attributesToRetrieve: ['hierarchy.lvl0', 'hierarchy.lvl1', 'hierarchy.lvl2', 'hierarchy.lvl3', 'hierarchy.lvl4', 'hierarchy.lvl5', 'hierarchy.lvl6', 'content', 'type', 'url'],
            attributesToSnippet: ["hierarchy.lvl1:".concat(snippetLength.current), "hierarchy.lvl2:".concat(snippetLength.current), "hierarchy.lvl3:".concat(snippetLength.current), "hierarchy.lvl4:".concat(snippetLength.current), "hierarchy.lvl5:".concat(snippetLength.current), "hierarchy.lvl6:".concat(snippetLength.current), "content:".concat(snippetLength.current)],
            snippetEllipsisText: '???',
            highlightPreTag: '<mark>',
            highlightPostTag: '</mark>',
            hitsPerPage: 20
          }, searchParameters)
        }]).catch(function (error) {
          // The Algolia `RetryError` happens when all the servers have
          // failed, meaning that there's no chance the response comes
          // back. This is the right time to display an error.
          // See https://github.com/algolia/algoliasearch-client-javascript/blob/2ffddf59bc765cd1b664ee0346b28f00229d6e12/packages/transporter/src/errors/createRetryError.ts#L5
          if (error.name === 'RetryError') {
            setStatus('error');
          }

          throw error;
        }).then(function (_ref7) {
          var results = _ref7.results;
          var _results$ = results[0],
              hits = _results$.hits,
              nbHits = _results$.nbHits;
          var sources = groupBy(hits, function (hit) {
            return removeHighlightTags(hit);
          }); // We store the `lvl0`s to display them as search suggestions
          // in the "no results" screen.

          if (sourcesState.context.searchSuggestions.length < Object.keys(sources).length) {
            setContext({
              searchSuggestions: Object.keys(sources)
            });
          }

          setContext({
            nbHits: nbHits
          });
          return Object.values(sources).map(function (items, index) {
            return {
              sourceId: "hits".concat(index),
              onSelect: function onSelect(_ref8) {
                var item = _ref8.item,
                    event = _ref8.event;
                saveRecentSearch(item);

                if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
                  onClose();
                }
              },
              getItemUrl: function getItemUrl(_ref9) {
                var item = _ref9.item;
                return item.url;
              },
              getItems: function getItems() {
                return Object.values(groupBy(items, function (item) {
                  return item.hierarchy.lvl1;
                })).map(transformItems).map(function (groupedHits) {
                  return groupedHits.map(function (item) {
                    return DocSearchModal_objectSpread(DocSearchModal_objectSpread({}, item), {}, {
                      __docsearch_parent: item.type !== 'lvl1' && groupedHits.find(function (siblingItem) {
                        return siblingItem.type === 'lvl1' && siblingItem.hierarchy.lvl1 === item.hierarchy.lvl1;
                      })
                    });
                  });
                }).flat();
              }
            };
          });
        });
      }
    });
  }, [indexName, searchParameters, searchClient, onClose, recentSearches, favoriteSearches, saveRecentSearch, initialQuery, placeholder, navigator, transformItems, disableUserPersonalization]);
  var getEnvironmentProps = autocomplete.getEnvironmentProps,
      getRootProps = autocomplete.getRootProps,
      refresh = autocomplete.refresh;
  useTouchEvents({
    getEnvironmentProps: getEnvironmentProps,
    panelElement: dropdownRef.current,
    formElement: formElementRef.current,
    inputElement: inputRef.current
  });
  useTrapFocus({
    container: containerRef.current
  });
  react.useEffect(function () {
    document.body.classList.add('DocSearch--active');
    return function () {
      var _window$scrollTo, _window;

      document.body.classList.remove('DocSearch--active'); // IE11 doesn't support `scrollTo` so we check that the method exists
      // first.

      (_window$scrollTo = (_window = window).scrollTo) === null || _window$scrollTo === void 0 ? void 0 : _window$scrollTo.call(_window, 0, initialScrollY);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  react.useEffect(function () {
    var isMobileMediaQuery = window.matchMedia('(max-width: 750px)');

    if (isMobileMediaQuery.matches) {
      snippetLength.current = 5;
    }
  }, []);
  react.useEffect(function () {
    if (dropdownRef.current) {
      dropdownRef.current.scrollTop = 0;
    }
  }, [state.query]); // We don't focus the input when there's an initial query (i.e. Selection
  // Search) because users rather want to see the results directly, without the
  // keyboard appearing.
  // We therefore need to refresh the autocomplete instance to load all the
  // results, which is usually triggered on focus.

  react.useEffect(function () {
    if (initialQuery.length > 0) {
      refresh();

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [initialQuery, refresh]); // We rely on a CSS property to set the modal height to the full viewport height
  // because all mobile browsers don't compute their height the same way.
  // See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

  react.useEffect(function () {
    function setFullViewportHeight() {
      if (modalRef.current) {
        var vh = window.innerHeight * 0.01;
        modalRef.current.style.setProperty('--docsearch-vh', "".concat(vh, "px"));
      }
    }

    setFullViewportHeight();
    window.addEventListener('resize', setFullViewportHeight);
    return function () {
      window.removeEventListener('resize', setFullViewportHeight);
    };
  }, []);
  return /*#__PURE__*/react.createElement("div", DocSearchModal_extends({
    ref: containerRef
  }, getRootProps({
    'aria-expanded': true
  }), {
    className: ['DocSearch', 'DocSearch-Container', state.status === 'stalled' && 'DocSearch-Container--Stalled', state.status === 'error' && 'DocSearch-Container--Errored'].filter(Boolean).join(' '),
    role: "button",
    tabIndex: 0,
    onMouseDown: function onMouseDown(event) {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Modal",
    ref: modalRef
  }, /*#__PURE__*/react.createElement("header", {
    className: "DocSearch-SearchBar",
    ref: formElementRef
  }, /*#__PURE__*/react.createElement(SearchBox, DocSearchModal_extends({}, autocomplete, {
    state: state,
    autoFocus: initialQuery.length === 0,
    inputRef: inputRef,
    isFromSelection: Boolean(initialQuery) && initialQuery === initialQueryFromSelection,
    translations: searchBoxTranslations,
    onClose: onClose
  }))), /*#__PURE__*/react.createElement("div", {
    className: "DocSearch-Dropdown",
    ref: dropdownRef
  }, /*#__PURE__*/react.createElement(ScreenState, DocSearchModal_extends({}, autocomplete, {
    indexName: indexName,
    state: state,
    hitComponent: hitComponent,
    resultsFooterComponent: resultsFooterComponent,
    disableUserPersonalization: disableUserPersonalization,
    recentSearches: recentSearches,
    favoriteSearches: favoriteSearches,
    inputRef: inputRef,
    translations: screenStateTranslations,
    getMissingResultsUrl: getMissingResultsUrl,
    onItemClick: function onItemClick(item) {
      saveRecentSearch(item);
      onClose();
    }
  }))), /*#__PURE__*/react.createElement("footer", {
    className: "DocSearch-Footer"
  }, /*#__PURE__*/react.createElement(Footer, {
    translations: footerTranslations
  }))));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docsearch-react-virtual-b6187b32cb/0/cache/@docsearch-react-npm-3.0.0-22a1ddadbf-965ce14e4d.zip/node_modules/@docsearch/react/modal.js



/***/ })

};
;