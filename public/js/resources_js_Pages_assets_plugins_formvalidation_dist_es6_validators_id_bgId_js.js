(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_bgId_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/bgId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/bgId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/isValidDate.js");

function e(e) {
  if (!/^\d{10}$/.test(e) && !/^\d{6}\s\d{3}\s\d{1}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var s = e.replace(/\s/g, "");
  var r = parseInt(s.substr(0, 2), 10) + 1900;
  var a = parseInt(s.substr(2, 2), 10);
  var l = parseInt(s.substr(4, 2), 10);

  if (a > 40) {
    r += 100;
    a -= 40;
  } else if (a > 20) {
    r -= 100;
    a -= 20;
  }

  if (!(0,_utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__.default)(r, a, l)) {
    return {
      meta: {},
      valid: false
    };
  }

  var i = 0;
  var n = [2, 4, 8, 5, 10, 9, 7, 3, 6];

  for (var _t = 0; _t < 9; _t++) {
    i += parseInt(s.charAt(_t), 10) * n[_t];
  }

  i = i % 11 % 10;
  return {
    meta: {},
    valid: "".concat(i) === s.substr(9, 1)
  };
}

/***/ })

}]);