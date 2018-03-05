//Silver 1

var peopleArray = [{
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

for (i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}


//Silver 2

var nameArr = [];

var occupationArr = [];

for (var i = 0; i < peopleArray.length; i++) {
  nameArr.push(peopleArray[i]["name"]);
  occupationArr.push(peopleArray[i]["occupation"]);
}

console.log(nameArr);

console.log(occupationArr);


//Silver 3

var nameArr = [];

var occupationArr = [];

for (var i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    nameArr.push(peopleArray[i].name);
  } else {
    occupationArr.push(peopleArray[i].occupation);
  }
}

console.log(nameArr);

console.log(occupationArr);
