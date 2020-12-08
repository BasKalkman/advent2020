const fs = require('fs');
const instructions = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')


function runInstruction(list) {
    let accumulator = 0
    let current = 0;
    const seen = new Map();


    while (!seen.has(current)) {
        seen.set(current, seen.size)

        let [command, num] = list[current].split(' ')
        
        switch (command) {
            case 'acc':
                accumulator += parseInt(num)
                current++
                break;
            case 'nop':
                current++
                break;
            case 'jmp':
                current += parseInt(num)
        
            default:
                break;
        }
        
    }

    return accumulator;
}

console.log('Part 1: ', runInstruction(instructions))