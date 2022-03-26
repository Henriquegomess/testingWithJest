const { sum, positive, negative } = require("./math-utils");

let vals;
let sum_of_vals;
let pos_vals;
let neg_vals;

beforeAll(() => {
  pos_vals = [2, 1, 3];
  neg_vals = [-2, -1, -1];
  vals = pos_vals.concat(neg_vals);
  sum_of_vals = vals.reduce((x, y) => x + y, 0);
});

test("the sum of vals should be 2", () => {
  expect(sum(vals)).toBe(sum_of_vals);
});

test("should get positive values", () => {
  expect(positive(vals)).toEqual(pos_vals);
});

test("should get negative values", () => {
  expect(negative(vals)).toEqual(neg_vals);
});
