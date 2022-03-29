// // // // old code

// // // /**
// // //  * Definition for singly-linked list.
// // //  * function ListNode(val, next) {
// // //  *     this.val = (val===undefined ? 0 : val)
// // //  *     this.next = (next===undefined ? null : next)
// // //  * }
// // //  */
// // // /**
// // //  * @param {ListNode} l1
// // //  * @param {ListNode} l2
// // //  * @return {ListNode}
// // //  */
// // // var addTwoNumbers = function (l1, l2) {
// // //   let next;
// // //   while (l1.next) {
// // //     l3.val = l1.value + l2.value;
// // //     // l3.next = null;
// // //   }
// // // };

// // function ListNode(val, next) {
// //   this.val = val === undefined ? 0 : val;
// //   this.next = next === undefined ? null : next;
// // }

// // var addTwoNumbers = function(l1, l2) {

// //   let sum = 0;
// //   let current = new ListNode(0);
// //   let result = current;

// //   while(l1 || l2) {

// //       if(l1) {
// //           sum += l1.val;
// //           l1 = l1.next;
// //       }

// //       if(l2) {
// //           sum += l2.val;
// //           l2 = l2.next;
// //       }

// //       current.next = new ListNode(sum % 10);
// //       current = current.next;

// //       sum = sum > 9 ? 1 : 0;
// //   }

// //   if(sum) {
// //       current.next = new ListNode(sum);
// //   }

// //   return result.next;
// // };
// // // var addTwoNumbers = function (l1, l2) {
// // //   /* step() function recursively iterates through a ListNode linked list */
// // //   const step = (l1, l2, carry = 0) => {
// // //     /* l1 or l2 can be null - double bang to cast to bool for null check */
// // //     const sum = (!!l1 ? l1.val : 0) + (!!l2 ? l2.val : 0) + carry;
// // //     let listnode = new ListNode(sum);

// // //     /* if either l1.next exists or l2.next exists */
// // //     if ((!!l1 && !!l1.next) || (!!l2 && !!l2.next)) {
// // //       listnode.next = step(
// // //         !!l1 ? l1.next : null,
// // //         !!l2 ? l2.next : null,
// // //         sum > 9 ? 1 : 0
// // //       );
// // //     } else if (sum > 9) {
// // //       /* final carry */
// // //       listnode.next = new ListNode(1);
// // //     }

// // //     /* only keep LSD */
// // //     listnode.val = parseInt(listnode.val.toString().slice(-1));
// // //     return listnode;
// // //   };

// // //   return step(l2, l1);
// // // };

// /**
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  *
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function (l1, l2) {
//   let node = null;
//   const carry = arguments[2];
//   if (l1 || l2) {
//     const val1 = l1 ? l1.val : 0;
//     const val2 = l2 ? l2.val : 0;
//     const next1 = l1 ? l1.next : null;
//     const next2 = l2 ? l2.next : null;
//     const val = carry ? val1 + val2 + 1 : val1 + val2;
//     node = new ListNode(val % 10);
//     node.next = addTwoNumbers(next1, next2, val >= 10);
//   } else if (carry) {
//     node = new ListNode(1);
//     node.next = null;
//   }
//   return node;
// };

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let previousNode = new ListNode();
  const headNode = previousNode;
  while ((l1 || l2 || carry)) {
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val; 
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    const sum = val1 + val2 + carry; 
    carry = Math.floor(sum / 10);
    const digit = sum % 10;
    const currentNode = new ListNode(digit);
    previousNode.next = currentNode;
    previousNode = currentNode;
  }
  return headNode.next;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]); //?
