const log = console.log;
// // #1 Green Circle
// function collectAnimals(...collectAnimals) {
//     return collectAnimals;
// }

// log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// // #2 Green Circle
// const fruit = ["apple", "pear"];
// const sweets = ["cake", "pie"];
// const vegetables = ["carrit"];

// const food = { fruit, sweets, vegetables };

// log(food);

// // #3 Green Circle
// const vacation = {
//     location: "Burly Idaho",
//     duration: "2 weeks"
// };

// const { location, duration } = vacation;

// log(`We're going to have a good time in ${location} for ${duration}`);

// // #4 Green Circle
// const [firstItem] = items;

// // #5 Green Circle
// const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// const [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder;

// log(`My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`);

// // #1 Blue Square
// function combineAnimals(...combineAnimals) {
//     return combineAnimals;
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// // #1 Black Diamond
// function product(...product) {
//     return numbers(function (acc, number) {
//         return acc * number;
//     }, 1)
// };

// // #2 Black Diamond
// function unshift(...unshift) {
//     return unshift(...a, ...b, ...c, ...d, ...e, ...array);
// };

// #1 Double Black Diamond
function populatePeople(names) {
    return names.map(function (name) {
        name = name.split(" ");
        let [firstName, lastName] = name
        return {
            firstName,
            lastName
        }
    })
}

log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));

//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]