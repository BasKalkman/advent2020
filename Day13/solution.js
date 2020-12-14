// const timestamp = 1008713
// const data = '13,x,x,41,x,x,x,x,x,x,x,x,x,467,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,353,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23'.split(',')
// Test
const timestamp = 939;
const data = '7,13,59,31,19'.split(',')

// Part 1
const datap1 = data.reduce((a,c) => {
    if (c !== 'x') {
        a.push(parseInt(c))
    }

    return a
}, [])


const part1 = datap1.map(e => {
    let num = 0
    while (num < timestamp) {
        num += e
    }

    let obj = {
        busId: e,
        timeToWait: num - timestamp 
    }

    return obj
}).sort((a,b) => a.timeToWait - b.timeToWait)
console.log('Part 1: ', part1[0].timeToWait * part1[0].busId)

// Part 2
const datap2 = data.map((e,i) => {
    let obj = {
        busId: e,
        tOffset: i
    }

    return obj
}).filter(e => e.busId !== 'x')

