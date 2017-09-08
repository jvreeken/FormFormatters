import test from "ava";
import formatter from "../../src/formatters/phone";

test("converts null", t => {
  t.deepEqual(formatter.format(null, {required: true}), {
    errors: ["FormFormatters.required"],
    formatted: "",
    parsed: "",
    valid: false
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

test("converts number", t => {
  t.deepEqual(formatter.format(23), {
    errors: ["FormFormatters.phoneInvalid"],
    formatted: 23,
    parsed: 23,
    valid: false
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" 1112223333 "), {
    errors: [],
    formatted: "(111) 222-3333",
    parsed: "1112223333",
    valid: true
  });
});

test("formats strings", t => {
  t.deepEqual(formatter.format("1112223333"), {
    errors: [],
    formatted: "(111) 222-3333",
    parsed: "1112223333",
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(formatter.format("111222333"), {
    errors: ["FormFormatters.phoneInvalid"],
    formatted: "111222333",
    parsed: "111222333",
    valid: false
  });
});
