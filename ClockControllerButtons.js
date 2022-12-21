export default class ClockControllerButtons {
    constructor(model) {
        this.model = model;

    };
    startClickHandler(callback) {
        this.model.start(callback);
    };
    stopClickHandler() {
        this.model.stop();
    };
    get hour() {
        return this.model.hour
    };
    get min() {
        return this.model.min
    };
    get sec() {
        return this.model.sec;
    };
    get curentTown() {
        return this.model.town[this.model.carrentUTC];
    }
}