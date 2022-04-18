// gameboard module
const gameBoard = (() => {
    const board = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
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

gameBoard.board.forEach((element) => {
    let turn = "x";
    let block = document.createElement("div");
    block.classList.add("block");
    block.addEventListener('click', () => {
        if(turn === "x"){
            block.innerText = turn;
            turn = "o"
        }else{
            block.innerText = turn;
            turn = "x";
        }
    })
    let board = document.querySelector('#board');
    board.appendChild(block);
});