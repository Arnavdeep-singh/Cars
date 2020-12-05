var database;
var canvas, gameState =0;
var playerCount,form,player,game;
var allPlayers;
var cars, car1, car2, car3,car4,car1Img,car2Img,car3Img,car4Img,groundImg,trackImg;
var finishedPlayers = 0;
var finished;

function preload(){
  car1Img = loadImage("../images/car1.png");
  car2Img = loadImage("../images/car2.png");
  car3Img = loadImage("../images/car3.png");
  car4Img = loadImage("../images/car4.png");
  groundImg = loadImage("../images/ground.png");
  trackImg = loadImage("../images/track.jpg");
  bronze = loadImage("../images/bronze.png");
  gold = loadImage("../images/gold.png");
  silver = loadImage("../images/silver.png");


}

function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth -20,displayHeight-30);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background(240,240,240); 
  if (playerCount === 4 && finishedPlayers === 0){
    game.update(1);

  } 
  if(gameState===1){
    clear();
    game.play();
  }
  if(finishedPlayers===4){
    game.update(2);
  }
  if(gameState===2 && finishedPlayers === 4){
    game.displayRanks();
  }
}