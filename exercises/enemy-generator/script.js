//Contructor function that makes an object with three properties (type, hitPoints, and defense)

var Enemy = function () {
    this.type = genRandomTypes();
    this.hitPoints = this.genHitPoints();
    this.defense = this.hitPoints * 3;
}

//Generate random types
function genRandomTypes() {
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"]
    var randomIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randomIndex];
}

//Generate hitPoints
Enemy.prototype.genHitPoints = function () {
    switch (this.type) {
        case "Ancient Dragon":
            return Math.floor(Math.random() * 21) + 80;
        case "Prowler":
            return Math.floor(Math.random() * 30) + 50;
        case "Mighty Grunt":
            return Math.floor(Math.random() * 30) + 20;
    }
}

//Generate and store 100 enemies
function printEnemies() {
    for (i = 0; i < 100; i++) {
        console.log(new Enemy());
    }
}

var generatedEnemies = printEnemies();