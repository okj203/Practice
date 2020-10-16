// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

// 117. Populating Next Right Pointers in Each Node II
// Given a binary tree
//
// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next
// right node, the next pointer should be set to NULL.
//
// Initially, all next pointers are set to NULL.
// Input: root = [1,2,3,4,5,null,7]
// Output: [1,#,2,3,#,4,5,7,#]
// Explanation: Given the above binary tree (Figure A), your function should populate
// each next pointer to point to its next right node, just like in Figure B.
// The serialized output is in level order as connected by the next pointers,
// with '#' signifying the end of each level.

let connect = function(root) {
  let queue = [root];
  let tail = root;
  // BFS
  while(queue.length) {
    let current = queue.shift();
    if(!current) break;
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);

    if(current === tail) {
      current.next = null;
      tail = queue.length ? queue[queue.length - 1] : null;
    } else {
      current.next = queue[0];
    }
  }

  return root;
}
