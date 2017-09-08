"use strict";

var _lodash = require("lodash");

var _numeral = require("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _simpleTranslator = require("simple-translator");

var _simpleTranslator2 = _interopRequireDefault(_simpleTranslator);

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrencyFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if ((0, _lodash.isNil)(options["format"])) {
      options["format"] = "cents";
    }

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
          errors.push(_simpleTranslator2.default.translate("FormFormatters.required"));
        }
      }
      formatted = numObj.format("$0,0.00");
      if (options.format === "dollars") {
        formatted = numObj.format("$0,0");
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

module.exports = CurrencyFormatter;