/*Objects

var ben = {
    name: "Ben",
    age: 29,
    height: 6,
    hobbies: []
};

var benAge = ben.age;
var evilTwinAge = benAge;
benAge++;

console.log(benAge);
console.log(evilTwinAge);

//Two ways to access the data at a object's property:
console.log(person.age);
console.log(person['age']);


var car {
    owner: {
        name: "Ben",
        age: 29,
        height: 6,
        hobbies: []
    },
    year: 2012
}

console.log(car.pastOWners[2].staysAtHomeWithHisMama)

//OBJECTS CAN HAVE FUNCTIONS AS PROPERTIES

var samsungGalaxyPhone = {
    turnOn: function () {
        console.log("BEEP boop WHIRRRR Chachachacha...BOOM!");
    },
    turnOff: function () {
        console.log("Already did when I turned it on");
    }
}

samsungGalaxyPhone.turnOn();
samsungGalaxyPhone.turnOff();
*/

/*this keyword

var speak = function () {
    console.log(this.sound);
}

var introduceMyself = function () {
    console.log(this);
}

var moose = {
    sound: "MRRRRROOOEEEWWWW",
    speak: speak,
    introduceMyself: introduceMyself
}

var elephant = {
    sound: "mrrrrroooooeeeeewww",
    speak: speak,
    introduceMyself: introduceMyself
}

var pig = {
    sound: "oink",
    speak: speak,
    introduceMyself: introduceMyself
}

pig.speak();
elephant.speak();
moose.speak();

moose.introduceMyself();
elephant.introduceMyself();
pig.introduceMyself();

introduceMyself();

*/
//Constructor functions
//variable name begins w/ uppercase letter

function Phone(model, type, price) {
    this.model = model;
    this.type = type;
    this.price = price;
}

var newPhone = new Phone(Samsung GalaxyS, Android, 900);

console.log(newPhone);
