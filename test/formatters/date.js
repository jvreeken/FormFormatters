import formatter from "../../src/formatters/date";
import Translator from "simple-translator"; 
import test from "ava";

const English = {
  FormFormatters: {
    dateInvalid: "date is invalid",
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
  t.deepEqual(formatter.format(""), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("converts number", t => {
  t.deepEqual(formatter.format(23), {
    errors: [],
    formatted: "Jan 1, 2023",
    parsed: "2023-01-01",
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" 1112223333 "), {
    errors: [],
    formatted: "Nov 12, 2233",
    parsed: "2233-11-12",
    valid: true
  });
});

test("formats dates", t => {
  t.deepEqual(formatter.format("5-5-14"), {
    errors: [],
    formatted: "May 5, 2014",
    parsed: "2014-05-05",
    valid: true
  });
});

test("formats MMDDYYYY", t => {
  t.deepEqual(formatter.format("05052014"), {
    errors: [],
    formatted: "May 5, 2014",
    parsed: "2014-05-05",
    valid: true
  });
});

test("formats MMM YYYY", t => {
  t.deepEqual(formatter.format("May 2014"), {
    errors: [],
    formatted: "May 1, 2014",
    parsed: "2014-05-01",
    valid: true
  });
});

test("formats MMM DD YYYY", t => {
  t.deepEqual(formatter.format("May 5 2014"), {
    errors: [],
    formatted: "May 5, 2014",
    parsed: "2014-05-05",
    valid: true
  });
});

test("formats MMM DD YYYY h:mm", t => {
  t.deepEqual(formatter.format("May 5 2014 12:00"), {
    errors: [],
    formatted: "May 5, 2014",
    parsed: "2014-05-05",
    valid: true
  });
});

test("does not handle errors", t => {
  Translator.registerDefaultLanguage("en", English);

  t.deepEqual(formatter.format("abc"), {
    errors: ["date is invalid"],
    formatted: "",
    parsed: "",
    valid: false
  });
});
