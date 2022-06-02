const createShip = require('../createShip');
let ship = createShip(2);
ship.hit(1);
ship.hit(2)

test('create a ship object', () => {
    expect(ship.length).toBe(2)
})

test('check a hit position', () => {
    expect(ship.hitPositions).toStrictEqual([1, 2])
})

test('check if ship is sunk', () => {
    expect(ship.isSunk()).toBe(true)
})