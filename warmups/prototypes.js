const Animal = function() {
    this.hasCellWalls = false;
}

//let's use prototypal inhertiance to steal all of the properties from 'Animal'
const Mammal = function() {
    Animal.call(this);
    this.hasFur = true;
    this.liveBirth = true;
    this.singleBonedLowerJaws = true;
    this.warmBloodedMetabolism = true;
    //'this' is referring to 'Mammal',
}

const randomAnimal = new Mammal();

console.log(randomAnimal);