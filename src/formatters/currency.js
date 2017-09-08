import { isNil } from "lodash";
import Numeral from "numeral";
import Translator from "simple-translator";
import NumberFormatter from "./number";

const CurrencyFormatter = {
  format(value, options = {}) {
    if(isNil(options["format"])) {
      options["format"] = "cents";
    }
    let{valid, parsed, formatted, errors} = NumberFormatter.format(value, options);

    if(valid && parsed !== "") {
      let numObj = Numeral(parsed);
      parsed = numObj.value();
      if(typeof(parsed) === "undefined" || parsed === null) {
        parsed = value || "";
        formatted = value || "";
        if(options.required && valid) {
          valid = false;
          errors.push(Translator.translate("FormFormatters.required"));
        }
      }
      formatted = numObj.format("$0,0.00");
      if(options.format === "dollars") {
        formatted = numObj.format("$0,0");
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

module.exports = CurrencyFormatter;
