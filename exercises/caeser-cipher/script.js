var readline = require('readline-sync');

var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

var shift = parseInt(readline.question('How many letters would you like to shift? '));

let result = "";

for (var i = 0; i < input.length; i++) {
    let inputChar = input.charCodeAt(i);

    //add spaces (space char code = 32)
    if (inputChar === 32) {
        result += " ";
    }
    //lowercase man/max char code parameters (97-122)
    if (inputChar >= 97 && inputChar <= 122) {
        //given input inputChar codes(inputChar - min inputChar + shift num) remainder 26 + min inputChar
        result += String.fromCharCode((inputChar - 97 + shift) % 26 + 97);
    }
}

console.log(result);


//Improvements & Experiments to Try:

//opt. try creating decode function 
//97 - 26 % (shift - 97 + result)
//decode using inputChar or result + 97? perhaps (inputChar or result + 97 - shift) * 26 - 97?
//nope...
// function decode (){
//     return (97 - 26) % shift - 97 + result;
// }

// let decoded = decode();

// console.log(decoded);

//opt. try: allowing all char codes to be encrypted
//remove toLowerCase, change if parameters 32-122, change % 26 to % 95 ()