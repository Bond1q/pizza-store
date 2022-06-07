import { CartAction, CartActionTypes, CartState } from "../../types/cart"

const initalState: CartState = {
	totalPrice: 0,
	productsCount: 0,
	products: []
}

export const cartReducer = (state = initalState, action: CartAction): CartState => {
	let newProductsCount = state.productsCount;
	let newPrice;
	let newProducts = [...state.products];
	switch (action.type) {
		case CartActionTypes.ADD_PRODUCT_TO_CART:

			newPrice = state.totalPrice + action.product.price * action.count;
			const index = state.products.findIndex((product) => product.id === action.product.id)

			if (index !== -1) {
				newProducts[index].count += 1;
			} else {
				newProducts.push({ ...action.product, count: action.count });
				newProductsCount += 1;
			}
			return { ...state, totalPrice: newPrice, products: newProducts, productsCount: newProductsCount }


		case CartActionTypes.DELETE_PRODUCT_FROM_CART:
			newProducts = [...state.products].filter(product => product.id !== action.id);
			newProductsCount--;
			newPrice = newProducts.reduce((prevValue, currentVal) => (currentVal.price * currentVal.count), 0);
			return { ...state, products: newProducts, productsCount: newProductsCount, totalPrice: newPrice }


		case CartActionTypes.DECREASE_PRODUCT_COUNT:
			newProducts = [...state.products].filter(product => !(product.id === action.id && product.count === 1)).map(product => {
				if (product.id === action.id) {
					product.count--;
				}
				return product;
			})
			newProductsCount = newProducts.length;
			newPrice = newProducts.reduce((prevValue, currentVal) => prevValue + (currentVal.price * currentVal.count), 0);
			return { ...state, products: newProducts, productsCount: newProductsCount, totalPrice: newPrice }


		case CartActionTypes.INCREASE_PRODUCT_COUNT:
			newProducts = [...state.products].map(product => {
				if (product.id === action.id) {
					product.count++;
				}
				return product;
			})
			newProductsCount = newProducts.length;
			newPrice = newProducts.reduce((prevValue, currentVal) => prevValue + (currentVal.price * currentVal.count), 0);
			return { ...state, products: newProducts, productsCount: newProductsCount, totalPrice: newPrice }

		case CartActionTypes.CLEAR_CART:
			return { ...state, products: [], productsCount: 0, totalPrice: 0 }
		default:
			return { ...state }
	}
}