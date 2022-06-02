const createGameboard = require("../createGameboard");
const createShip = require('../createShip');

let ship = createShip(4);
ship.hit(1)
ship.hit(2)
ship.hit(3)
ship.hit(4)

let gameboard = createGameboard()

gameboard.place(ship, ['b', 7]);
gameboard.recieveAttack(['c', 8])

test('check ships', () => {
    expect(gameboard.placedShips[0].ship.length).toBe(4)
})

test('check ship coords', () => {
    expect(gameboard.placedShips[0].coords).toStrictEqual(['b', 7])
})

test('check attacked positions', () => {
    expect(gameboard.attackedPositions[0]).toStrictEqual(['c', 8])
})

test('check if player lost', () => {
    expect(gameboard.didPlayerLose()).toBe(true)
})