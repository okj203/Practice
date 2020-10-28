// https://leetcode.com/problems/add-two-numbers/
//
// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
//
// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]
//
// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

class ListNode {
  constructor(val, next) {
    this.val = val ? val || 0;
    this.next = next ? next || null;
  }
}


let addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while(l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = x + y + carry; // in case the number is greater than 10;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  if(carry > 0) current.next = new ListNode(1);
  return dummy.next;
}
