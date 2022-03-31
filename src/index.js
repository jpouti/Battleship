import { Gameboard } from './gameboard.js';

console.log("test");
const gameboard1 = Gameboard();
const gameboard2 = Gameboard();
//console.log(gameboard.createBoard());
gameboard1.board[1][1] = 1;
console.log(gameboard1.board);
console.log(gameboard1.ships);
gameboard1.placeShip('battleship', 1, 1, 'vertical');
console.log(gameboard1.board);