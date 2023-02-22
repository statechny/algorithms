const isSolved = (board) => {

    //check diagonal
    if(board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0]
    }

    if(board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2]
    }

    //check rows
    for(let i = 0; i < board.length; i++) {
        if(board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0];
        }
    }

    //check columns
    for(let j = 0; j < board.length; j++) {
        if(board[0][j] !== 0 && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            return board[0][j];
        }
    }

    //check if it's a cat's game (i.e. a draw).
    const flat = [...board[0], ...board[1], ...board[2]]
    if(!flat.includes(0)) {
        return 0
    }

    // if the board is not yet finished AND no one has won yet (there are empty spots),
    return -1;
}


console.log(isSolved([
        [0, 0, 1],
        [0, 1, 2],
        [2, 1, 0],
    ]), '-1');

console.log(isSolved([
        [0, 1, 1],
        [0, 1, 2],
        [2, 1, 0],
]), '1');

console.log(isSolved([
        [1, 0, 1],
        [0, 1, 2],
        [2, 1, 1],
    ]), '1');

console.log(isSolved([
        [2, 2, 2],
        [0, 1, 2],
        [2, 1, 0],
    ]), '2');

console.log(isSolved([
        [2, 2, 1],
        [1, 1, 2],
        [2, 1, 1],
    ]), '0');

console.log(isSolved([
        [2, 0, 2],
        [2, 1, 1],
        [1, 2, 1],
    ]), '-1');

console.log(isSolved([
        [0,0,2],
        [0,0,0],
        [1,0,1],
    ]), '-1');

console.log(isSolved([
        [0,1,1],
        [2,0,2],
        [2,1,0],
    ]), '-1');
