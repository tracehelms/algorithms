import { factorial } from "../factorial";

describe("factorial", function () {
  test("it works", function () {
    expect(factorial(5)).toBe(120);
  });
});
