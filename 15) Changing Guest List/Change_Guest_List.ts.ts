let guestList: string[] = ["Maria", "Sakeena", "Mariyam"];

// Print initial invitations
console.log("Initial Invitations to Dinner:");
guestList.forEach(person => {
    console.log(`Dear ${person}, you are cordially invited to dinner with me. It would be an honor to have your presence.`);
});

// Name of the guest who can't make it
let cantMakeIt: string = guestList[1];
console.log(`Unfortunately, ${cantMakeIt} can't make it to the dinner.\n`);

// Replace the guest who can't make it with a new guest
guestList[1] = "Sakeena";

// Print second set of invitations
console.log("Updated Invitations to Dinner:");
guestList.forEach(person => {
    console.log(`Dear ${person}, you are cordially invited to dinner with me. It would be an honor to have your presence.`);
});
