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

  //moonA lighter teal circle on bottom
  stroke(0);
  strokeWeight(1 / 4);
  fill(105, 141, 168);
  ellipse(moonaX, moonaY, 245, 245)
  
  
  //moonB dark blue circle
  fill(2, 32, 55);
  ellipse(moonbX, moonbY, 249, 249);
  
  //moonC darker light blue circle
  fill(164, 200, 228);
  ellipse(mooncX, mooncY, 215, 215);
  
  //moonD dark teal circle
  fill(14, 59, 94);
  ellipse(moondX, moondY, 246, 246);
  
  //moonE lightest blue circle
  fill(209 , 227, 241);
  ellipse(mooneX, mooneY, 195, 195);
  
  
  stroke(0);
  strokeWeight(1);
  fill(38, 34, 97);
  circle(271, 240, 334 / 2);
  
  
  //ring around saturn
  noFill()
  stroke(208, 210, 211);
  strokeWeight(5);
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
