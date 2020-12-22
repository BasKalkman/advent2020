const input = '16,1,0,18,12,14,19'
const targetTurn = 2020
// const targetTurn = 30000000
const data = input.split(',').map(Number)

const seen = new Map()
let current = {
    turn: 0,
    value: null,
    prev: null,
}

function addAfter(current, turn, value) {
    let obj = {
        turn: turn,
        value: value,
        prev: current
    }

    return obj
}

function findLast(value) {
    if (!seen.has(value)) {
        return null;
    }

    let search = current;
    while (search.prev !== null) {
        search = search.prev;
        if (search.value === value) {
            return search.turn
        }
    }
    return null;

}


for (let i = 0; i < data.length; i++) {
    seen.set(current.value, seen.size)
    current = addAfter(current, i+1, data[i]);
}

while (current.turn < targetTurn) {
    if (seen.has(current.value)) {
        current = addAfter(current, current.turn + 1, current.turn - findLast(current.value))
    } else {
        current = addAfter(current, current.turn + 1, 0);
    }

    seen.set(current.value, seen.size)

}
console.log(current)

