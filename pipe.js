class Pipe {
  constructor() {
    this.spacing = 175;
    this.top = random(height * 0.3, height * 0.7);
    this.bottom = this.top + this.spacing;
    this.width = 25;
    this.x = width;
    this.speed = -3;
    this.passed = false;
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

  pass(bird) {
    if (!this.passed && bird.x > this.x) {
      this.passed = true;
      return true;
    }
  }

  hit(bird) {
    if (bird.x + bird.size/2 >= this.x && bird.x - bird.size/2 <= this.x + this.width) {
      if (bird.y - bird.size/2 <= this.top || bird.y + bird.size/2 >= this.bottom) {
        return true;
      }
    }
    return false;
  }
}
