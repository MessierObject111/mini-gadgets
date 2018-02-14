var ctx = document.getElementById('canvas').getContext('2d');
const diameter = 500;
const radius = diameter / 2;
const second_arm_tip_circle_radius = 10;
function init(){
clock();
renderArms();
setTimeout(init, 1000);
}
function clock(){
ctx.save();
ctx.clearRect(0,0,diameter, diameter);
ctx.translate(radius, radius);
ctx.scale(0.8,0.8);
ctx.rotate(-Math.PI/2);

ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.lineWidth = 8;
ctx.lineCap = "round";

// Hour marks
ctx.save();
for (var i=0;i<12;i++){
  ctx.beginPath();
  ctx.rotate(Math.PI/6);
  ctx.moveTo(0.9 * radius,0);
  ctx.lineTo(radius,0);
  ctx.stroke();
}
ctx.restore();

// Minute marks
ctx.save();
ctx.lineWidth = 5;
for (i=0;i<60;i++){
  if (i%5!=0) {
    ctx.beginPath();
    ctx.moveTo(0.95 * radius,0);
    ctx.lineTo(radius,0);
    ctx.stroke();
  }
  ctx.rotate(Math.PI/30);
}
ctx.restore();

}

function renderArms(){
var now = new Date();
var sec = now.getSeconds();
var min = now.getMinutes();
var hr  = now.getHours();
hr = hr>=12 ? hr-12 : hr;

ctx.fillStyle = "black";
// write Hours
ctx.save();
ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
ctx.lineWidth = 14;
ctx.beginPath();
ctx.moveTo(-0.05 * diameter,0);
ctx.lineTo(0.6 * radius,0);
ctx.stroke();
ctx.restore();

// write Minutes
ctx.save();
ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(-0.06 * diameter,0);
ctx.lineTo(0.7 * radius,0);
ctx.stroke();
ctx.restore();

// Write seconds
ctx.save();
ctx.rotate(sec * Math.PI/30);
ctx.strokeStyle = "#D40000";
ctx.fillStyle = "#D40000";
ctx.lineWidth = 6;
ctx.beginPath();
ctx.moveTo(-0.1 * radius,0);
ctx.lineTo(0.75 * radius,0);
ctx.stroke();
ctx.beginPath();
ctx.arc(0,0,second_arm_tip_circle_radius,0,Math.PI*2,true);
ctx.fill();
ctx.beginPath();
ctx.arc(0.75 * radius + second_arm_tip_circle_radius,0,second_arm_tip_circle_radius,0,Math.PI*2,true);
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.arc(0,0,3,0,Math.PI*2,true);
ctx.fill();
ctx.restore();

ctx.beginPath();
ctx.lineWidth = 14;
ctx.strokeStyle = '#325FA2';
ctx.arc(0,0,250,0,Math.PI*2,true);
ctx.stroke();

ctx.restore();
}
init();
