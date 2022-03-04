class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);

    // const setNew = () => {
    //   this.head = newNode;
    //   this.tail = newNode;
    // };

    // const setNode = () => {
    //   this.tail.next = newNode; // ?
    //   newNode.prev = this.tail; // ?
    //   this.tail = newNode;
    // };

    // this.head ? setNode() : setNew(); //?
    // this.length++;
    // return this;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    const remove = () => {
      const tail = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.length--;
      return tail 
    };
    return this.head ? remove() : undefined;
  }
}

const list = new DoublyLinkedList();

list.push(2);
list.push(3);
list.push(5);
list.pop();
list.pop();
list.pop();
// list.push(5);
console.log(list); // ?
