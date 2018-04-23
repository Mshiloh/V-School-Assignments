const bensVariableNames = [];
let randWord = genRandWord();

function genRandWord() {
    let word = ["Pants", "Soup", "Asphalt", "Pottery", "Douche"];
    let wordIndex = Math.floor(Math.random() * word.length);
    return word[wordIndex];
}

function join(randWord) {
    const monkey = "monkey"
    bensVariableNames.push(monkey + randWord);
}

join(randWord);

console.log(bensVariableNames);