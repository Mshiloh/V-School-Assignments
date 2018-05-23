import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import postReducer from "./posts.js";
import commentReducer from "./comments.js";

const store = createStore(combineReducers({ issues: postReducer, comments: commentReducer }), applyMiddleware(thunk));

export default store;