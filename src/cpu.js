import cpuShips from './cpuShips';
import player from './player';
import updatePlayerBoard from './updatePlayerBoard';
const createPlayer = require('./createPlayer');
const cpu = createPlayer()
const gameBoard = cpu.returnBoard();
const playerGameBoard = player.returnBoard()
const attackedPositions = playerGameBoard.attackedPositions


let shipsPlaced = false;
function cpuPlace() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    const directions = ['horizontal', 'vertical']

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
}

let playerAttackedMerged = []
function cpuAttack() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

    let illegalMove = true
    while (illegalMove === true) {
        const letter = letters[Math.floor(Math.random() * 10)]
        const number = Math.floor(Math.random() * 10 + 1)
        const coords = [letter, number]
        let isIllegal = true

        const coordsString = coords.join('')

        if (playerAttackedMerged.includes(coordsString) === false || attackedPositions.length === 0) {
            isIllegal = false
        }

        if (isIllegal === false) {
            playerGameBoard.recieveAttack(coords)
            illegalMove = false
        }

        playerAttackedMerged.push(coordsString)
    }
}

function cpuPlay(returnBoard) {
    if (shipsPlaced === false && returnBoard !== true) {
        cpuPlace()
    } else if (returnBoard === true) {
        return gameBoard
    } else {
        cpuAttack()
        updatePlayerBoard()
    }
}

export default cpuPlay