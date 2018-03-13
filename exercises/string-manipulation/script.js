var readline = require("readline-sync");
var log = console.log;

// #1
var name = readline.question("What is your name?");
var hello = ("hello " + name + "!");
var nameResult = hello.toUpperCase();
console.log(nameResult);

// #2
var animal = readline.question("What is your favorite animal?");
var animalPerson = ("I knew you were a " + animal + " person!");
console.log(animalPerson);
var animalResult = animalPerson.length;
log(animalResult);

// #3
var movie1 = readline.question("What is one of your favorite movies?");
var movie2 = readline.question("What is another one of your favorite movies?");
var movieResult1 = ("I also like " + "'" + movie1 + "'");
var movieResult2 = (" and " + "'" + movie2 + "'" + ".");
var movieResult = movieResult1.concat(movieResult2);
log(movieResult);

// #4
var quote = readline.question("What is one of your all-time favorite quotes?");
var quoteChar = quote.length;
var cutAt = (quoteChar / 2);
var quoteResult = (quote.slice(cutAt, quoteChar));
log(quoteResult);

// #5
var quoteIndex = readline.question("Where would you like to begin your quote?");
log(quote.slice(quoteIndex));


