import Moment from "moment";
import StringFormatter from "./string";

const TimeFormatter = {
  timeFormat: "h:mm a",

  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StringFormatter.format(value, options);

    if(valid && parsed.length > 0) {
      let temp = Moment(parsed, "hh:mm:ss a");
      if(temp.isValid()) {
        formatted = temp.format(this.timeFormat);
        parsed = formatted;
      } else {
        valid = false;
        formatted = "";
        parsed = "";
        errors.push("FormFormatters.timeInvalid");
      }
    }

    return({
      valid,
      parsed,
      formatted,
      errors
    });
  }
};

module.exports = TimeFormatter;
