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

let turn = 1;

gameBoard.board.forEach((element) => {
    let block = document.createElement("div");
    block.classList.add("block");
    block.addEventListener('click', () => {
        if(block.innerText === ""){
            if(turn % 2 !== 0){
                block.innerText = "X";
                turn++;
            }else{
                block.innerText = "O";
                turn++;
            }
        }
    })
    let board = document.querySelector('#board');
    board.appendChild(block);
});