(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_base_header_js"],{

/***/ "./resources/js/Pages/assets/js/layout/base/header.js":
/*!************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/base/header.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutHeader = function () {
  // Private properties
  var _element;

  var _elementForMobile;

  var _object; // Private functions


  var _init = function _init() {
    var tmp;
    var options = {
      offset: {
        desktop: 200,
        tabletAndMobile: false
      },
      releseOnReverse: {
        desktop: false,
        tabletAndMobile: false
      }
    };
    _object = new KTHeader(_element, options);
  }; // Get height


  var _getHeight = function _getHeight() {
    var height = 0;

    if (_element) {
      height = KTUtil.actualHeight(_element) + 1;
    }

    return height;
  }; // Get height


  var _getHeightForMobile = function _getHeightForMobile() {
    var height;
    height = KTUtil.actualHeight(_elementForMobile);
    return height;
  }; // Public methods


  return {
    init: function init(id, idForMobile) {
      _element = KTUtil.getById(id);
      _elementForMobile = KTUtil.getById(idForMobile);

      if (!_element) {
        return;
      } // Initialize


      _init();
    },
    isFixed: function isFixed() {
      return KTUtil.hasClass(KTUtil.getBody(), 'header-fixed');
    },
    isFixedForMobile: function isFixedForMobile() {
      return KTUtil.hasClass(KTUtil.getBody(), 'header-mobile-fixed');
    },
    getElement: function getElement() {
      return _element;
    },
    getElementForMobile: function getElementForMobile() {
      return _elementForMobile;
    },
    getHeader: function getHeader() {
      return _object;
    },
    getHeight: function getHeight() {
      return _getHeight();
    },
    getHeightForMobile: function getHeightForMobile() {
      return _getHeightForMobile();
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutHeader);

/***/ })

}]);