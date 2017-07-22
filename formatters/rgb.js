import numeral from "numeral";
import Translator from "../utils/translator";
import NumberFormatter from "./number";

const RgbFormatter = {
  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = NumberFormatter.format(value, options);

    if(valid && parsed !== "") {
      let numObj = numeral(parsed);
      parsed = numObj.value();
      if(typeof(parsed) === "undefined" || parsed === null) {
        parsed = value || "";
        formatted = value || "";
        if(options.required && valid) {
          valid = false;
          errors.push(Translator.translate("FormFormatters.required"));
        }
      } else if(parsed > 255 || parsed < 0) {
        valid = false;
        errors.push(Translator.translate("FormFormatters.rgbInvalid"));
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

module.exports = RgbFormatter;
