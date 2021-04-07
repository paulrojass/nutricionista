(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_czId_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/czId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/czId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/isValidDate.js");

function e(e) {
  if (!/^\d{9,10}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = 1900 + parseInt(e.substr(0, 2), 10);
  var s = parseInt(e.substr(2, 2), 10) % 50 % 20;
  var a = parseInt(e.substr(4, 2), 10);

  if (e.length === 9) {
    if (r >= 1980) {
      r -= 100;
    }

    if (r > 1953) {
      return {
        meta: {},
        valid: false
      };
    }
  } else if (r < 1954) {
    r += 100;
  }

  if (!(0,_utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__.default)(r, s, a)) {
    return {
      meta: {},
      valid: false
    };
  }

  if (e.length === 10) {
    var _t = parseInt(e.substr(0, 9), 10) % 11;

    if (r < 1985) {
      _t = _t % 10;
    }

    return {
      meta: {},
      valid: "".concat(_t) === e.substr(9, 1)
    };
  }

  return {
    meta: {},
    valid: true
  };
}

/***/ })

}]);