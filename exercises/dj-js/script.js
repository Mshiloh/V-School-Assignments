//pull box element
var box = document.getElementById("box");

//create function (use switch) to change colors based on mouse action
function boxColor(event) {
    switch (event.type) {
        case "mouseover":
            box.style.backgroundColor = "blue";
            break;
        case "mousedown":
            box.style.backgroundColor = "red";
            break;
        case "mouseup":
            box.style.backgroundColor = "yellow";
            break;
        case "dblclick":
            box.style.backgroundColor = "green";
            break;
        case "mousewheel":
            box.style.backgroundColor = "orange";
            break;
    }
}

//add event listener for each mouse action
box.addEventListener("mouseover", boxColor);
box.addEventListener("mousedown", boxColor);
box.addEventListener("mouseup", boxColor);
box.addEventListener("dblclick", boxColor);
box.addEventListener("mousewheel", boxColor);

//create a function (use switch) to change the color based on key press
//collect character codes for b, r, y, g, and o
function keyColor(event) {
    switch (event.which) {
        case 66:
            box.style.backgroundColor = "blue";
            break;
        case 82:
            box.style.backgroundColor = "red";
            break;
        case 89:
            box.style.backgroundColor = "yellow";
            break;
        case 71:
            box.style.backgroundColor = "green";
            break;
        case 79:
            box.style.backgroundColor = "orange";
            break;
    }
}

//add event listener for keyup action
window.addEventListener("keyup", keyColor);