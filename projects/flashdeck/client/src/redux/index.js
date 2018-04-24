import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import decksReducer from "./decks.js";
import cardsReducer from "./cards.js";

const store = createStore(combineReducers({ decks: decksReducer, cards: cardsReducer }), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;