(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_ieId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/ieId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/ieId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  if (!/^\d{7}[A-W][AHWTX]?$/.test(t)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = function r(t) {
    var r = t;

    while (r.length < 7) {
      r = "0".concat(r);
    }

    var e = "WABCDEFGHIJKLMNOPQRSTUV";
    var s = 0;

    for (var _t = 0; _t < 7; _t++) {
      s += parseInt(r.charAt(_t), 10) * (8 - _t);
    }

    s += 9 * e.indexOf(r.substr(7));
    return e[s % 23];
  };

  var e = t.length === 9 && ("A" === t.charAt(8) || "H" === t.charAt(8)) ? t.charAt(7) === r(t.substr(0, 7) + t.substr(8) + "") : t.charAt(7) === r(t.substr(0, 7));
  return {
    meta: {},
    valid: e
  };
}

/***/ })

}]);