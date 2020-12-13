const fs = require('fs')
const data = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')
const Ship = require('./Ship');

const part1 = new Ship()

for (instruction of data) {
    part1.execInstruction(instruction)
}

console.log('Part 1: ', part1.getManhattanDistance())
