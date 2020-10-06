// Alvin's Coderbyte: Intro to Recursion: Anatomy of a Recursive Solution (Recursion I)
// https://www.youtube.com/watch?v=yBWlPte6FhA&list=PLxQ8cCJ6LyOZHhAjIYrEFWcfYdyJl5VYf&index=4

// base case: the smallest possible case / scenario
// recursive case: ** input gets reduced ** all the way to the base case as we make recursive calls

// Alvin's Coderbyte: Complex Recursion Explained Simply (Recursion II)
// https://www.youtube.com/watch?v=wRH2I6IN4BE&list=PLxQ8cCJ6LyOZHhAjIYrEFWcfYdyJl5VYf&index=7
// sum of all the elements in an array:
function sum(arr){
  if(!arr.length) return 0;
  // let last = arr.length - 1;
  // return arr[last] + sum(arr.slice(0, last))
  let rest = arr.slice(1); // takes O(n) time by itself *** BOTTLENECK
  return arr[0] + sum(rest)
}

// Time: O(n^2) (= O(n*n)); each call * slice method, since every recursive call uses the slice method;
// Space: O(n); number of stack frames that we have on the stack before we hit the base case;

// console.log(sum([])) // 0
// console.log(sum([1,5,7,-2])) // 11
// console.log(sum([1,5])) // 6

// the slicing is the bottleneck that adds extra *n
function fastSum(arr){
  return _sum(arr, 0);
}

function _sum(arr, idx=0){
  if(idx === arr.length) return 0;

  return arr[idx] + _sum(arr, idx + 1);
}

// Time: O(n); got rid of the bottleneck (array slice method)
// Space: O(n)

// console.log(fastSum([]))
// console.log(fastSum([1,5,7,-2]))
// console.log(fastSum([1,5]))

const input = new Array(5000).fill(1); // [1,1,1,1,1...]

const slowStart = Date.now();
console.log(sum(input)); // 5000
const slowEnd = Date.now();
console.log(`SLOW sum takes ${slowEnd - slowStart} ms.`) // SLOW sum takes 1061 ms.

const fastStart = Date.now();
console.log(fastSum(input)); // 5000
const fastEnd = Date.now();
console.log(`FAST sum takes ${fastEnd - fastStart} ms.`) // FAST sum takes 6 ms.

// Nth Fibonacci number:
const fib = n => {
  if(n === 1 || n === 2) return 1;
  return fib(n-1) + fib(n-2);
}

// console.log(fib(5)) // 5;
// console.log(fib(6)) // 8;

// Time: O(2^n) because every call, I make 2 recursive calls fib(n-1) + fib(n-2); I keep doubling the calls as we go;
// Space: O(n)
