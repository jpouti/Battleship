import { shipFactory } from "./ship.js"

const Gameboard = () => {
    let board = Array(100).fill("").
        reduce((rows, key, index) => (index % 10 == 0 ? rows.push([key])
        : rows[rows.length-1].push(key)) && rows, []);
    const ships = {
        carrier: shipFactory(5),
        battleship: shipFactory(4),
        cruiser: shipFactory(3),
        submarine: shipFactory(3),
        destroyer: shipFactory(2),
    }
    const defaultHealth = () => {
        ships['carrier'].health.fill(1);
        ships['battleship'].health.fill(1)
        ships['cruiser'].health.fill(1)
        ships['submarine'].health.fill(1);
        ships['destroyer'].health.fill(1);
    }
    let shipsHit = [];
    let lastAttack = [];
    const placeShip = (ship, x, y, rotation) => {
        const length = ships[ship].length;
        if (placementCheck(ship, rotation, x, y) === true) {
            if (rotation === 'vertical') {
                if (length + y > 10) {
                    console.log("Can't cheat! The ship must be placed inside the gameboard, please try again!");
                    return board;
                } else {
                    for (let i = 0; i < length; i++) {
                        board[y][x] = [1, ship, i]; // i to indicate place for hit function
                        y++;
                    }
                    return board;
                }
            } else if (rotation === 'horizontal') {
                if (length + x > 10) {
                    console.log("Can't cheat! The ship must be placed inside the gameboard, please try again!");
                    return board;
                } else {
                    for (let i = 0; i < length; i++) {
                        board[y][x] = [1, ship, i]; // i to indicate place for hit function
                        x++;
                    }
                    return board;
                }
            }   
        } else if (placementCheck(ship, rotation, x, y) !== true) {
            return false;
        }
    }
    const receiveAttack = (x, y) => {
        if (board[x][y][0] === 1) {
            const ship = board[x][y][1];
            shipsHit.push(ship);
            lastAttack.push(true)
            const place = board[x][y][2];
            board[x][y] = 'hit';
            ships[ship].hit(place);
            ships[ship].isSunk();
            return board;
        } else if (board[x][y] === "") {
            board[x][y] = 'miss';
            lastAttack.push(false);
            return board;
        } else if (board[x][y] === 'hit' || board[x][y] === 'miss') {
            console.log('You have already shot here, please try again for a new spot');
            return board;
        }
    }
    const everythingLost = () => {
        return Object.values(ships).every(item => item.isSunk() === true);
    }
    const placementCheck = (ship, rotation, x, y) => {
        const length = ships[ship].length;
        const placemetArray = [];
        if (rotation === 'vertical') {
            for (let index = 0; index < length; index++) {
                placemetArray.push(board[y + index][x]);
            };
            if (placemetArray.every(e => e === "")) {
                return true;
            } else if (placemetArray.every(e => e !== "")) {
                return false;
            };
        } else if (rotation === 'horizontal') {
            for (let index = 0; index < length; index++) {
                placemetArray.push(board[y][x + index]);
            };
            if (placemetArray.every(e => e === "")) {
                return true;
            } else if (placemetArray.every(e => e !== "")) {
                return false;
            }
        }
    }
    const randomCoordinates = (ship, rotation) => {
        if (rotation === 'vertical') {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * (10 - ships[ship].length));   
            return {x, y};
        } else if (rotation === 'horizontal') {
            const x = Math.floor(Math.random() * (10 - ships[ship].length));
            const y = Math.floor(Math.random() * 10);   
            return {x, y};
        }
    }
    const randomPlacement = () => {
        const rotationValues = ['horizontal', 'vertical'];
        let randomRotation;
        let x;
        let y;
        let loop;
        Object.getOwnPropertyNames(ships).forEach(item => {
            do {
                randomRotation = Math.floor(Math.random() * rotationValues.length);
                let coords = randomCoordinates(item, rotationValues[randomRotation]);
                x = coords.x;
                y = coords.y;
                loop = placeShip(item, x, y, rotationValues[randomRotation]);
                placeShip(item, x, y, rotationValues[randomRotation]);
            } while (loop === false);
        });
    };
    const clearBoard = () => {
        for (let i = 0; i < board.length; i++) {
            let row = board[i];
            for (let j = 0; j < row.length; j++) {
                board[i][j] = "";
            }
        }
        return board;
    }
    return { ships, board, shipsHit, lastAttack, defaultHealth, placeShip, receiveAttack, everythingLost, placementCheck, randomPlacement, clearBoard };
};

export { Gameboard };