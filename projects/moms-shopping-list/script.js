let form = document.getElementById("form");
let ul = document.getElementById("ul");
let title = document.getElementsById("title");
let addButt = document.getElementById("addButt");

let li = document.createElement("li");

let checkbox = document.createElement("input");
checkbox.type = "checkbox";

let label = document.createElement("label");
label.innerText = item;

let deleteButt = document.createElement("button");
deleteButt.innerText = "X";
deleteButt.classList("deleteButt");

deleteButt.addEventListener("click", () => {
    event.preventDefault();
    let li = this.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
});

addButt.addEventListener("click", (event, target) => {
    // event.preventDefault();
    li.appendChild(title.value);
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButt);
    return li;
    // form.reset();
});

// function addNewItem() {
//     event.preventDefault();
//     let li = createNewItem(title.value);
//     form.reset();
// }

// function deleteItem() {
//     event.preventDefault();
//     let li = this.parentNode;
//     let ul = li.parentNode;
//     ul.removeChild(li);
// }