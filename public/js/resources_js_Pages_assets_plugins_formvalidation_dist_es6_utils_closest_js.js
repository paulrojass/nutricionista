(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_utils_closest_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/closest.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/closest.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function e(e, t) {
  var l = e.matches || e.webkitMatchesSelector || e["mozMatchesSelector"] || e["msMatchesSelector"];

  if (l) {
    return l.call(e, t);
  }

  var c = [].slice.call(e.parentElement.querySelectorAll(t));
  return c.indexOf(e) >= 0;
}

function t(t, l) {
  var c = t;

  while (c) {
    if (e(c, l)) {
      break;
    }

    c = c.parentElement;
  }

  return c;
}

/***/ })

}]);