import {
   CartActionTypes,
   AddProductToCartAction,
   DecreaseProductCountAction,
   IncreaseProductCountAction,
   ClearCartAction,
   DeleteProductFromCardAction,
} from '../../types/cart'
import { Product } from '../../types/products'
// import { DeleteProductFromCardAction } from './../../types/cart';

export const addProductToCart = (product: Product, count = 1): AddProductToCartAction => {
   return { type: CartActionTypes.ADD_PRODUCT_TO_CART, product, count }
}

export const deleteProductFromCart = (id: string): DeleteProductFromCardAction => {
   return { type: CartActionTypes.DELETE_PRODUCT_FROM_CART, id }
}

export const decreaseProductCount = (id: string): DecreaseProductCountAction => {
   return { type: CartActionTypes.DECREASE_PRODUCT_COUNT, id }
}

export const increaseProductCount = (id: string): IncreaseProductCountAction => {
   return { type: CartActionTypes.INCREASE_PRODUCT_COUNT, id }
}

export const clearCart = (): ClearCartAction => {
   return { type: CartActionTypes.CLEAR_CART }
}
