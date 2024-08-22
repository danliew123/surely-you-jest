const sum = require("./sum.js");

test("adds 1 + 2 to equal 3.", () => {
  expect(sum(1, 2)).toBe(3);
});

// test("object assignment", () => {
//   const data = { one: 1 };
//   data["two"] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// test("adding positive numbers is not zero", () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 1; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// test("null", () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test("adding floating point numbers", () => {
//   const value = 0.1 + 0.2;
//   // expect(value).toBe(0.3);
//   expect(value).toBeCloseTo(0.3);
// });

// test("there is no I in team", () => {
//   expect("team").not.toMatch(/I/);
// });

// const shoppingList = [
//   "diapers",
//   "kleenex",
//   "trash bags",
//   "paper towels",
//   "milk",
// ];

// test("the shopping list has milk on it", () => {
//   expect(shoppingList).toContain("milk");
//   expect(new Set(shoppingList)).toContain("milk");
// });

// function compileAndroidCode() {
//   throw new Error("you are using the wrong JDK!");
// }

// test("compiling android goes as expected", () => {
//   expect(() => compileAndroidCode()).toThrow(Error);
// });
