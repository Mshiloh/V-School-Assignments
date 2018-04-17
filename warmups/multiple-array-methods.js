function over18(person) {
    return person.age >= 18;
}

function byAlpha(person1, person2) {
    var ln1 = person1.lastName;
    var ln2 = person2.lastName;
    return ln1.localeCompare(ln2);
}

function sortedOfAge(arr) {
    return arr.filter(over18).sort(byAlpha);
}


console.log(sortedOfAge([{
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
}, {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
}, {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
}, {
    firstName: "Morty",
    lastName: "Smith",
    age: 13
}, {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
}]));

//arrange by age first using sort
//transform each member of the sorted array into an li string
function byAge(person1, person2) {
    var age1 = person1.age;
    var age2 = person2.age;
    return age2 - age1;
}

function toLi(person) {
    return "<li>" + person.firstName+ " " + person.lastName + " is " + person.age + "<li>";
}

function ageSortLi(arr) {
    return arr.sort(byAge).map(toLi);
}

console.log(ageSortLi(people));

function sort(arr, cb) {
    for(i=0; i < ar.length; i++) {
        cb(arr[i], arr[i + 1]);
    }
}