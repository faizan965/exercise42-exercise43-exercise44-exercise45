"use strict";
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName, ...options) {
    const carInfo = {
        manufacturer,
        modelName,
    };
    for (const option of options) {
        const keys = Object.keys(option);
        for (const key of keys) {
            carInfo[key] = option[key];
        }
    }
    return carInfo;
}
const myCar = createCar("Toyota", "Camry", { color: "Blue", features: "Sunroof" });
console.log(myCar);
