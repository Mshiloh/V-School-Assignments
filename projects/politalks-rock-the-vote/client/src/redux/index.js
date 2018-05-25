import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postReducer from "./posts.js";

const store = createStore(combineReducers({ posts: postReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;