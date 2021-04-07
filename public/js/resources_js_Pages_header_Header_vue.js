(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_header_Header_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Header.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./resources/js/Pages/header/Menu.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../assets/js/layout/base/header.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../assets/js/layout/base/header-menu.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Dropdown2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown2 */ "./resources/js/Pages/header/Dropdown2.vue");
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
    KTDropdown: _Dropdown2__WEBPACK_IMPORTED_MODULE_2__.default
  },
  mounted: function mounted() {
    // Init Desktop & Mobile Headers
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../assets/js/layout/base/header.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("kt_header", "kt_header_mobile"); // Init Header Menu

    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../assets/js/layout/base/header-menu.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.$refs["kt_header_menu"], this.$refs["kt_header_menu_wrapper"]);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(["layoutConfig", "getClasses"])), {}, {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Menu.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Menu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dropdown-menu {\n  outline: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/js/Pages/header/Dropdown2.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/header/Dropdown2.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dropdown2_vue_vue_type_template_id_6e124328___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown2.vue?vue&type=template&id=6e124328& */ "./resources/js/Pages/header/Dropdown2.vue?vue&type=template&id=6e124328&");
/* harmony import */ var _Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown2.vue?vue&type=script&lang=js& */ "./resources/js/Pages/header/Dropdown2.vue?vue&type=script&lang=js&");
/* harmony import */ var _Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown2.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/Pages/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dropdown2_vue_vue_type_template_id_6e124328___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dropdown2_vue_vue_type_template_id_6e124328___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/header/Dropdown2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/header/Header.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/header/Header.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_32c09394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=32c09394& */ "./resources/js/Pages/header/Header.vue?vue&type=template&id=32c09394&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/Pages/header/Header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Header_vue_vue_type_template_id_32c09394___WEBPACK_IMPORTED_MODULE_0__.render,
  _Header_vue_vue_type_template_id_32c09394___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/header/Header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/header/Menu.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/header/Menu.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu_vue_vue_type_template_id_23fce048___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=23fce048& */ "./resources/js/Pages/header/Menu.vue?vue&type=template&id=23fce048&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/Pages/header/Menu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Menu_vue_vue_type_template_id_23fce048___WEBPACK_IMPORTED_MODULE_0__.render,
  _Menu_vue_vue_type_template_id_23fce048___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/header/Menu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/header/Dropdown2.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/header/Dropdown2.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/header/Header.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/header/Header.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/header/Menu.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/header/Menu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Menu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/header/Dropdown2.vue?vue&type=template&id=6e124328&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/header/Dropdown2.vue?vue&type=template&id=6e124328& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_6e124328___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_6e124328___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_6e124328___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=template&id=6e124328& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=template&id=6e124328&");


/***/ }),

/***/ "./resources/js/Pages/header/Header.vue?vue&type=template&id=32c09394&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/header/Header.vue?vue&type=template&id=32c09394& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_32c09394___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_32c09394___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_32c09394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=template&id=32c09394& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Header.vue?vue&type=template&id=32c09394&");


/***/ }),

/***/ "./resources/js/Pages/header/Menu.vue?vue&type=template&id=23fce048&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/header/Menu.vue?vue&type=template&id=23fce048& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_23fce048___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_23fce048___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_23fce048___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=template&id=23fce048& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Menu.vue?vue&type=template&id=23fce048&");


/***/ }),

/***/ "./resources/js/Pages/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/header/Dropdown2.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=template&id=6e124328&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=template&id=6e124328& ***!
  \***********************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Header.vue?vue&type=template&id=32c09394&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Header.vue?vue&type=template&id=32c09394& ***!
  \********************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Menu.vue?vue&type=template&id=23fce048&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Menu.vue?vue&type=template&id=23fce048& ***!
  \******************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/header/Dropdown2.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7b2a1e9b", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__.default)(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__.default)(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listToStyles)
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Store": () => (/* binding */ Store),
/* harmony export */   "createLogger": () => (/* binding */ createLogger),
/* harmony export */   "createNamespacedHelpers": () => (/* binding */ createNamespacedHelpers),
/* harmony export */   "install": () => (/* binding */ install),
/* harmony export */   "mapActions": () => (/* binding */ mapActions),
/* harmony export */   "mapGetters": () => (/* binding */ mapGetters),
/* harmony export */   "mapMutations": () => (/* binding */ mapMutations),
/* harmony export */   "mapState": () => (/* binding */ mapState)
/* harmony export */ });
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof __webpack_require__.g !== 'undefined'
    ? __webpack_require__.g
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);



/***/ })

}]);