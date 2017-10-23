import StrFormatter from "./string";

const NameFormatter = {
  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StrFormatter.format(value, options);

    parsed = parsed.toLowerCase();
    formatted = formatted.toLowerCase();
    if(valid && parsed.length > 0) {
      let arr = parsed.split(" ").map((item) => {
        return(item.charAt(0).toUpperCase() + item.slice(1));
      });
      parsed = arr.join(" ");
      formatted = parsed;
    }

    return({
      valid,
      parsed,
      formatted,
      errors
    });
  }
};

module.exports = NameFormatter;
