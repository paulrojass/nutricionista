(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_twId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/twId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/twId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.toUpperCase();

  if (!/^[A-Z][12][0-9]{8}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var a = e.length;
  var n = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
  var r = n.indexOf(e.charAt(0)) + 10;
  var o = Math.floor(r / 10) + r % 10 * (a - 1);
  var s = 0;

  for (var _t = 1; _t < a - 1; _t++) {
    s += parseInt(e.charAt(_t), 10) * (a - 1 - _t);
  }

  return {
    meta: {},
    valid: (o + s + parseInt(e.charAt(a - 1), 10)) % 10 === 0
  };
}

/***/ })

}]);