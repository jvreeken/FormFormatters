"use strict";

var EmailMask = {
  mask: function mask(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return value.toLowerCase();
  }
};

module.exports = EmailMask;