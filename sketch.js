var player;
var door1;
var gameState = "begin"

function preload(){


}

function setup() {
  createCanvas(800,400);
 player =  createSprite(400, 400, 50, 50);
door1 = createSprite(400,200,50,50);

}

function draw() {
  background(0);  

  if(gameState === "begin"){
    if (keyDown ("left")){
      player.x=player.x-1;
    }
    if (keyDown("right")){
    player.x = player.x+1;
    }
    if (keyDown("up")){
      player.y = player.y-1
    } 
    
    if(keyDown("down")){
      player.y = player.y+1;
    }
    
    if(player.isTouching(door1)){
    text("Press Enter To Enter the Door", 350,50)
    if(keyDown("Enter")){
      gameState = "l1"
    }
    }
  }


else if(gameState === "l1"){
player.destroy();
door1.destroy();
Maize();
}


  drawSprites();
}

function Maize(){
  
var ball = createSprite(287,387,15, 15);
var ball2 = createSprite(200,200,15,15);
//left wall
var wall = createSprite(3,300,10,760);
//up wall
var wall2= createSprite(393,3,780,10);
//down wall
var wall3=createSprite(9,395,690,9);
//right wall
var wall4=createSprite(395,3,9,690);
// other walls
var wall5 = createSprite(200,160,90,15);
var wall6 = createSprite(160,200,15,90);
var wall7 = createSprite(220,240,50,15);
var wall8 = createSprite(83,198,65,15);
var wall9 = createSprite(241,200,15,90);
var wall10 = createSprite(113,200,15,180);
var wall11=createSprite(225,118,120,15);
var wall12 = createSprite(205,282,170,15);
var wall13 = createSprite(283,200,15,180);
var wall14 = createSprite(58,125,15,150);
var wall15 = createSprite(180,58,240,15);
var wall16 = createSprite(196,310,15,60);
var wall17 = createSprite(260,333,130,15);
var wall18 = createSprite(321,265,15,150);
var wall19 = createSprite(355,250,80,15);
var wall20 = createSprite(70,362,90,15);
var wall21 = createSprite(27,325,15,90);
var wall22 = createSprite(345,100,15,80);

wall22.shapeColor="blue"
ball.shapeText="cup"
wall.shapeColor="green"
wall2.shapeColor="green"
wall3.shapeColor="green"
wall4.shapeColor="green"
wall5.shapeColor="blue"
wall6.shapeColor="blue"
wall7.shapeColor="blue"
wall8.shapeColor="blue"
wall9.shapeColor="blue"
wall10.shapeColor="blue"
wall11.shapeColor="blue"
wall12.shapeColor="blue"
wall13.shapeColor="blue"
wall14.shapeColor="blue"
wall15.shapeColor="blue"
wall16.shapeColor="blue"
wall17.shapeColor="blue"
wall18.shapeColor="blue"
wall19.shapeColor="blue"
wall20.shapeColor="blue"
wall21.shapeColor="blue"

ball.shapeColor="red"
ball2.shapeColor="purple"

   
   
   if (gameState ==="l1" && keyDown("up")){
     ball.y = ball.y-1
     
   }
   if (gameState ==="l1" && keyDown("down")){
    
     ball.y=ball.y+1;
   }
   if (gameState ==="l1" && keyDown("left")){
    ball.x = ball.x -1;
   }
   if (gameState ==="l1" && keyDown("right")){
     ball.x = ball.x +1;
   }

 textSize(40);
textFont("Arial BOLD");
  textTime=10;
 text("rat",(ball));
     
   
   

if (ball.isTouching(wall)||ball.isTouching(wall2)||ball.isTouching(wall3)||ball.isTouching(wall4)||ball.isTouching(wall5)||ball.isTouching(wall6)||ball.isTouching(wall7)||ball.isTouching(wall8)||ball.isTouching(wall9)||ball.isTouching(wall10)||ball.isTouching(wall11)||ball.isTouching(wall12)||ball.isTouching(wall13)||ball.isTouching(wall14)||ball.isTouching(wall15)||ball.isTouching(wall16)||ball.isTouching(wall17)||ball.isTouching(wall18)||ball.isTouching(wall19)||ball.isTouching(wall20)||ball.isTouching(wall21)||ball.isTouching(wall22)){
      ball.x=387;
      ball.y=387;

 ball.velocityX=0;
 ball.velocityY=0;
 text("YOU LOSE",120, 190);
 fill("blue");
}   
   
  

if (ball.isTouching(ball2)){
ball.x=200;
ball.y=200;
ballvelocityX=0;
ball.velocityY=0;
  
   text("YOU WIN",120,190);
}  
  



}
