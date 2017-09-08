import test from "ava";
import formatter from "../../formatters/number";

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

test("trims white space", t => {
  t.deepEqual(formatter.format(" 1112223333 "), {
    errors: [],
    formatted: "1112223333",
    parsed: 1112223333,
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(formatter.format("111asdf222333.23"), {
    errors: [],
    formatted: "111222333.23",
    parsed: 111222333.23,
    valid: true
  });
});
