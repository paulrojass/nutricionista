(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_krId_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/krId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/krId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/isValidDate.js");

function e(e) {
  var a = e.replace("-", "");

  if (!/^\d{13}$/.test(a)) {
    return {
      meta: {},
      valid: false
    };
  }

  var s = a.charAt(6);
  var r = parseInt(a.substr(0, 2), 10);
  var c = parseInt(a.substr(2, 2), 10);
  var n = parseInt(a.substr(4, 2), 10);

  switch (s) {
    case "1":
    case "2":
    case "5":
    case "6":
      r += 1900;
      break;

    case "3":
    case "4":
    case "7":
    case "8":
      r += 2e3;
      break;

    default:
      r += 1800;
      break;
  }

  if (!(0,_utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__.default)(r, c, n)) {
    return {
      meta: {},
      valid: false
    };
  }

  var l = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  var o = a.length;
  var i = 0;

  for (var _t = 0; _t < o - 1; _t++) {
    i += l[_t] * parseInt(a.charAt(_t), 10);
  }

  var u = (11 - i % 11) % 10;
  return {
    meta: {},
    valid: "".concat(u) === a.charAt(o - 1)
  };
}

/***/ })

}]);