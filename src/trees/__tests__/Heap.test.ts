import Heap from "../Heap";

describe("Heap", function () {
  test("it can be created", function () {
    const heap = new Heap([1, 3, 2]);
    expect(heap.first()).toBe(3);
  });

  test("it works with a lot of values", function () {
    const heap = new Heap([3, 2, 10, 9, 5, 4, 8, 7, 6, 1]);
    expect(heap.first()).toBe(10);
  });

  test("it can remove values", function () {
    const heap = new Heap([1, 3, 2]);
    heap.remove();
    expect(heap.first()).toBe(2);
  });

  test("it can remove with a lot of values", function () {
    const heap = new Heap([3, 2, 10, 9, 5, 4, 8, 7, 6, 1]);

    for (let i = 10; i > 0; i--) {
      expect(heap.first()).toBe(i);
      heap.remove();
    }
  });
});
