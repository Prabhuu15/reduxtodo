import { legacy_createStore } from "redux";
import todoReducer from "./reducer";

const Countstore=legacy_createStore(todoReducer)
export default Countstore