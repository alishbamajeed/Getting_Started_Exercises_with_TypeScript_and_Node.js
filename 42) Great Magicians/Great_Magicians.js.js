"use strict";
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
// Array of magician's names
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Adding "the Great" to each magician's name
magicians = make_great(magicians);
// Calling the function to show the modified magicians list
show_magicians(magicians);
