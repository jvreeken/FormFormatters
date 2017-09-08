const HexMask = {
  mask(value, options = {}) {
    let newValue = value.toUpperCase();
    return(newValue.replace(/[^A-F0-9]+/g, ""));
  }
};

module.exports = HexMask;
