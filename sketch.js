
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ground = new Ground(600,height-30,1200,20)
	wall1= new Trash (700,390,200,20)
	wall2= new Trash (700,400,20,100)
	wall3= new Trash (700,410,20,100)
	dustbinObject = new Trash(700,400,200,20)
	paperObject = new Paper(70,240,100)

}


function draw() {
  rectMode(CENTER);
  background(100);
  
  ground.display()
  wall1.display()
  wall2.display()
  wall3.display()
  paperObject.display()
  dustbinObject.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:200,y:-200})
}



