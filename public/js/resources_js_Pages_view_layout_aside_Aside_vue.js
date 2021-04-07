(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_view_layout_aside_Aside_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_layout_base_aside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/layout/base/aside.js */ "./resources/js/Pages/assets/js/layout/base/aside.js");
/* harmony import */ var _extras_offcanvas_QuickNotifications_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extras/offcanvas/QuickNotifications.vue */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue");
/* harmony import */ var _extras_offcanvas_QuickActions_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extras/offcanvas/QuickActions.vue */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue");
/* harmony import */ var _extras_offcanvas_QuickPanel_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extras/offcanvas/QuickPanel.vue */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Aside",
  components: {
    KTQuickNotifications: _extras_offcanvas_QuickNotifications_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    KTQuickActions: _extras_offcanvas_QuickActions_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    KTQuickPanel: _extras_offcanvas_QuickPanel_vue__WEBPACK_IMPORTED_MODULE_3__.default
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      // Init Aside
      _assets_js_layout_base_aside_js__WEBPACK_IMPORTED_MODULE_0__.default.init(_this.$refs["kt_aside"]);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_layout_extended_quick_actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/js/layout/extended/quick-actions.js */ "./resources/js/Pages/assets/js/layout/extended/quick-actions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "KTQuickActions",
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    // Init Quick Actions Offcanvas Panel
    _assets_js_layout_extended_quick_actions_js__WEBPACK_IMPORTED_MODULE_0__.default.init(this.$refs["kt_quick_actions"]);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_layout_extended_quick_notifications_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/js/layout/extended/quick-notifications.js */ "./resources/js/Pages/assets/js/layout/extended/quick-notifications.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "KTQuickPanel",
  data: function data() {
    return {
      list1: [{
        title: "5 new user generated report",
        desc: "Reports based on sales",
        icon: "flaticon-bell text-success"
      }, {
        title: "2 new items submited",
        desc: "by Grog John",
        icon: "flaticon2-box text-danger"
      }, {
        title: "79 PSD files generated",
        desc: "Reports based on sales",
        icon: "flaticon-psd text-primary"
      }, {
        title: "$2900 worth producucts sold",
        desc: "Total 234 items",
        icon: "flaticon2-supermarket text-warning"
      }, {
        title: "4.5h-avarage response time",
        desc: "Fostest is Barry",
        icon: "flaticon-paper-plane-1 text-success"
      }, {
        title: "3 Defence alerts",
        desc: "40% less alerts thar last week",
        icon: "flaticon-safe-shield-protection text-danger"
      }, {
        title: "Avarage 4 blog posts per author",
        desc: "Most posted 12 time",
        icon: "flaticon-notepad text-primary"
      }, {
        title: "16 authors joined last week",
        desc: "9 photodrapehrs, 7 designer",
        icon: "flaticon-users-1 text-warning"
      }, {
        title: "2 new items have been submited",
        desc: "by Grog John",
        icon: "flaticon2-box text-info"
      }, {
        title: "2.8 GB-total downloads size",
        desc: "Mostly PSD end  AL concepts",
        icon: "flaticon2-download text-success"
      }, {
        title: "$2900 worth producucts sold",
        desc: "Total 234 items",
        icon: "flaticon2-supermarket text-danger"
      }, {
        title: "7 new user generated report",
        desc: "Reports based on sales",
        icon: "flaticon-bell text-primary"
      }, {
        title: "4.5h-avarage response time",
        desc: "Fostest is Barry",
        icon: "flaticon-paper-plane-1 text-success"
      }]
    };
  },
  mounted: function mounted() {
    // Init Quick Offcanvas Panel
    _assets_js_layout_extended_quick_notifications_js__WEBPACK_IMPORTED_MODULE_0__.default.init(this.$refs["kt_quick_notifications"]);
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_layout_extended_quick_panel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/js/layout/extended/quick-panel.js */ "./resources/js/Pages/assets/js/layout/extended/quick-panel.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "KTQuickPanel",
  data: function data() {
    return {
      tabIndex: 0,
      list1: [{
        title: "Top Authors",
        desc: "Most Successful Fellas",
        alt: "+82$",
        svg: "media/svg/misc/006-plurk.svg"
      }, {
        title: "Popular Authors",
        desc: "Most Successful Fellas",
        alt: "+280$",
        svg: "media/svg/misc/006-plurk.svg"
      }, {
        title: "New Users",
        desc: "Most Successful Fellas",
        alt: "+4500$",
        svg: "media/svg/misc/015-telegram.svg"
      }, {
        title: "Active Customers",
        desc: "Most Successful Fellas",
        alt: "+4500$",
        svg: "media/svg/misc/003-puzzle.svg"
      }],
      list2: [{
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
      }],
      list3: [{
        title: "5 new user generated report",
        desc: "Reports based on sales",
        icon: "flaticon-bell text-success"
      }, {
        title: "2 new items submited",
        desc: "by Grog John",
        icon: "flaticon2-box text-danger"
      }, {
        title: "79 PSD files generated",
        desc: "Reports based on sales",
        icon: "flaticon-psd text-primary"
      }, {
        title: "$2900 worth producucts sold",
        desc: "Total 234 items",
        icon: "flaticon2-supermarket text-warning"
      }, {
        title: "4.5h-avarage response time",
        desc: "Fostest is Barry",
        icon: "flaticon-paper-plane-1 text-success"
      }, {
        title: "3 Defence alerts",
        desc: "40% less alerts thar last week",
        icon: "flaticon-safe-shield-protection text-danger"
      }, {
        title: "Avarage 4 blog posts per author",
        desc: "Most posted 12 time",
        icon: "flaticon-notepad text-primary"
      }, {
        title: "16 authors joined last week",
        desc: "9 photodrapehrs, 7 designer",
        icon: "flaticon-users-1 text-warning"
      }, {
        title: "2 new items have been submited",
        desc: "by Grog John",
        icon: "flaticon2-box text-info"
      }, {
        title: "2.8 GB-total downloads size",
        desc: "Mostly PSD end  AL concepts",
        icon: "flaticon2-download text-success"
      }, {
        title: "$2900 worth producucts sold",
        desc: "Total 234 items",
        icon: "flaticon2-supermarket text-danger"
      }, {
        title: "7 new user generated report",
        desc: "Reports based on sales",
        icon: "flaticon-bell text-primary"
      }, {
        title: "4.5h-avarage response time",
        desc: "Fostest is Barry",
        icon: "flaticon-paper-plane-1 text-success"
      }]
    };
  },
  mounted: function mounted() {
    // Init Quick Offcanvas Panel
    _assets_js_layout_extended_quick_panel_js__WEBPACK_IMPORTED_MODULE_0__.default.init(this.$refs["kt_quick_panel"]);
  },
  methods: {
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

      event.target.classList.add("active");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* hide default vue-bootstrap tab links */\n.hide-tabs > div:not(.tab-content) {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Pages/view/layout/aside/Aside.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/view/layout/aside/Aside.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Aside_vue_vue_type_template_id_078ac14d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Aside.vue?vue&type=template&id=078ac14d& */ "./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=template&id=078ac14d&");
/* harmony import */ var _Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Aside.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=script&lang=js&");
/* harmony import */ var _Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Aside.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Aside_vue_vue_type_template_id_078ac14d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Aside_vue_vue_type_template_id_078ac14d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/layout/aside/Aside.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuickActions_vue_vue_type_template_id_73a41e70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickActions.vue?vue&type=template&id=73a41e70& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=73a41e70&");
/* harmony import */ var _QuickActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickActions.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuickActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuickActions_vue_vue_type_template_id_73a41e70___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuickActions_vue_vue_type_template_id_73a41e70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuickNotifications_vue_vue_type_template_id_d9de66ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickNotifications.vue?vue&type=template&id=d9de66ca& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=d9de66ca&");
/* harmony import */ var _QuickNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickNotifications.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuickNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuickNotifications_vue_vue_type_template_id_d9de66ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuickNotifications_vue_vue_type_template_id_d9de66ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuickPanel_vue_vue_type_template_id_3ee69eb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickPanel.vue?vue&type=template&id=3ee69eb7& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=3ee69eb7&");
/* harmony import */ var _QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickPanel.vue?vue&type=script&lang=js& */ "./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuickPanel_vue_vue_type_template_id_3ee69eb7___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuickPanel_vue_vue_type_template_id_3ee69eb7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Aside.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickNotifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=template&id=078ac14d&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=template&id=078ac14d& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_078ac14d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_078ac14d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_078ac14d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Aside.vue?vue&type=template&id=078ac14d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=template&id=078ac14d&");


/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=73a41e70&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=73a41e70& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickActions_vue_vue_type_template_id_73a41e70___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickActions_vue_vue_type_template_id_73a41e70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickActions_vue_vue_type_template_id_73a41e70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickActions.vue?vue&type=template&id=73a41e70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=73a41e70&");


/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=d9de66ca&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=d9de66ca& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickNotifications_vue_vue_type_template_id_d9de66ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickNotifications_vue_vue_type_template_id_d9de66ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickNotifications_vue_vue_type_template_id_d9de66ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickNotifications.vue?vue&type=template&id=d9de66ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=d9de66ca&");


/***/ }),

