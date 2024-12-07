//to combine the reducer
import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
import projectReducers from "./projectReducers";

const myReducer = combineReducers({
  user: userAuthReducer,
  Projects : projectReducers,
});

export default myReducer;
