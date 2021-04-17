(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/core/services/store/breadcrumbs.module */ "./resources/js/src/core/services/store/breadcrumbs.module.js");
/* harmony import */ var _list_Patients_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/Patients.vue */ "./resources/js/Pages/list/Patients.vue");
/* harmony import */ var _src_view_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/view/layout/Layout */ "./resources/js/src/view/layout/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  // Using a render function
  layout: function layout(h, page) {
    return h(_src_view_layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, [page]);
  },
  metaInfo: function metaInfo() {
    return {
      title: "Paciente ".concat(patient.first_name_1, " ").concat(patient.last_name_1)
    };
  },
  props: ['patient'],
  components: {
    PatientsList: _list_Patients_vue__WEBPACK_IMPORTED_MODULE_1__.default
  }
  /*
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{ title: "Patients" }]);
        axios.get('patients').then((response) => {
            console.log(response)
            this.patients = response.data;
        });
        console.log('Component mounted.')
    },
  */
  // methods: {
  //   setActiveTab1(event) {
  //     this.tabIndex = this.setActiveTab(event);
  //   },
  //   setActiveTab2(event) {
  //     this.tabIndex2 = this.setActiveTab(event);
  //   },
  //   /**
  //    * Set current active on click
  //    * @param event
  //    */
  //   setActiveTab(event) {
  //     // get all tab links
  //     const tab = event.target.closest('[role="tablist"]');
  //     const links = tab.querySelectorAll(".nav-link");
  //     // remove active tab links
  //     for (let i = 0; i < links.length; i++) {
  //       links[i].classList.remove("active");
  //     }
  //
  //     // set current active tab
  //     event.target.classList.add("active");
  //
  //     // set clicked tab index to bootstrap tab
  //     return parseInt(event.target.getAttribute("data-tab"));
  //   }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/list/Patients.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/list/Patients.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['patient'],
  methods: {
    calcularEdad: function calcularEdad(fecha) {
      var hoy = new Date();
      var cumpleanos = new Date(fecha);
      var edad = hoy.getFullYear() - cumpleanos.getFullYear();
      var m = hoy.getMonth() - cumpleanos.getMonth();

      if (m < 0 || m === 0 && hoy.getDate() < cumpleanos.getDate()) {
        edad--;
      }

      return edad;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "dropdown-2",
  components: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "dropdown-3",
  components: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "dropdown-4",
  props: {
    btnClass: String,
    btnText: String
  },
  components: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dropdown_Dropdown3_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dropdown/Dropdown3.vue */ "./resources/js/src/view/content/dropdown/Dropdown3.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "widget-1",
  data: function data() {
    return {
      list: [{
        title: "Briefing",
        desc: "Project Manager",
        svg: "media/svg/icons/Home/Library.svg",
        style: "primary"
      }, {
        title: "Design",
        desc: "Art Director",
        svg: "media/svg/icons/Communication/Write.svg",
        style: "warning"
      }, {
        title: "Logics",
        desc: "Lead Developer",
        svg: "media/svg/icons/Communication/Group-chat.svg",
        style: "success"
      }, {
        title: "Development",
        desc: "DevOps",
        svg: "media/svg/icons/General/Attachment2.svg",
        style: "danger"
      }, {
        title: "Testing",
        desc: "QA Managers",
        svg: "media/svg/icons/Communication/Shield-user.svg",
        style: "info"
      }]
    };
  },
  components: {
    Dropdown3: _dropdown_Dropdown3_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["layoutConfig"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dropdown_Dropdown2_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dropdown/Dropdown2.vue */ "./resources/js/src/view/content/dropdown/Dropdown2.vue");
/* harmony import */ var _dropdown_Dropdown4_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dropdown/Dropdown4.vue */ "./resources/js/src/view/content/dropdown/Dropdown4.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "widget-4",
  data: function data() {
    return {
      list: [{
        title: "Create FireStone Logo",
        desc: "Due in 2 Days",
        svg: "media/svg/icons/Home/Library.svg",
        style: "success"
      }, {
        title: "Stakeholder Meeting",
        desc: "Due in 3 Days",
        svg: "media/svg/icons/Communication/Write.svg",
        style: "primary"
      }, {
        title: "Scoping & Estimations",
        desc: "Due in 5 Days",
        svg: "media/svg/icons/Communication/Group-chat.svg",
        style: "warning"
      }, {
        title: "Sprint Showcase",
        desc: "Due in 1 Day",
        svg: "media/svg/icons/General/Attachment2.svg",
        style: "info"
      }, {
        title: "Project Retro",
        desc: "Due in 12 Days",
        svg: "media/svg/icons/Communication/Shield-user.svg",
        style: "danger"
      }]
    };
  },
  components: {
    Dropdown2: _dropdown_Dropdown2_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    Dropdown4: _dropdown_Dropdown4_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["layoutConfig"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_htmlclass_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/htmlclass.service */ "./resources/js/src/core/services/htmlclass.service.js");
/* harmony import */ var _aside_Aside_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside/Aside.vue */ "./resources/js/src/view/layout/aside/Aside.vue");
/* harmony import */ var _subheader_Subheader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subheader/Subheader.vue */ "./resources/js/src/view/layout/subheader/Subheader.vue");
/* harmony import */ var _aside_Sidebar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside/Sidebar.vue */ "./resources/js/src/view/layout/aside/Sidebar.vue");
/* harmony import */ var _header_HeaderMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/HeaderMobile */ "./resources/js/src/view/layout/header/HeaderMobile.vue");
/* harmony import */ var _content_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/Loader */ "./resources/js/src/view/layout/content/Loader.vue");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/Header */ "./resources/js/src/view/layout/header/Header.vue");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/Footer */ "./resources/js/src/view/layout/footer/Footer.vue");
/* harmony import */ var _extras_StickyToolbar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extras/StickyToolbar.vue */ "./resources/js/src/view/layout/extras/StickyToolbar.vue");
/* harmony import */ var _extras_ScrollTop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./extras/ScrollTop */ "./resources/js/src/view/layout/extras/ScrollTop.vue");
/* harmony import */ var _core_services_store_htmlclass_module_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/services/store/htmlclass.module.js */ "./resources/js/src/core/services/store/htmlclass.module.js");
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












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Layout",
  props: ['title'],
  components: {
    KTAside: _aside_Aside_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    KTSubheader: _subheader_Subheader_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    KTHeaderMobile: _header_HeaderMobile__WEBPACK_IMPORTED_MODULE_4__.default,
    Loader: _content_Loader__WEBPACK_IMPORTED_MODULE_5__.default,
    KTHeader: _header_Header__WEBPACK_IMPORTED_MODULE_6__.default,
    KTFooter: _footer_Footer__WEBPACK_IMPORTED_MODULE_7__.default,
    KTStickyToolbar: _extras_StickyToolbar_vue__WEBPACK_IMPORTED_MODULE_8__.default,
    KTScrollTop: _extras_ScrollTop__WEBPACK_IMPORTED_MODULE_9__.default,
    KTSidebar: _aside_Sidebar_vue__WEBPACK_IMPORTED_MODULE_3__.default
  },
  beforeMount: function beforeMount() {
    // show page loading
    this.$store.dispatch(_core_services_store_htmlclass_module_js__WEBPACK_IMPORTED_MODULE_10__.ADD_BODY_CLASSNAME, "page-loading"); // initialize html element classes

    _core_services_htmlclass_service__WEBPACK_IMPORTED_MODULE_0__.default.init(this.layoutConfig());
  },
  mounted: function mounted() {
    var _this = this;

    // check if current user is authenticated
    // if (!this.isAuthenticated) {
    //   this.$router.push({ name: "login" });
    // }
    // Simulate the delay page loading
    setTimeout(function () {
      // Remove page loader after some time
      _this.$store.dispatch(_core_services_store_htmlclass_module_js__WEBPACK_IMPORTED_MODULE_10__.REMOVE_BODY_CLASSNAME, "page-loading");
    }, 2000);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_11__.mapGetters)(["isAuthenticated", "breadcrumbs", "pageTitle", "layoutConfig"])), {}, {
    /**
     * Check if the page loader is enabled
     * @returns {boolean}
     */
    loaderEnabled: function loaderEnabled() {
      return !/false/.test(this.layoutConfig("loader.type"));
    },

    /**
     * Check if container width is fluid
     * @returns {boolean}
     */
    contentFluid: function contentFluid() {
      return this.layoutConfig("content.width") === "fluid";
    },

    /**
     * Page loader logo image using require() function
     * @returns {string}
     */
    loaderLogo: function loaderLogo() {
      return this.layoutConfig("loader.logo");
    },

    /**
     * Set the right toolbar display
     * @returns {boolean}
     */
    toolbarDisplay: function toolbarDisplay() {
      // return !!this.layoutConfig("toolbar.display");
      return true;
    },

    /**
     * Set the subheader display
     * @returns {boolean}
     */
    subheaderDisplay: function subheaderDisplay() {
      return !!this.layoutConfig("subheader.display");
    }
    /**
     * Set the subheader display on dashboard page
     * @returns {boolean}
    displaySubheaderOnDashboard() {
        return this.$route.name !== "panel";
    }
    */

  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_layout_base_aside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/layout/base/aside.js */ "./resources/js/src/assets/js/layout/base/aside.js");
