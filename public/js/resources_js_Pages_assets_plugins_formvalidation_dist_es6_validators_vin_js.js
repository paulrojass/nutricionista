(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vin_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vin.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vin.js ***!
  \*************************************************************************************/
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

      if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(t.value)) {
        return {
          valid: false
        };
      }

      var e = t.value.toUpperCase();
      var r = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        J: 1,
        K: 2,
        L: 3,
        M: 4,
        N: 5,
        P: 7,
        R: 9,
        S: 2,
        T: 3,
        U: 4,
        V: 5,
        W: 6,
        X: 7,
        Y: 8,
        Z: 9,
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9
      };
      var a = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
      var l = e.length;
      var n = 0;

      for (var _t = 0; _t < l; _t++) {
        n += r["".concat(e.charAt(_t))] * a[_t];
      }

      var u = "".concat(n % 11);

      if (u === "10") {
        u = "X";
      }

      return {
        valid: u === e.charAt(8)
      };
    }
  };
}

/***/ })

}]);