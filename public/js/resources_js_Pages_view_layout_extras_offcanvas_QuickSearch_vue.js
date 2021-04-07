(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_view_layout_extras_offcanvas_QuickSearch_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/store/auth.module */ "./resources/js/Pages/core/services/store/auth.module.js");
/* harmony import */ var _assets_js_layout_extended_quick_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/layout/extended/quick-search.js */ "./resources/js/Pages/assets/js/layout/extended/quick-search.js");
/* harmony import */ var _assets_js_components_offcanvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/js/components/offcanvas.js */ "./resources/js/Pages/assets/js/components/offcanvas.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "KTQuickSearch",
  data: function data() {
    return {
      list1: [{
        title: "AirPlus Requirements",
        desc: "by Grog John",
        svg: "media/svg/files/doc.svg"
      }, {
        title: "TechNav Documentation",
        desc: "by Mary Broun",
        svg: "media/svg/files/pdf.svg"
      }, {
        title: "All Framework Docs",
        desc: "by Nick Stone",
        svg: "media/svg/files/xml.svg"
      }, {
        title: "Finance & Accounting Reports",
        desc: "by Jhon Larson",
        svg: "media/svg/files/csv.svg"
      }],
      list2: [{
        title: "Milena Gibson",
        desc: "UI Designer",
        svg: "media/users/300_20.jpg"
      }, {
        title: "Stefan JohnStefan",
        desc: "Marketing Manager",
        svg: "media/users/300_15.jpg"
      }, {
        title: "Anna Strong",
        desc: "Software Developer",
        svg: "media/users/300_16.jpg"
      }, {
        title: "Nick Bold",
        desc: "Active Customer",
        svg: "media/users/300_12.jpg"
      }],
      list3: [{
        title: "79 PSD files generated",
        desc: "by Grog John",
        "class": "flaticon-psd text-primary"
      }, {
        title: "$2900 worth products sold",
        desc: "Total 234 items",
        "class": "flaticon2-supermarket text-warning"
      }, {
        title: "4 New items submitted",
        desc: "Marketing Manager",
        "class": "flaticon-safe-shield-protection text-primary"
      }, {
        title: "4 New items submitted",
        desc: "Marketing Manager",
        "class": "flaticon-safe-shield-protection text-warning"
      }]
    };
  },
  mounted: function mounted() {
    // Init Quick User Panel
    _assets_js_layout_extended_quick_search_js__WEBPACK_IMPORTED_MODULE_1__.default.init(this.$refs["kt_quick_search"]);
  },
  methods: {
    onLogout: function onLogout() {
      var _this = this;

      this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_0__.LOGOUT).then(function () {
        return _this.$router.push({
          name: "login"
        });
      });
    },
    closeOffcanvas: function closeOffcanvas() {
      new _assets_js_components_offcanvas_js__WEBPACK_IMPORTED_MODULE_2__.default(_assets_js_layout_extended_quick_search_js__WEBPACK_IMPORTED_MODULE_1__.default.getElement()).hide();
    }
  },
  computed: {
    picture: function picture() {
      return process.env.BASE_URL + "media/users/300_21.jpg";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#kt_quick_user[data-v-28d20385] {\n  overflow: hidden;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuickSearch_vue_vue_type_template_id_28d20385_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickSearch.vue?vue&type=template&id=28d20385&scoped=true& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=template&id=28d20385&scoped=true&");
/* harmony import */ var _QuickSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickSearch.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=script&lang=js&");
/* harmony import */ var _QuickSearch_vue_vue_type_style_index_0_id_28d20385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _QuickSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuickSearch_vue_vue_type_template_id_28d20385_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuickSearch_vue_vue_type_template_id_28d20385_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "28d20385",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=template&id=28d20385&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=template&id=28d20385&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickSearch_vue_vue_type_template_id_28d20385_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickSearch_vue_vue_type_template_id_28d20385_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickSearch_vue_vue_type_template_id_28d20385_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickSearch.vue?vue&type=template&id=28d20385&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=template&id=28d20385&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickSearch_vue_vue_type_style_index_0_id_28d20385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickSearch_vue_vue_type_style_index_0_id_28d20385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickSearch_vue_vue_type_style_index_0_id_28d20385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickSearch_vue_vue_type_style_index_0_id_28d20385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickSearch_vue_vue_type_style_index_0_id_28d20385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=template&id=28d20385&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=template&id=28d20385&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "topbar-item mr-3" }, [
    _c(
      "a",
      {
        staticClass: "btn btn-icon btn-clean btn-lg mb-1 position-relative",
        attrs: { href: "#", id: "kt_quick_search_toggle" }
      },
      [
        _c(
          "span",
          { staticClass: "svg-icon svg-icon-xl" },
          [
            _c("inline-svg", {
              attrs: { src: "media/svg/icons/General/Search.svg" }
            })
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "kt_quick_search",
        staticClass: "offcanvas offcanvas-right p-10",
        attrs: { id: "kt_quick_search" }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "offcanvas-content" }, [
          _c(
            "div",
            {
              staticClass:
                "quick-search quick-search-offcanvas quick-search-has-result",
              attrs: { id: "kt_quick_search_offcanvas" }
            },
            [
              _c(
                "form",
                {
                  staticClass: "quick-search-form border-bottom pt-5 pb-1",
                  attrs: { method: "get" }
                },
                [
                  _c("div", { staticClass: "input-group" }, [
                    _c("div", { staticClass: "input-group-prepend" }, [
                      _c("span", { staticClass: "input-group-text" }, [
                        _c(
                          "span",
                          { staticClass: "svg-icon svg-icon-lg" },
                          [
                            _c("inline-svg", {
                              attrs: {
                                src: "media/svg/icons/General/Search.svg"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Search..." }
                    }),
                    _vm._v(" "),
                    _vm._m(1)
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "quick-search-wrapper pt-5" }, [
                _c("div", { staticClass: "quick-search-result" }, [
                  _c("div", { staticClass: "text-muted d-none" }, [
                    _vm._v("No record found")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "font-size-sm text-primary font-weight-bolder text-uppercase mb-2"
                    },
                    [_vm._v("\n              Documents\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-10" },
                    [
                      _vm._l(_vm.list1, function(item, i) {
                        return [
                          _c(
                            "div",
                            {
                              key: i,
                              staticClass:
                                "d-flex align-items-center flex-grow-1 mb-2"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "symbol symbol-30 bg-transparent flex-shrink-0"
                                },
                                [
                                  _c("img", {
                                    attrs: { src: item.svg, alt: "" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex flex-column ml-3 mt-2 mb-2"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "font-weight-bold text-dark text-hover-primary",
                                      attrs: { href: "#" }
                                    },
                                    [_vm._v(_vm._s(item.title))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-size-sm font-weight-bold text-muted"
                                    },
                                    [_vm._v(_vm._s(item.desc))]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "font-size-sm text-primary font-weight-bolder text-uppercase mb-2"
                    },
                    [_vm._v("\n              Members\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-10" },
                    [
                      _vm._l(_vm.list2, function(item, i) {
                        return [
                          _c(
                            "div",
                            {
                              key: i,
                              staticClass:
                                "d-flex align-items-center flex-grow-1 mb-2"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "symbol symbol-30 bg-transparent flex-shrink-0"
                                },
                                [
                                  _c("img", {
                                    attrs: { src: item.svg, alt: "" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex flex-column ml-3 mt-2 mb-2"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "font-weight-bold text-dark text-hover-primary",
                                      attrs: { href: "#" }
                                    },
                                    [_vm._v(_vm._s(item.title))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-size-sm font-weight-bold text-muted"
                                    },
                                    [_vm._v(_vm._s(item.desc))]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "font-size-sm text-primary font-weight-bolder text-uppercase mb-2"
                    },
                    [_vm._v("\n              Files\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-10" },
                    [
                      _vm._l(_vm.list3, function(item, i) {
                        return [
                          _c(
                            "div",
                            {
                              key: i,
                              staticClass:
                                "d-flex align-items-center flex-grow-1 mb-2"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "symbol symbol-30 flex-shrink-0"
                                },
                                [
                                  _c("div", { staticClass: "symbol-label" }, [
                                    _c("i", { class: "" + item.class })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex flex-column ml-3 mt-2 mb-2"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "font-weight-bold text-dark text-hover-primary",
                                      attrs: { href: "#" }
                                    },
                                    [_vm._v(_vm._s(item.title))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-size-sm font-weight-bold text-muted"
                                    },
                                    [_vm._v(_vm._s(item.desc))]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      })
                    ],
                    2
                  )
                ])
              ])
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "offcanvas-header d-flex align-items-center justify-content-between mb-5"
      },
      [
        _c("h3", { staticClass: "font-weight-bold m-0" }, [
          _vm._v("\n        Search\n        "),
          _c("small", { staticClass: "text-muted font-size-sm ml-2" }, [
            _vm._v("files, reports, members")
          ])
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-xs btn-icon btn-light btn-hover-primary",
            attrs: { href: "#", id: "kt_quick_search_close" }
          },
          [_c("i", { staticClass: "ki ki-close icon-xs text-muted" })]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", {
          staticClass: "quick-search-close ki ki-close icon-sm text-muted"
        })
      ])
    ])
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickSearch.vue?vue&type=style&index=0&id=28d20385&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3960e4e2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);