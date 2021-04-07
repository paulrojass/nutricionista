(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_index_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod11And10.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod11And10.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.length;
  var n = 5;

  for (var r = 0; r < e; r++) {
    n = ((n || 10) * 2 % 11 + parseInt(t.charAt(r), 10)) % 10;
  }

  return n === 1;
}

/***/ }),

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
function r(r, e) {
  var t = Array.isArray(e) ? e : [e];
  var a = r;
  t.forEach(function (r) {
    a = a.replace("%s", r);
  });
  return a;
}

/***/ }),

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/arVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/arVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.replace("-", "");

  if (/^AR[0-9]{11}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{11}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  var a = 0;

  for (var _t = 0; _t < 10; _t++) {
    a += parseInt(e.charAt(_t), 10) * r[_t];
  }

  a = 11 - a % 11;

  if (a === 11) {
    a = 0;
  }

  return {
    meta: {},
    valid: "".concat(a) === e.substr(10)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/atVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/atVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^ATU[0-9]{8}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^U[0-9]{8}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  e = e.substr(1);
  var r = [1, 2, 1, 2, 1, 2, 1];
  var s = 0;
  var a = 0;

  for (var _t = 0; _t < 7; _t++) {
    a = parseInt(e.charAt(_t), 10) * r[_t];

    if (a > 9) {
      a = Math.floor(a / 10) + a % 10;
    }

    s += a;
  }

  s = 10 - (s + 4) % 10;

  if (s === 10) {
    s = 0;
  }

  return {
    meta: {},
    valid: "".concat(s) === e.substr(7, 1)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/beVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/beVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^BE[0]?[0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0]?[0-9]{9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  if (e.length === 9) {
    e = "0".concat(e);
  }

  if (e.substr(1, 1) === "0") {
    return {
      meta: {},
      valid: false
    };
  }

  var s = parseInt(e.substr(0, 8), 10) + parseInt(e.substr(8, 2), 10);
  return {
    meta: {},
    valid: s % 97 === 0
  };
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

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/brVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/brVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  if (t === "") {
    return {
      meta: {},
      valid: true
    };
  }

  var e = t.replace(/[^\d]+/g, "");

  if (e === "" || e.length !== 14) {
    return {
      meta: {},
      valid: false
    };
  }

  if (e === "00000000000000" || e === "11111111111111" || e === "22222222222222" || e === "33333333333333" || e === "44444444444444" || e === "55555555555555" || e === "66666666666666" || e === "77777777777777" || e === "88888888888888" || e === "99999999999999") {
    return {
      meta: {},
      valid: false
    };
  }

  var r = e.length - 2;
  var a = e.substring(0, r);
  var l = e.substring(r);
  var n = 0;
  var i = r - 7;
  var s;

  for (s = r; s >= 1; s--) {
    n += parseInt(a.charAt(r - s), 10) * i--;

    if (i < 2) {
      i = 9;
    }
  }

  var f = n % 11 < 2 ? 0 : 11 - n % 11;

  if (f !== parseInt(l.charAt(0), 10)) {
    return {
      meta: {},
      valid: false
    };
  }

  r = r + 1;
  a = e.substring(0, r);
  n = 0;
  i = r - 7;

  for (s = r; s >= 1; s--) {
    n += parseInt(a.charAt(r - s), 10) * i--;

    if (i < 2) {
      i = 9;
    }
  }

  f = n % 11 < 2 ? 0 : 11 - n % 11;
  return {
    meta: {},
    valid: f === parseInt(l.charAt(1), 10)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/chVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/chVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  e = e.substr(1);
  var r = [5, 4, 3, 2, 7, 6, 5, 4];
  var s = 0;

  for (var _t = 0; _t < 8; _t++) {
    s += parseInt(e.charAt(_t), 10) * r[_t];
  }

  s = 11 - s % 11;

  if (s === 10) {
    return {
      meta: {},
      valid: false
    };
  }

  if (s === 11) {
    s = 0;
  }

  return {
    meta: {},
    valid: "".concat(s) === e.substr(8, 1)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/cyVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/cyVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-5|9][0-9]{7}[A-Z]$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  if (e.substr(0, 2) === "12") {
    return {
      meta: {},
      valid: false
    };
  }

  var r = 0;
  var s = {
    0: 1,
    1: 0,
    2: 5,
    3: 7,
    4: 9,
    5: 13,
    6: 15,
    7: 17,
    8: 19,
    9: 21
  };

  for (var _t = 0; _t < 8; _t++) {
    var a = parseInt(e.charAt(_t), 10);

    if (_t % 2 === 0) {
      a = s["".concat(a)];
    }

    r += a;
  }

  return {
    meta: {},
    valid: "".concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ"[r % 26]) === e.substr(8, 1)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/czVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/czVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/isValidDate.js");

function e(e) {
  var r = e;

  if (/^CZ[0-9]{8,10}$/.test(r)) {
    r = r.substr(2);
  }

  if (!/^[0-9]{8,10}$/.test(r)) {
    return {
      meta: {},
      valid: false
    };
  }

  var a = 0;
  var s = 0;

  if (r.length === 8) {
    if ("".concat(r.charAt(0)) === "9") {
      return {
        meta: {},
        valid: false
      };
    }

    a = 0;

    for (s = 0; s < 7; s++) {
      a += parseInt(r.charAt(s), 10) * (8 - s);
    }

    a = 11 - a % 11;

    if (a === 10) {
      a = 0;
    }

    if (a === 11) {
      a = 1;
    }

    return {
      meta: {},
      valid: "".concat(a) === r.substr(7, 1)
    };
  } else if (r.length === 9 && "".concat(r.charAt(0)) === "6") {
    a = 0;

    for (s = 0; s < 7; s++) {
      a += parseInt(r.charAt(s + 1), 10) * (8 - s);
    }

    a = 11 - a % 11;

    if (a === 10) {
      a = 0;
    }

    if (a === 11) {
      a = 1;
    }

    a = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][a - 1];
    return {
      meta: {},
      valid: "".concat(a) === r.substr(8, 1)
    };
  } else if (r.length === 9 || r.length === 10) {
    var _e = 1900 + parseInt(r.substr(0, 2), 10);

    var _a = parseInt(r.substr(2, 2), 10) % 50 % 20;

    var _s = parseInt(r.substr(4, 2), 10);

    if (r.length === 9) {
      if (_e >= 1980) {
        _e -= 100;
      }

      if (_e > 1953) {
        return {
          meta: {},
          valid: false
        };
      }
    } else if (_e < 1954) {
      _e += 100;
    }

    if (!(0,_utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__.default)(_e, _a, _s)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (r.length === 10) {
      var _t = parseInt(r.substr(0, 9), 10) % 11;

      if (_e < 1985) {
        _t = _t % 10;
      }

      return {
        meta: {},
        valid: "".concat(_t) === r.substr(9, 1)
      };
    }

    return {
      meta: {},
      valid: true
    };
  }

  return {
    meta: {},
    valid: false
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/deVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/deVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _algorithms_mod11And10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../algorithms/mod11And10 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod11And10.js");

function e(e) {
  var r = e;

  if (/^DE[0-9]{9}$/.test(r)) {
    r = r.substr(2);
  }

  if (!/^[0-9]{9}$/.test(r)) {
    return {
      meta: {},
      valid: false
    };
  }

  return {
    meta: {},
    valid: (0,_algorithms_mod11And10__WEBPACK_IMPORTED_MODULE_0__.default)(r)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/dkVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/dkVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^DK[0-9]{8}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{8}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = 0;
  var a = [2, 7, 6, 5, 4, 3, 2, 1];

  for (var _t = 0; _t < 8; _t++) {
    r += parseInt(e.charAt(_t), 10) * a[_t];
  }

  return {
    meta: {},
    valid: r % 11 === 0
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/eeVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/eeVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^EE[0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = 0;
  var a = [3, 7, 1, 3, 7, 1, 3, 7, 1];

  for (var _t = 0; _t < 9; _t++) {
    r += parseInt(e.charAt(_t), 10) * a[_t];
  }

  return {
    meta: {},
    valid: r % 10 === 0
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/esVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/esVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var s = function s(t) {
    var e = parseInt(t.substr(0, 8), 10);
    return "".concat("TRWAGMYFPDXBNJZSQVHLCKE"[e % 23]) === t.substr(8, 1);
  };

  var r = function r(t) {
    var e = ["XYZ".indexOf(t.charAt(0)), t.substr(1)].join("");
    var s = "TRWAGMYFPDXBNJZSQVHLCKE"[parseInt(e, 10) % 23];
    return "".concat(s) === t.substr(8, 1);
  };

  var n = function n(t) {
    var e = t.charAt(0);
    var s;

    if ("KLM".indexOf(e) !== -1) {
      s = parseInt(t.substr(1, 8), 10);
      s = "TRWAGMYFPDXBNJZSQVHLCKE"[s % 23];
      return "".concat(s) === t.substr(8, 1);
    } else if ("ABCDEFGHJNPQRSUVW".indexOf(e) !== -1) {
      var _e = [2, 1, 2, 1, 2, 1, 2];
      var _s = 0;
      var _r = 0;

      for (var _n = 0; _n < 7; _n++) {
        _r = parseInt(t.charAt(_n + 1), 10) * _e[_n];

        if (_r > 9) {
          _r = Math.floor(_r / 10) + _r % 10;
        }

        _s += _r;
      }

      _s = 10 - _s % 10;

      if (_s === 10) {
        _s = 0;
      }

      return "".concat(_s) === t.substr(8, 1) || "JABCDEFGHI"[_s] === t.substr(8, 1);
    }

    return false;
  };

  var a = e.charAt(0);

  if (/^[0-9]$/.test(a)) {
    return {
      meta: {
        type: "DNI"
      },
      valid: s(e)
    };
  } else if (/^[XYZ]$/.test(a)) {
    return {
      meta: {
        type: "NIE"
      },
      valid: r(e)
    };
  } else {
    return {
      meta: {
        type: "CIF"
      },
      valid: n(e)
    };
  }
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/fiVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/fiVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^FI[0-9]{8}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{8}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = [7, 9, 10, 5, 8, 4, 2, 1];
  var a = 0;

  for (var _t = 0; _t < 8; _t++) {
    a += parseInt(e.charAt(_t), 10) * r[_t];
  }

  return {
    meta: {},
    valid: a % 11 === 0
  };
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

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/gbVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/gbVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var s = t;

  if (/^GB[0-9]{9}$/.test(s) || /^GB[0-9]{12}$/.test(s) || /^GBGD[0-9]{3}$/.test(s) || /^GBHA[0-9]{3}$/.test(s) || /^GB(GD|HA)8888[0-9]{5}$/.test(s)) {
    s = s.substr(2);
  }

  if (!/^[0-9]{9}$/.test(s) && !/^[0-9]{12}$/.test(s) && !/^GD[0-9]{3}$/.test(s) && !/^HA[0-9]{3}$/.test(s) && !/^(GD|HA)8888[0-9]{5}$/.test(s)) {
    return {
      meta: {},
      valid: false
    };
  }

  var e = s.length;

  if (e === 5) {
    var _t = s.substr(0, 2);

    var _e = parseInt(s.substr(2), 10);

    return {
      meta: {},
      valid: "GD" === _t && _e < 500 || "HA" === _t && _e >= 500
    };
  } else if (e === 11 && ("GD8888" === s.substr(0, 6) || "HA8888" === s.substr(0, 6))) {
    if ("GD" === s.substr(0, 2) && parseInt(s.substr(6, 3), 10) >= 500 || "HA" === s.substr(0, 2) && parseInt(s.substr(6, 3), 10) < 500) {
      return {
        meta: {},
        valid: false
      };
    }

    return {
      meta: {},
      valid: parseInt(s.substr(6, 3), 10) % 97 === parseInt(s.substr(9, 2), 10)
    };
  } else if (e === 9 || e === 12) {
    var _t2 = [8, 7, 6, 5, 4, 3, 2, 10, 1];
    var _e2 = 0;

    for (var _r = 0; _r < 9; _r++) {
      _e2 += parseInt(s.charAt(_r), 10) * _t2[_r];
    }

    _e2 = _e2 % 97;
    var r = parseInt(s.substr(0, 3), 10) >= 100 ? _e2 === 0 || _e2 === 42 || _e2 === 55 : _e2 === 0;
    return {
      meta: {},
      valid: r
    };
  }

  return {
    meta: {},
    valid: true
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/grVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/grVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^(GR|EL)[0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  if (e.length === 8) {
    e = "0".concat(e);
  }

  var r = [256, 128, 64, 32, 16, 8, 4, 2];
  var s = 0;

  for (var _t = 0; _t < 8; _t++) {
    s += parseInt(e.charAt(_t), 10) * r[_t];
  }

  s = s % 11 % 10;
  return {
    meta: {},
    valid: "".concat(s) === e.substr(8, 1)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/hrVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/hrVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _algorithms_mod11And10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../algorithms/mod11And10 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod11And10.js");

function e(e) {
  var r = e;

  if (/^HR[0-9]{11}$/.test(r)) {
    r = r.substr(2);
  }

  if (!/^[0-9]{11}$/.test(r)) {
    return {
      meta: {},
      valid: false
    };
  }

  return {
    meta: {},
    valid: (0,_algorithms_mod11And10__WEBPACK_IMPORTED_MODULE_0__.default)(r)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/huVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/huVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^HU[0-9]{8}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{8}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = [9, 7, 3, 1, 9, 7, 3, 1];
  var a = 0;

  for (var _t = 0; _t < 8; _t++) {
    a += parseInt(e.charAt(_t), 10) * r[_t];
  }

  return {
    meta: {},
    valid: a % 10 === 0
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ieVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ieVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^IE[0-9][0-9A-Z\*\+][0-9]{5}[A-Z]{1,2}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9][0-9A-Z\*\+][0-9]{5}[A-Z]{1,2}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = function r(t) {
    var e = t;

    while (e.length < 7) {
      e = "0".concat(e);
    }

    var r = "WABCDEFGHIJKLMNOPQRSTUV";
    var s = 0;

    for (var _t = 0; _t < 7; _t++) {
      s += parseInt(e.charAt(_t), 10) * (8 - _t);
    }

    s += 9 * r.indexOf(e.substr(7));
    return r[s % 23];
  };

  if (/^[0-9]+$/.test(e.substr(0, 7))) {
    return {
      meta: {},
      valid: e.charAt(7) === r("".concat(e.substr(0, 7)).concat(e.substr(8)))
    };
  } else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(e.charAt(1)) !== -1) {
    return {
      meta: {},
      valid: e.charAt(7) === r("".concat(e.substr(2, 5)).concat(e.substr(0, 1)))
    };
  }

  return {
    meta: {},
    valid: true
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/index.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js");
/* harmony import */ var _arVat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/arVat.js");
/* harmony import */ var _atVat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/atVat.js");
/* harmony import */ var _beVat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/beVat.js");
/* harmony import */ var _bgVat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bgVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/bgVat.js");
/* harmony import */ var _brVat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/brVat.js");
/* harmony import */ var _chVat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/chVat.js");
/* harmony import */ var _cyVat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cyVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/cyVat.js");
/* harmony import */ var _czVat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./czVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/czVat.js");
/* harmony import */ var _deVat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/deVat.js");
/* harmony import */ var _dkVat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dkVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/dkVat.js");
/* harmony import */ var _eeVat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./eeVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/eeVat.js");
/* harmony import */ var _esVat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./esVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/esVat.js");
/* harmony import */ var _fiVat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fiVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/fiVat.js");
/* harmony import */ var _frVat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./frVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/frVat.js");
/* harmony import */ var _gbVat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gbVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/gbVat.js");
/* harmony import */ var _grVat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./grVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/grVat.js");
/* harmony import */ var _hrVat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hrVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/hrVat.js");
/* harmony import */ var _huVat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./huVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/huVat.js");
/* harmony import */ var _ieVat__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ieVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ieVat.js");
/* harmony import */ var _isVat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./isVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/isVat.js");
/* harmony import */ var _itVat__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./itVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/itVat.js");
/* harmony import */ var _ltVat__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ltVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ltVat.js");
/* harmony import */ var _luVat__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./luVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/luVat.js");
/* harmony import */ var _lvVat__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lvVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/lvVat.js");
/* harmony import */ var _mtVat__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mtVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/mtVat.js");
/* harmony import */ var _nlVat__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./nlVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/nlVat.js");
/* harmony import */ var _noVat__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./noVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/noVat.js");
/* harmony import */ var _plVat__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./plVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/plVat.js");
/* harmony import */ var _ptVat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ptVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ptVat.js");
/* harmony import */ var _roVat__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./roVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/roVat.js");
/* harmony import */ var _rsVat__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rsVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/rsVat.js");
/* harmony import */ var _ruVat__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ruVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ruVat.js");
/* harmony import */ var _seVat__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./seVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/seVat.js");
/* harmony import */ var _siVat__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./siVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/siVat.js");
/* harmony import */ var _skVat__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./skVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/skVat.js");
/* harmony import */ var _veVat__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./veVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/veVat.js");
/* harmony import */ var _zaVat__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./zaVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/zaVat.js");






































function x() {
  var x = ["AR", "AT", "BE", "BG", "BR", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "RS", "SE", "SK", "SI", "VE", "ZA"];
  return {
    validate: function validate(D) {
      var F = D.value;

      if (F === "") {
        return {
          valid: true
        };
      }

      var K = Object.assign({}, {
        message: ""
      }, D.options);
      var N = F.substr(0, 2);

      if ("function" === typeof K.country) {
        N = K.country.call(this);
      } else {
        N = K.country;
      }

      if (x.indexOf(N) === -1) {
        return {
          valid: true
        };
      }

      var P = {
        meta: {},
        valid: true
      };

      switch (N.toLowerCase()) {
        case "ar":
          P = (0,_arVat__WEBPACK_IMPORTED_MODULE_1__.default)(F);
          break;

        case "at":
          P = (0,_atVat__WEBPACK_IMPORTED_MODULE_2__.default)(F);
          break;

        case "be":
          P = (0,_beVat__WEBPACK_IMPORTED_MODULE_3__.default)(F);
          break;

        case "bg":
          P = (0,_bgVat__WEBPACK_IMPORTED_MODULE_4__.default)(F);
          break;

        case "br":
          P = (0,_brVat__WEBPACK_IMPORTED_MODULE_5__.default)(F);
          break;

        case "ch":
          P = (0,_chVat__WEBPACK_IMPORTED_MODULE_6__.default)(F);
          break;

        case "cy":
          P = (0,_cyVat__WEBPACK_IMPORTED_MODULE_7__.default)(F);
          break;

        case "cz":
          P = (0,_czVat__WEBPACK_IMPORTED_MODULE_8__.default)(F);
          break;

        case "de":
          P = (0,_deVat__WEBPACK_IMPORTED_MODULE_9__.default)(F);
          break;

        case "dk":
          P = (0,_dkVat__WEBPACK_IMPORTED_MODULE_10__.default)(F);
          break;

        case "ee":
          P = (0,_eeVat__WEBPACK_IMPORTED_MODULE_11__.default)(F);
          break;

        case "el":
          P = (0,_grVat__WEBPACK_IMPORTED_MODULE_16__.default)(F);
          break;

        case "es":
          P = (0,_esVat__WEBPACK_IMPORTED_MODULE_12__.default)(F);
          break;

        case "fi":
          P = (0,_fiVat__WEBPACK_IMPORTED_MODULE_13__.default)(F);
          break;

        case "fr":
          P = (0,_frVat__WEBPACK_IMPORTED_MODULE_14__.default)(F);
          break;

        case "gb":
          P = (0,_gbVat__WEBPACK_IMPORTED_MODULE_15__.default)(F);
          break;

        case "gr":
          P = (0,_grVat__WEBPACK_IMPORTED_MODULE_16__.default)(F);
          break;

        case "hr":
          P = (0,_hrVat__WEBPACK_IMPORTED_MODULE_17__.default)(F);
          break;

        case "hu":
          P = (0,_huVat__WEBPACK_IMPORTED_MODULE_18__.default)(F);
          break;

        case "ie":
          P = (0,_ieVat__WEBPACK_IMPORTED_MODULE_19__.default)(F);
          break;

        case "is":
          P = (0,_isVat__WEBPACK_IMPORTED_MODULE_20__.default)(F);
          break;

        case "it":
          P = (0,_itVat__WEBPACK_IMPORTED_MODULE_21__.default)(F);
          break;

        case "lt":
          P = (0,_ltVat__WEBPACK_IMPORTED_MODULE_22__.default)(F);
          break;

        case "lu":
          P = (0,_luVat__WEBPACK_IMPORTED_MODULE_23__.default)(F);
          break;

        case "lv":
          P = (0,_lvVat__WEBPACK_IMPORTED_MODULE_24__.default)(F);
          break;

        case "mt":
          P = (0,_mtVat__WEBPACK_IMPORTED_MODULE_25__.default)(F);
          break;

        case "nl":
          P = (0,_nlVat__WEBPACK_IMPORTED_MODULE_26__.default)(F);
          break;

        case "no":
          P = (0,_noVat__WEBPACK_IMPORTED_MODULE_27__.default)(F);
          break;

        case "pl":
          P = (0,_plVat__WEBPACK_IMPORTED_MODULE_28__.default)(F);
          break;

        case "pt":
          P = (0,_ptVat__WEBPACK_IMPORTED_MODULE_29__.default)(F);
          break;

        case "ro":
          P = (0,_roVat__WEBPACK_IMPORTED_MODULE_30__.default)(F);
          break;

        case "rs":
          P = (0,_rsVat__WEBPACK_IMPORTED_MODULE_31__.default)(F);
          break;

        case "ru":
          P = (0,_ruVat__WEBPACK_IMPORTED_MODULE_32__.default)(F);
          break;

        case "se":
          P = (0,_seVat__WEBPACK_IMPORTED_MODULE_33__.default)(F);
          break;

        case "si":
          P = (0,_siVat__WEBPACK_IMPORTED_MODULE_34__.default)(F);
          break;

        case "sk":
          P = (0,_skVat__WEBPACK_IMPORTED_MODULE_35__.default)(F);
          break;

        case "ve":
          P = (0,_veVat__WEBPACK_IMPORTED_MODULE_36__.default)(F);
          break;

        case "za":
          P = (0,_zaVat__WEBPACK_IMPORTED_MODULE_37__.default)(F);
          break;

        default:
          break;
      }

      var Z = (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(D.l10n ? K.message || D.l10n.vat.country : K.message, D.l10n ? D.l10n.vat.countries[N.toUpperCase()] : N.toUpperCase());
      return Object.assign({}, {
        message: Z
      }, P);
    }
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/isVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/isVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^IS[0-9]{5,6}$/.test(e)) {
    e = e.substr(2);
  }

  return {
    meta: {},
    valid: /^[0-9]{5,6}$/.test(e)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/itVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/itVat.js ***!
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

  if (/^IT[0-9]{11}$/.test(r)) {
    r = r.substr(2);
  }

  if (!/^[0-9]{11}$/.test(r)) {
    return {
      meta: {},
      valid: false
    };
  }

  if (parseInt(r.substr(0, 7), 10) === 0) {
    return {
      meta: {},
      valid: false
    };
  }

  var a = parseInt(r.substr(7, 3), 10);

  if (a < 1 || a > 201 && a !== 999 && a !== 888) {
    return {
      meta: {},
      valid: false
    };
  }

  return {
    meta: {},
    valid: (0,_algorithms_luhn__WEBPACK_IMPORTED_MODULE_0__.default)(r)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ltVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ltVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = e.length;
  var a = 0;
  var l;

  for (l = 0; l < r - 1; l++) {
    a += parseInt(e.charAt(l), 10) * (1 + l % 9);
  }

  var f = a % 11;

  if (f === 10) {
    a = 0;

    for (l = 0; l < r - 1; l++) {
      a += parseInt(e.charAt(l), 10) * (1 + (l + 2) % 9);
    }
  }

  f = f % 11 % 10;
  return {
    meta: {},
    valid: "".concat(f) === e.charAt(r - 1)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/luVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/luVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^LU[0-9]{8}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{8}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  return {
    meta: {},
    valid: "".concat(parseInt(e.substr(0, 6), 10) % 89) === e.substr(6, 2)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/lvVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/lvVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/isValidDate.js");

function e(e) {
  var r = e;

  if (/^LV[0-9]{11}$/.test(r)) {
    r = r.substr(2);
  }

  if (!/^[0-9]{11}$/.test(r)) {
    return {
      meta: {},
      valid: false
    };
  }

  var s = parseInt(r.charAt(0), 10);
  var a = r.length;
  var n = 0;
  var l = [];
  var i;

  if (s > 3) {
    n = 0;
    l = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];

    for (i = 0; i < a; i++) {
      n += parseInt(r.charAt(i), 10) * l[i];
    }

    n = n % 11;
    return {
      meta: {},
      valid: n === 3
    };
  } else {
    var _e = parseInt(r.substr(0, 2), 10);

    var _s = parseInt(r.substr(2, 2), 10);

    var f = parseInt(r.substr(4, 2), 10);
    f = f + 1800 + parseInt(r.charAt(6), 10) * 100;

    if (!(0,_utils_isValidDate__WEBPACK_IMPORTED_MODULE_0__.default)(f, _s, _e)) {
      return {
        meta: {},
        valid: false
      };
    }

    n = 0;
    l = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];

    for (i = 0; i < a - 1; i++) {
      n += parseInt(r.charAt(i), 10) * l[i];
    }

    n = (n + 1) % 11 % 10;
    return {
      meta: {},
      valid: "".concat(n) === r.charAt(a - 1)
    };
  }
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/mtVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/mtVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^MT[0-9]{8}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{8}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = [3, 4, 6, 7, 8, 9, 10, 1];
  var a = 0;

  for (var _t = 0; _t < 8; _t++) {
    a += parseInt(e.charAt(_t), 10) * r[_t];
  }

  return {
    meta: {},
    valid: a % 37 === 0
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

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/noVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/noVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^NO[0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = [3, 2, 7, 6, 5, 4, 3, 2];
  var s = 0;

  for (var _t = 0; _t < 8; _t++) {
    s += parseInt(e.charAt(_t), 10) * r[_t];
  }

  s = 11 - s % 11;

  if (s === 11) {
    s = 0;
  }

  return {
    meta: {},
    valid: "".concat(s) === e.substr(8, 1)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/plVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/plVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^PL[0-9]{10}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{10}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];
  var a = 0;

  for (var _t = 0; _t < 10; _t++) {
    a += parseInt(e.charAt(_t), 10) * r[_t];
  }

  return {
    meta: {},
    valid: a % 11 === 0
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ptVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ptVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^PT[0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = [9, 8, 7, 6, 5, 4, 3, 2];
  var s = 0;

  for (var _t = 0; _t < 8; _t++) {
    s += parseInt(e.charAt(_t), 10) * r[_t];
  }

  s = 11 - s % 11;

  if (s > 9) {
    s = 0;
  }

  return {
    meta: {},
    valid: "".concat(s) === e.substr(8, 1)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/roVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/roVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^RO[1-9][0-9]{1,9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[1-9][0-9]{1,9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var s = e.length;
  var r = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - s);
  var l = 0;

  for (var _t = 0; _t < s - 1; _t++) {
    l += parseInt(e.charAt(_t), 10) * r[_t];
  }

  l = 10 * l % 11 % 10;
  return {
    meta: {},
    valid: "".concat(l) === e.substr(s - 1, 1)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/rsVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/rsVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^RS[0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = 10;
  var a = 0;

  for (var _t = 0; _t < 8; _t++) {
    a = (parseInt(e.charAt(_t), 10) + r) % 10;

    if (a === 0) {
      a = 10;
    }

    r = 2 * a % 11;
  }

  return {
    meta: {},
    valid: (r + parseInt(e.substr(8, 1), 10)) % 10 === 1
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ruVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ruVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^RU([0-9]{10}|[0-9]{12})$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^([0-9]{10}|[0-9]{12})$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = 0;

  if (e.length === 10) {
    var _t = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
    var s = 0;

    for (r = 0; r < 10; r++) {
      s += parseInt(e.charAt(r), 10) * _t[r];
    }

    s = s % 11;

    if (s > 9) {
      s = s % 10;
    }

    return {
      meta: {},
      valid: "".concat(s) === e.substr(9, 1)
    };
  } else if (e.length === 12) {
    var _t2 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
    var _s = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
    var a = 0;
    var l = 0;

    for (r = 0; r < 11; r++) {
      a += parseInt(e.charAt(r), 10) * _t2[r];
      l += parseInt(e.charAt(r), 10) * _s[r];
    }

    a = a % 11;

    if (a > 9) {
      a = a % 10;
    }

    l = l % 11;

    if (l > 9) {
      l = l % 10;
    }

    return {
      meta: {},
      valid: "".concat(a) === e.substr(10, 1) && "".concat(l) === e.substr(11, 1)
    };
  }

  return {
    meta: {},
    valid: true
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/seVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/seVat.js ***!
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

  if (/^SE[0-9]{10}01$/.test(r)) {
    r = r.substr(2);
  }

  if (!/^[0-9]{10}01$/.test(r)) {
    return {
      meta: {},
      valid: false
    };
  }

  r = r.substr(0, 10);
  return {
    meta: {},
    valid: (0,_algorithms_luhn__WEBPACK_IMPORTED_MODULE_0__.default)(r)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/siVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/siVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.match(/^(SI)?([1-9][0-9]{7})$/);

  if (!e) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = e[1] ? t.substr(2) : t;
  var a = [8, 7, 6, 5, 4, 3, 2];
  var s = 0;

  for (var _t = 0; _t < 7; _t++) {
    s += parseInt(r.charAt(_t), 10) * a[_t];
  }

  s = 11 - s % 11;

  if (s === 10) {
    s = 0;
  }

  return {
    meta: {},
    valid: "".concat(s) === r.substr(7, 1)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/skVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/skVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  return {
    meta: {},
    valid: parseInt(e, 10) % 11 === 0
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/veVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/veVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^VE[VEJPG][0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[VEJPG][0-9]{9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = {
    E: 8,
    G: 20,
    J: 12,
    P: 16,
    V: 4
  };
  var s = [3, 2, 7, 6, 5, 4, 3, 2];
  var a = r[e.charAt(0)];

  for (var _t = 0; _t < 8; _t++) {
    a += parseInt(e.charAt(_t + 1), 10) * s[_t];
  }

  a = 11 - a % 11;

  if (a === 11 || a === 10) {
    a = 0;
  }

  return {
    meta: {},
    valid: "".concat(a) === e.substr(9, 1)
  };
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/zaVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/zaVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^ZA4[0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  return {
    meta: {},
    valid: /^4[0-9]{9}$/.test(e)
  };
}

/***/ })

}]);