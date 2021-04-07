(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_core_services_i18n_service_js"],{

/***/ "./resources/js/Pages/core/services/i18n.service.js":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/core/services/i18n.service.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
var i18nService = {
  defaultLanguage: "en",
  languages: [{
    lang: "en",
    name: "English",
    flag: process.env.BASE_URL + "media/svg/flags/226-united-states.svg"
  }, {
    lang: "ch",
    name: "Mandarin",
    flag: process.env.BASE_URL + "media/svg/flags/034-china.svg"
  }, {
    lang: "es",
    name: "Spanish",
    flag: process.env.BASE_URL + "media/svg/flags/128-spain.svg"
  }, {
    lang: "jp",
    name: "Japanese",
    flag: process.env.BASE_URL + "media/svg/flags/063-japan.svg"
  }, {
    lang: "de",
    name: "German",
    flag: process.env.BASE_URL + "media/svg/flags/162-germany.svg"
  }, {
    lang: "fr",
    name: "French",
    flag: process.env.BASE_URL + "media/svg/flags/195-france.svg"
  }],

  /**
   * Keep the active language in the localStorage
   * @param lang
   */
  setActiveLanguage: function setActiveLanguage(lang) {
    localStorage.setItem("language", lang);
  },

  /**
   * Get the current active language
   * @returns {string | string}
   */
  getActiveLanguage: function getActiveLanguage() {
    return localStorage.getItem("language") || this.defaultLanguage;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18nService);

/***/ })

}]);