/* harmony import */ var _extras_offcanvas_QuickNotifications_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extras/offcanvas/QuickNotifications.vue */ "./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue");
/* harmony import */ var _extras_offcanvas_QuickActions_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extras/offcanvas/QuickActions.vue */ "./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue");
/* harmony import */ var _extras_offcanvas_QuickPanel_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extras/offcanvas/QuickPanel.vue */ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_layout_base_sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/layout/base/sidebar.js */ "./resources/js/src/assets/js/layout/base/sidebar.js");
/* harmony import */ var _content_widgets_list_Widget1_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/widgets/list/Widget1.vue */ "./resources/js/src/view/content/widgets/list/Widget1.vue");
/* harmony import */ var _content_widgets_list_Widget4_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content/widgets/list/Widget4.vue */ "./resources/js/src/view/content/widgets/list/Widget4.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "sidebar",
  components: {
    ListWidget1: _content_widgets_list_Widget1_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    ListWidget4: _content_widgets_list_Widget4_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      // Init sidebar
      _assets_js_layout_base_sidebar_js__WEBPACK_IMPORTED_MODULE_0__.default.init(_this.$refs["kt_sidebar"]);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/content/Loader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/content/Loader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Loader",
  props: {
    logo: String,
    spinnerClass: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_layout_extended_scrolltop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/layout/extended/scrolltop.js */ "./resources/js/src/assets/js/layout/extended/scrolltop.js");
//
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
  name: "KTScrollTop",
  mounted: function mounted() {
    // Init Scrolltop
    _assets_js_layout_extended_scrolltop_js__WEBPACK_IMPORTED_MODULE_0__.default.init(this.$refs["kt_scrolltop"]);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KTStickyToolbar"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_layout_extended_quick_actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/js/layout/extended/quick-actions.js */ "./resources/js/src/assets/js/layout/extended/quick-actions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_layout_extended_quick_notifications_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/js/layout/extended/quick-notifications.js */ "./resources/js/src/assets/js/layout/extended/quick-notifications.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_layout_extended_quick_panel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/js/layout/extended/quick-panel.js */ "./resources/js/src/assets/js/layout/extended/quick-panel.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/footer/Footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/footer/Footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KTFooter",
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["layoutConfig"])), {}, {
    /**
     * Check if subheader width is fluid
     */
    widthFluid: function widthFluid() {
      return this.layoutConfig("footer.width") === "fluid";
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "dropdown-1",
  components: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./resources/js/src/view/layout/header/Menu.vue");
/* harmony import */ var _assets_js_layout_base_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/js/layout/base/header.js */ "./resources/js/src/assets/js/layout/base/header.js");
/* harmony import */ var _assets_js_layout_base_header_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/js/layout/base/header-menu.js */ "./resources/js/src/assets/js/layout/base/header-menu.js");
/* harmony import */ var _Dropdown2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dropdown2 */ "./resources/js/src/view/layout/header/Dropdown2.vue");
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KTHeaderMobile",
  components: {},
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["layoutConfig", "getClasses"])), {}, {
    /**
     * Get header logo
     * @returns {string}
     */
    headerLogo: function headerLogo() {
      return process.env.BASE_URL + this.layoutConfig("self.logo");
    },

    /**
     * Get classes for mobile header
     * @returns {null|*}
     */
    headerClasses: function headerClasses() {
      var classes = this.getClasses("header_mobile");

      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }

      return null;
    },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    asideEnabled: function asideEnabled() {
      return this.layoutConfig("aside.self.display");
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KTMenu",
  methods: {
    hasActiveChildren: function hasActiveChildren(match) {
      console.log(route().current());
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/src/assets/js/layout/base/header-menu.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/js/layout/base/header-menu.js ***!
  \***************************************************************/
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

/***/ "./resources/js/src/assets/js/layout/base/header.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/js/layout/base/header.js ***!
  \**********************************************************/
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

/***/ "./resources/js/src/assets/js/layout/base/sidebar.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/js/layout/base/sidebar.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutSidebar = function () {
  // Private properties
  var _element;

  var _offcanvasObject; // Private functions


  var _init = function _init() {
    var header = KTUtil.find(_element, '.sidebar-header');
    var content = KTUtil.find(_element, '.sidebar-content');
    _offcanvasObject = new KTOffcanvas(_element, {
      overlay: true,
      baseClass: 'sidebar',
      placement: 'right',
      closeBy: 'kt_sidebar_mobile_close',
      toggleBy: 'kt_sidebar_mobile_toggle'
    });
    KTUtil.scrollInit(content, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        // Destroy for tablet and mobile modes
        if (KTUtil.isBreakpointUp('lg')) {
          return false;
        }

        var height = parseInt(KTUtil.getViewPort().height);

        if (header) {
          height = height - parseInt(KTUtil.actualHeight(header));
          height = height - parseInt(KTUtil.css(header, 'marginTop'));
          height = height - parseInt(KTUtil.css(header, 'marginBottom'));
        }

        if (content) {
          height = height - parseInt(KTUtil.css(content, 'marginTop'));
          height = height - parseInt(KTUtil.css(content, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
        height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));
        height = height - 2;
        return height;
      }
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
    getElement: function getElement() {
      return _element;
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutSidebar);

/***/ }),

/***/ "./resources/js/src/core/services/htmlclass.service.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/core/services/htmlclass.service.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/store/htmlclass.module */ "./resources/js/src/core/services/store/htmlclass.module.js");
/* harmony import */ var _core_services_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/store */ "./resources/js/src/core/services/store/index.js");




var HtmlClass = {
  config: null,
  init: function init(config) {
    if (typeof config !== "undefined") {
      this.config = config;
    } // init base layout


    this.initLayout(); // init header and subheader menu

    this.initHeader();
    this.initSubheader(); // init aside

    this.initAside(); // init sidebar

    this.initSidebar(); // init footer

    this.initFooter();
  },

  /**
   * Init Layout
   */
  initLayout: function initLayout() {
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().has(this.config, "self.body.class")) {
      var _selfBodyClass = object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "self.body.class").toString();

      if (_selfBodyClass) {
        var bodyClasses = _selfBodyClass.split(" ");

        bodyClasses.forEach(function (cssClass) {
          _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, cssClass);
        });
      }
    }

    var bgImage = object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "self.body.background-image");

    if (typeof bgImage !== "undefined") {
      document.body.style.backgroundImage = "url(".concat(bgImage, ")");
    } // Properly close mobile header menu


    _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.REMOVE_BODY_CLASSNAME, "header-menu-wrapper-on");
  },

  /**
   * Init Header
   */
  initHeader: function initHeader() {
    // Fixed header
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "header.self.fixed.desktop")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "header-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
        position: "header",
        className: "header-fixed"
      });
    } else {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "header-static");
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "header.self.fixed.mobile")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "header-mobile-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
        position: "header_mobile",
        className: "header-mobile-fixed"
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "header.menu.self.display")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
        position: "header_menu",
        className: "header-menu-layout-".concat(object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "header.menu.self.layout"))
      }); // Menu

      if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "header.menu.self.root-arrow")) {
        _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
          position: "header_menu",
          className: "header-menu-root-arrow"
        });
      }
    }
  },

  /**
   * Init Subheader
   */
  initSubheader: function initSubheader() {
    // Fixed content head
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "subheader.fixed")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "subheader-fixed");
      object_path__WEBPACK_IMPORTED_MODULE_0___default().set(this.config, "subheader.style", "solid");
    } else {
      object_path__WEBPACK_IMPORTED_MODULE_0___default().set(this.config, "subheader.fixed", false);
    } // if (objectPath.get(this.config, "subheader.display")) {
    //   store.dispatch(ADD_BODY_CLASSNAME, "subheader-enabled");
    // }
    // if (objectPath.has(this.config, "subheader.style")) {
    //   store.dispatch(
    //     ADD_BODY_CLASSNAME,
    //     `subheader-${objectPath.get(this.config, "subheader.style")}`
    //   );
    // }

  },

  /**
   * Init Aside
   */
  initAside: function initAside() {
    // Reset aside class in body
    // store.dispatch(REMOVE_BODY_CLASSNAME, "aside-enabled");
    // store.dispatch(REMOVE_BODY_CLASSNAME, "aside-fixed");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.REMOVE_BODY_CLASSNAME, "aside-static");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.REMOVE_BODY_CLASSNAME, "aside-minimize");

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "aside.self.display") !== true) {
      return;
    } // Add aside class enabled in body
    // store.dispatch(ADD_BODY_CLASSNAME, "aside-enabled");
    // Fixed Aside


    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "aside.self.fixed")) {
      // store.dispatch(ADD_BODY_CLASSNAME, "aside-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
        position: "aside",
        className: "aside-fixed"
      });
    } else {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "aside-static");
    } // // Aside Secondary
    // if (objectPath.get(this.config, "aside.secondary.display")) {
    //   store.dispatch(ADD_BODY_CLASSNAME, "aside-secondary-enabled");
    // } else {
    //   store.dispatch(ADD_BODY_CLASSNAME, "aside-secondary-disabled");
    // }
    // Default fixed


    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "aside.self.minimize.default")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "aside-minimize");
    } // Dropdown Submenu


    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "aside.menu.dropdown")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
        position: "aside_menu",
        className: "aside-menu-dropdown"
      });
    }
  },

  /**
   * Init Sidebar
   */
  initSidebar: function initSidebar() {
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "sidebar-enabled");
  },

  /**
   * Init Footer
   */
  initFooter: function initFooter() {
    // Fixed header
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "footer.fixed")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "footer-fixed");
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HtmlClass);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=style&index=0&lang=scss& ***!
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./public/media/svg/avatars/001-boy.svg":
/*!**********************************************!*\
  !*** ./public/media/svg/avatars/001-boy.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/001-boy.svg?4b3f8e3b7edf5d8e840eecdc434a8398");

/***/ }),

