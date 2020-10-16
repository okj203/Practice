// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

// 430. Flatten a Multilevel Doubly Linked List
// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer,
// which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own,
// and so on, to produce a multilevel data structure, as shown in the example below.
//
// Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.
//
// Example 1:
//
// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]


let flatten = function(head) {
  function traverse(node) {
    if (node === null) return node; // node is null = no need to flatten;
    if (node.child === null) {
      if(node.next === null) {
        return node; // no child no next;
      } else { // no child yes next;
        return traverse(node.next);
      }
    } else { // yes child;
      let child = node.child;
      node.child = null; // visited, reassigned it to null;
      let next = node.next; // save it for now;

      node.next = child; // where I actually want to go next;
      child.prev = node; // doubly linked association;

      let childTail = traverse(child); // visit child first- happens regardless;
      if(next !== null) { // but if there's also next,
        childTail.next = next; // visit "next" only after visiting the child first;
        next.prev = childTail;
        return traverse(next);
      }
      return childTail; // flatten child and end if there's no next;
    }
  }
  traverse(head);
  return head;
}
