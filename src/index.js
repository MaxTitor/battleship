import createGrids from './createGrids';
import cpu from './cpu';
import player from './player';
import selectShip from './selectShip'
import attackShip from './attackShip';
const playerBoard = player.returnBoard()
const cpuBoard = cpu(true)
const startBtn = document.getElementById('start-btn')
const resetBtn = document.getElementById('reset-btn')
let announcer = document.getElementById('announcer')

createGrids()

let gameStarted = false
let gameEnded = false
let cpuPlacedShips = false

function gameLoop(userClicked, coords, board) {
    if (userClicked === true && gameStarted === false && gameEnded === false && board === 'playerBoard') {
        selectShip(coords);
    }

    if (userClicked === true && gameStarted === true && board === 'cpuBoard') {
        attackShip(coords)
        gameLoop(false)
    } else if (gameStarted === true && userClicked === false) {
        cpu()
        if (cpuPlacedShips === false) {
            cpu()
            cpuPlacedShips = true
        }
    }

    const playerLost = playerBoard.didPlayerLose()
    const cpuLost = cpuBoard.didPlayerLose()

    if (gameStarted === true && board !== 'playerBoard') {
        if (playerLost === true) {
            gameStarted = false
            gameEnded = true
            announcer.innerHTML = 'Game over!'
            setInterval(() => {
                announcer.innerHTML = 'Computer won!'
            }, 2000);
        } else if (cpuLost === true) {
            gameStarted = false
            gameEnded = true
            announcer.innerHTML = 'Game over!'
            setInterval(() => {
                announcer.innerHTML = 'Player won!'
            }, 2000);
        }
        
    }
}

startBtn.addEventListener('click', () => {
    if (playerBoard.placedShips.length === 5 && gameStarted === false) {
        gameLoop()
        gameStarted = true
        announcer.innerHTML = 'Game started'
        document.getElementById('horizontal-btn').classList.add('clicked')
        document.getElementById('vertical-btn').classList.add('clicked')
        document.getElementById('carrier-btn').classList.add('clicked')
        document.getElementById('battleship-btn').classList.add('clicked')
        document.getElementById('cruiser-btn').classList.add('clicked')
        document.getElementById('submarine-btn').classList.add('clicked')
        document.getElementById('destroyer-btn').classList.add('clicked')
        document.getElementById('start-btn').classList.add('clicked')
    } else if (playerBoard.placedShips.length === 5 && gameStarted === true) {
        announcer.innerHTML = 'Game already started'
    } else {
        announcer.innerHTML = 'Ships are not placed'
    }
})

resetBtn.addEventListener('click', () => {
    location.reload()
})

export default gameLoop