/***/ "./resources/js/Pages/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Profile.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=1bdc34e0& */ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/list/Patients.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/list/Patients.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Patients_vue_vue_type_template_id_13b97374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Patients.vue?vue&type=template&id=13b97374& */ "./resources/js/Pages/list/Patients.vue?vue&type=template&id=13b97374&");
/* harmony import */ var _Patients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Patients.vue?vue&type=script&lang=js& */ "./resources/js/Pages/list/Patients.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Patients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Patients_vue_vue_type_template_id_13b97374___WEBPACK_IMPORTED_MODULE_0__.render,
  _Patients_vue_vue_type_template_id_13b97374___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/list/Patients.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/content/dropdown/Dropdown2.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/view/content/dropdown/Dropdown2.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dropdown2_vue_vue_type_template_id_40be076a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown2.vue?vue&type=template&id=40be076a& */ "./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=template&id=40be076a&");
/* harmony import */ var _Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown2.vue?vue&type=script&lang=js& */ "./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=script&lang=js&");
/* harmony import */ var _Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown2.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dropdown2_vue_vue_type_template_id_40be076a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dropdown2_vue_vue_type_template_id_40be076a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/content/dropdown/Dropdown2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/content/dropdown/Dropdown3.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/view/content/dropdown/Dropdown3.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dropdown3_vue_vue_type_template_id_40cc1eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown3.vue?vue&type=template&id=40cc1eeb& */ "./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=template&id=40cc1eeb&");
/* harmony import */ var _Dropdown3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown3.vue?vue&type=script&lang=js& */ "./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=script&lang=js&");
/* harmony import */ var _Dropdown3_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown3.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Dropdown3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dropdown3_vue_vue_type_template_id_40cc1eeb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dropdown3_vue_vue_type_template_id_40cc1eeb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/content/dropdown/Dropdown3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/content/dropdown/Dropdown4.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/view/content/dropdown/Dropdown4.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dropdown4_vue_vue_type_template_id_40da366c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown4.vue?vue&type=template&id=40da366c& */ "./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=template&id=40da366c&");
/* harmony import */ var _Dropdown4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown4.vue?vue&type=script&lang=js& */ "./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dropdown4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dropdown4_vue_vue_type_template_id_40da366c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dropdown4_vue_vue_type_template_id_40da366c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/content/dropdown/Dropdown4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/content/widgets/list/Widget1.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/view/content/widgets/list/Widget1.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Widget1_vue_vue_type_template_id_1716aac3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget1.vue?vue&type=template&id=1716aac3& */ "./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=template&id=1716aac3&");
/* harmony import */ var _Widget1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget1.vue?vue&type=script&lang=js& */ "./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Widget1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Widget1_vue_vue_type_template_id_1716aac3___WEBPACK_IMPORTED_MODULE_0__.render,
  _Widget1_vue_vue_type_template_id_1716aac3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/content/widgets/list/Widget1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/content/widgets/list/Widget4.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/view/content/widgets/list/Widget4.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Widget4_vue_vue_type_template_id_1740f146___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget4.vue?vue&type=template&id=1740f146& */ "./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=template&id=1740f146&");
