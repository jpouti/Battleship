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

test('Attack to computer submarine and check if hit is registered', () => {
    player1.attack(2, 2, computer);
    expect(computer.gameboard.board[2][2]).toBe('miss');
    player1.attack(6, 6, computer);
    expect(computer.gameboard.board[6][6]).toBe('hit');
    player1.attack(7, 6, computer);
    player1.attack(8, 6, computer);
    expect(computer.gameboard.ships['submarine'].isSunk()).toBe(true);
});

test('Attack random attack with computer, and check coordinates it registers', () => {
    computer.computerAttack(player1);
    computer.computerAttack(player1);
    expect(computer.computerAttackArray.length).toBe(2);
    expect(player1.gameboard.board[computer.computerAttackArray[0].x][computer.computerAttackArray[0].y]).not.toBe("");
});
