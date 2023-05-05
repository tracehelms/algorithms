/*
 * Fibonacci Sequence
 *
 * The first way is basically an exact code implementation of the definition.
 * However, it has many redundand recursive call stacks (like calcuating
 * `fibonacci(4)` again as a part of `fibonacci(5)` and `fibonacci(6)`, etc.
 *
 * The efficiency of this algorithm is O(2^n), which is very slow.
 *
 */
export const fibonacci = (n: number): number => {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
};

/*
 * Memoized Fibonacci Sequence
 *
 * Adding memoization to this algorithm greatly increases the efficiency at the cost
 * of additional space to store the memo. This algorithm can look up Fibonacci numbers
 * that have already been calculated instead of recalculating them.
 *
 * The efficiency of this algorithm is O(n), much faster.
 *
 */
export const memoizedFibonacci = (
  n: number,
  memo: Map<number, number> = new Map()
): number => {
  if (n < 2) {
    return n;
  }

  if (!memo.get(n)) {
    memo.set(n, memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1));
  }

  return memo.get(n) || 0;
};

/*
 * Bottom Up Fibonacci Sequence
 *
 * This non-recursive version is less intuitive, but it's another way to speed up
 * the Fibonacci sequence. It also doesn't need the extra space like the memoized
 * version.
 *
 * This algorithm is also O(n), which is as fast as the memoized version.
 *
 */
export const bottomUpFibonacci = (n: number): number => {
  if (n === 0) return 0;

  let secondLast = 0;
  let last = 1;

  for (let i = 1; i < n; i++) {
    const temp = secondLast;
    secondLast = last;
    last = temp + secondLast;
  }

  return last;
};
