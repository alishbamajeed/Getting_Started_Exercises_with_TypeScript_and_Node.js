"use strict";
function describeCity(city, country = 'USA') {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("New York");
describeCity("London", "United Kingdom");
