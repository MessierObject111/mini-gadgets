let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
//let now = new Date();
ctx.translate(radius, radius);
radius = radius * 0.9;
drawClock();
setInterval(drawClock(), 1000);
function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawLines(ctx, radius);
  drawHands(ctx, radius);
  //repainter();
}

function repainter() {
  drawHands(ctx, radius);
  setTimeout(repainter, 1000);
}
function drawLines(ctx, radius){
  ctx.save();
  ctx.lineWidth = 5;
  for (i=0;i<60;i++){
    if (i%5!=0) {
      ctx.beginPath();
      ctx.moveTo(radius * 0.9,0);
      ctx.lineTo(radius,0);
      ctx.stroke();
    }else{
    	ctx.beginPath();
      ctx.moveTo(radius * 0.85,0);
      ctx.lineTo(radius,0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.restore();
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

  //Clock border.
  ctx.lineWidth = radius*0.07;
  ctx.stroke();
  ctx.beginPath();
  //Central axis point.
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  //Color of the numbers, axis
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  let ang;
  let num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num <= 12; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.75);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.75);
    ctx.rotate(-ang);
  }

}

function drawHands() {
  let now = new Date();
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;
 console.log(sec);
  // write Hours
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(130,0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(93,0);
  ctx.stroke();
  ctx.beginPath();
  //Base of the 'second' arm axis.
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  //The 'second' arm's tip circle
  ctx.arc(105,0,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();
}
