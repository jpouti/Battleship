import { Player } from "./player.js";
import { dom } from "./dom.js";

const game = (() => {
    const changeName = (player, newName) => {
        const playerName = document.getElementById(player.name);
        playerName.textContent = newName;
        player.name = newName;
    }
    const randomShip = (player) => {
        player.gameboard.clearBoard();
        player.gameboard.randomPlacement();
        dom.displayGridPlayer(player);
    }
    const newGame = (player1, player2) => {
        dom.displayGridPlayer(player1);
        dom.displayGridComputer(player2);
        let turn = 0;
        const checkTurn = () => {
            if (turn % 2 === 0) {
                console.log(player1);
                return player1;
            } else if (turn % 2 !== 0) {
                console.log(player2);
                return player2;
            }
        }
        const activateGrid = () => {
            const grid = document.querySelectorAll('#grid2');
            grid.forEach(item => {
                item.addEventListener('click', listener);
            });
        };
        const listener = (event) => {
            const y = event.path[0].id[0];
            const x = event.path[0].id[2];
            if (player2.gameboard.board[x][y] === 'miss' || player2.gameboard.board[x][y] === 'hit') {
                return;
            } else if (player2.gameboard.board[x][y].length > 1 || player2.gameboard.board[x][y] === '') {
                player1.attack(x, y, player2);
                dom.displayGridComputer(player2);
                if (winner() !== false) {
                    console.log(winner());
                    return;
                }
                turn++;

                player2.computerAttack(player1);
                dom.displayGridPlayer(player1);
                if (winner() !== false) {
                    console.log(winner());
                } 
                return;
            }
        }
        const deactivateGrid = () => {
            const grid = document.querySelectorAll('#grid2');
            grid.forEach(item => {
                item.removeEventListener('click', listener);
            });
        };     
        const winner = () => {
            if (player1.gameboard.everythingLost() === true) {
                console.log('p2 won');
                deactivateGrid();
                deactivateRandomAttack();
                return player2;
            } else if (player2.gameboard.everythingLost() === true) {
                console.log('p1 won');
                deactivateGrid();
                deactivateRandomAttack();
                return player1;
            } else {
                return false;
            }
        }
        const randomAttackPlayer = () => {
            player1.computerAttack(player2);
            dom.displayGridComputer(player2);
            if (winner() !== false) {
                console.log(winner());
                return;
            }
            turn++;
    
            player2.computerAttack(player1);
            dom.displayGridPlayer(player1);
            if (winner() !== false) {
                console.log(winner());
            } 
            return;
        }
        const activateRandomAttack = () => {
            const randomAttackBtn = document.getElementById('attack-btn');
            randomAttackBtn.addEventListener('click', randomAttackPlayer);
        }
        const deactivateRandomAttack = () => {
            const randomAttackBtn = document.getElementById('attack-btn');
            randomAttackBtn.removeEventListener('click', randomAttackPlayer);
        }
        activateGrid();
        activateRandomAttack();
    }
    return { changeName, newGame, randomShip };
})();

export { game };