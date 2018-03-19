var form = document.getElementById("form");
var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var ageInput = document.getElementById("age");
var genderInput = document.getElementsByName("gender");
var female = document.getElementById("female");
var male = document.getElementById("male");
var meh = document.getElementById("meh");
var locationInput = document.getElementById("location");
var vegan = document.getElementById("vegan");
var gluten = document.getElementById("gluten");
var paleo = document.getElementById("paleo");
var dietInput = document.getElementById("diet");


var data = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    location: "",
    diet: []
}

firstNameInput.addEventListener("input", function (event) {
    data.firstName = event.target.value;
    console.log(data);
});

lastNameInput.addEventListener("input", function (event) {
    data.lastName = event.target.value;
    console.log(data);
});

ageInput.addEventListener("input", function (event) {
    data.age = event.target.value;
    console.log(data);
});

function genderFunc (event) {
    data.gender = event.target.value
}

female.addEventListener("change", genderFunc);
male.addEventListener("change", genderFunc);
meh.addEventListener("change", genderFunc);

locationInput.addEventListener("input", function (event) {
    data.location = event.target.value;
    console.log(data);    
});

function dietFunc(event) {
    if (event.target.checked) {
        data.diet.push(event.target.value);
    } else {
        var index = data.diet.indexOf(event.target.value);
        data.diet.splice(index, 1);
    }
    console.log(data.diet);
}

vegan.addEventListener("change", dietFunc);
gluten.addEventListener("change", dietFunc);
paleo.addEventListener("change", dietFunc);

function submitButton (event) {
        alert("First Name: " + data.firstName + "\nLast Name: " + data.lastName + "\nAge: " + data.age + "\nGender: " + data.gender + "\nLocation: " + data.location + "\nDietary Restrictions: " + data.diet.join(", "));
    };