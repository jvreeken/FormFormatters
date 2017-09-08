const StringMask = {
  mask(value, options = {}) {
    return(value.replace(/[^0-9.%]+/g, ""));
  }
};

module.exports = StringMask;
