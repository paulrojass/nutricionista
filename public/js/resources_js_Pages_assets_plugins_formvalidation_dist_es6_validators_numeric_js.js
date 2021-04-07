(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_numeric_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/numeric.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/numeric.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
function a() {
  return {
    validate: function validate(a) {
      if (a.value === "") {
        return {
          valid: true
        };
      }

      var e = Object.assign({}, {
        decimalSeparator: ".",
        thousandsSeparator: ""
      }, a.options);
      var t = "".concat(a.value);

      if (t.substr(0, 1) === e.decimalSeparator) {
        t = "0".concat(e.decimalSeparator).concat(t.substr(1));
      } else if (t.substr(0, 2) === "-".concat(e.decimalSeparator)) {
        t = "-0".concat(e.decimalSeparator).concat(t.substr(2));
      }

      var r = e.decimalSeparator === "." ? "\\." : e.decimalSeparator;
      var s = e.thousandsSeparator === "." ? "\\." : e.thousandsSeparator;
      var i = new RegExp("^-?[0-9]{1,3}(".concat(s, "[0-9]{3})*(").concat(r, "[0-9]+)?$"));
      var o = new RegExp(s, "g");

      if (!i.test(t)) {
        return {
          valid: false
        };
      }

      if (s) {
        t = t.replace(o, "");
      }

      if (r) {
        t = t.replace(r, ".");
      }

      var l = parseFloat(t);
      return {
        valid: !isNaN(l) && isFinite(l)
      };
    }
  };
}

/***/ })

}]);