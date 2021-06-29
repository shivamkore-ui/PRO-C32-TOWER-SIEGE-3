const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;

function preload(){
backgroundImg = loadImage("black.jpg")

backgroundImg = loadImage("white.jpg")

}

function setup() {
  createCanvas(900,600);
  engine = Engine.create()
world = engine.world;

Stand1 = new Ground(395,570,310,10)
Stand2 = new Ground(715,450,220,10)

// Stand1 blocks
// 1st
blk1 = new Box(275,540,30,50)
blk2 = new Box(305,540,30,50)
blk3 = new Box(335,540,30,50)
blk4 = new Box(365,540,30,50)
blk5 = new Box(395,540,30,50)
blk6 = new Box(425,540,30,50)
blk7 = new Box(455,540,30,50)
blk8 = new Box(485,540,30,50)
blk9 = new Box(515,540,30,50)
// 2nd
blk10 = new Box(305,490,30,50)
blk11 = new Box(335,490,30,50)
blk12 = new Box(365,490,30,50)
blk13 = new Box(395,490,30,50)
blk14 = new Box(425,490,30,50)
blk15 = new Box(455,490,30,50)
blk16 = new Box(485,490,30,50)
// 3rd
blk17 = new Box(365,440,30,50)
blk18 = new Box(395,440,30,50)
blk19 = new Box(425,440,30,50)
blk20 = new Box(455,440,30,50)
blk21 = new Box(335,440,30,50)
// 4th
blk22 = new Box(365,410,30,50)
blk23 = new Box(395,410,30,50)
blk24 = new Box(425,410,30,50)
// 5th
blk25 = new Box(395,380,30,50)

// Stand2 blocks
// 1st
blk26 = new Box(640,420,30,50)
blk27 = new Box(670,420,30,50)
blk28 = new Box(700,420,30,50)
blk29 = new Box(730,420,30,50)
blk30 = new Box(760,420,30,50)
blk31 = new Box(790,420,30,50)
// 2nd
blk32 = new Box(670,370,30,50)
blk33 = new Box(700,370,30,50)
blk34 = new Box(730,370,30,50)
blk35 = new Box(760,370,30,50)
// 3rd
blk36 = new Box(700,320,30,50)
blk37 = new Box(730,320,30,50)
// 4th
blk38 = new Box(715,270,30,50)

// striker
blk_striker = new Striker(50,200,40,40)

var options = {
  length : 40,
  stiffness :0.15,
  bodyA : blk_striker.body,
  pointB : {x:200, y:300}
}
SlingShot = Matter.Constraint.create(options)
World.add(world, SlingShot)

}



function draw() {
  background(backgroundImg)


   
  Engine.update(engine);

Stand1.display();
Stand2.display();

strokeWeight("1.5")
stroke("black")
fill("lightblue");

// Stand1 blocks

blk1.display();
blk2.display();
blk3.display();
blk4.display();
blk5.display();
blk6.display();
blk7.display();
blk8.display();
blk9.display();
fill("pink"); 
blk10.display();
blk11.display();
blk12.display();
blk13.display();
blk14.display();
blk15.display();
blk16.display();
fill("red");
blk17.display();
blk18.display();
blk19.display();
blk20.display();
blk21.display();
fill("blue")
blk22.display();
blk23.display();
blk24.display();
fill("orange")
blk25.display();

// Stand2 Blocks

fill("lightblue");
blk26.display();
blk27.display();
blk28.display();
blk29.display();
blk30.display();
blk31.display();
fill("pink");
blk32.display();
blk33.display();
blk34.display();
blk35.display();
fill("red");
blk36.display();
blk37.display();
fill("orange")
blk38.display();

fill("lightgreen")
stroke("white")
strokeWeight("3")
blk_striker.display();

stroke("black")
strokeWeight("3")
if(SlingShot.bodyA){
  line(blk_striker.body.position.x, blk_striker.body.position.y, 200,300)
} 
} 






function mouseDragged(){
  Matter.Body.setPosition(blk_striker.body, {x : mouseX, y: mouseY})
}

function mouseReleased(){
  SlingShot.bodyA = null;
}

function keyReleased(){
  if(keyCode === 32){
    SlingShot.attach(this.blk_striker)
  }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>= 06 && hour<= 18){ 
      backgroundImg = "white.jpg"
    }
    else{  
      backgroundImg = "black.jpg"
    }

}