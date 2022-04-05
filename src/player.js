import { Gameboard } from "./gameboard.js";

const Player = (name) => {
    const gameboard = Gameboard();
    const attack = (x, y, player) => {
        player.gameboard.receiveAttack(x, y);
    }
    const computerAttack = (player) => {
        let x = Math.floor(Math.random() * 11);
        let y = Math.floor(Math.random() * 11);
        if (player.gameboard.board[x][y] === '' || player.gameboard.board[x][y][0] === 1) {
            player.gameboard.receiveAttack(x, y);
        } else {
            computerAttack();
        }
    }
    return {
        name,
        gameboard,
        attack,
        computerAttack,
    };
};

export { Player };