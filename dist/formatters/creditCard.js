"use strict";

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreditCardFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _StrFormatter$format = _string2.default.format(value, options),
        valid = _StrFormatter$format.valid,
        parsed = _StrFormatter$format.parsed,
        formatted = _StrFormatter$format.formatted,
        errors = _StrFormatter$format.errors;

    if (valid && parsed.length > 0) {
      // remove all non-digits
      parsed = parsed.replace(/\D/g, "");
      formatted = parsed.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1-$2-$3-$4");
      if (parsed.length !== 16) {
        valid = false;
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.creditCardInvalid");
      }
    }

    return {
      valid: valid,
      parsed: parsed,
      formatted: formatted,
      errors: errors
    };
  }
};

module.exports = CreditCardFormatter;