/* harmony import */ var _Widget4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget4.vue?vue&type=script&lang=js& */ "./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Widget4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Widget4_vue_vue_type_template_id_1740f146___WEBPACK_IMPORTED_MODULE_0__.render,
  _Widget4_vue_vue_type_template_id_1740f146___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/content/widgets/list/Widget4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/Layout.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/view/layout/Layout.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=71227dee& */ "./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__.render,
  _Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/Layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/aside/Aside.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Aside.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Aside.vue?vue&type=template&id=084ace0d& */ "./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d&");
/* harmony import */ var _Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Aside.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js&");
/* harmony import */ var _Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Aside.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/aside/Aside.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/aside/Sidebar.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Sidebar.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_488cc6f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=488cc6f1& */ "./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=template&id=488cc6f1&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Sidebar_vue_vue_type_template_id_488cc6f1___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebar_vue_vue_type_template_id_488cc6f1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/aside/Sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/content/Loader.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/view/layout/content/Loader.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loader_vue_vue_type_template_id_117691ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=117691ad& */ "./resources/js/src/view/layout/content/Loader.vue?vue&type=template&id=117691ad&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/content/Loader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Loader_vue_vue_type_template_id_117691ad___WEBPACK_IMPORTED_MODULE_0__.render,
  _Loader_vue_vue_type_template_id_117691ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/content/Loader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/ScrollTop.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/view/layout/extras/ScrollTop.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollTop.vue?vue&type=template&id=10efd5c0& */ "./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0&");
/* harmony import */ var _ScrollTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollTop.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ScrollTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/ScrollTop.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/StickyToolbar.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/StickyToolbar.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StickyToolbar.vue?vue&type=template&id=1f43362a& */ "./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a&");
/* harmony import */ var _StickyToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StickyToolbar.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _StickyToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__.render,
  _StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/StickyToolbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuickActions_vue_vue_type_template_id_00c27b30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickActions.vue?vue&type=template&id=00c27b30& */ "./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=00c27b30&");
/* harmony import */ var _QuickActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickActions.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuickActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuickActions_vue_vue_type_template_id_00c27b30___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuickActions_vue_vue_type_template_id_00c27b30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/offcanvas/QuickActions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuickNotifications_vue_vue_type_template_id_88b2cd4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickNotifications.vue?vue&type=template&id=88b2cd4a& */ "./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=88b2cd4a&");
/* harmony import */ var _QuickNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickNotifications.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuickNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuickNotifications_vue_vue_type_template_id_88b2cd4a___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuickNotifications_vue_vue_type_template_id_88b2cd4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickPanel.vue?vue&type=template&id=35752b77& */ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77&");
/* harmony import */ var _QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickPanel.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/footer/Footer.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/view/layout/footer/Footer.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_68a27d3b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=68a27d3b& */ "./resources/js/src/view/layout/footer/Footer.vue?vue&type=template&id=68a27d3b&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/footer/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Footer_vue_vue_type_template_id_68a27d3b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_68a27d3b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/footer/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/header/Dropdown2.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/view/layout/header/Dropdown2.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dropdown2_vue_vue_type_template_id_1248be43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown2.vue?vue&type=template&id=1248be43& */ "./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=template&id=1248be43&");
/* harmony import */ var _Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown2.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dropdown2_vue_vue_type_template_id_1248be43___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dropdown2_vue_vue_type_template_id_1248be43___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/header/Dropdown2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/header/Header.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/view/layout/header/Header.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=539988fb& */ "./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/header/Header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/header/HeaderMobile.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/view/layout/header/HeaderMobile.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderMobile.vue?vue&type=template&id=0ce93e7d& */ "./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d&");
/* harmony import */ var _HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMobile.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/header/HeaderMobile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/header/Menu.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/view/layout/header/Menu.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=0466a04d& */ "./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/header/Menu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/subheader/Subheader.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/view/layout/subheader/Subheader.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subheader.vue?vue&type=template&id=6c23ad12& */ "./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12&");
/* harmony import */ var _Subheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subheader.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=script&lang=js&");
/* harmony import */ var _Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subheader.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Subheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__.render,
  _Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/subheader/Subheader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/list/Patients.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/list/Patients.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Patients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/list/Patients.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Widget1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Widget4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Aside.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/content/Loader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/view/layout/content/Loader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/content/Loader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScrollTop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StickyToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickNotifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/footer/Footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/view/layout/footer/Footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/footer/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderMobile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subheader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=1bdc34e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&");


/***/ }),

/***/ "./resources/js/Pages/list/Patients.vue?vue&type=template&id=13b97374&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/list/Patients.vue?vue&type=template&id=13b97374& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_template_id_13b97374___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_template_id_13b97374___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_template_id_13b97374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Patients.vue?vue&type=template&id=13b97374& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/list/Patients.vue?vue&type=template&id=13b97374&");


/***/ }),

/***/ "./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=template&id=40be076a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=template&id=40be076a& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_40be076a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_40be076a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_40be076a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=template&id=40be076a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=template&id=40be076a&");


