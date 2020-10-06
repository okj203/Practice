// Alvin's Coderbyte: How to Code Combinations Using Recursion (Recursion III)
// https://www.youtube.com/watch?v=NA2Oj9xqaZQ&list=PLxQ8cCJ6LyOZHhAjIYrEFWcfYdyJl5VYf&index=5

// Combinatorics: Field of math concerns with counting things.
// ex)
// Given N thngs, in how many ways can we arrange them?
// In how many ways can we do X?
// What is the shortest way to do Y?

// Combination: a collection of things where the order does not matter; ex) powerset, permutations
// Combinations of [a,b,c]: [[], [a], [b], [c], [a,b],[b,c], [a,c], [a,b,c]]
// Given a set of n things, there are 2^n possible combinations.

const combinations = (elements) => {
  if(elements.length === 0) return [[]];
  const firstEl = elements[0];
  const rest = elements.slice(1);

  const combsWithoutFirst = combinations(rest);
  const combsWithFirst = [];

  combsWithoutFirst.forEach(comb => {
    const combWithFirst = [ ...comb, firstEl];
    combsWithFirst.push(combWithFirst);
  })
  return [ ...combsWithFirst, ...combsWithoutFirst];
}

// Time: O(2^n); create 2 arrays using 1 : return [ ...combsWithFirst, ...combsWithoutFirst];
// Space: O(n^2); stack frames created by all the recursive calls n times n number of const rest = elements.slice(1) that gets created each call;

// Recap: given n things, there are 2^n possible combinations; cf. binary tree visualization;

// console.log(combinations([])); // [ [] ]
// console.log(combinations(['a', 'b'])); // [ [ 'b', 'a' ], [ 'a' ], [ 'b' ], [] ]
// console.log(combinations(['a', 'b', 'c'])); // firstEl is 'a', rest is [b, c]
// [
//   [ 'c', 'b', 'a' ],
//   [ 'b', 'a' ],
//   [ 'c', 'a' ],
//   [ 'a' ],
//   [ 'c', 'b' ],
//   [ 'b' ],
//   [ 'c' ],
//   []
// ]

//------------------------------------------------------------------------------

// Alvin's Coderbyte: What are Permutations & how do they differ from Combinations? (Recursion IV)
// https://www.youtube.com/watch?v=us0cYQXQpxg&list=PLxQ8cCJ6LyOZHhAjIYrEFWcfYdyJl5VYf&index=6

// Permutations: a collection of things where the order MATTERS.
// Combinations: a collection of things where the order does NOT matter.

// Permutations of [a,b,c]: [abc], [cba], [bca], ...
// Given a set of n things, there are n! permutations.
// Combinations of [a,b,c]: [[], [a], [b], [c], [a,b],[b,c], [a,c], [a,b,c]]
// Given a set of n things, there are 2^n possible combinations.

const permutations = (elements) => {
  if(elements.length === 0) return [[]];
  const firstEl = elements[0];
  const rest = elements.slice(1);

  const permsWithoutFirst = permutations(rest);
  const allPermutations = [];

  permsWithoutFirst.forEach(perm => { // each sub array
    for(let i = 0; i <= perm.length; i++){
      const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
      // this process allows us to place the firstEl in all the diff possible positions within each sub array;
      // [c,b,a], [b,c,a], [b,a,c] --> c has been placed in diff all the positions;
      // aka, c gets plugged in all the i positions within an array;
      allPermutations.push(permWithFirst);
    }
  })
  return allPermutations;
}

// Time: O(n!); where n is the number of elements; for loop for each element; worst time complexity
// Space: O(n^2); n number of stack frames * n number of slice method ( const rest = elements.slice(1) ) = n * n = n^2

// Recap: given n things, there are n! number of permutations; visualize the tree diagram; insert each element in every possible position;

// console.log(permutations(['a','b','c']));
// [
//   [ 'a', 'b', 'c' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'a', 'c', 'b' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]
// ]

// console.log(permutations(['a','b'])); // [ [ 'a', 'b' ], [ 'b', 'a' ] ]
// permutations(['a','b','c']) can be accomplished by placing 'a' in all the possible positions within all the permutation cases of [b,c]
