class Chimney {
    constructor() {
        this.status = false;
        this.motor = 0;
        this.lights = 0;
    }
    turnOff() {
        this.status = false;
    }
    turnOn(s) {
        this.status = true;
    }
    turnMotorOn() {
        this.motor = 1;
    }
    turnMotorOff() {
        this.motor = 0;
    }
    turnLightsOn() {
        this.motor = 1;
    }
    turnLightsOff() {
        this.motor = 0;
    }
    getStatus() {
        return {
            status: this.status,
            motor: this.motor,
            lights: this.lights
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

module.exports = Chimney;