// gameboard module
const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return { board };
})();

// console.log(gameBoard.board);

// player factory function
const Player = name => {
    const getName = () => console.log(name);
    return { getName };
}

const brad = Player('brad');
// brad.getName();

let turn = 1;
let index = 0;

gameBoard.board.forEach((element) => {
    let block = document.createElement("div");
    block.classList.add("block");
    block.dataset.indexNumber = index;
    index++;
    block.innerText = element;
    block.addEventListener('click', () => {
        if(block.innerText === ""){
            if(turn % 2 !== 0){
                element = "X";
            }else{
                element = "O";
            }
            block.innerText = element;
            gameBoard.board[block.dataset.indexNumber] = element;
            check();
            turn++;
        }
    })
    let boardDiv = document.querySelector('#board');
    boardDiv.appendChild(block);
});

const check = () => {
    console.log(gameBoard.board)
    if((gameBoard.board[0] === "X" && gameBoard.board[1] === "X" && gameBoard.board[2] === "X") ||
    (gameBoard.board[3] === "X" && gameBoard.board[4] === "X"&& gameBoard.board[5] === "X") ||
    (gameBoard.board[6] === "X" && gameBoard.board[7] === "X" && gameBoard.board[8] === "X") ||
    (gameBoard.board[0] === "X" && gameBoard.board[3] === "X" && gameBoard.board[6] === "X") ||
    (gameBoard.board[1] === "X" && gameBoard.board[4] === "X" && gameBoard.board[7] === "X") ||
    (gameBoard.board[2] === "X" && gameBoard.board[5] === "X" && gameBoard.board[8] === "X") ||
    (gameBoard.board[0] === "X" && gameBoard.board[4] === "X" && gameBoard.board[8] === "X") ||
    (gameBoard.board[2] === "X" && gameBoard.board[4] === "X" && gameBoard.board[6] === "X")){
        console.log("x wins");
    }else if((gameBoard.board[0] === "O" && gameBoard.board[1] === "O" && gameBoard.board[2] === "O") ||
    (gameBoard.board[3] === "O" && gameBoard.board[4] === "O" && gameBoard.board[5] === "O") ||
    (gameBoard.board[6] === "O" && gameBoard.board[7] === "O" && gameBoard.board[8] === "O") ||
    (gameBoard.board[0] === "O" && gameBoard.board[3] === "O" && gameBoard.board[6] === "O") ||
    (gameBoard.board[1] === "O" && gameBoard.board[4] === "O" && gameBoard.board[7] === "O") ||
    (gameBoard.board[2] === "O" && gameBoard.board[5] === "O" && gameBoard.board[8] === "O") ||
    (gameBoard.board[0] === "O" && gameBoard.board[4] === "O" && gameBoard.board[8] === "O") ||
    (gameBoard.board[2] === "O" && gameBoard.board[4] === "O" && gameBoard.board[6] === "O")){
        console.log("o wins");
    }
}