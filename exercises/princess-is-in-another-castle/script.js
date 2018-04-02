class Player {
    constructor(namePicked, totalCoins, status, star) {
        this.name = namePicked;
        this.totalCoins = 0;
        this.status = "";
        this.star = false;
    }

    setName(namePicked) {
        return this.name = namePicked;
    }

    gotHit() {
        switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead"
                break;
        } return this.status;
    }

    gotPowerup() {
        switch (this.status) {
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "PoweredUp";
                break;
        } return this.status;
    }
    
    addCoin() {
        this.totalCoins + 1;
        return this.totalCoins;
    }

    print() {
        console.log(`Name: ${this.name} \n Total Coins: ${this.totalCoins} \n Status: ${this.status} \n Star: ${this.star}`);
    }
};

let result = "";

function genRanNum() {
    result = Math.floor(Math.random() * (2 - 0 + 1)) + 0;    
}

function playGame(player) {
    for (let i = 0; i <= 3; i++) {
            if (result === 0) {
                console.log(player.gotHit());
            } else if (result === 1) {
                console.log(player.gotPowerup());
            } else {
                console.log(player.addCoin());
            }
            console.log(player.print());
        }
    };

let mario = new Player ("Mario");

playGame(mario)*3;