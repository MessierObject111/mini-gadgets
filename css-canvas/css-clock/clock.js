var canvas = document.getElementsByClassName("clock"),
ctx = canvas.getContext("2d"),
radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock() {
    ctx.arc(0, 0, radius, 0 , 2*Math.PI);
    ctx.fillStyle = "#d9e5f7";
    ctx.fill();
}
