import { isEmpty, isNil, isNumber } from "lodash";
import Translator from "simple-translator";

const StringFormatter = {
  format(value, options = {}) {
    if(isNil(options["required"])) {
      options["required"] = false;
    }
    let errors = [];

    if(isNumber(value)) {
      value = value.toString();
    }
    if(isEmpty(value)) {
      value = "";
    }

    let formatted = isNil(value) ? "" : value.toString().trim();
    let parsed = formatted;
    if(options.required && isEmpty(parsed)) {
      errors.push(Translator.translate("FormFormatters.required"));
    }

    return({
      valid: errors.length === 0,
      parsed,
      formatted,
      errors
    });
  }
};

module.exports = StringFormatter;
