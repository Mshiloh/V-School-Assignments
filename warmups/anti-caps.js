var str1 = ('Hello') // hELLO  
var str2 = ('racEcar') // RACeCAR  
var str3 = ('bAnAnA') // BaNaNa

var newStr = "";

function antiCaps(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            newStr+= str[i].toUpperCase();
        }
    } return newStr;
}

console.log(antiCaps(str1));