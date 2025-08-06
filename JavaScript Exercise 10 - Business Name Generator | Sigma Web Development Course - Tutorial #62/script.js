/* create a business name generator by combining lista of adjectives and shop name and another word

adjectives :
Crazy
amazing
fire

shop name:

Engine
foods
garments

another word:
bros
limited
hub


*/


// my sol----------------------------------

// console.clear();



// console.log("Welcome to the Business Name Generator!");

// let userInput = prompt("Enter a number (1, 2, or 3):");
// userInput = Number(userInput);

// let adjectives1 = "Crazy";
// let adjectives2 = "Amazing";
// let adjectives3 = "Fire";

// let shopNames1 = "Engine";
// let shopNames2 = "Foods";
// let shopNames3 = "Garments";

// let anotherWords1 = "Limited";
// let anotherWords3 = "Hub";

// if (userInput == 1) {
//     console.log("your business name: " + `${adjectives1} ${shopNames1} ${anotherWords1}`);
// }
// else if (userInput == 2) {
//     console.log("your business name: " + `${adjectives2} ${shopNames2} ${anotherWords1}`);
// }
// else if (userInput == 3) {
//     console.log("your business name: " + `${adjectives3} ${shopNames3} ${anotherWords3}`);
// }



// code with harry sol-------------
//  let rand = Math.random()
//         let first, second, third;
//         // 0 0.33 0.66 1


//         // Lets generate the first word
//         if(rand<0.33){
//             first = "Crazy"
//         }
//         else if(rand<0.66 && rand>=0.33){
//             first = "Amazing"
//         }
//         else{
//             first = "Fire"
//         }

//         // Lets generate the second word
//         rand = Math.random()
//         if(rand<0.33){
//             second = "Engine"
//         }
//         else if(rand<0.66 && rand>=0.33){
//             second = "Foods"
//         }
//         else{
//             second = "Garments"
//         }

//         // Lets generate the third word
//         rand = Math.random()
//         if(rand<0.33){
//             third = "Bros"
//         }
//         else if(rand<0.66 && rand>=0.33){
//             third = "Limited"
//         }
//         else{
//             third = "Hub"
//         }

//         console.log(`${first} ${second} ${third}`)

// another good sol we can consider for more knowledge-------------

// let obj1 = {
//     1: "Crazy",
//     2: "Amazing",
//     3: "Fire"
// }
// let obj2 = {
//     1: "Engine",
//     2: "Foods",
//     3: "Garments"
// }
// let obj3 = {
//     1: "Bros",
//     2: "Limited",
//     3: "Hub"
// }

// var ran1= Math.floor(Math.random() * 3) + 1;
// var ran2= Math.floor(Math.random() * 3) + 1;
// var ran3= Math.floor(Math.random() * 3) + 1;    

// console.log(`${obj1[ran1]} ${obj2[ran2]} ${obj3[ran3]}`);