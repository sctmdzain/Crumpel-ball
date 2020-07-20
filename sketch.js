
var packageSprite,packageBody,ground,ground1,ground2,ground3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(290, 80, 100,100,PI/2);
	packageSprite.scale=0.2

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	ground1=createSprite(190,height-35,200,10)
	ground1.shapeColor=color("red")
	
	ground2=createSprite(90,height-45,10,30)
	ground2.shapeColor=color("red")
	
	ground3=createSprite(290,height-45,10,30)
    ground3.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(320 , 200 , 0.1 , {restitution:1,isStatic:false});
	
	

	//Create a Ground
	ground1= Bodies.rectangle(width/2,height-40, 200,20, {isStatic:true} );
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground2 = Bodies.rectangle(300, 585, 20, 150 , {isStatic:true} );
	ground3 = Bodies.rectangle(500, 585, 20, 150 , {isStatic:true} );
 	World.add(world, ground);
	World.add(world,packageBody)
	World.add(world, ground1)
	World.add(world,ground2)
	World.add(world,ground3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  //keyPressed();
  //console.log(sleep.x)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

/*function keyPressed() {
 if (keyDown("space")) {
 //Look at the hints in the document and understand how to make the package body fall only on
    packageSprite.setisStatic:false
  }
}
*/



