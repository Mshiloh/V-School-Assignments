//I want the user to be able to type data into a form
//When they're done typing, they will submit the form
//THen I want them to see what they just typed

var form = document.getElementById("submit");
var p = document.getElementById("output");
var input = document.getElementById("input");

// var input1 = document.getElementById("input1")
// var input2 = document.getElementById("input2");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log(typeof input1.valueAsNumber) + input2.valueAsNumber;
// });

//target is element on which the event occurred, if element is checkbox, 
// the target is the thing that happened (i.e. it was checked)

//Example of pushing string of whatever was checked:

var data = [];

function setAllergy (event) {
    //user clicks on checkbos
    //if checked, add to the array
    console.log(event.target.checked)
    if (event.target.checked) {
data.allergies.push(event.target.name);
} else {
    //if not checked, remove form array
    //find where string is
    var index = DataCue.allergies.indexOf(event.target.name);
    data.allergies.splice(index, 1);
}
}