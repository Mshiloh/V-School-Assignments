//create dictionary object
var dictionary = {};

//function should add or find given word
//add: set word as property, set definition as value to that property
//search:

function lookItUp(word, dictionary, definition) {
    if (dictionary.hasOwnProperty(word)) {
        return dictionary[word];
    } else {
        dictionary[word] = definition;
    } return true;
}

lookItUp("absquatulate", dictionary, "verb: to leave somewhere abruptly");
lookItUp("concinnity", dictionary, "adjective: elegance or neatness of literary or artistic style");
lookItUp("ecdysiast", dictionary, "noun: a striptease performer");

console.log(dictionary);
/*
node look-it-up.js
*/

//constructor function names are capitalized at the beginning
var Dictionary = function (word, definition) {
    this.content = {}
}

Dictionary.prototype.addWord = function(word, definition) {
    word = word.toLowercase();
    if (this.content.hasOwnProperty(word)) {
        throw "That word already exists"
    } else {
        this.content[word] = definition;
    }
};

Dictionary.content = "floccinaucinihilipilification", "noun: the action or habit of estimating something as worthless";

console.log(Dictionary);