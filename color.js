var color = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var box = document.querySelectorAll(".box");
var pickcolor = color[pickcolors()];
var i = 0;

// Start Head text color
var discolor = document.querySelector("#discolor");
discolor.textContent = pickcolor;


// Start
box.forEach(function(box) {
    box.style.background = color[i];
    i++
    box.addEventListener("click", function() {
        var clickcolor = box.style.background;
        var wrong = document.querySelector("#aws");

	        if (clickcolor === pickcolor) {
	            wrong.textContent = "That right !!";
	            loopcolor(clickcolor);

	        }
	        else {
	            wrong.textContent = "Wrong Play agin?";
	            this.setAttribute("style","background: rgb(38, 38, 38);");

	        }
    });
});

// Function chance Color to all box
function loopcolor(corectcolor){
	box.forEach( function(box) {
		box.style.background = corectcolor ;
	});
}

// Function Random Start pickcolor
function pickcolors(){
	return Math.floor(Math.random()*color.length);
};