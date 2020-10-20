class Lightbulb {
    constructor() {
        this.cycles = 0;
        this.maxLife = 100;
        this.state = "off";
        this.burnedOut = false;
    }

    turnOn() {
        if (this.cycles > this.maxLife) {
            this.burnedOut = true;
            return;
        }

        this.state = "on";
    }

    turnOff() {
        this.state = "off";
    }
}

var light = new Lightbulb();
console.log(`The light is ${light.state}`);
light.turnOn();
console.log(`The light is ${light.state}`);
light.turnOff();
console.log(`The light is ${light.state}`);