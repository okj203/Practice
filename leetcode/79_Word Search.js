// 79. Word Search
// Given a 2D board and a word, find if the word exists in the grid.
//
// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally
// or vertically neighboring. The same letter cell may not be used more than once.
//
// Example:
//
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
//
// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

let exist = function(board, word) {
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      if(searchDFS(board, word, i, j)) return true;
    }
  }
  return false;
};

let isOutOfBound = (board, i, j) => i < 0 || i >= board.length || j < 0 || j >= board[0].length;

let searchDFS = (board, word, i, j) => {
  if(!word.length) return true;

  if(isOutOfBound(board, i, j) || board[i][j] !== word[0]) return false;

  let current = board[i][j];
  board[i][j] = "-";
  let newWord = word.slice(1);

  let output = searchDFS(board, newWord, i-1, j) || searchDFS(board, newWord, i+1, j) || searchDFS(board, newWord, i, j-1) || searchDFS(board, newWord, i, j+1);

  board[i][j] = current;

  return output;
}

// Time Complexity: O(NM);
// Space Complexity: O(NM); call stack;
