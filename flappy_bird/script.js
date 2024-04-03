//board 
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdx = boardWidth/8
let birdy = boardHeight/2;

let bird = { //object
  x : birdx,
  y : birdy,
  width : birdWidth,
  height : birdHeight
}
 
window.onload = function(){
  board = document.querySelector("canvas#board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d"); //Usado para desenhar no quadro

  //Desenha o flappy bird
  context.fillStyle = "green";
  context.fillRect(bird.x, bird.y, bird.width, bird.height);

  //carregar as images
  birdImg = new Image();
  birdImg.src = "./images/flappybird.png";
  
  context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
}