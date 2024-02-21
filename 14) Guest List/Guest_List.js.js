"use strict";
let guestList = ["Maria", "Sakeena", "Mariyam"];
// Printing an invitation message to each person on the guest list
console.log("Invitations to Dinner:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner with me. It would be an honor to have your presence.`);
}
