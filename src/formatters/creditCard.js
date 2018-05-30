import StringFormatter from "./string";

const CreditCardFormatter = {
  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StringFormatter.format(value, options);

    if(valid && parsed.length > 0) {
      // remove all non-digits
      parsed = parsed.replace(/\D/g, "");
      // AMEX CHECK - if first two numbers are 34 or 37
      if(/^3[47]/.test(parsed)) {
        formatted = parsed.replace(/^(\d{4})(\d{6})(\d{5})$/, "$1 $2 $3");
        if(parsed.length !== 15) {
          valid = false;
          parsed = value;
          formatted = value;
          errors.push("FormFormatters.amexCreditCardInvalid");
        }
      } else { // ALL OTHER CREDIT CARDS
        formatted = parsed.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1 $2 $3 $4");
        if(parsed.length !== 16) {
          valid = false;
          parsed = value;
          formatted = value;
          errors.push("FormFormatters.creditCardInvalid");
        }
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
