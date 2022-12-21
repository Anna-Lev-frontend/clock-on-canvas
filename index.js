import Clock from "./clock.js";
import ClockControllerButtons from "./ClockControllerButtons.js";
import ClockViewCanvas from "./ClockViewCanvas.js";

const getControllerWithModel = (num = 0) => {
    const model = new Clock(num);
    const controller = new ClockControllerButtons(model);
    
    return controller;
}


// главная функция запуска
const main = () => {
    const viewDom = new ClockViewCanvas(getControllerWithModel(3));
    viewDom.render();
};
main();





