import { Product } from "./products";

export interface CartState {
	totalPrice: number;
	productsCount: number;
	products: ProductForCart[];
}

export interface ProductForCart {
	name: string;
	price: number;
	img: string;
	id: string;
	count: number;
}

export enum CartActionTypes {
	ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
	DELETE_PRODUCT_FROM_CART = 'ADD_PRODUCT_TO_CART',
	TOGGLE_LOADING = 'TOGGLE_CART_LOADING'
}

export interface AddProductToCardAction {
	type: CartActionTypes.ADD_PRODUCT_TO_CART;
	product: Product;
}
export interface DeleteProductFromCardAction {
	type: CartActionTypes.DELETE_PRODUCT_FROM_CART;
	product: Product;
}
export interface ToggleLoadingAction {
	type: CartActionTypes.TOGGLE_LOADING;
	isLoading: boolean;
}

export type CartAction = AddProductToCardAction | DeleteProductFromCardAction | ToggleLoadingAction