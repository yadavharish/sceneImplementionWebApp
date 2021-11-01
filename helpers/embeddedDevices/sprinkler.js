class Sprinkler {
    constructor() {
        this.status = false;
        this.speed = 0;
    }
    turnOff() {
        this.status = false;
        this.speed = 0;
    }
    turnOn(s) {
        this.status = true;
        this.speed = s;
    }
    increaseSpeed() {
        this.speed = this.speed != 5 ? this.speed + 1 : 5;
    }
    decreaseSpeed() {
        this.speed = this.speed != 0 ? this.speed - 1 : 0;
    }
    getStatus() {
        return {
            status: this.status,
            speed: this.speed
        }
    }
    changeStatus() {
        this.status = !this.status;
        return {
            status: this.status
        }
    }
    updateAttribute(attribute, Attribute, op) {
        this[op + Attribute]();
        return {
            attribute: this[attribute]
        }
    }
}

module.exports = Sprinkler;