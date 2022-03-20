// reverse a linked list in place
// 12 (head) > 22 > 32 > 71 (tail)

12 > 22 > 32 > 71;

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    // check to see if there is no head
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // I believe this updates head because head and tail are looking at the same object "newNode" from the instantiation call
      this.tail.next = newNode;
      // then when we do this we tell the list to make the tail the new node from push which overrides the pointer to the first node that was instationated
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new LinkedList(2); //?
list;
list.push('hi');
list.push('hiiii');
list.push(99);
console.log(list); //?

function reverseLinkedList(list) {
  let node = list.head;
  list.head = this.tail;
  list.tail = node;

  let next, prev = null;
  let tempLength = list.length; //?
  while (tempLength) {
    next = node.next //?
    node.next = prev //?
    prev = node 
    node = next

    tempLength--; //?
  }
  return list 
}
reverseLinkedList(list) //?

/**
 * FIRST:
 *    swap the head and the tail
 *    [head] > [] > [] > [tail]
 *    [tail] < [] < [] < [head]
 * SECOND:
 *    store head.next in var prev
 */
