(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_choice_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
function r(r, e) {
  var t = Array.isArray(e) ? e : [e];
  var a = r;
  t.forEach(function (r) {
    a = a.replace("%s", r);
  });
  return a;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/choice.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/choice.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js");

function t() {
  return {
    validate: function validate(t) {
      var o = "select" === t.element.tagName.toLowerCase() ? t.element.querySelectorAll("option:checked").length : t.elements.filter(function (e) {
        return e.checked;
      }).length;
      var s = t.options.min ? "".concat(t.options.min) : "";
      var n = t.options.max ? "".concat(t.options.max) : "";
      var a = t.l10n ? t.options.message || t.l10n.choice["default"] : t.options.message;
      var l = !(s && o < parseInt(s, 10) || n && o > parseInt(n, 10));

      switch (true) {
        case !!s && !!n:
          a = (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(t.l10n ? t.l10n.choice.between : t.options.message, [s, n]);
          break;

        case !!s:
          a = (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(t.l10n ? t.l10n.choice.more : t.options.message, s);
          break;

        case !!n:
          a = (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(t.l10n ? t.l10n.choice.less : t.options.message, n);
          break;

        default:
          break;
      }

      return {
        message: a,
        valid: l
      };
    }
  };
}

/***/ })

}]);