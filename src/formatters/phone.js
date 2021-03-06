import StringFormatter from "./string";

const PhoneFormatter = {
  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StringFormatter.format(value, options);

    if(valid && parsed.length > 0) {
      // remove all non-digits
      parsed = parsed.replace(/\D/g, "");
      formatted = parsed.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      if(parsed.length !== 10) {
        valid = false;
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.phoneInvalid");
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

module.exports = PhoneFormatter;
