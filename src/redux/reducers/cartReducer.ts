import { CartAction, CartActionTypes, CartState, ProductForCart } from "../../types/cart"
import LocalStorage from "../../utils/localStorage/localStorage";
const initalState: CartState = {
	totalPrice: 0,
	productsCount: 0,
	products: []
}

export const cartReducer = (state = initalState, action: CartAction): CartState => {
	let newProductsCount = state.productsCount, newPrice, newProducts = [...state.products],
		productsLocalStorage: CartState = {
			totalPrice: 0,
			productsCount: 0,
			products: []
		};

	const setProductsToLocalStorage = (newPrice: number,
		newProductsCount: number, newProducts: ProductForCart[]) => {
		productsLocalStorage = { totalPrice: newPrice, productsCount: newProductsCount, products: newProducts }
		LocalStorage.setProducts(JSON.stringify(productsLocalStorage))
	}

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
			setProductsToLocalStorage(newPrice, newProductsCount, newProducts)
			return { ...state, totalPrice: newPrice, products: newProducts, productsCount: newProductsCount }

		case CartActionTypes.DELETE_PRODUCT_FROM_CART:
			newProducts = [...state.products].filter(product => product.id !== action.id);
			newProductsCount--;
			newPrice = newProducts.reduce((prevValue, currentVal) => (currentVal.price * currentVal.count), 0);
			setProductsToLocalStorage(newPrice, newProductsCount, newProducts)
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
			setProductsToLocalStorage(newPrice, newProductsCount, newProducts)
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
			setProductsToLocalStorage(newPrice, newProductsCount, newProducts)
			return { ...state, products: newProducts, productsCount: newProductsCount, totalPrice: newPrice }

		case CartActionTypes.CLEAR_CART:
			LocalStorage.setProducts("")
			return { ...state, products: [], productsCount: 0, totalPrice: 0 }

		default:
			const storage = LocalStorage.getProducts();
			if (storage) {
				productsLocalStorage = JSON.parse(storage)
			}
			return { ...state, ...productsLocalStorage }
	}
}