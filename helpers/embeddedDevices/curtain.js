class Curtain {
    constructor() {
        this.position = 'Closed';
    }
    togglePosition() {
        this.position = (this.position == 'Closed') ? 'Open' : 'Closed';
    }
    open() {
        this.position = 'Open';
    }
    close() {
        this.position = 'Closed';
    }
    getStatus() {
        return {
            position: this.position
        }
    }
    updateAttribute(attribute, Attribute, op) {
        this[op + Attribute]();
        return {
            attribute: this[attribute]
        }
    }
}

module.exports = Curtain;