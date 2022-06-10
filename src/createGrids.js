import selectShip from "./selectShip";
import attackShip from "./attackShip";
import gameLoop from ".";

function createGrids() {
    const boardOne = document.getElementById('board-one');
    const boardTwo = document.getElementById('board-two');
    let num = 0
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    
    for (let index = 0; index < 100; index++) {
        const grid = document.createElement('div');
        num++;
        if (num > 10) {
            num = 1;
        }
        let letter = letters[Math.floor(index / 10)];
        let coords = letter + num;
        grid.classList.add('grid', coords);
        grid.addEventListener('click', () => {
            gameLoop(true, coords, 'playerBoard')
        })
        grid.addEventListener('mouseover', () => {
            grid.classList.add('hover')
        })
        grid.addEventListener('mouseleave', () => {
            grid.classList.remove('hover')
        })
        boardOne.append(grid);
    }

    for (let index = 0; index < 100; index++) {
        const grid = document.createElement('div');
        num++;
        if (num > 10) {
            num = 1;
        }
        let letter = letters[Math.floor(index / 10)];
        let coords = letter + num;
        grid.classList.add('grid', coords);
        grid.addEventListener('click', () => {
            gameLoop(true, coords, 'cpuBoard')
        })
        boardTwo.append(grid);
    }
}

export default createGrids;