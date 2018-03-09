var form = document.getElementById("submit");
var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var ageInput = document.getElementById("age");
var genderInput = document.getElementsByName("gender");
var female = document.getElementById("female");
var male = document.getElementById("male");
var jenner = document.getElementById("jenner");
var ratherNot = document.getElementById("ratherNot");
var destinationInput = document.getElementById("destination");
var vegan = document.getElementById("vegan");
var vegitarian = document.getElementById("vegitarian");
var solelyCarnivorous = document.getElementById("solelyCarnivorous");
var kosher = document.getElementById("kosher");
var submit = document.getElementById("submit");

var data = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    dietaryRestrictions: []
}

// First Name Function
firstNameInput.addEventListener("input", function (event) {
    data.firstName = event.target.value;
    console.log(data);
});

// Last Name Function
lastNameInput.addEventListener("input", function (event) {
    data.lastName = event.target.value;
    console.log(data);
});

//Age Function
ageInput.addEventListener("input", function (event) {
    data.age = event.target.value;
    console.log(data);
});

// Gender Function
function genderFunc (event) {
    data.gender = event.target.value
}

female.addEventListener("change", genderFunc);
male.addEventListener("change", genderFunc);
jenner.addEventListener("change", genderFunc);
ratherNot.addEventListener("change", genderFunc);

//Location Function
destinationInput.addEventListener("input", function (event) {
    data.destination = event.target.value;
    console.log(data);    
});

// Dietary Restrictions Function
function dietaryFunc(event) {
    if (event.target.checked) {
        data.dietaryRestrictions.push(event.target.name);
    } else {
        var index = data.dietaryRestrictions.indexOf(event.target.name);
        data.dietaryRestrictions.splice(index, 1);
    }
    console.log(data.dietaryRestrictions);
}

vegan.addEventListener("change", dietaryFunc);

vegitarian.addEventListener("change", dietaryFunc);

solelyCarnivorous.addEventListener("change", dietaryFunc);

kosher.addEventListener("change", dietaryFunc);



//Alert Function
function submitButton (event) {
        alert("First Name: " + data.firstName + "\n" + "Last Name: " + data.lastName + "\n" + "Age: " + data.age + "\n" + "Gender: " + data.gender + "\n" + "Location: " + data.destination + "\n" + "Dietary Restrictions: " + data.dietaryRestrictions.join(", "));
    };