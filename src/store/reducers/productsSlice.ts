import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product, ProductsState, ProductFromDB } from '../../utils/types/products'
import { getProducts } from '../actionCreators/productsAction'

const initialState: ProductsState = {
	products: [],
	isLoading: false,
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: {
		[getProducts.fulfilled.type]: (state, action: PayloadAction<ProductFromDB[]>) => {
			state.products = action.payload
			state.isLoading = false
		},
		[getProducts.pending.type]: (state) => {
			state.isLoading = true
		},
	},
})

export default productsSlice.reducer
