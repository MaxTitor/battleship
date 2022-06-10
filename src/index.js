import createGrids from './createGrids';
import cpu from './cpu';
import player from './player';
import selectShip from './selectShip'
import attackShip from './attackShip';
const playerBoard = player.returnBoard()
const cpuBoard = cpu(true)
const startBtn = document.getElementById('start-btn')

createGrids()

let gameStarted = false

function gameLoop(userClicked, coords, board) {
    if (userClicked === true && gameStarted === false && board === 'playerBoard') {
        selectShip(coords);
    }

    if (userClicked === true && gameStarted === true && board === 'cpuBoard') {
        attackShip(coords)
        gameLoop(false)
    } else if (gameStarted === true && userClicked === false) {
        cpu()
    }

    const playerLost = playerBoard.didPlayerLose()
    const cpuLost = cpuBoard.didPlayerLose()

    if (gameStarted === true && board !== 'playerBoard') {
        if (playerLost === true || cpuLost === true) {
            alert('game over!')
            gameStarted = false
        }
    }
}

startBtn.addEventListener('click', () => {
    if (playerBoard.placedShips.length === 5 && gameStarted === false) {
        gameLoop()
        gameStarted = true
    } else {
        alert('ships are not placed')
    }
})

export default gameLoop