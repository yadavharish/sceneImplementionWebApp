class SmartBulb {
    constructor() {
        this.status = false;
        this.brightnessLevel = 0;
        this.colorIndex = 0;
        this.colors = ['Blue', 'Red', 'Green', 'Yellow', 'White', 'Purple', 'Orange', 'Pink', 'Neon', 'Golden'];
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
        if (b >= 0 && b <= 5)
            this.brightnessLevel = b;
    }
    setColor(c) {
        this.color = c;
    }
    getStatus() {
        return {
            status: this.status,
            brightnessLevel: this.brightnessLevel,
            color: this.colors[this.colorIndex]
        };
    }
    changeStatus() {
        this.status = !this.status;
        return {
            status: this.status
        }
    }
    changeColor() {
        this.colorIndex = (this.colorIndex + 1 ) % this.colors.length;
    }
    updateAttribute(attribute, Attribute, op) {
        this[op + Attribute]();
        if(attribute == 'color')
        return {
            attribute: this.colors[this.colorIndex]
        }
        return {
            attribute: this[attribute]
        }
    }
}

module.exports = SmartBulb;