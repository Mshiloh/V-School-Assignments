//Practice #1

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

function numOfItems(arr, item) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            result += numOfItems(arr[i], item);
        } else {
            if (arr[i] == item) {
                result++;
            }
        }
    }
    return result;
}

var result = numOfItems(officeItems, "computer");

console.log(result);

//Practice #2

var peopleWhoWantToSeeMadMaxFuryRoad = [  
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 

    for ( i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough.")
        } else {console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough.")}
    }