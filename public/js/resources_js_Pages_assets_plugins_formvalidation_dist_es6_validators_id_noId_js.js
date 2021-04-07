(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_noId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/noId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/noId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  if (!/^\d{11}$/.test(t)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = function r(t) {
    var r = [3, 7, 6, 1, 8, 9, 4, 5, 2];
    var e = 0;

    for (var n = 0; n < 9; n++) {
      e += r[n] * parseInt(t.charAt(n), 10);
    }

    return 11 - e % 11;
  };

  var e = function e(t) {
    var r = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    var e = 0;

    for (var n = 0; n < 10; n++) {
      e += r[n] * parseInt(t.charAt(n), 10);
    }

    return 11 - e % 11;
  };

  return {
    meta: {},
    valid: "".concat(r(t)) === t.substr(-2, 1) && "".concat(e(t)) === t.substr(-1)
  };
}

/***/ })

}]);