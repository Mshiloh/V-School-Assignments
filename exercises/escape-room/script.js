var readline = require("readline-sync");

var name = readline.question("What is your name? ");

console.log("Hello " + name + ", you must escape this room. Choose out of the following options to try to escape: 1) Put hand in hole, 2) Find the key, or 3) Open the door");

var choice1 = readline.question("What would you like to do first?");

if (choice1 === "Find the key") {
    return correctChoice();
} else if (choice1 === "Open the door") {
    console.log("Sorry! You can't open the door without the key. Try again!")
} else if (choice1 === "Put hand in hole") {
    console.log("Uh-oh... you died... Try again! (as a zombie...)")
}

function correctChoice() {
    var choice2 = readline.question("Great! Now what would you like to do next?")    
    if (choice2 === "Open the door") {
        console.log("Congratulations! You escaped!")
    } else if (choice2 === "Put hand in hole") {
    console.log("Uh-oh... you died... Try again! (as a zombie...)")
    }
}