const fs = require('fs');
const instructions = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')


function part1(list) {
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

console.log('Part 1: ', part1(instructions))

// Part 2
function listFixes(list) {
    let accumulator = 0
    let current = 0
    let prevInstructions = []
    const seen = new Map()

    // Run until loop
    while (!seen.has(current)) {
        seen.set(current, seen.size)
        prevInstructions.push({
            current: current,
            instruction: list[current],
            accValue: accumulator
        })

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

    // Filter instruction changes to try
    const fixesToTry = prevInstructions.filter(e => e.instruction.match(/jmp|nop/))
    
    return fixesToTry
}

const fixesToTry = listFixes(instructions)
console.log(fixesToTry)