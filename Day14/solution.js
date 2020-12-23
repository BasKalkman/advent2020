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

// Part 2
function generateStates(n){
  var states = [];

  // Convert to decimal
  var maxDecimal = parseInt("1".repeat(n),2);

  // For every number between 0->decimal
  for(var i = 0; i <= maxDecimal; i++){
    // Convert to binary, pad with 0, and add to final results
    states.push(i.toString(2).padStart(n,'0'));
  }

  return states;
}


function doTest() {
    let test = '111XXX1';
    let a = generateStates(3)
    let permutations = a.map(e => e.split(''))
    let result = []
    console.log(permutations)

    for (let i = 0; i < permutations.length; i++) {
        let b = test

        while (b.match(/X/)) {
            b =   b.replace('X', permutations[i].pop())
        }

        result.push(b)
    }

    console.log(result)
}

doTest()