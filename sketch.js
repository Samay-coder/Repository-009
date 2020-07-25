
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var bin1;
var ground;
var paperimg,binimg;

function preload(){

}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paper(750,100,50);
	bin1 = new Bin(400, 625, 200, 150);
	ground = new Ground(400,680,800,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	paperball.display();
	bin1.display();
	ground.display();

  drawSprites();
 
}

function keyPressed(){
    if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:-235,y:-285});

    }
} 