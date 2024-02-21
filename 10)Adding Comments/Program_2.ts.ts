// Program: Stripping Names
// Author: [Your Name]
// Date: [Current Date]
// Description: This program demonstrates how to remove leading
// and trailing whitespace characters from a person's name.

let personNameWithWhitespace: string = "\t\n   Ali   \n\t";

console.log("Name with whitespace:");
console.log("'" + personNameWithWhitespace + "'");

let strippedName: string = personNameWithWhitespace.trim();

console.log("\nName after stripping whitespace:");
console.log("'" + strippedName + "'");
