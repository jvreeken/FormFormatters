import formatter from "../../src/formatters/currency";
import Translator from "simple-translator"; 
import test from "ava";

const English = {
  FormFormatters: {
    required: "is required"
  }
};

test("converts null", t => {
  Translator.registerDefaultLanguage("en", English);

  t.deepEqual(formatter.format(null, {required: true}), {
    errors: ["is required"],
    formatted: "",
    parsed: "",
    valid: false
  });
});

test("returns an error if required", t => {
  Translator.registerDefaultLanguage("en", English);

  t.deepEqual(formatter.format("", {required: true}), {
    errors: ["is required"],
    formatted: "",
    parsed: "",
    valid: false
  });
});

test("does not return an error if not required", t => {
  t.deepEqual(formatter.format(null), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" 1112223333 "), {
    errors: [],
    formatted: "$1,112,223,333.00",
    parsed: 1112223333,
    valid: true
  });
});

test("formats cents", t => {
  t.deepEqual(formatter.format("$5.14"), {
    errors: [],
    formatted: "$5.14",
    parsed: 5.14,
    valid: true
  });
});

test("formats dollars", t => {
  t.deepEqual(formatter.format("$5.14", {format: "dollars"}), {
    errors: [],
    formatted: "$5",
    parsed: 5.14,
    valid: true
  });
});

test("(doesn't) handle errors", t => {
  Translator.registerDefaultLanguage("en", English);

  t.deepEqual(formatter.format("abc", {required: true}), {
    errors: ["is required"],
    formatted: "abc",
    parsed: "abc",
    valid: false
  });
});
