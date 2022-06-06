const createPlayer = require('../createPlayer')
const createShip = require('../createShip')

const carrier = createShip(5);
const battleship = createShip(4);
const cruiser = createShip(3);
const submarine = createShip(3)
const destroyer = createShip(2);

player = createPlayer();
const gameboard = player.returnBoard()
player.placeShip(destroyer, 'horizontal', ['a', 1])
player.placeShip(destroyer, 'vertical', ['a', 1])

player.attack(['b', 7])

test('place ship horizontal', () => {
    expect(gameboard.placedShips[0].coords).toStrictEqual([['a', 1], ['a', 2]])
})

test('place ship vertical', () => {
    expect(gameboard.placedShips[1].coords).toStrictEqual([['a', 1], ['b', 1]])
})

test('attack', () => {
    expect(gameboard.attackedPositions[0]).toStrictEqual(['b', 7])
})