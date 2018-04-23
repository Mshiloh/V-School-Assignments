/*
var titleCaseAllArrayItems = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var currMovie = arr[i];
        var titleCased = titleCaseIt(currMovie);
        console.log(titleCased);
    }
}

var titleCaseIt = function(str) {
    return str.split(" ").map(function(item) {
        return item[0].toUpperCase() + item.slice(1);
    }).join(" ");
}

var movies = ["a river runs through it", "star wars", "step brothers", "the matrix"]
var books = ["a river runs through it", "star wars", "where the red fern grows", "moby dick"];

titleCaseAllArrayItems(movies);
titleCaseAllArrayItems(books);  

function toTitleCase(str)
{
    return str.replace(function(txt){return txt.charAt(0).toUpperCase();
}
*/

var person = {  
    name: 'The Joker',
    type: 'evil',
    enemy: 'Batman',
    speak: function () {
        console.log('My name is ' + this.name);
        console.log('I am ' + this.type + ' and my enemy is ' + this.enemy);
    }
};

person.speak(); 