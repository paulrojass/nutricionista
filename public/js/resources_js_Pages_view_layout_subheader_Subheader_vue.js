(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_view_layout_subheader_Subheader_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "KTSubheader",
  props: {
    breadcrumbs: Array,
    title: String
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["layoutConfig"])), {}, {
    /**
     * Check if subheader width is fluid
     */
    widthFluid: function widthFluid() {
      return this.layoutConfig("subheader.width") === "fluid";
    },
    subheaderClasses: function subheaderClasses() {
      var classes = [];
      var style = this.layoutConfig("subheader.style");

      if (style) {
        classes.push(style);

        if (style === "solid") {
          classes.push("bg-white");
        }

        if (this.layoutConfig("subheader.fixed")) {
          classes.push("border-top");
        }
      }

      return classes.join(" ");
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".custom-v-dropdown.dropdown-toggle {\n  padding: 0;\n}\n.custom-v-dropdown.dropdown-toggle:hover {\n  text-decoration: none;\n}\n.custom-v-dropdown.dropdown-toggle.dropdown-toggle-no-caret:after {\n  content: none;\n}\n.custom-v-dropdown.dropdown-menu {\n  margin: 0;\n  padding: 0;\n  outline: none;\n}\n.custom-v-dropdown.dropdown-menu .b-dropdown-text {\n  padding: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Pages/view/layout/subheader/Subheader.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/view/layout/subheader/Subheader.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Subheader_vue_vue_type_template_id_20a6dcb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subheader.vue?vue&type=template&id=20a6dcb7& */ "./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=template&id=20a6dcb7&");
/* harmony import */ var _Subheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subheader.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=script&lang=js&");
/* harmony import */ var _Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subheader.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Subheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Subheader_vue_vue_type_template_id_20a6dcb7___WEBPACK_IMPORTED_MODULE_0__.render,
  _Subheader_vue_vue_type_template_id_20a6dcb7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/layout/subheader/Subheader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subheader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=template&id=20a6dcb7&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=template&id=20a6dcb7& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_template_id_20a6dcb7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_template_id_20a6dcb7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_template_id_20a6dcb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subheader.vue?vue&type=template&id=20a6dcb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=template&id=20a6dcb7&");


/***/ }),

