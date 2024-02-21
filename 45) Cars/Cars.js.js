"use strict";
function createCar(manufacturer, model, ...extras) {
    return Object.assign({ manufacturer,
        model }, extras.reduce((acc, extra) => (Object.assign(Object.assign({}, acc), extra)), {}));
}
// Call the function with required information and additional key-value pairs
const myCar = createCar("Ferrari", "Creamy", { color: "Mahrron" }, { year: 2024 });
// Print the object to verify all information was stored correctly
console.log(myCar);
