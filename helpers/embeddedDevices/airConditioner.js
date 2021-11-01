class AirConditioner {
    constructor() {
        this.status = false;
        this.fanSpeed = 0;
        this.swing = 'Off';
        this.temperature = 16;
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
    turnOnSwing(s) {
        this.swing = 'On';
    }
    turnOffSwing(s) {
        this.swing = 'Off';
    }
    toggleSwing() {
        this.swing = (this.swing == 'On') ? 'Off' : 'On';
    }
    increaseTemperature() {
        this.temperature = this.temperature != 28 ? this.temperature + 1 : 28;
    }
    decreaseTemperature() {
        this.temperature = this.temperature != 18 ? this.temperature - 1 : 18;
    }
    setTemperature(s) {
        if (s >= 18 && s <= 28)
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

module.exports = AirConditioner;