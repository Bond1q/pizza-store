export interface ProductsState {
   products: Product[]
   isLoading: boolean
}

export interface Product {
   name: string
   price: number
   ingradients?: string[]
   img: string
   id: string
}

export enum ProductsActionTypes {
   SET_PRODUCTS = 'SET_PRODUCTS',
   TOGGLE_LOADING = 'TOGGLE_PRODUCT_LOADING',
}

export interface SetProductsAction {
   type: ProductsActionTypes.SET_PRODUCTS
   products: Product[]
}

export interface ToggleLoadingAction {
   type: ProductsActionTypes.TOGGLE_LOADING
   isLoading: boolean
}

export type ProductsAction = SetProductsAction | ToggleLoadingAction

export enum GetProductsTypes {
   PIZZAS = 'pizzas',
   DRINKS = 'drinks',
}
