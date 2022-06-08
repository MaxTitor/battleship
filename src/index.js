import createGrids from './createGrids';
import cpu from './cpu';

const startBtn = document.getElementById('start-btn');
const cpuBtn = document.getElementById('cpu-btn');

createGrids();

cpuBtn.addEventListener('click', () => {
    cpu()
})