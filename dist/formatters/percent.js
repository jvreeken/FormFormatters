"use strict";

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _numeral = require("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _simpleTranslator = require("simple-translator");

var _simpleTranslator2 = _interopRequireDefault(_simpleTranslator);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PercentFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    options = _lodash2.default.merge({}, { format: "decimal" }, options);

    var _StrFormatter$format = _string2.default.format(value, options),
        valid = _StrFormatter$format.valid,
        parsed = _StrFormatter$format.parsed,
        formatted = _StrFormatter$format.formatted,
        errors = _StrFormatter$format.errors;

    if (!_lodash2.default.isEmpty(parsed)) {
      var numObj = (0, _numeral2.default)(_lodash2.default.trim(parsed.replace(/[$\s,%]/g, "")));
      parsed = numObj.value();
      if (typeof parsed === "undefined" || parsed === null) {
        parsed = value;
        formatted = value;
        valid = false;
        errors.push(_simpleTranslator2.default.translate("FormFormatters.required"));
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