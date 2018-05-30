"use strict";

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NameFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _StrFormatter$format = _string2.default.format(value, options),
        valid = _StrFormatter$format.valid,
        parsed = _StrFormatter$format.parsed,
        formatted = _StrFormatter$format.formatted,
        errors = _StrFormatter$format.errors;

    parsed = parsed.toLowerCase();
    formatted = formatted.toLowerCase();
    if (valid && parsed.length > 0) {
      var arr = parsed.split(" ").map(function (item) {
        return item.charAt(0).toUpperCase() + item.slice(1);
      });
      parsed = arr.join(" ");
      formatted = parsed;
    }

    return {
      valid: valid,
      parsed: parsed,
      formatted: formatted,
      errors: errors
    };
  }
};

module.exports = NameFormatter;