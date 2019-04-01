var moonaY = 362;
var moonbY = 148;
var mooncY = 131;
var moondY = 308;
var mooneY = 365;

var moonaX = 254;
var moonbX = 147;
var mooncX = 337;
var moondX = 373;
var mooneX = 98;

var hlineY = 372;



function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  //moonA
  stroke(0);
  strokeWeight(1 / 4);
  fill(105, 141, 168);
  circle(moonaX, moonaY, 245 / 2)
  
  //moonB
  fill(2, 32, 55);
  circle(moonbX, moonbY, 249 / 2);
  
  //moonC
  fill(164, 200, 228);
  circle(mooncX, mooncY, 215 / 2)
  
  //moonD
  fill(14, 59, 94);
  circle(moondX, moondY, 246 / 2);
  
  //moonE
  fill(209 , 227, 241);
  circle(mooneX, mooneY, 195 / 2);
  
  
  stroke(0);
  strokeWeight(1);
  fill(38, 34, 97);
  circle(271, 240, 334 / 2);
  
  
  stroke(28, 26, 73);
  strokeWeight(6);
  strokeCap(ROUND);
 
   beginShape();
  line(183, hlineY, 354, hlineY);
  line(354, 372);
  line(268, 378);
  endShape();  
  
  hlineY = hlineY - 1
  
  if (hlineY <= 145) {
    hlineY = 372
  }
  
  //shadow line
  noFill()
  stroke(208, 210, 211);
  strokeWeight(1);
  beginShape();
  curveVertex(400, 230);
  curveVertex(100, 241);
  curveVertex(100, 253);
  curveVertex(266, 262);
  curveVertex(430, 251);
  curveVertex(438, 241);
  curveVertex(48, 230);
  endShape();
  

  
}