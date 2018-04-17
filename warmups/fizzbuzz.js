function fizzBuzz() {
    var arrFizzBuzz = [];
    for (i = 1; i <= 100; i++) {
        if ((i % 5 === 0) && (i % 3 === 0)) {
            arrFizzBuzz.push("fizzbuzz");
        } else if (i % 3 === 0) {
            arrFizzBuzz.push("fizz");
        } else if (i % 5 === 0) {
            arrFizzBuzz.push("buzz");
        } else {
            arrFizzBuzz.push(i);
        } /*return below works because the return statement is placed outside of the 
        for loop, therefore it doesn't just end the function before it's finished */
    } return arrFizzBuzz;
}

console.log(fizzBuzz());