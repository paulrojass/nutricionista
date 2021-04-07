(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_arVat_js"],{

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

/***/ })

}]);