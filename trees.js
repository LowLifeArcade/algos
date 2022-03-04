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
    if(val > this.root.value) {
      
    }
  }
}

const newTree = new BST(2)
newTree 