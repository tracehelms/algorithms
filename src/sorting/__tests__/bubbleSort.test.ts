import { bubbleSort } from "../bubbleSort";
import { largeRandomArray, largeSortedArray } from "../../util";

describe("bubbleSort", () => {
  it("works", () => {
    expect(bubbleSort([2, 3, 1])).toEqual([1, 2, 3]);
    expect(bubbleSort([2, 3, 1, 8, 6, 7, 9, 5, 4])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it("handles a big array", () => {
    const t0 = performance.now();
    const sorted = bubbleSort(largeRandomArray);
    const t1 = performance.now();
    console.log(
      `Execution time for Bubble Sort on a 10,000 length array took ${
        t1 - t0
      } milliseconds.`
    );

    expect(sorted).toEqual(largeSortedArray);
  });
});
