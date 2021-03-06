import { dom } from "./dom.js";
import { game } from "./game.js";
import { Player } from "./player.js";
import './styles.css';

// create page with default player names and settings
const player1 = Player('Player1');
const player2 = Player('Computer');

function loadDefault(player1, player2) {
    dom.pageLoad(player1, player2);
    game.randomShip(player1);
    player2.gameboard.clearBoard();
    player2.gameboard.randomPlacement();
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.textContent = 'Place your ships and start a battle of the year by pressing "Start Game"';   
    createEventlistener();
}

//create event listeners for buttons
function createEventlistener() {
    const changeNameBtnPlayer1 = document.getElementById('name-btn-1');
    changeNameBtnPlayer1.addEventListener('click', () => {
        let input = prompt('Please give a new name for your player!');
        game.changeName(player1, input);
        loadDefault(player1, player2);
    });
    
    const changeNameBtnPlayer2 = document.getElementById('name-btn-2');
    changeNameBtnPlayer2.addEventListener('click', () => {
        let input = prompt('Please give a new name for your player!');
        game.changeName(player2, input);
        loadDefault(player1, player2);
    });
    
    const randomShips = document.getElementById('ship-btn');
    randomShips.addEventListener('click', shipListener);
    
    const startGame = document.getElementById('new-btn');
    startGame.addEventListener('click', () => {
        game.newGame(player1, player2);
        randomShips.removeEventListener('click', shipListener); // remove option to change ship locations after new game is called
    })
    
    const resetGame = document.getElementById('reset-btn');
    resetGame.addEventListener('click', () => {
        player1.gameboard.defaultHealth();
        player2.gameboard.defaultHealth();
        dom.pageLoad(player1, player2);
        game.randomShip(player1);
        player2.gameboard.clearBoard();
        player2.gameboard.randomPlacement();
        const scoreboard = document.getElementById('scoreboard');
        scoreboard.textContent = 'Game has been reset, please start a new game by pressing Start Game';
        createEventlistener();
    })
    
    function shipListener() {
        game.randomShip(player1);
        const scoreboard = document.getElementById('scoreboard');
        scoreboard.textContent = player1.name + ' ship placements have been randomized';
    }    
}

loadDefault(player1, player2);

// icons <a href='https://www.freepik.com/vectors/warship'>Warship vector created by macrovector - www.freepik.com</a>