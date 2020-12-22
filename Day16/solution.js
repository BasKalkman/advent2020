const fs = require('fs')
const data = fs.readFileSync('./input.txt', 'utf-8');

const rules = data.match(/\d+-\d+/g).map(e => {
    return e.split('-').map(Number)
})
const ticketLines = data.split('\r\n').filter(e => e.match(/\d+,\d+/g))
const myTicket = ticketLines.shift()

let part1Count = 0
const validTickets = ticketLines.filter(e => verifyTicket(e))

console.log('Part 1: ', part1Count)

function verifyTicket(ticket) {
    let arr = ticket.split(',').map(Number)

    for (num of arr) {
        let numValid = false

        for (rule of rules) {
            let [min,max] = rule
            if (min <= num && num <= max) {
                valid = true
                numValid = true
            }
        }

        if (numValid === false) {
            part1Count += num
            return false;
        }
    }

    return true
}


// Part 2
// Make columns instead of rows
const cols = []
for (line of validTickets) {
    let arr = line.split(',').map(Number)

    for (let i = 0; i < arr.length; i++) {
        if (!cols[i]) {
            cols[i] = []
        }

        cols[i].push(arr[i])
    }
}

// Make rulebook
const rulebook = data.split('\r\n').filter(e => e.match(/\d+-\d+/)).map(e => {
    let name = e.match(/.+:/)[0].replace(':', '')
    let nums = e.match(/\d+/g).map(Number)

    let obj = {
        name: name,
        nums: nums
    }

    return obj
})

// For each rule, check which column has no invalid nums
const ruleIndices = new Map()
for (rule of rulebook) {
    let [loMin, loMax, hiMin, hiMax] = rule.nums

    for (let i = 0; i < cols.length; i++) {
        let valid = true;

        for (num of cols[i]) {
            let currentNumValid = false;
            if ((loMin <= num && num <= loMax) || (hiMin <= num && num <= hiMax)) {
                currentNumValid = true
            }
            if (currentNumValid === false) {
                valid = false
            }
        }

        if (valid === true) {
            ruleIndices.set(rule.name, i)
            break;
        }
    }
}

console.log(ruleIndices)

ruleIndices.forEach((rule, index) => {
    console.log(rule, index)
})