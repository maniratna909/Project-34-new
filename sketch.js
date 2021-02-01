const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function preload() {
    backgroundIMG= loadImage("GamingBackground.png")
    monsterIMG= loadImage("Monster-01.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

hero= new SuperH(100,300);
  ground1= new Ground(600,350,1200,10)
    slingshot = new SlingShot(hero.body,{x:200, y:50});

    box1= new Box(700,300,50,50)
    //box1.shapeColor("red")
    box2= new Box(647,200,50,50)
    box3= new Box(595,100,50,50)
    box4= new Box(539,50,50,50)
    box5= new Box(539,100,50,50)
    
    box6= new Box(647,250,50,50)
    box7= new Box(595,150,50,50)
    box8= new Box(647,300,50,50)
box9= new Box(595,200,50,50)
    box10= new Box(539,50,50,50)

box30= new Box(800,400, 50,50)

}

function draw(){
        background(backgroundIMG);
    
       
    
    Engine.update(engine);
   
    
    //slingshot.display();
    hero.display()
    ground1.display()
  
    box1.display()
   box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
}

function mouseDragged(){
   
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

