// Original array of places to visit
let placesToVisit: string[] = ["london", "Paris", "Turkey", "America", "Canada"];

// Print array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

// Show that the original array is still in its original order
console.log("\nOriginal array:");
console.log(placesToVisit);

// Print array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Show that the original array is still in its original order
console.log("\nOriginal array:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show its order has changed
console.log("\nReversed order:");
console.log(placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();

// Print the array to show it's back to its original order
console.log("\nOriginal array:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();

// Print the array to show its order has changed
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the array to show its order has changed
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
