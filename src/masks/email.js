const EmailMask = {
  mask(value, options = {}) {
    return(value.toLowerCase());
  }
};

module.exports = EmailMask;
