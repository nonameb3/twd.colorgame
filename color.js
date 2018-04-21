var color = genarrycolor(6);

var box = document.querySelectorAll(".box");
var pickcolor = color[pickcolors()];
var i = 0;
var head = document.querySelector("#head");

// Start Head text color
var discolor = document.querySelector("#discolor");
discolor.textContent = pickcolor;


// Start Main code
box.forEach(function(box) {
    box.style.background = color[i];
    i++
    box.addEventListener("click", function() {
        var clickcolor = box.style.background;
        // console.log(clickcolor)
        // console.log(pickcolor)
        var wrong = document.querySelector("#aws");
        if (clickcolor == pickcolor) {
            wrong.textContent = "That right !!";
            loopcolor(clickcolor);
            head.style.background = clickcolor;

        } else {
            wrong.textContent = "Wrong Play agin?";
            this.setAttribute("style", "background: rgb(38, 38, 38);");
        };
    });
});

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
function genarrycolor(x) {
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