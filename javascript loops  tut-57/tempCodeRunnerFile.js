let correctNumber = 5;
let userInput;
while (true) {
    userInput = parseInt(prompt("Enter a number:"));
    if (userInput === correctNumber) {
        console.log("Correct number entered!");
        break;
    } else {
        console.log("Try again.");
    }
}