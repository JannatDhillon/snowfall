const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var snowfall = [];

function preload(){
bg=loadImage("snow1.jpg") 
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  // createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg)
  Engine.update(engine);
  if( frameCount %60 === 0){
   snowfall.push(new Snowfall(random(width/2+30),10,10));
    }
    for(var h = 0;h<snowfall.length;h++ ){
      snowfall[h].display();
     }  
  //drawSprites();
}