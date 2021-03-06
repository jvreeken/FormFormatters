import StringFormatter from "./string";

const EmailFormatter = {
  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StringFormatter.format(value, options);

    parsed = parsed.toLowerCase();
    formatted = formatted.toLowerCase();
    if(valid && parsed.length > 0) {
      // remove all non-digits
      let emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
      valid = emailRegex.test(formatted);
      if(!valid) {
        errors.push("FormFormatters.emailInvalid");
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

module.exports = EmailFormatter;
