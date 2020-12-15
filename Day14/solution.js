const fs = require('fs')
const data = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');

// Part 1
function numTo36BitString(num) {
    if (typeof num !== 'number') {
        num = parseInt(num)
    }
    let str = num.toString(2)

    while (str.length < 36) {
        str = '0' + str;
    }

    return str
}

function processMask(num, mask) {
    let str = numTo36BitString(num).split('')
    let msk = mask.split('')

    for (let i = 0; i < str.length; i++) {
        if (msk[i] !== 'X') {
            str[i] = msk[i]
        }
    }

    let newNum = parseInt(str.join(''), 2)

    return newNum
}

const registers = new Map()
let mask = ''
for (let i = 0; i < data.length; i++) {
    let [instruction, value] = data[i].split(' = ')
    
    if (instruction === 'mask') {
        mask = value
    } else {
        let register = instruction.match(/\d+/)[0];
        let num = processMask(value, mask)
        registers.set(register, num)
    }
}

let totalP1 = 0
registers.forEach((a) => totalP1 += a)
console.log(totalP1)