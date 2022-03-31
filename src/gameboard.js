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
    const placeShip = (ship, x, y, rotation) => {
        const length = ships[ship].length;
        if (rotation === 'vertical') {
            if (length + y > 10) {
                console.log("Can't cheat! The ship must be placed inside the gameboard, please try again!");
                return board;
            } else {
                for (let i = 0; i < length; i++) {
                    board[y][x] = 1;
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
                    board[y][x] = 1;
                    x++;
                }
                return board;
            }
        }
    }
    return { ships, board, placeShip };
};

export { Gameboard };