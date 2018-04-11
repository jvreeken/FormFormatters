import StringFormatter from "./string";

const SSNLastFourFormatter = {
  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StringFormatter.format(value, options);

    if(valid) {
      parsed = parsed.replace(/\D/g, "");
      formatted = parsed;

      if(parsed.length !== 4) {
        valid = false;
        errors.push();
        errors.push("FormFormatters.last4Invalid");
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

module.exports = SSNLastFourFormatter;
