var color = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var box = document.querySelectorAll(".box");
var pickcolor = color[1];
var discolor = document.querySelector("#discolor");
discolor.textContent = pickcolor;

var i = 0
box.forEach(function(box) {
    box.style.background = color[i];
    i++

    box.addEventListener("click", function() {
        var clickcolor = box.style.background;

        if (clickcolor === pickcolor) {
            alert("Right")
        }
        else {
            alert("Wrong")
        }
    });
});