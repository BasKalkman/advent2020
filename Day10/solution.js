const fs = require('fs')
const data = fs.readFileSync('./input.txt', 'utf-8').split('\r\n').map(Number).sort((a,b) => a - b)
data.unshift(0)
data.push(data[data.length-1] + 3)

// Part 1
function part1() {
    let diff1 = 0
    let diff3 = 0

    for (let i = 0; i < data.length - 1; i++) {
        if (data[i+1] - data[i] === 3) {
            diff3++
        } else if (data[i+1] - data[i] === 1) {
            diff1++
        }
    }

    return diff1 * diff3
}

console.log(part1())



// Part 2
function getConnections() {
    const connections = new Object()

    for (let i = 0; i < data.length; i++) {
        if (!data[i+1]) {
            connections[`${data[i]}`] = null
            break;
        }


        let arr = [];
        let diff = 0;
        let idx = i + 1;
        while (diff <= 3) {
            diff = data[idx] - data[i]
            if (diff <= 3) {
                arr.push(data[idx])
            }
            idx++
        }
        connections[`${data[i]}`] = arr
    }

    return connections
}

const tree = getConnections()

function part2() {
    let num = Object.keys(tree).reduce((a,c) => {
        console.log(c, tree[`${c}`])
        if (tree[`${c}`] === null) {
            return 1
        }

        return a * tree[`${c}`].length
    }, 1)

    return num
}

console.log(part2())



// const calcConnections = []

// function parseTree(start) {
//     if (tree[start] === null) {
//         return
//     }

//     calcConnections.push(tree[start].length)

//     for (connection of tree[start]) {
//         parseTree(`${connection}`)
//     }
// }

// console.log(parseTree('0'))