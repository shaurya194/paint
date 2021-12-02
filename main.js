canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);

var mevent = "";
function my_mousedown(e) {
    mevent = "down";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{

}