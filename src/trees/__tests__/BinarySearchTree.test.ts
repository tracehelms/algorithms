import BinarySearchTree from "../BinarySearchTree";

describe("BinarySearchTree", function () {
  test("it can be created", function () {
    const tree = new BinarySearchTree();
    expect(tree).not.toBeUndefined();
  });

  test("it can insert a root value", function () {
    const tree: BinarySearchTree = new BinarySearchTree();
    tree.insert(5);
    expect(tree.root?.value).toBe(5);
  });

  test("it can insert multiple values", function () {
    const tree: BinarySearchTree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(4);
    tree.insert(6);
    expect(tree.root?.value).toBe(5);
    expect(tree.root?.leftChild?.value).toBe(3);
    expect(tree.root?.rightChild?.value).toBe(7);
    expect(tree.root?.leftChild?.rightChild?.value).toBe(4);
    expect(tree.root?.rightChild?.leftChild?.value).toBe(6);
  });

  test("it can find a value with search", function () {
    const tree: BinarySearchTree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(4);
    tree.insert(6);
    tree.insert(8);
    expect(tree.search(5)?.value).toBe(5);
    expect(tree.search(3)?.value).toBe(3);
    expect(tree.search(8)?.value).toBe(8);
    expect(tree.search(2)).toBeUndefined();
    expect(tree.search(9)).toBeUndefined();
  });

  test("it can remove a root value", function () {
    const tree: BinarySearchTree = new BinarySearchTree();
    tree.insert(5);
    tree.remove(5);
    expect(tree.root).toBeUndefined;
  });

  test("it can remove a root value with children", function () {
    const tree: BinarySearchTree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    tree.remove(5);
    expect(tree.root?.value).toBe(7);
    expect(tree.root?.leftChild?.value).toBe(3);
  });

  test("it can remove a child value with children", function () {
    const tree: BinarySearchTree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(4);
    tree.insert(6);
    tree.insert(8);

    tree.remove(7);
    expect(tree.root?.value).toBe(5);
    expect(tree.root?.rightChild?.value).toBe(8);
    expect(tree.root?.rightChild?.leftChild?.value).toBe(6);
    expect(tree.root?.rightChild?.rightChild).toBeUndefined();
  });

  test("it can remove a root value of a big tree", function () {
    const tree: BinarySearchTree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(4);
    tree.insert(6);
    tree.insert(8);

    tree.remove(5);

    expect(tree.root?.value).toBe(6);

    expect(tree.root?.leftChild?.value).toBe(3);
    expect(tree.root?.leftChild?.leftChild?.value).toBeUndefined();
    expect(tree.root?.leftChild?.rightChild?.value).toBe(4);

    expect(tree.root?.rightChild?.value).toBe(7);
    expect(tree.root?.rightChild?.leftChild?.value).toBeUndefined();
    expect(tree.root?.rightChild?.rightChild?.value).toBe(8);
  });

  test("it can remove a value with one child on the right", function () {
    const tree: BinarySearchTree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(4);

    tree.remove(3);

    expect(tree.root?.value).toBe(5);
    expect(tree.root?.leftChild?.value).toBe(4);
    expect(tree.root?.leftChild?.leftChild).toBeUndefined();
    expect(tree.root?.leftChild?.rightChild).toBeUndefined();
  });

  test("it can remove a value with one child on the left", function () {
    const tree: BinarySearchTree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(7);
    tree.insert(6);

    tree.remove(7);

    expect(tree.root?.value).toBe(5);
    expect(tree.root?.rightChild?.value).toBe(6);
    expect(tree.root?.rightChild?.leftChild).toBeUndefined();
    expect(tree.root?.rightChild?.rightChild).toBeUndefined();
  });
});
