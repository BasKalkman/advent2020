const input = '16,1,0,18,12,14,19'.split(',').map(Number)
// const targetTurn = 2020 // Part 1
const targetTurn = 30000000 // Part 2

let currentValue = input[input.length - 1]
let currentTurn = input.length
let seen = new Map()

input.map((e,i) => seen.set(e, i+1))
console.log(seen)

while (currentTurn < targetTurn) {
    if (seen.has(currentValue)) {
        let prevTurn = seen.get(currentValue)
        seen.set(currentValue, currentTurn)
        currentValue = currentTurn - prevTurn;
    } else {
        seen.set(currentValue, currentTurn)
        currentValue = 0
    }

    currentTurn++
}
console.log(currentValue)
