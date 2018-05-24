"use strict";

var _numeral = require("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PercentFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    options = (0, _lodash.merge)({}, { format: "decimal" }, options);

    var _StringFormatter$form = _string2.default.format(value, options),
        valid = _StringFormatter$form.valid,
        parsed = _StringFormatter$form.parsed,
        formatted = _StringFormatter$form.formatted,
        errors = _StringFormatter$form.errors;

    if (!(0, _lodash.isEmpty)(parsed)) {
      var numObj = (0, _numeral2.default)((0, _lodash.trim)(parsed.replace(/[$\s,%]/g, "")));
      parsed = numObj.value();
      if (typeof parsed === "undefined" || parsed === null) {
        parsed = value;
        formatted = value;
        valid = false;
        errors.push("FormFormatters.required");
      } else {
        if (options.format === "decimal") {
          formatted = numObj.format("0,0.00");
        } else {
          formatted = numObj.format("0,0");
        }
        formatted = formatted + "%";
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

module.exports = PercentFormatter;