let names: string[] = ["Maria", "Mariyam", "Sakeena", "Areeba"];
let greetingMessage: string = "Asalam-o-Alikum, ";

// Printing a personalized message to each person
console.log("Sending greetings:");
for (let i = 0; i < names.length; i++) {
    console.log(`${greetingMessage}${names[i]}!`);
}
