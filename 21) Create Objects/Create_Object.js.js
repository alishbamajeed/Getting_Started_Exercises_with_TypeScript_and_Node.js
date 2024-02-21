"use strict";
// Define objects containing information about different cars
let cars = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2022,
        color: "Silver"
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2023,
        color: "Red"
    },
    {
        brand: "Ford",
        model: "Mustang",
        year: 2021,
        color: "Black"
    },
    {
        brand: "Tesla",
        model: "Model S",
        year: 2024,
        color: "White"
    }
];
// Print information about each car
console.log("Information about different cars:");
for (let car of cars) {
    console.log(`Brand: ${car.brand}`);
    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`Color: ${car.color}`);
    console.log("----------------------------------------");
}
