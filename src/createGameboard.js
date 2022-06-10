function createGameboard() {
    class Gameboard {
        constructor() {
            this.placedShips = [],
            this.place = (ship, coords) => {
                const shipWithCoords = {
                    ship: ship,
                    coords: coords
                }
                this.placedShips.push(shipWithCoords)
            },
            this.attackedPositions = [],
            this.recieveAttack = (coords) => {
                this.attackedPositions.push(coords)
                this.placedShips.forEach(shipWithCoords => {
                    shipWithCoords.coords.forEach(coord => {
                        const shipCoords = coord.join('')
                        const inputCoords = coords.join('')
                        if (shipCoords === inputCoords) {
                            shipWithCoords.ship.hit(coords)
                            console.log(shipWithCoords.ship.hitPositions);
                        }
                    })
                })
            },
            this.didPlayerLose = () => {
                let sunkShips = 0
                this.placedShips.forEach(shipWithCoords => {
                    if (shipWithCoords.ship.isSunk() === true) {
                        sunkShips++
                    }
                })

                if (sunkShips === this.placedShips.length) {
                    return true
                } else {
                    return false
                }
            }
        }
    }

    const gameboard = new Gameboard()
    return gameboard
}

module.exports = createGameboard