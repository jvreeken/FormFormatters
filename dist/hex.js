"use strict";

var HexMask = {
  mask: function mask(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var newValue = value.toUpperCase();
    return newValue.replace(/[^A-F0-9]+/g, "");
  }
};

module.exports = HexMask;