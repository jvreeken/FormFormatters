import test from "ava";
import formatter from "../../src/formatters/creditCard";

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
    errors: ["FormFormatters.creditCardInvalid"],
    formatted: 23,
    parsed: 23,
    valid: false
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" 1234 5678 9012 3456 "), {
    errors: [],
    formatted: "1234 5678 9012 3456",
    parsed: "1234567890123456",
    valid: true
  });
});

test("formats strings", t => {
  t.deepEqual(formatter.format("1111222233334444"), {
    errors: [],
    formatted: "1111 2222 3333 4444",
    parsed: "1111222233334444",
    valid: true
  });
});

test("formats strings with spaces", t => {
  t.deepEqual(formatter.format("1111 2222 3333 4444"), {
    errors: [],
    formatted: "1111 2222 3333 4444",
    parsed: "1111222233334444",
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(formatter.format("11122333"), {
    errors: ["FormFormatters.creditCardInvalid"],
    formatted: "11122333",
    parsed: "11122333",
    valid: false
  });
});

test("is valid AMEX card starting with 34", t => {
  t.deepEqual(formatter.format("3411 111111 11111"), {
    errors: [],
    formatted: "3411 111111 11111",
    parsed: "341111111111111",
    valid: true
  });
});

test("is valid AMEX card starting with 37", t => {
  t.deepEqual(formatter.format("3711 111111 11111"), {
    errors: [],
    formatted: "3711 111111 11111",
    parsed: "371111111111111",
    valid: true
  });
});

test("is invalid AMEX card starting with 34", t => {
  t.deepEqual(formatter.format("3411"), {
    errors: ["FormFormatters.amexCreditCardInvalid"],
    formatted: "3411",
    parsed: "3411",
    valid: false
  });
});

test("is invalid AMEX card starting with 37", t => {
  t.deepEqual(formatter.format("3711"), {
    errors: ["FormFormatters.amexCreditCardInvalid"],
    formatted: "3711",
    parsed: "3711",
    valid: false
  });
});
