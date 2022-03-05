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
    if(val < this.value) {
      this.root.left = new Node(val) 
    }
  }
  delete(val){
    // travertse tree and delete
    if(val === this.value){
      // delete
    }
  }
  find(val){
    // traverse tree and find
    if(val === this.value){
      return this.value 
    }
  }
}

const newTree = new BST(4)
newTree.insert(3)
newTree.insert(2)
newTree.insert(1)
newTree 