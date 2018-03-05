var fruit = ["banana", "apple", "orange", "watermelon"];

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Exercise 1.
vegetables.pop();

console.log("VEGETABLES 1: ", vegetables);


//Exercise 2.
fruit.shift();

console.log("FRUIT 2: ", fruit);


//Exercise 3.
fruit.indexOf("orange");

console.log("FRUIT 3: ", fruit);


//Exercise 4.
fruit.push(1);

console.log("FRUIT 4: ", fruit);


//Exercise 5.
console.log("VEGETABLES 5: ", vegetables.length);


//Exercise 6.
vegetables.push(3);

console.log("VEGETABLES 6: ", vegetables);


//Exercise 7.
var food = fruit.concat(vegetables);

console.log("FOOD 7: ", food);


//Exercise 8.
food.splice(4, 2);

console.log("FOOD 8: ", food);


//Exercise 9.
food.reverse();

console.log("FOOD 9: ", food);


//Exercise 10.
strFood = food.join(", ");

console.log("FOOD 10: ", strFood);