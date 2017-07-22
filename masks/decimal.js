const DecimalMask = {
  mask(value, options = {}) {
    return(value.replace(/[^0-9.]+/g, ""));
  }
};

module.exports = DecimalMask;
