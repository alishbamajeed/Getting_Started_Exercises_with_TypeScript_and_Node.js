"use strict";
let current_users = ["Manahil", "Mariyam", "Nelofar", "Maheen", "Fatima"];
let new_users = ["Areeba", "Hafsa", "Alishba", "Nimra", "Hira"];
for (let new_username of new_users) {
    let username_exists = false;
    for (let current_username of current_users) {
        if (new_username.toLowerCase() === current_username.toLowerCase()) {
            username_exists = true;
            break;
        }
    }
    if (username_exists) {
        console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_username}' is available.`);
    }
}
