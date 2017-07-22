import moment from "moment";
import Translator from "../utils/translator";
import StrFormatter from "./string";

const TimeFormatter = {
  timeFormat: "h:mm a",

  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StrFormatter.format(value, options);

    if(valid && parsed.length > 0) {
      let temp = moment(parsed, "hh:mm:ss a");
      if(temp.isValid()) {
        formatted = temp.format(this.timeFormat);
        parsed = formatted;
      } else {
        valid = false;
        formatted = "";
        parsed = "";
        errors.push(Translator.translate("FormFormatters.timeInvalid"));
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
