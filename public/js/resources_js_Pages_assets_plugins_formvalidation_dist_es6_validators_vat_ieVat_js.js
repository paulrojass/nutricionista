(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_ieVat_js"],{

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

/***/ })

}]);