// Initial guest list
let guestList: string[] = ["Alishba", "Manahil", "Mariyam", "Nelofar", "Nimmra", "Maheen", "Fatima"];

// Print initial invitations
console.log("Initial Invitations to Dinner:");
guestList.forEach(person => {
    console.log(`Dear ${person}, you are cordially invited to dinner with me. It would be an honor to have your presence.`);
});
console.log("\n");

// Name of the guest who can't make it
let cantMakeIt: string = guestList[1];
console.log(`Unfortunately, ${cantMakeIt} can't make it to the dinner.\n`);

// New guests to add
let newGuests: string[] = ["Nelofar", "Alishba", "Manahil"];

// Replace the guest who can't make it with a new guest
let indexToRemove: number = guestList.indexOf(cantMakeIt);
if (indexToRemove !== -1) {
    guestList.splice(indexToRemove, 1, ...newGuests);
}

// Print updated invitations
console.log("Updated Invitations to Dinner:");
guestList.forEach(person => {
    console.log(`Dear ${person}, you are cordially invited to dinner with me. It would be an honor to have your presence.`);
});
console.log("\n");

// Inform about the limited space
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.\n");

// Remove guests until only two names remain in the list
while (guestList.length > 2) {
    let removedGuest: string = guestList.pop()!;
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation to the remaining two guests
console.log(`Dear ${guestList[0]} and ${guestList[1]}, you are still invited to dinner with me. It would be an honor to have your presence.\n`);

// Remove the last two names from the list
guestList.pop();
guestList.pop();

// Print the final empty list
console.log("Final Guest List:", guestList);
