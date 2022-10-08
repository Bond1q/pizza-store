import { Product } from './products'

export interface CartState {
   totalPrice: number
   productsCount: number
   products: UnorderedProducts[]
}

export interface UnorderedProducts {
   name: string
   price: number
   img: string
   id: string
   count: number
}

export interface AdditionProductToCart {
   product: Product
   count: number
}
export interface DeletionProductFromCart {
   id: string
}

export interface ChangeProductCountInCart {
   id: string
}
