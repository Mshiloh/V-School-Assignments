//Using DOM

// var header = document.getElementById("header");

// var body = document.body;

var button1 = document.getElementById("button1");

button1.style = "font-size: 15px; height: 30px; width: 50px;"

button1.addEventListener("onkeypress", colorChange);

function colorChange(e) {
    console.log(e);
    if (button1.style.backgroundColor === "red") {
        button1.style.backgroundColor = "white";
    } else {
        button1.style.backgroundColor = "red";
    }
}

colorChange(e);

// header.innerHTML = "These are buttons!";
// header.id = "changeId";
// header.className = "test";
// changeId.style = "color: red; font-size: 20px; font-family: Helvetica; margin: 20px;";



// body.appendChild(header);
// append = place at the end of...

//  body.prepend(header);
//prepend = place at ther beginning of...