var car, wall;
var speed, weight;

function setup() {
  createCanvas(windowWidth,windowHeight);
  car = createSprite(width/6, height/2, height/12, height/12);
  wall = createSprite(width/1.2,height/2,width/24,height/2);
  speed = random(30,90);
  console.log(speed);
  
  car.velocityX = speed;  
  
  
  weight = random(40,200);
  console.log(weight);
}

function draw() {
  background(55,255,255);
  if(car.x - wall.x<car.width/2+wall.width/2&&wall.x-car.x<car.width/2+wall.width/2&&car.y-wall.y<car.width/2+wall.width/2&&wall.y-car.y<car.width/2+wall.width/2){
    car.velocityX = 0;
    var deformtion = 0.5*weight*speed*speed/2250;
    if(deformtion<100){car.shapeColor="green";}
    if(deformtion>100&&deformtion<180){car.shapeColor="yellow";}
    if(deformtion>180){car.shapeColor="red";}
  }
  wall.depth=  car.depth;
  car.depth+=1;
  drawSprites();
}