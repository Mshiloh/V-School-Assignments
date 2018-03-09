// var form = document.getElementById("calc");
var add1 = document.getElementById("add1");
var add2 = document.getElementById("add2");

function add() {
    event.preventDefault();
    var add1 = Number(document.querySelector("#add1").value)
    var add2 = Number(document.querySelector("#add2").value)
    var sum = add1 + add2;
    document.getElementById("sum").value = sum;
}


function sub() {
    event.preventDefault();
    var sub1 = Number(document.querySelector("#sub1").value)
    var sub2 = Number(document.querySelector("#sub2").value)
    var difference = sub1 - sub2;
    document.getElementById("difference").value = difference;
}

function mul() {
    event.preventDefault();
    var mul1 = Number(document.querySelector("#mul1").value)
    var mul2 = Number(document.querySelector("#mul2").value)
    var product = mul1 * mul2;
    document.getElementById("product").value = product;
}