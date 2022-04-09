const dom = (() => {
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
                grid.appendChild(element);
                rows ++;
            }
            cols++;
            rows = 0;
        }
/*        for (let i = 0; i < 10; i++) {
            let gridRow = document.createElement('div');
            gridRow.setAttribute('data-id', ([i, j]));
            grid.appendChild(gridRow);
            for (let j = 0; j < 10; j++) {
                let gridCol = document.createElement('div');
                gridCol.setAttribute('data-id', ([i, j]));
                grid.appendChild(gridCol);
            }
        }*/

        gridContainer.appendChild(grid);
        return gridContainer;
    }
    const createShips = () =>{
        const shipContainer = document.createElement('div');
        shipContainer.className = 'ship-container';

        const carrier = document.createElement('p');
        const battleship = document.createElement('p');
        const cruiser = document.createElement('p');
        const submarine = document.createElement('p');
        const destroyer = document.createElement('p');

        carrier.id = 'carrier';
        battleship.id = 'battleship';
        cruiser.id = 'cruiser';
        submarine.id = 'submarine';
        destroyer.id = 'destroyer';
        shipContainer.appendChild(carrier);
        shipContainer.appendChild(battleship);
        shipContainer.appendChild(cruiser);
        shipContainer.appendChild(submarine);
        shipContainer.appendChild(destroyer);
        return shipContainer;
    }
    const players = () => {
        const playerContainer = document.createElement('div');
        playerContainer.className = 'player-container';

        const player = document.createElement('p');
        player.id = 'player';

        const element = document.querySelector('.player-container');
        element.appendChild(player);
        return element;
    }

    return {createGrid, createShips, players}
})();

export { dom };