class Bird {
    constructor() {
      this.x = 50;
      this.y = width / 2;
      this.gravity = 0.6;
      this.dy = 0;
      this.lift = -7;
      this.size = 30;
      this.score = 0;
      this.fitness = 0;

      this.brain = new NeuralNetwork(4,64,2);
    }

    think(pipes) {
        const inputs = [];
        let closest;

        if (pipes[0].x < this.x) {
            closest = pipes[1];
        } else {
            closest = pipes[0];
        }
        
        inputs[0] = this.y / height;
        inputs[1] = this.dy / 30;
        inputs[2] = closest.top / height;
        inputs[3] = closest.bottom / height;
        const outputs = this.brain.predict(inputs);

        if (outputs[0] > outputs[1]) {
            this.up();
        }
    }

    show() {
      circle(this.x, this.y, this.size);
    }
  
    update() {
      this.score++;
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