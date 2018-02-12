let canvas = document.getElementsByClassName("clock"),
ctx = canvas.getContext("2d"),
radius = canvas.height / 2,
clock_face_color = "#d9e5f7";

ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock() {
  //The clock face.
  ctx.arc(0, 0, radius, 0 , 2*Math.PI);
  ctx.fillStyle = clock_face_color;
  ctx.fill();
  //The gilded rim of the clock face.
  let rim = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  //Somehow, this gradient variable has to be defined here rather than being put
  //as a global variable, or the rim won't render.
  rim.addColorStop(0, '#333');
  rim.addColorStop(0.5, 'gold');
  rim.addColorStop(1, '#333');
  ctx.strokeStyle = rim;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  //The center axis.
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}
