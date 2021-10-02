var basket,basketImg;
var blueBall;
var purpleBall;
var redBall;
var yellowBall;
var score;
var red_ballImage;
var blue_ballImage;
var yellow_ballImage;

function preload(){
blue_ballImage = loadImage("blueBall.png");
purple_ballImage = loadImage("purpleBall.png");
red_ballImage = loadImage("redBall.png");
yellow_ballImage = loadImage("yellowBall.png");
basketImg = loadImage("basket.png");
}

function setup() {
createCanvas(600, 600);

redBallG= new Group();
yellowBallG= new Group();
blueBallG= new Group();
purpleBallG= new Group();
 
  basket = createSprite(300,550,10,10);
  basket.addImage(basketImg);
  

  basket.scale = 0.2;
  score = 0;
}

function redBall() {
    var red = createSprite(Math.round(random(20, 570)),0, 10, 10);
    red.addImage(red_ballImage);
    red.velocityY = 5;
    red.lifetime = 150;
    red.scale = 0.05;
    redBallG.add(red)
  }
  
  function blueBall() {
    var blue = createSprite(Math.round(random(20, 370)),0, 10, 10);
    blue.addImage(blue_ballImage);
    blue.velocityY = 5;
    blue.lifetime = 150;
    blue.scale = 0.05;
    blueBallG.add(blue)
  }
  
  function yellowBall() {
    var yellow = createSprite(Math.round(random(20, 370)),0, 10, 10);
    yellow.addImage(yellow_ballImage);
    yellow.velocityY = 5;
    yellow.lifetime = 150;
    yellow.scale = 0.05;
    yellowBallG.add(yellow)
  }
  
  function purpleBall() {
    var purple = createSprite(Math.round(random(20, 370)),0, 10, 10);
    purple.addImage(purple_ballImage);
    purple.velocityY = 5;
    purple.lifetime = 150;
    purple.scale = 0.05;
    purpleBallG.add(purple)
  }


function draw() {
  background("white");

  if (World.frameCount % 200 == 0) {
    redBall();
  }
  if (World.frameCount % 170 == 0) {
    blueBall();
  }
  if (World.frameCount % 105 == 0) {
    yellowBall();
  }
  if (World.frameCount % 126 == 0) {
    purpleBall();
  }
 
  basket.x = World. mouseX;

  


if (blueBallG.isTouching(basket)) {
   score = score + 50
   blueBallG.destroyEach();
   
}
if (yellowBallG.isTouching(basket)) {
    score = score + 100;
    yellowBallG.destroyEach();
}
if (purpleBallG.isTouching(basket)) {
    score = score + 75;
    purpleBallG.destroyEach();
}
if (redBallG.isTouching(basket)) {
    score = score + 25;
    redBallG.destroyEach();
} 
    text("Score: "+ score, 500,50);
    
    drawSprites();

}





