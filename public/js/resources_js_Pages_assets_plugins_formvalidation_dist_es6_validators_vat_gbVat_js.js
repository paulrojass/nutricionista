(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_gbVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/gbVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/gbVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var s = t;

  if (/^GB[0-9]{9}$/.test(s) || /^GB[0-9]{12}$/.test(s) || /^GBGD[0-9]{3}$/.test(s) || /^GBHA[0-9]{3}$/.test(s) || /^GB(GD|HA)8888[0-9]{5}$/.test(s)) {
    s = s.substr(2);
  }

  if (!/^[0-9]{9}$/.test(s) && !/^[0-9]{12}$/.test(s) && !/^GD[0-9]{3}$/.test(s) && !/^HA[0-9]{3}$/.test(s) && !/^(GD|HA)8888[0-9]{5}$/.test(s)) {
    return {
      meta: {},
      valid: false
    };
  }

  var e = s.length;

  if (e === 5) {
    var _t = s.substr(0, 2);

    var _e = parseInt(s.substr(2), 10);

    return {
      meta: {},
      valid: "GD" === _t && _e < 500 || "HA" === _t && _e >= 500
    };
  } else if (e === 11 && ("GD8888" === s.substr(0, 6) || "HA8888" === s.substr(0, 6))) {
    if ("GD" === s.substr(0, 2) && parseInt(s.substr(6, 3), 10) >= 500 || "HA" === s.substr(0, 2) && parseInt(s.substr(6, 3), 10) < 500) {
      return {
        meta: {},
        valid: false
      };
    }

    return {
      meta: {},
      valid: parseInt(s.substr(6, 3), 10) % 97 === parseInt(s.substr(9, 2), 10)
    };
  } else if (e === 9 || e === 12) {
    var _t2 = [8, 7, 6, 5, 4, 3, 2, 10, 1];
    var _e2 = 0;

    for (var _r = 0; _r < 9; _r++) {
      _e2 += parseInt(s.charAt(_r), 10) * _t2[_r];
    }

    _e2 = _e2 % 97;
    var r = parseInt(s.substr(0, 3), 10) >= 100 ? _e2 === 0 || _e2 === 42 || _e2 === 55 : _e2 === 0;
    return {
      meta: {},
      valid: r
    };
  }

  return {
    meta: {},
    valid: true
  };
}

/***/ })

}]);