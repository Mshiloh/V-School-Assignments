//Bronze 1
var arrayVar = [];

for (var i = 0; i < 10; i++) {
    arrayVar.push(i);
}

console.log(arrayVar);

//Bronze 2
var i;

for (i = 0; i < 100; i++) {
    if ((i % 2) === 0)
    console.log(i);
}

//Bronze 3
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

var fruitTwo = [];

for (var i = 0; i < fruit.length; i++) {
    if ((i % 2) === 0)
    fruitTwo.push(fruit[i]);
}

console.log(fruitTwo);