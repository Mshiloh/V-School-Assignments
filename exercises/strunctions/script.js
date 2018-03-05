var myFaveBook = "A Man's Search for Meaning";


var faveBook = function (str) {
    console.log(str.concat(" is my favorite book."));
}

faveBook(myFaveBook);

var findIndex = myFaveBook.indexOf("Search");

console.log(findIndex);

var findLastIndex = myFaveBook.lastIndexOf("a");

console.log(findLastIndex);

var siblingNames = "Wade Brooklynn Chaston Josiah Harrison Beau Sidney Gregory Connor Raimie Rian";

var siblingArray = siblingNames.split(" ");

console.log(siblingArray);

var myBioSiblings = function (str) {
    console.log(str.slice(0, 22).concat(" = my biological siblings"));
}

myBioSiblings(siblingNames);

var myStepSiblings = function (str) {
    console.log(str.substr(23, 69).concat(" = my step-siblings"));;
}

myStepSiblings(siblingNames);

var rhyme = "Learning how to code, always running node, brain about to explode, something else that rhymes with ode."

console.log(rhyme.match(/ode/g));

var editRyhme = function(str) {
    console.log(str.replace("brain", "level of skills..."))
}

editRyhme(rhyme);

var code = "Done With Code!"

var caseWork = code.toLowerCase();

console.log(caseWork);

console.log(caseWork.toUpperCase());
