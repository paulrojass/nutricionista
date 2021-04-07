(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_zipCode_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
function r(r, e) {
  var t = Array.isArray(e) ? e : [e];
  var a = r;
  t.forEach(function (r) {
    a = a.replace("%s", r);
  });
  return a;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/zipCode.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/zipCode.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js");

function s() {
  var s = ["AT", "BG", "BR", "CA", "CH", "CZ", "DE", "DK", "ES", "FR", "GB", "IE", "IN", "IT", "MA", "NL", "PL", "PT", "RO", "RU", "SE", "SG", "SK", "US"];

  var a = function a(e) {
    var s = "[ABCDEFGHIJKLMNOPRSTUWYZ]";
    var a = "[ABCDEFGHKLMNOPQRSTUVWXY]";
    var t = "[ABCDEFGHJKPMNRSTUVWXY]";
    var r = "[ABEHMNPRVWXY]";
    var u = "[ABDEFGHJLNPQRSTUWXYZ]";
    var c = [new RegExp("^(".concat(s, "{1}").concat(a, "?[0-9]{1,2})(\\s*)([0-9]{1}").concat(u, "{2})$"), "i"), new RegExp("^(".concat(s, "{1}[0-9]{1}").concat(t, "{1})(\\s*)([0-9]{1}").concat(u, "{2})$"), "i"), new RegExp("^(".concat(s, "{1}").concat(a, "{1}?[0-9]{1}").concat(r, "{1})(\\s*)([0-9]{1}").concat(u, "{2})$"), "i"), new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$", "i"), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i];

    for (var _i = 0, _c = c; _i < _c.length; _i++) {
      var _s = _c[_i];

      if (_s.test(e)) {
        return true;
      }
    }

    return false;
  };

  return {
    validate: function validate(t) {
      var r = Object.assign({}, t.options);

      if (t.value === "" || !r.country) {
        return {
          valid: true
        };
      }

      var u = t.value.substr(0, 2);

      if ("function" === typeof r.country) {
        u = r.country.call(this);
      } else {
        u = r.country;
      }

      if (!u || s.indexOf(u.toUpperCase()) === -1) {
        return {
          valid: true
        };
      }

      var c = false;
      u = u.toUpperCase();

      switch (u) {
        case "AT":
          c = /^([1-9]{1})(\d{3})$/.test(t.value);
          break;

        case "BG":
          c = /^([1-9]{1}[0-9]{3})$/.test(t.value);
          break;

        case "BR":
          c = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(t.value);
          break;

        case "CA":
          c = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(t.value);
          break;

        case "CH":
          c = /^([1-9]{1})(\d{3})$/.test(t.value);
          break;

        case "CZ":
          c = /^(\d{3})([ ]?)(\d{2})$/.test(t.value);
          break;

        case "DE":
          c = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(t.value);
          break;

        case "DK":
          c = /^(DK(-|\s)?)?\d{4}$/i.test(t.value);
          break;

        case "ES":
          c = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(t.value);
          break;

        case "FR":
          c = /^[0-9]{5}$/i.test(t.value);
          break;

        case "GB":
          c = a(t.value);
          break;

        case "IN":
          c = /^\d{3}\s?\d{3}$/.test(t.value);
          break;

        case "IE":
          c = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(t.value);
          break;

        case "IT":
          c = /^(I-|IT-)?\d{5}$/i.test(t.value);
          break;

        case "MA":
          c = /^[1-9][0-9]{4}$/i.test(t.value);
          break;

        case "NL":
          c = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(t.value);
          break;

        case "PL":
          c = /^[0-9]{2}\-[0-9]{3}$/.test(t.value);
          break;

        case "PT":
          c = /^[1-9]\d{3}-\d{3}$/.test(t.value);
          break;

        case "RO":
          c = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(t.value);
          break;

        case "RU":
          c = /^[0-9]{6}$/i.test(t.value);
          break;

        case "SE":
          c = /^(S-)?\d{3}\s?\d{2}$/i.test(t.value);
          break;

        case "SG":
          c = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(t.value);
          break;

        case "SK":
          c = /^(\d{3})([ ]?)(\d{2})$/.test(t.value);
          break;

        case "US":
        default:
          c = /^\d{4,5}([\-]?\d{4})?$/.test(t.value);
          break;
      }

      return {
        message: (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(t.l10n ? r.message || t.l10n.zipCode.country : r.message, t.l10n ? t.l10n.zipCode.countries[u] : u),
        valid: c
      };
    }
  };
}

/***/ })

}]);