"use strict";
exports.id = 2631;
exports.ids = [2631];
exports.modules = {

/***/ 2631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderReloadPopup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6687);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7502);
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


const POPUP_CONTAINER_ID = "pwa-popup-container";
const getContainer = () => document.getElementById(POPUP_CONTAINER_ID);
const createContainer = () => {
  const container = document.createElement("div");
  container.id = POPUP_CONTAINER_ID;
  document.body.appendChild(container);
  return container;
};
async function renderReloadPopup(props) {
  const container = getContainer() || createContainer();
  const { default: ReloadPopup } = await __webpack_require__.e(/* import() */ 130).then(__webpack_require__.bind(__webpack_require__, 130));
  (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReloadPopup, __spreadValues({}, props)), container);
}


/***/ })

};
;