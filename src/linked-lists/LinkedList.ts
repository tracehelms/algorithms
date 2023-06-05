/*
 * Linked List (singly linked)
 *
 * Linked lists hold data like an array but work very different under the hood.
 * Each entry in a Linked List is called a node. A node is an object that holds
 * the data (like a number or string) and a pointer to the next node in the
 * list. To traverse the list, you need to move from one node to the next, to
 * the next, and so on.
 *
 * The real benefit of a linked list is that you can read, add, or delete the
 * first node of the list in O(1) time.
 *
 * Effiency is O(1) for operations at the beginning of the list and O(N) for
 * operations at the end.
 *
 */
class LinkedList<T> {
  firstNode: Node<T> | undefined;

  constructor(data: T[]) {
    data
      .slice()
      .reverse()
      .forEach((a) => this.add(a));
  }

  add(data: T): LinkedList<T> {
    const newNode = new Node(data, this.firstNode);
    this.firstNode = newNode;
    return this;
  }

  hd(): T | undefined {
    if (this.firstNode) {
      return this.firstNode.data;
    }
  }

  read(index: number): T | undefined {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index) {
      if (currentNode && currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        currentIndex++;
      } else {
        return undefined;
      }
    }

    return currentNode ? currentNode.data : undefined;
  }

  search(value: T): number {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentNode && currentNode.data != value) {
      if (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        currentIndex++;
      } else {
        return -1;
      }
    }

    return currentNode ? currentIndex : -1;
  }

  insertAtIndex(value: T, index: number) {
    if (index === 0) {
      const newNode = new Node(value, this.firstNode);
      this.firstNode = newNode;
      return;
    }

    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      if (currentNode) {
        currentNode = currentNode.nextNode;
        currentIndex++;
      } else {
        return;
      }
    }

    if (currentNode) {
      const newNode = new Node(value, currentNode.nextNode);
      currentNode.nextNode = newNode;
      return;
    }
  }

  deleteAtIndex(index: number) {
    if (index === 0 && this.firstNode) {
      this.firstNode = this.firstNode.nextNode;
      return;
    }

    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      if (currentNode) {
        currentNode = currentNode.nextNode;
        currentIndex++;
      } else {
        return;
      }
    }

    if (currentNode && currentNode.nextNode) {
      currentNode.nextNode = currentNode.nextNode.nextNode;
    }
  }

  toArray(): Array<T> {
    let result: Array<T> = [];
    let currentNode = this.firstNode;

    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.nextNode;
    }

    return result;
  }
}

class Node<T> {
  data: T;
  nextNode: Node<T> | undefined;

  constructor(data: T, nextNode: Node<T> | undefined) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

export default LinkedList;
