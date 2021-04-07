(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_hkId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/hkId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/hkId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.toUpperCase();

  if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var n = e.charAt(0);
  var r = e.charAt(1);
  var a = 0;
  var c = e;

  if (/^[A-Z]$/.test(r)) {
    a += 9 * (10 + s.indexOf(n));
    a += 8 * (10 + s.indexOf(r));
    c = e.substr(2);
  } else {
    a += 9 * 36;
    a += 8 * (10 + s.indexOf(n));
    c = e.substr(1);
  }

  var o = c.length;

  for (var _t = 0; _t < o - 1; _t++) {
    a += (7 - _t) * parseInt(c.charAt(_t), 10);
  }

  var f = a % 11;
  var l = f === 0 ? "0" : 11 - f === 10 ? "A" : "".concat(11 - f);
  return {
    meta: {},
    valid: l === c.charAt(o - 1)
  };
}

/***/ })

}]);