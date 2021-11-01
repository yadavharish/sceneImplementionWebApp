class Television{
    constructor() {
        this.status = false;
        this.channelNumber = 0;
        this.volumeLevel = 0;
        this.brightnessLevel = 0;
    }
    turnOff() {
        this.status = false;
    }
    turnOn() {
        this.status = true;
    }
    increaseChannelNumber() {
        this.channelNumber = this.channelNumber != 100 ? this.channelNumber + 1 : 100;
    }
    decreaseChannelNumber() {
        this.channelNumber = this.channelNumber != 0 ? this.channelNumber - 1 : 0;
    }
    increaseVolumeLevel() {
        this.volumeLevel = this.volumeLevel != 10 ? this.volumeLevel + 1 : 10;
    }
    decreaseVolumeLevel() {
        this.volumeLevel = this.volumeLevel != 0 ? this.volumeLevel - 1 : 0;
    }
    setVolumeLevel(v) {
        if (s >= 0 && s <= 10)
            this.volumeLevel = v;
    }
    setChannel(cn) {
        this.channelNumber = cn;
    }
    increaseBrightnessLevel() {
        this.brightnessLevel = this.brightnessLevel != 5 ? this.brightnessLevel + 1 : 5;
    }
    decreaseBrightnessLevel() {
        this.brightnessLevel = this.brightnessLevel != 0 ? this.brightnessLevel - 1 : 0;
    }
    setBrightnessLevel(b) {
        if (b >= 0 && b <= 5)
            this.brightnessLevel = s;
    }
    getStatus() {
        return {
            status: this.status,
            channelNumber: this.channelNumber,
            volumeLevel: this.volumeLevel,
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

module.exports = Television;