/*
 * Binary Search Tree
 *
 * Binary Search Trees are a sorted tree where each node has up to two
 * children. A node's left child must have a value less than the parent node.
 * And it's right child must have a value greater than the parent node.
 * Recursion is heavily used to traverse, search, insert, and delete.
 *
 * Effiency is O(log N) for searching, inserting, and deleting. Searching an
 * ordered array has the same efficiency but inserting and deleting are
 * much faster with a Binary Search Tree.
 *
 */
class BinarySearchTree {
  root?: TreeNode;

  search(value: number): TreeNode | undefined {
    return this._search(value, this.root);
  }

  private _search(value: number, node?: TreeNode): TreeNode | undefined {
    if (!node) {
      return;
    } else if (node.value === value) {
      return node;
    } else if (value < node.value) {
      return this._search(value, node.leftChild);
    } else {
      return this._search(value, node.rightChild);
    }
  }

  insert(value: number) {
    if (this.root) {
      this._insert(value, this.root);
    } else {
      this.root = new TreeNode(value);
    }
  }

  remove(value: number) {
    this.root = this._remove(value, this.root);
  }

  private _remove(
    valueToRemove: number,
    node?: TreeNode
  ): TreeNode | undefined {
    if (!node) {
      return;
    } else if (valueToRemove < node.value) {
      node.leftChild = this._remove(valueToRemove, node.leftChild);
      return node;
    } else if (valueToRemove > node.value) {
      node.rightChild = this._remove(valueToRemove, node.rightChild);
      return node;
    } else if (valueToRemove === node.value) {
      if (!node.leftChild) {
        return node.rightChild;
      } else if (!node.rightChild) {
        return node.leftChild;
      } else {
        node.rightChild = this.lift(node, node.rightChild);
        return node;
      }
    }
  }

  private lift(nodeToRemove: TreeNode, node?: TreeNode): TreeNode | undefined {
    if (node && node.leftChild) {
      node.leftChild = this.lift(nodeToRemove, node.leftChild);
      return node;
    } else if (node) {
      nodeToRemove.value = node.value;
      return node.rightChild;
    }
  }

  private _insert(value: number, node: TreeNode) {
    if (value < node.value) {
      if (node.leftChild) {
        this._insert(value, node.leftChild);
      } else {
        node.leftChild = new TreeNode(value);
      }
    } else if (value > node.value) {
      if (node.rightChild) {
        this._insert(value, node.rightChild);
      } else {
        node.rightChild = new TreeNode(value);
      }
    }
  }
}

class TreeNode {
  value: number;
  leftChild?: TreeNode;
  rightChild?: TreeNode;

  constructor(value: number) {
    this.value = value;
  }
}

export default BinarySearchTree;
