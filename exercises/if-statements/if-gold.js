//Gold 1

var dog = "dog";

if (typeof dog === "string") {
    console.log("dog is a string")
}


//Gold 2

var truevar = true;

if (typeof truevar === "boolean") {
    console.log("true is a boolean")
}


//Gold 3

if (typeof vartwo === "undefined") {
    console.log("variable undefined");
}


//Gold 4

var letterArr = ["A", "B", "C"];

function compareLetterVsNumber ([i], y) {
    if (letterArr[i].charCodeAt(letterArr) > y) {
        console.log(letterArr[i] + " is greater than " + y);
    } else {
        console.log(letterArr[i] + " is less than " + y);
    }
}

compareLetterVsNumber([2], 12);


//Gold 5

var myNum = 11;

if (myNum % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}