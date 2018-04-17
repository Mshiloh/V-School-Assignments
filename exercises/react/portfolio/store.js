const redux = require("redux");

const state = {  
    counter: 0
};

function addOne() {  
    return {
        type: "INCREMENT"
    }
}

function reducer(prevState = state, action) {  
    switch(action.type) {
        case "INCREMENT":
            return {
                counter: prevState.counter + 1
            };
        default:
            return prevState;
    }
}

const store = redux.createStore(reducer);  
console.log(store.getState());  