/***/ "./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=3ee69eb7&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=3ee69eb7& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_template_id_3ee69eb7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_template_id_3ee69eb7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_template_id_3ee69eb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickPanel.vue?vue&type=template&id=3ee69eb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=3ee69eb7&");


/***/ }),

/***/ "./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Aside.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=template&id=078ac14d&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=template&id=078ac14d& ***!
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
    "div",
    {
      ref: "kt_aside",
      staticClass: "aside aside-left d-flex flex-column",
      attrs: { id: "kt_aside" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "aside-brand d-flex flex-column align-items-center flex-column-auto pt-5 pt-lg-18 pb-10"
        },
        [
          _c(
            "div",
            {
              staticClass: "btn p-0 symbol symbol-60 symbol-light-primary",
              attrs: { id: "kt_quick_user_toggle" }
            },
            [
              _c("router-link", { attrs: { to: "/" } }, [
                _c(
                  "div",
                  { staticClass: "symbol-label" },
                  [
                    _c("inline-svg", {
                      staticClass: "h-75 align-self-end",
                      attrs: {
                        alt: "Logo",
                        src: "media/svg/avatars/001-boy.svg"
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "aside-nav d-flex flex-column align-items-center flex-column-fluid pb-10"
        },
        [
          _c("ul", { staticClass: "nav flex-column" }, [
            _c(
              "li",
              {
                directives: [
                  {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover.right",
                    value: "Latest Projects",
                    expression: "'Latest Projects'",
                    modifiers: { hover: true, right: true }
                  }
                ],
                staticClass: "nav-item mb-2"
              },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "nav-link btn btn-icon btn-hover-text-primary btn-lg active",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "svg-icon svg-icon-xxl" },
                      [
                        _c("inline-svg", {
                          attrs: {
                            src: "media/svg/icons/Layout/Layout-4-blocks.svg"
                          }
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
                directives: [
                  {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover.right",
                    value: "Metronic Features",
                    expression: "'Metronic Features'",
                    modifiers: { hover: true, right: true }
                  }
                ],
                staticClass: "nav-item mb-2"
              },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "nav-link btn btn-icon btn-hover-text-primary btn-lg",
                    attrs: {
                      href: "#",
                      "data-toggle": "tab",
                      "data-target": "#kt_aside_tab_2",
                      role: "tab"
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "svg-icon svg-icon-xxl" },
                      [
                        _c("inline-svg", {
                          attrs: {
                            src: "media/svg/icons/Communication/Group.svg"
                          }
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
                directives: [
                  {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover.right",
                    value: "Latest Reports",
                    expression: "'Latest Reports'",
                    modifiers: { hover: true, right: true }
                  }
                ],
                staticClass: "nav-item mb-2"
              },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "nav-link btn btn-icon btn-hover-text-primary btn-lg",
                    attrs: {
                      href: "#",
                      "data-toggle": "tab",
                      "data-target": "#kt_aside_tab_3",
                      role: "tab"
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "svg-icon svg-icon-xxl" },
                      [
                        _c("inline-svg", {
                          attrs: { src: "media/svg/icons/Media/Equalizer.svg" }
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
                directives: [
                  {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover.right",
                    value: "Project Management",
                    expression: "'Project Management'",
                    modifiers: { hover: true, right: true }
                  }
                ],
                staticClass: "nav-item mb-2"
              },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "nav-link btn btn-icon btn-hover-text-primary btn-lg",
                    attrs: {
                      href: "#",
                      "data-toggle": "tab",
                      "data-target": "#kt_aside_tab_4",
                      role: "tab"
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "svg-icon svg-icon-xxl" },
                      [
                        _c("inline-svg", {
                          attrs: {
                            src: "media/svg/icons/General/Shield-check.svg"
                          }
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
                directives: [
                  {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover.right",
                    value: "User Management",
                    expression: "'User Management'",
                    modifiers: { hover: true, right: true }
                  }
                ],
                staticClass: "nav-item mb-2"
              },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "nav-link btn btn-icon btn-hover-text-primary btn-lg",
                    attrs: {
                      href: "#",
                      "data-toggle": "tab",
                      "data-target": "#kt_aside_tab_5",
                      role: "tab"
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "svg-icon svg-icon-xxl" },
                      [
                        _c("inline-svg", {
                          attrs: { src: "media/svg/icons/Home/Library.svg" }
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
                directives: [
                  {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover.right",
                    value: "Finance & Accounting",
                    expression: "'Finance & Accounting'",
                    modifiers: { hover: true, right: true }
                  }
                ],
                staticClass: "nav-item mb-2"
              },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "nav-link btn btn-icon btn-hover-text-primary btn-lg",
                    attrs: {
                      href: "#",
                      "data-toggle": "tab",
                      "data-target": "#kt_aside_tab_6",
                      role: "tab"
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "svg-icon svg-icon-xxl" },
                      [
                        _c("inline-svg", {
                          attrs: { src: "media/svg/icons/Files/File-plus.svg" }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "aside-footer d-flex flex-column align-items-center flex-column-auto py-8"
        },
        [
          _c("KTQuickNotifications"),
          _vm._v(" "),
          _c("KTQuickActions"),
          _vm._v(" "),
          _c("KTQuickPanel")
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=73a41e70&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=73a41e70& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
      "a",
      {
        staticClass: "btn btn-icon btn-clean btn-lg mb-1",
        attrs: {
          href: "#",
          id: "kt_quick_actions_toggle",
          "data-toggle": "tooltip",
          "data-placement": "right",
          "data-container": "body",
          "data-boundary": "window",
          title: "",
          "data-original-title": "Quick Actions"
        }
      },
      [
        _c(
          "span",
          { staticClass: "svg-icon svg-icon-xl" },
          [
            _c("inline-svg", {
              attrs: { src: "media/svg/icons/Media/Equalizer.svg" }
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
        ref: "kt_quick_actions",
        staticClass: "offcanvas offcanvas-left p-10",
        attrs: { id: "kt_quick_actions" }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "offcanvas-content pr-5 mr-n5 scroll ps",
            staticStyle: { height: "804px", overflow: "hidden" }
          },
          [
            _c("div", { staticClass: "row gutter-b" }, [
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "svg-icon svg-icon-3x svg-icon-primary m-0"
                      },
                      [
                        _c("inline-svg", {
                          attrs: { src: "media/svg/icons/Shopping/Euro.svg" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "d-block font-weight-bold font-size-h6 mt-2"
                      },
                      [_vm._v("Accounting")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "svg-icon svg-icon-3x svg-icon-primary m-0"
                      },
                      [
                        _c("inline-svg", {
                          attrs: {
                            src:
                              "media/svg/icons/Communication/Mail-attachment.svg"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "d-block font-weight-bold font-size-h6 mt-2"
                      },
                      [_vm._v("\n              Members\n            ")]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row gutter-b" }, [
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "svg-icon svg-icon-3x svg-icon-primary m-0"
                      },
                      [
                        _c("inline-svg", {
                          attrs: { src: "media/svg/icons/Shopping/Box2.svg" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "d-block font-weight-bold font-size-h6 mt-2"
                      },
                      [_vm._v("\n              Projects\n            ")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "svg-icon svg-icon-3x svg-icon-primary m-0"
                      },
                      [
                        _c("inline-svg", {
                          attrs: {
                            src: "media/svg/icons/Communication/Group.svg"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "d-block font-weight-bold font-size-h6 mt-2"
                      },
                      [_vm._v("\n              Customers\n            ")]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row gutter-b" }, [
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "svg-icon svg-icon-3x svg-icon-primary m-0"
                      },
                      [
                        _c("inline-svg", {
                          attrs: {
                            src: "media/svg/icons/Shopping/Chart-bar1.svg"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "d-block font-weight-bold font-size-h6 mt-2"
                      },
                      [_vm._v("\n              Email\n            ")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "svg-icon svg-icon-3x svg-icon-primary m-0"
                      },
                      [
                        _c("inline-svg", {
                          attrs: {
                            src: "media/svg/icons/Design/Color-profile.svg"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "d-block font-weight-bold font-size-h6 mt-2"
                      },
                      [_vm._v("\n              Settings\n            ")]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "svg-icon svg-icon-3x svg-icon-primary m-0"
                      },
                      [
                        _c("inline-svg", {
                          attrs: { src: "media/svg/icons/Shopping/Euro.svg" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "d-block font-weight-bold font-size-h6 mt-2"
                      },
                      [_vm._v("\n              Orders\n            ")]
                    )
                  ]
                )
              ])
            ])
          ]
        )
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
          "offcanvas-header d-flex align-items-center justify-content-between pb-10",
        attrs: { "kt-hidden-height": "56" }
      },
      [
        _c("h3", { staticClass: "font-weight-bold m-0" }, [
          _vm._v("\n        Quick Actions\n        "),
          _c("small", { staticClass: "text-muted font-size-sm ml-2" }, [
            _vm._v("\n          finance & reports\n        ")
          ])
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-xs btn-icon btn-light btn-hover-primary",
            attrs: { href: "#", id: "kt_quick_actions_close" }
          },
          [_c("i", { staticClass: "ki ki-close icon-xs text-muted" })]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=d9de66ca&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=d9de66ca& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "a",
      {
        staticClass:
          "btn btn-icon btn-hover-text-primary btn-lg mb-1 position-relative",
        attrs: { href: "#", id: "kt_quick_notifications_toggle" }
      },
      [
        _c(
          "span",
          { staticClass: "svg-icon svg-icon-xxl" },
          [
            _c("inline-svg", {
              attrs: { src: "media/svg/icons/Design/Layers.svg" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass:
              "label label-sm label-light-danger label-rounded font-weight-bolder position-absolute top-0 right-0 mt-1 mr-1"
          },
          [_vm._v("3")]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "kt_quick_notifications",
        staticClass: "offcanvas offcanvas-left p-10",
        attrs: { id: "kt_quick_notifications" }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "offcanvas-content pr-5 mr-n5" }, [
          _c(
            "div",
            { staticClass: "navi navi-icon-circle navi-spacer-x-0" },
            [
              _vm._l(_vm.list1, function(item, i) {
                return [
                  _c(
                    "a",
                    { key: i, staticClass: "navi-item", attrs: { href: "#" } },
                    [
                      _c("div", { staticClass: "navi-link rounded" }, [
                        _c("div", { staticClass: "symbol symbol-50 mr-3" }, [
                          _c("div", { staticClass: "symbol-label" }, [
                            _c("i", {
                              staticClass: "icon-lg",
                              class: item.icon
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "navi-text" }, [
                          _c(
                            "div",
                            { staticClass: "font-weight-bold font-size-lg" },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(item.title) +
                                  "\n                "
                              )
                            ]
                          ),
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
          "offcanvas-header d-flex align-items-center justify-content-between mb-10"
      },
      [
        _c("h3", { staticClass: "font-weight-bold m-0" }, [
          _vm._v("\n        Notifications\n        "),
          _c("small", { staticClass: "text-muted font-size-sm ml-2" }, [
            _vm._v("24 New")
          ])
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-xs btn-icon btn-light btn-hover-primary",
            attrs: { href: "#", id: "kt_quick_notifications_close" }
          },
          [_c("i", { staticClass: "ki ki-close icon-xs text-muted" })]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=3ee69eb7&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=3ee69eb7& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      "a",
      {
        staticClass: "btn btn-icon btn-clean btn-lg mb-1 position-relative",
        attrs: { href: "#", id: "kt_quick_panel_toggle" }
      },
      [
        _c(
          "span",
          { staticClass: "svg-icon svg-icon-xl" },
          [
            _c("inline-svg", {
              attrs: { src: "media/svg/icons/Layout/Layout-4-blocks.svg" }
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
        ref: "kt_quick_panel",
        staticClass: "offcanvas offcanvas-left pt-5 pb-10",
        staticStyle: { overflow: "hidden" },
        attrs: { id: "kt_quick_panel" }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5"
          },
          [
            _c(
              "ul",
              {
                staticClass:
                  "nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10",
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
                        role: "tab",
                        "aria-selected": "true"
                      },
                      on: { click: _vm.setActiveTab }
                    },
                    [_vm._v("\n            Audit Logs\n          ")]
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
                        role: "tab",
                        "aria-selected": "false"
                      },
                      on: { click: _vm.setActiveTab }
                    },
                    [_vm._v("\n            Notifications\n          ")]
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
                        role: "tab",
                        "aria-selected": "false"
                      },
                      on: { click: _vm.setActiveTab }
                    },
                    [_vm._v("\n            Settings\n          ")]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(0)
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "offcanvas-content px-10" }, [
          _c(
            "div",
            { staticClass: "tab-content" },
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
                    _c(
                      "div",
                      {
                        staticClass: "scroll pr-7 mr-n7",
                        attrs: { id: "kt_quick_panel_logs" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "mb-15" },
                          [
                            _c("h5", { staticClass: "font-weight-bold mb-5" }, [
                              _vm._v("System Messages")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.list1, function(item, i) {
                              return [
                                _c(
                                  "div",
                                  {
                                    key: i,
                                    staticClass:
                                      "d-flex align-items-center flex-wrap mb-5"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "symbol symbol-50 symbol-light mr-5"
                                      },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "symbol-label" },
                                          [
                                            _c("inline-svg", {
                                              staticClass:
                                                "h-50 align-self-center",
                                              attrs: { src: item.svg }
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
                                        staticClass:
                                          "d-flex flex-column flex-grow-1 mr-2"
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1",
                                            attrs: { href: "#" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(item.title) +
                                                "\n                      "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "text-muted font-weight-bold"
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(item.desc) +
                                                "\n                      "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50"
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(item.alt) +
                                            "\n                    "
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
                          { staticClass: "mb-15" },
                          [
                            _c("h5", { staticClass: "font-weight-bold mb-5" }, [
                              _vm._v("Notifications")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.list2, function(item, i) {
                              return [
                                _c(
                                  "div",
                                  {
                                    key: i,
                                    staticClass:
                                      "d-flex align-items-center rounded p-5 mb-5",
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
                                        _c("inline-svg", {
                                          staticClass: "h-50 align-self-center",
                                          attrs: { src: item.svg }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex flex-column flex-grow-1 mr-2"
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
                                              "\n                        " +
                                                _vm._s(item.title) +
                                                "\n                      "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "text-muted font-size-sm"
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(item.desc) +
                                                "\n                      "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-weight-bolder py-1 font-size-lg",
                                        class: "text-" + item.type
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(item.alt) +
                                            "\n                    "
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
                  ]),
                  _vm._v(" "),
                  _c("b-tab", [
                    _c(
                      "div",
                      {
                        staticClass: "scroll pr-7 mr-n7",
                        attrs: { id: "kt_quick_panel_notifications" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "navi navi-icon-circle navi-spacer-x-0"
                          },
                          [
                            _vm._l(_vm.list3, function(item, i) {
                              return [
                                _c(
                                  "a",
                                  {
                                    key: i,
                                    staticClass: "navi-item",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "navi-link rounded" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "symbol symbol-50 mr-3"
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "symbol-label" },
                                              [
                                                _c("i", {
                                                  staticClass: "icon-lg",
                                                  class: item.icon
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "navi-text" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-weight-bold font-size-lg"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                          " +
                                                    _vm._s(item.title) +
                                                    "\n                        "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "text-muted" },
                                              [
                                                _vm._v(
                                                  "\n                          " +
                                                    _vm._s(item.desc) +
                                                    "\n                        "
                                                )
                                              ]
                                            )
                                          ]
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
                  ]),
                  _vm._v(" "),
                  _c("b-tab", [
                    _c(
                      "div",
                      {
                        staticClass: "scroll pr-7 mr-n7",
                        attrs: { id: "kt_quick_panel_settings" }
                      },
                      [
                        _c("form", { staticClass: "form" }, [
                          _c("div", [
                            _c("h5", { staticClass: "font-weight-bold mb-3" }, [
                              _vm._v("Customer Care")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Enable Notifications:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-success switch-sm"
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span")
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Enable Case Tracking:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-success switch-sm"
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          name: "quick_panel_notifications_2"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span")
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Support Portal:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-success switch-sm"
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span")
                                    ])
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "separator separator-dashed my-6"
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "pt-2" }, [
                            _c("h5", { staticClass: "font-weight-bold mb-3" }, [
                              _vm._v("Reports")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Generate Reports:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-danger"
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span")
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Enable Report Export:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-danger"
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: { type: "checkbox", name: "" }
                                      }),
                                      _vm._v(" "),
                                      _c("span")
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Allow Data Collection:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-danger"
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span")
                                    ])
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "separator separator-dashed my-6"
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "pt-2" }, [
                            _c("h5", { staticClass: "font-weight-bold mb-3" }, [
                              _vm._v("Memebers")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Enable Member singup:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-primary"
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span")
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Allow User Feedbacks:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-primary"
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: { type: "checkbox", name: "" }
                                      }),
                                      _vm._v(" "),
                                      _c("span")
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Enable Customer Portal:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-primary"
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span")
                                    ])
                                  ]
                                )
                              ])
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                ],
                1
              )
            ],
            1
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
    return _c("div", { staticClass: "offcanvas-close mt-n1 pr-5" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-xs btn-icon btn-light btn-hover-primary",
          attrs: { href: "#", id: "kt_quick_panel_close" }
        },
        [_c("i", { staticClass: "ki ki-close icon-xs text-muted" })]
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Aside.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("00c85403", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);