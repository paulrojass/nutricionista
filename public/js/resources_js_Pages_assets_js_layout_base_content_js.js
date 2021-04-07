(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_base_content_js"],{

/***/ "./resources/js/Pages/assets/js/layout/base/content.js":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/base/content.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutContent = function () {
  // Private properties
  var _element; // Private functions


  var _getHeight = function _getHeight() {
    var height;
    height = KTUtil.getViewPort().height;

    if (_element) {
      height = height - parseInt(KTUtil.css(_element, 'paddingTop')) - parseInt(KTUtil.css(_element, 'paddingBottom'));
    }

    height = height - KTLayoutHeader.getHeight();
    height = height - KTLayoutSubheader.getHeight();
    height = height - KTLayoutFooter.getHeight();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutContent);

/***/ })

}]);