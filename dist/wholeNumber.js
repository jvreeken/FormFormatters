"use strict";

var WholeNumberMask = {
  mask: function mask(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return value.replace(/[^0-9]+/g, "");
  }
};

module.exports = WholeNumberMask;