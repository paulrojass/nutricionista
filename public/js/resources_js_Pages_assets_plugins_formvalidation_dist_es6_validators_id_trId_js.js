(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_trId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/trId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/trId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  if (t.length !== 11) {
    return {
      meta: {},
      valid: false
    };
  }

  var e = 0;

  for (var a = 0; a < 10; a++) {
    e += parseInt(t.charAt(a), 10);
  }

  return {
    meta: {},
    valid: e % 10 === parseInt(t.charAt(10), 10)
  };
}

/***/ })

}]);