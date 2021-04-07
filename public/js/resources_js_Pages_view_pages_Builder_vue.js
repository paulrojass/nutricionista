(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_view_pages_Builder_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/pages/Builder.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/pages/Builder.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/store/breadcrumbs.module */ "./resources/js/Pages/core/services/store/breadcrumbs.module.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "builder",
  components: {},
  data: function data() {
    return {
      tabIndex: 0
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["layoutConfig"])), {}, {
    config: function config() {
      return this.layoutConfig();
    }
  }),
  mounted: function mounted() {
    var _this = this;

    // set the tab from previous
    this.setActivePreviousTab();
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__.SET_BREADCRUMB, [{
      title: "Layout Builder"
    }]);
    this.$nextTick(function () {
      var hljs = _this.$el.querySelectorAll(".hljs");

      hljs.forEach(function (hl) {
        hl.classList.remove("hljs");
        hl.classList.add("language-".concat(hl.classList[1]));
      });
    });
  },
  destroyed: function destroyed() {
    localStorage.removeItem("builderTab");
  },
  methods: {
    /**
     * Reset config
     */
    reset: function reset(event) {
      event.preventDefault(); // remove existing saved config

      localStorage.removeItem("config");
      window.location.reload();
    },

    /**
     * Set previous tab active
     */
    setActivePreviousTab: function setActivePreviousTab() {
      this.tabIndex = parseInt(localStorage.getItem("builderTab")) || 0;
      var links = this.$refs["builder-tab"].querySelectorAll(".nav-link"); // remove active tab links

      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      this.$refs["builder-tab"].querySelector("[data-tab=\"".concat(this.tabIndex, "\"]")).classList.add("active");
    },

    /**
     * Set current active on click
     * @param event
     */
    setActiveTab: function setActiveTab(event) {
      var tab = event.target.closest('[role="tablist"]');
      var links = tab.querySelectorAll(".nav-link"); // remove active tab links

      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      } // set clicked tab index to bootstrap tab


      this.tabIndex = parseInt(event.target.getAttribute("data-tab")); // set current active tab

      event.target.classList.add("active"); // keep active tab

      localStorage.setItem("builderTab", this.tabIndex);
    },

    /**
     * Submit form
     * @param event
     */
    submit: function submit(event) {
      event.preventDefault(); // save new config to localStorage

      localStorage.setItem("config", JSON.stringify(this.config));
      window.location.reload();
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/view/pages/Builder.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/view/pages/Builder.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Builder_vue_vue_type_template_id_2c5b5ee2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.vue?vue&type=template&id=2c5b5ee2& */ "./resources/js/Pages/view/pages/Builder.vue?vue&type=template&id=2c5b5ee2&");
/* harmony import */ var _Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Builder.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/pages/Builder.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Builder_vue_vue_type_template_id_2c5b5ee2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Builder_vue_vue_type_template_id_2c5b5ee2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/pages/Builder.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/pages/Builder.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/view/pages/Builder.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Builder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/pages/Builder.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/pages/Builder.vue?vue&type=template&id=2c5b5ee2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/view/pages/Builder.vue?vue&type=template&id=2c5b5ee2& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_template_id_2c5b5ee2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_template_id_2c5b5ee2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_template_id_2c5b5ee2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Builder.vue?vue&type=template&id=2c5b5ee2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/pages/Builder.vue?vue&type=template&id=2c5b5ee2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/pages/Builder.vue?vue&type=template&id=2c5b5ee2&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/pages/Builder.vue?vue&type=template&id=2c5b5ee2& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "alert alert-custom alert-white alert-shadow gutter-b",
        attrs: { role: "alert" }
      },
      [
        _c("div", { staticClass: "alert-icon alert-icon-top" }, [
          _c(
            "span",
            { staticClass: "svg-icon svg-icon-3x svg-icon-primary mt-4" },
            [
              _c("inline-svg", {
                attrs: { src: "media/svg/icons/Tools/Tools.svg" }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "card card-custom gutter-b" }, [
      _c("div", { staticClass: "card-header card-header-tabs-line" }, [
        _c(
          "ul",
          {
            ref: "builder-tab",
            staticClass: "nav nav-dark nav-bold nav-tabs nav-tabs-line",
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
                [_vm._v("\n            Page\n          ")]
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
                [_vm._v("\n            Header\n          ")]
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
                [_vm._v("\n            Subheader\n          ")]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  attrs: {
                    "data-tab": "3",
                    "data-toggle": "tab",
                    href: "#",
                    role: "tab"
                  },
                  on: { click: _vm.setActiveTab }
                },
                [_vm._v("\n            Content\n          ")]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  attrs: {
                    "data-tab": "5",
                    "data-toggle": "tab",
                    href: "#",
                    role: "tab"
                  },
                  on: { click: _vm.setActiveTab }
                },
                [_vm._v("\n            Footer\n          ")]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "form",
          on: {
            submit: function($event) {
              return _vm.submit($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "card-body" },
            [
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
                  _c("b-tab", { attrs: { active: "" } }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-lg-3 col-form-label" }, [
                        _vm._v("\n                Page Loader:\n              ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-xl-4" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.config.loader.type,
                                expression: "config.loader.type"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.config.loader,
                                  "type",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "false" } }, [
                              _vm._v(
                                "\n                    Disabled\n                  "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                attrs: {
                                  value: "spinner-logo",
                                  selected: "selected"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                    Spinner & Logo\n                  "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-text text-muted" }, [
                          _vm._v(
                            "\n                  Select page loading indicator.\n                "
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-tab", [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-lg-3 col-form-label" }, [
                        _vm._v(
                          "\n                Mobile Fixed Header:\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-xl-4" }, [
                        _c("span", { staticClass: "switch switch-icon" }, [
                          _c("label", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.config.header.self.fixed.mobile,
                                  expression: "config.header.self.fixed.mobile"
                                }
                              ],
                              attrs: {
                                type: "checkbox",
                                value: "true",
                                checked: ""
                              },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.config.header.self.fixed.mobile
                                )
                                  ? _vm._i(
                                      _vm.config.header.self.fixed.mobile,
                                      "true"
                                    ) > -1
                                  : _vm.config.header.self.fixed.mobile
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.config.header.self.fixed.mobile,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "true",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.config.header.self.fixed,
                                          "mobile",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.config.header.self.fixed,
                                          "mobile",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(
                                      _vm.config.header.self.fixed,
                                      "mobile",
                                      $$c
                                    )
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-text text-muted" }, [
                          _vm._v(
                            "\n                  Enable fixed header for mobile mode\n                "
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-tab", [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-lg-3 col-form-label" }, [
                        _vm._v(
                          "\n                Display Subheader:\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-xl-4" }, [
                        _c("span", { staticClass: "switch switch-icon" }, [
                          _c("label", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.config.subheader.display,
                                  expression: "config.subheader.display"
                                }
                              ],
                              attrs: {
                                type: "checkbox",
                                value: "true",
                                checked: ""
                              },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.config.subheader.display
                                )
                                  ? _vm._i(
                                      _vm.config.subheader.display,
                                      "true"
                                    ) > -1
                                  : _vm.config.subheader.display
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.config.subheader.display,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "true",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.config.subheader,
                                          "display",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.config.subheader,
                                          "display",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(
                                      _vm.config.subheader,
                                      "display",
                                      $$c
                                    )
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-text text-muted" }, [
                          _vm._v("Display subheader")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-lg-3 col-form-label" }, [
                        _vm._v("Width:")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-xl-4" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.config.subheader.width,
                                expression: "config.subheader.width"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.config.subheader,
                                  "width",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "fluid", selected: "" } },
                              [_vm._v("Fluid")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "fixed" } }, [
                              _vm._v("Fixed")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-text text-muted" }, [
                          _vm._v(
                            "\n                  Select layout width type.\n                "
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-tab", [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-lg-3 col-form-label" }, [
                        _vm._v("Width:")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-xl-4" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.config.content.width,
                                expression: "config.content.width"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.config.content,
                                  "width",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "fluid" } }, [
                              _vm._v("Fluid")
                            ]),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "fixed", selected: "" } },
                              [_vm._v("Fixed")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-text text-muted" }, [
                          _vm._v(
                            "\n                  Select layout width type.\n                "
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-tab", [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-lg-3 col-form-label" }, [
                        _vm._v("Fixed Footer:")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-xl-4" }, [
                        _c("span", { staticClass: "switch switch-icon" }, [
                          _c("label", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.config.footer.fixed,
                                  expression: "config.footer.fixed"
                                }
                              ],
                              attrs: {
                                type: "checkbox",
                                value: "true",
                                checked: ""
                              },
                              domProps: {
                                checked: Array.isArray(_vm.config.footer.fixed)
                                  ? _vm._i(_vm.config.footer.fixed, "true") > -1
                                  : _vm.config.footer.fixed
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.config.footer.fixed,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "true",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.config.footer,
                                          "fixed",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.config.footer,
                                          "fixed",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.config.footer, "fixed", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-text text-muted" }, [
                          _vm._v(
                            "\n                  Set fixed footer for desktop mode only\n                "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-lg-3 col-form-label" }, [
                        _vm._v("Width:")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-xl-4" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.config.footer.width,
                                expression: "config.footer.width"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.config.footer,
                                  "width",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "fluid", selected: "" } },
                              [_vm._v("Fluid")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "fixed" } }, [
                              _vm._v("Fixed")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-text text-muted" }, [
                          _vm._v(
                            "\n                  Select layout width type.\n                "
                          )
                        ])
                      ])
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-3" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9" }, [
                _vm._m(1),
                _vm._v("\n             \n            "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-clean font-weight-bold",
                    on: {
                      click: function($event) {
                        return _vm.reset($event)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "la la-recycle" }),
                    _vm._v("\n              Reset\n            ")
                  ]
                )
              ])
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card card-custom gutter-b" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "example mb-10" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "example-code" }, [
            _c("div", { staticClass: "example-code" }, [
              _c("span", {
                directives: [
                  {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover.top",
                    value: "Copy code",
                    expression: "'Copy code'",
                    modifiers: { hover: true, top: true }
                  }
                ],
                staticClass: "example-copy"
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "example-highlight" },
                [
                  _c(
                    "highlight-code",
                    { staticClass: "language-json", attrs: { lang: "json" } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.config) +
                          "\n              "
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert-text" }, [
      _c("p", [
        _vm._v(
          "\n        The layout builder helps to configure the layout with preferred\n        options and preview it in real time. The configured layout options\n        will be saved until you change or reset them. To use the layout\n        builder choose the layout options and click the\n        "
        ),
        _c("code", [_vm._v("Preview")]),
        _vm._v(" button to preview the changes.\n      ")
      ]),
      _vm._v(" "),
      _c("p", [
        _c(
          "span",
          {
            staticClass:
              "label label-inline label-pill label-info label-rounded mr-2"
          },
          [_vm._v("\n          INFO:\n        ")]
        ),
        _vm._v("\n        Some pages from the "),
        _c("code", [_vm._v("html")]),
        _vm._v(" version might not exist in the\n        "),
        _c("code", [_vm._v("vue")]),
        _vm._v(". But the CSS styles from "),
        _c("code", [_vm._v("html")]),
        _vm._v(" version\n        already integrated into the "),
        _c("code", [_vm._v("vue")]),
        _vm._v(". All the components from\n        the "),
        _c("code", [_vm._v("html")]),
        _vm._v(
          " version are static and non-working components.\n        You can copy the component HTML from the "
        ),
        _c("code", [_vm._v("html")]),
        _vm._v(" version,\n        and paste it in the "),
        _c("code", [_vm._v("vue")]),
        _vm._v(
          " component to get the same style.\n        The actual functionality and implementation need to be done by the\n        customer because every application has its own business requirements.\n      "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary font-weight-bold",
        attrs: { type: "submit" }
      },
      [
        _c("i", { staticClass: "la la-eye" }),
        _vm._v("\n              Preview\n            ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "card-title" }, [
        _c("h3", { staticClass: "card-label" }, [_vm._v("Generated Config")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("\n          Use for layout config in\n          "),
      _c("code", [_vm._v("/src/core/config/layout.config.json")])
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


/***/ })

}]);