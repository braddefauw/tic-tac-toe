// gameboard module
const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return { board };
})();

// player factory function
const Player = name => {
    const getName = () => console.log(name);
    return { getName };
}

const brad = Player('brad');
// brad.getName();

let turn = 1;
let index = 0;

let footer = document.querySelector('footer');

gameBoard.board.forEach((element) => {
    let block = document.createElement("div");
    block.classList.add("block");
    block.dataset.indexNumber = index;
    index++;
    block.innerText = element;
    block.addEventListener('click', () => {
        if(footer.innerText === "In Progress..."){
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
        } 
    })
    let boardDiv = document.querySelector('#board');
    boardDiv.appendChild(block);
});

const check = () => {
    if((gameBoard.board[0] === "X" && gameBoard.board[1] === "X" && gameBoard.board[2] === "X") ||
    (gameBoard.board[3] === "X" && gameBoard.board[4] === "X"&& gameBoard.board[5] === "X") ||
    (gameBoard.board[6] === "X" && gameBoard.board[7] === "X" && gameBoard.board[8] === "X") ||
    (gameBoard.board[0] === "X" && gameBoard.board[3] === "X" && gameBoard.board[6] === "X") ||
    (gameBoard.board[1] === "X" && gameBoard.board[4] === "X" && gameBoard.board[7] === "X") ||
    (gameBoard.board[2] === "X" && gameBoard.board[5] === "X" && gameBoard.board[8] === "X") ||
    (gameBoard.board[0] === "X" && gameBoard.board[4] === "X" && gameBoard.board[8] === "X") ||
    (gameBoard.board[2] === "X" && gameBoard.board[4] === "X" && gameBoard.board[6] === "X")){
        footer.innerText = "X WINS!"
    }else if((gameBoard.board[0] === "O" && gameBoard.board[1] === "O" && gameBoard.board[2] === "O") ||
    (gameBoard.board[3] === "O" && gameBoard.board[4] === "O" && gameBoard.board[5] === "O") ||
    (gameBoard.board[6] === "O" && gameBoard.board[7] === "O" && gameBoard.board[8] === "O") ||
    (gameBoard.board[0] === "O" && gameBoard.board[3] === "O" && gameBoard.board[6] === "O") ||
    (gameBoard.board[1] === "O" && gameBoard.board[4] === "O" && gameBoard.board[7] === "O") ||
    (gameBoard.board[2] === "O" && gameBoard.board[5] === "O" && gameBoard.board[8] === "O") ||
    (gameBoard.board[0] === "O" && gameBoard.board[4] === "O" && gameBoard.board[8] === "O") ||
    (gameBoard.board[2] === "O" && gameBoard.board[4] === "O" && gameBoard.board[6] === "O")){
        footer.innerText = "O WINS!"
    }else if(gameBoard.board[0] && gameBoard.board[1] && gameBoard.board[2] && gameBoard.board[3] &&
        gameBoard.board[4] && gameBoard.board[5] && gameBoard.board[6] && gameBoard.board[7] && gameBoard.board[8]){
            footer.innerText = "DRAW"
    }
}