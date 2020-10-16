// https://leetcode.com/problems/merge-intervals/

// 56. Merge Intervals
// Given a collection of intervals, merge all overlapping intervals.
//
// Example 1:
//
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:
//
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

// psudo:
// |---------|
//         |---------|
//                          |---|
//                              |-------|

// if arr[i][end] < arr[i+1][start] then push into the output arr;


let merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // sort the input arr by the first column;
  // compare the first ele in each sub subarray;
  // think of a as current ele, b as the next ele, and [0] the first column(item)
  // https://stackoverflow.com/questions/48224001/sort-two-dimensional-array-using-javascript

  let output = []; // collect all the subarrays after it's been "merged";

  for(let i = 0; i < intervals.length; i++) {
    let prev = output[output.length - 1];
    // we'll always compare each of the interval subarray with the last subarray in the output arr;
    if(i === 0 || prev[1] < intervals[i][0]) {
      // if the last ele of prev is less than the first ele of intervals[i];
      output.push(intervals[i]);
    } else {
      // if they overlap,
      prev[1] = Math.max(prev[1], intervals[i][1]);
      // compare the 2 last elements;
      // the last ele of the prev gets reassigned to whichever one is greater
      // amongst the last ele of the prev and the last ele of the intervals[i];
    }
  }
  return output;
}





//
