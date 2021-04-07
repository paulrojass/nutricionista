(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_base_header-menu_js"],{

/***/ "./resources/js/Pages/assets/js/layout/base/header-menu.js":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/base/header-menu.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutHeaderMenu = function () {
  // Private properties
  var _menuElement;

  var _menuObject;

  var _offcanvasElement;

  var _offcanvasObject; // Private functions


  var _init = function _init() {
    _offcanvasObject = new KTOffcanvas(_offcanvasElement, {
      overlay: true,
      baseClass: 'header-menu-wrapper',
      closeBy: 'kt_header_menu_mobile_close_btn',
      toggleBy: {
        target: 'kt_header_mobile_toggle',
        state: 'mobile-toggle-active'
      }
    });
    _menuObject = new KTMenu(_menuElement, {
      submenu: {
        desktop: 'dropdown',
        tablet: 'accordion',
        mobile: 'accordion'
      },
      accordion: {
        slideSpeed: 200,
        // accordion toggle slide speed in milliseconds
        expandAll: false // allow having multiple expanded accordions in the menu

      }
    });
  }; // Public methods


  return {
    init: function init(menuId, offcanvasId) {
      _menuElement = KTUtil.getById(menuId);
      _offcanvasElement = KTUtil.getById(offcanvasId);

      if (!_menuElement) {
        return;
      } // Initialize menu


      _init();
    },
    getMenuElement: function getMenuElement() {
      return _menuElement;
    },
    getOffcanvasElement: function getOffcanvasElement() {
      return _offcanvasElement;
    },
    getMenu: function getMenu() {
      return _menuObject;
    },
    pauseDropdownHover: function pauseDropdownHover(time) {
      if (_menuObject) {
        _menuObject.pauseDropdownHover(time);
      }
    },
    getOffcanvas: function getOffcanvas() {
      return _offcanvasObject;
    },
    closeMobileOffcanvas: function closeMobileOffcanvas() {
      if (_menuObject && KTUtil.isMobileDevice()) {
        _offcanvasObject.hide();
      }
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutHeaderMenu);

/***/ })

}]);