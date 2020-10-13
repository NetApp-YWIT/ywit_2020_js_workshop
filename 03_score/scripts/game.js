var ship;
var enemies = [];
var score = 0;
var lives = 3;
var stage = 1;
var sleep = 0;

function setup() {
    // code run once at the beginning of the game
    createCanvas(730, 546);
    frameRate(60);
    ship = new Ship();
    for (let i = 0; i < 3 * stage; i++) {
        enemies.push(new Enemy(random(width), random(height)));
    }
}

function draw() {
    // code run on each frame of the game

    while (sleep > 0) {
        sleep--;
        return;
    }

    background(0);
    
    update_score();
    ship.draw();
    for (let enemy of enemies) {
        enemy.update(ship);
        enemy.draw();
    }
    enemies = enemies.filter(enemy => !enemy.destroyed);
    if (enemies.length == 0) {
        changeLevel();
    }

    if (lives == 0) {
        gameOver();
    }
}

function changeLevel() {
    if (stage == 10) {
        background(0);
        fill(255, 255, 255);
        textSize(width / 6);
        textAlign(CENTER, CENTER);
        text("You Win", width / 2, height / 2);
        noLoop();
    }

    // advance to next level
    stage++;
    sleep = 120;
    for (let i = 0; i < 3 * stage; i++) {
        enemies.push(new Enemy(random(width), random(height)));
    }
    ship.invincibleTimer = 120;
    push()
    background(0);
    fill(255, 255, 255);
    textSize(width / 6);
    textAlign(CENTER, CENTER);
    text("Level " + stage, width / 2, height / 2);
    pop()
}

function gameOver() {
    background(0);
    fill(255, 255, 255);
    textSize(width / 6);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);

    // stops the game loop
    noLoop();
}

function update_score() {
    push()

    fill(255, 255, 255);
    textSize(20);
    text("Score: " + score, 10, 25);
    let rightSide = width - (75 + (10 * Math.floor(Math.log10(lives))));
    text("Lives: " + lives, rightSide, 25);

    pop()
}
