"use strict";

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _numeral = require("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _translator = require("../utils/translator");

var _translator2 = _interopRequireDefault(_translator);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _StrFormatter$format = _string2.default.format(value, options),
        valid = _StrFormatter$format.valid,
        parsed = _StrFormatter$format.parsed,
        formatted = _StrFormatter$format.formatted,
        errors = _StrFormatter$format.errors;

    if (valid && parsed.length > 0) {
      parsed = (0, _numeral2.default)(_lodash2.default.trim(parsed.replace(/[$\s,]/g, ""))).value();
      if (typeof parsed === "undefined" || parsed === null) {
        parsed = value;
        formatted = value;
        if (options.required) {
          valid = false;
          errors.push(_translator2.default.translate("Citadel.utils.formatters.required"));
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