"use strict";
// Program: Stripping Names
// Author: [Your Name]
// Date: [Current Date]
// Description: This program demonstrates how to remove leading
// and trailing whitespace characters from a person's name.
let personNameWithWhitespace = "\t\n   Ali   \n\t";
console.log("Name with whitespace:");
console.log("'" + personNameWithWhitespace + "'");
let strippedName = personNameWithWhitespace.trim();
console.log("\nName after stripping whitespace:");
console.log("'" + strippedName + "'");
