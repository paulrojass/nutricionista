(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_czVat_js"],{

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

/***/ })

}]);