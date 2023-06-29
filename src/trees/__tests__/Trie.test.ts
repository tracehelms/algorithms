import Trie from "../Trie";

describe("Trie", function () {
  test("it can be created", function () {
    const trie = new Trie();
    expect(trie).not.toBeUndefined();
  });

  test("it can add words", function () {
    const trie = new Trie();
    trie.insert("cat");
    trie.insert("can");

    expect(trie.root?.children?.has("c")).toBe(true);
    expect(trie.root?.children?.get("c")?.children?.has("a")).toBe(true);
    expect(
      trie.root?.children?.get("c")?.children?.get("a")?.children?.has("t")
    ).toBe(true);
    expect(
      trie.root?.children?.get("c")?.children?.get("a")?.children?.has("n")
    ).toBe(true);

    expect(
      trie.root?.children
        ?.get("c")
        ?.children?.get("a")
        ?.children?.get("t")
        ?.children?.has("*")
    ).toBe(true);

    expect(
      trie.root?.children
        ?.get("c")
        ?.children?.get("a")
        ?.children?.get("n")
        ?.children?.has("*")
    ).toBe(true);
  });

  test("it can search for words", function () {
    const trie = new Trie();
    trie.insert("cat");
    trie.insert("catnip");
    trie.insert("catnap");
    trie.insert("can");
    trie.insert("bat");

    expect(trie.search("can")).toBeTruthy();
    expect(trie.search("car")).toBeUndefined();

    const result = trie.search("cat");
    expect(result).toBeTruthy();
  });

  test("searching for words returns the children nodes", function () {
    const trie = new Trie();
    trie.insert("cat");
    trie.insert("catnip");
    trie.insert("catnap");

    const result = trie.search("cat");
    let childKeys: string[] = [];

    if (result) {
      childKeys = Array.from(result.children.keys());
    }

    expect(childKeys).toContain("*");
    expect(childKeys).toContain("n");
  });

  test("it can return all words", function () {
    const trie = new Trie();
    const words = ["cat", "catnip", "catnap", "can", "bat"];

    words.forEach((word) => trie.insert(word));

    const allWords = trie.allWords();

    words.forEach((word) => {
      expect(allWords).toContain(word);
    });
  });
});
