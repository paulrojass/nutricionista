(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_extended_scrolltop_js"],{

/***/ "./resources/js/Pages/assets/js/layout/extended/scrolltop.js":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/extended/scrolltop.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutScrolltop = function () {
  // Private properties
  var _element;

  var _object; // Private functions


  var _init = function _init() {
    _object = new KTScrolltop(_element, {
      offset: 300,
      speed: 600
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init();
    },
    getElement: function getElement() {
      return _element;
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutScrolltop);

/***/ })

}]);