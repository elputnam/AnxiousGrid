var tileCount;
var H1;
var H2;
let inc = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tileCount = (height*.05);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(8);
}

function draw() {
  //clear();
  strokeCap(SQUARE);
  //randomSeed(0);
  background(random(20), 30);
  H1 = map(mouseX, 0, width, 150, 300);
  H2 = map(mouseX, 0, width, 300, 150);
  grid();
  fill(60, random(30,50),100,100);
  circle(mouseX+random(-10,10), mouseY+random(-10,10), 100);
}

function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (height / tileCount) * gridY;
     
      //introduce random choice between three
      var toggle = int(random(0, 3));
      let wiggle = (-20, 20);
      let nudge = (-5, 5);

      //display options
      if (toggle == 0) {
        stroke(
          H1 + random(-50, 50),
          random(50, 100),
          random(50, 100),
          random(50, 100)
        );
        strokeWeight(3);
        line(posX, posY, posX + width / tileCount, posY + height / tileCount);
      }

      if (toggle == 1) {
        strokeWeight(random(5));
        //line(random(posX), random(posY) + width / tileCount, posX + height / tileCount, posY);
        fill(H2, random(50),100,random(100));
        quad(
          posX + random(nudge),
          posY + random(nudge),
          posX + width / tileCount + random(nudge),
          posY + random(nudge),
          posX + width / tileCount + random(nudge),
          posY + height / tileCount + random(nudge),
          posX + random(nudge),
          posY + height / tileCount + random(nudge)
        );
      }

      if (toggle == 2) {
        strokeWeight(random(4));
        line(
          posX + random(wiggle),
          posY + height / tileCount + random(wiggle),
          posX + width / tileCount + random(wiggle),
          posY + random(wiggle)
        );
      }
    }
  }
}


  
