let pipes = [];
let bird;


function setup() {
  createCanvas(400, 400);
  background(0);
  pipes.push(new Pipe());
  bird = new Bird();
}

function draw() {
  background(51);

  bird.show();
  bird.update();

  if (frameCount % 70 == 0) {
    pipes.push(new Pipe());
  }

  for (let i = 0; i < pipes.length; i++) {
    pipes[i].update();
    pipes[i].show();
    
    pipes[i].hit(bird);
    
    if (pipes[i].offScreen()) {
      pipes.splice(1, i);
      
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}

class Bird {
  constructor() {
    this.x = 50;
    this.y = width / 2;
    this.gravity = 0.6;
    this.dy = 0;
    this.lift = -7;
    this.size = 30;
  }

  show() {
    circle(this.x, this.y, this.size);
  }

  update() {
    this.dy += this.gravity;
    this.y += this.dy;

    if (this.y >= height - this.size / 2) {
      this.y = height - this.size / 2;
      this.dy = 0;
    }

    if (this.y <= 0 + this.size / 2) {
      this.y = 0 + this.size / 2;
      this.dy = 0;
    }
  }

  up() {
    this.dy = this.lift;
  }
}

class Pipe {
  constructor() {
    this.spacing = height * 0.2;
    this.top = random(height * 0.3, height * 0.7);
    this.bottom = this.top + this.spacing;
    this.width = 25;
    this.x = width;
    this.speed = -3;
  }

  show() {
    fill(255);
    rect(this.x, 0, this.width, this.top);
    rect(this.x, this.bottom, this.width, height - this.bottom);
  }

  update() {
    this.x += this.speed;
  }

  offScreen() {
    return this.x < 0 - this.width * 2;
  }
  
  hit(bird) {
    if (bird.x >= this.x + this.width && bird.x <= this.x) {
      if (bird.y < this.top + bird.size / 2) {
        noLoop();
      }
    }
  }
}