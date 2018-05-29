var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var fs = require('fs');
var Grass = require("./public/grass.js");
var Xotaker = require("./public/xotaker.js");
var Gishatich = require("./public/gishatich.js");
var Mard = require("./public/mard.js");


app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.mardArr = [];
global.w = 30;
global.h = 30;
global.side = 22;

global.matrix = [];

global.Cnvacxoter = 0;
global.Cnvacxotakerner = 0;
global.Cnvacgishatichner = 0;
global.CnvacMardik = 0;

global.exanak = "amar";
io.emit("send weather", exanak);

function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() * 100 + 1);
            if (r < 15) { r = 0; }
            else if (r < 55) { r = 1; }
            else if (r < 70) { r = 2; }
            else if (r < 80) { r = 3; }
            else if (r<100)  { r = 4; }
            matrix[y][x] = r;
        }
    }
    return matrix;
}

matrix = genMatrix(w, h);

for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x * 1, y * 1, 1));
                Cnvacxoter++;
            }
            else if (matrix[y][x] == 2) {
                var ser = (Math.round(Math.random())) / 2;
                xotakerArr.push(new Xotaker(x * 1, y * 1, 2 + ser, ser));
                matrix[y][x] += ser;
                Cnvacxotakerner++;
            }
            else if (matrix[y][x] == 3) {
                var ser = (Math.round(Math.random())) / 2;
                gishatichArr.push(new Gishatich(x * 1, y * 1, 3 + ser, ser));
                matrix[y][x] += ser;
                Cnvacgishatichner++;
            }
            else if (matrix[y][x] == 4) {
                var ser = (Math.round(Math.random())) / 2;
                mardArr.push(new Mard(x * 1, y * 1, 4 + ser, ser));
                matrix[y][x] += ser;
                CnvacMardik++;
            }
        }
    }

io.on("connection", function (socket) {

    setInterval(function () {

        for (var i in grassArr) {
            grassArr[i].mul();
        }

        for (var i in xotakerArr) {
            xotakerArr[i].bazmanal();
            xotakerArr[i].utel();
            xotakerArr[i].mahanal();
        }


        for (var i in gishatichArr) {
            gishatichArr[i].bazmanal();
            gishatichArr[i].utel();
            gishatichArr[i].mahanal();
        }


        for (var i in mardArr) {
            mardArr[i].bazmanal();
            mardArr[i].utel();
            mardArr[i].mahanal();
        }
        io.sockets.emit("send grassArr", grassArr);
        io.sockets.emit("send xotakerArr", xotakerArr);
        io.sockets.emit("send gishatichArr", gishatichArr);
        io.sockets.emit("send mardArr", mardArr);
        io.sockets.emit("send matrix", matrix);

    }, 200);
});
var exanak = "amar";
setInterval(function () {
        if (exanak == "amar") {
            exanak = "ashun";
           // console.log(weather);
        }
        else if (exanak == "ashun") {
            exanak = "dzmer";
            //console.log(weather);
        }
        else if (exanak == "dzmer") {
            exanak = "garun";
           // console.log(weather);
        }
        else if (exanak == "garun") {
            exanak = "amar";
            //console.log(weather);
        }
        io.emit("send weather",exanak);
        //return weather;
    }, 3000);




var stats = {
    "Grass": Cnvacxoter,
    "Xotaker": Cnvacxotakerner,
    "Gishatich": Cnvacgishatichner,
    "Mard": CnvacMardik,
    "Grass": grassArr.length,
    "Xotaker": xotakerArr.length,
    "Gishatich": gishatichArr.length,
    "Mard": mardArr.length
}

setInterval(function () {
    stats["cnvac.Grass"] = Cnvacxoter;
    stats["cnvac.Xotaker"] = Cnvacxotakerner;
    stats["cnvac.Gishatich"] = Cnvacgishatichner;
    stats["cnvac.Mard"] = CnvacMardik;
    stats["Grass qanak"] = grassArr.length;
    stats["Xotakerneri qanak"] = xotakerArr.length;
    stats["Gishatichneri qanak"] = gishatichArr.length;
    stats["Mardkanc qanak"] = mardArr.length;
    fs.writeFile("stats.json", JSON.stringify(stats), function (err) {
        if (err) throw err;
    })
}, 20000);
