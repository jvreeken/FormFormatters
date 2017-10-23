import formatter from "../../src/formatters/name";
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

test("accepts valid name", t => {
  t.deepEqual(formatter.format("Bob Smith"), {
    errors: [],
    formatted: "Bob Smith",
    parsed: "Bob Smith",
    valid: true
  });
});

test("trims whitespace", t => {
  t.deepEqual(formatter.format(" Bob Smith "), {
    errors: [],
    formatted: "Bob Smith",
    parsed: "Bob Smith",
    valid: true
  });
});

test("catches lowercase names", t => {
  t.deepEqual(formatter.format("bob smith"), {
    errors: [],
    formatted: "Bob Smith",
    parsed: "Bob Smith",
    valid: true
  });
});
