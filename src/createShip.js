function createShip(length, name) {
    class Ship {
        constructor(length, name) {
            this.length = length,
            this.name = name,
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
            },
            this.isPlaced = false
        }
    }

    const ship = new Ship(length, name);
    return ship;
}

module.exports = createShip