import { Product } from './products'

export interface CartState {
   totalPrice: number
   productsCount: number
   products: ProductForCart[]
}

export interface ProductForCart {
   name: string
   price: number
   img: string
   id: string
   count: number
}

export enum CartActionTypes {
   ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
   DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART',
   TOGGLE_LOADING = 'TOGGLE_CART_LOADING',
   DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT',
   INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT',
   CLEAR_CART = 'CLEAR_CART',
}

export interface AddProductToCartAction {
   type: CartActionTypes.ADD_PRODUCT_TO_CART
   product: Product
   count: number
}
export interface DeleteProductFromCardAction {
   type: CartActionTypes.DELETE_PRODUCT_FROM_CART
   id: string
}
export interface DecreaseProductCountAction {
   type: CartActionTypes.DECREASE_PRODUCT_COUNT
   id: string
}
export interface IncreaseProductCountAction {
   type: CartActionTypes.INCREASE_PRODUCT_COUNT
   id: string
}
export interface ToggleLoadingAction {
   type: CartActionTypes.TOGGLE_LOADING
   isLoading: boolean
}

export interface ClearCartAction {
   type: CartActionTypes.CLEAR_CART
}

export type CartAction =
   | AddProductToCartAction
   | DeleteProductFromCardAction
   | ToggleLoadingAction
   | DecreaseProductCountAction
   | IncreaseProductCountAction
   | ClearCartAction
