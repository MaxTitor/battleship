const createShip = require('./createShip')

const carrier = createShip(5, 'carrier');
const battleship = createShip(4, 'battleship');
const cruiser = createShip(3, 'cruiser');
const submarine = createShip(3, 'submarine')
const destroyer = createShip(2, 'destroyer');

const playerShips = [carrier, battleship, cruiser, submarine, destroyer]

export default playerShips