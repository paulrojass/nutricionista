(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_chId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/chId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/chId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(t)) {
    return {
      meta: {},
      valid: false
    };
  }

  var e = t.replace(/\D/g, "").substr(3);
  var r = e.length;
  var a = r === 8 ? [3, 1] : [1, 3];
  var n = 0;

  for (var _t = 0; _t < r - 1; _t++) {
    n += parseInt(e.charAt(_t), 10) * a[_t % 2];
  }

  n = 10 - n % 10;
  return {
    meta: {},
    valid: "".concat(n) === e.charAt(r - 1)
  };
}

/***/ })

}]);