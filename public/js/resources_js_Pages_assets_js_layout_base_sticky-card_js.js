(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_base_sticky-card_js"],{

/***/ "./resources/js/Pages/assets/js/layout/base/sticky-card.js":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/base/sticky-card.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutStickyCard = function () {
  // Private properties
  var _element;

  var _object; // Private functions


  var _init = function _init() {
    var offset = 300;

    if (typeof KTLayoutHeader !== 'undefined') {
      offset = KTLayoutHeader.getHeight();
    }

    _object = new KTCard(_element, {
      sticky: {
        offset: offset,
        zIndex: 90,
        position: {
          top: function top() {
            var pos = 0;
            var body = KTUtil.getBody();

            if (KTUtil.isBreakpointUp('lg')) {
              if (typeof KTLayoutHeader !== 'undefined' && KTLayoutHeader.isFixed()) {
                pos = pos + KTLayoutHeader.getHeight();
              }

              if (typeof KTLayoutSubheader !== 'undefined' && KTLayoutSubheader.isFixed()) {
                pos = pos + KTLayoutSubheader.getHeight();
              }
            } else {
              if (typeof KTLayoutHeader !== 'undefined' && KTLayoutHeader.isFixedForMobile()) {
                pos = pos + KTLayoutHeader.getHeightForMobile();
              }
            }

            pos = pos - 1; // remove header border width

            return pos;
          },
          left: function left(card) {
            return KTUtil.offset(_element).left;
          },
          right: function right(card) {
            var body = KTUtil.getBody();
            var cardWidth = parseInt(KTUtil.css(_element, 'width'));
            var bodyWidth = parseInt(KTUtil.css(body, 'width'));
            var cardOffsetLeft = KTUtil.offset(_element).left;
            return bodyWidth - cardWidth - cardOffsetLeft;
          }
        }
      }
    });

    _object.initSticky();

    KTUtil.addResizeHandler(function () {
      _object.updateSticky();
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
    update: function update() {
      if (_object) {
        _object.updateSticky();
      }
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutStickyCard);

/***/ })

}]);