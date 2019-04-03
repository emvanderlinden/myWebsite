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
  
  moonaX = moonaX + 2;
  
  if(moonaX >= 600){
    moonaX = -200
  }
  
  moonbY = moonbY + 2.5;
  
  if(moonbY >= 600){
    moonbY = -200
  }
  
  mooncX = mooncX - 1.75;
  
  if(mooncX <=-200){
    mooncX = 700
  }
  
  moondY = moondY - 3
  
  if(moondY <= -200){
    moondY = 650
  }
  
  mooneX = mooneX - 4
  if(mooneX <=-400){
    mooneX = 625
  }
  
  
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
  
 
  //bottom shadow
  fill(28, 26, 73);
  stroke(28, 26, 73);
  strokeWeight(4);
  beginShape();
    curveVertex(183, 372);
    curveVertex(205, 377);
    curveVertex(217, 379);
    curveVertex(252, 383);
    curveVertex(279, 383);
    curveVertex(310, 381);
    curveVertex(332, 378);
    curveVertex(354, 372);
  endShape();

  //second from bottom highlight
  fill(81, 78, 129);
  stroke(81, 78, 129);
  strokeWeight(2);
  beginShape();
    curveVertex(149, 342);
    curveVertex(170, 346);
    curveVertex(219, 351);
    curveVertex(302, 353);
    curveVertex(328, 351);
    curveVertex(373, 345);
    curveVertex(391, 342);
  endShape();
  
  //third from bottom shadow
  fill(28, 26, 73);
  stroke(28, 26, 73);
  strokeWeight(2);
  beginShape();
    curveVertex(450, 308);
    curveVertex(163, 313);
    curveVertex(195, 316);
    curveVertex(230, 319);
    curveVertex(266, 320);
    curveVertex(300, 320);
    curveVertex(337, 317);
    curveVertex(377, 313);
    curveVertex(4, 308);
  endShape();
  
  //fourth from bottom highlight
  fill(81, 78, 129);
  stroke(81, 78, 129);
  strokeWeight(2);
  beginShape();
    curveVertex(115, 279);
    curveVertex(136, 282);
    curveVertex(161, 285);
    curveVertex(195, 289);
    curveVertex(230, 291);
    curveVertex(266, 292);
    curveVertex(301, 291);
    curveVertex(337, 289);
    curveVertex(377, 286);
    curveVertex(402, 282);
    curveVertex(452, 279);
  endShape();
  
  //fourth from top shadow
  fill(28, 26, 73);
  stroke(28, 26, 73);
  strokeWeight(2);
  beginShape();
    curveVertex(500, 226);
    curveVertex(139, 229);
    curveVertex(183, 233);
    curveVertex(221, 234);
    curveVertex(271, 235);
    curveVertex(311, 234);
    curveVertex(352, 232);
    curveVertex(392, 228);
    curveVertex(4, 223);
  endShape();
  
  //third from top highlight
  fill(81, 78, 129);
  stroke(81, 78, 129);
  strokeWeight(1);
  beginShape();
    curveVertex(400, 195);
    curveVertex(147, 199);
    curveVertex(183, 203);
    curveVertex(219, 205);
    curveVertex(266, 206);
    curveVertex(300, 205);
    curveVertex(337, 203);
    curveVertex(386, 198);
    curveVertex(42, 193);
  endShape();
  
  //second from top darkest shadow
  fill(19, 17, 49);
  stroke(19, 17, 49);
  strokeWeight(2);
  beginShape();
    curveVertex(130, 162);
    curveVertex(156, 166);
    curveVertex(183, 169);
    curveVertex(218, 172);
    curveVertex(266, 174);
    curveVertex(298, 174);
    curveVertex(338, 171);
    curveVertex(373, 168);
    curveVertex(408, 162);
  endShape();
  
  //top highlight
  fill(81, 78, 129);
  stroke(81, 78, 129);
  strokeWeight(1);
  beginShape();
    curveVertex(156, 130);
    curveVertex(195, 136);
    curveVertex(230, 139);
    curveVertex(266, 140);
    curveVertex(294, 140);
    curveVertex(322, 138);
    curveVertex(354, 135);
    curveVertex(386, 130);
  endShape();
   
}
