const capitalize = require("./strings.js");
const reverseString = require("./reveseString.js");
const calculator = require("./calculator.js");
const caesarCipherize = require("./caesarCipher.js");
const analyzeArray = require("./analyzeArray.js");

test("capitalize first letter", () => {
  expect(capitalize("string")).toBe("String");
});

test("reverse the string", () => {
  expect(reverseString("English or Spanish")).toBe("hsinapS ro hsilgnE");
});

test("add 5 and 9", () => {
  expect(calculator().add(5, 9)).toBe(14);
});

test("subtract 4 from 29", () => {
  expect(calculator().subtract(29, 4)).toBe(25);
});

test("divide 40 with 5", () => {
  expect(calculator().divide(40, 5)).toBe(8);
});

test("what is xyz?", () => {
  expect(caesarCipherize("xyz", 3)).toBe("abc");
});

test("what is HeLLo", () => {
  expect(caesarCipherize("HeLLo", 3)).toBe("KhOOr");
});

test("what is Hello, World!", () => {
  expect(caesarCipherize("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("returns average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
