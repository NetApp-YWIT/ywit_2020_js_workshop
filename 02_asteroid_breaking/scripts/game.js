var ship;
var enemies = [];

function setup() {
    // code run once at the beginning of the game
    createCanvas(730, 546);
    frameRate(60);
    ship = new Ship();
    for (let i = 0; i < 10; i++) {
        enemies.push(new Enemy(random(width), random(height)));
    }
}

function draw() {
    // code run on each frame of the game
    background(0);
    ship.draw();
    for (let enemy of enemies) {
        enemy.update(ship);
        enemy.draw();
    }
    enemies = enemies.filter(enemy => !enemy.destroyed);
    if (enemies.length == 0) {
        background(0);
        fill(255, 255, 255);
        textSize(width / 6);
        textAlign(CENTER, CENTER);
        text('You Win', width / 2, height / 2);
        noLoop();
    }

    if (ship.destroyed) {
        background(0);
        fill(255, 255, 255);
        textSize(width / 6);
        textAlign(CENTER, CENTER);
        text('You Lose', width / 2, height / 2);
        noLoop();
    }
}
