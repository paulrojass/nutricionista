(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_base_stretched-card_js"],{

/***/ "./resources/js/Pages/assets/js/layout/base/stretched-card.js":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/base/stretched-card.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutStretchedCard = function () {
  // Private properties
  var _element; // Private functions


  var _init = function _init() {
    var scroll = KTUtil.find(_element, '.card-scroll');
    var cardBody = KTUtil.find(_element, '.card-body');
    var cardHeader = KTUtil.find(_element, '.card-header');
    var height = KTLayoutContent.getHeight();
    height = height - parseInt(KTUtil.actualHeight(cardHeader));
    height = height - parseInt(KTUtil.css(_element, 'marginTop')) - parseInt(KTUtil.css(_element, 'marginBottom'));
    height = height - parseInt(KTUtil.css(_element, 'paddingTop')) - parseInt(KTUtil.css(_element, 'paddingBottom'));
    height = height - parseInt(KTUtil.css(cardBody, 'paddingTop')) - parseInt(KTUtil.css(cardBody, 'paddingBottom'));
    height = height - parseInt(KTUtil.css(cardBody, 'marginTop')) - parseInt(KTUtil.css(cardBody, 'marginBottom'));
    height = height - 3;
    KTUtil.css(scroll, 'height', height + 'px');
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init(); // Re-calculate on window resize


      KTUtil.addResizeHandler(function () {
        _init();
      });
    },
    update: function update() {
      _init();
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutStretchedCard);

/***/ })

}]);