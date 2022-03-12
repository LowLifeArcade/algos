class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);

    if (this.root != null) {
      // current starts as the root. This is key to understanding this. We will update currentNode as we loop
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // we check to see if there's a node at all, not even the value. Just if it's there. If not, we've found our spot and we will update currentNode.left to the new node.
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return;
          } else {
            currentNode = currentNode.left 
          }
        }
      }
    }

    if (this.root === null) {
      this.root = newNode;
      return this;
    }
  }
} 
// tester

let myTree = new BST();
myTree.insert(5);
myTree.insert(4);
myTree.insert(3);
myTree.insert(2);
myTree.insert(1);
myTree.root.left.left.left.left

console.log(myTree.root.left.left.left.left)