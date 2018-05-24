import numeral from "numeral";
import StringFormatter from "./string";
import { merge, isEmpty, trim } from "lodash";

const PercentFormatter = {
  format(value, options = {}) {
    options = merge({}, {format: "decimal"}, options);
    let{valid, parsed, formatted, errors} = StringFormatter.format(value, options);

    if(!isEmpty(parsed)) {
      let numObj = numeral(trim(parsed.replace(/[$\s,%]/g, "")));
      parsed = numObj.value();
      if(typeof(parsed) === "undefined" || parsed === null) {
        parsed = value;
        formatted = value;
        valid = false;
        errors.push("FormFormatters.required");
      } else {
        if(options.format === "decimal") {
          formatted = numObj.format("0,0.00");
        } else {
          formatted = numObj.format("0,0");
        }
        formatted = formatted + "%";
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

module.exports = PercentFormatter;
