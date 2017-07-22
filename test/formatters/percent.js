import test from "ava";
import formatter from "../../app/formatters/percent";

test("converts null", t => {
  t.deepEqual(formatter.format(null, {required: true}), {
    errors: ["Citadel.utils.formatters.required"],
    formatted: "",
    parsed: "",
    valid: false
  });
});

test("returns an error if required", t => {
  t.deepEqual(formatter.format("", {required: true}), {
    errors: ["Citadel.utils.formatters.required"],
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
    formatted: "23.00%",
    parsed: 23,
    valid: true
  });
});

test("no decimal", t => {
  t.deepEqual(formatter.format(23.23, {format: "whole"}), {
    errors: [],
    formatted: "23%",
    parsed: 23.23,
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" 1112223333 "), {
    errors: [],
    formatted: "1,112,223,333.00%",
    parsed: 1112223333,
    valid: true
  });
});

test("formats strings", t => {
  t.deepEqual(formatter.format("1112223333"), {
    errors: [],
    formatted: "1,112,223,333.00%",
    parsed: 1112223333,
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(formatter.format("asdf"), {
    errors: ["Citadel.utils.formatters.required"],
    formatted: "asdf",
    parsed: "asdf",
    valid: false
  });
});

test("no decimal string", t => {
  t.deepEqual(formatter.format("23.23%", {format: "whole"}), {
    errors: [],
    formatted: "23%",
    parsed: 23.23,
    valid: true
  });
});
