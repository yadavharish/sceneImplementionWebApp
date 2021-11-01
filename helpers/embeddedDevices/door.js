class Door {
    constructor() {
        this.position = 'Closed';
        this.lock = 'Lock';
    }
    lockDoor() {
        this.lock = 'Lock';
    }
    unlock() {
        this.lock = 'Unlock';
    }
    toggleLock() {
        this.lock = (this.lock == 'Lock') ? 'Unlock' : 'Lock';
    }
    togglePosition() {
        this.position = (this.position == 'Closed') ? 'Open' : 'Closed';
    }
    getStatus() {
        return {
            position: this.position,
            lock: this.lock
        }
    }
    updateAttribute(attribute, Attribute, op) {
        this[op + Attribute]();
        return {
            attribute: this[attribute]
        }
    }
}

module.exports = Door;