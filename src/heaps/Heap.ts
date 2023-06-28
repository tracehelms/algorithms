/*
 * Heap (Max Heap, in this case)
 *
 * Heaps are efficient ways to store values when you need to find the max or
 * min value very quickly. An example of this would be a priority queue.
 * Heaps are binary trees where the parent node must be greater than (max heap)
 * or less than (min heap) its children. The data is loosely sorted this way,
 * from largest to smallest top-to-bottom.
 *
 * For inserting and deleting from the heap, we need to keep track of the last
 * open space available in a heap. Heaps must be "complete trees," meaning they
 * must be filled top-to-bottom, left-to-right with no empty gaps. This last
 * space is called the last node.
 *
 * In order to easily keep track of the last node, we use an array to store
 * the heap. We can traverse the heap with simple index calculations (see
 * `leftChildIndex`, `rightChildIndex`, and `parentIndex`).
 *
 * Efficiency is O(1) for reading the root value of the heap (and the largest
 * in this case). Insertion and deletion are O(log N).
 *
 */
class Heap {
  data: number[];

  constructor(input?: number[]) {
    this.data = [];

    if (input && input.length > 0) {
      input.forEach((x) => this.insert(x));
    }
  }

  first(): number {
    return this.data[0];
  }

  last(): number {
    return this.data[this.data.length - 1];
  }

  insert(newValue: number) {
    this.data.push(newValue);

    let newNodeIndex = this.data.length - 1;

    while (newNodeIndex > 0) {
      let parentIndex = this.parentIndex(newNodeIndex);
      let parentValue = this.data[parentIndex];

      if (newValue < parentValue) {
        break;
      }

      this.data[parentIndex] = newValue;
      this.data[newNodeIndex] = parentValue;

      newNodeIndex = parentIndex;
    }
  }

  remove() {
    const value = this.data.pop();

    if (!value) {
      return;
    }

    this.data[0] = value;
    this.trickleDownIndex(0);
  }

  private leftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private rightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private trickleDownIndex(index: number) {
    const greaterChildIndex = this.greaterChildIndex(index);

    if (greaterChildIndex) {
      const thisValue = this.data[index];
      this.data[index] = this.data[greaterChildIndex];
      this.data[greaterChildIndex] = thisValue;

      this.trickleDownIndex(greaterChildIndex);
    }
  }

  private greaterChildIndex(index: number): number | undefined {
    const leftChildIndex = this.leftChildIndex(index);
    const leftValue = this.data[leftChildIndex];
    const rightChildIndex = this.rightChildIndex(index);
    const rightValue = this.data[rightChildIndex];
    const thisValue = this.data[index];

    if (!leftValue && (!rightValue || rightValue < thisValue)) {
      return;
    } else if (!rightValue && leftValue > thisValue) {
      return leftChildIndex;
    } else if (leftValue > rightValue && leftValue > thisValue) {
      return leftChildIndex;
    } else if (rightValue > thisValue) {
      return rightChildIndex;
    }
  }
}

export default Heap;
