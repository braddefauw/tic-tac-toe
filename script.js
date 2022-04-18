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
