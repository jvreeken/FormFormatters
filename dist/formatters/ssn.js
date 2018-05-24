"use strict";

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SSNFormatter = {
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
      formatted = parsed.replace(/^(\d{3})(\d{2})(\d{4})$/, "$1-$2-$3");
      if (parsed.length !== 9) {
        valid = false;
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.ssnInvalid");
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

module.exports = SSNFormatter;