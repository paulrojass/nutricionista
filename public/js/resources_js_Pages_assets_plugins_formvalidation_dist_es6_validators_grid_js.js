(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_grid_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod37And36.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod37And36.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var n = t.length;
  var o = e.length;
  var l = Math.floor(o / 2);

  for (var r = 0; r < n; r++) {
    l = ((l || o) * 2 % (o + 1) + e.indexOf(t.charAt(r))) % o;
  }

  return l === 1;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/grid.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/grid.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _algorithms_mod37And36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithms/mod37And36 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod37And36.js");

function r() {
  return {
    validate: function validate(r) {
      if (r.value === "") {
        return {
          valid: true
        };
      }

      var t = r.value.toUpperCase();

      if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(t)) {
        return {
          valid: false
        };
      }

      t = t.replace(/\s/g, "").replace(/-/g, "");

      if ("GRID:" === t.substr(0, 5)) {
        t = t.substr(5);
      }

      return {
        valid: (0,_algorithms_mod37And36__WEBPACK_IMPORTED_MODULE_0__.default)(t)
      };
    }
  };
}

/***/ })

}]);