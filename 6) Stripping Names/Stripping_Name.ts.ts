let personNameWithWhitespace: string = "\t \n  Ali\n\t ";

console.log("Name with whitespace:");
console.log(personNameWithWhitespace);

let strippedName: string = personNameWithWhitespace.replace(/^\s+|\s+$/g, '');

console.log("\nStripped name:");
console.log(strippedName);
