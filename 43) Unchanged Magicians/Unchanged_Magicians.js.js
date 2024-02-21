"use strict";
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
// Original array of magician's names
const originalMagicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Create a copy of the original array
const copiedMagicians = [...originalMagicians];
// Call make_great() with the copied array
const greatMagicians = make_great(copiedMagicians);
// Calling the function to show the original magicians list
console.log("Original Magicians:");
show_magicians(originalMagicians);
// Calling the function to show the modified magicians list
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
