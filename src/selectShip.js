import player from "./player";
import playerShips from "./playerShips";
import updatePlayerBoard from "./updatePlayerBoard";

const carrierBtn = document.getElementById('carrier-btn');
const battleshipBtn = document.getElementById('battleship-btn');
const cruiserBtn = document.getElementById('cruiser-btn');
const submarineBtn = document.getElementById('submarine-btn');
const destroyerBtn = document.getElementById('destroyer-btn');
const horizontalBtn = document.getElementById('horizontal-btn');
const verticalBtn = document.getElementById('vertical-btn');

let selectedShip = 'carrier';
let direction = 'horizontal';

horizontalBtn.addEventListener('click', () => {
    direction = 'horizontal';
})

verticalBtn.addEventListener('click', () => {
    direction = 'vertical';
})

carrierBtn.addEventListener('click', () => {
    selectedShip = 'carrier';
})

battleshipBtn.addEventListener('click', () => {
    selectedShip = 'battleship';
})

cruiserBtn.addEventListener('click', () => {
    selectedShip = 'cruiser';
})

submarineBtn.addEventListener('click', () => {
    selectedShip = 'submarine';
})

destroyerBtn.addEventListener('click', () => {
    selectedShip = 'destroyer';
})

function getCoords(coordsString) {
    let coords = coordsString.split('')
    if (coords.length === 3) {
        coords.pop()
        coords = [coords[0], 10]
    } else if (coords.length === 2) {
        coords = [coords[0], Number(coords[1])]
    }
    selectShip(coords)
}

function selectShip(coords) {
    playerShips.forEach(ship => {
        if (ship.name === selectedShip && ship.isPlaced === false) {
            player.placeShip(ship, direction, coords)
        } else if (ship.name === selectedShip && ship.isPlaced === true) {
            player.moveShip(ship, direction, coords)
        }
    })
    updatePlayerBoard();
}

export default getCoords