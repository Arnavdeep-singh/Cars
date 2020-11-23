var database;
var canvas, gameState =0;
var playerCount,form,player,game;
var allPlayers;

function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth -20,displayHeight-30);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white"); 
  if (playerCount === 4){
    game.update(1);

  } 
  if(gameState===1){
    clear();
    game.play();
  }
}
