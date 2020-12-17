var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1450, 200, 50, height/2);
  wall.shapeColor = rgb(80,80,80);

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("black");
  
  car.velocityX = speed;

  if(car.isTouching(wall)){
    car.velocityX = 0;

  deformation = 0.5*speed*speed*weight/22500

  if(deformation < 100){
    car.shapeColor = rgb(0,255,0);
  }
  else if(deformation === 100 || deformation > 100 && deformation < 180 || deformation === 180){
    car.shapeColor = rgb(230,230,0);
  }
  else if(deformation > 180){
    car.shapeColor = rgb(255,0,0);
  }

  }

  drawSprites();

}