/*var gr = 0;*/
module.exports = class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;
        matrix[this.y][this.x] = this.index;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
        random(array){
            var rnd =  Math.floor(Math.random() * array.length);
            var element = array[rnd];
            return element;
        }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                  /*  gr++;*/
                }
            }
        }
        return found;
    }

    mul() {
        if (exanak == "amar") {
            this.speed=4;
            }
        if (exanak == "ashun") {
            this.speed=10;
        }
        if (exanak == "dzmer") {
            this.speed=20;
        }
         if (exanak == "garun") {
            this.speed=2;
         }
        this.multiply++;
        this.direction = this.random(this.yntrelVandak(0));
        if (this.multiply >= this.speed && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
            this.statx++;
        }
    }
}

