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

gameBoard.board.forEach((element) => {
    let block = document.createElement("div");
    block.classList.add("block");
    block.innerText = element;
    block.addEventListener('click', () => {
        if(block.innerText === ""){
            if(turn % 2 !== 0){
                element = "X";
            }else{
                element = "O";
            }
            block.innerText = element;
            gameBoard.board[turn] = element;
            turn++;
            console.log(gameBoard.board);
        }
    })
    let boardDiv = document.querySelector('#board');
    boardDiv.appendChild(block);
});

// const check = () => {
//     console.log("test");
// }