(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_nlVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod97And10.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod97And10.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
function t(t) {
  return t.split("").map(function (t) {
    var n = t.charCodeAt(0);
    return n >= 65 && n <= 90 ? n - 55 : t;
  }).join("").split("").map(function (t) {
    return parseInt(t, 10);
  });
}

function n(n) {
  var e = t(n);
  var r = 0;
  var o = e.length;

  for (var _t = 0; _t < o - 1; ++_t) {
    r = (r + e[_t]) * 10 % 97;
  }

  r += e[o - 1];
  return r % 97 === 1;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/nlId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/nlId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
function e(e) {
  if (e.length < 8) {
    return {
      meta: {},
      valid: false
    };
  }

  var t = e;

  if (t.length === 8) {
    t = "0".concat(t);
  }

  if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t)) {
    return {
      meta: {},
      valid: false
    };
  }

  t = t.replace(/\./g, "");

  if (parseInt(t, 10) === 0) {
    return {
      meta: {},
      valid: false
    };
  }

  var a = 0;
  var l = t.length;

  for (var _e = 0; _e < l - 1; _e++) {
    a += (9 - _e) * parseInt(t.charAt(_e), 10);
  }

  a = a % 11;

  if (a === 10) {
    a = 0;
  }

  return {
    meta: {},
    valid: "".concat(a) === t.charAt(l - 1)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/nlVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/nlVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _algorithms_mod97And10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../algorithms/mod97And10 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod97And10.js");
/* harmony import */ var _id_nlId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../id/nlId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/nlId.js");


function e(e) {
  var i = e;

  if (/^NL[0-9]{9}B[0-9]{2}$/.test(i)) {
    i = i.substr(2);
  }

  if (!/^[0-9]{9}B[0-9]{2}$/.test(i)) {
    return {
      meta: {},
      valid: false
    };
  }

  var o = i.substr(0, 9);
  return {
    meta: {},
    valid: (0,_id_nlId__WEBPACK_IMPORTED_MODULE_1__.default)(o).valid || (0,_algorithms_mod97And10__WEBPACK_IMPORTED_MODULE_0__.default)("NL".concat(i))
  };
}

/***/ })

}]);