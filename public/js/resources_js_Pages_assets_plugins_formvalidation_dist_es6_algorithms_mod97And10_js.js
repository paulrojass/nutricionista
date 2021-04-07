(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_algorithms_mod97And10_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod97And10.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod97And10.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
function t(t) {
  return t.split("").map(function (t) {
    var n = t.charCodeAt(0);
    return n >= 65 && n <= 90 ? n - 55 : t;
  }).join("").split("").map(function (t) {
    return parseInt(t, 10);
  });
}

function n(n) {
  var e = t(n);
  var r = 0;
  var o = e.length;

  for (var _t = 0; _t < o - 1; ++_t) {
    r = (r + e[_t]) * 10 % 97;
  }

  r += e[o - 1];
  return r % 97 === 1;
}

/***/ })

}]);