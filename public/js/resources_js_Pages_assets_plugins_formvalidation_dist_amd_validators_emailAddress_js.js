(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_emailAddress_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/emailAddress.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/emailAddress.js ***!
  \**********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function emailAddress() {
    var splitEmailAddresses = function splitEmailAddresses(emailAddresses, separator) {
      var quotedFragments = emailAddresses.split(/"/);
      var quotedFragmentCount = quotedFragments.length;
      var emailAddressArray = [];
      var nextEmailAddress = '';

      for (var i = 0; i < quotedFragmentCount; i++) {
        if (i % 2 === 0) {
          var splitEmailAddressFragments = quotedFragments[i].split(separator);
          var splitEmailAddressFragmentCount = splitEmailAddressFragments.length;

          if (splitEmailAddressFragmentCount === 1) {
            nextEmailAddress += splitEmailAddressFragments[0];
          } else {
            emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);

            for (var j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
              emailAddressArray.push(splitEmailAddressFragments[j]);
            }

            nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
          }
        } else {
          nextEmailAddress += '"' + quotedFragments[i];

          if (i < quotedFragmentCount - 1) {
            nextEmailAddress += '"';
          }
        }
      }

      emailAddressArray.push(nextEmailAddress);
      return emailAddressArray;
    };

    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          multiple: false,
          separator: /[,;]/
        }, input.options);
        var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var allowMultiple = opts.multiple === true || "" + opts.multiple === 'true';

        if (allowMultiple) {
          var separator = opts.separator || /[,;]/;
          var addresses = splitEmailAddresses(input.value, separator);
          var length_1 = addresses.length;

          for (var i = 0; i < length_1; i++) {
            if (!emailRegExp.test(addresses[i])) {
              return {
                valid: false
              };
            }
          }

          return {
            valid: true
          };
        } else {
          return {
            valid: emailRegExp.test(input.value)
          };
        }
      }
    };
  }

  exports.default = emailAddress;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);