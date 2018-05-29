socket = io();

var matrix = [];

socket.on("send matrix", function (data) {
    matrix = [];
    for (i in data) {
        matrix.push(data[i]);
    }
});


var w = 30;
var h = 30;
var side = 24;

var grassArr = [], xotakerArr = [], gishatichArr = [], mardArr = [];

socket.on("send grassArr", function (data) {
    grassArr = data;
});
socket.on("send xotakerArr", function (data) {
    xotakerArr = data;
});
socket.on("send gishatichArr", function (data) {
    gishatichArr = data;
});
socket.on("send mardArr", function (data) {
    mardArr = data;
});
var exanak = "amar";

socket.on("send weather", function (data) {
   exanak = data;
    //document.getElementById("exanak").innerHTML ="Exanak:"+ exanak;
});

var matrix;

function setup() {
     $( "<div id='con'></div>" ).appendTo("body");
    $( "<button id='button1'>-Grass</button>" ).appendTo("div");
    $( "<button id='button2'>-Xotaker</button>" ).appendTo("div");
    $( "<button id='button3'>-Gishatich</button>" ).appendTo("div");
    $( "<button id='button4'>-Mard</button>" ).appendTo("div").css("margin-top","-20px");
    createCanvas(side * w, side * h);
    background("#acacac");
    frameRate(30);
    var rankill = Math.floor(Math.random() * 20 + 1);
    $("#button1").click(function() {
        for(i=0; i<rankill; i++){
        for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = 0;
            }
        }
        }
        }
  });
  var rankill2 = Math.floor(Math.random() * 20 + 1);  
    $("#button2").click(function() {
        for(i=0; i<rankill2; i++){
        for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 2) {
                matrix[y][x] = 0;
            }
        }
        }
        }
  });
   var rankill3 = Math.floor(Math.random() * 20 + 1);   
    $("#button3").click(function() {
        for(i=0; i<rankill3; i++){
        for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 3) {
                matrix[y][x] = 0;
            }
        }
        }
        }
  });
  var rankill2 = Math.floor(Math.random() * 20 + 1); 
    $("#button4").click(function() {
        for(i=0; i<rankill2; i++){
        for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 4) {
                matrix[y][x] = 0;
            }
        }
        }
        }
  });
  
  
}

function draw() {
    var k=0;
    for (var y in matrix) {
        for (var x in matrix[y]) {
            //console.log(matrix[y][x]);
            if (matrix[y][x] == 0) {
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "#acacac";
            }
            else if (matrix[y][x] == 1) {
                var ctx = canvas.getContext("2d");
                k++;
                if (exanak == "amar") {
                    ctx.fillStyle = "#85FF0D";
                }
                if (exanak == "ashun") {
                    ctx.fillStyle = "#AEDE03";
                }
                if (exanak == "dzmer") {
                    ctx.fillStyle = "white";
                }
                if (exanak == "garun") {
                    ctx.fillStyle = "#48CC00";
                }
            }
            else if (matrix[y][x] == 2) {
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "yellow";
            }
            else if (matrix[y][x] == 2.5) {
                console.log("seth");
               var ctx = canvas.getContext("2d");
               ctx.fillStyle = "black";
            }
            else if (matrix[y][x] == 3) {
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "red";
            }
            else if (matrix[y][x] == 4) {
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "#F5D5DF";
            }
            rect(x * side, y * side, side, side);
        }
        
    }
   
    if(k==900){
        $("body").empty();
        $("body").css("margin","0 auto")
        $( "<div id='div'></div>" ).appendTo( "body" ).css("margin-left","100px")
        $( "<p id='p1'>Grass Wins</p>" ).appendTo( "div" ).css("font-size","60");
    }

    
}






