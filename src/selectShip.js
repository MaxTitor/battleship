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
    directionBtn()
})

verticalBtn.addEventListener('click', () => {
    direction = 'vertical';
    directionBtn()
})

carrierBtn.addEventListener('click', () => {
    selectedShip = 'carrier';
    selectedBtn()
})

battleshipBtn.addEventListener('click', () => {
    selectedShip = 'battleship';
    selectedBtn()
})

cruiserBtn.addEventListener('click', () => {
    selectedShip = 'cruiser';
    selectedBtn()
})

submarineBtn.addEventListener('click', () => {
    selectedShip = 'submarine';
    selectedBtn()
})

destroyerBtn.addEventListener('click', () => {
    selectedShip = 'destroyer';
    selectedBtn()
})

function directionBtn() {
    if (direction === 'horizontal') {
        horizontalBtn.classList.add('clicked')
        verticalBtn.classList.remove('clicked')
    } else if (direction === 'vertical') {
        horizontalBtn.classList.remove('clicked')
        verticalBtn.classList.add('clicked')
    }
}

directionBtn()

function selectedBtn() {
    if (selectedShip === 'carrier') {
        carrierBtn.classList.add('clicked')
        battleshipBtn.classList.remove('clicked')
        cruiserBtn.classList.remove('clicked')
        submarineBtn.classList.remove('clicked')
        destroyerBtn.classList.remove('clicked')
    } else if (selectedShip ==='battleship') {
        carrierBtn.classList.remove('clicked')
        battleshipBtn.classList.add('clicked')
        cruiserBtn.classList.remove('clicked')
        submarineBtn.classList.remove('clicked')
        destroyerBtn.classList.remove('clicked')
    } else if (selectedShip === 'cruiser') {
        carrierBtn.classList.remove('clicked')
        battleshipBtn.classList.remove('clicked')
        cruiserBtn.classList.add('clicked')
        submarineBtn.classList.remove('clicked')
        destroyerBtn.classList.remove('clicked')
    } else if (selectedShip === 'submarine') {
        carrierBtn.classList.remove('clicked')
        battleshipBtn.classList.remove('clicked')
        cruiserBtn.classList.remove('clicked')
        submarineBtn.classList.add('clicked')
        destroyerBtn.classList.remove('clicked')
    } else if (selectedShip === 'destroyer') {
        carrierBtn.classList.remove('clicked')
        battleshipBtn.classList.remove('clicked')
        cruiserBtn.classList.remove('clicked')
        submarineBtn.classList.remove('clicked')
        destroyerBtn.classList.add('clicked')
    }
}

selectedBtn()

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