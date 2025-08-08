// console.log("This is a for loop example.");


// for (let i = 0; i < 5; i++) {
//     console.log("Iteration number: " + i);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log("Number:", i);
// }
// --------------------------------------------------------------------------------------------------

// console.log("This is a for-in loop example.");

// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// for (const key in obj) {
    
//         const element = obj[key];
//         // console.log(`Key: ${key}, Value: ${element}`);
//         // console.log(element);
        
    
// }

// ----------------------------------------------------------------------------------------------------
// console.log("This is a for-of loop example.");

// let object = {    name: "John",
//     age: 30,
//     city: "New York"
// };
// for (const key of Object.keys(object)) {
//     console.log(`Key: ${key}, Value: ${object[key]}`);
//     // console.log(object[key]);
// }

// ==============================================================-----------------------------
// console.log("This is a while loop example.");
// let i = 0;
// while (i < 66666) {
//     console.log("Iteration number: " + i);
//     i++;
// }
// ==============================================================-----------------------------
// console.log("This is a do-while loop example.");
// let j = 0;
// do {
//     console.log("Iteration number: " + j);
//     j++;
// } while (j < 5);
// ==============================================================-----------------------------

// wap in js to print the marks of a student in an object using for-in loop 
// obj = {
//     harry: 98,
//     rohan: 70,
//     aakash: 75,
//     rahul: 90
// };


// let obj = {
//     harry: 98, 
//     rohan: 70,
//     aakash: 75,
//     rahul: 90
// };

// for (let key in obj) {
    
//        console.log(`${key} scored ${obj[key]}`);
// }

// ==============================================================-----------------------------

// wap in js to print the marks of a student in an object using for loop 
// obj = {
//     harry: 98,
//     rohan: 70,
//     aakash: 75,
//     rahul: 90
// };

// let obj = {
//     harry: 98,
//     rohan: 70,
//     aakash: 75,
//     rahul: 90
// };

// let keys = Object.keys(obj);

// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i] + " scored " + obj[keys[i]]);
// }
// ==============================================================-----------------------------
// wap in js tp print "try again" until the user enters the correct number
// let correctNumber = 7;
// let userInput;

// while (true) {
//     userInput = Number(prompt("Guess the number:"));

//     // userInput = prompt("Guess the number:");
//     // userInput = Number(userInput); // convert string to number

//     if (userInput === correctNumber) {
//         console.log("Correct! 🎉");
//         break;
//     } else {
//         console.log("Try again");
//     }
// }

