// Alvin's Coderbyte: Big-O: Time and space complexity
// https://www.youtube.com/watch?v=HfIH3czXc-8

// Big-O: the worst case scenario
// Big-omega: the best
// Big-theta: combination of both

// Time complexity: How much does the time grow, as the input data grows?
// Space complexity: How much of "extra" memory space does the algo take? (not counting input data/variable)
// ex)
// let sum = 0;
// let i = 0;
// let number = numbers[i]; (gets replaced every iteration)
// gives us O(3), which is simplified to O(1).
// ex2)
// let newArray = []; => grows as the loop iterates through an input array.
// Space complexity is O(n); (meaning O(n) amount of space is taken up by running this algo)

// Examples:
// Recursion1: think of call stack/stack frame.
const zoom = (n) => {
  if(n === 0){
    console.log('liftoff!');
    return;
  }

  console.log(n);
  zoom(n - 1);
};
// Time: How many times do I need to call the function itself to hit the base case?
// O(n)
// Space: How many times do I need to hit the stack frame (take up the space)?
// O(n) (n is the input number)

// Recursion2:
const zap = (n) => {
  if(n < 1){
    console.log('blastoff!');
    return;
  }

  console.log(n);
  zap(n - 2);
};
// Time: O(n)
// Space: O(n)


// Bottleneck vs. new Set()
// use set to get rid of a bottleneck in a solution, such as ".includes()"
// which is a built-in that already contains a for-loop, which is O(n) itself.
// if I create a set
// let mySet = new Set();
// it creates a new hash map that only takes in unique elements.
// mySet.add(100)
// mySet.add(42)
// mySet.add('alvin')
// will give us a hash that contains those elements {100, 42, 'alvin'}
// mySet.has(100) returns true
// mySet.has('cindy') returns false
// Array.from(mySet) returns [100, 42, 'alvin']
// converting a set to an array takes O(n) time, which can be added as a constant, which then can be ignored

// How to calculate time complexity of a function:
// const startFast = new Date();
// console.log(uniqueFase(randomArray));
// const endFast = new Date();
// console.log(`fast n finished in ${endFast - startFast} ms.`)
//------------------------------------------------------------------------------
// 1. Constant- O(1): the number of steps does not depend on the input size;

// ex1)
const foo = n => {
  const result = 0;
  for(let i = 0; i < 5; i++){ // always stays at 5 iteration;
    result += n; // arithmetic takes onstant time;
  }
  return result;
};

// foo(4);

// ex2)
const bar = array => {
  return array[0] * array[array.length - 1];
}; // accessing a single element takes constant time;

// bar([3,5,1,4,7]); // 21


// 2. Logarithmic- O(log(n)): the number of steps can be expressed as a logarithm on the input size;
// a log is the opposite of an exponent
// an exponent is a repeated multiplication, a log is a repeated division
// If 2^5 = 32, then log2(32) = 5 (2 to what power is 32? --> 5.)
// the hidden base of log(n) is 2

// ex1)
const fun = n => {
  while(n > 1){
    console.log(n);
    n /= 2;
  }
  console.log("done");
};

// fun(32); 32; 16; 8; ..."done"

// ex2) recursion
const foo = n => {
  if(n <= 1){
    console.log("hooray");
    return;
  }
  console.log(n);
  foo(n / 2);
};

// foo(30); 30; 15; 7.5; ..."hooray"


// 3. Linear- O(n)

// ex1)
let foo = array => {
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
};

// ex2)
let bar = n => {
  if(n === 0) return;
  console.log(n);
  bar(n - 1);
}; // think of how many function calls do we need to evaluate?


// 4. Loglinear- O(n*log(n)). think of the str tree from the video;
// Has linear behavior nested in log steps
// Bigger than O(n) but smaller than O(n^2)

// ex1)
const bar = str => {
  console.log(str);
  if(str.length <= 1) return;
  const midIdx = Math.floor(str.length / 2); // length is getting shorttened by half every iteration;
  bar(str.slice(0, midIdx));
};

// bar("abcdefg"); 'abc'; 'a';

// ex2)
const foo = array => {
  let str = "";
  for(let i = 0; i < array.length; i++){
    str += array[i];
  }
  console.log(str);
  console.log("-----");

  if(array.length <= 1) return;

  const midIdx = Math.floor(array.length / 2);
  const left = array.slice(0, midIdx);
  const right = array.slice(midIdx);
  foo(left);
  foo(right);
};

// foo(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']); // abcdefgh; abcd;


// 5. Polynomial- O(n^c)
// n is the size of the input
// c is some constant
// includes O(n^2) quadratic, O(n^3) cubic, etc.

// ex1) O(n^2)
const foo = array => {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      console.log(array[i] + "/" + array[j]);
    }
  }
};

// foo(["paella", "risotto", "pilaf"]);

// ex2) O(n^3)
const bar = n => {
  for(let q = 0; q < n; q++){
    for(let r = 0; r < n; r++){
      for(let s = 0; s < n; s++){
        console.log(q, r, s);
      }
    }
  }
};

// bar(2);

// ex3) O(n^2)
let bar = str => {
  if(str.length === 0) return;

  const firstChar = str[0];
  const rest = str.slice(1); // slicing a str is like copying it through iteration O(n);
  console.log(firstChar);
  bar(rest); // O(n)
  // basically O(n) of slicing happens per every O(n), which calculates to O(n^2);
};

// bar("coderbyte"); prints each char per iteration;


// 6. Exponential- O(c^n) / O(2^n)
// n is the size of the input
// c is some constant
// includes O(2^n), O(3^n), etc.

// ex1) O(2^n)
const foo = n => {
  if(n === 1) return;
  foo(n - 1);
  foo(n - 1);
  // a single call to foo calls 2 recursive calls;
  // nlogn divides the input, this one doesn't; NO DIVISION involved;
  // this one DOUBLEs the calls each time;
   //          4
   //        /  \
   //      3     3
   //    /  \   / \
   //   2    2  2  2
   // / \   /\ ...
   // 1  1  1 1 ...
};

// ex2) O(3^n)
const bar = n => {
  if(n === 1) return;
  bar(n - 1);
  bar(n - 1);
  bar(n - 1);
  // a single call to foo calls 3 recursive calls;
};

// ex3) O(2^n)
const zap = n => {
  if(n <= 1) return;
  zap(n - 2);
  zap(n - 2);
  // a single call to foo calls 2 recursive calls;
};


// 7. Fatorial- O(n!)
// n! = (n)(n-1)(n-2)(n-3)...(2)(1)
// 4! = 4 * 3 * 2 * 1 = 24

// ex1)
const foo = n => {
  if(n === 1) return;

  for(let i = 0; i < n; i++){
    foo(n - 1); // recursive call within a for loop;
    // number of recursive calls that's being made depends on the input n;
  }
};

// foo(4);


// fastest to slowest:
// O(1) - O(log(n)) - O(n) - O(nlog(n)) - O(n^c) - O(c^n) - O(n!)
// constant - logarithmic - linear - loglinear - polynomial - exponential - factorial
