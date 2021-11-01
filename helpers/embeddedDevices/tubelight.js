class Tubelight {
    constructor() {
        this.status = false;
        this.brightnessLevel = 0;
    }
    turnOff() {
        this.status = false;
    }
    turnOn() {
        this.status = true;
    }
    increaseBrightnessLevel() {
        this.brightnessLevel = this.brightnessLevel != 5 ? this.brightnessLevel + 1 : 5;
    }
    decreaseBrightnessLevel() {
        this.brightnessLevel = this.brightnessLevel != 0 ? this.brightnessLevel - 1 : 0;
    }
    setBrightnessLevel(b) {
        this.brightnessLevel = b;
    }
    getStatus() {
        return {
            status: this.status,
            brightnessLevel: this.brightnessLevel
        };
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

module.exports = Tubelight;