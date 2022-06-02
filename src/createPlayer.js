const createGameboard = require("./createGameboard")

function createPlayer() {
    const gameboard = createGameboard();

    class Player {
        constructor() {
            this.placeShip = (ship, direction, initCoords) => {
                let coords = [initCoords];
                let letter = initCoords[0];
                let num = initCoords[1];

                if (direction === 'horizontal') {
                    for (let index = 1; index < ship.length; index++) {
                        num = num + index;
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
                gameboard.place(ship, coords)
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