
console.log("Welcome to the Business Name Generator!");

let userInput = prompt("Enter a number (1, 2, or 3):");
userInput = Number(userInput);

let adjectives1 = "Crazy";
let adjectives2 = "Amazing";
let adjectives3 = "Fire";

let shopNames1 = "Engine";
let shopNames2 = "Foods";
let shopNames3 = "Garments";

let anotherWords1 = "Limited";
let anotherWords3 = "Hub";

if (userInput == 1) {
    console.log("your business name: " + `${adjectives1} ${shopNames1} ${anotherWords1}`);
}
else if (userInput == 2) {
    console.log("your business name: " + `${adjectives2} ${shopNames2} ${anotherWords1}`);
}
else if (userInput == 3) {
    console.log("your business name: " + `${adjectives3} ${shopNames3} ${anotherWords3}`);
}
