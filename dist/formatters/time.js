"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

var _simpleTranslator = require("simple-translator");

var _simpleTranslator2 = _interopRequireDefault(_simpleTranslator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeFormatter = {
  timeFormat: "h:mm a",

  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _StrFormatter$format = _string2.default.format(value, options),
        valid = _StrFormatter$format.valid,
        parsed = _StrFormatter$format.parsed,
        formatted = _StrFormatter$format.formatted,
        errors = _StrFormatter$format.errors;

    if (valid && parsed.length > 0) {
      var temp = (0, _moment2.default)(parsed, "hh:mm:ss a");
      if (temp.isValid()) {
        formatted = temp.format(this.timeFormat);
        parsed = formatted;
      } else {
        valid = false;
        formatted = "";
        parsed = "";
        errors.push(_simpleTranslator2.default.translate("FormFormatters.timeInvalid"));
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

module.exports = TimeFormatter;