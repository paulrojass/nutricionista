(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_esVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/esVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/esVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var s = function s(t) {
    var e = parseInt(t.substr(0, 8), 10);
    return "".concat("TRWAGMYFPDXBNJZSQVHLCKE"[e % 23]) === t.substr(8, 1);
  };

  var r = function r(t) {
    var e = ["XYZ".indexOf(t.charAt(0)), t.substr(1)].join("");
    var s = "TRWAGMYFPDXBNJZSQVHLCKE"[parseInt(e, 10) % 23];
    return "".concat(s) === t.substr(8, 1);
  };

  var n = function n(t) {
    var e = t.charAt(0);
    var s;

    if ("KLM".indexOf(e) !== -1) {
      s = parseInt(t.substr(1, 8), 10);
      s = "TRWAGMYFPDXBNJZSQVHLCKE"[s % 23];
      return "".concat(s) === t.substr(8, 1);
    } else if ("ABCDEFGHJNPQRSUVW".indexOf(e) !== -1) {
      var _e = [2, 1, 2, 1, 2, 1, 2];
      var _s = 0;
      var _r = 0;

      for (var _n = 0; _n < 7; _n++) {
        _r = parseInt(t.charAt(_n + 1), 10) * _e[_n];

        if (_r > 9) {
          _r = Math.floor(_r / 10) + _r % 10;
        }

        _s += _r;
      }

      _s = 10 - _s % 10;

      if (_s === 10) {
        _s = 0;
      }

      return "".concat(_s) === t.substr(8, 1) || "JABCDEFGHI"[_s] === t.substr(8, 1);
    }

    return false;
  };

  var a = e.charAt(0);

  if (/^[0-9]$/.test(a)) {
    return {
      meta: {
        type: "DNI"
      },
      valid: s(e)
    };
  } else if (/^[XYZ]$/.test(a)) {
    return {
      meta: {
        type: "NIE"
      },
      valid: r(e)
    };
  } else {
    return {
      meta: {
        type: "CIF"
      },
      valid: n(e)
    };
  }
}

/***/ })

}]);