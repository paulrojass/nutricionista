(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_esId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/esId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/esId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t);
  var s = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t);
  var n = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(t);

  if (!e && !s && !n) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = t.replace(/-/g, "");
  var l;
  var a;
  var f = true;

  if (e || s) {
    a = "DNI";

    var _t = "XYZ".indexOf(r.charAt(0));

    if (_t !== -1) {
      r = _t + r.substr(1) + "";
      a = "NIE";
    }

    l = parseInt(r.substr(0, 8), 10);
    l = "TRWAGMYFPDXBNJZSQVHLCKE"[l % 23];
    return {
      meta: {
        type: a
      },
      valid: l === r.substr(8, 1)
    };
  } else {
    l = r.substr(1, 7);
    a = "CIF";
    var _t2 = r[0];

    var _e = r.substr(-1);

    var _s = 0;

    for (var _t3 = 0; _t3 < l.length; _t3++) {
      if (_t3 % 2 !== 0) {
        _s += parseInt(l[_t3], 10);
      } else {
        var _e2 = "" + parseInt(l[_t3], 10) * 2;

        _s += parseInt(_e2[0], 10);

        if (_e2.length === 2) {
          _s += parseInt(_e2[1], 10);
        }
      }
    }

    var _n = _s - Math.floor(_s / 10) * 10;

    if (_n !== 0) {
      _n = 10 - _n;
    }

    if ("KQS".indexOf(_t2) !== -1) {
      f = _e === "JABCDEFGHI"[_n];
    } else if ("ABEH".indexOf(_t2) !== -1) {
      f = _e === "" + _n;
    } else {
      f = _e === "" + _n || _e === "JABCDEFGHI"[_n];
    }

    return {
      meta: {
        type: a
      },
      valid: f
    };
  }
}

/***/ })

}]);