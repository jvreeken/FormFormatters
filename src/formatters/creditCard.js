import StringFormatter from "./string";

const CreditCardFormatter = {
  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StringFormatter.format(value, options);

    if(valid && parsed.length > 0) {
      // remove all non-digits
      parsed = parsed.replace(/\D/g, "");
      formatted = parsed.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1-$2-$3-$4");
      if(parsed.length !== 16) {
        valid = false;
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.creditCardInvalid");
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

module.exports = CreditCardFormatter;
