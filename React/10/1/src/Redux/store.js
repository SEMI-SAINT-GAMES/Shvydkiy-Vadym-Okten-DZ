
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarReduser } from "./Reduser/Reduser";

const rootReduser = combineReducers({
    Cars: CarReduser
})

const store = createStore(rootReduser, applyMiddleware(thunk))
export default store