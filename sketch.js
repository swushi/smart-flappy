const TOTAL = 50;
let pipes = [];
let birds = [];
let savedBirds = [];
let score = 0;
let maxScore = 0;
let isOver = false;
let counter = 0;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < TOTAL; i++) {
    birds.push(new Bird())
  }
}

function draw() {
  background(51);
  
  if ((counter) % 70 == 0) {
    pipes.push(new Pipe());
  }

  // Show all the pipes
  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();
    if (pipes[i].offScreen()) {
      pipes.splice(i, 1);
    }
  }
  
  for (let i = 0; i < birds.length; i++) {
    let bird = birds[i];
    
    bird.update();
    time = millis();
    bird.think(pipes);
    console.log(millis()-time);
    
    for (let j = 0; j < pipes.length; j++) {
      if (pipes[j].hit(bird)) {
        savedBirds.push(birds.splice(i,1)[0]);
      }
    }
  }



  for (let i = 0; i < birds.length; i++) {
    birds[i].show();
  }

  for (let i = 0; i < pipes.length; i++) {
    pipes[i].show();
  }

  if (birds.length === 0) {
    newGeneration();
    pipes = [];
    pipes.push(new Pipe())
    counter = 0;
  }
  counter++;
}

function showScores() {
  textSize(32);
  text("score: " + score, 1, 32);
  text("record: " + maxScore, 1, 64);
}
