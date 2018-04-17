const multiD1 = [
    [1, 2, 3],
    //tp refer to array within array > [0] [0] (first 0 = first full arr, second 0 = first index of first arr)
    ["a", "b", "c"],
    [true, true, true]
]

const multiD2 = [
    [true, false, true],
    [false, false, true]
]

The OLD way
const checkTypes = input => {
    const test = input[0][0];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[j].length; j++) {
            if (typeof test !== input[i][j]) {
                return false;
            }
        }
    }
    return true;
};

//The NEW way... the every way... the ES6exy way...
const checkTypes = input =>
    input.every(subArr =>
        subArr.every(item =>
            typeof item === typeof input[0][0]));

console.log(checkTypes(multiD1));
console.log(checkTypes(multiD2));