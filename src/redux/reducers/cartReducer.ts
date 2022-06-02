import { CartAction, CartActionTypes, CartState } from "../../types/cart"

const initalState: CartState = {
	totalPrice: 0,
	productsCount: 0,
	products: []
}

export const cartReducer = (state = initalState, action: CartAction): CartState => {
	switch (action.type) {
		case CartActionTypes.ADD_PRODUCT_TO_CART:
			const newPrice = state.totalPrice + action.product.price;
			const index = state.products.findIndex((product) => product.id === action.product.id)
			const newProducts = [...state.products];
			let newProductsCount = state.productsCount;
			if (index !== -1) {
				newProducts[index].count += 1;
			} else {
				newProducts.push({ ...action.product, count: 0 });
				newProductsCount += 1;
			}
			return { ...state, totalPrice: newPrice, products: newProducts, productsCount: newProductsCount }

		default:
			return { ...state }
	}
}