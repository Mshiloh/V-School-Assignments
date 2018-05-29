// console.log("The Penguins and Communists have been in a brutal war since the dawn of time... Well, actually, since the Communists killed the Penguins' favorite comedian in World War II. Anyway, let the battle begin...\n \n")

class Party {
    constructor(name, population) {
        {
            [
                this.name = name,
                this.population = population
            ]
        }
    }
};

const penguins = new Party("Penguins", 100000000);
const communists = new Party("Communists", 100000000);

let attackerParty = "";
let attckedParty = "";

function flipCoin() {
    return Math.floor(Math.random() * 2) + 1;
};

function party() {
    flipCoin();
    if (flipCoin() === 1) {
        attackerParty = penguins;
        attckedParty = communists;
    } else {
        attackerParty = communists;
        attckedParty = penguins;
    }
    return attackerParty
};

function onHit(party) {
    return
    console.log(`The ${attackerParty.name}' nuke missed the ${attckedParty.name} and hit a class of deaf children in a horseracing arena!`);
    Party.population === Party.population - randomDamage();
}

function onMiss(party) {
    return console.log(`The ${attackerParty.name}' nuke hit the ${attckedParty.name} and destroyed their pride!`);
}

function sendNuke(party, onHit, onMiss) {
    let damage = Math.floor(Math.random() * 100) + 500;
    flipCoin()
    if (flipCoin() === 1) {
        return attackedParty.population - damage
    }
}

sendNuke();