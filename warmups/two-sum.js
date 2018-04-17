const twoSum = ([1, 2, 3], 4);
//returns [0, 2] because 1 + 3 equals 4

const factorial = num => {
    if (num === 1)
        return 1
    else
        return num * factorial(num - 1)
};