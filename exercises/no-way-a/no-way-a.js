var aVar = "Ally ate apples in an archway.";

let removeA = function(str) {
    console.log(str.toLowerCase().replace(/a/g, ""));
}

removeA(aVar);