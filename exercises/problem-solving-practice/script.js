// #1
var largest = [3, 5, 2, 8, 1]; // => 8  

largest.sort();

console.log(largest.pop());

// #2
var arr = ["#3", "$$$", "C%4!", "Hey!", "!"];

var newArr = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i].match(/[A-z]/gi)) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);

//#3
function isDivisible(num1, num2) {
    if (num1 % num2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisible(4, 2));
console.log(isDivisible(9, 3));
console.log(isDivisible(15, 4));