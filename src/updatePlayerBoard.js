import player from "./player"

const playerBoard = player.returnBoard();
const placedShips = playerBoard.placedShips;


function updatePlayerBoard() {
    let num = 0
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    
    for (let index = 0; index < 100; index++) {
        num++;
        if (num > 10) {
            num = 1;
        }
        
        let letter = letters[Math.floor(index / 10)];
        let grid = letter + num
    
        document.querySelector("#board-one > div.grid." + grid).classList.remove('ship')
    }
    placedShips.forEach(shipWithCoords => {
        shipWithCoords.coords.forEach(coords => {
            const coordsString = coords.join('')
            let num = 0

            for (let index = 0; index < 100; index++) {
                num++;
                if (num > 10) {
                    num = 1;
                }
                
                let letter = letters[Math.floor(index / 10)];
                let grid = letter + num
            
                if (coordsString === grid) {
                    document.querySelector("#board-one > div.grid." + grid).classList.add('ship')
                }
            }
        })
    })
}

export default updatePlayerBoard