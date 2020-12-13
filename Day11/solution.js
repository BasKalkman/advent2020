const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf-8').split('\r\n').map(e => {
    return e.split('')
})



let currentSeats = JSON.parse(JSON.stringify(data))
let newSeats = JSON.parse(JSON.stringify(data))

let seatingFinished = false
while (!seatingFinished) {
    let changes = simulateRound()
    if (changes === 0) {
        seatingFinished = true;
    }
    currentSeats = JSON.parse(JSON.stringify(newSeats))
}

let totalSeatsOccupied = 0
for (let i = 0; i < currentSeats.length; i++) {
    for (j = 0; j < currentSeats[i].length; j++) {
        if (currentSeats[i][j] === '#') {
            totalSeatsOccupied++
        }
    }
}

console.log(totalSeatsOccupied)


function checkAdjacentSeats(y,x) {
    const checks = [[y-1, x-1], [y-1, x], [y-1, x+1], [y, x-1], [y, x+1], [y+1, x-1], [y+1, x], [y+1, x+1]]

    let numOccupied = 0
    for (check of checks) {
        [yCoord, xCoord] = check;
        if (currentSeats[yCoord] && currentSeats[yCoord][xCoord]) {
            if (currentSeats[yCoord][xCoord] === '#') {
                numOccupied++
            }
        }
    }

    return numOccupied
}

function simulateRound() {
    let seatsChanged = 0 

    for (let i = 0; i < currentSeats.length; i++) {
        for (let j = 0; j < currentSeats[i].length; j++) {
            let num = checkAdjacentSeats(i, j)
            if (currentSeats[i][j] === 'L' && num === 0) {
                newSeats[i][j] = '#'
                seatsChanged++
            } else if (currentSeats[i][j] === '#' && num >= 4) {
                newSeats[i][j] = 'L'
                seatsChanged++
            }

        }
    }

    return seatsChanged;
}
