import { ProductsAction, ProductsActionTypes, ProductsState } from "../../types/products";

const initialState: ProductsState = {
	products: [],
	isLoading: false
}

export const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
	switch (action.type) {
		case ProductsActionTypes.SET_PRODUCTS:

			return { ...state, products: action.products, isLoading: false }

		case ProductsActionTypes.TOGGLE_LOADING:
			return { ...state, isLoading: action.isLoading }

		default:
			return { ...state }
	}
}