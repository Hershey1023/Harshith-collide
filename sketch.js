var box;
var re


function setup() {
  createCanvas(800,400);
  box = createSprite(400, 200, 50, 50);
  re = createSprite(400, 200, 50, 50);
  box.shapeColor = "blue";
  re.shapeColor = "blue";
}

function draw() {
  background("black");
  
  re.x = World.mouseX;
  re.y = World.mouseY;

  if (re.x - box.x<box.width/2+re.width/2
    &&box.x - re.x<re.width/2+box.width/2
    &&re.y - box.y<box.height/2+re.height/2
    &&box.y - re.y<re.height/2+box.height/2){
    re.shapeColor = "red";
    box.shapeColor ="red";
  }
else {
  box.shapeColor = "blue";
  re.shapeColor = "blue";
}
  drawSprites();
}