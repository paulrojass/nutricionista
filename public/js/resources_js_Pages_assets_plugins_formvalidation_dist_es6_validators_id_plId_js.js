(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_plId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/plId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/plId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  if (!/^[0-9]{11}$/.test(t)) {
    return {
      meta: {},
      valid: false
    };
  }

  var e = 0;
  var a = t.length;
  var r = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7];

  for (var n = 0; n < a - 1; n++) {
    e += r[n] * parseInt(t.charAt(n), 10);
  }

  e = e % 10;

  if (e === 0) {
    e = 10;
  }

  e = 10 - e;
  return {
    meta: {},
    valid: "".concat(e) === t.charAt(a - 1)
  };
}

/***/ })

}]);