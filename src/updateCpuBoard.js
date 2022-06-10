import cpu from "./cpu"
const cpuBoard = cpu(true)
const attackedPositions = cpuBoard.attackedPositions
const placedShips = cpuBoard.placedShips

function updateCpuBoard() {
    let num = 0
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    
    for (let index = 0; index < 100; index++) {
        num++;
        if (num > 10) {
            num = 1;
        }
        
        let letter = letters[Math.floor(index / 10)];
        let grid = letter + num
    
        document.querySelector("#board-two > div.grid." + grid).classList.remove('attacked')
        document.querySelector("#board-two > div.grid." + grid).classList.remove('hit')
    }

    attackedPositions.forEach(attackedPosition => {
        const attackedString = attackedPosition.join('')
        let num = 0

        for (let index = 0; index < 100; index++) {
            num++;
            if (num > 10) {
                num = 1;
            }
            
            let letter = letters[Math.floor(index / 10)];
            let grid = letter + num
        
            if (attackedString === grid) {
                document.querySelector("#board-two > div.grid." + grid).classList.add('attacked')
            }
        }
    })

    placedShips.forEach(shipWithCoords => {
        shipWithCoords.ship.hitPositions.forEach(hitPosition => {
            const hitString = hitPosition.join('')
            let num = 0

            for (let index = 0; index < 100; index++) {
                num++;
                if (num > 10) {
                    num = 1;
                }
                
                let letter = letters[Math.floor(index / 10)];
                let grid = letter + num
            
                if (hitString === grid) {
                    document.querySelector("#board-two > div.grid." + grid).classList.add('hit')
                }
            }
        })
    })
}

export default updateCpuBoard