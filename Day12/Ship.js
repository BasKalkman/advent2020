class Ship {
    constructor() {
        this.dir = 'east',
        this.x = 0,
        this.y = 0
    }

    execInstruction(str) {
        let num = parseInt(str.match(/\d+/))
        let instruction = str[0];

        switch (instruction) {
            case 'N':
                this.goNorth(num)
                break;
            case 'S':
                this.goSouth(num)
                break;
            case 'E':
                this.goEast(num)
                break;
            case 'W':
                this.goWest(num)
                break;
            case 'L':
                this.turnLeft(num)
                break;
            case 'R':
                this.turnRight(num)
                break;
            case 'F':
                this.goForward(num)
                break;
        }

    }

    goForward(int) {
        switch(this.dir) {
            case 'north':
                this.goNorth(int)
                break;
            case 'east':
                this.goEast(int)
                break;
            case 'south':
                this.goSouth(int)
                break;
            case 'west':
                this.goWest(int)
                break;
        }
    }

    goNorth(int) {
        this.y = this.y + int
    }

    goSouth(int) {
        this.y = this.y - int
    }

    goWest(int) {
        this.x = this.x - int
    }

    goEast(int) {
        this.x = this.x + int
    }

    turnLeft(int) {
        for (let i = 0; i < int / 90; i++) {
            this.execLeftTurn()
        }
    }

    execLeftTurn() {
        switch(this.dir) {
            case 'north':
                this.dir = 'west'
                break;
            case 'west':
                this.dir = 'south'
                break;
            case 'south':
                this.dir = 'east'
                break;
            case 'east': 
                this.dir = 'north'
                break;
        }
    }

    turnRight(int) {
        for (let i = 0; i < int / 90; i++) {
            this.execRightTurn()
        }
    }

    execRightTurn() {
        switch(this.dir) {
            case 'north':
                this.dir = 'east'
                break;
            case 'west':
                this.dir = 'north'
                break;
            case 'south':
                this.dir = 'west'
                break;
            case 'east': 
                this.dir = 'south'
                break;
        }
    }

    getManhattanDistance() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
}

module.exports = Ship