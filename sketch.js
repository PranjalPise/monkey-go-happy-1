var PLAY =1;
var END =0;
var monkey , monkeyRunning;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;


function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(650,300);

  monkey=createSprite(90,245);
  monkey.addAnimation("moving",monkeyRunning);
  monkey.scale=0.1;
  
  
bananasGroup= new Group();
  obstaclesGroup=new Group();
}


function draw() {
background("white");
  
  
    bananas();
  obstacles();
    
    if (keyDown("space")){
      monkey.velocityY=-6;
    }
        monkey.velocityY = monkey.velocityY + 0.5;
  
  
  
  ground=createSprite(200,280,900,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  
  
  
  monkey.collide(ground);
  drawSprites();
}


function bananas() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,290,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;          
  banana.velocityX = -4;
    bananasGroup.add(banana);
    bananasGroup.setlifeTimeEach=60;
  }
}


function obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,245,40,10);
    obstacle.y = Math.round(random(600,290));
    obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;          
obstacle.velocityX = -5;
  obstaclesGroup.add(obstacle);
    obstaclesGroup.setlifeTimeEach=60;
  }
}
