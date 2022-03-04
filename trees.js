class Node {
  constructor(val){
    this.value = val 
    this.left = null 
    this.right = null 
  }
}

class BST {
  constructor(val){
    const newNode = new Node(val)
    this.root = newNode
  }
  insert(val){
    if (this.left === null) return 
    // val is greater than 
    if(val < this.root.value) {
      this.root.left = new Node(val) 
    }
  }
  delete(val){
    // travertse tree and delete
  }
  add(val){
    // traverse tree and add
  }
}

const newTree = new BST(3)
newTree.insert(2)
newTree.insert(1)
newTree 