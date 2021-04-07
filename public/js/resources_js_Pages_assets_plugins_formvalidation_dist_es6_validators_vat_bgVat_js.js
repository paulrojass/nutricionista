(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_bgVat_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/bgVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/bgVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/isValidDate.js");

function r(r) {
  var e = r;

  if (/^BG[0-9]{9,10}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{9,10}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var s = 0;
  var n = 0;

  if (e.length === 9) {
    for (n = 0; n < 8; n++) {
      s += parseInt(e.charAt(n), 10) * (n + 1);
    }

    s = s % 11;

    if (s === 10) {
      s = 0;

      for (n = 0; n < 8; n++) {
        s += parseInt(e.charAt(n), 10) * (n + 3);
      }
    }

    s = s % 10;
    return {
      meta: {},
      valid: "".concat(s) === e.substr(8)
    };
  } else {
    var _r = function _r(r) {
      var e = parseInt(r.substr(0, 2), 10) + 1900;
      var s = parseInt(r.substr(2, 2), 10);
      var n = parseInt(r.substr(4, 2), 10);

      if (s > 40) {
        e += 100;
        s -= 40;
      } else if (s > 20) {
        e -= 100;
        s -= 20;
      }

      if (!(0,_utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__.default)(e, s, n)) {
        return false;
      }

      var a = [2, 4, 8, 5, 10, 9, 7, 3, 6];
      var l = 0;

      for (var _t = 0; _t < 9; _t++) {
        l += parseInt(r.charAt(_t), 10) * a[_t];
      }

      l = l % 11 % 10;
      return "".concat(l) === r.substr(9, 1);
    };

    var _s = function _s(t) {
      var r = [21, 19, 17, 13, 11, 9, 7, 3, 1];
      var e = 0;

      for (var _s2 = 0; _s2 < 9; _s2++) {
        e += parseInt(t.charAt(_s2), 10) * r[_s2];
      }

      e = e % 10;
      return "".concat(e) === t.substr(9, 1);
    };

    var _n = function _n(t) {
      var r = [4, 3, 2, 7, 6, 5, 4, 3, 2];
      var e = 0;

      for (var _s3 = 0; _s3 < 9; _s3++) {
        e += parseInt(t.charAt(_s3), 10) * r[_s3];
      }

      e = 11 - e % 11;

      if (e === 10) {
        return false;
      }

      if (e === 11) {
        e = 0;
      }

      return "".concat(e) === t.substr(9, 1);
    };

    return {
      meta: {},
      valid: _r(e) || _s(e) || _n(e)
    };
  }
}

/***/ })

}]);