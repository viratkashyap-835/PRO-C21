var wall,thickness;
var bullet,speed,weight;

function setup(){
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1500,350,thickness,height/2);
  bullet=createSprite(20,350,30,10);
 
  bullet.velocityX=speed;
  wall.shapeColor="black";
  bullet.shapeColor="white";
}

function draw(){
  background(rgb(80,80,80));
 if(hascollided(bullet,wall)){
   bullet.velocityX=0;
   var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>=10){
     wall.shapeColor="green";
   }
   else if(damage<10){
     wall.shapeColor="red";
   }
 }

  drawSprites();
}