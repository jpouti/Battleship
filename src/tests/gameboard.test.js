import { Gameboard } from "../gameboard";

test('test placing a ship (battleship) for default position [(0,0) - (3,0)]', () => {
    const gameboard = Gameboard();
    expect(gameboard.ships['battleship'].length).toBe(4);
    gameboard.placeShip('battleship', 0, 0, 'vertical');
    expect(gameboard.board[0][0]).toBe(1);
    expect(gameboard.board[3][0]).toBe(1);
    expect(gameboard.board[4][0]).toBe("");
});

test('place a submarine to position [(3, 3) - (3, 6)', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('submarine', 3, 3, 'horizontal');
    expect(gameboard.board[3][3]).toBe(1);
    expect(gameboard.board[3][5]).toBe(1);
    expect(gameboard.board[3][6]).toBe("");
});

test('Try placing a ship above the gameboard coordinates, check error print and canceled placement', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('submarine', 8, 8, 'horizontal');
    expect(gameboard.board[8][8]).toBe("");
    expect(gameboard.board[9][9]).toBe("");
});
