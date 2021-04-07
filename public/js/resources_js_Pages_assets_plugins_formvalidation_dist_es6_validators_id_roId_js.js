(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_roId_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/roId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/roId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/isValidDate.js");

function e(e) {
  if (!/^[0-9]{13}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var a = parseInt(e.charAt(0), 10);

  if (a === 0 || a === 7 || a === 8) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = parseInt(e.substr(1, 2), 10);
  var s = parseInt(e.substr(3, 2), 10);
  var n = parseInt(e.substr(5, 2), 10);
  var i = {
    1: 1900,
    2: 1900,
    3: 1800,
    4: 1800,
    5: 2e3,
    6: 2e3
  };

  if (n > 31 && s > 12) {
    return {
      meta: {},
      valid: false
    };
  }

  if (a !== 9) {
    r = i[a + ""] + r;

    if (!(0,_utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__.default)(r, s, n)) {
      return {
        meta: {},
        valid: false
      };
    }
  }

  var l = 0;
  var f = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
  var o = e.length;

  for (var _t = 0; _t < o - 1; _t++) {
    l += parseInt(e.charAt(_t), 10) * f[_t];
  }

  l = l % 11;

  if (l === 10) {
    l = 1;
  }

  return {
    meta: {},
    valid: "".concat(l) === e.charAt(o - 1)
  };
}

/***/ })

}]);