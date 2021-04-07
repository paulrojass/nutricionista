(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_sedol_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/sedol.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/sedol.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t() {
  return {
    validate: function validate(t) {
      if (t.value === "") {
        return {
          valid: true
        };
      }

      var e = t.value.toUpperCase();

      if (!/^[0-9A-Z]{7}$/.test(e)) {
        return {
          valid: false
        };
      }

      var r = [1, 3, 1, 7, 3, 9, 1];
      var a = e.length;
      var l = 0;

      for (var _t = 0; _t < a - 1; _t++) {
        l += r[_t] * parseInt(e.charAt(_t), 36);
      }

      l = (10 - l % 10) % 10;
      return {
        valid: "".concat(l) === e.charAt(a - 1)
      };
    }
  };
}

/***/ })

}]);