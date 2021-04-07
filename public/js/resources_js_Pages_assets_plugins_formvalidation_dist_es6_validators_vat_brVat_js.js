(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_brVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/brVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/brVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  if (t === "") {
    return {
      meta: {},
      valid: true
    };
  }

  var e = t.replace(/[^\d]+/g, "");

  if (e === "" || e.length !== 14) {
    return {
      meta: {},
      valid: false
    };
  }

  if (e === "00000000000000" || e === "11111111111111" || e === "22222222222222" || e === "33333333333333" || e === "44444444444444" || e === "55555555555555" || e === "66666666666666" || e === "77777777777777" || e === "88888888888888" || e === "99999999999999") {
    return {
      meta: {},
      valid: false
    };
  }

  var r = e.length - 2;
  var a = e.substring(0, r);
  var l = e.substring(r);
  var n = 0;
  var i = r - 7;
  var s;

  for (s = r; s >= 1; s--) {
    n += parseInt(a.charAt(r - s), 10) * i--;

    if (i < 2) {
      i = 9;
    }
  }

  var f = n % 11 < 2 ? 0 : 11 - n % 11;

  if (f !== parseInt(l.charAt(0), 10)) {
    return {
      meta: {},
      valid: false
    };
  }

  r = r + 1;
  a = e.substring(0, r);
  n = 0;
  i = r - 7;

  for (s = r; s >= 1; s--) {
    n += parseInt(a.charAt(r - s), 10) * i--;

    if (i < 2) {
      i = 9;
    }
  }

  f = n % 11 < 2 ? 0 : 11 - n % 11;
  return {
    meta: {},
    valid: f === parseInt(l.charAt(1), 10)
  };
}

/***/ })

}]);