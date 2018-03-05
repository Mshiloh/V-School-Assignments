//Practice #1

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

var compNum = 0;

for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        compNum++;
    }
}

console.log(compNum);


//Practice #2

var peopleWhoWantToSeeMadMaxFuryRoad = [{
    name: "Mike",
    age: 12,
    gender: "male"
}, {
    name: "Madeline",
    age: 80,
    gender: "female"
}, {
    name: "Cheryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}]

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough.")
    }
}

//Bonus Challenge

var peopleWhoWantToSeeMadMaxFuryRoad = [{
    name: "Mike",
    age: 12,
    gender: "male"
}, {
    name: "Madeline",
    age: 80,
    gender: "female"
}, {
    name: "Cheryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}]

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let him in.")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, he's not allowed in.")
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let her in.")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, she's not allowed in.")
    }
}