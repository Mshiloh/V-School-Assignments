var readline = require("readline-sync");
var currentEnemy = "";
var enemyGenereated = "";
var enemyHealth = 0;
var attackPower = 0;
var didNotEscape = true;

/* GREETING */
console.log("Welcome to the pure hell of \"80s RPG Fire Swamp Smackdown\"!");

/* NAME */
var userName = readline.question("\nFirst things first, what is your name?\n ");

/* WALKING */
console.log("Okay, " + userName + " enter a \"w\" to walk ten feet through the forest.");
console.log("At any time, enter \"print\" to view your stats.\n ")

/* PLAYER STATS */
var player = {
    userName: userName,
    hp: 125,
    attack: 20,
    enemiesKilled: 0,
    inventory: []
}

/* MAIN WHILE LOOP (it must remain here!) */
while (player.hp > 0 && player.enemiesKilled < 3) {
    walk = readline.question("");
    if (walk === "w") {
        enemyAppear();
    }
    if (walk === "print") {
        printPlayer();
    }
    if (player.hp < 1) {
        var killMethod = "";
        if (currentEnemy === "the King's Men") {
            killMethod = " beheaded you in the fire swamp."
        } else if (currentEnemy === "an R.O.U.S.") {
            killMethod = " gobbled up your ankles, and then the rest of you."
        } else if (currentEnemy === "the Real Dread Pirate Roberts") {
            killMethod = " seduced you, you fell in love with him, you two bought a house together in San Francisco, and then he killed you in your sleep with a phone cord."
        }
        console.log("You escaped!... this life... you're dead. " + currentEnemy + killMethod);
    } else if (player.enemiesKilled === 3){
        console.log("\nCongratulations! You won the game!")
    }
}

/* PRINT PLAYER STATS */
function printPlayer() {
    console.log(player);
}

/* GENERATE DAMAGE AMOUNT FROM ENEMY */
function genDamagePoints() {
    return Math.floor(Math.random() * 20) + 5;
}

/* HP AWARDED FOR VICTORY */
function genGainedHP() {
    return Math.floor(Math.random() * 20) + 5;
}

/* GENERATE YOUR ATTACK DAMAGE AMOUNT */
function genAttackPower() {
    return Math.floor(Math.random() * player.attack) + 10;
}

/* CHANCE OF AN ENEMY APPEARING */
function oneFourth() {
    return Math.floor(Math.random() * 3) + 1;
}

/* CHANCE OF ESCAPE vs CAUGHT */
function fiftyPercent() {
    return Math.floor(Math.random() * 2) + 1;
}

/* INVENTORY FUNCTION */
function getRandomItem() {
    //IDEA: if itemUsed === itemIndex[0] then blah blah    
    var items = ["the Golden Sword of Truth", "a rocket launcher", "a whole bunch of weed", "a food pack", "Roman's Unfying Affetion"];
    var itemIndex = Math.floor(Math.random() * items.length);
    return items[itemIndex];
}

/* GENERATE RANDOM ENEMY FUNCTION */
function genRandomEnemy() {
    var enemyTypes = ["the King's Men", "an R.O.U.S.", "the Real Dread Pirate Roberts"]
    var randomEnemyIndex = Math.floor(Math.random() * enemyTypes.length);
    //if randomEnemyIndex = whatever, then enemyHealth = whatever, etc
    enemyHealth = 50;
    currentEnemy = enemyTypes[randomEnemyIndex];
    return currentEnemy;
}

/* MAKE ENEMY APPEAR */
function enemyAppear() {
    console.log(" You're walking...")
    if (oneFourth() === 3) {
        enemyGenereated = genRandomEnemy()
        console.log("\nOh no! You've run into " + enemyGenereated + "!")
        battle();
    }
}

/* ESCAPED vs CAUGHT */
function choseToRun() {
    if (fiftyPercent() === 1) {
        console.log("\nPhew! You escaped! Enter \"w\" to continue on your journey...")
        didNotEscape = false;
    } else {
        var damageDone = genDamagePoints();
        console.log("\nThey caught you and you've been attacked! Looks like you took some damage... You've lost " + damageDone + " life-force tokens.");
        player.hp -= damageDone;
        if (player.hp < 1) {
            //You escaped... this life... You're dead.
            didNotEscape = false;
        }
    }
}

/* ATTACK FUNCTION */
function choseToAttack() {
    //IDEA: if attackPower < certain number, they miss, don't attack
    attackPower = genAttackPower();
    enemyHealth -= attackPower;
    console.log("\nGreat job! You hit them for " + attackPower + " life-force tokens!")
    //if enemy > 0, do this, if not they died and you kicked ass
    var damageDone = genDamagePoints();
    console.log("\nThe enemy has attacked back. You've taken a few hits... You've lost " + damageDone + " life-force tokens.");
    player.hp -= damageDone;
    console.log("\nYou have " + player.hp + " life-force tokens remaining.")
}

/* FIGHT or FLIGHT FUNCTION */
function battle() {
    didNotEscape = true;
    while (didNotEscape) {
        var runOrAttack = readline.question("\nDo you want to run, or attack?\n\n ");
        if (runOrAttack === "print") {
            printPlayer();
        }
        if (runOrAttack === "run") {
            choseToRun();
        } else if (runOrAttack === "attack") {
            choseToAttack();
        }
        if (player.hp < 1) {
            didNotEscape = false;
        }
        if (enemyHealth < 1 && player.hp > 0) {
            didNotEscape = false;
            var hpGained = genGainedHP();
            var itemEarned = getRandomItem();
            player.inventory.push(itemEarned);
            // Math.add(player.enemiesKilled, 1);
            player.enemiesKilled += 1;
            console.log("\nCongratulations! You defeated " + enemyGenereated + ". You have earned " + itemEarned + " and gained " + hpGained + " life-force tokens. \nTo continue on your journey, enter \"w\".")
        }
    }
}





//>>>  #4 If a wild enemy appears: 
//>>> The enemy is random (can be chosen out of a minimum of 3 different enemy names)
//--- Create constructor function to that makes a wild enemy object
//---enemies will have 3 special moves that each generate specific damage amount (1-50 pts)

//>>> The user can decide to attack or run
//var attackOrRun = readline.question("Would you like to attack or run?"

//>>> If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
//---  If else statement: run - escape vs attacked
//--- if run --> choose random number between 1 and 2, 1 = escape, 2 = attacked
//--- if 1 --> escape --> back to walking
//--- if 2 --> attacked --> call damages function below 

//>>> After the player attacks or runs the enemy attacks back for a random damage(-hp) amount
//---if ^attacked || attacks --> pull random damage data from ENEMIES based on enemy move
//--- killed enemy--->log/store damages in PLAYER STATS (+ and - hp as long as game continues, hits < 0, player dies)

//>>> If the player kills the enemy you can give the Player some (+hp) and a special item that is stored in the inventory
//--- if killed enemy --> gen random inventory item + health points


//>>> If the enemy kills the player the console prints an cool death message and the game ends
//--- console.log("cool death message"

//>>> #5 Inventory 
//>>> When the player kills enemies, they are awarded with items
//---create INVENTORY ITEMS object

//>>> If the user enters 'Print' in the console, the console will print the players name, hp, and each item in their inventory
//--- create PLAYER STATS object that stores name, health points, and items in their inventory*/