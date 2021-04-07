(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_creditCard_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.length;
  var l = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
  var n = 0;
  var r = 0;

  while (e--) {
    r += l[n][parseInt(t.charAt(e), 10)];
    n = 1 - n;
  }

  return r % 10 === 0 && r > 0;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/creditCard.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/creditCard.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l),
/* harmony export */   "CREDIT_CARD_TYPES": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _algorithms_luhn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js");

var t = {
  AMERICAN_EXPRESS: {
    length: [15],
    prefix: ["34", "37"]
  },
  DANKORT: {
    length: [16],
    prefix: ["5019"]
  },
  DINERS_CLUB: {
    length: [14],
    prefix: ["300", "301", "302", "303", "304", "305", "36"]
  },
  DINERS_CLUB_US: {
    length: [16],
    prefix: ["54", "55"]
  },
  DISCOVER: {
    length: [16],
    prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
  },
  ELO: {
    length: [16],
    prefix: ["4011", "4312", "4389", "4514", "4573", "4576", "5041", "5066", "5067", "509", "6277", "6362", "6363", "650", "6516", "6550"]
  },
  FORBRUGSFORENINGEN: {
    length: [16],
    prefix: ["600722"]
  },
  JCB: {
    length: [16],
    prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
  },
  LASER: {
    length: [16, 17, 18, 19],
    prefix: ["6304", "6706", "6771", "6709"]
  },
  MAESTRO: {
    length: [12, 13, 14, 15, 16, 17, 18, 19],
    prefix: ["5018", "5020", "5038", "5868", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
  },
  MASTERCARD: {
    length: [16],
    prefix: ["51", "52", "53", "54", "55"]
  },
  SOLO: {
    length: [16, 18, 19],
    prefix: ["6334", "6767"]
  },
  UNIONPAY: {
    length: [16, 17, 18, 19],
    prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
  },
  VISA: {
    length: [16],
    prefix: ["4"]
  },
  VISA_ELECTRON: {
    length: [16],
    prefix: ["4026", "417500", "4405", "4508", "4844", "4913", "4917"]
  }
};
function l() {
  return {
    validate: function validate(l) {
      if (l.value === "") {
        return {
          meta: {
            type: null
          },
          valid: true
        };
      }

      if (/[^0-9-\s]+/.test(l.value)) {
        return {
          meta: {
            type: null
          },
          valid: false
        };
      }

      var r = l.value.replace(/\D/g, "");

      if (!(0,_algorithms_luhn__WEBPACK_IMPORTED_MODULE_0__.default)(r)) {
        return {
          meta: {
            type: null
          },
          valid: false
        };
      }

      for (var _i = 0, _Object$keys = Object.keys(t); _i < _Object$keys.length; _i++) {
        var _e = _Object$keys[_i];

        for (var n in t[_e].prefix) {
          if (l.value.substr(0, t[_e].prefix[n].length) === t[_e].prefix[n] && t[_e].length.indexOf(r.length) !== -1) {
            return {
              meta: {
                type: _e
              },
              valid: true
            };
          }
        }
      }

      return {
        meta: {
          type: null
        },
        valid: false
      };
    }
  };
}


/***/ })

}]);