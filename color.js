var start = 6;
var color = [];
var pickcolor;
var i = 0;
var box = document.querySelectorAll(".box");
var head = document.querySelector("#head");
var discolor = document.querySelector("#discolor");
var newgame = document.querySelector(".buttnew");
var easybutt = document.querySelector("#easy");
var hardbutt = document.querySelector("#hard");
var game ={};

game.init = function(){
    init();
    reset();
}

game.init();

function init() {

    // code Button
    var mod = document.querySelectorAll("button");
    for (var i =1 ; i <mod.length ; i++) {
        mod[i].addEventListener("click",function(){
            mod[1].classList.remove("blue");
            mod[2].classList.remove("blue");
            this.classList.add("blue");
            this.textContent === "Easy" ? start = 3 : start = 6;
            reset();
        })
    }

    // Start Main code for loop color
    box.forEach(function(box) {
        box.style.background = color[i];
        i++
        box.addEventListener("click", function() {
            var clickcolor = box.style.background;
            var wrong = document.querySelector("#aws");
            if (clickcolor == pickcolor) {
                wrong.textContent = "That right !!";
                newgame.textContent = "Play again?";
                loopcolor(clickcolor);
                head.style.background = clickcolor;

            } else {
                wrong.textContent = "Wrong,Play agin?";
                this.setAttribute("style", "background: rgb(38, 38, 38);");
            };
        });
        reset();
    });
    reset();
}


// Start Head Game text color choice
discolor.textContent = pickcolor;

//NewGame Button
newgame.addEventListener("click", function() {
    reset()
});

//Function New Game
function reset() {
    //gen new color
    color = genarraycolor(start);
    pickcolor = color[pickcolors()];
    discolor.textContent = pickcolor;
    newgame.textContent = "New game!!";
    for (var i = 0; i < box.length; i++) {
        if (color[i]) {
            box[i].style.background = color[i];
            box[i].style.display = "";
        } else {
            box[i].style.display = "none";
        }
    }
    //head no color
    head.style.background = "";
    //aws no text
    var wrong = document.querySelector("#aws");
    wrong.textContent = "";
};

// Function chance Color to all box
function loopcolor(corectcolor) {
    box.forEach(function(box) {
        box.style.background = corectcolor;
    });
}

// Function Random Start pickcolor
function pickcolors() {
    return Math.floor(Math.random() * color.length);
};

//Function Gen Array rgbcolor
function genarraycolor(x) {
    var array = [];
    for (i = 0; i < x; i++) {
        array.push(genrgb())
    };
    return array;
}

//Function Gen rgbcolor mini
function genrgb() {
    var rgb = "rgb" + "(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255);
    rgb = rgb + ", " + Math.floor(Math.random() * 255) + ")"
    return rgb;
}