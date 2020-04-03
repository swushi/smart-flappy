function newGeneration() {
    for (let i = 0; i < TOTAL; i++) {
        birds[i] = pickOne();
    }
    
    calcFitness();
    savedBirds = [];
}

function pickOne() {
    let child = random(savedBirds);
    return child;
}

function calcFitness() {
    let sum = 0;
    savedBirds.forEach(bird => sum += bird.score);
    savedBirds.forEach(bird => bird.fitness = bird.score / sum);
    console.log(savedBirds);
}