import { bottomUpFibonacci, fibonacci, memoizedFibonacci } from "../fibonacci";

describe("fibonacci", function () {
  test("it works", function () {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(19)).toBe(4181);
  });

  test("it doesnt run fast", function () {
    const t0 = performance.now();
    const fib = fibonacci(30);
    const t1 = performance.now();
    console.log(
      `Execution time for calculating the 30th Fibonacci took ${
        t1 - t0
      } milliseconds.`
    );

    expect(fib).toEqual(832040);
  });
});

describe("memoizedFibonacci", function () {
  test("it works", function () {
    expect(memoizedFibonacci(0)).toBe(0);
    expect(memoizedFibonacci(1)).toBe(1);
    expect(memoizedFibonacci(2)).toBe(1);
    expect(memoizedFibonacci(3)).toBe(2);
    expect(memoizedFibonacci(10)).toBe(55);
    expect(memoizedFibonacci(19)).toBe(4181);
  });

  test("it runs fast", function () {
    const t0 = performance.now();
    const fib = memoizedFibonacci(30);
    const t1 = performance.now();
    console.log(
      `Execution time for calculating the 30th Fibonacci with memoization took ${
        t1 - t0
      } milliseconds.`
    );

    expect(fib).toEqual(832040);
  });
});

describe("bottomUpFibonacci", function () {
  test("it works", function () {
    expect(bottomUpFibonacci(0)).toBe(0);
    expect(bottomUpFibonacci(1)).toBe(1);
    expect(bottomUpFibonacci(2)).toBe(1);
    expect(bottomUpFibonacci(3)).toBe(2);
    expect(bottomUpFibonacci(10)).toBe(55);
    expect(bottomUpFibonacci(19)).toBe(4181);
  });

  test("it runs fast", function () {
    const t0 = performance.now();
    const fib = bottomUpFibonacci(30);
    const t1 = performance.now();
    console.log(
      `Execution time for calculating the 30th Fibonacci with the bottom up method took ${
        t1 - t0
      } milliseconds.`
    );

    expect(fib).toEqual(832040);
  });
});
