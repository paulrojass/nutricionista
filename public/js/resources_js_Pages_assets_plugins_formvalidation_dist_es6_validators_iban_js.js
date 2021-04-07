(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_iban_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/iban.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/iban.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Z)
/* harmony export */ });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js");

function Z() {
  var Z = {
    AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",
    AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}",
    AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",
    AO: "AO[0-9]{2}[0-9]{21}",
    AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}",
    AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",
    BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",
    BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",
    BF: "BF[0-9]{2}[0-9]{23}",
    BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",
    BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",
    BI: "BI[0-9]{2}[0-9]{12}",
    BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}",
    BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",
    CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
    CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}",
    CM: "CM[0-9]{2}[0-9]{23}",
    CR: "CR[0-9]{2}[0-9][0-9]{3}[0-9]{14}",
    CV: "CV[0-9]{2}[0-9]{21}",
    CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",
    CZ: "CZ[0-9]{2}[0-9]{20}",
    DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}",
    DK: "DK[0-9]{2}[0-9]{14}",
    DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",
    DZ: "DZ[0-9]{2}[0-9]{20}",
    EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",
    ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",
    FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",
    FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
    FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
    GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
    GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}",
    GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",
    GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
    GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",
    GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",
    HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}",
    HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",
    IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
    IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",
    IR: "IR[0-9]{2}[0-9]{22}",
    IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",
    IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
    JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",
    KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}",
    KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
    LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",
    LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
    LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}",
    LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
    LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",
    MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
    MD: "MD[0-9]{2}[A-Z0-9]{20}",
    ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
    MG: "MG[0-9]{2}[0-9]{23}",
    MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",
    ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}",
    MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",
    MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",
    MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",
    MZ: "MZ[0-9]{2}[0-9]{21}",
    NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}",
    NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",
    PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
    PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}",
    PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
    PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",
    QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
    RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
    RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
    SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",
    SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",
    SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",
    SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",
    SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
    SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}",
    TL: "TL38[0-9]{3}[0-9]{14}[0-9]{2}",
    TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
    TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",
    VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}",
    XK: "XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}"
  };
  var e = ["AT", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GI", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK", "SM"];
  return {
    validate: function validate(s) {
      if (s.value === "") {
        return {
          valid: true
        };
      }

      var t = Object.assign({}, {
        message: ""
      }, s.options);
      var a = s.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
      var r = t.country || a.substr(0, 2);

      if (!Z[r]) {
        return {
          message: t.message,
          valid: false
        };
      }

      if (t.sepa !== undefined) {
        var _A = e.indexOf(r) !== -1;

        if ((t.sepa === "true" || t.sepa === true) && !_A || (t.sepa === "false" || t.sepa === false) && _A) {
          return {
            message: t.message,
            valid: false
          };
        }
      }

      var n = (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(s.l10n ? t.message || s.l10n.iban.country : t.message, s.l10n ? s.l10n.iban.countries[r] : r);

      if (!new RegExp("^".concat(Z[r], "$")).test(s.value)) {
        return {
          message: n,
          valid: false
        };
      }

      a = "".concat(a.substr(4)).concat(a.substr(0, 4));
      a = a.split("").map(function (A) {
        var Z = A.charCodeAt(0);
        return Z >= "A".charCodeAt(0) && Z <= "Z".charCodeAt(0) ? Z - "A".charCodeAt(0) + 10 : A;
      }).join("");
      var I = parseInt(a.substr(0, 1), 10);
      var L = a.length;

      for (var _A2 = 1; _A2 < L; ++_A2) {
        I = (I * 10 + parseInt(a.substr(_A2, 1), 10)) % 97;
      }

      return {
        message: n,
        valid: I === 1
      };
    }
  };
}

/***/ })

}]);