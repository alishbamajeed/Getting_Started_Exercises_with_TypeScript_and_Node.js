let age: number = 17;

switch (true) {
    case age < 2:
        console.log("The person is a baby.");
        break;
    case age < 4:
        console.log("The person is a toddler.");
        break;
    case age < 13:
        console.log("The person is a kid.");
        break;
    case age < 20:
        console.log("The person is a teenager.");
        break;
    case age < 65:
        console.log("The person is an adult.");
        break;
    default:
        console.log("The person is an elder.");
        break;
}
