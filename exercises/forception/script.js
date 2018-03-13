// var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];

// var alphabet = "abcdefghijklmnopqrstuvwxyz";

// var newArr = [];
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function createArr(arr, str) {
var newArr = [];    
    for (i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        for (j = 0; j < str.length; j++) {
            newArr.push(str[j].toUpperCase())
        }
    } 
    return newArr;
}

console.log(createArr(people, alphabet));