const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')

const bagRules = {}


function processRuleLine(line) {
    [bag1, ...bags] = line.split('contain')
    bag1 = bag1.replace(/[0-9.]|\sbags?.?[^a-zA-Z]/g, '')

    let bagsAllowed = bags[0].split(',').map(e => {
        return e.replace(/[0-9.]/g, '').replace(/bags?/g,'').trim()
    })

    bagsAllowed[0] === 'no other' ? bagsAllowed = null : '';

    bagRules[bag1.trim()] = bagsAllowed
}


data.map(e => processRuleLine(e))


function checkContains(rule, target) {
    if (bagRules[rule] === null) {
        return false
    }

    if (bagRules[rule].includes(target)) {
        return true
    } else {
        let isAllowed = bagRules[rule].filter(e => {
            return checkContains(e, target)
        })

        return isAllowed.length > 0 ? true : false
    }
}

let part1 = Object.keys(bagRules).filter(e => {
    return checkContains(e, 'shiny gold')
})
console.log('Part 1: ', part1.length);

// Part 2:
// Keep track of both number and type of bag in processing
// 