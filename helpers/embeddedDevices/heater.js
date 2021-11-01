class Heater {
    constructor() {
        this.status = false;
        this.fanSpeed = 0;
        this.temperature = 23;
    }
    turnOff() {
        this.status = false;
    }
    turnOn(s) {
        this.status = true;
    }
    increaseFanSpeed() {
        this.fanSpeed = this.fanSpeed != 5 ? this.fanSpeed + 1 : 5;
    }
    decreaseFanSpeed() {
        this.fanSpeed = this.fanSpeed != 0 ? this.fanSpeed - 1 : 0;
    }
    setFanSpeed(s) {
        if (s >= 0 && s <= 5)
            this.fanSpeed = s;
    }
    increaseTemperature() {
        this.temperature = this.temperature != 30 ? this.temperature + 1 : 30;
    }
    decreaseTemperature() {
        this.temperature = this.temperature != 23 ? this.temperature - 1 : 23;
    }
    setTemperature(s) {
        if (s >= 23 && s <= 30)
            this.temperature = s;
    }
    getStatus() {
        return {
            status: this.status,
            fanSpeed: this.fanSpeed,
            swing: this.swing,
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

module.exports = Heater;