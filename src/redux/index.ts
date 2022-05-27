import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";

const reducers = combineReducers({
	productsReducer
})
export const store = createStore(reducers, applyMiddleware(thunk))

export type ReduxState = ReturnType<typeof reducers>