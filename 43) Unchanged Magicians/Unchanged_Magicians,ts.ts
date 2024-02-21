function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Original array of magician's names
const originalMagicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Create a copy of the original array
const copiedMagicians: string[] = [...originalMagicians];

// Call make_great() with the copied array
const greatMagicians: string[] = make_great(copiedMagicians);

// Calling the function to show the original magicians list
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Calling the function to show the modified magicians list
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