/***/ }),

/***/ "./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=template&id=40cc1eeb&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=template&id=40cc1eeb& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown3_vue_vue_type_template_id_40cc1eeb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown3_vue_vue_type_template_id_40cc1eeb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown3_vue_vue_type_template_id_40cc1eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown3.vue?vue&type=template&id=40cc1eeb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=template&id=40cc1eeb&");


/***/ }),

/***/ "./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=template&id=40da366c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=template&id=40da366c& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown4_vue_vue_type_template_id_40da366c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown4_vue_vue_type_template_id_40da366c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown4_vue_vue_type_template_id_40da366c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown4.vue?vue&type=template&id=40da366c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=template&id=40da366c&");


/***/ }),

/***/ "./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=template&id=1716aac3&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=template&id=1716aac3& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget1_vue_vue_type_template_id_1716aac3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget1_vue_vue_type_template_id_1716aac3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget1_vue_vue_type_template_id_1716aac3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Widget1.vue?vue&type=template&id=1716aac3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=template&id=1716aac3&");


/***/ }),

/***/ "./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=template&id=1740f146&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=template&id=1740f146& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget4_vue_vue_type_template_id_1740f146___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget4_vue_vue_type_template_id_1740f146___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget4_vue_vue_type_template_id_1740f146___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Widget4.vue?vue&type=template&id=1740f146& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=template&id=1740f146&");


/***/ }),

/***/ "./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=template&id=71227dee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee&");


/***/ }),

/***/ "./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Aside.vue?vue&type=template&id=084ace0d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d&");


/***/ }),

/***/ "./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=template&id=488cc6f1&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=template&id=488cc6f1& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_488cc6f1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_488cc6f1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_488cc6f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=488cc6f1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=template&id=488cc6f1&");


/***/ }),

/***/ "./resources/js/src/view/layout/content/Loader.vue?vue&type=template&id=117691ad&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/view/layout/content/Loader.vue?vue&type=template&id=117691ad& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_117691ad___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_117691ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_117691ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Loader.vue?vue&type=template&id=117691ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/content/Loader.vue?vue&type=template&id=117691ad&");


/***/ }),

/***/ "./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScrollTop.vue?vue&type=template&id=10efd5c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0&");


/***/ }),

/***/ "./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StickyToolbar.vue?vue&type=template&id=1f43362a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a&");


/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=00c27b30&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=00c27b30& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickActions_vue_vue_type_template_id_00c27b30___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickActions_vue_vue_type_template_id_00c27b30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickActions_vue_vue_type_template_id_00c27b30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickActions.vue?vue&type=template&id=00c27b30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=00c27b30&");


/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=88b2cd4a&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=88b2cd4a& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickNotifications_vue_vue_type_template_id_88b2cd4a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickNotifications_vue_vue_type_template_id_88b2cd4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickNotifications_vue_vue_type_template_id_88b2cd4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickNotifications.vue?vue&type=template&id=88b2cd4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=88b2cd4a&");


/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuickPanel.vue?vue&type=template&id=35752b77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77&");


/***/ }),

/***/ "./resources/js/src/view/layout/footer/Footer.vue?vue&type=template&id=68a27d3b&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/layout/footer/Footer.vue?vue&type=template&id=68a27d3b& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_68a27d3b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_68a27d3b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_68a27d3b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=68a27d3b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/footer/Footer.vue?vue&type=template&id=68a27d3b&");


/***/ }),

/***/ "./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=template&id=1248be43&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=template&id=1248be43& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_1248be43___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_1248be43___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_template_id_1248be43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=template&id=1248be43& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=template&id=1248be43&");


/***/ }),

/***/ "./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=template&id=539988fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb&");


/***/ }),

/***/ "./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderMobile.vue?vue&type=template&id=0ce93e7d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d&");


/***/ }),

/***/ "./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=template&id=0466a04d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d&");


/***/ }),

/***/ "./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subheader.vue?vue&type=template&id=6c23ad12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12&");


/***/ }),

