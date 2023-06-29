/*
 * Trie
 *
 * A Trie is a way to store words for fast searching and insertion. It is a
 * tree where each letter in a word is part of a different node. Tries are
 * commonly used for things like autocomplete or searching in a web browser.
 *
 * Specifically, each node is a Map where the key is a character in a word
 * and the value is another node. By traversing the nodes, whole words can
 * be built.
 *
 * A `*` is used after complete words to differentiate them from partial word
 * prefixes.
 *
 * Efficiency is O(K) for searching and inserting values in the Trie, where K
 * is the length of the search term. The efficiency doesn't depend on the
 * number of words in the Trie. This makes Tries extremely fast.
 *
 */
class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    let currentNode = this.root;

    word.split("").forEach((c) => {
      const existingChild = currentNode.children.get(c);

      if (existingChild) {
        currentNode = existingChild;
      } else {
        const newNode = new TrieNode();
        currentNode.children.set(c, newNode);
        currentNode = newNode;
      }
    });

    currentNode.children.set("*", undefined);
  }

  search(word: string): TrieNode | undefined {
    let currentNode = this.root;
    const chars = word.split("");

    for (let i = 0; i < chars.length; i++) {
      const child = currentNode.children.get(chars[i]);
      if (child) {
        currentNode = child;
      } else {
        return;
      }
    }

    return currentNode;
  }

  allWords(node?: TrieNode, word: string = "", words: string[] = []): string[] {
    let currentNode = node || this.root;

    for (const [key, childNode] of currentNode.children.entries()) {
      if (key === "*") {
        words.push(word);
      } else {
        this.allWords(childNode, word + key, words);
      }
    }

    return words;
  }
}

class TrieNode {
  children: Map<string, TrieNode | undefined>;

  constructor() {
    this.children = new Map();
  }
}

export default Trie;
