(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_view_layout_extras_dropdown_DropdownNotification_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KTDropdownNotification",
  data: function data() {
    return {
      tabIndex: 0,
      list1: [{
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "primary",
        svg: process.env.BASE_URL + "media/svg/icons/Home/Library.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "warning",
        svg: process.env.BASE_URL + "media/svg/icons/Communication/Write.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "success",
        svg: process.env.BASE_URL + "media/svg/icons/Communication/Group-chat.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "danger",
        svg: process.env.BASE_URL + "media/svg/icons/General/Attachment2.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "info",
        svg: process.env.BASE_URL + "media/svg/icons/Communication/Shield-user.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "info",
        svg: process.env.BASE_URL + "media/svg/icons/Communication/Mail-notification.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "info",
        svg: process.env.BASE_URL + "media/svg/icons/Design/Bucket.svg"
      }],
      list2: [{
        title: "New report has been received",
        desc: "23 hrs ago",
        icon: "flaticon2-line-chart text-success"
      }, {
        title: "Finance report has been generated",
        desc: "25 hrs ago",
        icon: "flaticon2-paper-plane text-danger"
      }, {
        title: "New order has been received",
        desc: "2 hrs ago",
        icon: "flaticon2-user flaticon2-line- text-success"
      }, {
        title: "New customer is registered",
        desc: "3 hrs ago",
        icon: "flaticon2-pin text-primary"
      }, {
        title: "Application has been approved",
        desc: "3 hrs ago",
        icon: "flaticon2-sms text-danger"
      }, {
        title: "New file has been uploaded",
        desc: "5 hrs ago",
        icon: "flaticon2-pie-chart-3 text-warning"
      }, {
        title: "New user feedback received",
        desc: "8 hrs ago",
        icon: "flaticon-pie-chart-1 text-info"
      }, {
        title: "System reboot has been successfully completed",
        desc: "12 hrs ago",
        icon: "flaticon2-settings text-success"
      }, {
        title: "New order has been placed",
        desc: "15 hrs ago",
        icon: "flaticon-safe-shield-protection text-primary"
      }, {
        title: "Company meeting canceled",
        desc: "19 hrs ago",
        icon: "flaticon2-notification text-primary"
      }, {
        title: "New report has been received",
        desc: "23 hrs ago",
        icon: "flaticon2-fax text-success"
      }, {
        title: "Finance report has been generated",
        desc: "25 hrs ago",
        icon: "flaticon-download-1 text-danger"
      }]
    };
  },
  methods: {
    setActiveTab: function setActiveTab(event) {
      var tab = event.target.closest('[role="tablist"]');
      var links = tab.querySelectorAll(".nav-link"); // remove active tab links

      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      } // set clicked tab index to bootstrap tab


      this.tabIndex = parseInt(event.target.getAttribute("data-tab")); // set current active tab

      event.target.classList.add("active");
    }
  },
  computed: {
    backgroundImage: function backgroundImage() {
      return process.env.BASE_URL + "media/misc/bg-1.jpg";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* hide default vue-bootstrap tab links */\n.hide-tabs > div:not(.tab-content) {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DropdownNotification_vue_vue_type_template_id_83c1b69c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownNotification.vue?vue&type=template&id=83c1b69c& */ "./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=83c1b69c&");
/* harmony import */ var _DropdownNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownNotification.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js&");
/* harmony import */ var _DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownNotification.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _DropdownNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DropdownNotification_vue_vue_type_template_id_83c1b69c___WEBPACK_IMPORTED_MODULE_0__.render,
  _DropdownNotification_vue_vue_type_template_id_83c1b69c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=83c1b69c&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=83c1b69c& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_template_id_83c1b69c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_template_id_83c1b69c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_template_id_83c1b69c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownNotification.vue?vue&type=template&id=83c1b69c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=83c1b69c&");


/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownNotification.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=83c1b69c&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=83c1b69c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        {
          staticClass:
            "d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top",
          style: { backgroundImage: "url(" + _vm.backgroundImage + ")" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass:
                "nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-3 px-8",
              attrs: { role: "tablist" }
            },
            [
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link active",
                    attrs: {
                      "data-tab": "0",
                      "data-toggle": "tab",
                      href: "#",
                      role: "tab"
                    },
                    on: { click: _vm.setActiveTab }
                  },
                  [_vm._v("\n          Alerts\n        ")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      "data-tab": "1",
                      "data-toggle": "tab",
                      href: "#",
                      role: "tab"
                    },
                    on: { click: _vm.setActiveTab }
                  },
                  [_vm._v("\n          Events\n        ")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      "data-tab": "2",
                      "data-toggle": "tab",
                      href: "#",
                      role: "tab"
                    },
                    on: { click: _vm.setActiveTab }
                  },
                  [_vm._v("\n          Logs\n        ")]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-tabs",
        {
          staticClass: "hide-tabs",
          model: {
            value: _vm.tabIndex,
            callback: function($$v) {
              _vm.tabIndex = $$v
            },
            expression: "tabIndex"
          }
        },
        [
          _c(
            "b-tab",
            { staticClass: "p-8", attrs: { active: "" } },
            [
              _c(
                "perfect-scrollbar",
                {
                  staticClass: "scroll pr-7 mr-n7",
                  staticStyle: { "max-height": "40vh", position: "relative" }
                },
                [
                  _vm._l(_vm.list1, function(item, i) {
                    return [
                      _c(
                        "div",
                        {
                          key: i,
                          staticClass: "d-flex align-items-center mb-6"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "symbol symbol-40 mr-5",
                              class: "symbol-light-" + item.color
                            },
                            [
                              _c("span", { staticClass: "symbol-label" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass: "svg-icon svg-icon-lg",
                                    class: "svg-icon-" + item.color
                                  },
                                  [
                                    _c("inline-svg", {
                                      attrs: { src: item.svg }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "d-flex flex-column font-weight-bold"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "text-dark text-hover-primary mb-1 font-size-lg",
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
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.desc) +
                                    "\n              "
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ]
                  })
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tab",
            [
              _c(
                "perfect-scrollbar",
                {
                  staticClass: "navi navi-hover scroll my-4",
                  staticStyle: { "max-height": "40vh", position: "relative" }
                },
                [
                  _vm._l(_vm.list2, function(item, i) {
                    return [
                      _c(
                        "a",
                        {
                          key: i,
                          staticClass: "navi-item",
                          attrs: { href: "#" }
                        },
                        [
                          _c("div", { staticClass: "navi-link" }, [
                            _c("div", { staticClass: "navi-icon mr-2" }, [
                              _c("i", { class: item.icon })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "navi-text" }, [
                              _c("div", { staticClass: "font-weight-bold" }, [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(item.title) +
                                    "\n                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "text-muted" }, [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(item.desc) +
                                    "\n                "
                                )
                              ])
                            ])
                          ])
                        ]
                      )
                    ]
                  })
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("b-tab", [
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-center text-center text-muted min-h-200px"
              },
              [
                _vm._v("\n        All caught up!"),
                _c("br"),
                _vm._v("No new notifications.\n      ")
              ]
            )
          ])
        ],
        1
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
    return _c("h4", { staticClass: "d-flex flex-center rounded-top" }, [
      _c("span", { staticClass: "text-white" }, [_vm._v("User Notifications")]),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass:
            "btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2"
        },
        [_vm._v("\n        23 new\n      ")]
      )
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownNotification.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("345bc9ca", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);