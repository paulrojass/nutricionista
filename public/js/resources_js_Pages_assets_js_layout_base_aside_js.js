(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_base_aside_js"],{

/***/ "./resources/js/Pages/assets/js/layout/base/aside.js":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/base/aside.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutAside = function () {
  // Private properties
  var _body;

  var _element;

  var _offcanvasObject; // Private functions
  // Initialize


  var _init = function _init() {
    // Initialize mobile aside offcanvas
    _offcanvasObject = new KTOffcanvas(_element, {
      baseClass: 'aside',
      overlay: true,
      closeBy: 'kt_aside_close_btn',
      toggleBy: {
        target: 'kt_aside_mobile_toggle',
        state: 'mobile-toggle-active'
      }
    });
  };

  var _initNav = function _initNav() {
    var asideNav = KTUtil.find(_element, '.aside-nav');

    if (!asideNav) {
      return;
    }

    KTUtil.scrollInit(asideNav, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);
        var asideBrand = KTUtil.find(_element, '.aside-brand');
        var asideFooter = KTUtil.find(_element, '.aside-footer');
        height = height - parseInt(KTUtil.css(asideBrand, 'height'));
        height = height - (parseInt(KTUtil.css(asideBrand, 'marginBottom')) + parseInt(KTUtil.css(asideBrand, 'marginTop')));
        height = height - parseInt(KTUtil.css(asideFooter, 'height'));
        height = height - (parseInt(KTUtil.css(asideFooter, 'marginBottom')) + parseInt(KTUtil.css(asideFooter, 'marginTop')));
        return height;
      }
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);
      _body = KTUtil.getBody();

      if (!_element) {
        return;
      } // Initialize


      _init();

      _initNav();
    },
    getElement: function getElement() {
      return _element;
    },
    getOffcanvas: function getOffcanvas() {
      return _offcanvasObject;
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutAside);

/***/ })

}]);