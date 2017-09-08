import _ from "lodash";
import numeral from "numeral";
import Translator from "simple-translator";
import StrFormatter from "./string";

const PercentFormatter = {
  format(value, options = {}) {
    options = _.merge({}, {format: "decimal"}, options);
    let{valid, parsed, formatted, errors} = StrFormatter.format(value, options);

    if(!_.isEmpty(parsed)) {
      let numObj = numeral(_.trim(parsed.replace(/[$\s,%]/g, "")));
      parsed = numObj.value();
      if(typeof(parsed) === "undefined" || parsed === null) {
        parsed = value;
        formatted = value;
        valid = false;
        errors.push(Translator.translate("FormFormatters.required"));
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
