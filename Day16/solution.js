const { verify } = require('crypto');
const fs = require('fs')
const data = fs.readFileSync('./input.txt', 'utf-8');

const rules = data.match(/\d+-\d+/g).map(e => {
    return e.split('-').map(Number)
})
const ticketLines = data.split('\r\n').filter(e => e.match(/\d+,\d+/g))
const myTicket = ticketLines.shift()

let part1Count = 0
const validTickets = ticketLines.filter(e => verifyTicket(e))

console.log(validTickets.length, ticketLines.length)
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
