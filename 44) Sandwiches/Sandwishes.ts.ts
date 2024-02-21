function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!\n");
}

// Call the function three times with different number of arguments
makeSandwich("Chicken", "Lettuce", "Tomato", "Mayo");
makeSandwich("Ketchup", "Cheese");
makeSandwich("Onion", "BBQ Sauce");
