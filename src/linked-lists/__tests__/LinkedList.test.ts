import LinkedList from "../LinkedList";

describe("LinkedList", function () {
  test("it can be created", function () {
    const list = new LinkedList([1, 2, 3]);
    expect(list.hd()).toBe(1);
  });

  test("it can add data after being created", function () {
    const list = new LinkedList([1, 2, 3]);
    list.add(4);
    expect(list.hd()).toBe(4);
  });

  test("it can read from an index", function () {
    const list = new LinkedList([1, 2, 3]);
    expect(list.read(2)).toBe(3);

    const list2 = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(list2.read(9)).toBe(10);
  });

  test("it can search for data", function () {
    const list = new LinkedList([1, 2, 3]);
    expect(list.search(2)).toBe(1);

    const list2 = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(list2.search(9)).toBe(8);
    expect(list2.search(11)).toBe(-1);
  });

  test("it can convert to an array", function () {
    const array = [1, 2, 3];
    const list = new LinkedList(array);
    expect(list.toArray()).toStrictEqual(array);

    const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const list2 = new LinkedList(array2);
    expect(list2.toArray()).toStrictEqual(array2);
  });

  test("it can insert data at a given index", function () {
    const list: LinkedList<number> = new LinkedList([]);
    list.insertAtIndex(2, 0);
    expect(list.toArray()).toStrictEqual([2]);

    const list2 = new LinkedList([1]);
    list2.insertAtIndex(2, 1);
    expect(list2.toArray()).toStrictEqual([1, 2]);

    const list3 = new LinkedList([1, 2, 3]);
    list3.insertAtIndex(5, 2);
    expect(list3.toArray()).toStrictEqual([1, 2, 5, 3]);
  });

  test("it can delete data at a given index", function () {
    const list = new LinkedList([1]);
    list.deleteAtIndex(0);
    expect(list.toArray()).toStrictEqual([]);

    const list2 = new LinkedList([1, 2, 3, 4]);
    list2.deleteAtIndex(2);
    expect(list2.toArray()).toStrictEqual([1, 2, 4]);

    const list3 = new LinkedList([1, 2, 3]);
    list3.deleteAtIndex(0);
    expect(list3.toArray()).toStrictEqual([2, 3]);
  });
});
