(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_view_layout_header_Header_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "dropdown-1",
  components: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Header.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./resources/js/Pages/view/layout/header/Menu.vue");
/* harmony import */ var _assets_js_layout_base_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/js/layout/base/header.js */ "./resources/js/Pages/assets/js/layout/base/header.js");
/* harmony import */ var _assets_js_layout_base_header_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/js/layout/base/header-menu.js */ "./resources/js/Pages/assets/js/layout/base/header-menu.js");
/* harmony import */ var _Dropdown2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dropdown2 */ "./resources/js/Pages/view/layout/header/Dropdown2.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Header",
  components: {
    KTMenu: _Menu__WEBPACK_IMPORTED_MODULE_0__.default,
    KTDropdown: _Dropdown2__WEBPACK_IMPORTED_MODULE_3__.default
  },
  mounted: function mounted() {
    // Init Desktop & Mobile Headers
    _assets_js_layout_base_header_js__WEBPACK_IMPORTED_MODULE_1__.default.init("kt_header", "kt_header_mobile"); // Init Header Menu

    _assets_js_layout_base_header_menu_js__WEBPACK_IMPORTED_MODULE_2__.default.init(this.$refs["kt_header_menu"], this.$refs["kt_header_menu_wrapper"]);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(["layoutConfig", "getClasses"])), {}, {
    /**
     * Check if the header menu is enabled
     * @returns {boolean}
     */
    headerMenuEnabled: function headerMenuEnabled() {
      return !!this.layoutConfig("header.menu.self.display");
    },

    /**
     * Get extra classes for header based on the options
     * @returns {null|*}
     */
    headerClasses: function headerClasses() {
      var classes = this.getClasses("header");

      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }

      return null;
    },

    /**
     * Get extra classes for header menu based on the options
     * @returns {null|*}
     */
    headerMenuClasses: function headerMenuClasses() {
      var classes = this.getClasses("header_menu");

      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }

      return null;
    },

    /**
     * Check if header container is fluid
     */
    widthFluid: function widthFluid() {
      return this.layoutConfig("header.self.width") === "fluid";
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Menu.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Menu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KTMenu",
  methods: {
    hasActiveChildren: function hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
});

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dropdown-menu {\n  outline: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Pages/view/layout/header/Dropdown2.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/view/layout/header/Dropdown2.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dropdown2_vue_vue_type_template_id_4d8259fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown2.vue?vue&type=template&id=4d8259fa& */ "./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=template&id=4d8259fa&");
/* harmony import */ var _Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown2.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=script&lang=js&");
/* harmony import */ var _Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown2.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dropdown2_vue_vue_type_template_id_4d8259fa___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dropdown2_vue_vue_type_template_id_4d8259fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/layout/header/Dropdown2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/layout/header/Header.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/view/layout/header/Header.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_faaca78a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=faaca78a& */ "./resources/js/Pages/view/layout/header/Header.vue?vue&type=template&id=faaca78a&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/layout/header/Header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Header_vue_vue_type_template_id_faaca78a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Header_vue_vue_type_template_id_faaca78a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/layout/header/Header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/layout/header/Menu.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/view/layout/header/Menu.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu_vue_vue_type_template_id_03a6938d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=03a6938d& */ "./resources/js/Pages/view/layout/header/Menu.vue?vue&type=template&id=03a6938d&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/layout/header/Menu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Menu_vue_vue_type_template_id_03a6938d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Menu_vue_vue_type_template_id_03a6938d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/layout/header/Menu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/layout/header/Header.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/header/Header.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/layout/header/Menu.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/header/Menu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Menu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=template&id=4d8259fa&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=template&id=4d8259fa& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_4d8259fa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_4d8259fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_4d8259fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=template&id=4d8259fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=template&id=4d8259fa&");


/***/ }),

/***/ "./resources/js/Pages/view/layout/header/Header.vue?vue&type=template&id=faaca78a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/header/Header.vue?vue&type=template&id=faaca78a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_faaca78a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_faaca78a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_faaca78a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=template&id=faaca78a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Header.vue?vue&type=template&id=faaca78a&");


/***/ }),

/***/ "./resources/js/Pages/view/layout/header/Menu.vue?vue&type=template&id=03a6938d&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/header/Menu.vue?vue&type=template&id=03a6938d& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_03a6938d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_03a6938d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_03a6938d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=template&id=03a6938d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Menu.vue?vue&type=template&id=03a6938d&");


