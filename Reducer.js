import { combineReducers } from "redux";
import homeReducer, { HOME_REDUCER_NAME } from "./screens/home/reducer.js";

const reducers = {};
reducers[HOME_REDUCER_NAME] = homeReducer;

const rootReducer = combineReducers(reducers);

export default rootReducer;
