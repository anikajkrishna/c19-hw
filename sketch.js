var basket;
var blueBall;
var purpleBall;
var redBall;
var yellowBall;
var score

function preload(){
blueBall = loadImage("blue ball.png");
purpleBall = loadImage("purple ball.png");
redBall = loadImage("red ball.png");
yellowBall = loadImage("yellow ball.png");
basket = loadImage("basket.png");
}

function setup() {
createCanvas(600, 200);

redBall= new Group();
  redBall.add = ("red")

yellowBall= new Group();
  yellowBall.add = ("yellow")

blueBall= new Group();
  blueBall.add = ("blue")

purpleBall= new Group();
  purpleBall.add = ("purple")

score = 0;
}

function redBall() {
    var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
    red.addImage(red_balloonImage);
    red.velocityY = 5;
    red.lifetime = 150;
    red.scale = 0.1;
  }
  
  function blueBall() {
    var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
    blue.addImage(blue_balloonImage);
    blue.velocityY = 5;
    blue.lifetime = 150;
    blue.scale = 0.1;
  }
  
  function yellowBall() {
    var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
    green.addImage(green_balloonImage);
    green.velocityY = 5;
    green.lifetime = 150;
    green.scale = 0.1;
  }
  
  function purpleBall() {
    var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
    pink.addImage(pink_balloonImage);
    pink.velocityY = 5;
    pink.lifetime = 150;
    pink.scale = 1;
  }

function basket( ){
    var basket = createSprite
    basket.addImage(pink_balloonImage);
    basket.velocityX = 5;
    basket.lifetime = 150;
    basket.scale = 1;

}


function draw() {
if basket.isTouching (blueBall); {
    score = score + 1
}
if basket.isTouching (yellowBall); {
    score = score + 1
}
if basket.isTouching (purpleBall); {
    score = score + 1
}
if basket.isTouching (redBall); {
    score = score + 1
}

    drawSprites();

}





