(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_ruVat_js"],{

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

/***/ })

}]);