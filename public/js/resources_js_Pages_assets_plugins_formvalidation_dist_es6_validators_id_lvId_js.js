(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_lvId_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/lvId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/lvId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/isValidDate.js");

function e(e) {
  if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = e.replace(/\D/g, "");
  var a = parseInt(r.substr(0, 2), 10);
  var s = parseInt(r.substr(2, 2), 10);
  var n = parseInt(r.substr(4, 2), 10);
  n = n + 1800 + parseInt(r.charAt(6), 10) * 100;

  if (!(0,_utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__.default)(n, s, a, true)) {
    return {
      meta: {},
      valid: false
    };
  }

  var l = 0;
  var i = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];

  for (var _t = 0; _t < 10; _t++) {
    l += parseInt(r.charAt(_t), 10) * i[_t];
  }

  l = (l + 1) % 11 % 10;
  return {
    meta: {},
    valid: "".concat(l) === r.charAt(10)
  };
}

/***/ })

}]);