
const todoList = "https://api.vschool.io/morgan/todo/";
// const form = document.getElementById("form");
// const ul = document.getElementById("ul");

// form.addEventListener("submit", e => {
//     let {
//         title,
//         description,
//         price
//     } = e.target;
//     e.preventDefault();
//     const data = {};
//     data.title = title.value;
//     data.description = description.value;
//     data.price = price.value;
//     axios.post(myUrl, data).then(response => {
//         const todo = response.data;
//         addTodoToDom(todo);
//         form.reset();
//     })
// })

// const addTodoToDom = todo => {
//     const li = document.createElement("li");
//     const {
//         title,
//         description,
//         price,
//         _id,
//         completed
//     } = todo;
//     if (completed) li.classList.add("completed");
//     const titleEl = document.createElement("label");
//     titleEl.innerHTML = title;
//     titleEl.htmlFor = _id;
//     titleEl.classList.add("titleEl");
//     const descriptionEl = document.createElement("p");
//     descriptionEl.innerHTML = "Details: " + description;
//     descriptionEl.classList.add("descriptionEl");
//     const priceEl = document.createElement("p");
//     priceEl.innerHTML = "Price: $" + todo.price;
//     priceEl.classList.add("priceEl");

//     const deleteButt = document.createElement("button")
//     deleteButt.innerHTML = "X";
//     deleteButt.classList.add("deleteButt");
//     deleteButt.addEventListener("click", () => {
//         axios.delete(myUrl + _id).then(response => {
//             ul.removeChild(li);
//         })
//     });

//     const checkbox = document.createElement("input");
//     checkbox.id = _id;
//     checkbox.type = "checkbox"
//     checkbox.classList.add("checkbox");
//     checkbox.addEventListener("change", e => {
//         const {
//             checked
//         } = e.target;
//         axios.put(myUrl + _id, {
//             completed: checked
//         }).then(reponse => {
//             li.classList.toggle("completed")
//         })
//     });
//     li.appendChild(deleteButt);        
//     li.appendChild(checkbox);
//     li.appendChild(titleEl);
//     li.appendChild(descriptionEl);
//     li.appendChild(priceEl);
//     ul.appendChild(li);
// }

// window.addEventListener("load", function () {
//     axios.get(myUrl).then(response => {
//         response.data.forEach(addTodoToDom);
//     })
// });
// var todoUrl = "https://api.vschool.io/ben/todo/";

function createTodoProperty(elem, text) {
    var prop = document.createElement(elem);
    prop.innerHTML = text;
    return prop;
}

function createTodoInfo(todo, parent) {
    parent.appendChild(createTodoProperty("h3", todo.title));
    parent.appendChild(createTodoProperty("p", todo.description));
    parent.appendChild(createTodoProperty("p", todo.price));
}

function checkOff(label, checked) {
    if (checked) {
        label.style.textDecoration = "line-through";
    } else {
        label.style.textDecoration = "none";
    }
}

function addToDOM(todo) {

    let li = document.createElement("li");
    li.id = todo._id;

    // append todo info to the list item
    createTodoInfo(todo, li);

    // add delete button
    var button = document.createElement("button");
    button.innerText = "X";

    //tell the button to listen for clicks:
    button.addEventListener("click", function (e) {
        // remove todo from database and webpage:
        axios.delete(todoUrl + todo._id).then(function (response) {
            todoList.removeChild(li);
        })
    });
    //add button to li:
    li.appendChild(button);

    // create checkbox:
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = todo.id + "completed";
    input.checked = todo.completed;

    //create label:
    let label = document.createElement("label");
    label.innerText = "Status";
    label.htmlFor = input.id;
    //strike through label if needed:
    checkOff(li, todo.completed);
    label.appendChild(input);

    // listen for input changes:
    input.addEventListener("change", function (e) {
        let checked = e.target.checked;
        // make PUT request, sending an object with the completed property set to the input's new value:
        axios.put(todoUrl + todo._id, { completed: checked }).then(function (response) {
            checkOff(li, checked);
        })
    })
    // append label/input to li
    li.appendChild(label);

    //finally append the li element to the DOM
    todoList.appendChild(li);
}

var todoList = document.getElementById("todo-list");

axios.get(todoUrl).then(function (response) {
    var todos = response.data;
    for (var i = 0; i < todos.length; i++) {
        // create li element
        let todo = todos[i];
        addToDOM(todo);
    }
})

// posting
var form = document.getElementById("form");
var inputData = {};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // set the values of my inputs onto inputdata obj
    inputData.title = e.target.title.value;
    inputData.description = e.target.description.value;
    inputData.price = e.target.price.valueAsNumber;
    inputData.imgUrl = e.target.imgUrl.value;
    //post to server:
    axios.post(todoUrl, inputData).then(function (response) {
        var todo = response.data;
        addToDOM(todo);
    });
});