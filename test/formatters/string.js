import test from "ava";
import formatter from "../../src/formatters/string";

test("converts number", t => {
  t.deepEqual(formatter.format(23), {
    errors: [],
    formatted: "23",
    parsed: "23",
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" hi "), {
    errors: [],
    formatted: "hi",
    parsed: "hi",
    valid: true
  });
});

test("returns an error if required", t => {
  t.deepEqual(formatter.format("", {required: true}), {
    errors: ["FormFormatters.required"],
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

test("converts null", t => {
  t.deepEqual(formatter.format(null, {required: true}), {
    errors: ["FormFormatters.required"],
    formatted: "",
    parsed: "",
    valid: false
  });
});
