import formatter from "../../src/formatters/email";
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
  t.deepEqual(formatter.format(""), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("converts number", t => {
  t.deepEqual(formatter.format(23), {
    errors: ["FormFormatters.emailInvalid"],
    formatted: "23",
    parsed: "23",
    valid: false
  });
});

test("accepts valid emails", t => {
  t.deepEqual(formatter.format("bob@example.com"), {
    errors: [],
    formatted: "bob@example.com",
    parsed: "bob@example.com",
    valid: true
  });
});

test("trims whitespace", t => {
  t.deepEqual(formatter.format(" bob@example.com "), {
    errors: [],
    formatted: "bob@example.com",
    parsed: "bob@example.com",
    valid: true
  });
});

test("catches invalid emails", t => {
  t.deepEqual(formatter.format("bob@example. com "), {
    errors: ["FormFormatters.emailInvalid"],
    formatted: "bob@example. com",
    parsed: "bob@example. com",
    valid: false
  });
});
