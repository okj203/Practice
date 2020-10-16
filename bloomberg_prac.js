//------------------------------------------------------------------------------
// Q: Given two linked lists that are in reverse order, add them together and return
// the sum in the correct order (easier version of leetcode 445)
//
// ex.
// l1 = 1 - 2 -3 = 321
// l2 = 4 - 5 -6 = 654
// answer 9 -> 7 -> 5
//
// return the head (9)

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
//-------------------------------------
function ListNode(val, next) {
    this.val = (val ? val : 0)
    this.next = (next ? next : null)
}
//-------------------------------------
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

//------------------------------------------------------------------------------
// Q: Given a list of integers and a desired sum, write a function that calculates
// a threshold number x such that when summing up the list of integers everything
// greater than x can be substituted with x to give the desired sum.
// For example, if given a list [1, 2, 5] and a desired sum of 6. a threshold of 3
// once applied to the list can yield the desired sum (i.e. 1 + 2 + 3 = 6)
// If there are multiple of such thresholds we'd like to find the lowest one.
//
// [1, 2, 5], 6 -> 3
// [40, 20, 10, 30], 70  -> 20
// [40, 20, 30, 10], 71  -> 20.5
// [40, 20, 10, 30], 100 -> 40


function substitute(arr, sum) {
  arr.sort((a, b) => a - b);

  let total = sum; // 3
  let idx = 0;

  for(let i = 0; i < arr.length; i++) {
    if(total - arr[i] >= arr[i]) {
      total -= arr[i];
    } else {
      idx = i;
      break;
    }
  }
  let n = arr.length - idx;

  return total / n;
}

// console.log(substitute([1,2,5], 6)) // 3
// console.log(substitute([40, 20, 10, 30], 70)) // 20
// console.log(substitute([40, 20, 30, 10], 71)) // 20.5
// console.log(substitute([40, 20, 10, 30], 100)) // 40


//------------------------------------------------------------------------------
// Q: given an array of integers and a target integer return the number of pairs in
// the array that sum to the target number. repeats of the same number count as separate integers
//
// example : [1, 2, 1, 1, 3], 3 returns 6 -> (1,2), (2,1), (2,1), (2,1), (1,2), (1,2)

function numPairs(arr, sum) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] + arr[j] === sum) {
        count++;
      }
    }
  }
  return count;
}

// console.log(numPairs([1, 2, 1, 1, 3], 3)) // 6;  b/c: (1,2), (2,1), (2,1), (2,1), (1,2), (1,2)

//------------------------------------------------------------------------------
// Q: Write a function that takes in a base and a n and returns the result of the
// base to the power of n. Optimize for time complexity.
//
// A: This is what the student said about this problem: ‘First discussed approach -
// I suggested recursion, which the interviewer agreed on. I talked about the base cases
// where n is 0, 1, and also when the base is 0.  I admitted that I didn't remember
// how to deal with negative number cases for n. (so the interviewer basically told
//   me about inverting the fraction :/ ). Pseudocoded approach and wrote what the
//   recursive call might look like for both positive and negative n. Then the interviewer
//   asked about optimization. I started to say subtract n by two to cut the calls
//   in half but then realized it was divide after we discussed more... we talked about
//   time complexity being o(log n), and then I noted that we will deal with even and
//   odd numbers differently where with odd numbers we would be multiplying one more
//   of the base to the result. Finally then wrote out the code for all of this.
//   Wrapped up for my questions after finishing the function and it seemed to be
//   at a place he agreed with (but definitely received a lot of help and hints along the way).‘


let powerN = function(base, n) {
  if(n === 0) return 1;
  if(n === 1 || base === 0) return base;

  if(n > 0){
    return base * powerN(base, n-1);
  }  else if (n < 0) {
    return 1 / (base * powerN(base, Math.abs(n)-1));
  }
}

console.log(powerN(2, 3)); // 8
console.log(powerN(2, -3)); // 0.125


//------------------------------------------------------------------------------
// Write a function `power(base, exp)` that takes in two numbers, a base
// and exponent. The function should return `base` raised to `exp` power.
// Solve this using a loop.
//
// For example, power(2, 5) is 2 raised to the 5th power,
// which is 2 * 2 * 2 * 2 * 2 = 32

function power(base, exp) {
  var product = 1;
  for (i = 1; i <= exp; i++){
    product *= base;
  }
  return product;
}

console.log(power(2, 5)); // => 32
console.log(power(2, 10)); // => 1024
console.log(power(9, 2)); // => 81
console.log(power(9, 3)); // => 729
console.log(power(11, 0)); // => 1
console.log(power(11, 1)); // => 11

//------------------------------------------------------------------------------
// behavioral interview:

// need more consolidating;
// more consolodated answers;
// better intro needed;
// need the projects left for later;
// tailor more for company;
// tech project that's most relatable;
// bloomberg is big on collaboration; CAMP is big on collaboration;
// => I wanted to make something practical especially for pandamic;
// => bloomberg is all about practicality,
// it's known for building things that are meant to be used
// technical obstacles == specific bugs;


//------------------------------------------------------------------------------
