import { Player } from "../player";

const player1 = Player('Player1');
const computer = Player('computer');

test('Check player names', () => {
    expect(player1.name).toBe('Player1');
    expect(computer.name).toBe('computer');
});

test('Place a submarine for both of players and check the position', () => {
    player1.gameboard.placeShip('submarine', 1, 1, 'horizontal');
    computer.gameboard.placeShip('submarine', 6, 6, 'vertical');
    expect(player1.gameboard.board[1][1]).toEqual([1, 'submarine', 0]);
    expect(player1.gameboard.board[1][3]).toEqual([1, 'submarine', 2]);
    expect(player1.gameboard.board[1][5]).toEqual("");
    expect(computer.gameboard.board[6][6]).toEqual([1, 'submarine', 0]);
    expect(computer.gameboard.board[8][6]).toEqual([1, 'submarine', 2]);
});
/*
test('Use random placement, and check if all the ships are placed to the board', () => {
    console.log(player1.gameboard.board);
    player1.randomPlacement();
    console.log(player1.gameboard.board);
}); */
