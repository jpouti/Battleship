import { dom } from "./dom.js";
import { game } from "./game.js";
import { Player } from "./player.js";
import './styles.css';

// create page with default player names and settings
const player1 = Player('Player1');
const player2 = Player('Computer');
dom.pageLoad(player1, player2);
game.randomShip(player1);
player2.gameboard.randomPlacement();

//create event listeners for buttons
const changeNameBtnPlayer1 = document.getElementById('name-btn-1');
changeNameBtnPlayer1.addEventListener('click', () => {
    let input = prompt('Please give a new name for your player!');
    game.changeName(player1, input);
});

const changeNameBtnPlayer2 = document.getElementById('name-btn-2');
changeNameBtnPlayer2.addEventListener('click', () => {
    let input = prompt('Please give a new name for your player!');
    game.changeName(player2, input);
});

const randomShips = document.getElementById('ship-btn');
randomShips.addEventListener('click', shipListener);

const startGame = document.getElementById('new-btn');
startGame.addEventListener('click', () => {
    game.newGame(player1, player2);
    randomShips.removeEventListener('click', shipListener); // remove option to change ship locations after new game is called
})

function shipListener() {
    game.randomShip(player1);
}
