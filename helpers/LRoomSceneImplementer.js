var LRoom = require('./LRoom')
var env = require('./env')

const ImplementLivingRoomScenes = () => {
    if (env.isNightTime()) {
        LRoom.sbda.turnOn();
        LRoom.sbda.setBrightnessLevel(2);
        LRoom.sbla.turnOn();
        LRoom.sbla.setBrightnessLevel(2);
        LRoom.curla.close();
        if (env.personsInLivingRoomDiningArea > 0) {
            LRoom.sbda.turnOff();
            LRoom.tbda.turnOn();
        }
        if (env.personsInLivingRoomLivingArea > 0) {
            LRoom.sbla.turnOff();
            LRoom.tbla.turnOn();
        }
    }
    else {
        LRoom.tbda.turnOff();
        LRoom.curla.open();
        LRoom.tbla.turnOff();
        LRoom.sbla.turnOff();
    }

    if (env.date.getHours() >= 22 || env.date.getHours() <= 6) {
        LRoom.entdoor.lockDoor();
        if (env.personsInLivingRoomLivingArea > 0) {
            LRoom.lla.turnOn();
        }
        LRoom.tbla.turnOff();
    }
    else {
        LRoom.lla.turnOff();
        LRoom.entdoor.unlock();
    }

    if (env.personsInLivingRoomDiningArea == 0) {
        if (!env.isNightTime()) {
            LRoom.sbda.turnOff();
        }
        LRoom.tbda.turnOff();
        LRoom.acda.turnOff();
        LRoom.fda.turnOff();
        LRoom.hda.turnOff();
    }
    else {
        LRoom.fda.turnOn();
        if (env.personsInLivingRoomDiningArea < 3) {
            LRoom.fda.setSpeed(2);
            LRoom.tbda.setBrightnessLevel(2);
        }
        else if (env.personsInLivingRoomDiningArea < 5) {
            LRoom.fda.setSpeed(3);
            LRoom.tbda.setBrightnessLevel(3);
        }
        else {
            LRoom.fda.setSpeed(4);
            LRoom.tbda.setBrightnessLevel(4);
        }
    }

    if (env.personsInLivingRoomLivingArea == 0) {
        if (!env.isNightTime()) {
            LRoom.sbla.turnOff();
        }
        LRoom.tbla.turnOff();
        LRoom.acla.turnOff();
        LRoom.fla.turnOff();
        LRoom.hla.turnOff();
        LRoom.cla.turnOff();
        LRoom.lla.turnOff();
        LRoom.tvla.turnOff();
    }
    else {
        LRoom.fla.turnOn();
        if (env.personsInLivingRoomLivingArea < 3) {
            LRoom.fla.setSpeed(2);
            LRoom.lla.setBrightnessLevel(2);
            LRoom.tbla.setBrightnessLevel(2);
        }
        else if (env.personsInLivingRoomLivingArea < 5) {
            LRoom.fla.setSpeed(3);
            LRoom.lla.setBrightnessLevel(3);
            LRoom.tbla.setBrightnessLevel(3);
        }
        else {
            LRoom.fla.setSpeed(4);
            LRoom.lla.setBrightnessLevel(4);
            LRoom.tbla.setBrightnessLevel(4);
        }
    }

    if (env.getSeason() == 'Summer') {
        if (env.isNightTime()) {
            LRoom.cla.turnOff();
            if (env.personsInLivingRoomDiningArea > 0) {
                LRoom.acda.turnOn();
                LRoom.acda.setTemperature(24);
                if (env.personsInLivingRoomDiningArea > 2)
                    LRoom.acda.turnOnSwing();
                else
                    LRoom.acda.turnOffSwing();
                if (env.personsInLivingRoomDiningArea < 3)
                    LRoom.acda.setFanSpeed(2);
                else if (env.personsInLivingRoomDiningArea < 5)
                    LRoom.acda.setFanSpeed(3);
                else
                    LRoom.acda.setFanSpeed(4);
            }
            else {
                LRoom.acda.turnOff();
            }
            if (env.personsInLivingRoomLivingArea > 0) {
                LRoom.acla.turnOn();
                LRoom.acla.setTemperature(24);
                if (env.personsInLivingRoomLivingArea > 2)
                    LRoom.acla.turnOnSwing();
                else
                    LRoom.acla.turnOffSwing();
                if (env.personsInLivingRoomLivingArea < 3)
                    LRoom.acla.setFanSpeed(2);
                else if (env.personsInLivingRoomLivingArea < 5)
                    LRoom.acla.setFanSpeed(3);
                else
                    LRoom.acla.setFanSpeed(4);
            }
            else {
                LRoom.acla.turnOff();
            }
        }
        else {
            LRoom.acda.turnOff();
            LRoom.acla.turnOff();
            if (env.temperature > 34) {
                LRoom.cla.turnOff();
                if (env.personsInLivingRoomDiningArea > 0) {
                    LRoom.acda.turnOn();
                    LRoom.acda.setTemperature(24);
                    if (env.personsInLivingRoomDiningArea > 2)
                        LRoom.acda.turnOnSwing();
                    else
                        LRoom.acda.turnOffSwing();
                    if (env.personsInLivingRoomDiningArea < 3)
                        LRoom.acda.setFanSpeed(2);
                    else if (env.personsInLivingRoomDiningArea < 5)
                        LRoom.acda.setFanSpeed(3);
                    else
                        LRoom.acda.setFanSpeed(4);
                }
                else {
                    LRoom.acda.turnOff();
                }
                if (env.personsInLivingRoomLivingArea > 0) {
                    LRoom.acla.turnOn();
                    LRoom.acla.setTemperature(24);
                    if (env.personsInLivingRoomLivingArea > 2)
                        LRoom.acla.turnOnSwing();
                    else
                        LRoom.acla.turnOffSwing();
                    if (env.personsInLivingRoomLivingArea < 3)
                        LRoom.acla.setFanSpeed(2);
                    else if (env.personsInLivingRoomLivingArea < 5)
                        LRoom.acla.setFanSpeed(3);
                    else
                        LRoom.acla.setFanSpeed(4);
                }
                else {
                    LRoom.acla.turnOff();
                }
            }
            else {
                if (env.personsInLivingRoomLivingArea > 0) {
                    if (LRoom.tvla.getStatus().status) {
                        LRoom.cla.turnOff();
                        if (env.personsInLivingRoomLivingArea > 0) {
                            LRoom.acla.turnOn();
                            LRoom.acla.setTemperature(24);
                            if (env.personsInLivingRoomLivingArea > 2)
                                LRoom.acla.turnOnSwing();
                            else
                                LRoom.acla.turnOffSwing();
                            if (env.personsInLivingRoomLivingArea < 3)
                                LRoom.acla.setFanSpeed(2);
                            else if (env.personsInLivingRoomLivingArea < 5)
                                LRoom.acla.setFanSpeed(3);
                            else
                                LRoom.acla.setFanSpeed(4);
                        }
                        else {
                            LRoom.acla.turnOff();
                        }
                    }
                    else
                        LRoom.cla.turnOn();
                    if (env.personsInLivingRoomLivingArea > 2)
                        LRoom.cla.turnOnSwing();
                    else
                        LRoom.cla.turnOffSwing();
                    if (env.personsInLivingRoomLivingArea < 3)
                        LRoom.cla.setFanSpeed(2);
                    else if (env.personsInLivingRoomLivingArea < 5)
                        LRoom.cla.setFanSpeed(3);
                    else
                        LRoom.cla.setFanSpeed(4);
                    if (LRoom.entdoor.getStatus().position == 'Open')
                        LRoom.cla.turnOnMist();
                    else
                        LRoom.cla.turnOffMist();
                }
                else {
                    LRoom.cla.turnOff();
                }
            }
        }
    }
    else if (env.getSeason() == 'Winter') {
        if (env.isNightTime()) {
            if (env.personsInLivingRoomDiningArea > 0) {
                LRoom.hda.turnOn();
                if (env.personsInLivingRoomDiningArea < 3)
                    LRoom.hda.setFanSpeed(2);
                else if (env.personsInLivingRoomDiningArea < 5)
                    LRoom.hda.setFanSpeed(3);
                else
                    LRoom.hda.setFanSpeed(4);
            }
            else {
                LRoom.hda.turnOff();
            }
            if (env.personsInLivingRoomLivingArea > 0) {
                LRoom.hla.turnOn();
                if (env.personsInLivingRoomLivingArea < 3)
                    LRoom.hla.setFanSpeed(2);
                else if (env.personsInLivingRoomLivingArea < 5)
                    LRoom.hla.setFanSpeed(3);
                else
                    LRoom.hla.setFanSpeed(4);
            }
            else {
                LRoom.hla.turnOff();
            }
        }
        else {
            LRoom.hla.turnOff();
        }
    }

}

module.exports = ImplementLivingRoomScenes;
