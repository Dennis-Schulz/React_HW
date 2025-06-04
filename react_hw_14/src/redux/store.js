import { createStore } from "redux";
import userInfoReducer from "./reducers";

const store = createStore(userInfoReducer);

export default store;