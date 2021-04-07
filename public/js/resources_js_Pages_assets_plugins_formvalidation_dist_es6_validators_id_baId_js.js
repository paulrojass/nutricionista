(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_baId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/baId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/baId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _jmbg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jmbg */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/jmbg.js");

function r(r) {
  return {
    meta: {},
    valid: (0,_jmbg__WEBPACK_IMPORTED_MODULE_0__.default)(r, "BA")
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/jmbg.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/jmbg.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t, r) {
  if (!/^\d{13}$/.test(t)) {
    return false;
  }

  var e = parseInt(t.substr(0, 2), 10);
  var s = parseInt(t.substr(2, 2), 10);
  var n = parseInt(t.substr(7, 2), 10);
  var a = parseInt(t.substr(12, 1), 10);

  if (e > 31 || s > 12) {
    return false;
  }

  var u = 0;

  for (var _r = 0; _r < 6; _r++) {
    u += (7 - _r) * (parseInt(t.charAt(_r), 10) + parseInt(t.charAt(_r + 6), 10));
  }

  u = 11 - u % 11;

  if (u === 10 || u === 11) {
    u = 0;
  }

  if (u !== a) {
    return false;
  }

  switch (r.toUpperCase()) {
    case "BA":
      return 10 <= n && n <= 19;

    case "MK":
      return 41 <= n && n <= 49;

    case "ME":
      return 20 <= n && n <= 29;

    case "RS":
      return 70 <= n && n <= 99;

    case "SI":
      return 50 <= n && n <= 59;

    default:
      return true;
  }
}

/***/ })

}]);