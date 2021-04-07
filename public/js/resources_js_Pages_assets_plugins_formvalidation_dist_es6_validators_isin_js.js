(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_isin_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/isin.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/isin.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ M)
/* harmony export */ });
function M() {
  var M = "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|" + "BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|" + "SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|" + "IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|" + "MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|" + "PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|" + "SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|" + "YE|ZM|ZW";
  return {
    validate: function validate(t) {
      if (t.value === "") {
        return {
          valid: true
        };
      }

      var S = t.value.toUpperCase();
      var A = new RegExp("^(" + M + ")[0-9A-Z]{10}$");

      if (!A.test(t.value)) {
        return {
          valid: false
        };
      }

      var G = S.length;
      var C = "";
      var T;

      for (T = 0; T < G - 1; T++) {
        var _M = S.charCodeAt(T);

        C += _M > 57 ? (_M - 55).toString() : S.charAt(T);
      }

      var e = "";
      var B = C.length;
      var E = B % 2 !== 0 ? 0 : 1;

      for (T = 0; T < B; T++) {
        e += parseInt(C[T], 10) * (T % 2 === E ? 2 : 1) + "";
      }

      var N = 0;

      for (T = 0; T < e.length; T++) {
        N += parseInt(e.charAt(T), 10);
      }

      N = (10 - N % 10) % 10;
      return {
        valid: "".concat(N) === S.charAt(G - 1)
      };
    }
  };
}

/***/ })

}]);