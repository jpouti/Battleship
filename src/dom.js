import { Player } from "./player.js";

const dom = (() => {
    //create 10x10 grid elements
    const createGrid = () => {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';
        const grid = document.createElement('div');
        grid.id = 'grid';

        let rows = 0;
        let cols = 0;
        while (cols < 10) {
            while (rows < 10) {
                let element = document.createElement('div');
                element.setAttribute('data-id', ([rows, cols]));
                element.id = [rows, cols];
                grid.appendChild(element);
                rows ++;
            }
            cols++;
            rows = 0;
        }
        gridContainer.appendChild(grid);
        return gridContainer;
    }
    //create elements for ships with id linked to related player
    const createShips = (player) =>{
        const shipContainer = document.createElement('div');
        shipContainer.className = 'ship-container';

        const carrier = document.createElement('div');
        const battleship = document.createElement('div');
        const cruiser = document.createElement('div');
        const submarine = document.createElement('div');
        const destroyer = document.createElement('div');

        carrier.id = 'carrier' + player;
        battleship.id = 'battleship'+ player;
        cruiser.id = 'cruiser'+ player;
        submarine.id = 'submarine'+ player;
        destroyer.id = 'destroyer'+ player;
        shipContainer.appendChild(carrier);
        shipContainer.appendChild(battleship);
        shipContainer.appendChild(cruiser);
        shipContainer.appendChild(submarine);
        shipContainer.appendChild(destroyer);
        return shipContainer;
    }
    // create elements for players
    const players = (id) => {
        const playerContainer = document.createElement('div');
        playerContainer.className = 'player-container';

        const player = document.createElement('p');
        player.id = 'player' + id;

        const element = document.querySelector('.player-container');
        element.appendChild(player);
        return element;
    }
    // display gameboard array from selected player in the grid
    const displayGrid = (player) => {
        let rows = 0;
        let cols = 0;
        while (cols < 10) {
            while (rows < 10) {
                let gridElement = document.getElementById([rows, cols]);
                gridElement.textContent = player.gameboard.board[cols][rows];
                rows ++;
            }
            cols++;
            rows = 0;
        }
    }
    return {createGrid, createShips, players, displayGrid}
})();

export { dom };