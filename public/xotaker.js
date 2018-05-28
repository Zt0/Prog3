module.exports = class Xotaker {
    constructor(x, y,index, ser) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = Math.round(Math.random() * 8);
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;
        this.ser = (ser == 0 ? "arakan" : "igakan");
           //  console.log(this.ser);
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
            /*var xot = 0;*/
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                // console.log(`X:${x}, Y:${y}, ${matrix[y]}, ${typeof x}, ${typeof y}`);
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
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

    sharjvel() {
        var vand = this.random(this.yntrelVandak(0));
        if (vand && this.multiply >= this.speed / 4) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 2;
            this.multiply = 0;
        }
        //console.log(vand);
    }

    utel() {
        this.energy--;
        this.multiply++;
        var vand = this.random(this.yntrelVandak(1));
        if (vand && this.multiply >= this.speed / 4) {
            this.energy += this.speed;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);

                }
            }
        }
        else this.sharjvel();

    }

    bazmanal() {
         if (exanak == "amar") {
            this.speed=10;
            }
        if (exanak == "ashun") {
            this.speed=7;
        }
        if (exanak == "dzmer") {
            this.speed=6;
        }
         if (exanak == "garun") {
            this.speed=15;
         }
         
         if (this.ser == "arakan") {
            var vandak = this.random(this.yntrelVandak(2.5));
        }
        else if (this.ser == "igakan") {
            var vandak = this.random(this.yntrelVandak(2));
        }
        if (vandak) {
            var vand = this.random(this.yntrelVandak(0));
        }
        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newxotaker = new Xotaker(vand[0], vand[1], 2);
            xotakerArr.push(newxotaker);
        }
    }

    mahanal() {
        if (this.energy <= -(this.speed / 2)) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    // xot=xot-1;
                }
            }
        }
    }
// console.log(xot);
}

