export default class Clock {
    constructor(carrentUTC) {
        this.carrentUTC = carrentUTC;
        this.town = {  3: 'Minsk' };
    };
    start(callback) {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                const date = new Date();
                this.hour = date.getUTCHours() + this.carrentUTC;
                this.min = date.getUTCMinutes();
                this.sec = date.getUTCSeconds();
                callback();
            }, 1000);
        }
    };
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    };

}