import { shipFactory } from "../ship";

test('Create a Battleship (length 4) and check ship parameters', () => {
    const ship = shipFactory(4);
    expect(ship.length).toBe(4);
    expect(ship.health).toEqual([1, 1, 1, 1]);
    expect(ship.isSunk()).toBe(false);
});

test('Hit a ship and mark that position as hit', () => {
    const ship = shipFactory(4);
    const position = 1;
    ship.hit(position);
    expect(ship.health[position]).toBe(0);
});

test('Destroy a ship and check if it sunk', () => {
    const ship = shipFactory(2);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(true);
});