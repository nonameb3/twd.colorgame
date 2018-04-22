var color = genarrycolor(6);
var box = document.querySelectorAll(".box");
var pickcolor = color[pickcolors()];
var i = 0;
var head = document.querySelector("#head");
var discolor = document.querySelector("#discolor");
var newgame = document.querySelector(".buttnew");

// Start Head Game text color choice
discolor.textContent = pickcolor;

//NewGame Button
newgame.addEventListener("click",function(){
	//gen new color
	color = genarrycolor(6);
	pickcolor = color[pickcolors()];
	discolor.textContent = pickcolor ;
		for (var i = 0; i < box.length ; i++) {
			box[i].style.background = color[i];
		}
	//head no color
	head.style.background = "" ;
	//aws no text
	var wrong = document.querySelector("#aws");
	wrong.textContent = "" ;
});


// Start Main code for loop color
box.forEach(function(box) {
    box.style.background = color[i];
    i++
    box.addEventListener("click", function() {
        var clickcolor = box.style.background;
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