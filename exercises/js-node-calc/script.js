var readline = require("readline-sync")

var num1 = readline.question("Please enter your first number");
console.log(num1);

var num2 = readline.question("Please enter your second number");

var choice = readline.question("Please enter the operation to perform: +, -, *, /");

function numResult(choice) {
    if (choice === "+") {
        return Number(num1) + Number(num2);
    } else if (choice === "-") {
        return num1 - num2;
    } else if (choice === "*") {
        return num1 * num2;
    } else if (choice === "/") {
        return num1 / num2;
    }
}

var result = numResult(choice);

console.log("The result is " + result);