const createGameboard = require("./createGameboard")

function createPlayer() {
    const gameboard = createGameboard();

    class Player {
        constructor() {
            this.coords = (ship, direction, initCoords) => {
                let coords = [initCoords];
                let letter = initCoords[0];
                let num = initCoords[1];

                if (direction === 'horizontal') {
                    for (let index = 1; index < ship.length; index++) {
                        num++;
                        let nextCoords = [letter, num];
                        coords.push(nextCoords);
                    }
                } else if (direction === 'vertical') {
                    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
                    for (let index = 1; index < ship.length; index++) {
                        let letterIndex = letters.indexOf(initCoords[0]);
                        let letter = letters[letterIndex + index];
                        let nextCoords = [letter, num];
                        coords.push(nextCoords);
                    }
                }
                return coords
            },
            this.illegalMove = (placeCoords) => {  
                const placedShips = gameboard.placedShips
                let illegalMove = false
                placeCoords.forEach(coord => {
                    if (coord.includes(11) || coord.includes(undefined)) {
                        illegalMove = true
                    }

                    placedShips.forEach(ship => {
                        ship.coords.forEach(coords => {
                            const inputCoords = coord.join('')
                            const shipCoords = coords.join('')
                            if (inputCoords === shipCoords) {
                                illegalMove = true
                            }
                        })
                    })
                })
                return illegalMove
            },
            this.placeShip = (ship, direction, initCoords) => {
                const placeCoords = this.coords(ship, direction, initCoords)
                const illegalMove = this.illegalMove(placeCoords);
                
                if (illegalMove === true) {
                    console.log(placeCoords);
                    console.log('illegal move');
                    return 'illegal move'
                } else {
                    gameboard.place(ship, placeCoords)
                    ship.isPlaced = true
                }
            },
            this.moveShip = (ship, direction, initCoords) => {
                const moveCoords = this.coords(ship, direction, initCoords)
                const placedShips = gameboard.placedShips
                const illegalMove = this.illegalMove(moveCoords)

                if (illegalMove === true) {
                    console.log(moveCoords);
                    console.log('illegal move');
                } else {
                    placedShips.forEach(shipWithCoords => {
                        if (shipWithCoords.ship === ship) {
                            shipWithCoords.coords = moveCoords;
                        }
                    })
                }
                
            },
            this.attack = (coords) => {
                gameboard.recieveAttack(coords)
            },
            this.returnBoard = () => {
                return gameboard
            }
        }
    }

    const player = new Player();
    return player;
}

module.exports = createPlayer