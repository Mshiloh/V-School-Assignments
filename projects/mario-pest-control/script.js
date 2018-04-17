var add1 = document.getElementById("add1");
var add2 = document.getElementById("add2");
var add3 = document.getElementById("add3");

function add() {
    event.preventDefault();
    var add1 = Number(document.querySelector("#add1").value*5)
    var add2 = Number(document.querySelector("#add2").value*7)
    var add3 = Number(document.querySelector("#add3").value*11)
    
    var sum = add1 + add2 + add3;
    document.getElementById("sum").value = sum;
}