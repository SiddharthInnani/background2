var rect1;
var r,g,b;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,800);

  rect1 = createSprite(632,29,40,30);

r =56;

b = 193;

g=220;



}

function draw(){

  rect1.x=World.mouseX;
  rect1.y=World.mouseY;

  // change the value of Red based on the mouse movement about the X axis
if(rect1.y<267){
background("red");
}

if(rect1.y<534&&rect1.y>267){
  background("blue");
}

if(rect1.y>534){
  background("green");
}

  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.

  drawSprites();
}