(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_filters_getFieldValue_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/filters/getFieldValue.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/filters/getFieldValue.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
function e(e, t, r, c) {
  var n = (r.getAttribute("type") || "").toLowerCase();
  var a = r.tagName.toLowerCase();

  switch (a) {
    case "textarea":
      return r.value;

    case "select":
      var _e = r;
      var _t = _e.selectedIndex;
      return _t >= 0 ? _e.options.item(_t).value : "";

    case "input":
      if ("radio" === n || "checkbox" === n) {
        var _e2 = c.filter(function (e) {
          return e.checked;
        }).length;
        return _e2 === 0 ? "" : _e2 + "";
      } else {
        return r.value;
      }

    default:
      return "";
  }
}

/***/ })

}]);