(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_base_header-topbar_js"],{

/***/ "./resources/js/Pages/assets/js/layout/base/header-topbar.js":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/base/header-topbar.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutHeaderTopbar = function () {
  // Private properties
  var _toggleElement;

  var _toggleObject; // Private functions


  var _init = function _init() {
    _toggleObject = new KTToggle(_toggleElement, KTUtil.getBody(), {
      targetState: 'topbar-mobile-on',
      toggleState: 'topbar-toggle-active'
    });
  }; // Public methods


  return {
    init: function init(id) {
      _toggleElement = KTUtil.getById(id);

      if (!_toggleElement) {
        return;
      } // Initialize


      _init();
    },
    getToggleElement: function getToggleElement() {
      return _toggleElement;
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutHeaderTopbar);

/***/ })

}]);