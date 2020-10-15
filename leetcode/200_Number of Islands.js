// 200. Number of Islands
// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.
//
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.
//
// Example 1:
//
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:
//
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

function numIslands(grid) {
  let count = 0;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === '0') continue;

      count++;
      dfs(i, j);
    }
  }
  return count;

  function dfs(i, j) {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;
    if(grid[i][j] === '0') return;

    grid[i][j] = '0';

    // everything that's around the current position (in 4 directions) is part of the land,
    // but diagonally positioned land doesn't count as part of the land. so that's where the function stops the iteration;
    dfs(i-1, j);
    dfs(i+1, j);
    dfs(i, j+1);
    dfs(i, j-1);
  }
}


// O(n*m+r)
// n = the first for loop
// m = second for loop
// r = recursion in helper function

// O(n^2) or O(n*m): TC should be the size of the matrix (Row x Col)
// since you're traversing every element once.
