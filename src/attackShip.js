import cpu from "./cpu";
import updateCpuBoard from './updateCpuBoard'
const cpuBoard = cpu(true)

let cpuAttackedMerged = []
function attackShip(coordsString) {
    let coords = coordsString.split('')
    if (coords.length === 3) {
        coords.pop()
        coords = [coords[0], 10]
    } else if (coords.length === 2) {
        coords = [coords[0], Number(coords[1])]
    }
    
    if (cpuAttackedMerged.includes(coordsString) === false) {
        cpuBoard.recieveAttack(coords)
        updateCpuBoard()
    } 
    
    cpuAttackedMerged.push(coordsString)
}

export default attackShip