/***/ "./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown3_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown3.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown3_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown3_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown3_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown3_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/src/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Aside.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subheader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        "b-alert",
        {
          staticClass:
            "alert alert-custom alert-white alert-shadow fade show gutter-b",
          attrs: { show: "", variant: "light" }
        },
        [
          _c(
            "b-container",
            { staticClass: "bv-example-row" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { col: "", lg: "2" } }, [
                    _c(
                      "div",
                      { staticClass: "symbol symbol-50 symbol-light mr-4" },
                      [
                        _c("span", { staticClass: "symbol-label" }, [
                          _c("img", {
                            staticClass: "h-75 align-self-end",
                            attrs: {
                              src: __webpack_require__(/*! ../../../public/media/svg/avatars/001-boy.svg */ "./public/media/svg/avatars/001-boy.svg"),
                              alt: ""
                            }
                          })
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "12", lg: "7" } }, [
                    _c(
                      "h5",
                      { staticClass: "mt-0 font-weight-bolder text-dark" },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.patient.first_name_1) +
                            " " +
                            _vm._s(_vm.patient.last_name_1) +
                            "\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.patient.goal) +
                          "\n          " +
                          _vm._s(_vm.patient.id) +
                          "\n        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { col: "", lg: "3" } }, [
                    _c(
                      "a",
                      {
                        staticClass:
                          "btn btn-info font-weight-bolder font-size-sm mr-3",
                        attrs: { href: _vm.route("poll.edit", _vm.patient.id) }
                      },
                      [_vm._v("Editar historial")]
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-4" }, [
        _c(
          "div",
          {
            staticClass:
              "card card-custom card-stretch card-shadowless gutter-b"
          },
          [
            _c("div", { staticClass: "card-header border-0 pt-5" }, [
              _c("div", { staticClass: "card-title font-weight-bolder" }, [
                _c("div", { staticClass: "card-label" }, [
                  _vm._v("\n              Anuncios\n              "),
                  _c("div", { staticClass: "font-size-sm text-muted mt-2" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-toolbar" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" })
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "card card-custom card-stretch card-shadowless gutter-b"
          },
          [
            _c("div", { staticClass: "card-header border-0 pt-5" }, [
              _c("div", { staticClass: "card-title font-weight-bolder" }, [
                _c("div", { staticClass: "card-label" }, [
                  _vm._v(
                    "\n                      Nombre\n                      "
                  ),
                  _c("div", { staticClass: "font-size-sm text-muted mt-2" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-toolbar" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" })
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-8" }, [
        _c(
          "div",
          {
            staticClass:
              "card card-custom card-stretch card-shadowless gutter-b"
          },
          [
            _c("div", { staticClass: "card-header border-0 pt-5" }, [
              _c("div", { staticClass: "card-title font-weight-bolder" }, [
                _c("div", { staticClass: "card-label" }, [
                  _vm._v("\n              Notas\n              "),
                  _c("div", { staticClass: "font-size-sm text-muted mt-2" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-toolbar" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" })
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/list/Patients.vue?vue&type=template&id=13b97374&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/list/Patients.vue?vue&type=template&id=13b97374& ***!
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
  return _c("div", { staticClass: "col-lg-4" }, [
    _c("div", { staticClass: "card card-custom card-stretch gutter-b" }, [
      _c("div", { staticClass: "card-header border-0" }, [
        _c("div", { staticClass: "d-flex align-items-center" }, [
          _c("div", { staticClass: "symbol symbol-45 symbol-light mr-5" }, [
            _c(
              "span",
              { staticClass: "symbol-label" },
              [
                _c("inline-svg", {
                  staticClass: "h-50 align-self-center",
                  attrs: { src: "" }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex flex-column flex-grow-1" }, [
            _c(
              "a",
              {
                staticClass:
                  "font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1",
                attrs: { href: "#" }
              },
              [
                _vm._v(
                  "\n          " +
                    _vm._s(
                      _vm.patient.first_name_1 + " " + _vm.patient.last_name_1
                    ) +
                    "\n        "
                )
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "text-muted font-weight-bold" }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.calcularEdad(_vm.patient.birth_date) + " años") +
                  "\n        "
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body pt-0" }, [
        _c("div", { staticClass: "mb-10" }, [
          _c("p", { staticClass: "text-dark-50 m-0 pt-5 font-weight-normal" }, [
            _c("em", [
              _vm._v(_vm._s(_vm._f("truncate")(_vm.patient.goal, 20, "...")))
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-dark-50 m-0 pt-5 font-weight-normal" }, [
            _c("strong", [_vm._v("Ubicación: ")]),
            _vm._v(_vm._s(_vm.patient.city.name) + "\n        ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "my-2" },
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    text: "",
                    small: "",
                    color: "primary",
                    href: _vm.route("patients.show", _vm.patient.id)
                  }
                },
                [_vm._v("Ver más")]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=template&id=40be076a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=template&id=40be076a& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        size: "sm",
        variant: "link",
        "toggle-class":
          "custom-v-dropdown btn btn-clean btn-hover-light-primary btn-sm btn-icon",
        "no-caret": "",
        right: "",
        "no-flip": ""
      },
      scopedSlots: _vm._u(
        [
          {
            key: "button-content",
            fn: function() {
              return [_vm._t("default")]
            },
            proxy: true
          }
        ],
        null,
        true
      )
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
              _c("span", { staticClass: "font-size-lg" }, [
                _vm._v("\n        Choose Label:\n      ")
              ]),
              _vm._v(" "),
              _c("i", {
                directives: [
                  {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip",
                    value: "Click to learn more...",
                    expression: "'Click to learn more...'"
                  }
                ],
                staticClass: "flaticon2-information icon-md text-muted"
              })
            ]
          ),
          _vm._v(" "),
          _c("b-dropdown-text", {
            staticClass: "navi-separator mb-3 opacity-70",
            attrs: { tag: "div" }
          }),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-text" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "label label-xl label-inline label-light-success"
                    },
                    [_vm._v("\n            Customer\n          ")]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-text" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "label label-xl label-inline label-light-danger"
                    },
                    [_vm._v("\n            Partner\n          ")]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-text" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "label label-xl label-inline label-light-warning"
                    },
                    [_vm._v("\n            Suplier\n          ")]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-text" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "label label-xl label-inline label-light-primary"
                    },
                    [_vm._v("\n            Member\n          ")]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-text" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "label label-xl label-inline label-light-dark"
                    },
                    [_vm._v("\n            Staff\n          ")]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("b-dropdown-text", {
            staticClass: "navi-separator mt-3 opacity-70",
            attrs: { tag: "div" }
          }),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-footer pt-5 pb-4", attrs: { tag: "div" } },
            [
              _c(
                "a",
                { staticClass: "btn btn-clean font-weight-bold btn-sm" },
                [
                  _c("i", { staticClass: "ki ki-plus icon-sm" }),
                  _vm._v("Add new")
                ]
              )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=template&id=40cc1eeb&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=template&id=40cc1eeb& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        size: "sm",
        variant: "link",
        "toggle-class":
          "custom-v-dropdown btn btn-clean btn-hover-light-primary btn-sm btn-icon",
        "no-caret": "",
        right: "",
        "no-flip": ""
      },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function() {
            return [_c("i", { staticClass: "ki ki-bold-more-hor" })]
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
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-group" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("New Group")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-open-text-book" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("Contacts")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-rocket-1" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("Groups")]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-link-badge" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "label label-light-primary label-inline font-weight-bold"
                    },
                    [_vm._v("new")]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-bell-2" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("Calls")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-dashboard" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("Settings")])
              ])
            ]
          ),
          _vm._v(" "),
          _c("b-dropdown-text", {
            staticClass: "navi-separator my-3",
            attrs: { tag: "div" }
          }),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-protected" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("Help")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-bell-2" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("Privacy")]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-link-badge" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "label label-light-danger label-rounded font-weight-bold"
                    },
                    [_vm._v("\n            5\n          ")]
                  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=template&id=40da366c&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown4.vue?vue&type=template&id=40da366c& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        size: "sm",
        variant: "primary",
        "toggle-class": _vm.btnClass,
        text: _vm.btnText
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
                [_vm._v("Add new:")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-graph-1" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("Order")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-calendar-4" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("Event")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-layers-1" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("Report")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-calendar-4" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("Post")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "navi-item", attrs: { tag: "div" } },
            [
              _c("a", { staticClass: "navi-link" }, [
                _c("span", { staticClass: "navi-icon" }, [
                  _c("i", { staticClass: "flaticon2-file-1" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "navi-text" }, [_vm._v("File")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=template&id=1716aac3&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget1.vue?vue&type=template&id=1716aac3& ***!
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
    { staticClass: "card card-custom card-shadowless gutter-b bg-light" },
    [
      _c("div", { staticClass: "card-header border-0" }, [
        _c("h3", { staticClass: "card-title font-weight-bolder text-dark" }, [
          _vm._v("Tasks Overview")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-toolbar" }, [_c("Dropdown3")], 1)
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body pt-2" },
        [
          _vm._l(_vm.list, function(item, i) {
            return [
              _c(
                "div",
                { key: i, staticClass: "d-flex align-items-center mb-10" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "symbol symbol-40 mr-5",
                      class: "symbol-light-" + item.style
                    },
                    [
                      _c("span", { staticClass: "symbol-label" }, [
                        _c(
                          "span",
                          {
                            staticClass: "svg-icon svg-icon-lg",
                            class: "svg-icon-" + item.style
                          },
                          [_c("inline-svg", { attrs: { src: item.svg } })],
                          1
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex flex-column font-weight-bold" },
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
                            "\n            " +
                              _vm._s(item.title) +
                              "\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v(
                          "\n            " + _vm._s(item.desc) + "\n          "
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
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=template&id=1740f146&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/widgets/list/Widget4.vue?vue&type=template&id=1740f146& ***!
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
    { staticClass: "card card-custom card-shadowless gutter-b bg-light" },
    [
      _c("div", { staticClass: "card-header border-0" }, [
        _c("h3", { staticClass: "card-title font-weight-bolder text-dark" }, [
          _vm._v("Todo")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-toolbar" },
          [
            _c("Dropdown4", {
              attrs: {
                btnClass:
                  "btn btn-light btn-sm font-size-sm font-weight-bolder dropdown-toggle text-dark-75",
                btnText: "Create"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body pt-2" },
        [
          _vm._l(_vm.list, function(item, i) {
            return [
              _c(
                "div",
                { key: i, staticClass: "d-flex align-items-center mb-10" },
                [
                  _c("span", {
                    staticClass: "bullet bullet-bar align-self-stretch",
                    class: "bg-" + item.style
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass:
                        "checkbox checkbox-lg checkbox-single flex-shrink-0 m-0 mx-4",
                      class: "checkbox-light-" + item.style
                    },
                    [
                      _c("input", {
                        attrs: { type: "checkbox", name: "", value: "1" }
                      }),
                      _vm._v(" "),
                      _c("span")
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex flex-column flex-grow-1" }, [
                    _c(
                      "a",
                      {
                        staticClass:
                          "text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1",
                        attrs: { href: "#" }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.title) + "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-muted font-weight-bold" }, [
                      _vm._v(
                        "\n            " + _vm._s(item.desc) + "\n          "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("Dropdown2", [
                    _c("i", { staticClass: "ki ki-bold-more-hor" })
                  ])
                ],
                1
              )
            ]
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee& ***!
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
    "div",
    { staticClass: "d-flex flex-column flex-root" },
    [
      _c("KTHeaderMobile"),
      _vm._v(" "),
      _vm.loaderEnabled
        ? _c("Loader", { attrs: { logo: _vm.loaderLogo } })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex flex-row flex-column-fluid page" },
        [
          _c("KTAside"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "d-flex flex-column flex-row-fluid wrapper",
              attrs: { id: "kt_wrapper" }
            },
            [
              _c("KTHeader"),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "content d-flex flex-column flex-column-fluid",
                  attrs: { id: "kt_content" }
                },
                [
                  _c("div", { staticClass: "d-flex flex-column-fluid" }, [
                    _c(
                      "div",
                      {
                        class: {
                          "container-fluid": _vm.contentFluid,
                          container: !_vm.contentFluid
                        }
                      },
                      [
                        _c("transition", { attrs: { name: "fade-in-up" } }, [
                          _c("article", [_vm._t("default")], 2)
                        ])
                      ],
                      1
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("KTFooter"),
              _vm._v(" "),
              _c("KTScrollTop")
            ],
            1
          ),
          _vm._v(" "),
          _c("KTSidebar")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
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
                            src: _vm.direccion(
                              "/media/svg/icons/Layout/Layout-4-blocks.svg"
                            )
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
                            src:
                              "<%= BASE_URL %>/media/svg/icons/Communication/Group.svg"
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "aside-brand d-flex flex-column align-items-center flex-column-auto pt-5 pt-lg-18 pb-10"
      },
      [
        _c("div", {
          staticClass: "btn p-0 symbol symbol-60 symbol-light-primary",
          attrs: { id: "kt_quick_user_toggle" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=template&id=488cc6f1&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=template&id=488cc6f1& ***!
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
      ref: "kt_sidebar",
      staticClass: "sidebar sidebar-left d-flex flex-row-auto flex-column",
      attrs: { id: "kt_sidebar" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "sidebar-header flex-column-auto pt-5 pt-lg-19 pb-5 px-5 px-lg-10"
        },
        [
          _c("div", { staticClass: "d-flex" }, [
            _c(
              "div",
              {
                staticClass: "quick-search quick-search-inline flex-grow-1",
                attrs: { id: "kt_quick_search_inline" }
              },
              [
                _c(
                  "form",
                  {
                    staticClass: "quick-search-form",
                    attrs: { method: "get" }
                  },
                  [
                    _c("div", { staticClass: "input-group rounded bg-light" }, [
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
                        staticClass: "form-control h-40px",
                        attrs: { type: "text", placeholder: "Search..." }
                      }),
                      _vm._v(" "),
                      _vm._m(0)
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", {
                  attrs: {
                    id: "kt_quick_search_toggle",
                    "data-toggle": "dropdown",
                    "data-offset": "0px,1px"
                  }
                })
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
            "sidebar-content flex-column-fluid pb-10 pt-9 px-5 px-lg-10"
        },
        [
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("ListWidget4"),
          _vm._v(" "),
          _c("ListWidget1")
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "card card-custom bg-light-success card-shadowless gutter-b"
      },
      [
        _c("div", { staticClass: "card-body my-3" }, [
          _c(
            "a",
            {
              staticClass:
                "card-title font-weight-bolder text-success text-hover-state-dark font-size-h6 mb-4 d-block",
              attrs: { href: "#" }
            },
            [_vm._v("Pacientes activos")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "font-weight-bold text-muted font-size-sm" },
            [
              _c(
                "span",
                {
                  staticClass:
                    "text-dark-75 font-size-h2 font-weight-bolder mr-2"
                },
                [_vm._v("%")]
              ),
              _vm._v("Porcentaje\n        ")
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "progress progress-xs mt-7 bg-success-o-60" },
            [
              _c("div", {
                staticClass: "progress-bar bg-success",
                staticStyle: { width: "67%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "50",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ]
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
          "card card-custom bg-light-warning card-shadowless gutter-b"
      },
      [
        _c("div", { staticClass: "card-body my-4" }, [
          _c(
            "a",
            {
              staticClass:
                "card-title font-weight-bolder text-warning font-size-h6 mb-4 text-hover-state-dark d-block",
              attrs: { href: "#" }
            },
            [_vm._v("Pacientes inactivos")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "font-weight-bold text-muted font-size-sm" },
            [
              _c(
                "span",
                {
                  staticClass:
                    "text-dark-75 font-weight-bolder font-size-h2 mr-2"
                },
                [_vm._v("10%")]
              ),
              _vm._v("pendientes por evaluar\n        ")
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "progress progress-xs mt-7 bg-warning-o-60" },
            [
              _c("div", {
                staticClass: "progress-bar bg-warning",
                staticStyle: { width: "10%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "50",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/content/Loader.vue?vue&type=template&id=117691ad&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/content/Loader.vue?vue&type=template&id=117691ad& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "page-loader page-loader-logo" }, [
    _c("img", { attrs: { alt: "Logo", src: _vm.logo, width: "100" } }),
    _vm._v(" "),
    _c("div", {
      staticClass: "spinner",
      class: _vm.spinnerClass || "spinner-primary"
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      ref: "kt_scrolltop",
      staticClass: "scrolltop",
      attrs: { id: "kt_scrolltop" }
    },
    [
      _c(
        "span",
        { staticClass: "svg-icon" },
        [
          _c("inline-svg", {
            attrs: { src: "media/svg/icons/Navigation/Up-2.svg" }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      "ul",
      {
        staticClass: "sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4"
      },
      [
        _c(
          "li",
          {
            directives: [
              {
                name: "b-tooltip",
                rawName: "v-b-tooltip.hover.left",
                value: "Layout builder",
                expression: "'Layout builder'",
                modifiers: { hover: true, left: true }
              }
            ],
            staticClass: "nav-item mb-2"
          },
          [
            _c(
              "router-link",
              {
                staticClass:
                  "btn btn-sm btn-icon btn-bg-light btn-text-primary btn-hover-primary",
                attrs: { href: "#", to: { name: "builder" } }
              },
              [_c("i", { staticClass: "flaticon2-gear" })]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "b-tooltip",
                rawName: "v-b-tooltip.hover.left",
                value: "Documentation",
                expression: "'Documentation'",
                modifiers: { hover: true, left: true }
              }
            ],
            staticClass: "nav-item"
          },
          [_vm._m(0)]
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
      "a",
      {
        staticClass:
          "btn btn-sm btn-icon btn-bg-light btn-text-warning btn-hover-warning",
        attrs: {
          href: "https://keenthemes.com/metronic/?page=docs",
          target: "_blank"
        }
      },
      [_c("i", { staticClass: "flaticon2-telegram-logo" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=00c27b30&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickActions.vue?vue&type=template&id=00c27b30& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=88b2cd4a&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickNotifications.vue?vue&type=template&id=88b2cd4a& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/footer/Footer.vue?vue&type=template&id=68a27d3b&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/footer/Footer.vue?vue&type=template&id=68a27d3b& ***!
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
      staticClass: "footer py-2 py-lg-0 my-5 d-flex flex-lg-column",
      attrs: { id: "kt_footer" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "d-flex flex-column flex-md-row align-items-center justify-content-between",
          class: {
            "container-fluid": _vm.widthFluid,
            container: !_vm.widthFluid
          }
        },
        [_vm._m(0), _vm._v(" "), _vm._m(1)]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-dark order-2 order-md-1" }, [
      _c("span", { staticClass: "text-muted font-weight-bold mr-2" }, [
        _vm._v("2020©")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "text-dark-75 text-hover-primary",
          attrs: { href: "http://keenthemes.com/metronic", target: "_blank" }
        },
        [_vm._v("Keenthemes")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "nav nav-dark order-1 order-md-2" }, [
      _c(
        "a",
        {
          staticClass: "nav-link pr-3 pl-0",
          attrs: { href: "http://keenthemes.com/metronic", target: "_blank" }
        },
        [_vm._v("About")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "nav-link px-3",
          attrs: { href: "http://keenthemes.com/metronic", target: "_blank" }
        },
        [_vm._v("Team")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "nav-link pl-3 pr-0",
          attrs: { href: "http://keenthemes.com/metronic", target: "_blank" }
        },
        [_vm._v("Contact")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=template&id=1248be43&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Dropdown2.vue?vue&type=template&id=1248be43& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        "b-button",
        { attrs: { variant: "dark" } },
        [
          _c(
            "inertia-link",
            { attrs: { href: _vm.route("patients.create") } },
            [
              _c(
                "span",
                { staticClass: "menu-text", staticStyle: { color: "white" } },
                [_vm._v("Nuevo Paciente")]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-button",
        { attrs: { variant: "dark" } },
        [
          _c(
            "inertia-link",
            { attrs: { href: _vm.route("patients.create") } },
            [
              _c(
                "span",
                { staticClass: "menu-text", staticStyle: { color: "white" } },
                [_vm._v("Crear Cita")]
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      ref: "kt_header_mobile",
      staticClass: "header-mobile header-mobile-fixed",
      class: _vm.headerClasses,
      attrs: { id: "kt_header_mobile" }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "button",
          {
            ref: "kt_sidebar_mobile_toggle",
            staticClass: "btn btn-hover-text-primary p-0 ml-5",
            attrs: { id: "kt_sidebar_mobile_toggle" }
          },
          [
            _c(
              "span",
              { staticClass: "svg-icon svg-icon-xl" },
              [
                _c("inline-svg", {
                  attrs: { src: "media/svg/icons/Design/Substract.svg" }
                })
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            ref: "kt_aside_mobile_toggle",
            staticClass: "btn btn-hover-text-primary p-0 ml-2",
            attrs: { id: "kt_aside_mobile_toggle" }
          },
          [
            _c(
              "span",
              { staticClass: "svg-icon svg-icon-xl" },
              [
                _c("inline-svg", {
                  attrs: { src: "media/svg/icons/General/User.svg" }
                })
              ],
              1
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/" } }, [
      _c("img", {
        staticClass: "logo-default max-h-30px",
        attrs: { alt: "Logo", src: "media/logos/logo-letter-1.png" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn rounded-0 p-0 burger-icon burger-icon-left",
        attrs: { id: "kt_header_mobile_toggle" }
      },
      [_c("span")]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("ul", { staticClass: "menu-nav" }, [
    _c(
      "li",
      {
        staticClass: "menu-item",
        attrs: { "aria-haspopup": "true", "data-menu-toggle": "hover" }
      },
      [
        _c(
          "inertia-link",
          { staticClass: "menu-link", attrs: { href: _vm.route("home") } },
          [_c("span", { staticClass: "menu-text" }, [_vm._v(" Inicio ")])]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "li",
      {
        staticClass: "menu-item",
        attrs: { "aria-haspopup": "true", "data-menu-toggle": "hover" }
      },
      [
        _c(
          "inertia-link",
          {
            staticClass: "menu-link",
            attrs: { href: _vm.route("patients.index") }
          },
          [_c("span", { staticClass: "menu-text" }, [_vm._v(" Pacientes ")])]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
                [_vm._v("\n          " + _vm._s(_vm.title) + "\n        ")]
              ),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass:
                    "breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2"
                },
                [
                  _c("li", { staticClass: "breadcrumb-item" }),
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
                          !breadcrumb.route
                            ? _c(
                                "span",
                                { key: i, staticClass: "text-muted" },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(breadcrumb.title) +
                                      "\n              "
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
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
                [_vm._v("\n          Actions\n        ")]
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
                          _vm._v("\n              Jump to:\n              "),
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown2.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown2.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0239a758", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown3.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/dropdown/Dropdown3.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("73bee018", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Aside.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2303fde0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/aside/Sidebar.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("77347940", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subheader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("95ad0556", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);