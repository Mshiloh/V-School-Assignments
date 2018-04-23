import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import weatherReducer from "./weather.js";
import hourlyReducer from "./hourly.js";

const store = createStore(combineReducers({ weather: weatherReducer, hourly: hourlyReducer }), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;