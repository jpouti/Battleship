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
                element.className = 'grid-item';
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

        carrier.id = 'carrier-' + player.name;
        battleship.id = 'battleship-'+ player.name;
        cruiser.id = 'cruiser-'+ player.name;
        submarine.id = 'submarine-'+ player.name;
        destroyer.id = 'destroyer-'+ player.name;

        carrier.textContent = Array(5);
        battleship.textContent = Array(4);
        cruiser.textContent = Array(3);
        submarine.textContent = Array(3);
        destroyer.textContent = Array(2);

        shipContainer.appendChild(carrier);
        shipContainer.appendChild(battleship);
        shipContainer.appendChild(cruiser);
        shipContainer.appendChild(submarine);
        shipContainer.appendChild(destroyer);
        return shipContainer;
    }
    // create elements for players
    const players = (name) => {
        const playerContainer = document.createElement('div');
        playerContainer.className = 'player-container';

        const player = document.createElement('p');
        player.id = name.name;
        player.textContent = name.name;

        playerContainer.appendChild(player);
        playerContainer.appendChild(dom.createShips(name));
        return playerContainer;
    }
    // display gameboard array from selected player in the grid
    const displayGrid = (player) => {
        let rows = 0;
        let cols = 0;
        while (cols < 10) {
            while (rows < 10) {
                let gridElement = document.getElementById([rows, cols]);
                if (player.gameboard.board[cols][rows] === "") {
                    gridElement.textContent = player.gameboard.board[cols][rows];    
                } else if (player.gameboard.board[cols][rows].length !== "") {
                    gridElement.textContent = player.gameboard.board[cols][rows][0];   
                }
                rows ++;
            }
            cols++;
            rows = 0;
        }
    }
    const pageLoad = (player1, player2) => {
        const content = document.querySelector('.content');

        const headerContainer = document.createElement('div');
        headerContainer.className = 'header-container';

        const header = document.createElement('h3');
        header.textContent = 'Battleship';
        headerContainer.appendChild(header);
        content.appendChild(headerContainer);

        const mainContent = document.createElement('div');
        mainContent.className = 'main-content';

        mainContent.appendChild(dom.players(player1));
        mainContent.appendChild(dom.createGrid());
        mainContent.appendChild(dom.players(player2));

        content.appendChild(mainContent);
    }
    return {createGrid, createShips, players, displayGrid, pageLoad}
})();

export { dom };