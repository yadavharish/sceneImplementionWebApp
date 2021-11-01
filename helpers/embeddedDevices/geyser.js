class Geyser {
    constructor() {
        this.status = false;
        this.temperature = 0;
    }
    turnOff() {
        this.status = false;
    }
    turnOn(s) {
        this.status = true;
    }
    increaseTemperature() {
        this.temperature = this.temperature != 75 ? this.temperature + 1 : 75;
    }
    decreaseTemperature() {
        this.temperature = this.temperature != 40 ? this.temperature - 1 : 40;
    }
    setTemperature(s) {
        if (s >= 40 && s <= 75)
            this.temperature = s;
    }
    getStatus() {
        return {
            status: this.status,
            temperature: this.temperature
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

module.exports = Geyser;