/***/ }),

/***/ "./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=template&id=4d8259fa&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=template&id=4d8259fa& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-dropdown",
    {
      attrs: {
        "toggle-class": "btn btn-dark font-weight-bold px-6",
        "no-caret": "",
        right: "",
        "no-flip": "",
        text: "Create"
      }
    },
    [
      _c(
        "div",
        { staticClass: "navi navi-hover min-w-md-250px" },
        [
          _c(
            "b-dropdown-text",
            { staticClass: "navi-header pb-1", attrs: { tag: "div" } },
            [
              _c(
                "span",
                { staticClass: "text-primary text-uppercase font-weight-bold" },
                [_vm._v("\n        Add new:\n      ")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link", attrs: { href: "#" } }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-graph-1" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [
                  _vm._v("\n          Order\n        ")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link", attrs: { href: "#" } }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-calendar-4" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [
                  _vm._v("\n          Event\n        ")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link", attrs: { href: "#" } }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-layers-1" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [
                  _vm._v("\n          Report\n        ")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link", attrs: { href: "#" } }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-calendar-4" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [
                  _vm._v("\n          Post\n        ")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link", attrs: { href: "#" } }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-file-1" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [
                  _vm._v("\n          File\n        ")
                ])
              ])
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Header.vue?vue&type=template&id=faaca78a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Header.vue?vue&type=template&id=faaca78a& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "kt_header",
      staticClass: "header header-fixed",
      attrs: { id: "kt_header" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "header-wrapper rounded-top-xl d-flex flex-grow-1 align-items-center"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "container-fluid d-flex align-items-center justify-content-end justify-content-lg-between flex-wrap"
            },
            [
              _c(
                "div",
                {
                  ref: "kt_header_menu_wrapper",
                  staticClass:
                    "header-menu-wrapper header-menu-wrapper-left py-lg-2",
                  attrs: { id: "kt_header_menu_wrapper" }
                },
                [
                  _c(
                    "div",
                    {
                      ref: "kt_header_menu",
                      staticClass:
                        "header-menu header-menu-mobile header-menu-layout-default",
                      attrs: { id: "kt_header_menu" }
                    },
                    [_c("KTMenu")],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex align-items-center py-3" },
                [_c("KTDropdown")],
                1
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Menu.vue?vue&type=template&id=03a6938d&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Menu.vue?vue&type=template&id=03a6938d& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "menu-nav" },
    [
      _c("router-link", {
        attrs: { to: "/home" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active"
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate }
                      },
                      [
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v(" Home ")
                        ])
                      ]
                    )
                  ]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("router-link", {
        attrs: { to: "/pacientes" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active"
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate }
                      },
                      [
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v(" Pacientes ")
                        ])
                      ]
                    )
                  ]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("router-link", {
        attrs: { to: "/dashboard" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active"
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate }
                      },
                      [
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v(" Dashboard ")
                        ])
                      ]
                    )
                  ]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("router-link", {
        attrs: { to: "/builder" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active"
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate }
                      },
                      [
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v(" Builder ")
                        ])
                      ]
                    )
                  ]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "menu-item menu-item-submenu menu-item-open-dropdown",
          class: {
            "menu-item-active": _vm.hasActiveChildren("/vue-bootstrap")
          },
          attrs: { "aria-haspopup": "true", "data-menu-toggle": "click" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "menu-submenu menu-submenu-fixed" }, [
            _c(
              "div",
              {
                staticClass: "menu-subnav megamenu",
                staticStyle: { "max-width": "1000px" }
              },
              [
                _c("ul", { staticClass: "menu-content" }, [
                  _c("li", { staticClass: "menu-item" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "menu-inner" },
                      [
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/alert" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Alert ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/badge" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Badge ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/button" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Button ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/button-group" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Button Group ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/button-toolbar" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Button Toolbar ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/card" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Card ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/carousel" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Carousel ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "menu-item" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "menu-inner" },
                      [
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/collapse" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Collapse ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/dropdown" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Dropdown ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/embed" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Embed ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/form" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Form ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/form-checkbox" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Form Checkbox ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/form-file" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Form File ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/form-group" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Form Group ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/form-input" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Form Input ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "menu-item" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "menu-inner" },
                      [
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/form-radio" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Form Radio ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/form-select" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Form Select ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/form-textarea" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Form Textarea ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/image" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Image ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/input-group" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Input Group ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/jumbotron" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Jumbotron ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "layout-grid-system" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Layout Grid System ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "menu-item" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "menu-inner" },
                      [
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/link" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Link ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/list-group" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" List Group ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/media" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Media ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/modal" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Modal ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/nav" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Nav ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/navbar" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Navbar ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/pagination" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Pagination ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/pagination-nav" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Pagination Nav ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "menu-item" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "menu-inner" },
                      [
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/notify-popover" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Popover ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/progress" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Progress ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/progress-spinner" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Spinner ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/table" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Table ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/tabs" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Tabs ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/notify-toasts" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Toasts ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vue-bootstrap/notify-tooltip" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Tooltip ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ])
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "menu-item menu-item-submenu menu-item-open-dropdown",
          class: { "menu-item-active": _vm.hasActiveChildren("vuetify") },
          attrs: { "aria-haspopup": "true", "data-menu-toggle": "click" }
        },
        [
          _vm._m(6),
          _vm._v(" "),
          _c("div", { staticClass: "menu-submenu menu-submenu-fixed" }, [
            _c(
              "div",
              {
                staticClass: "menu-subnav megamenu",
                staticStyle: { "max-width": "800px" }
              },
              [
                _c("ul", { staticClass: "menu-content" }, [
                  _c("li", { staticClass: "menu-item" }, [
                    _vm._m(7),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "menu-inner" },
                      [
                        _c("router-link", {
                          attrs: { to: "/vuetify/alerts" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Alerts ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/avatars" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Avatars ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/badges" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Badges ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/buttons" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Buttons ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/calendars" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Calendars ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "menu-item" }, [
                    _vm._m(8),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "menu-inner" },
                      [
                        _c("router-link", {
                          attrs: { to: "/vuetify/cards" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Cards ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/chips" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Chips ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/dialog" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Dialog ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/forms-autocompletes" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Autocompletes ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/forms-file-inputs" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" File Inputs ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "menu-item" }, [
                    _vm._m(9),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "menu-inner" },
                      [
                        _c("router-link", {
                          attrs: { to: "/vuetify/forms" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Forms ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/forms-selection-controls" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Selection Controls ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/forms-selects" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Selects ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/forms-textareas" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Textareas ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/forms-text-fields" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Text Fields ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "menu-item" }, [
                    _vm._m(10),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "menu-inner" },
                      [
                        _c("router-link", {
                          attrs: { to: "/vuetify/tables-simple-tables" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Simple Tables ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/tables-data-tables" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Data Tables ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/tabs" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Tabs ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/timelines" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Timelines ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/tooltips" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Tooltips ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("router-link", {
                          attrs: { to: "/vuetify/treeview" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var href = ref.href
                                var navigate = ref.navigate
                                var isActive = ref.isActive
                                var isExactActive = ref.isExactActive
                                return [
                                  _c(
                                    "li",
                                    {
                                      staticClass: "menu-item",
                                      class: [
                                        isActive && "menu-item-active",
                                        isExactActive && "menu-item-active"
                                      ],
                                      attrs: { "aria-haspopup": "true" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "menu-link",
                                          attrs: { href: href },
                                          on: { click: navigate }
                                        },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "menu-bullet menu-bullet-dot"
                                            },
                                            [_c("span")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "menu-text" },
                                            [_vm._v(" Treeview ")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ])
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "menu-item menu-item-submenu menu-item-open-dropdown",
          class: { "menu-item-active": _vm.hasActiveChildren("/custom") },
          attrs: { "aria-haspopup": "true", "data-menu-toggle": "click" }
        },
        [
          _vm._m(11),
          _vm._v(" "),
          _c("div", { staticClass: "menu-submenu menu-submenu-classic" }, [
            _c("ul", { staticClass: "menu-subnav" }, [
              _c(
                "li",
                {
                  staticClass: "menu-item menu-item-submenu",
                  attrs: {
                    "aria-haspopup": "true",
                    "data-menu-toggle": "hover"
                  }
                },
                [
                  _vm._m(12),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "menu-submenu menu-submenu-classic menu-submenu-right"
                    },
                    [
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _c("router-link", {
                            attrs: { to: "/custom-error/error-1" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Error 1 ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/custom-error/error-2" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Error 2 ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/custom-error/error-3" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Error 3 ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/custom-error/error-4" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Error 4 ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/custom-error/error-5" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Error 5 ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/custom-error/error-6" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Error 6 ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "menu-item menu-item-submenu",
                  class: {
                    "menu-item-active": _vm.hasActiveChildren(
                      "/custom-wizard/wizard"
                    )
                  },
                  attrs: {
                    "aria-haspopup": "true",
                    "data-menu-toggle": "hover"
                  }
                },
                [
                  _vm._m(13),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "menu-submenu menu-submenu-classic menu-submenu-right"
                    },
                    [
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _c("router-link", {
                            attrs: { to: "/custom-wizard/wizard-1" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Wizard 1 ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/custom-wizard/wizard-2" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Wizard 2 ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/custom-wizard/wizard-3" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Wizard 3 ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/custom-wizard/wizard-4" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Wizard 4 ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "menu-item menu-item-submenu",
                  class: {
                    "menu-item-active": _vm.hasActiveChildren("/custom-plugins")
                  },
                  attrs: {
                    "aria-haspopup": "true",
                    "data-menu-toggle": "hover"
                  }
                },
                [
                  _vm._m(14),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "menu-submenu menu-submenu-classic menu-submenu-right"
                    },
                    [
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _c("router-link", {
                            attrs: { to: "/custom-plugins/cropper" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Cropper ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/custom-plugins/treeselect" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v(" Treeselect ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "menu-item menu-item-submenu",
                  class: {
                    "menu-item-active": _vm.hasActiveChildren("/custom-pages")
                  },
                  attrs: {
                    "aria-haspopup": "true",
                    "data-menu-toggle": "hover"
                  }
                },
                [
                  _vm._m(15),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "menu-submenu menu-submenu-classic menu-submenu-right"
                    },
                    [
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _c("router-link", {
                            attrs: { to: "/profile/profile-1" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Profile 1")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/profile/profile-2" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Profile 2")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/profile/profile-3" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Profile 3")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/profile/profile-4" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active"
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate }
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot"
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Profile 4")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [_c("span", { staticClass: "menu-text" }, [_vm._v(" Vue Bootstrap ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "menu-heading menu-toggle" }, [
      _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
      _vm._v(" "),
      _c("span", { staticClass: "menu-text" }, [_vm._v(" Task Reports ")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-arrow" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "menu-heading menu-toggle" }, [
      _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
      _vm._v(" "),
      _c("span", { staticClass: "menu-text" }, [_vm._v(" Profit Margins ")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-arrow" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "menu-heading menu-toggle" }, [
      _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
      _vm._v(" "),
      _c("span", { staticClass: "menu-text" }, [_vm._v(" Staff Management ")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-arrow" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "menu-heading menu-toggle" }, [
      _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
      _vm._v(" "),
      _c("span", { staticClass: "menu-text" }, [_vm._v(" Tools ")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-arrow" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "menu-heading menu-toggle" }, [
      _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
      _vm._v(" "),
      _c("span", { staticClass: "menu-text" }, [_vm._v(" Misc ")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-arrow" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [_c("span", { staticClass: "menu-text" }, [_vm._v(" Vuetify ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "menu-heading menu-toggle" }, [
      _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
      _vm._v(" "),
      _c("span", { staticClass: "menu-text" }, [_vm._v(" Task Reports ")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-arrow" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "menu-heading menu-toggle" }, [
      _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
      _vm._v(" "),
      _c("span", { staticClass: "menu-text" }, [_vm._v(" Profit Margins ")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-arrow" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "menu-heading menu-toggle" }, [
      _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
      _vm._v(" "),
      _c("span", { staticClass: "menu-text" }, [_vm._v(" Staff Management ")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-arrow" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "menu-heading menu-toggle" }, [
      _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
      _vm._v(" "),
      _c("span", { staticClass: "menu-text" }, [_vm._v(" Tools ")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-arrow" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [_c("span", { staticClass: "menu-text" }, [_vm._v(" Custom ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-icon flaticon2-list-2" }),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v(" Error Pages ")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-icon flaticon2-mail-1" }),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v(" Wizard ")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-icon flaticon2-image-file" }),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v(" Plugins ")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-icon far fa-user" }),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Profile")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1a7ac496", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);