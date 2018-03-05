//Silver 1

if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else if (null) {
    console.log("not equal at all");
}


//Silver 2

if ((1 <= 2 && 2 === 4) || (3 * 4) > 10 && (5 + 10) > 10) {
    console.log("yes");
} else {
    console.log("no")
}