// #1
let arr = [3, 6, 8, 2];

function fiveAndGreaterOnly(arr) {
    return arr > 5;
};

console.log(arr.filter(fiveAndGreaterOnly));
// [6, 8]  

// #2
let arr2 = [3, 6, 8, 2];

function evensOnly(arr) {
    return (arr % 2 === 0);
};

console.log(arr2.filter(evensOnly));
// [6, 8, 2]

// #3
let arrOutside = ["dog", "wolf", "by", "family", "eaten", "camping"]

function fiveCharactersOrFewerOnly(arr) {
return (arr.length <= 5)
}

console.log(arrOutside.filter((fiveCharactersOrFewerOnly))); 
// ["by", "dog", "wolf", "eaten"]  

// #4
let people = [  
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
];

function peopleWhoBelongToTheIlluminati(arr){
    return (arr.member === true);
}

console.log(people.filter(peopleWhoBelongToTheIlluminati));

// #5
people2 = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

function ofAge(arr){
    return (arr.age >= 18);
}

console.log(people2.filter(ofAge));