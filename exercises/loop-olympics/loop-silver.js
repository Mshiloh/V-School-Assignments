//Silver 1

var peopleArray = [  
    {
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

var nameResult = [];

var occupationResult= [];

for (var i = 0; i < peopleArray.length; i++) {
    nameResult.push(peopleArray[i] ["name"]);
    occupationResult.push(peopleArray[i][ "occupation"]);
}

console.log(nameResult);

console.log(occupationResult);


//Silver 3

var nameResult = [];

var occupationResult= [];

for (var i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    nameResult.push(peopleArray[i].name);
  } else {
    occupationResult.push(peopleArray[i].occupation);
  }
}

console.log(occupationResult);

console.log(nameResult);