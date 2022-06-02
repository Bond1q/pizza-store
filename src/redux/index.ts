import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";
import { cartReducer } from './reducers/cartReducer';

const reducers = combineReducers({
	productsReducer,
	cartReducer
})
export const store = createStore(reducers, applyMiddleware(thunk))

export type ReduxState = ReturnType<typeof reducers>