/***/ "./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subheader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=template&id=20a6dcb7&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=template&id=20a6dcb7& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "subheader py-2 py-lg-4",
      class: _vm.subheaderClasses,
      attrs: { id: "kt_subheader" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap",
          class: {
            "container-fluid": _vm.widthFluid,
            container: !_vm.widthFluid
          }
        },
        [
          _c(
            "div",
            { staticClass: "d-flex align-items-center flex-wrap mr-1" },
            [
              _c(
                "h5",
                { staticClass: "text-dark font-weight-bold my-2 mr-5" },
                [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")]
              ),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass:
                    "breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2"
                },
                [
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "subheader-breadcrumbs-home",
                          attrs: { to: "/" }
                        },
                        [
                          _c("i", {
                            staticClass: "flaticon2-shelter text-muted icon-1x"
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.breadcrumbs, function(breadcrumb, i) {
                    return [
                      _c(
                        "li",
                        {
                          key: i + "-" + breadcrumb.id,
                          staticClass: "breadcrumb-item"
                        },
                        [
                          breadcrumb.route
                            ? _c(
                                "router-link",
                                {
                                  key: i,
                                  staticClass: "text-muted",
                                  attrs: { to: breadcrumb.route }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(breadcrumb.title) +
                                      "\n            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !breadcrumb.route
                            ? _c(
                                "span",
                                { key: i, staticClass: "text-muted" },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(breadcrumb.title) +
                                      "\n            "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  })
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex align-items-center" },
            [
              _c(
                "a",
                {
                  staticClass: "btn btn-white font-weight-bold btn-sm",
                  attrs: { href: "#" }
                },
                [_vm._v("\n        Actions\n      ")]
              ),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  directives: [
                    {
                      name: "b-tooltip",
                      rawName: "v-b-tooltip.hover",
                      value: "Quick actions",
                      expression: "'Quick actions'",
                      modifiers: { hover: true }
                    }
                  ],
                  attrs: {
                    size: "sm",
                    variant: "link",
                    "toggle-class": "custom-v-dropdown",
                    "no-caret": "",
                    right: "",
                    "no-flip": "",
                    text: "Actions"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "button-content",
                      fn: function() {
                        return [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-icon",
                              attrs: { href: "#", "data-toggle": "dropdown" }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "svg-icon svg-icon-success svg-icon-2x"
                                },
                                [
                                  _c("inline-svg", {
                                    attrs: {
                                      src: "media/svg/icons/Files/File-plus.svg"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "navi navi-hover min-w-md-250px" },
                    [
                      _c(
                        "b-dropdown-text",
                        {
                          staticClass: "navi-header font-weight-bold",
                          attrs: { tag: "div" }
                        },
                        [
                          _vm._v("\n            Jump to:\n            "),
                          _c("i", {
                            directives: [
                              {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: { hover: true }
                              }
                            ],
                            staticClass: "flaticon2-information",
                            attrs: {
                              "data-toggle": "tooltip",
                              "data-placement": "left",
                              title: "Click to learn more..."
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-dropdown-text", {
                        staticClass: "navi-separator mb-3",
                        attrs: { tag: "div" }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-text",
                        { staticClass: "navi-item", attrs: { tag: "div" } },
                        [
                          _c(
                            "a",
                            { staticClass: "navi-link", attrs: { href: "#" } },
                            [
                              _c("span", { staticClass: "navi-icon" }, [
                                _c("i", { staticClass: "flaticon2-drop" })
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "navi-text" }, [
                                _vm._v("Recent Orders")
                              ])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-text",
                        { staticClass: "navi-item", attrs: { tag: "div" } },
                        [
                          _c(
                            "a",
                            { staticClass: "navi-link", attrs: { href: "#" } },
                            [
                              _c("span", { staticClass: "navi-icon" }, [
                                _c("i", { staticClass: "flaticon2-calendar-8" })
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "navi-text" }, [
                                _vm._v("Support Cases")
                              ])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-text",
                        { staticClass: "navi-item", attrs: { tag: "div" } },
                        [
                          _c(
                            "a",
                            { staticClass: "navi-link", attrs: { href: "#" } },
                            [
                              _c("span", { staticClass: "navi-icon" }, [
                                _c("i", {
                                  staticClass: "flaticon2-telegram-logo"
                                })
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "navi-text" }, [
                                _vm._v("Projects")
                              ])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-text",
                        { staticClass: "navi-item", attrs: { tag: "div" } },
                        [
                          _c(
                            "a",
                            { staticClass: "navi-link", attrs: { href: "#" } },
                            [
                              _c("span", { staticClass: "navi-icon" }, [
                                _c("i", { staticClass: "flaticon2-new-email" })
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "navi-text" }, [
                                _vm._v("Messages")
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "navi-label" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "label label-success label-rounded"
                                  },
                                  [_vm._v("5")]
                                )
                              ])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-dropdown-text", {
                        staticClass: "navi-separator mt-3",
                        attrs: { tag: "div" }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-text",
                        { staticClass: "navi-footer", attrs: { tag: "div" } },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "btn btn-light-primary font-weight-bolder btn-sm",
                              attrs: { href: "#" }
                            },
                            [_vm._v("Upgrade plan")]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "b-tooltip",
                                  rawName: "v-b-tooltip.hover",
                                  modifiers: { hover: true }
                                }
                              ],
                              staticClass:
                                "btn btn-clean font-weight-bold btn-sm",
                              attrs: {
                                href: "#",
                                "data-toggle": "tooltip",
                                "data-placement": "left",
                                title: "Click to learn more..."
                              }
                            },
                            [_vm._v("Learn more")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subheader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("80bb3f90", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);