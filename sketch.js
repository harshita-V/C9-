
function setup() {
    createCanvas(600,400);
  }
  
  function draw() 
  {
    if(keyIsDown(DOWN_ARROW)){
        background("red");
    }
    if(keyIsDown(RIGHT_ARROW)){
      background("black");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("pink");
}
if(keyIsDown(UP_ARROW)){
  background("orange");
}
  drawSprites();
  }
  
  





