// Variables
var score1 = 0;
var player = createSprite(200,0);
var plat = createSprite(105,200);
var stat = createSprite(randomNumber(50,350),randomNumber(-30,-60));
createEdgeSprites();
player.setAnimation("bunny1_2");
player.scale =0.45;
plat.setAnimation("face_watermelon_1");
plat.scale = 0.35;
stat.setAnimation("alienGreen_badge_1");


var plat2 = createSprite(290,randomNumber(-30,-60));
var stat2 = createSprite(randomNumber(50,350),randomNumber(-30,-60));
plat2.setAnimation("face_watermelon_1_copy_1");
plat2.scale = 0.35;
stat2.setAnimation("alienGreen_badge_1_copy_1");

var blocker = createSprite(randomNumber(0,400), - 20);
blocker.setAnimation("rockDown_1");
blocker.scale = 0.35;

var LIVeS = 3;
function LIVES () {
fill("white");
textSize(20);
text("lives: ",280, 10, 80, 20);
text(LIVeS,330, 27);
}

function lives1(){
if (player.y > 400) {
  LIVeS = LIVeS - 1 ; 
}}

function sideWalls() {
  player.collide(leftEdge);
  player.collide(rightEdge);
}

// Create Sprites

function draw() {
  // draw the background
  if (score1 < 10) {
    background1();
  }   else if (score1 < 20) {
    background3();
    } else { 
      background2();
  }
  showScore();
  stat.velocityY = randomNumber(1,5);
  plat.velocityY = 1;
  stat2.velocityY = randomNumber(1,5);
  plat2.velocityY = 1;
  loopPlatforms();
  loopItems();
   playerfall ();
   controlplayer();
   playerLands ();
   collectItems();
   starrecolate();
   LIVES();
   lives1();
   endgame();
   sideWalls();
   blocker.velocityY = randomNumber(1,3);
  // update the sprites
  
  drawSprites();
}

// Functions
function loopPlatforms () {
  if (plat.y > 410) { 
plat.y = randomNumber(-30,-60);
plat.x = randomNumber(50,350);
}
}
function background1() {
  background("darkred");0122111;
  noStroke();
  fill("yellow");
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(340, 50, 60, 60);
  fill("darkBlue");
  ellipse(320, 30, 60, 60);
}
function background2() {
background("yellow");
noStroke();
fill("red");
ellipse(randomNumber(0,400), randomNumber(0,400),4,4);
ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
ellipse(340, 50, 60, 60);
fill("darkBlue");
ellipse(320, 30, 60, 60);
}
function background3 () {
 background("green");
noStroke();
fill("green");
ellipse(randomNumber(0,400), randomNumber(0,400),4,4);
ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
ellipse(340, 50, 60, 60);
fill("red");
ellipse(320, 30, 60, 60);
}
  
function showScore() {
  fill("white");
  textSize(20);
  text("Score:",10, 10, 80, 20);
   text(score1,80, 27);
}

function loopItems() {
 if (plat2.y > 410) { 
plat2.y = randomNumber(-30,-60);
plat2.x = randomNumber(50,350);
}}

function playerfall (){
  player.velocityY = player.velocityY + 0.2;
  }
  function controlplayer(){
    if (keyDown("LEFT")) {
    player.x = player.x - 3;
    player.setAnimation("bunny1_2_copy_1");
     }
   if (keyDown("RIGHT")) {
    player.x = player.x + 3;
    player.setAnimation("bunny1_2");
   }
   if (keyDown("up")) {
   player.velocityY = -3;
} }

function playerLands(){
  player.collide(plat2);
  player.collide(plat);
  }
  
function collectItems() {
    if (player.isTouching(stat)) {
stat.x = randomNumber(50,350);
stat.y = randomNumber(-30,-60);
score1 = score1 + 1;
}
   if (player.isTouching(stat2)){
stat2.y = randomNumber(-30,-60);
stat2.x = randomNumber(50,350);
score1 = score1 + 1;
    }
    blocker.collide(player);
  }
  function starrecolate() {
    if (stat.y > 400) {
      stat.y = stat.x = randomNumber(50,350);
stat.y = randomNumber(-30,-60);
    }
    if (stat2.y > 400) {
      stat2.y = randomNumber(-30,-60);
stat2.x = randomNumber(50,350);
    }
  }
  
function endgame(){
  if (LIVeS < 0) {
    background("black");
    fill("green");
    textSize(50);
    text("Game Over!" , 40, 200);
    plat.y = 700;
    plat2.y =700;
    stat.y = 700;
    stat2.y = 700;
  }
  
}




































