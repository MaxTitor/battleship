function createGrids() {
    const boardOne = document.getElementById('board-one');
    const boardTwo = document.getElementById('board-two');
    
    for (let index = 0; index < 121; index++) {
        const grid = document.createElement('div');
        grid.classList = 'grid';
        boardOne.append(grid);
    }
    
    for (let index = 0; index < 121; index++) {
        const grid = document.createElement('div');
        grid.classList = 'grid';
        boardTwo.append(grid);
    }
}

export default createGrids;