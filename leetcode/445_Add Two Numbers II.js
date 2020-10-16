// https://leetcode.com/problems/add-two-numbers-ii/

// 445. Add Two Numbers II
// You are given two non-empty linked lists representing two non-negative integers.
// The most significant digit comes first and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example:
// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7

// 7243 + 564 = 7807
//------------------------------------------------------------------------------
// this part is given by the original problem:
//
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
//------------------------------------------------------------------------------
var reverseList = function(head) {
    let prevNode = null;

    while (head !== null) {
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }

    return prevNode;
};

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead; // 0 - 7 - 0 - 8 - 7

    let p1 = reverseList(l1); // 7243 -> 3427;
    let p2 = reverseList(l2); // 564 -> 465; should be added from the last digit so reverse;

    let carry = 0; //to the next digit;  // 0

    while(p1 !== null || p2 !== null){
        let x = p1 ? p1.val : 0; // 7
        let y = p2 ? p2.val : 0; // 0
        let sum = x + y + carry; // 7 = 7

        carry = Math.floor(sum / 10); // 7 / 10 floor -> 0;
        current.next = new ListNode(sum % 10); // 7 % 10 = 7;
        current = current.next; // 7;

        if(p1 !== null){
            p1 = p1.next;
        }
        if(p2 !== null){
            p2 = p2.next;
        }
    }

    if(carry > 0){
        current.next = new ListNode(1); // if there's another digit to add;
    }

    dummyHead = dummyHead.next; // 07087 -> 7087;
    return reverseList(dummyHead); // this part gets omitted for the bloomberg ver. prob; 7807
};


//-------------------------------
// cleaned up ver.
function reverseList(node) {
  let prevNode = null;

  while(node) {
    let nextNode = node.next;
    node.next = prevNode;
    prevNode = node;
    node = nextNode;
  }
  return prevNode;
}

let addTwoNumbers = function(l1, l2) {
  let dummyhead = new ListNode(0);
  let current = dummyhead;

  let p1 = reverseList(l1);
  let p2 = reverseList(l2);

  let carry = 0;

  while(p1 || p2) {
    let x = p1 ? p1.val : 0;
    let y = p2 ? p2.val : 0;
    let sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if(p1) p1 = p1.next;
    if(p2) p2 = p2.next;
  }

  if(carry > 0) current.next = new ListNode(1);
  dummyhead = dummyhead.next;
  return reverseList(dummyhead);
}
