(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_clId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/clId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/clId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
function e(e) {
  if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var t = e.replace(/\-/g, "");

  while (t.length < 9) {
    t = "0".concat(t);
  }

  var l = [3, 2, 7, 6, 5, 4, 3, 2];
  var a = 0;

  for (var _e = 0; _e < 8; _e++) {
    a += parseInt(t.charAt(_e), 10) * l[_e];
  }

  a = 11 - a % 11;
  var r = "".concat(a);

  if (a === 11) {
    r = "0";
  } else if (a === 10) {
    r = "K";
  }

  return {
    meta: {},
    valid: r === t.charAt(8).toUpperCase()
  };
}

/***/ })

}]);