import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import bountiesReducer from "./bounties.js";

const store = createStore(combineReducers({ bounty: bountiesReducer }), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;