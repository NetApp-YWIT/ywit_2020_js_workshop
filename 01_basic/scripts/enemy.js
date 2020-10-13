class Enemy {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(random(-3, 3), random(-3, 3));
        this.destroyed = false;
        this.r = 10;
    }

    update(ship) {
        for (let bullet of ship.bullets) {
            if (this.collide(bullet.position, 0)) {
                this.destroyed = true;
                bullet.destroyed = true;
            }
        }
        if (this.collide(ship.position, ship.r)) {
            ship.destroyed = true;
        }

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

    draw() {
        push()
        noFill();
        stroke(255, 255, 255);
        translate(this.position.x, this.position.y);
        rect(0, 0, this.r, this.r);
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
