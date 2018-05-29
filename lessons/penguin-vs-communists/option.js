
console.log("The Penguins and Communists have been in a brutal war since the dawn of time... Well, actually, since the Communists killed the Penguins' favorite comedian in World War II. Anyway, let the battle begin...")

//define attackers and attackees
let attackerParty = "";
let attckedParty = "";

//create party constructor function
class Party {
    constructor(name, population) {
        {
            this.name = name;
            this.population = population;
        }
        function play() {
            return this.attack();
        }
        function attack() {
            //flip a coin to generate random number between 1 and 2 to see which party attacks first    
            function flipCoin() {
                return Math.floor(Math.random() * 2) + 1;
            }
        }

        //randomly choose a party from the object to be attacked
        function party() {
            let partyResult = flipCoin();
            if (partyResult === 1) {
                attackerParty = penguins
                attckedParty = communists
                return attackerParty;

            } else {
                attackerParty = communists
                attckedParty = penguins
                return attackerParty;

            }
        }

        //random damage amount
        function randomDamage() {
            return Math.floor(Math.random() * 100) + 500;
        }

        //callback function that will be called if the attack is successful
        function onHit(party) {
            console.log(`The ${attackerParty}' nuke missed the ${attckedParty} and hit a class of deaf children in a horseracing arena!`);
            return party.population === party.population - randomDamage();
        }

        //callback function that will be called if the attack is unsuccessful
        function onMiss(party) {
            console.log(`The ${attackerParty}' nuke hit the ${attckedParty} and destroyed their pride!`);
        }

        //create attack component and function
        function sendNuke(party, onHit, onMiss) {
            return
            party();
            onHit(party);
            onMiss(party);
        }
    }

};

//instantiate penguin and communist parties
const penguins = new Party("Penguins", 100000000);
const communists = new Party("Communists", 100000000);