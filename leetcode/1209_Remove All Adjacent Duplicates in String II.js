// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

// 1209. Remove All Adjacent Duplicates in String II
// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.
//
// We repeatedly make k duplicate removals on s until we no longer can.
//
// Return the final string after all such duplicate removals have been made.
//
// It is guaranteed that the answer is unique.
//
// Example 1:
//
// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:
//
// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation:
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:
//
// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"



// stack = [[d, 2], [b, 2], ]

let removeDuplicates = function(s, k) {
  let stack = [];
  let i = 0
  while(i < s.length) {
    let current = s[i];
    let peek = stack[stack.length - 1];

    if(stack.length === 0 || current !== peek[0]) {
      stack.push([current, 1]);
    } else if (current === peek[0]) {
      peek[1]++;
      if(peek[1] === k) {
        stack.pop();
      }
    }
    i++;
  }

  let output = '';
  for(let [char, count] of stack) {
    output += char.repeat(count);
  }
  return output;
}
