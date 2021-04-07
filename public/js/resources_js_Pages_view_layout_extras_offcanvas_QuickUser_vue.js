(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_view_layout_extras_offcanvas_QuickUser_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/store/auth.module */ "./resources/js/Pages/core/services/store/auth.module.js");
/* harmony import */ var _assets_js_layout_extended_quick_user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/layout/extended/quick-user.js */ "./resources/js/Pages/assets/js/layout/extended/quick-user.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "KTQuickUser",
  data: function data() {
    return {
      list: [{
        title: "Another purpose persuade",
        desc: "Due in 2 Days",
        alt: "+28%",
        svg: "media/svg/icons/Home/Library.svg",
        type: "warning"
      }, {
        title: "Would be to people",
        desc: "Due in 2 Days",
        alt: "+50%",
        svg: "media/svg/icons/Communication/Write.svg",
        type: "success"
      }, {
        title: "Purpose would be to persuade",
        desc: "Due in 2 Days",
        alt: "-27%",
        svg: "media/svg/icons/Communication/Group-chat.svg",
        type: "danger"
      }, {
        title: "The best product",
        desc: "Due in 2 Days",
        alt: "+8%",
        svg: "media/svg/icons/General/Attachment2.svg",
        type: "info"
      }]
    };
  },
  mounted: function mounted() {
    // Init Quick User Panel
    _assets_js_layout_extended_quick_user_js__WEBPACK_IMPORTED_MODULE_1__.default.init(this.$refs["kt_quick_user"]);
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
      new _assets_js_components_offcanvas_js__WEBPACK_IMPORTED_MODULE_2__.default(_assets_js_layout_extended_quick_user_js__WEBPACK_IMPORTED_MODULE_1__.default.getElement()).hide();
    }
  },
  computed: {
    picture: function picture() {
      return process.env.BASE_URL + "media/users/300_21.jpg";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#kt_quick_user[data-v-bb4c6530] {\n  overflow: hidden;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuickUser_vue_vue_type_template_id_bb4c6530_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickUser.vue?vue&type=template&id=bb4c6530&scoped=true& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=bb4c6530&scoped=true&");
/* harmony import */ var _QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickUser.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _QuickUser_vue_vue_type_style_index_0_id_bb4c6530_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuickUser_vue_vue_type_template_id_bb4c6530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuickUser_vue_vue_type_template_id_bb4c6530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bb4c6530",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=bb4c6530&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=bb4c6530&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_template_id_bb4c6530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_template_id_bb4c6530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_template_id_bb4c6530_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickUser.vue?vue&type=template&id=bb4c6530&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=bb4c6530&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_style_index_0_id_bb4c6530_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_style_index_0_id_bb4c6530_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_style_index_0_id_bb4c6530_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_style_index_0_id_bb4c6530_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_style_index_0_id_bb4c6530_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=bb4c6530&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=bb4c6530&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "topbar-item" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "kt_quick_user",
        staticClass: "offcanvas offcanvas-right p-10",
        attrs: { id: "kt_quick_user" }
      },
      [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "perfect-scrollbar",
          {
            staticClass: "offcanvas-content pr-5 mr-n5 scroll",
            staticStyle: { "max-height": "90vh", position: "relative" }
          },
          [
            _c("div", { staticClass: "d-flex align-items-center mt-5" }, [
              _c("div", { staticClass: "symbol symbol-100 mr-5" }, [
                _c("img", {
                  staticClass: "symbol-label",
                  attrs: { src: _vm.picture, alt: "" }
                }),
                _vm._v(" "),
                _c("i", { staticClass: "symbol-badge bg-success" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex flex-column" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "font-weight-bold font-size-h5 text-dark-75 text-hover-primary",
                    attrs: { href: "#" }
                  },
                  [_vm._v("\n            James Jones\n          ")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-muted mt-1" }, [
                  _vm._v("Application Developer")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "navi mt-2" }, [
                  _c("a", { staticClass: "navi-item", attrs: { href: "#" } }, [
                    _c("span", { staticClass: "navi-link p-0 pb-2" }, [
                      _c("span", { staticClass: "navi-icon mr-1" }, [
                        _c(
                          "span",
                          {
                            staticClass: "svg-icon svg-icon-lg svg-icon-primary"
                          },
                          [
                            _c("inline-svg", {
                              attrs: {
                                src:
                                  "media/svg/icons/Communication/Mail-notification.svg"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "navi-text text-muted text-hover-primary"
                        },
                        [
                          _vm._v(
                            "\n                  jm@softplus.com\n                "
                          )
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light-primary btn-bold",
                    on: { click: _vm.onLogout }
                  },
                  [_vm._v("\n            Sign out\n          ")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "separator separator-dashed mt-8 mb-5" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "navi navi-spacer-x-0 p-0" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "navi-item",
                    attrs: { to: "/builder", href: "#" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.closeOffcanvas($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "navi-link" }, [
                      _c(
                        "div",
                        { staticClass: "symbol symbol-40 bg-light mr-3" },
                        [
                          _c("div", { staticClass: "symbol-label" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-success"
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src:
                                      "media/svg/icons/General/Notification2.svg"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "navi-text" }, [
                        _c("div", { staticClass: "font-weight-bold" }, [
                          _vm._v("My Profile")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-muted" }, [
                          _vm._v(
                            "\n                Account settings and more\n                "
                          ),
                          _c(
                            "span",
                            {
                              staticClass:
                                "label label-light-danger label-inline font-weight-bold"
                            },
                            [
                              _vm._v(
                                "\n                  update\n                "
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "navi-item",
                    attrs: { to: "/builder", href: "#" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.closeOffcanvas($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "navi-link" }, [
                      _c(
                        "div",
                        { staticClass: "symbol symbol-40 bg-light mr-3" },
                        [
                          _c("div", { staticClass: "symbol-label" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-warning"
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src:
                                      "media/svg/icons/Shopping/Chart-bar1.svg"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "navi-text" }, [
                        _c("div", { staticClass: "font-weight-bold" }, [
                          _vm._v("My Messages")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-muted" }, [
                          _vm._v("Inbox and tasks")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "navi-item",
                    attrs: { to: "/builder", href: "#" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.closeOffcanvas($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "navi-link" }, [
                      _c(
                        "div",
                        { staticClass: "symbol symbol-40 bg-light mr-3" },
                        [
                          _c("div", { staticClass: "symbol-label" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-danger"
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src:
                                      "media/svg/icons/Files/Selected-file.svg"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "navi-text" }, [
                        _c("div", { staticClass: "font-weight-bold" }, [
                          _vm._v("My Activities")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-muted" }, [
                          _vm._v("Logs and notifications")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "navi-item",
                    attrs: { to: "/builder", href: "#" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.closeOffcanvas($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "navi-link" }, [
                      _c(
                        "div",
                        { staticClass: "symbol symbol-40 bg-light mr-3" },
                        [
                          _c("div", { staticClass: "symbol-label" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-primary"
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src:
                                      "media/svg/icons/Communication/Mail-opened.svg"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "navi-text" }, [
                        _c("div", { staticClass: "font-weight-bold" }, [
                          _vm._v("My Tasks")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-muted" }, [
                          _vm._v("latest tasks and projects")
                        ])
                      ])
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "separator separator-dashed my-7" }),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h5", { staticClass: "mb-5" }, [
                  _vm._v("Recent Notifications")
                ]),
                _vm._v(" "),
                _vm._l(_vm.list, function(item, i) {
                  return [
                    _c(
                      "div",
                      {
                        key: i,
                        staticClass:
                          "d-flex align-items-center rounded p-5 gutter-b",
                        class: "bg-light-" + item.type
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "svg-icon mr-5",
                            class: "svg-icon-" + item.type
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "svg-icon svg-icon-lg" },
                              [_c("inline-svg", { attrs: { src: item.svg } })],
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-column flex-grow-1 mr-2"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1",
                                attrs: { href: "#" }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.title) +
                                    "\n              "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "text-muted font-size-sm" },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.desc) +
                                    "\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "font-weight-bolder py-1 font-size-lg",
                            class: "text-" + item.type
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(item.alt) +
                                "\n            "
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
          ]
        )
      ],
      1
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
          "btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2",
        attrs: { id: "kt_quick_user_toggle" }
      },
      [
        _c("div", { staticClass: "d-flex flex-column text-right pr-3" }, [
          _c(
            "span",
            {
              staticClass:
                "text-muted font-weight-bold font-size-base d-none d-md-inline"
            },
            [_vm._v("Sean")]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "text-dark-75 font-weight-bolder font-size-base d-none d-md-inline"
            },
            [_vm._v("UX Designer")]
          )
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "symbol symbol-35 symbol-light-primary" }, [
          _c(
            "span",
            { staticClass: "symbol-label font-size-h5 font-weight-bold" },
            [_vm._v("S")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "offcanvas-header d-flex align-items-center justify-content-between pb-5"
      },
      [
        _c("h3", { staticClass: "font-weight-bold m-0" }, [
          _vm._v("\n        User Profile\n        "),
          _c("small", { staticClass: "text-muted font-size-sm ml-2" }, [
            _vm._v("12 messages")
          ])
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-xs btn-icon btn-light btn-hover-primary",
            attrs: { href: "#", id: "kt_quick_user_close" }
          },
          [_c("i", { staticClass: "ki ki-close icon-xs text-muted" })]
        )
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=bb4c6530&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5e608a5e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);