const myUrl = "https://api.vschool.io/morgan/todo/";
const form = document.getElementById("form");
const ul = document.getElementById("ul");

form.addEventListener("submit", e => {
    let {
        title,
        description,
        price
    } = e.target;
    e.preventDefault();
    const data = {};
    data.title = title.value;
    data.description = description.value;
    data.price = price.value;
    axios.post(myUrl, data).then(response => {
        const todo = response.data;
        addTodoToDom(todo);
        form.reset();
    })
})

const addTodoToDom = todo => {
    const li = document.createElement("li");
    const {
        title,
        description,
        price,
        _id,
        completed
    } = todo;
    if (completed) li.classList.add("completed");
    const titleEl = document.createElement("label");
    titleEl.innerHTML = title;
    titleEl.htmlFor = _id;
    titleEl.classList.add("titleEl");
    const descriptionEl = document.createElement("p");
    descriptionEl.innerHTML = "Details: " + description;
    descriptionEl.classList.add("descriptionEl");
    const priceEl = document.createElement("p");
    priceEl.innerHTML = "Price: $" + todo.price;
    priceEl.classList.add("priceEl");

    const deleteButt = document.createElement("button")
    deleteButt.innerHTML = "X";
    deleteButt.classList.add("deleteButt");
    deleteButt.addEventListener("click", () => {
        axios.delete(myUrl + _id).then(response => {
            ul.removeChild(li);
        })
    });

    const checkbox = document.createElement("input");
    checkbox.id = _id;
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", e => {
        const {
            checked
        } = e.target;
        axios.put(myUrl + _id, {
            completed: checked
        }).then(reponse => {
            li.classList.toggle("completed")
        })
    });
    li.appendChild(deleteButt);        
    li.appendChild(checkbox);
    li.appendChild(titleEl);
    li.appendChild(descriptionEl);
    li.appendChild(priceEl);
    ul.appendChild(li);
}

window.addEventListener("load", function () {
    axios.get(myUrl).then(response => {
        response.data.forEach(addTodoToDom);
    })
});