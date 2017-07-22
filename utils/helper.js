module.exports = {
  isArray(value) {
    if(this.isNil(value)) { return(false); }

    return(value.constructor === Array);
  },

  isEmpty(value) {
    if(this.isNil(value)) { return(true); }

    return(
      (this.isString(value) && value.length === 0)
      || (this.isArray(value) && value.length === 0)
      || (this.isObject(value) && Object.keys(value).length === 0)
    );
  },

  isNil(value) {
    return(value === null || typeof(value) === "undefined");
  },

  isNumber(value) {
    if(this.isNil(value)) { return(false); }

    return(typeof(value) === "number");
  },

  isObject(value) {
    if(this.isNil(value)) { return(false); }

    return(value.constructor === Object);
  },

  isString(value) {
    if(this.isNil(value)) { return(false); }

    return(typeof(value) === "string");
  }
}
