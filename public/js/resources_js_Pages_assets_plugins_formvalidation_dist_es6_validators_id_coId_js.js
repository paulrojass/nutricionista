(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_coId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/coId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/coId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.replace(/\./g, "").replace("-", "");

  if (!/^\d{8,16}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = e.length;
  var a = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
  var l = 0;

  for (var _t = r - 2; _t >= 0; _t--) {
    l += parseInt(e.charAt(_t), 10) * a[_t];
  }

  l = l % 11;

  if (l >= 2) {
    l = 11 - l;
  }

  return {
    meta: {},
    valid: "".concat(l) === e.substr(r - 1)
  };
}

/***/ })

}]);