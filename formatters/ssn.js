import Translator from "../utils/translator";
import StrFormatter from "./string";

const SSNFormatter = {
  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StrFormatter.format(value, options);

    if(valid && parsed.length > 0) {
      // remove all non-digits
      parsed = parsed.replace(/\D/g, "");
      formatted = parsed.replace(/^(\d{3})(\d{2})(\d{4})$/, "$1-$2-$3");
      if(parsed.length !== 9) {
        valid = false;
        parsed = value;
        formatted = value;
        errors.push(Translator.translate("FormFormatters.ssnInvalid"));
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

module.exports = SSNFormatter;
