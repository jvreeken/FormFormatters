import numeral from "numeral";
import StrFormatter from "./string";

const NumberFormatter = {
  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StrFormatter.format(value, options);

    if(valid && parsed.length > 0) {
      parsed = numeral(parsed.replace(/[$\s,]/g, "").trim()).value();
      if(typeof(parsed) === "undefined" || parsed === null) {
        parsed = value;
        formatted = value;
        if(options.required) {
          valid = false;
          errors.push("FormFormatters.required");
        }
      }
      formatted = parsed.toString();
    }

    return({
      valid,
      parsed,
      formatted,
      errors
    });
  }
};

module.exports = NumberFormatter;
