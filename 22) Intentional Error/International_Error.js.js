"use strict";
// Creating an array
let myArray = [1, 2, 3, 4, 5];
try {
    // Trying to access an index that doesn't exist
    console.log(myArray[10]);
}
catch (error) {
    // Handling the index error
    if (error instanceof RangeError) {
        console.log("Index Error:", error.message);
        console.log("The index is out of range. Please choose a valid index.");
    }
    else {
        console.log("An unexpected error occurred:", error);
    }
}
// Correcting the error
// Changing the index to a valid one
myArray[2] = 30;
// Printing the corrected array
console.log("Corrected array:", myArray);
