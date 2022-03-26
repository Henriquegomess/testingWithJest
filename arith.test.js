const { add, mul, sub, div } = require("./arith");

test("2 + 3 = 5", () => {
  try {
    throwError();
    // Fail test if above expression doesn't throw anything.
    expect(add(2, 3)).toBe(4);
  } catch (e) {
    expect(e.message).toBe("UNKNOWN ERROR");
  }
});

test("3 * 4 = 12", () => {
  expect(mul(3, 4)).toBe(12);
});

test("5 - 6 = -1", () => {
  expect(sub(5, 6)).toBe(-1);
});

test("8 / 4 = 2", () => {
  expect(div(8, 4)).toBe(2);
});
