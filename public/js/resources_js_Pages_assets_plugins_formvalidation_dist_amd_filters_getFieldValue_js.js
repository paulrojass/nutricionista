(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_filters_getFieldValue_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/filters/getFieldValue.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/filters/getFieldValue.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function getFieldValue(form, field, element, elements) {
    var type = (element.getAttribute('type') || '').toLowerCase();
    var tagName = element.tagName.toLowerCase();

    switch (tagName) {
      case 'textarea':
        return element.value;

      case 'select':
        var select = element;
        var index = select.selectedIndex;
        return index >= 0 ? select.options.item(index).value : '';

      case 'input':
        if ('radio' === type || 'checkbox' === type) {
          var checked = elements.filter(function (ele) {
            return ele.checked;
          }).length;
          return checked === 0 ? '' : checked + '';
        } else {
          return element.value;
        }

      default:
        return '';
    }
  }

  exports.default = getFieldValue;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);