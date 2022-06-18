import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";

export default createStore(rootReducer);
