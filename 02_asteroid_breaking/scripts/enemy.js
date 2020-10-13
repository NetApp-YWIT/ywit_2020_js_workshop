class Enemy {
    constructor(x, y, r = undefined) {
        this.position = createVector(x, y);
        this.velocity = createVector(random(-3, 3), random(-3, 3));
        this.destroyed = false;
        this.invincible = 240;
        if (!r) {
            this.r = random(10, 30);
        } else {
            this.r = r;
        }
    }

    update(ship) {
        if (this.invincible > 0 && !this.exploded) {
            for (let bullet of ship.bullets) {
                if (this.collide(bullet.position, 0)) {
                    bullet.destroyed = true;
                    if (this.r >= 20) {
                        this.destroyed = true;
                        // spawn 2 enemies that are each half my size
                        enemies.push(new Enemy(this.position.x, this.position.y, Math.floor(this.r / 2)));
                        enemies.push(new Enemy(this.position.x, this.position.y, Math.floor(this.r / 2)));
                    } else {
                        this.exploded = 120;
                    }
                }
            }
            if (this.collide(ship.position, ship.r)) {
                ship.destroyed = true;
            }
        } else {
            this.invincible--;
        }

        if (!this.exploded) {
            this.position.add(this.velocity);

            // wrap around
            if (this.position.x > width) {
                this.position.x -= width;
            }
            if (this.position.x < 0) {
                this.position.x = width - this.position.x;
            }
            if (this.position.y > height) {
                this.position.y -= height;
            }
            if (this.position.y < 0) {
                this.position.y = height - this.position.y;
            }
        }
    }

    draw() {
        push()
        if (this.exploded) {
            // draw 10 scattered fragments
            for (let i = 0; i < 10; i++) {
                let offsetX = random(0, this.r);
                let offsetY = random(0, this.r);
                translate(this.position.x + offsetX, this.position.y + offsetY);
                fill(255, 255, 255);
                circle(0, 0, 3);
            }
            this.exploded--;
            if (this.exploded <= 0) {
                this.destroyed = true;
                this.exploded = false;
            }
        } else {
            noFill();
            stroke(255, 255, 255);
            translate(this.position.x, this.position.y);
            rect(0, 0, this.r, this.r);
        }        
        pop()
    }

    collide(otherPoint, otherRadius) {
        let collidesX = false;
        let collidesY = false;
        if (otherPoint.x + otherRadius > this.position.x && otherPoint.x < this.position.x + this.r) {
            collidesX = true;
        }
        if (otherPoint.y + otherRadius > this.position.y && otherPoint.y < this.position.y + this.r) {
            collidesY = true;
        }
        return collidesX && collidesY;
    }
}
