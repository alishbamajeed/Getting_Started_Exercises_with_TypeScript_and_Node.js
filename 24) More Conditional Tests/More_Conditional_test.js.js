"use strict";
// Tests for equality and inequality with strings
let animal = 'dog';
console.log("Is animal == 'dog'? I predict True.");
console.log(animal == 'dog');
console.log("Is animal != 'cat'? I predict True.");
console.log(animal != 'cat');
// Tests using the lower case function
let food = 'PIZZA';
console.log("Is food.toLowerCase() == 'pizza'? I predict True.");
console.log(food.toLowerCase() == 'pizza');
// Numerical tests
let num3 = 15;
let num4 = 10;
console.log("Is num3 + num4 == 25? I predict True.");
console.log(num3 + num4 == 25);
console.log("Is num3 - num4 == 5? I predict True.");
console.log(num3 - num4 == 5);
console.log("Is num3 * num4 == 150? I predict True.");
console.log(num3 * num4 == 150);
console.log("Is num3 / num4 == 1.5? I predict True.");
console.log(num3 / num4 == 1.5);
// Tests using "and" and "or" operators
let e = 30;
let f = 40;
console.log("Is e > 20 and f < 50? I predict True.");
console.log(e > 20 && f < 50);
console.log("Is e < 20 or f > 50? I predict False.");
console.log(e < 20 || f > 50);
// Test whether an item is in an array
let sports = ['football', 'basketball', 'soccer'];
console.log("Is 'soccer' in sports? I predict True.");
console.log(sports.includes('soccer'));
// Test whether an item is not in an array
console.log("Is 'baseball' not in sports? I predict True.");
console.log(!sports.includes('baseball'));
