import { Gameboard } from "./gameboard.js";

const Player = (name) => {
    const gameboard = Gameboard();
    const attack = (x, y, player) => {
        player.gameboard.receiveAttack(x, y);
    }
    let computerAttackArray = [];
    const computerAttack = (player) => {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        if (player.gameboard.board[x][y] === '' || player.gameboard.board[x][y][0] === 1) {
            player.gameboard.receiveAttack(x, y);
            computerAttackArray.push({x, y});
        } else {
            computerAttack(player);
        }
    }
    return {
        name,
        gameboard,
        computerAttackArray,
        attack,
        computerAttack,
    };
};

export { Player };