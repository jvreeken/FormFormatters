"use strict";

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HexFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _StrFormatter$format = _string2.default.format(value, options),
        valid = _StrFormatter$format.valid,
        parsed = _StrFormatter$format.parsed,
        formatted = _StrFormatter$format.formatted,
        errors = _StrFormatter$format.errors;

    parsed = parsed.toUpperCase();
    formatted = formatted.toUpperCase();
    if (valid && parsed.length > 0) {
      // remove all non-digits
      var hexRegex = /^[A-F0-9]+$/;
      valid = hexRegex.test(formatted);
      if (parsed.length !== 6) {
        valid = false;
      }
      if (!valid) {
        errors.push("FormFormatters.hexInvalid");
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

module.exports = HexFormatter;