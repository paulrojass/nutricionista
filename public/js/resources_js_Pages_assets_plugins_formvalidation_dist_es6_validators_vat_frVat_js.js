(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_frVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.length;
  var l = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
  var n = 0;
  var r = 0;

  while (e--) {
    r += l[n][parseInt(t.charAt(e), 10)];
    n = 1 - n;
  }

  return r % 10 === 0 && r > 0;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/frVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/frVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _algorithms_luhn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js");

function e(e) {
  var r = e;

  if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(r)) {
    r = r.substr(2);
  }

  if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(r)) {
    return {
      meta: {},
      valid: false
    };
  }

  if (!(0,_algorithms_luhn__WEBPACK_IMPORTED_MODULE_0__.default)(r.substr(2))) {
    return {
      meta: {},
      valid: false
    };
  }

  if (/^[0-9]{2}$/.test(r.substr(0, 2))) {
    return {
      meta: {},
      valid: r.substr(0, 2) === "".concat(parseInt(r.substr(2) + "12", 10) % 97)
    };
  } else {
    var _t = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";

    var _e;

    if (/^[0-9]$/.test(r.charAt(0))) {
      _e = _t.indexOf(r.charAt(0)) * 24 + _t.indexOf(r.charAt(1)) - 10;
    } else {
      _e = _t.indexOf(r.charAt(0)) * 34 + _t.indexOf(r.charAt(1)) - 100;
    }

    return {
      meta: {},
      valid: (parseInt(r.substr(2), 10) + 1 + Math.floor(_e / 11)) % 11 === _e % 11
    };
  }
}

/***/ })

}]);