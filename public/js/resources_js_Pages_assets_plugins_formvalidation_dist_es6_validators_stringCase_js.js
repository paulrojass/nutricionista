(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_stringCase_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/stringCase.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/stringCase.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
function e() {
  return {
    validate: function validate(e) {
      if (e.value === "") {
        return {
          valid: true
        };
      }

      var a = Object.assign({}, {
        "case": "lower"
      }, e.options);
      var s = (a["case"] || "lower").toLowerCase();
      return {
        message: a.message || (e.l10n ? "upper" === s ? e.l10n.stringCase.upper : e.l10n.stringCase["default"] : a.message),
        valid: "upper" === s ? e.value === e.value.toUpperCase() : e.value === e.value.toLowerCase()
      };
    }
  };
}

/***/ })

}]);