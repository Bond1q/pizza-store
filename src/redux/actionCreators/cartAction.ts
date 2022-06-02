import { CartActionTypes, AddProductToCardAction, ProductForCart } from "../../types/cart";
import { Product } from "../../types/products";

export const addProductToCard = (product: Product): AddProductToCardAction => {
	return ({ type: CartActionTypes.ADD_PRODUCT_TO_CART, product })
}

