(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_frId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/frId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/frId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var s = t.toUpperCase();

  if (!/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(s)) {
    return {
      meta: {},
      valid: false
    };
  }

  var e = s.substr(5, 2);

  switch (true) {
    case /^\d{2}$/.test(e):
      s = t;
      break;

    case e === "2A":
      s = "".concat(t.substr(0, 5), "19").concat(t.substr(7));
      break;

    case e === "2B":
      s = "".concat(t.substr(0, 5), "18").concat(t.substr(7));
      break;

    default:
      return {
        meta: {},
        valid: false
      };
  }

  var r = 97 - parseInt(s.substr(0, 13), 10) % 97;
  var a = r < 10 ? "0".concat(r) : "".concat(r);
  return {
    meta: {},
    valid: a === s.substr(13)
  };
}

/***/ })

}]);