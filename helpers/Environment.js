class Environment {
    constructor() {
        this.date = new Date();
        this.temperature = this.getTemperatureBasedOnMonthAndTime();
        this.personsInLivingRoomLivingArea = 0;
        this.personsInLivingRoomDiningArea = 0;
    }
    getSeason() {
        let m = this.date.getMonth();
        if (m >= 2 && m <= 4)
            return "Spring";
        else if (m >= 5 && m <= 7)
            return "Summer";
        else if (m >= 8 && m <= 10)
            return "Autumn";
        else
            return "Winter";
    }
    isNightTime() {
        let h = this.date.getHours();
        if (h >= 19 || h <= 5)
            return 1;
        else
            return 0;
    }
    getStatus() {
        return {
            isNightTime: this.isNightTime(),
            season: this.getSeason(),
            temperature: this.temperature,
            time: [this.date.getHours(), this.date.getMinutes()],
            date: [this.date.getDate(), this.date.getMonth() + 1, this.date.getFullYear()],
            personsInLivingRoomLivingArea: this.personsInLivingRoomLivingArea,
            personsInLivingRoomDiningArea: this.personsInLivingRoomDiningArea
        }
    }
    increaseTemperature() {
        this.temperature += 1;
        return {
            temperature: this.temperature
        }
    }
    decreaseTemperature() {
        this.temperature -= 1;
        return {
            temperature: this.temperature
        }
    }
    getTemperatureBasedOnMonthAndTime() {
        let m = this.date.getMonth();
        let n = this.isNightTime();
        if (m == 0 && n == 0)
            return 20;
        else if (m == 0 && n == 1)
            return 8;
        else if (m == 1 && n == 0)
            return 24;
        else if (m == 1 && n == 1)
            return 11;
        else if (m == 2 && n == 0)
            return 30;
        else if (m == 2 && n == 1)
            return 16;
        else if (m == 3 && n == 0)
            return 37;
        else if (m == 3 && n == 1)
            return 23;
        else if (m == 4 && n == 0)
            return 40;
        else if (m == 4 && n == 1)
            return 27;
        else if (m == 5 && n == 0)
            return 39;
        else if (m == 5 && n == 1)
            return 28;
        else if (m == 6 && n == 0)
            return 35;
        else if (m == 6 && n == 1)
            return 28;
        else if (m == 7 && n == 0)
            return 34;
        else if (m == 7 && n == 1)
            return 27;
        else if (m == 8 && n == 0)
            return 34;
        else if (m == 8 && n == 1)
            return 25;
        else if (m == 9 && n == 0)
            return 33;
        else if (m == 9 && n == 1)
            return 21;
        else if (m == 10 && n == 0)
            return 28;
        else if (m == 10 && n == 1)
            return 14;
        else if (m == 11 && n == 0)
            return 22;
        else if (m == 11 && n == 1)
            return 9;
    }

    increaseHours() {
        this.date.setHours(this.date.getHours() + 1);
        this.temperature = this.getTemperatureBasedOnMonthAndTime();
        return {
            isNightTime: this.isNightTime(),
            season: this.getSeason(),
            time: [this.date.getHours(), this.date.getMinutes()],
            date: [this.date.getDate(), this.date.getMonth() + 1, this.date.getFullYear()],
            temperature: this.temperature
        }
    }
    decreaseHours() {
        this.date.setHours(this.date.getHours() - 1);
        this.temperature = this.getTemperatureBasedOnMonthAndTime()
        return {
            isNightTime: this.isNightTime(),
            season: this.getSeason(),
            time: [this.date.getHours(), this.date.getMinutes()],
            date: [this.date.getDate(), this.date.getMonth() + 1, this.date.getFullYear()],
            temperature: this.temperature
        }
    }
    changeDayNight() {
        this.date.setHours(this.date.getHours() + 12)
        this.temperature = this.getTemperatureBasedOnMonthAndTime()
        return {
            isNightTime: this.isNightTime(),
            season: this.getSeason(),
            time: [this.date.getHours(), this.date.getMinutes()],
            date: [this.date.getDate(), this.date.getMonth() + 1, this.date.getFullYear()],
            temperature: this.temperature
        }
    }
    increaseMonth() {
        this.date.setMonth(this.date.getMonth() + 1);
        this.temperature = this.getTemperatureBasedOnMonthAndTime()
        return {
            isNightTime: this.isNightTime(),
            season: this.getSeason(),
            time: [this.date.getHours(), this.date.getMinutes()],
            date: [this.date.getDate(), this.date.getMonth() + 1, this.date.getFullYear()],
            temperature: this.temperature
        }
    }
    decreaseMonth() {
        this.date.setMonth(this.date.getMonth() - 1);
        this.temperature = this.getTemperatureBasedOnMonthAndTime()
        return {
            isNightTime: this.isNightTime(),
            season: this.getSeason(),
            time: [this.date.getHours(), this.date.getMinutes()],
            date: [this.date.getDate(), this.date.getMonth() + 1, this.date.getFullYear()],
            temperature: this.temperature
        }
    }
    changeSeason() {
        this.date.setMonth(this.date.getMonth() + 3)
        this.temperature = this.getTemperatureBasedOnMonthAndTime()
        return {
            isNightTime: this.isNightTime(),
            season: this.getSeason(),
            time: [this.date.getHours(), this.date.getMinutes()],
            date: [this.date.getDate(), this.date.getMonth() + 1, this.date.getFullYear()],
            temperature: this.temperature
        }
    }

    increasePersonsInLivingArea() {
        this.personsInLivingRoomLivingArea += 1;
        return {
            personsInLivingRoomLivingArea: this.personsInLivingRoomLivingArea
        }
    }

    decreasePersonsInLivingArea() {
        this.personsInLivingRoomLivingArea = this.personsInLivingRoomLivingArea == 0 ? 0 : this.personsInLivingRoomLivingArea - 1;
        return {
            personsInLivingRoomLivingArea: this.personsInLivingRoomLivingArea
        }
    }

    increasePersonsInDiningArea() {
        this.personsInLivingRoomDiningArea += 1;
        return {
            personsInLivingRoomDiningArea: this.personsInLivingRoomDiningArea
        }
    }

    decreasePersonsInDiningArea() {
        this.personsInLivingRoomDiningArea = this.personsInLivingRoomDiningArea == 0 ? 0 : this.personsInLivingRoomDiningArea - 1;
        return {
            personsInLivingRoomDiningArea: this.personsInLivingRoomDiningArea
        }
    }
}

module.exports = Environment;