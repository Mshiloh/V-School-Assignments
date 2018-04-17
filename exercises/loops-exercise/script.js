//Exercise 1
var str = "Morgan";

function loopEx1(str) {
    for (i = 0; i < str.length; i++) {
        return str.split("");
    }
}

arrStr = loopEx1(str);

console.log(arrStr);

//Exercise 2
function loopEx2(str2, x) {
    for (i = 0; i < str2.length; i++)
        if (str2.includes(x)) {
            return str2.indexOf(x);
        } else {
            return alert("Character not found)");
        }
}

console.log(loopEx2("I sure do love Old Yeller, here's to a long, rabies-free life!", "I"));

//Exercise 3
var numArr = [1, 32, 46, 42, 76];

function loopEx3(numArr) {
    for (i = 0; i < 42; i++) {
        if (numArr.includes(42)) {
            break;
        } else {
            console.log("The number 42 is not found.");
            break;
        }
    }
}

loopEx3(numArr);

// // Exercise 4
var arr10 = [];

function createArr() {
    for (i = 1; i <= 10; i++) {
        arr10.push(i);
    }
    return arr10;
}

console.log(createArr());

function loopEx4() {
    for (i = 0; i < arr10.length; i++) {
        if (arr10[i] <= 1) {
            return (arr10[i]);
        }
    }
}

console.log(loopEx4());