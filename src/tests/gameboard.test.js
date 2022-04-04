import { Gameboard } from "../gameboard";

test('test placing a ship (battleship) for default position [(0,0) - (3,0)]', () => {
    const gameboard = Gameboard();
    expect(gameboard.ships['battleship'].length).toBe(4);
    gameboard.placeShip('battleship', 0, 0, 'vertical');
    expect(gameboard.board[0][0][0]).toBe(1);
    expect(gameboard.board[3][0][0]).toBe(1);
    expect(gameboard.board[4][0]).toBe("");
});

test('place a submarine to position [(3, 3) - (3, 6)', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('submarine', 3, 3, 'horizontal');
    expect(gameboard.board[3][3][0]).toBe(1);
    expect(gameboard.board[3][5][0]).toBe(1);
    expect(gameboard.board[3][6]).toBe("");
});

test('Try placing a ship above the gameboard coordinates, check error print and canceled placement', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('submarine', 8, 8, 'horizontal');
    expect(gameboard.board[8][8]).toBe("");
    expect(gameboard.board[9][9]).toBe("");
});

test('Hit a ship, and check gameboard values for hits & miss', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('submarine', 3, 3, 'horizontal');
    gameboard.receiveAttack(3, 2);
    expect(gameboard.board[3][2]).toBe('miss');
    gameboard.receiveAttack(3, 3);
    expect(gameboard.board[3][3]).toBe('hit');
    gameboard.receiveAttack(3, 5);
    expect(gameboard.board[3][5]).toBe('hit');
    expect(gameboard.ships['submarine'].isSunk()).toBe(false);
});

test('Place a destroyer and sink it down!', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('destroyer', 5, 5, 'vertical');
    gameboard.receiveAttack(5, 5);
    gameboard.receiveAttack(6, 5);
    expect(gameboard.ships['destroyer'].isSunk()).toBe(true);
});

test('Check whether all of the ships have been sunk or not', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('destroyer', 0, 0, 'vertical');
    gameboard.placeShip('submarine', 0, 2, 'vertical');
    gameboard.placeShip('cruiser', 1, 1, 'vertical');
    gameboard.placeShip('battleship', 2, 1, 'vertical');
    gameboard.placeShip('carrier', 3, 1, 'vertical');
    expect(gameboard.everythingLost()).toBe(false);
    //attacking all the ships
    gameboard.receiveAttack(0, 0); //destroyer
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(2, 0); //submarine
    gameboard.receiveAttack(3, 0);
    gameboard.receiveAttack(4, 0);
    console.log(gameboard.board);
    gameboard.receiveAttack(1, 1); //cruiser
    gameboard.receiveAttack(2, 1);
    gameboard.receiveAttack(3, 1);
    gameboard.receiveAttack(1, 2); //battleship
    gameboard.receiveAttack(2, 2);
    gameboard.receiveAttack(3, 2);
    gameboard.receiveAttack(4, 2);
    gameboard.receiveAttack(1, 3); //carrier
    gameboard.receiveAttack(2, 3);
    gameboard.receiveAttack(3, 3);
    gameboard.receiveAttack(4, 3);
    gameboard.receiveAttack(5, 3);
    expect(gameboard.everythingLost()).toBe(true);
});
