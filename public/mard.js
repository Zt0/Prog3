module.exports = class Mard {
    constructor(x, y, index, ser) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = Math.round(Math.random() * 24);
        this.speed = 28;
        this.multiply = Math.round(Math.random() * 24);
        this.ser = (ser == 0 ? "arakan" : "igakan");
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
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                    // gish++;
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
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
        }
    }

    utel() {
        this.energy--;
        var vand = this.random(this.yntrelVandak(3));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed/2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    // document.write(this.utstat);
                }
            }
        }
        else this.sharjvel();
    }

    bazmanal() {
         if (exanak == "amar") {
            this.speed=30;
            }
        if (exanak == "ashun") {
            this.speed=18;
        }
        if (exanak == "dzmer") {
            this.speed=15;
        }
         if (exanak == "garun") {
            this.speed=35;
         }
        if (this.ser == "arakan") {
            var vandak = this.random(this.yntrelVandak(4.5));
        }
        else if (this.ser == "igakan") {
            var vandak = this.random(this.yntrelVandak(4));
        }
        if (vandak) {
            var vand = this.random(this.yntrelVandak(0));
        }
        var vand = this.random(this.yntrelVandak(0));
        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newmard = new Mard(vand[0], vand[1], 4);
            mardArr.push(newmard);
        }
    }

    mahanal() {
        if (this.energy <= -(this.speed / 2)) {
            matrix[this.y][this.x] = 0;
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    mardArr.splice(i, 1);
                   /* gish = gish-1;*/
                }
            }
        }
    }
}
/*console.log(gish);*/

