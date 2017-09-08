import Helper from "../utils/helper";
import Translator from "simple-translator";

const StringFormatter = {
  format(value, options = {}) {
    if(Helper.isNil(options["required"])) {
      options["required"] = false;
    }
    let errors = [];

    if(Helper.isNumber(value)) {
      value = value.toString();
    }
    if(Helper.isEmpty(value)) {
      value = "";
    }

    let formatted = Helper.isNil(value) ? "" : value.toString().trim();
    let parsed = formatted;
    if(options.required && Helper.isEmpty(parsed)) {
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
