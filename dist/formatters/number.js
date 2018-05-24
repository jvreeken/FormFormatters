"use strict";

var _numeral = require("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _StringFormatter$form = _string2.default.format(value, options),
        valid = _StringFormatter$form.valid,
        parsed = _StringFormatter$form.parsed,
        formatted = _StringFormatter$form.formatted,
        errors = _StringFormatter$form.errors;

    if (valid && parsed.length > 0) {
      parsed = (0, _numeral2.default)(parsed.replace(/[$\s,]/g, "").trim()).value();
      if (typeof parsed === "undefined" || parsed === null) {
        parsed = value;
        formatted = value;
        if (options.required) {
          valid = false;
          errors.push("FormFormatters.required");
        }
      }
      formatted = parsed.toString();
    }

    return {
      valid: valid,
      parsed: parsed,
      formatted: formatted,
      errors: errors
    };
  }
};

module.exports = NumberFormatter;