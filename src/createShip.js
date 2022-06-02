function createShip(length) {
    class Ship {
        constructor(length) {
            this.length = length,
            this.hitPositions = [],
            this.hit = (position) => {
                this.hitPositions.push(position)
            },
            this.isSunk = () => {
                if (this.hitPositions.length === length) {
                    return true
                } else {
                    return false
                }
            }
        }
    }

    const ship = new Ship(length);
    return ship;
}

module.exports = createShip