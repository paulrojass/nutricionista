(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_extended_quick-cart_js"],{

/***/ "./resources/js/Pages/assets/js/layout/extended/quick-cart.js":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/extended/quick-cart.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutQuickCartPanel = function () {
  // Private properties
  var _element;

  var _offcanvasObject; // Private functions


  var _init = function _init() {
    _offcanvasObject = new KTOffcanvas(_element, {
      overlay: true,
      baseClass: 'offcanvas',
      placement: 'right',
      closeBy: 'kt_quick_cart_close',
      toggleBy: 'kt_quick_cart_toggle'
    });
    var header = KTUtil.find(_element, '.offcanvas-header');
    var content = KTUtil.find(_element, '.offcanvas-content');
    var wrapper = KTUtil.find(_element, '.offcanvas-wrapper');
    var footer = KTUtil.find(_element, '.offcanvas-footer');
    KTUtil.scrollInit(wrapper, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (header) {
          height = height - parseInt(KTUtil.actualHeight(header));
          height = height - parseInt(KTUtil.css(header, 'marginTop'));
          height = height - parseInt(KTUtil.css(header, 'marginBottom'));
        }

        if (content) {
          height = height - parseInt(KTUtil.css(content, 'marginTop'));
          height = height - parseInt(KTUtil.css(content, 'marginBottom'));
        }

        if (wrapper) {
          height = height - parseInt(KTUtil.css(wrapper, 'marginTop'));
          height = height - parseInt(KTUtil.css(wrapper, 'marginBottom'));
        }

        if (footer) {
          height = height - parseInt(KTUtil.actualHeight(footer));
          height = height - parseInt(KTUtil.css(footer, 'marginTop'));
          height = height - parseInt(KTUtil.css(footer, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
        height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));
        height = height - 2;
        return height;
      }
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init();
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutQuickCartPanel);

/***/ })

}]);