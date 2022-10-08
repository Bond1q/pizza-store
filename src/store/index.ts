import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import products from './reducers/productsSlice'
import cart from './reducers/cartSlice'
const reducers = combineReducers({
   products,
   cart,
})

export const store = configureStore({
   reducer: reducers,
})

export type StoreState = ReturnType<typeof reducers>
export type StoreDispatch = typeof store.dispatch
