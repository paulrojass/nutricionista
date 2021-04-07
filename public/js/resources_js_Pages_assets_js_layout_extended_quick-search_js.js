(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_extended_quick-search_js"],{

/***/ "./resources/js/Pages/assets/js/layout/extended/quick-search.js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/extended/quick-search.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutQuickSearch = function () {
  // Private properties
  var _element;

  var _offcanvasObject; // Private functions


  var _init = function _init() {
    var header = KTUtil.find(_element, '.offcanvas-header');
    var content = KTUtil.find(_element, '.offcanvas-content');
    var form = KTUtil.find(_element, '.quick-search-form');
    var results = KTUtil.find(_element, '.quick-search-wrapper');
    _offcanvasObject = new KTOffcanvas(_element, {
      overlay: true,
      baseClass: 'offcanvas',
      placement: 'right',
      closeBy: 'kt_quick_search_close',
      toggleBy: 'kt_quick_search_toggle'
    });
    KTUtil.scrollInit(results, {
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

        if (results) {
          height = height - parseInt(KTUtil.actualHeight(form));
          height = height - parseInt(KTUtil.css(form, 'marginTop'));
          height = height - parseInt(KTUtil.css(form, 'marginBottom'));
          height = height - parseInt(KTUtil.css(results, 'marginTop'));
          height = height - parseInt(KTUtil.css(results, 'marginBottom'));
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
    },
    getElement: function getElement() {
      return _element;
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutQuickSearch);

/***/ })

}]);