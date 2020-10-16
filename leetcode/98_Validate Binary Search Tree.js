// https://leetcode.com/problems/validate-binary-search-tree/

// 98. Validate Binary Search Tree
// Given a binary tree, determine if it is a valid binary search tree (BST).
//
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
//
//
// Example 1:
//
//     2
//    / \
//   1   3
//
// Input: [2,1,3]
// Output: true
//
// Example 2:
//
//     5
//    / \
//   1   4
//      / \
//     3   6
//
// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

let isValidBST = function(root) {
  return isValid(root);
}

let isValid = function(root, minVal = -Infinity, maxVal = +Infinity) {
  if(!root) return true;
  // base case. we're traversing the BST recursively, so if we get to this point without returning false, return true;
  if(root.val <= minVal || root.val >= maxVal) return false;

  return isValid(root.left, minVal, root.val) && isValid(root.right, root.val, maxVal);
  // when we traverse the left child branch of the root, the root itself is the greaest,
  // since  the root value should be greater than all the nodes on the left branch;

  // same goes for the right child branch, as the root val becomes the minVal,
  // since the root val should be less than all the nodes on the right branch;
}



//
