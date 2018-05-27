import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import postReducer from "./posts.js";
import commentReducer from "./comments.js";

const store = createStore(combineReducers({ posts: postReducer, comments: commentReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;