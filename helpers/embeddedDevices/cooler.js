class Cooler {
    constructor() {
        this.status = false;
        this.fanSpeed = 0;
        this.swing = 'On';
        this.mist = 'Off';
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
    toggleSwing() {
        this.swing = (this.swing == 'On') ? 'Off' : 'On';
    }
    turnOnSwing() {
        this.swing = 'On';
    }
    turnOffSwing() {
        this.swing = 'Off';
    }
    turnOnMist() {
        this.mist = 'On';
    }
    turnOffMist() {
        this.mist = 'Off';
    }
    toggleMist() {
        this.mist = (this.mist == 'On') ? 'Off' : 'On';
    }
    getStatus() {
        return {
            status: this.status,
            fanSpeed: this.fanSpeed,
            swing: this.swing,
            mist: this.mist
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

module.exports = Cooler;