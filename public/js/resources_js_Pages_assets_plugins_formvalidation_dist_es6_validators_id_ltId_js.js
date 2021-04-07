(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_ltId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/isValidDate.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/isValidDate.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t, e, n, r) {
  if (isNaN(t) || isNaN(e) || isNaN(n)) {
    return false;
  }

  if (t < 1e3 || t > 9999 || e <= 0 || e > 12) {
    return false;
  }

  var s = [31, t % 400 === 0 || t % 100 !== 0 && t % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (n <= 0 || n > s[e - 1]) {
    return false;
  }

  if (r === true) {
    var _r = new Date();

    var _s = _r.getFullYear();

    var a = _r.getMonth();

    var u = _r.getDate();

    return t < _s || t === _s && e - 1 < a || t === _s && e - 1 === a && n < u;
  }

  return true;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/ltId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/ltId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/isValidDate.js");

function r(r) {
  if (!/^[0-9]{11}$/.test(r)) {
    return {
      meta: {},
      valid: false
    };
  }

  var e = parseInt(r.charAt(0), 10);
  var a = parseInt(r.substr(1, 2), 10);
  var s = parseInt(r.substr(3, 2), 10);
  var n = parseInt(r.substr(5, 2), 10);
  var i = e % 2 === 0 ? 17 + e / 2 : 17 + (e + 1) / 2;
  a = i * 100 + a;

  if (!(0,_utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__.default)(a, s, n, true)) {
    return {
      meta: {},
      valid: false
    };
  }

  var l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
  var f = 0;
  var u;

  for (u = 0; u < 10; u++) {
    f += parseInt(r.charAt(u), 10) * l[u];
  }

  f = f % 11;

  if (f !== 10) {
    return {
      meta: {},
      valid: "".concat(f) === r.charAt(10)
    };
  }

  f = 0;
  l = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];

  for (u = 0; u < 10; u++) {
    f += parseInt(r.charAt(u), 10) * l[u];
  }

  f = f % 11;

  if (f === 10) {
    f = 0;
  }

  return {
    meta: {},
    valid: "".concat(f) === r.charAt(10)
  };
}

/***/ })

}]);