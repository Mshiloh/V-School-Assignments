// #1
data = ([
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: ["dog", "cat"]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: ["dog"]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: ["cat", "parrot"]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 13,
        pets: ["cat", "parrot", "dog"]
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27,
        pets: ["dog"]
    }
]);

const sortedDogOwners = arr =>
    arr.filter(person => person.pets.includes("dog"))
        .sort((person1, person2) => person1.age - person2.age);

console.log(sortedDogOwners(data));


// #2
moreData = ([
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil' Alfred", "Alfie", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charlie"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin Man"]
            },
            {
                name: "Squanchy",
                type: "cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffles",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
]);

const arbitraryPractice = arr =>
    arr.filter(
        person => person.age > 20
            && person.pets.every(pet => pet.nickNames.length > 0)
            && person.pets.some(pet => pet.type === "dog")
    )
        .reduce((result, person) => [...result, ...person.pets.map(pet => `<li>${pet.name}</li>`)], []);



console.log(arbitraryPractice(moreData));

// Should return:
// ['<li>Alfred</li>',
//  '<li>Charles</li>',
//  '<li>Bark Obama</li>', 
//  '<li>Christopher George Latore Wallace</li>',
//  '<li>Morty Jr.</li>', 
//  '<li>Snuffels</li>']

/*
mul-arr-prac.js
*/