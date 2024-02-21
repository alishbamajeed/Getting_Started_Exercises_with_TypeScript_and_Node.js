function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Adding "the Great" to each magician's name
magicians = make_great(magicians);

// Calling the function to show the modified magicians list
show_magicians(magicians);
