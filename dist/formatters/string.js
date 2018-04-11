"use strict";

var _lodash = require("lodash");

var StringFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if ((0, _lodash.isNil)(options["required"])) {
      options["required"] = false;
    }
    var errors = [];

    if ((0, _lodash.isNumber)(value)) {
      value = value.toString();
    }
    if ((0, _lodash.isEmpty)(value)) {
      value = "";
    }

    var formatted = (0, _lodash.isNil)(value) ? "" : value.toString().trim();
    var parsed = formatted;
    if (options.required && (0, _lodash.isEmpty)(parsed)) {
      errors.push("FormFormatters.required");
    }

    return {
      valid: errors.length === 0,
      parsed: parsed,
      formatted: formatted,
      errors: errors
    };
  }
};

module.exports = StringFormatter;