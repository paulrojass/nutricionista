(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_cusip_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/cusip.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/cusip.js ***!
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

      if (!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(e)) {
        return {
          valid: false
        };
      }

      var r = e.split("");
      var a = r.pop();
      var n = r.map(function (t) {
        var e = t.charCodeAt(0);

        switch (true) {
          case t === "*":
            return 36;

          case t === "@":
            return 37;

          case t === "#":
            return 38;

          case e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0):
            return e - "A".charCodeAt(0) + 10;

          default:
            return parseInt(t, 10);
        }
      });
      var c = n.map(function (t, e) {
        var r = e % 2 === 0 ? t : 2 * t;
        return Math.floor(r / 10) + r % 10;
      }).reduce(function (t, e) {
        return t + e;
      }, 0);
      var o = (10 - c % 10) % 10;
      return {
        valid: a === "".concat(o)
      };
    }
  };
}

/***/ })

}]);