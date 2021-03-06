"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateFormatter = {
  monthYearFormat: "MMM YYYY",
  monthDayYearFormat: "MMM D, YYYY",

  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if ((0, _lodash.isNil)(options["format"])) {
      options["format"] = "full-date";
    }

    var _StringFormatter$form = _string2.default.format(value, options),
        valid = _StringFormatter$form.valid,
        parsed = _StringFormatter$form.parsed,
        formatted = _StringFormatter$form.formatted,
        errors = _StringFormatter$form.errors;

    if (valid && parsed.length > 0) {
      var temp = this.parseDate(parsed);
      valid = temp.isValid();
      parsed = "";
      formatted = "";
      if (valid) {
        // store parsed value as just the date portion.
        parsed = temp.format("YYYY-MM-DD");
        if (options.format === "month-year") {
          formatted = temp.format(this.monthYearFormat);
        } else {
          formatted = temp.format(this.monthDayYearFormat);
        }
      } else {
        valid = false;
        errors.push("FormFormatters.dateInvalid");
      }
    }

    return {
      valid: valid,
      parsed: parsed,
      formatted: formatted,
      errors: errors
    };
  },
  parseDate: function parseDate(date) {
    return (0, _moment2.default)(date, [
    // dates
    "MMDDYYYY", "MMM YYYY", "MMM DD YYYY", "M-D-YYYY", "YYYY-M-D",
    // date times
    "YYYY-MM-DD h:mm a", "MMM DD YYYY h:mm a", "M-D-YYYY h:mm a", "YYYY-MM-DD h:mm a",
    // date times with seconds
    "YYYY-MM-DD h:mm:ss a", "MMM DD YYYY h:mm:ss a", "M-D-YYYY h:mm:ss a", "YYYY-MM-DD h:mm:ss a"]);
  }
};

module.exports = DateFormatter;