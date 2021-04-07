(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_beVat_js"],{

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

/***/ })

}]);