(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_base_footer_js"],{

/***/ "./resources/js/Pages/assets/js/layout/base/footer.js":
/*!************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/base/footer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutFooter = function () {
  // Private properties
  var _element; // Private functions


  var _getHeight = function _getHeight() {
    var height = 0;

    if (_element) {
      height = KTUtil.actualHeight(_element);
    }

    return height;
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);
    },
    getHeight: function getHeight() {
      return _getHeight();
    },
    getElement: function getElement() {
      return _element;
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutFooter);

/***/ })

}]);