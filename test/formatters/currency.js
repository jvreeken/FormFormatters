import formatter from "../../src/formatters/currency";
import test from "ava";

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
  t.deepEqual(formatter.format("abc", {required: true}), {
    errors: ["FormFormatters.required"],
    formatted: "abc",
    parsed: "abc",
    valid: false
  });
});
