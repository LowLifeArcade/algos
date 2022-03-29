//@ts-check
/**
 *
 * @param {number | string} val the node value
 * @param {object} [next]
 */
function DataNode(val, next) {
  this.value = val ? val : null;
  this.next = next ? next : null;
}

// make linked lists
class LinkedList {
  constructor(val){
    const newNode = new DataNode(val)
    this.head = newNode
    this.tail = newNode
  }
  push(val){
    const newNode = new DataNode(val)
    if (this.head.next === null) {
      this.head.next = newNode 
    } else {
      
    }
  }
}

let myList = new LinkedList(2)
myList 

let addTwoNums = function (l1, l2) {
  while(l1 || l2){
    if (l1) {
      l1 = l1.next 
    }
    if (l2) {
      l2 = l2.next 
    }
  }
};
