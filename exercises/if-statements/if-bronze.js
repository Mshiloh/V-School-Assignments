//Bronze 1

var person = {  
    name: "Bobby",
    age: 12
  }

if(person.age >= 18) {
console.log(person.name + " is allowed to go to movie.");
} else if (person.age <= 18) {
    console.log(person.name + " is not allowed to go to movie.");
}


//Bronze 2

if (person.name.startsWith("B")) {
    console.log(person.name + " is allowed to go to movie.");
    }


//Bronze 3

if (person.name.startsWith("B") && person.age >= 18) {
    console.log(person.name + " is allowed to go to movie.");
    } else if (person.age <= 18) {
        console.log(person.name + " is not allowed to go to movie.");
    }