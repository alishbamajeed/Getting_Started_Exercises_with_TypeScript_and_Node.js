interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any additional properties
}

function createCar(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): Car {
    return {
        manufacturer,
        model,
        ...extras.reduce((acc, extra) => ({ ...acc, ...extra }), {})
    };
}

// Call the function with required information and additional key-value pairs
const myCar = createCar("Ferrari", "Creamy", { color: "Mahrron" }, { year: 2024 });

// Print the object to verify all information was stored correctly
console.log(myCar);
