(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_chVat_js"],{

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

/***/ })

}]);