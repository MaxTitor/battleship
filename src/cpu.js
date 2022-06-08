const createPlayer = require('./createPlayer');
const cpu = createPlayer()
import cpuShips from './cpuShips';
const gameBoard = cpu.returnBoard();

let shipsPlaced = false;
function cpuPlace() {
    if (shipsPlaced === false) {
        let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
        let directions = ['horizontal', 'vertical']

        cpuShips.forEach(ship => {
            let illegalMove = true

            while (illegalMove === true) {
                const letter = letters[Math.floor(Math.random() * 10)]
                const number = Math.floor(Math.random() * 10 + 1)
                const direction = directions[Math.floor(Math.random() * 2)]
                const initCoords = [letter, number]
                const coords = cpu.coords(ship, direction, initCoords)
                const isIllegal = cpu.illegalMove(coords)
                

                if (isIllegal === false) {
                    cpu.placeShip(ship, direction, initCoords)
                    illegalMove = false
                }
            }
        })

        console.log(gameBoard);
        shipsPlaced = true
    } else {
        cpuPlay()
    }
}

function cpuPlay() {
    console.log('hi');
}

export default cpuPlace

// place down boats
// make sure his boat placement is not illegal

// wait for me to make my move
// make their move
// repeat until game ends