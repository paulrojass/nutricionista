(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_id_esId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/esId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/esId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function esId(value) {
    var isDNI = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    var isNIE = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    var isCIF = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);

    if (!isDNI && !isNIE && !isCIF) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value.replace(/-/g, '');
    var check;
    var tpe;
    var isValid = true;

    if (isDNI || isNIE) {
      tpe = 'DNI';
      var index = 'XYZ'.indexOf(v.charAt(0));

      if (index !== -1) {
        v = index + v.substr(1) + '';
        tpe = 'NIE';
      }

      check = parseInt(v.substr(0, 8), 10);
      check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
      return {
        meta: {
          type: tpe
        },
        valid: check === v.substr(8, 1)
      };
    } else {
      check = v.substr(1, 7);
      tpe = 'CIF';
      var letter = v[0];
      var control = v.substr(-1);
      var sum = 0;

      for (var i = 0; i < check.length; i++) {
        if (i % 2 !== 0) {
          sum += parseInt(check[i], 10);
        } else {
          var tmp = '' + parseInt(check[i], 10) * 2;
          sum += parseInt(tmp[0], 10);

          if (tmp.length === 2) {
            sum += parseInt(tmp[1], 10);
          }
        }
      }

      var lastDigit = sum - Math.floor(sum / 10) * 10;

      if (lastDigit !== 0) {
        lastDigit = 10 - lastDigit;
      }

      if ('KQS'.indexOf(letter) !== -1) {
        isValid = control === 'JABCDEFGHI'[lastDigit];
      } else if ('ABEH'.indexOf(letter) !== -1) {
        isValid = control === '' + lastDigit;
      } else {
        isValid = control === '' + lastDigit || control === 'JABCDEFGHI'[lastDigit];
      }

      return {
        meta: {
          type: tpe
        },
        valid: isValid
      };
    }
  }

  exports.default = esId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);