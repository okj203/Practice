// 723. Candy Crush
// This question is about implementing a basic elimination algorithm for Candy Crush.
//
// Given a 2D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies. A value of board[i][j] = 0 represents that the cell at position (i, j) is empty. The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:
//
// If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.
// After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)
// After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
// If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.
// You need to perform the above rules until the board becomes stable, then return the current board.
//
//
//
// Example:
//
// Input:
// board =
// [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]
//
// Output:
// [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]


var candyCrush = function(board) {
    while(true){
        let moreToCrush = false;
        // visit every candy spot
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if(board[i][j] > 0) {
                    moreToCrush = flagForCrush(board, i, j, board[i][j], 0, true, false) || moreToCrush;
                    moreToCrush = flagForCrush(board, i, j, board[i][j], 0, false, true) || moreToCrush;
                }
            }
        }
        if (!moreToCrush) break;
            // if there's nothing more to crush, break and return the board

        crush(board); // otherwise crush candies
        inflictGravity(board); // pull new candies down
    }
    return board;
};

// "flag" candy to be crushed by reassigning it as a negative number
// if there are 3 or more matching candies, while performing dfs going right and down;
// return true or false depending on if or not candies are flagged;

let flagForCrush = function(board, i, j, target, count, right, down) {

    // base case: if we reach the bottom / end of the row /col OR we run into a candy with diff value from target pos;
    if(i === board.length || j === board[0].length || Math.abs(board[i][j]) !== Math.abs(target)) {
        return count >= 3;
    }

    let shouldFlagRight = flagForCrush(board, i, j+1, target, right ? count+1 : 1, true, false);
    let shouldFlagDown = flagForCrush(board, i+1, j, target, down ? count+1 : 1, false, true);

    // if either one of them returns true, it means there's something to be crushed,
    // so flag them to be negative value;
    if((shouldFlagRight && right) || (shouldFlagDown && down)) {
        board[i][j] = -Math.abs(board[i][j]);
        return true;
    }

    return false;
}

// scan the board and change any candy that is "flagged" to be zero;
let crush = function(board){
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] < 0) board[i][j] = 0;
        }
    }
};

// scan from bottom to top, swapping zeros with the first non-zero candy occurs above it;

let inflictGravity = function(board){
    for(let j = 0; j < board[0].length; j++) {
        let st = board.length - 1;
        let end = board.length - 2;

        // till we reach the top row of the board
        while(end >= 0) {
            if(board[st][j] === 0 && board[end][j] !== 0) {
                //if current candy is 0 and the next one isn't, swap them;
                let temp = board[st][j];
                board[st][j] = board[end][j];
                board[end][j] = temp;
                st--;

            } else if (board[st][j] !== 0){
                // if current candy isn't 0
                st--;
            }
            end--;
        }
    }
}
