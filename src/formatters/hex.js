import StringFormatter from "./string";

const HexFormatter = {
  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StringFormatter.format(value, options);

    parsed = parsed.toUpperCase();
    formatted = formatted.toUpperCase();
    if(valid && parsed.length > 0) {
      // remove all non-digits
      let hexRegex = /^[A-F0-9]+$/;
      valid = hexRegex.test(formatted);
      if(parsed.length !== 6) {
        valid = false;
      }
      if(!valid) {
        errors.push("FormFormatters.hexInvalid");
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

module.exports = HexFormatter;
