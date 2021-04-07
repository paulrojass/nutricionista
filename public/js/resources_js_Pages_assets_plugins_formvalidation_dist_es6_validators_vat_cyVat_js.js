(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_cyVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/cyVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/cyVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-5|9][0-9]{7}[A-Z]$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  if (e.substr(0, 2) === "12") {
    return {
      meta: {},
      valid: false
    };
  }

  var r = 0;
  var s = {
    0: 1,
    1: 0,
    2: 5,
    3: 7,
    4: 9,
    5: 13,
    6: 15,
    7: 17,
    8: 19,
    9: 21
  };

  for (var _t = 0; _t < 8; _t++) {
    var a = parseInt(e.charAt(_t), 10);

    if (_t % 2 === 0) {
      a = s["".concat(a)];
    }

    r += a;
  }

  return {
    meta: {},
    valid: "".concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ"[r % 26]) === e.substr(8, 1)
  };
}

/***/ })

}]);