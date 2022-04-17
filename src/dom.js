import { Player } from "./player.js";

const dom = (() => {
    //create 10x10 grid elements
    const createGrid = (num) => {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container' + num;
        const grid = document.createElement('div');
        grid.id = 'grid' + num;

        let rows = 0;
        let cols = 0;
        while (cols < 10) {
            while (rows < 10) {
                let element = document.createElement('div');
                element.setAttribute('data-id', ([rows, cols]));
                element.id = [rows, cols, num];
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

        carrier.classList.add('carrier');
        battleship.classList.add('battleship');
        cruiser.classList.add('cruiser');
        submarine.classList.add('submarine');
        destroyer.classList.add('destroyer');

        carrier.textContent = player.gameboard.ships['carrier'].health;
        battleship.textContent = player.gameboard.ships['battleship'].health;
        cruiser.textContent = player.gameboard.ships['cruiser'].health;
        submarine.textContent = player.gameboard.ships['submarine'].health;
        destroyer.textContent = player.gameboard.ships['destroyer'].health;

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
        playerContainer.id = 'player-container-' + name.name;

        const player = document.createElement('h3');
        player.id = name.name;
        player.textContent = name.name;

        playerContainer.appendChild(player);
        playerContainer.appendChild(dom.createShips(name));
        return playerContainer;
    }
    // create buttons for player
    const playerBtns = () => {
        const btnContainer = document.createElement('div');
        btnContainer.className = 'btn-container-player';

        const changeNameBtn = document.createElement('button');
        changeNameBtn.id = 'name-btn-1';
        changeNameBtn.textContent = 'Change name';

        const shipBtn = document.createElement('button');
        shipBtn.id = 'ship-btn';
        shipBtn.textContent = 'Randomize ships';

        const attackBtn = document.createElement('button');
        attackBtn.id = 'attack-btn';
        attackBtn.textContent = 'Random attack'

        btnContainer.appendChild(changeNameBtn);
        btnContainer.appendChild(shipBtn);
        btnContainer.appendChild(attackBtn);

        return btnContainer;
    }
    //create button for computer
    const computerBtns = () => {
        const btnContainer = document.createElement('div');
        btnContainer.className = 'btn-container-computer';

        const changeNameBtn = document.createElement('button');
        changeNameBtn.id = 'name-btn-2';
        changeNameBtn.textContent = 'Change name';

        btnContainer.appendChild(changeNameBtn);
        return btnContainer;
    }
    // create buttons related to overall gameplay
    const gameBtns = () => {
        const gameBtnContainer = document.createElement('div');
        gameBtnContainer.className = 'game-btn-container';

        const newGameBtn = document.createElement('button');
        newGameBtn.id = 'new-btn';
        newGameBtn.textContent = 'Start Game';

        const resetBtn = document.createElement('button');
        resetBtn.id = 'reset-btn';
        resetBtn.textContent = 'Reset game';

        gameBtnContainer.appendChild(newGameBtn);
        gameBtnContainer.appendChild(resetBtn);
        return gameBtnContainer;
    }
    // display gameboard array from selected player in the grid
    const displayGridPlayer = (player) => {
        let rows = 0;
        let cols = 0;
        while (cols < 10) {
            while (rows < 10) {
                let gridElement = document.getElementById([rows, cols, 1]);
                if (player.gameboard.board[cols][rows] === "") {
                    gridElement.textContent = player.gameboard.board[cols][rows];   
                } else if (player.gameboard.board[cols][rows] !== "") {
                    if (player.gameboard.board[cols][rows] === 'hit') {
                        gridElement.classList.add('hit');
                        gridElement.textContent = "";
                    } else if (player.gameboard.board[cols][rows] === 'miss'){
                        gridElement.textContent = 'X';
                        gridElement.classList.add('miss');                 
                    } else {
                        const ship = player.gameboard.board[cols][rows][1];
                        gridElement.classList.add(ship);
                    } 
                }
                rows ++;
            }
            cols++;
            rows = 0;
        }
    }
    const displayGridComputer = (player) => {
        let rows = 0;
        let cols = 0;
        while (cols < 10) {
            while (rows < 10) {
                let gridElement = document.getElementById([rows, cols, 2]);
                if (player.gameboard.board[cols][rows] === "") {
                    gridElement.textContent = player.gameboard.board[cols][rows];    
                } else if (player.gameboard.board[cols][rows] === "miss") {
                    gridElement.textContent = 'X';
                    gridElement.classList.add('miss');
                } else if (player.gameboard.board[cols][rows] === "hit") {
                    gridElement.classList.add('hit');
                } else if (player.gameboard.board[cols][rows] !== "") {
                    gridElement.textContent = "";
                } 
                rows ++;
            }
            cols++;
            rows = 0;
        }
    }
    const createScoreboard = () => {
        const scoreboard = document.createElement('div');
        scoreboard.id = 'scoreboard';
        return scoreboard;

    }
    const pageLoad = (player1, player2) => {
        const content = document.querySelector('.content');

        while(content.firstChild) {
            content.removeChild(content.firstChild);
        }

        const headerContainer = document.createElement('div');
        headerContainer.className = 'header-container';

        const header = document.createElement('h3');
        header.textContent = 'Battleship';
        headerContainer.appendChild(header);
        content.appendChild(headerContainer);

        const mainContent = document.createElement('div');
        mainContent.className = 'main-content';

        const player1Content = document.createElement('div');
        player1Content.className = 'player1-content';

        player1Content.appendChild(dom.players(player1));
        player1Content.appendChild(dom.createGrid('1'));

        const playerContainer1 = player1Content.firstChild;
        playerContainer1.appendChild(playerBtns());

        const player2Content = document.createElement('div');
        player2Content.className = 'player2-content';

        player2Content.appendChild(dom.players(player2));
        player2Content.appendChild(dom.createGrid('2'));
        
        const playerContainer2 = player2Content.firstChild;
        playerContainer2.appendChild(computerBtns());

        mainContent.appendChild(player1Content);
        mainContent.appendChild(player2Content);
        content.appendChild(mainContent);
        content.appendChild(gameBtns());
        content.appendChild(createScoreboard());
    }
    return {createGrid, createShips, players, displayGridPlayer, displayGridComputer, pageLoad}
})();

export { dom };