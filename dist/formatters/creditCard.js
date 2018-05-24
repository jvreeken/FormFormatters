"use strict";

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreditCardFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _StringFormatter$form = _string2.default.format(value, options),
        valid = _StringFormatter$form.valid,
        parsed = _StringFormatter$form.parsed,
        formatted = _StringFormatter$form.formatted,
        errors = _StringFormatter$form.errors;

    if (valid && parsed.length > 0) {
      // remove all non-digits
      parsed = parsed.replace(/\D/g, "");
      // AMEX CHECK - if first two numbers are 34 or 37
      if (/^3[47]/.test(parsed)) {
        formatted = parsed.replace(/^(\d{4})(\d{6})(\d{5})$/, "$1 $2 $3");
        if (parsed.length !== 15) {
          valid = false;
          parsed = value;
          formatted = value;
          errors.push("FormFormatters.amexCreditCardInvalid");
        }
      } else {
        // ALL OTHER CREDIT CARDS
        formatted = parsed.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1 $2 $3 $4");
        if (parsed.length !== 16) {
          valid = false;
          parsed = value;
          formatted = value;
          errors.push("FormFormatters.otherCreditCardInvalid");
        }
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