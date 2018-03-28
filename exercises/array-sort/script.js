// #1
let numArr = [1, 3, 5, 2, 90, 20];

function leastToGreatest(arr) {
    return arr.sort(function (a, b) { return a - b });
}

console.log(leastToGreatest(numArr));
// [1, 2, 3, 5, 20, 90]

// #2
let numArr2 = [1, 3, 5, 2, 90, 20];

function greatestToLeast(arr) {
    return arr.sort(function (a, b) { return b - a });
}

console.log(greatestToLeast(numArr2));
// [90, 20, 5, 3, 2, 1] 

// #3
let randArr = ["dog", "wolf", "by", "family", "eaten"];

function lengthSort(arr) {
    // for (let i = 0; i < arr.length; i++) {
    return arr.sort(function (a, b) { return b.length - a.length });
};
// };

console.log(lengthSort(randArr));
// ["by", "dog", "wolf", "eaten", "family"]  

// #4
let alph = ["dog", "wolf", "by", "family", "eaten"];

function alphabetical(arr) {
    return arr.sort();
}

console.log(alphabetical(alph));
// ["by", "dog", "eaten", "family", "wolf"]

// #5
let ages = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
];

function byAge(arr) {
    return arr.sort(function (a, b) { return a.age - b.age });
}

console.log(byAge(ages));