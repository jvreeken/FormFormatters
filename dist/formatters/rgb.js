"use strict";

var _numeral = require("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RgbFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _NumberFormatter$form = _number2.default.format(value, options),
        valid = _NumberFormatter$form.valid,
        parsed = _NumberFormatter$form.parsed,
        formatted = _NumberFormatter$form.formatted,
        errors = _NumberFormatter$form.errors;

    if (valid && parsed !== "") {
      var numObj = (0, _numeral2.default)(parsed);
      parsed = numObj.value();
      if (typeof parsed === "undefined" || parsed === null) {
        parsed = value || "";
        formatted = value || "";
        if (options.required && valid) {
          valid = false;
          errors.push("FormFormatters.required");
        }
      } else if (parsed > 255 || parsed < 0) {
        valid = false;
        errors.push("FormFormatters.rgbInvalid");
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

module.exports = RgbFormatter;