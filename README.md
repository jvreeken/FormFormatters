# Form Formatters

[![CircleCI](https://circleci.com/gh/AlchemyAlcove/FormFormatters/tree/master.svg?style=svg&circle-token=8d93970e17263a753de9a3f15a8cd855b345b91b)](https://circleci.com/gh/AlchemyAlcove/FormFormatters/tree/master)

Formatters and masks for validating and manipulating user input.

This library uses [Simple Translator](https://github.com/AlchemyAlcove/SimpleTranslator) library for multi lingual support on error messages.

Formatters take user input and return an object. For example if the user entered " 1112223333 " into a currency field. The response would be:

```json
{
  errors: [],
  formatted: "$1,112,223,333.00",
  parsed: 1112223333,
  valid: true
}
```

Entering "abc" into a currency field would result in:

```json
{
  error: ["FormFormatters.required"],
  formatted: "abc",
  parsed: "abc",
  valid: false
}
```

You might be thinking, but it's a number field how come the result has letters in it? Well the formatters job is to format the text and respond with whether it is valid. The masks job is to mask out values like letters from currency inputs. The mask should run before the formatter.

The mask will return in the the same format as the entry. In other words, it will not return in a complex object.

## Formatters
CurrencyFormatter
DateFormatter
EmailFormatter
HexFormatter
NameFormatter
NumberFormatter
PercentFormatter
PhoneFormatter
RgbFormatter
SsnLastFourFormatter
StringFormatter
TimeFormatter

## Masks
CurrencyMask
DecimalMask
EmailMask
HexMask
PercentMask
PhoneMask
SsnMask
SsnLastFourMask
StringMask
TimeMask
WholeNumberMask
