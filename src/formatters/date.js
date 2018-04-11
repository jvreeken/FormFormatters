import Moment from "moment";
import StrFormatter from "./string";
import { isNil } from "lodash";

const DateFormatter = {
  monthYearFormat: "MMM YYYY",
  monthDayYearFormat: "MMM D, YYYY",

  format(value, options = {}) {
    if(isNil(options["format"])) {
      options["format"] = "full-date";
    }
    let{valid, parsed, formatted, errors} = StrFormatter.format(value, options);

    if(valid && parsed.length > 0) {
      let temp = this.parseDate(parsed);
      valid = temp.isValid();
      parsed = "";
      formatted = "";
      if(valid) {
        // store parsed value as just the date portion.
        parsed = temp.format("YYYY-MM-DD");
        if(options.format === "month-year") {
          formatted = temp.format(this.monthYearFormat);
        } else {
          formatted = temp.format(this.monthDayYearFormat);
        }
      } else {
        valid = false;
        errors.push("FormFormatters.dateInvalid");
      }
    }

    return({
      valid,
      parsed,
      formatted,
      errors
    });
  },

  parseDate(date) {
    return Moment(date, [
      // dates
      "MMDDYYYY",
      "MMM YYYY",
      "MMM DD YYYY",
      "M-D-YYYY",
      "YYYY-M-D",
      // date times
      "YYYY-MM-DD h:mm a",
      "MMM DD YYYY h:mm a",
      "M-D-YYYY h:mm a",
      "YYYY-MM-DD h:mm a",
      // date times with seconds
      "YYYY-MM-DD h:mm:ss a",
      "MMM DD YYYY h:mm:ss a",
      "M-D-YYYY h:mm:ss a",
      "YYYY-MM-DD h:mm:ss a"
    ]);
  }
};

module.exports = DateFormatter;
