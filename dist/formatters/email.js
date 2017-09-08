"use strict";

var _simpleTranslator = require("simple-translator");

var _simpleTranslator2 = _interopRequireDefault(_simpleTranslator);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailFormatter = {
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
      // remove all non-digits
      var emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
      valid = emailRegex.test(formatted);
      if (!valid) {
        errors.push(_simpleTranslator2.default.translate("FormFormatters.emailInvalid"));
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

module.exports = EmailFormatter;